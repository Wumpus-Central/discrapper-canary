(n.d(t, { Z: () => z }), n(388685), n(539854));
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
    _ = n(695346),
    p = n(581883),
    h = n(283595),
    m = n(417363),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = new Set(),
    I = {},
    T = new Set(),
    S = {},
    A = new Set(),
    N = {},
    C = 10 * E.Z.Millis.MINUTE,
    R = 6 * E.Z.Millis.HOUR,
    P = 10 * E.Z.Millis.MINUTE,
    w = new s.V7();
function D(e) {
    w.start(e + Math.random() * C, c.o);
}
function L() {
    return !_.bm.getSetting() && (D(R), x());
}
function x() {
    if (!(0, y.Q)() || _.bm.getSetting()) return !1;
    let e = h.Z.entitledBranchIds,
        t = [];
    for (let n of e) N.hasOwnProperty(n) || ((N[n] = null), t.push(n));
    if (0 === t.length) return !1;
    l.Z.wait(() => c.o(t));
}
function M() {
    if (!(0, y.Q)()) return !1;
    for (let e of A) {
        let { applicationId: t, branchId: n } = (0, b.CP)(e);
        null != f.Z.getApplication(t) && (A.delete(e), k(t, n));
    }
}
function k(e, t) {
    if (null != I[t] && g.Z.shouldBeInstalled(e, t)) {
        let n = I[t],
            r = n.manifestIds,
            i = m.Z.getState(e, t);
        null != i &&
            i.shouldPatch &&
            (i.buildId !== n.id || !a().isEqual(i.manifestIds, r)) &&
            l.Z.wait(() => {
                let i = f.Z.getApplication(e);
                null != i ? (A.delete((0, b.Tu)(e, t)), (0, d.li)(i, t, n.id, r, !0)) : A.add((0, b.Tu)(e, t));
            });
    }
}
function j(e) {
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
    (T.delete(n),
        (I[n] = {
            id: o,
            applicationId: t,
            branchId: n,
            locale: r,
            manifestIds: a
        }),
        k(t, n));
}
function G(e) {
    let { branchId: t } = e;
    (v.delete(t), T.add(t));
}
function B(e) {
    let { buildId: t } = e;
    S.hasOwnProperty(t) || (S[t] = null);
}
function V(e) {
    let { buildId: t, sizeKB: n } = e;
    S[t] = n;
}
function F(e) {
    let { buildId: t } = e;
    null == S[t] && delete S[t];
}
function Z(e) {
    let { branches: t } = e,
        n = {};
    for (let e in h.Z.libraryApplications) {
        let t = h.Z.libraryApplications[e];
        n[t.branchId] = t;
    }
    for (let e of t) {
        let { id: t, liveBuildId: r } = e;
        if (r !== N[t]) {
            let e = n[t];
            null != e && l.Z.wait(() => u.l(e.id, e.branchId, !0));
        }
        N[t] = r;
    }
    D(R);
}
function H() {
    D(P);
}
function Y() {
    w.stop();
}
function W(e) {
    let { entitlements: t } = e;
    if (!(0, y.Q)()) return !1;
    let n = new Set();
    for (let e of t) n.add(e.application_id);
    for (let e in h.Z.libraryApplications) {
        let t = h.Z.libraryApplications[e];
        n.has(t.id) && (0, b.Je)(t) && l.Z.wait(() => u.l(t.id, t.branchId));
    }
}
class K extends (r = o.ZP.Store) {
    initialize() {
        (this.syncWith([h.Z], x), this.waitFor(m.Z, h.Z, f.Z, p.Z));
    }
    getTargetBuildId(e, t) {
        return null == I[t] ? null : I[t].id;
    }
    getTargetManifests(e, t) {
        return null == I[t] ? null : I[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return T.has(t);
    }
    isFetching(e, t) {
        return v.has(t);
    }
    needsToFetchBuildSize(e) {
        return !S.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return S[e];
    }
}
O(K, 'displayName', 'ApplicationBuildStore');
let z = new K(l.Z, {
    CONNECTION_OPEN: L,
    GAMES_DATABASE_UPDATE: M,
    APPLICATION_BUILD_FETCH_START: j,
    APPLICATION_BUILD_FETCH_SUCCESS: U,
    APPLICATION_BUILD_NOT_FOUND: G,
    APPLICATION_BUILD_SIZE_FETCH_START: B,
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: V,
    APPLICATION_BUILD_SIZE_FETCH_FAIL: F,
    APPLICATION_BRANCHES_FETCH_SUCCESS: Z,
    APPLICATION_BRANCHES_FETCH_FAIL: H,
    CONNECTION_CLOSED: Y,
    LOGOUT: Y,
    SKU_PURCHASE_SUCCESS: W
});
