n.d(t, { A: () => w }), n(321073);
var i = n(735438),
    r = n.n(i),
    l = n(17928),
    a = n(451988),
    s = n(228366),
    o = n(712963),
    d = n(356645),
    u = n(92077),
    c = n(587895),
    h = n(253932),
    E = n(617617),
    _ = n(189081),
    p = n(340829),
    A = n(775228),
    f = n(927813),
    g = n(674378),
    I = n(144914);
let T = new Set(),
    S = {},
    m = new Set(),
    O = {},
    C = new Set(),
    N = {},
    y = 10 * f.A.Millis.MINUTE,
    R = 6 * f.A.Millis.HOUR,
    L = 10 * f.A.Millis.MINUTE,
    v = new a.Ep();
function D(e) {
    v.start(e + Math.random() * y, o.r);
}
function b() {
    if (!(0, I.S)() || h.l_.getSetting()) return !1;
    let e = _.A.entitledBranchIds,
        t = [];
    for (let n of e) N.hasOwnProperty(n) || ((N[n] = null), t.push(n));
    if (0 === t.length) return !1;
    s.h.wait(() => o.r(t));
}
function U(e, t) {
    if (null != S[t] && A.A.shouldBeInstalled(e, t)) {
        let n = S[t],
            i = n.manifestIds,
            l = p.A.getState(e, t);
        null != l &&
            l.shouldPatch &&
            (l.buildId !== n.id || !r().isEqual(l.manifestIds, i)) &&
            s.h.wait(() => {
                let r = c.A.getApplication(e);
                null != r ? (C.delete((0, g.gW)(e, t)), (0, u.K3)(r, t, n.id, i, !0)) : C.add((0, g.gW)(e, t));
            });
    }
}
function P() {
    v.stop();
}
class M extends l.Ay.Store {
    static displayName = "ApplicationBuildStore";
    initialize() {
        this.syncWith([_.A], b), this.waitFor(c.A, p.A, A.A, _.A, E.A);
    }
    getTargetBuildId(e, t) {
        return null == S[t] ? null : S[t].id;
    }
    getTargetManifests(e, t) {
        return null == S[t] ? null : S[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return m.has(t);
    }
    isFetching(e, t) {
        return T.has(t);
    }
    needsToFetchBuildSize(e) {
        return !O.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return O[e];
    }
}
let w = new M(s.h, {
    CONNECTION_OPEN: function () {
        return !h.l_.getSetting() && (D(R), b());
    },
    GAMES_DATABASE_UPDATE: function () {
        if (!(0, I.S)()) return !1;
        for (let e of C) {
            let { applicationId: t, branchId: n } = (0, g.r0)(e);
            null != c.A.getApplication(t) && (C.delete(e), U(t, n));
        }
    },
    APPLICATION_BUILD_FETCH_START: function (e) {
        let { branchId: t } = e;
        T.add(t);
    },
    APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branchId: n, locale: i, build: r } = e;
        T.delete(n);
        let l = r.manifests.map((e) => {
                let { id: t } = e;
                return t;
            }),
            a = r.id;
        m.delete(n), (S[n] = { id: a, applicationId: t, branchId: n, locale: i, manifestIds: l }), U(t, n);
    },
    APPLICATION_BUILD_NOT_FOUND: function (e) {
        let { branchId: t } = e;
        T.delete(t), m.add(t);
    },
    APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
        let { buildId: t } = e;
        O.hasOwnProperty(t) || (O[t] = null);
    },
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
        let { buildId: t, sizeKB: n } = e;
        O[t] = n;
    },
    APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
        let { buildId: t } = e;
        null == O[t] && delete O[t];
    },
    APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { branches: t } = e,
            n = {};
        for (let e in _.A.libraryApplications) {
            let t = _.A.libraryApplications[e];
            n[t.branchId] = t;
        }
        for (let e of t) {
            let { id: t, liveBuildId: i } = e;
            if (i !== N[t]) {
                let e = n[t];
                null != e && s.h.wait(() => d.n(e.id, e.branchId, !0));
            }
            N[t] = i;
        }
        D(R);
    },
    APPLICATION_BRANCHES_FETCH_FAIL: function () {
        D(L);
    },
    CONNECTION_CLOSED: P,
    LOGOUT: P,
    SKU_PURCHASE_SUCCESS: function (e) {
        let { entitlements: t } = e;
        if (!(0, I.S)()) return !1;
        let n = new Set();
        for (let e of t) n.add(e.application_id);
        for (let e in _.A.libraryApplications) {
            let t = _.A.libraryApplications[e];
            n.has(t.id) && (0, g.XZ)(t) && s.h.wait(() => d.n(t.id, t.branchId));
        }
    },
});
