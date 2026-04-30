"use strict";
n.d(t, { A: () => x }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(451988),
    o = n(228366),
    l = n(712963),
    u = n(356645),
    c = n(92077),
    d = n(587895),
    _ = n(885386),
    f = n(617617),
    h = n(189081),
    p = n(340829),
    E = n(775228),
    m = n(927813),
    g = n(674378),
    A = n(144914);
let I = new Set(),
    T = {},
    S = new Set(),
    N = {},
    y = new Set(),
    C = {},
    v = 10 * m.A.Millis.MINUTE,
    O = 6 * m.A.Millis.HOUR,
    R = 10 * m.A.Millis.MINUTE,
    b = new a.Ep();
function D(e) {
    b.start(e + Math.random() * v, l.r);
}
function L() {
    if (!(0, A.S)() || _.l_.getSetting()) return !1;
    let e = h.A.entitledBranchIds,
        t = [];
    for (let n of e) C.hasOwnProperty(n) || ((C[n] = null), t.push(n));
    if (0 === t.length) return !1;
    o.h.wait(() => l.r(t));
}
function w(e, t) {
    if (null != T[t] && E.A.shouldBeInstalled(e, t)) {
        let n = T[t],
            i = n.manifestIds,
            s = p.A.getState(e, t);
        null != s &&
            s.shouldPatch &&
            (s.buildId !== n.id || !r().isEqual(s.manifestIds, i)) &&
            o.h.wait(() => {
                let r = d.A.getApplication(e);
                null != r ? (y.delete((0, g.gW)(e, t)), (0, c.K3)(r, t, n.id, i, !0)) : y.add((0, g.gW)(e, t));
            });
    }
}
function M() {
    b.stop();
}
class P extends s.Ay.Store {
    static displayName = "ApplicationBuildStore";
    initialize() {
        this.syncWith([h.A], L), this.waitFor(d.A, p.A, E.A, h.A, f.A);
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
        return !N.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return N[e];
    }
}
let x = new P(o.h, {
    CONNECTION_OPEN: function () {
        return !_.l_.getSetting() && (D(O), L());
    },
    GAMES_DATABASE_UPDATE: function () {
        if (!(0, A.S)()) return !1;
        for (let e of y) {
            let { applicationId: t, branchId: n } = (0, g.r0)(e);
            null != d.A.getApplication(t) && (y.delete(e), w(t, n));
        }
    },
    APPLICATION_BUILD_FETCH_START: function (e) {
        let { branchId: t } = e;
        I.add(t);
    },
    APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branchId: n, locale: i, build: r } = e;
        I.delete(n);
        let s = r.manifests.map((e) => {
                let { id: t } = e;
                return t;
            }),
            a = r.id;
        S.delete(n), (T[n] = { id: a, applicationId: t, branchId: n, locale: i, manifestIds: s }), w(t, n);
    },
    APPLICATION_BUILD_NOT_FOUND: function (e) {
        let { branchId: t } = e;
        I.delete(t), S.add(t);
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
        for (let e in h.A.libraryApplications) {
            let t = h.A.libraryApplications[e];
            n[t.branchId] = t;
        }
        for (let e of t) {
            let { id: t, liveBuildId: i } = e;
            if (i !== C[t]) {
                let e = n[t];
                null != e && o.h.wait(() => u.n(e.id, e.branchId, !0));
            }
            C[t] = i;
        }
        D(O);
    },
    APPLICATION_BRANCHES_FETCH_FAIL: function () {
        D(R);
    },
    CONNECTION_CLOSED: M,
    LOGOUT: M,
    SKU_PURCHASE_SUCCESS: function (e) {
        let { entitlements: t } = e;
        if (!(0, A.S)()) return !1;
        let n = new Set();
        for (let e of t) n.add(e.application_id);
        for (let e in h.A.libraryApplications) {
            let t = h.A.libraryApplications[e];
            n.has(t.id) && (0, g.XZ)(t) && o.h.wait(() => u.n(t.id, t.branchId));
        }
    },
});
