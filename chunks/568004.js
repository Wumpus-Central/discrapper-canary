"use strict";
n.d(t, { A: () => U }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(451988),
    o = n(73153),
    l = n(781763),
    u = n(356645),
    d = n(92077),
    c = n(587895),
    _ = n(253932),
    f = n(617617),
    E = n(189081),
    h = n(194871),
    p = n(775228),
    m = n(927813),
    g = n(674378),
    A = n(144914);
let I = new Set(),
    T = {},
    S = new Set(),
    y = {},
    N = new Set(),
    O = {},
    R = 10 * m.A.Millis.MINUTE,
    v = 6 * m.A.Millis.HOUR,
    C = 10 * m.A.Millis.MINUTE,
    b = new a.Ep();
function D(e) {
    b.start(e + Math.random() * R, l.r);
}
function L() {
    if (!(0, A.S)() || _.l_.getSetting()) return !1;
    let e = E.A.entitledBranchIds,
        t = [];
    for (let n of e) O.hasOwnProperty(n) || ((O[n] = null), t.push(n));
    if (0 === t.length) return !1;
    o.h.wait(() => l.r(t));
}
function w(e, t) {
    if (null != T[t] && p.A.shouldBeInstalled(e, t)) {
        let n = T[t],
            r = n.manifestIds,
            s = h.A.getState(e, t);
        null != s &&
            s.shouldPatch &&
            (s.buildId !== n.id || !i().isEqual(s.manifestIds, r)) &&
            o.h.wait(() => {
                let i = c.A.getApplication(e);
                null != i ? (N.delete((0, g.gW)(e, t)), (0, d.K3)(i, t, n.id, r, !0)) : N.add((0, g.gW)(e, t));
            });
    }
}
function M() {
    b.stop();
}
class P extends s.Ay.Store {
    static displayName = "ApplicationBuildStore";
    initialize() {
        this.syncWith([E.A], L), this.waitFor(c.A, h.A, p.A, E.A, f.A);
    }
    getTargetBuildId(e, t) {
        return null == T[t] ? null : T[t].id;
    }
    getTargetManifests(e, t) {
        return null == T[t] ? null : T[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return S.has(t);
    }
    isFetching(e, t) {
        return I.has(t);
    }
    needsToFetchBuildSize(e) {
        return !y.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return y[e];
    }
}
let U = new P(o.h, {
    CONNECTION_OPEN: function () {
        return !_.l_.getSetting() && (D(v), L());
    },
    GAMES_DATABASE_UPDATE: function () {
        if (!(0, A.S)()) return !1;
        for (let e of N) {
            let { applicationId: t, branchId: n } = (0, g.r0)(e);
            null != c.A.getApplication(t) && (N.delete(e), w(t, n));
        }
    },
    APPLICATION_BUILD_FETCH_START: function (e) {
        let { branchId: t } = e;
        I.add(t);
    },
    APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branchId: n, locale: r, build: i } = e;
        I.delete(n);
        let s = i.manifests.map((e) => {
                let { id: t } = e;
                return t;
            }),
            a = i.id;
        S.delete(n), (T[n] = { id: a, applicationId: t, branchId: n, locale: r, manifestIds: s }), w(t, n);
    },
    APPLICATION_BUILD_NOT_FOUND: function (e) {
        let { branchId: t } = e;
        I.delete(t), S.add(t);
    },
    APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
        let { buildId: t } = e;
        y.hasOwnProperty(t) || (y[t] = null);
    },
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
        let { buildId: t, sizeKB: n } = e;
        y[t] = n;
    },
    APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
        let { buildId: t } = e;
        null == y[t] && delete y[t];
    },
    APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { branches: t } = e,
            n = {};
        for (let e in E.A.libraryApplications) {
            let t = E.A.libraryApplications[e];
            n[t.branchId] = t;
        }
        for (let e of t) {
            let { id: t, liveBuildId: r } = e;
            if (r !== O[t]) {
                let e = n[t];
                null != e && o.h.wait(() => u.n(e.id, e.branchId, !0));
            }
            O[t] = r;
        }
        D(v);
    },
    APPLICATION_BRANCHES_FETCH_FAIL: function () {
        D(C);
    },
    CONNECTION_CLOSED: M,
    LOGOUT: M,
    SKU_PURCHASE_SUCCESS: function (e) {
        let { entitlements: t } = e;
        if (!(0, A.S)()) return !1;
        let n = new Set();
        for (let e of t) n.add(e.application_id);
        for (let e in E.A.libraryApplications) {
            let t = E.A.libraryApplications[e];
            n.has(t.id) && (0, g.XZ)(t) && o.h.wait(() => u.n(t.id, t.branchId));
        }
    },
});
