n.d(t, { Z: () => b }), n(388685), n(467055);
var r,
    i,
    l,
    a = n(108131),
    o = n.n(a),
    s = n(442837),
    c = n(570140),
    u = n(314897),
    d = n(626135),
    p = n(981631);
let h = {
        user: {},
        guild: {}
    },
    f = {
        user: {},
        guild: {}
    },
    g = {};
class m extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    processExperimentsMessage(e) {
        var t;
        if (null == e || null == e.header || null == e.body) return !1;
        let n = e.header[1],
            r = e.body[0],
            i = e.body[1];
        if (null == n || null == r || null == i) return !1;
        let l = {
            evaluationId: n,
            experiments: Object.fromEntries(
                (null != (t = e.body[2]) ? t : [])
                    .filter((e) => {
                        let [t, n, r] = e;
                        return null != t && null != n;
                    })
                    .map((e) => {
                        let [t, n, r] = e;
                        return [
                            t,
                            {
                                hashedId: t,
                                config: n,
                                isWarehouseOverride: 1 === r
                            }
                        ];
                    })
            )
        };
        h[r][i] = l;
    }
    registerExperiment(e, t, n) {
        let r = f[t],
            i = {
                id: e,
                kind: t,
                defaultConfig: n
            };
        return (r[e] = i), (g[e] = o().v3(e)), i;
    }
    getAssignedConfig(e, t) {
        var n;
        let r = null == (n = this.getExperimentAssignment(e)) ? void 0 : n.config;
        return null != r && this.isCompatibleConfig(r, t.defaultConfig) ? r : t.defaultConfig;
    }
    getEvaluation(e, t) {
        var n, r;
        return null == (r = h[e]) || null == (n = r[t]) ? void 0 : n.evaluationId;
    }
    trackExposure(e, t, n, r) {
        'user' === t &&
            d.default.track(p.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                evaluation: e,
                experiment: n,
                exposure_location: r,
                unit_type: t
            });
    }
    isCompatibleConfig(e, t) {
        return Object.keys(t).every((t) => t in e);
    }
    getExperimentAssignment(e) {
        var t, n;
        let r = g[e.experimentId];
        return null == (n = h[e.kind]) || null == (t = n[e.unitId]) ? void 0 : t.experiments[r];
    }
    constructor() {
        super(
            c.Z,
            {
                CONNECTION_OPEN: (e) => this.processExperimentsMessage(e.apexUserExperiments),
                CONNECTION_OPEN_STATE_UPDATE: (e) => this.processExperimentsMessage(e.apexUserExperiments)
            },
            c.c.Early
        );
    }
}
(l = 'ApexExperimentStore'),
    (i = 'displayName') in m
        ? Object.defineProperty(m, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[i] = l);
let b = new m();
