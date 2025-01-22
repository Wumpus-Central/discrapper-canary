var i,
    a = r(47120);
var o = r(653041);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(846519),
    d = r(570140),
    f = r(274616),
    p = r(57513),
    h = r(51025),
    _ = r(812206),
    m = r(283595),
    g = r(417363),
    E = r(391690),
    v = r(70956),
    y = r(780570),
    b = r(804739);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let T = new Set(),
    S = {},
    A = new Set(),
    C = {},
    N = new Set(),
    R = {},
    O = 10 * v.Z.Millis.MINUTE,
    D = 6 * v.Z.Millis.HOUR,
    x = 10 * v.Z.Millis.MINUTE,
    L = new c.V7();
function w(e) {
    L.start(e + Math.random() * O, f.o);
}
function P() {
    return w(D), M();
}
function M() {
    if (!(0, b.Q)()) return !1;
    let e = m.Z.entitledBranchIds,
        n = [];
    for (let r of e) !R.hasOwnProperty(r) && ((R[r] = null), n.push(r));
    if (0 === n.length) return !1;
    d.Z.wait(() => f.o(n));
}
function k() {
    if (!(0, b.Q)()) return !1;
    for (let e of N) {
        let { applicationId: n, branchId: r } = (0, y.CP)(e);
        null != _.Z.getApplication(n) && (N.delete(e), U(n, r));
    }
}
function U(e, n) {
    if (null != S[n] && E.Z.shouldBeInstalled(e, n)) {
        let r = S[n],
            i = r.manifestIds,
            a = g.Z.getState(e, n);
        null != a &&
            a.shouldPatch &&
            (a.buildId !== r.id || !l().isEqual(a.manifestIds, i)) &&
            d.Z.wait(() => {
                let a = _.Z.getApplication(e);
                null != a ? (N.delete((0, y.Tu)(e, n)), (0, h.li)(a, n, r.id, i, !0)) : N.add((0, y.Tu)(e, n));
            });
    }
}
function B(e) {
    let { branchId: n } = e;
    T.add(n);
}
function G(e) {
    let { applicationId: n, branchId: r, locale: i, build: a } = e;
    T.delete(r);
    let o = a.manifests.map((e) => {
            let { id: n } = e;
            return n;
        }),
        s = a.id;
    A.delete(r),
        (S[r] = {
            id: s,
            applicationId: n,
            branchId: r,
            locale: i,
            manifestIds: o
        }),
        U(n, r);
}
function Z(e) {
    let { branchId: n } = e;
    T.delete(n), A.add(n);
}
function F(e) {
    let { buildId: n } = e;
    !C.hasOwnProperty(n) && (C[n] = null);
}
function V(e) {
    let { buildId: n, sizeKB: r } = e;
    C[n] = r;
}
function j(e) {
    let { buildId: n } = e;
    null == C[n] && delete C[n];
}
function H(e) {
    let { branches: n } = e,
        r = {};
    for (let e in m.Z.libraryApplications) {
        let n = m.Z.libraryApplications[e];
        r[n.branchId] = n;
    }
    for (let e of n) {
        let { id: n, liveBuildId: i } = e;
        if (i !== R[n]) {
            let e = r[n];
            null != e && d.Z.wait(() => p.l(e.id, e.branchId, !0));
        }
        R[n] = i;
    }
    w(D);
}
function Y() {
    w(x);
}
function W() {
    L.stop();
}
function K(e) {
    let { entitlements: n } = e;
    if (!(0, b.Q)()) return !1;
    let r = new Set();
    for (let e of n) r.add(e.application_id);
    for (let e in m.Z.libraryApplications) {
        let n = m.Z.libraryApplications[e];
        r.has(n.id) && (0, y.Je)(n) && d.Z.wait(() => p.l(n.id, n.branchId));
    }
}
class z extends (i = u.ZP.Store) {
    initialize() {
        this.syncWith([m.Z], M), this.waitFor(g.Z, m.Z, _.Z);
    }
    getTargetBuildId(e, n) {
        return null == S[n] ? null : S[n].id;
    }
    getTargetManifests(e, n) {
        return null == S[n] ? null : S[n].manifestIds;
    }
    hasNoBuild(e, n) {
        return A.has(n);
    }
    isFetching(e, n) {
        return T.has(n);
    }
    needsToFetchBuildSize(e) {
        return !C.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return C[e];
    }
}
I(z, 'displayName', 'ApplicationBuildStore'),
    (n.Z = new z(d.Z, {
        CONNECTION_OPEN: P,
        GAMES_DATABASE_UPDATE: k,
        APPLICATION_BUILD_FETCH_START: B,
        APPLICATION_BUILD_FETCH_SUCCESS: G,
        APPLICATION_BUILD_NOT_FOUND: Z,
        APPLICATION_BUILD_SIZE_FETCH_START: F,
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: V,
        APPLICATION_BUILD_SIZE_FETCH_FAIL: j,
        APPLICATION_BRANCHES_FETCH_SUCCESS: H,
        APPLICATION_BRANCHES_FETCH_FAIL: Y,
        CONNECTION_CLOSED: W,
        LOGOUT: W,
        SKU_PURCHASE_SUCCESS: K
    }));
