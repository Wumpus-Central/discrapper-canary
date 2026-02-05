"use strict";
n.d(t, { A: () => K }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(451988),
    o = n(73153),
    l = n(781763),
    u = n(356645),
    c = n(92077),
    d = n(587895),
    _ = n(253932),
    f = n(617617),
    p = n(189081),
    h = n(194871),
    m = n(775228),
    g = n(927813),
    E = n(674378),
    A = n(144914);
let I = new Set(),
    T = {},
    y = new Set(),
    S = {},
    v = new Set(),
    C = {},
    b = 10 * g.A.Millis.MINUTE,
    N = 6 * g.A.Millis.HOUR,
    R = 10 * g.A.Millis.MINUTE,
    O = new s.Ep();
function D(e) {
    O.start(e + Math.random() * b, l.r);
}
function L() {
    return !_.l_.getSetting() && (D(N), w());
}
function w() {
    if (!(0, A.S)() || _.l_.getSetting()) return !1;
    let e = p.A.entitledBranchIds,
        t = [];
    for (let n of e) C.hasOwnProperty(n) || ((C[n] = null), t.push(n));
    if (0 === t.length) return !1;
    o.h.wait(() => l.r(t));
}
function x() {
    if (!(0, A.S)()) return !1;
    for (let e of v) {
        let { applicationId: t, branchId: n } = (0, E.r0)(e);
        null != d.A.getApplication(t) && (v.delete(e), P(t, n));
    }
}
function P(e, t) {
    if (null != T[t] && m.A.shouldBeInstalled(e, t)) {
        let n = T[t],
            r = n.manifestIds,
            a = h.A.getState(e, t);
        null != a &&
            a.shouldPatch &&
            (a.buildId !== n.id || !i().isEqual(a.manifestIds, r)) &&
            o.h.wait(() => {
                let i = d.A.getApplication(e);
                null != i ? (v.delete((0, E.gW)(e, t)), (0, c.K3)(i, t, n.id, r, !0)) : v.add((0, E.gW)(e, t));
            });
    }
}
function M(e) {
    let { branchId: t } = e;
    I.add(t);
}
function k(e) {
    let { applicationId: t, branchId: n, locale: r, build: i } = e;
    I.delete(n);
    let a = i.manifests.map((e) => {
            let { id: t } = e;
            return t;
        }),
        s = i.id;
    y.delete(n), (T[n] = { id: s, applicationId: t, branchId: n, locale: r, manifestIds: a }), P(t, n);
}
function U(e) {
    let { branchId: t } = e;
    I.delete(t), y.add(t);
}
function G(e) {
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
function B(e) {
    let { branches: t } = e,
        n = {};
    for (let e in p.A.libraryApplications) {
        let t = p.A.libraryApplications[e];
        n[t.branchId] = t;
    }
    for (let e of t) {
        let { id: t, liveBuildId: r } = e;
        if (r !== C[t]) {
            let e = n[t];
            null != e && o.h.wait(() => u.n(e.id, e.branchId, !0));
        }
        C[t] = r;
    }
    D(N);
}
function j() {
    D(R);
}
function H() {
    O.stop();
}
function Y(e) {
    let { entitlements: t } = e;
    if (!(0, A.S)()) return !1;
    let n = new Set();
    for (let e of t) n.add(e.application_id);
    for (let e in p.A.libraryApplications) {
        let t = p.A.libraryApplications[e];
        n.has(t.id) && (0, E.XZ)(t) && o.h.wait(() => u.n(t.id, t.branchId));
    }
}
class W extends a.Ay.Store {
    static displayName = "ApplicationBuildStore";
    initialize() {
        this.syncWith([p.A], w), this.waitFor(d.A, h.A, m.A, p.A, f.A);
    }
    getTargetBuildId(e, t) {
        return null == T[t] ? null : T[t].id;
    }
    getTargetManifests(e, t) {
        return null == T[t] ? null : T[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return y.has(t);
    }
    isFetching(e, t) {
        return I.has(t);
    }
    needsToFetchBuildSize(e) {
        return !S.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return S[e];
    }
}
let K = new W(o.h, {
    CONNECTION_OPEN: L,
    GAMES_DATABASE_UPDATE: x,
    APPLICATION_BUILD_FETCH_START: M,
    APPLICATION_BUILD_FETCH_SUCCESS: k,
    APPLICATION_BUILD_NOT_FOUND: U,
    APPLICATION_BUILD_SIZE_FETCH_START: G,
    APPLICATION_BUILD_SIZE_FETCH_SUCCESS: V,
    APPLICATION_BUILD_SIZE_FETCH_FAIL: F,
    APPLICATION_BRANCHES_FETCH_SUCCESS: B,
    APPLICATION_BRANCHES_FETCH_FAIL: j,
    CONNECTION_CLOSED: H,
    LOGOUT: H,
    SKU_PURCHASE_SUCCESS: Y,
});
