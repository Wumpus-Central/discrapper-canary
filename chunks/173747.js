n.d(t, { Z: () => Y }), n(47120), n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(846519),
    l = n(570140),
    c = n(274616),
    u = n(57513),
    d = n(51025),
    f = n(812206),
    p = n(283595),
    _ = n(417363),
    h = n(391690),
    m = n(70956),
    g = n(780570),
    E = n(804739);
function v(e, t, n) {
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
let b = new Set(),
    y = {},
    O = new Set(),
    S = {},
    I = new Set(),
    T = {},
    N = 10 * m.Z.Millis.MINUTE,
    A = 6 * m.Z.Millis.HOUR,
    C = 10 * m.Z.Millis.MINUTE,
    R = new s.V7();
function P(e) {
    R.start(e + Math.random() * N, c.o);
}
function w() {
    return P(A), D();
}
function D() {
    if (!(0, E.Q)()) return !1;
    let e = p.Z.entitledBranchIds,
        t = [];
    for (let n of e) T.hasOwnProperty(n) || ((T[n] = null), t.push(n));
    if (0 === t.length) return !1;
    l.Z.wait(() => c.o(t));
}
function x() {
    if (!(0, E.Q)()) return !1;
    for (let e of I) {
        let { applicationId: t, branchId: n } = (0, g.CP)(e);
        null != f.Z.getApplication(t) && (I.delete(e), L(t, n));
    }
}
function L(e, t) {
    if (null != y[t] && h.Z.shouldBeInstalled(e, t)) {
        let n = y[t],
            r = n.manifestIds,
            i = _.Z.getState(e, t);
        null != i &&
            i.shouldPatch &&
            (i.buildId !== n.id || !o().isEqual(i.manifestIds, r)) &&
            l.Z.wait(() => {
                let i = f.Z.getApplication(e);
                null != i ? (I.delete((0, g.Tu)(e, t)), (0, d.li)(i, t, n.id, r, !0)) : I.add((0, g.Tu)(e, t));
            });
    }
}
function M(e) {
    let { branchId: t } = e;
    b.add(t);
}
function k(e) {
    let { applicationId: t, branchId: n, locale: r, build: i } = e;
    b.delete(n);
    let o = i.manifests.map((e) => {
            let { id: t } = e;
            return t;
        }),
        a = i.id;
    O.delete(n),
        (y[n] = {
            id: a,
            applicationId: t,
            branchId: n,
            locale: r,
            manifestIds: o
        }),
        L(t, n);
}
function j(e) {
    let { branchId: t } = e;
    b.delete(t), O.add(t);
}
function U(e) {
    let { buildId: t } = e;
    S.hasOwnProperty(t) || (S[t] = null);
}
function G(e) {
    let { buildId: t, sizeKB: n } = e;
    S[t] = n;
}
function B(e) {
    let { buildId: t } = e;
    null == S[t] && delete S[t];
}
function Z(e) {
    let { branches: t } = e,
        n = {};
    for (let e in p.Z.libraryApplications) {
        let t = p.Z.libraryApplications[e];
        n[t.branchId] = t;
    }
    for (let e of t) {
        let { id: t, liveBuildId: r } = e;
        if (r !== T[t]) {
            let e = n[t];
            null != e && l.Z.wait(() => u.l(e.id, e.branchId, !0));
        }
        T[t] = r;
    }
    P(A);
}
function F() {
    P(C);
}
function V() {
    R.stop();
}
function H(e) {
    let { entitlements: t } = e;
    if (!(0, E.Q)()) return !1;
    let n = new Set();
    for (let e of t) n.add(e.application_id);
    for (let e in p.Z.libraryApplications) {
        let t = p.Z.libraryApplications[e];
        n.has(t.id) && (0, g.Je)(t) && l.Z.wait(() => u.l(t.id, t.branchId));
    }
}
class W extends (r = a.ZP.Store) {
    initialize() {
        this.syncWith([p.Z], D), this.waitFor(_.Z, p.Z, f.Z);
    }
    getTargetBuildId(e, t) {
        return null == y[t] ? null : y[t].id;
    }
    getTargetManifests(e, t) {
        return null == y[t] ? null : y[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return O.has(t);
    }
    isFetching(e, t) {
        return b.has(t);
    }
    needsToFetchBuildSize(e) {
        return !S.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return S[e];
    }
}
v(W, 'displayName', 'ApplicationBuildStore');
let Y = new W(l.Z, {
    CONNECTION_OPEN: w,
    GAMES_DATABASE_UPDATE: x,
    APPLICATION_BUILD_FETCH_START: M,
    APPLICATION_BUILD_FETCH_SUCCESS: k,
    APPLICATION_BUILD_NOT_FOUND: j,
    APPLICATION_BUILD_SIZE_FETCH_START: U,
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: G,
    APPLICATION_BUILD_SIZE_FETCH_FAIL: B,
    APPLICATION_BRANCHES_FETCH_SUCCESS: Z,
    APPLICATION_BRANCHES_FETCH_FAIL: F,
    CONNECTION_CLOSED: V,
    LOGOUT: V,
    SKU_PURCHASE_SUCCESS: H
});
