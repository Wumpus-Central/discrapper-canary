n.d(t, { Z: () => z }), n(388685), n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(846519),
    l = n(570140),
    c = n(274616),
    u = n(57513),
    d = n(51025),
    f = n(812206),
    p = n(695346),
    _ = n(581883),
    m = n(283595),
    h = n(417363),
    g = n(391690),
    E = n(70956),
    b = n(780570),
    y = n(804739);
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
let v = new Set(),
    S = {},
    I = new Set(),
    T = {},
    C = new Set(),
    A = {},
    N = 10 * E.Z.Millis.MINUTE,
    P = 6 * E.Z.Millis.HOUR,
    R = 10 * E.Z.Millis.MINUTE,
    w = new s.V7();
function D(e) {
    w.start(e + Math.random() * N, c.o);
}
function x() {
    return !p.bm.getSetting() && (D(P), L());
}
function L() {
    if (!(0, y.Q)() || p.bm.getSetting()) return !1;
    let e = m.Z.entitledBranchIds,
        t = [];
    for (let n of e) A.hasOwnProperty(n) || ((A[n] = null), t.push(n));
    if (0 === t.length) return !1;
    l.Z.wait(() => c.o(t));
}
function j() {
    if (!(0, y.Q)()) return !1;
    for (let e of C) {
        let { applicationId: t, branchId: n } = (0, b.CP)(e);
        null != f.Z.getApplication(t) && (C.delete(e), M(t, n));
    }
}
function M(e, t) {
    if (null != S[t] && g.Z.shouldBeInstalled(e, t)) {
        let n = S[t],
            r = n.manifestIds,
            i = h.Z.getState(e, t);
        null != i &&
            i.shouldPatch &&
            (i.buildId !== n.id || !a().isEqual(i.manifestIds, r)) &&
            l.Z.wait(() => {
                let i = f.Z.getApplication(e);
                null != i ? (C.delete((0, b.Tu)(e, t)), (0, d.li)(i, t, n.id, r, !0)) : C.add((0, b.Tu)(e, t));
            });
    }
}
function k(e) {
    let { branchId: t } = e;
    v.add(t);
}
function U(e) {
    let { applicationId: t, branchId: n, locale: r, build: i } = e;
    v.delete(n);
    let a = i.manifests.map((e) => {
            let { id: t } = e;
            return t;
        }),
        o = i.id;
    I.delete(n),
        (S[n] = {
            id: o,
            applicationId: t,
            branchId: n,
            locale: r,
            manifestIds: a,
        }),
        M(t, n);
}
function G(e) {
    let { branchId: t } = e;
    v.delete(t), I.add(t);
}
function Z(e) {
    let { buildId: t } = e;
    T.hasOwnProperty(t) || (T[t] = null);
}
function F(e) {
    let { buildId: t, sizeKB: n } = e;
    T[t] = n;
}
function B(e) {
    let { buildId: t } = e;
    null == T[t] && delete T[t];
}
function V(e) {
    let { branches: t } = e,
        n = {};
    for (let e in m.Z.libraryApplications) {
        let t = m.Z.libraryApplications[e];
        n[t.branchId] = t;
    }
    for (let e of t) {
        let { id: t, liveBuildId: r } = e;
        if (r !== A[t]) {
            let e = n[t];
            null != e && l.Z.wait(() => u.l(e.id, e.branchId, !0));
        }
        A[t] = r;
    }
    D(P);
}
function H() {
    D(R);
}
function Y() {
    w.stop();
}
function W(e) {
    let { entitlements: t } = e;
    if (!(0, y.Q)()) return !1;
    let n = new Set();
    for (let e of t) n.add(e.application_id);
    for (let e in m.Z.libraryApplications) {
        let t = m.Z.libraryApplications[e];
        n.has(t.id) && (0, b.Je)(t) && l.Z.wait(() => u.l(t.id, t.branchId));
    }
}
class K extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([m.Z], L), this.waitFor(f.Z, h.Z, g.Z, m.Z, _.Z);
    }
    getTargetBuildId(e, t) {
        return null == S[t] ? null : S[t].id;
    }
    getTargetManifests(e, t) {
        return null == S[t] ? null : S[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return I.has(t);
    }
    isFetching(e, t) {
        return v.has(t);
    }
    needsToFetchBuildSize(e) {
        return !T.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return T[e];
    }
}
O(K, "displayName", "ApplicationBuildStore");
let z = new K(l.Z, {
    CONNECTION_OPEN: x,
    GAMES_DATABASE_UPDATE: j,
    APPLICATION_BUILD_FETCH_START: k,
    APPLICATION_BUILD_FETCH_SUCCESS: U,
    APPLICATION_BUILD_NOT_FOUND: G,
    APPLICATION_BUILD_SIZE_FETCH_START: Z,
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: F,
    APPLICATION_BUILD_SIZE_FETCH_FAIL: B,
    APPLICATION_BRANCHES_FETCH_SUCCESS: V,
    APPLICATION_BRANCHES_FETCH_FAIL: H,
    CONNECTION_CLOSED: Y,
    LOGOUT: Y,
    SKU_PURCHASE_SUCCESS: W,
});
