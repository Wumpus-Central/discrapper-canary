n.d(t, { Z: () => W }), n(47120), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(846519),
    l = n(570140),
    u = n(274616),
    c = n(57513),
    d = n(51025),
    f = n(812206),
    _ = n(283595),
    p = n(417363),
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
let y = new Set(),
    I = {},
    T = new Set(),
    b = {},
    S = new Set(),
    A = {},
    N = 10 * m.Z.Millis.MINUTE,
    C = 6 * m.Z.Millis.HOUR,
    R = 10 * m.Z.Millis.MINUTE,
    O = new o.V7();
function D(e) {
    O.start(e + Math.random() * N, u.o);
}
function x() {
    return D(C), L();
}
function L() {
    if (!(0, E.Q)()) return !1;
    let e = _.Z.entitledBranchIds,
        t = [];
    for (let n of e) A.hasOwnProperty(n) || ((A[n] = null), t.push(n));
    if (0 === t.length) return !1;
    l.Z.wait(() => u.o(t));
}
function P() {
    if (!(0, E.Q)()) return !1;
    for (let e of S) {
        let { applicationId: t, branchId: n } = (0, g.CP)(e);
        null != f.Z.getApplication(t) && (S.delete(e), w(t, n));
    }
}
function w(e, t) {
    if (null != I[t] && h.Z.shouldBeInstalled(e, t)) {
        let n = I[t],
            i = n.manifestIds,
            r = p.Z.getState(e, t);
        null != r &&
            r.shouldPatch &&
            (r.buildId !== n.id || !a().isEqual(r.manifestIds, i)) &&
            l.Z.wait(() => {
                let r = f.Z.getApplication(e);
                null != r ? (S.delete((0, g.Tu)(e, t)), (0, d.li)(r, t, n.id, i, !0)) : S.add((0, g.Tu)(e, t));
            });
    }
}
function M(e) {
    let { branchId: t } = e;
    y.add(t);
}
function k(e) {
    let { applicationId: t, branchId: n, locale: i, build: r } = e;
    y.delete(n);
    let a = r.manifests.map((e) => {
            let { id: t } = e;
            return t;
        }),
        s = r.id;
    T.delete(n),
        (I[n] = {
            id: s,
            applicationId: t,
            branchId: n,
            locale: i,
            manifestIds: a
        }),
        w(t, n);
}
function U(e) {
    let { branchId: t } = e;
    y.delete(t), T.add(t);
}
function G(e) {
    let { buildId: t } = e;
    b.hasOwnProperty(t) || (b[t] = null);
}
function B(e) {
    let { buildId: t, sizeKB: n } = e;
    b[t] = n;
}
function Z(e) {
    let { buildId: t } = e;
    null == b[t] && delete b[t];
}
function F(e) {
    let { branches: t } = e,
        n = {};
    for (let e in _.Z.libraryApplications) {
        let t = _.Z.libraryApplications[e];
        n[t.branchId] = t;
    }
    for (let e of t) {
        let { id: t, liveBuildId: i } = e;
        if (i !== A[t]) {
            let e = n[t];
            null != e && l.Z.wait(() => c.l(e.id, e.branchId, !0));
        }
        A[t] = i;
    }
    D(C);
}
function V() {
    D(R);
}
function j() {
    O.stop();
}
function H(e) {
    let { entitlements: t } = e;
    if (!(0, E.Q)()) return !1;
    let n = new Set();
    for (let e of t) n.add(e.application_id);
    for (let e in _.Z.libraryApplications) {
        let t = _.Z.libraryApplications[e];
        n.has(t.id) && (0, g.Je)(t) && l.Z.wait(() => c.l(t.id, t.branchId));
    }
}
class Y extends (i = s.ZP.Store) {
    initialize() {
        this.syncWith([_.Z], L), this.waitFor(p.Z, _.Z, f.Z);
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
        return y.has(t);
    }
    needsToFetchBuildSize(e) {
        return !b.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return b[e];
    }
}
v(Y, 'displayName', 'ApplicationBuildStore');
let W = new Y(l.Z, {
    CONNECTION_OPEN: x,
    GAMES_DATABASE_UPDATE: P,
    APPLICATION_BUILD_FETCH_START: M,
    APPLICATION_BUILD_FETCH_SUCCESS: k,
    APPLICATION_BUILD_NOT_FOUND: U,
    APPLICATION_BUILD_SIZE_FETCH_START: G,
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: B,
    APPLICATION_BUILD_SIZE_FETCH_FAIL: Z,
    APPLICATION_BRANCHES_FETCH_SUCCESS: F,
    APPLICATION_BRANCHES_FETCH_FAIL: V,
    CONNECTION_CLOSED: j,
    LOGOUT: j,
    SKU_PURCHASE_SUCCESS: H
});
