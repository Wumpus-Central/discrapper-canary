n.d(t, { A: () => w }), n(321073);
var i = n(735438),
    l = n.n(i),
    a = n(17928),
    r = n(451988),
    s = n(228366),
    o = n(712963),
    d = n(356645),
    u = n(92077),
    c = n(587895),
    h = n(253932),
    E = n(617617),
    A = n(189081),
    _ = n(340829),
    p = n(775228),
    g = n(927813),
    f = n(674378),
    I = n(144914);
let S = new Set(),
    T = {},
    m = new Set(),
    C = {},
    O = new Set(),
    N = {},
    y = 10 * g.A.Millis.MINUTE,
    R = 6 * g.A.Millis.HOUR,
    L = 10 * g.A.Millis.MINUTE,
    v = new r.Ep();
function D(e) {
    v.start(e + Math.random() * y, o.r);
}
function U() {
    if (!(0, I.S)() || h.l_.getSetting()) return !1;
    let e = A.A.entitledBranchIds,
        t = [];
    for (let n of e) N.hasOwnProperty(n) || ((N[n] = null), t.push(n));
    if (0 === t.length) return !1;
    s.h.wait(() => o.r(t));
}
function P(e, t) {
    if (null != T[t] && p.A.shouldBeInstalled(e, t)) {
        let n = T[t],
            i = n.manifestIds,
            a = _.A.getState(e, t);
        null != a &&
            a.shouldPatch &&
            (a.buildId !== n.id || !l().isEqual(a.manifestIds, i)) &&
            s.h.wait(() => {
                let l = c.A.getApplication(e);
                null != l ? (O.delete((0, f.gW)(e, t)), (0, u.K3)(l, t, n.id, i, !0)) : O.add((0, f.gW)(e, t));
            });
    }
}
function b() {
    v.stop();
}
class M extends a.Ay.Store {
    static displayName = "ApplicationBuildStore";
    initialize() {
        this.syncWith([A.A], U), this.waitFor(c.A, _.A, p.A, A.A, E.A);
    }
    getTargetBuildId(e, t) {
        return null == T[t] ? null : T[t].id;
    }
    getTargetManifests(e, t) {
        return null == T[t] ? null : T[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return m.has(t);
    }
    isFetching(e, t) {
        return S.has(t);
    }
    needsToFetchBuildSize(e) {
        return !C.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return C[e];
    }
}
let w = new M(s.h, {
    CONNECTION_OPEN: function () {
        return !h.l_.getSetting() && (D(R), U());
    },
    GAMES_DATABASE_UPDATE: function () {
        if (!(0, I.S)()) return !1;
        for (let e of O) {
            let { applicationId: t, branchId: n } = (0, f.r0)(e);
            null != c.A.getApplication(t) && (O.delete(e), P(t, n));
        }
    },
    APPLICATION_BUILD_FETCH_START: function (e) {
        let { branchId: t } = e;
        S.add(t);
    },
    APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branchId: n, locale: i, build: l } = e;
        S.delete(n);
        let a = l.manifests.map((e) => {
                let { id: t } = e;
                return t;
            }),
            r = l.id;
        m.delete(n), (T[n] = { id: r, applicationId: t, branchId: n, locale: i, manifestIds: a }), P(t, n);
    },
    APPLICATION_BUILD_NOT_FOUND: function (e) {
        let { branchId: t } = e;
        S.delete(t), m.add(t);
    },
    APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
        let { buildId: t } = e;
        C.hasOwnProperty(t) || (C[t] = null);
    },
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
        let { buildId: t, sizeKB: n } = e;
        C[t] = n;
    },
    APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
        let { buildId: t } = e;
        null == C[t] && delete C[t];
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
    CONNECTION_CLOSED: b,
    LOGOUT: b,
    SKU_PURCHASE_SUCCESS: function (e) {
        let { entitlements: t } = e;
        if (!(0, I.S)()) return !1;
        let n = new Set();
        for (let e of t) n.add(e.application_id);
        for (let e in A.A.libraryApplications) {
            let t = A.A.libraryApplications[e];
            n.has(t.id) && (0, f.XZ)(t) && s.h.wait(() => d.n(t.id, t.branchId));
        }
    },
});
