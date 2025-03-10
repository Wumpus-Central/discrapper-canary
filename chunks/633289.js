var r,
    i = n(442837),
    l = n(570140),
    o = n(523605),
    a = n(466008);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class c {
    asDefault(e, t, n) {
        (this.id = e), (this.unitId = n), (this.kind = t), (this.assignment = new o.T({})), (this.overrides = {});
    }
    addOverride(e) {
        this.overrides[e.bucket] = new o.g(e);
    }
    constructor(e) {
        s(this, 'id', void 0), s(this, 'unitId', void 0), s(this, 'assignment', void 0), s(this, 'kind', void 0), s(this, 'overrides', void 0), s(this, 'override', void 0), (this.id = e.id), (this.unitId = e.unitId), (this.kind = e.kind), (this.assignment = new o.T(e.config)), (this.overrides = {});
    }
}
class u extends (r = i.ZP.Store) {
    setCanUseOverrides(e) {
        this.canUseOverrides = e;
    }
    getCanUseOverrides() {
        return this.canUseOverrides;
    }
    addExperiment(e) {
        var t, n;
        (this.experiments[e.kind] = null !== (t = this.experiments[e.kind]) && void 0 !== t ? t : {}), (this.experiments[e.kind][e.unitId] = null !== (n = this.experiments[e.kind][e.unitId]) && void 0 !== n ? n : {}), (this.experiments[e.kind][e.unitId][e.id] = new c(e));
    }
    addOverride(e) {
        let t = this.getExperiment(e);
        null == t || t.addOverride(e);
    }
    hasLoadedExperiments(e) {
        return void 0 !== this.experiments[e];
    }
    getExperiments(e, t) {
        var n, r;
        return null !== (r = null === (n = this.experiments[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : {};
    }
    getExperiment(e) {
        var t, n;
        return null === (n = this.experiments[e.kind]) || void 0 === n ? void 0 : null === (t = n[e.unitId]) || void 0 === t ? void 0 : t[e.id];
    }
    constructor() {
        super(l.Z, { CONNECTION_OPEN: d }, l.c.Early), s(this, 'canUseOverrides', !1), s(this, 'experiments', {});
    }
}
function d(e) {
    p.setCanUseOverrides((0, a.N)(e.user));
    let { apexExperiments: t } = e;
    t.forEach((e) => {
        p.addExperiment(e);
    });
}
s(u, 'displayName', 'ApexExperimentStore');
let p = new u();
