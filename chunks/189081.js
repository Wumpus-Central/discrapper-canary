"use strict";
n.d(t, { A: () => G }), n(938796), n(142703);
var r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(319317),
    c = n(674378),
    d = n(961350),
    _ = n(652215);
let f = "LibraryApplicationStore";
function p() {
    return o.w.get(f) ?? {};
}
let h = !1,
    m = {},
    g = {},
    E = new Set(),
    A = {},
    I = {},
    T = !1;
function y() {
    o.w.set(f, { ...p(), activeLaunchOptionIds: I });
}
function S() {
    o.w.set(f, { ...p(), activeLibraryApplicationBranchIds: A });
}
function v(e) {
    for (let t of e) {
        let e = u.A.createFromServer(t);
        m[(0, c.gW)(e.id, e.branchId)] = e;
    }
}
function C() {
    h = !1;
}
function b(e) {
    let { libraryApplications: t } = e;
    (m = {}), v(t), (h = !0);
}
function N(e) {
    let { libraryApplications: t } = e;
    v(t);
}
function R(e) {
    let { applicationId: t, branchId: n, flags: r } = e,
        i = (0, c.gW)(t, n),
        s = M(t, n);
    null != s && !s.isHidden() && a.Lt(r, _.hM6.HIDDEN) && (T = !0), E.add(i);
}
function O(e) {
    let { libraryApplication: t } = e,
        n = u.A.createFromServer(t),
        r = (0, c.gW)(n.id, n.branchId);
    (m[r] = n), E.delete(r);
}
function D(e) {
    let { applicationId: t, branchId: n, launchOptionId: r } = e;
    (I[(0, c.gW)(t, n)] = r), y();
}
function L(e) {
    let { applicationId: t, branchId: n } = e;
    if (A[t] === n) return !1;
    (A[t] = n), S();
}
function w(e) {
    let { libraryApplications: t } = e;
    for (let e of t) g[(0, c.gW)(e.id, e.branchId)] = e;
}
function x() {
    g = {};
}
function P(e) {
    let t = k();
    return (
        Object.keys(t).forEach((n) => {
            e(t[n]) || delete t[n];
        }),
        t
    );
}
function M(e, t) {
    let n = (0, c.gW)(e, t);
    return m[n] ?? g[n];
}
function k() {
    return { ...g, ...m };
}
class U extends s.Ay.Store {
    static displayName = "LibraryApplicationStore";
    initialize() {
        this.waitFor(d.default);
        let e = o.w.get(f);
        null != e &&
            (null == e.activeLaunchOptionIds ? y() : (I = e.activeLaunchOptionIds),
            null == e.activeLibraryApplicationBranchIds ? S() : (A = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        return P((e) => !e.isHidden());
    }
    getAllLibraryApplications() {
        return k();
    }
    hasLibraryApplication() {
        return Object.keys(k()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = M(e, t);
        return !(null == r || (!n && r.isHidden())) && (0, c.XZ)(r);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = M(e, t);
        return n && null != r ? ((0, c.XZ)(r) ? r : null) : r;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = A[e];
        if (null != n) {
            let r = (0, c.gW)(e, n),
                i = m[r] ?? g[r];
            if (null != i && (0, c.XZ)(i) && (t || !i.isHidden())) return i;
        }
        let r = k();
        for (let n in r)
            if (r[n].id === e) {
                let e = r[n];
                if ((0, c.XZ)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return E.has((0, c.gW)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return I[(0, c.gW)(e, t)];
    }
    get fetched() {
        return h;
    }
    get entitledBranchIds() {
        return i()(k())
            .values()
            .filter((e) => (0, c.XZ)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return T;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (h) return setImmediate(e), !1;
        });
    }
}
let G = new U(l.h, {
    LOGOUT: C,
    LIBRARY_FETCH_SUCCESS: b,
    SKU_PURCHASE_SUCCESS: N,
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: R,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: O,
    LIBRARY_APPLICATION_UPDATE: O,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: D,
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: L,
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: w,
    DEVELOPER_TEST_MODE_RESET: x,
});
