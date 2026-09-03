n.d(t, { A: () => w }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(451988),
    l = n(228366),
    o = n(712963),
    d = n(356645),
    c = n(92077),
    u = n(587895),
    _ = n(885386),
    E = n(617617),
    A = n(189081),
    h = n(340829),
    I = n(775228),
    f = n(927813),
    p = n(674378),
    T = n(144914);
let m = new Set(),
    g = {},
    S = new Set(),
    N = {},
    C = new Set(),
    O = {},
    R = 10 * f.A.Millis.MINUTE,
    L = 6 * f.A.Millis.HOUR,
    y = 10 * f.A.Millis.MINUTE,
    D = new s.Ep();
function v(e) {
    D.start(e + Math.random() * R, o.r);
}
function b() {
    if (!(0, T.S)() || _.l_.getSetting()) return !1;
    let e = A.A.entitledBranchIds,
        t = [];
    for (let n of e) O.hasOwnProperty(n) || ((O[n] = null), t.push(n));
    if (0 === t.length) return !1;
    l.h.wait(() => o.r(t));
}
function M(e, t) {
    if (null != g[t] && I.A.shouldBeInstalled(e, t)) {
        let n = g[t],
            i = n.manifestIds,
            a = h.A.getState(e, t);
        null != a &&
            a.shouldPatch &&
            (a.buildId !== n.id || !r().isEqual(a.manifestIds, i)) &&
            l.h.wait(() => {
                let r = u.A.getApplication(e);
                null != r ? (C.delete((0, p.gW)(e, t)), (0, c.K3)(r, t, n.id, i, !0)) : C.add((0, p.gW)(e, t));
            });
    }
}
function P() {
    D.stop();
}
class U extends a.Ay.Store {
    static displayName = "ApplicationBuildStore";
    initialize() {
        this.syncWith([A.A], b), this.waitFor(u.A, h.A, I.A, A.A, E.A);
    }
    getTargetBuildId(e, t) {
        return null == g[t] ? null : g[t].id;
    }
    getTargetManifests(e, t) {
        return null == g[t] ? null : g[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return S.has(t);
    }
    isFetching(e, t) {
        return m.has(t);
    }
    needsToFetchBuildSize(e) {
        return !N.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return N[e];
    }
}
let w = new U(l.h, {
    CONNECTION_OPEN: function () {
        return !_.l_.getSetting() && (v(L), b());
    },
    GAMES_DATABASE_UPDATE: function () {
        if (!(0, T.S)()) return !1;
        for (let e of C) {
            let { applicationId: t, branchId: n } = (0, p.r0)(e);
            null != u.A.getApplication(t) && (C.delete(e), M(t, n));
        }
    },
    APPLICATION_BUILD_FETCH_START: function (e) {
        let { branchId: t } = e;
        m.add(t);
    },
    APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branchId: n, locale: i, build: r } = e;
        m.delete(n);
        let a = r.manifests.map((e) => {
                let { id: t } = e;
                return t;
            }),
            s = r.id;
        S.delete(n), (g[n] = { id: s, applicationId: t, branchId: n, locale: i, manifestIds: a }), M(t, n);
    },
    APPLICATION_BUILD_NOT_FOUND: function (e) {
        let { branchId: t } = e;
        m.delete(t), S.add(t);
    },
    APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
        let { buildId: t } = e;
        N.hasOwnProperty(t) || (N[t] = null);
    },
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
        let { buildId: t, sizeKB: n } = e;
        N[t] = n;
    },
    APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
        let { buildId: t } = e;
        null == N[t] && delete N[t];
    },
    APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { branches: t } = e,
            n = {};
        for (let e in A.A.libraryApplications) {
            let t = A.A.libraryApplications[e];
            n[t.branchId] = t;
        }
        for (let e of t) {
            let { id: t, liveBuildId: i } = e;
            if (i !== O[t]) {
                let e = n[t];
                null != e && l.h.wait(() => d.n(e.id, e.branchId, !0));
            }
            O[t] = i;
        }
        v(L);
    },
    APPLICATION_BRANCHES_FETCH_FAIL: function () {
        v(y);
    },
    CONNECTION_CLOSED: P,
    LOGOUT: P,
    SKU_PURCHASE_SUCCESS: function (e) {
        let { entitlements: t } = e;
        if (!(0, T.S)()) return !1;
        let n = new Set();
        for (let e of t) n.add(e.application_id);
        for (let e in A.A.libraryApplications) {
            let t = A.A.libraryApplications[e];
            n.has(t.id) && (0, p.XZ)(t) && l.h.wait(() => d.n(t.id, t.branchId));
        }
    },
});
