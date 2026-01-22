n.d(t, { A: () => q }), n(896048), n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    l = n(73153),
    c = n(781763),
    u = n(356645),
    d = n(92077),
    f = n(587895),
    p = n(253932),
    _ = n(617617),
    h = n(189081),
    m = n(194871),
    g = n(775228),
    E = n(927813),
    b = n(674378),
    y = n(144914);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let A = new Set(),
    v = {},
    S = new Set(),
    I = {},
    T = new Set(),
    C = {},
    N = 10 * E.A.Millis.MINUTE,
    R = 6 * E.A.Millis.HOUR,
    w = 10 * E.A.Millis.MINUTE,
    P = new o.Ep();
function D(e) {
    P.start(e + Math.random() * N, c.r);
}
function x() {
    return !p.l_.getSetting() && (D(R), L());
}
function L() {
    if (!(0, y.S)() || p.l_.getSetting()) return !1;
    let e = h.A.entitledBranchIds,
        t = [];
    for (let n of e) C.hasOwnProperty(n) || ((C[n] = null), t.push(n));
    if (0 === t.length) return !1;
    l.h.wait(() => c.r(t));
}
function j() {
    if (!(0, y.S)()) return !1;
    for (let e of T) {
        let { applicationId: t, branchId: n } = (0, b.r0)(e);
        null != f.A.getApplication(t) && (T.delete(e), M(t, n));
    }
}
function M(e, t) {
    if (null != v[t] && g.A.shouldBeInstalled(e, t)) {
        let n = v[t],
            r = n.manifestIds,
            i = m.A.getState(e, t);
        null != i &&
            i.shouldPatch &&
            (i.buildId !== n.id || !a().isEqual(i.manifestIds, r)) &&
            l.h.wait(() => {
                let i = f.A.getApplication(e);
                null != i ? (T.delete((0, b.gW)(e, t)), (0, d.K3)(i, t, n.id, r, !0)) : T.add((0, b.gW)(e, t));
            });
    }
}
function k(e) {
    let { branchId: t } = e;
    A.add(t);
}
function U(e) {
    let { applicationId: t, branchId: n, locale: r, build: i } = e;
    A.delete(n);
    let a = i.manifests.map((e) => {
            let { id: t } = e;
            return t;
        }),
        s = i.id;
    S.delete(n),
        (v[n] = {
            id: s,
            applicationId: t,
            branchId: n,
            locale: r,
            manifestIds: a,
        }),
        M(t, n);
}
function G(e) {
    let { branchId: t } = e;
    A.delete(t), S.add(t);
}
function V(e) {
    let { buildId: t } = e;
    I.hasOwnProperty(t) || (I[t] = null);
}
function F(e) {
    let { buildId: t, sizeKB: n } = e;
    I[t] = n;
}
function B(e) {
    let { buildId: t } = e;
    null == I[t] && delete I[t];
}
function H(e) {
    let { branches: t } = e,
        n = {};
    for (let e in h.A.libraryApplications) {
        let t = h.A.libraryApplications[e];
        n[t.branchId] = t;
    }
    for (let e of t) {
        let { id: t, liveBuildId: r } = e;
        if (r !== C[t]) {
            let e = n[t];
            null != e && l.h.wait(() => u.n(e.id, e.branchId, !0));
        }
        C[t] = r;
    }
    D(R);
}
function Y() {
    D(w);
}
function W() {
    P.stop();
}
function K(e) {
    let { entitlements: t } = e;
    if (!(0, y.S)()) return !1;
    let n = new Set();
    for (let e of t) n.add(e.application_id);
    for (let e in h.A.libraryApplications) {
        let t = h.A.libraryApplications[e];
        n.has(t.id) && (0, b.XZ)(t) && l.h.wait(() => u.n(t.id, t.branchId));
    }
}
class z extends (r = s.Ay.Store) {
    initialize() {
        this.syncWith([h.A], L), this.waitFor(f.A, m.A, g.A, h.A, _.A);
    }
    getTargetBuildId(e, t) {
        return null == v[t] ? null : v[t].id;
    }
    getTargetManifests(e, t) {
        return null == v[t] ? null : v[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return S.has(t);
    }
    isFetching(e, t) {
        return A.has(t);
    }
    needsToFetchBuildSize(e) {
        return !I.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return I[e];
    }
}
O(z, "displayName", "ApplicationBuildStore");
let q = new z(l.h, {
    CONNECTION_OPEN: x,
    GAMES_DATABASE_UPDATE: j,
    APPLICATION_BUILD_FETCH_START: k,
    APPLICATION_BUILD_FETCH_SUCCESS: U,
    APPLICATION_BUILD_NOT_FOUND: G,
    APPLICATION_BUILD_SIZE_FETCH_START: V,
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: F,
    APPLICATION_BUILD_SIZE_FETCH_FAIL: B,
    APPLICATION_BRANCHES_FETCH_SUCCESS: H,
    APPLICATION_BRANCHES_FETCH_FAIL: Y,
    CONNECTION_CLOSED: W,
    LOGOUT: W,
    SKU_PURCHASE_SUCCESS: K,
});
