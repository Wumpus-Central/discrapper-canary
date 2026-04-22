"use strict";
n.d(t, { A: () => b }), n(938796), n(142703);
var r = n(735438),
    i = n.n(r),
    s = n(665260),
    a = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(319317),
    d = n(674378),
    c = n(961350),
    _ = n(652215);
let f = "LibraryApplicationStore";
function E() {
    return o.w.get(f) ?? {};
}
let h = !1,
    p = {},
    m = {},
    g = new Set(),
    A = {},
    I = {},
    T = !1;
function S() {
    o.w.set(f, { ...E(), activeLaunchOptionIds: I });
}
function y() {
    o.w.set(f, { ...E(), activeLibraryApplicationBranchIds: A });
}
function N(e) {
    for (let t of e) {
        let e = u.A.createFromServer(t);
        p[(0, d.gW)(e.id, e.branchId)] = e;
    }
}
function O(e) {
    let { libraryApplication: t } = e,
        n = u.A.createFromServer(t),
        r = (0, d.gW)(n.id, n.branchId);
    (p[r] = n), g.delete(r);
}
function R(e, t) {
    let n = (0, d.gW)(e, t);
    return p[n] ?? m[n];
}
function v() {
    return { ...m, ...p };
}
class C extends a.Ay.Store {
    static displayName = "LibraryApplicationStore";
    initialize() {
        this.waitFor(c.default);
        let e = o.w.get(f);
        null != e &&
            (null == e.activeLaunchOptionIds ? S() : (I = e.activeLaunchOptionIds),
            null == e.activeLibraryApplicationBranchIds ? y() : (A = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        var e;
        let t;
        return (
            (e = (e) => !e.isHidden()),
            Object.keys((t = v())).forEach((n) => {
                e(t[n]) || delete t[n];
            }),
            t
        );
    }
    getAllLibraryApplications() {
        return v();
    }
    hasLibraryApplication() {
        return Object.keys(v()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = R(e, t);
        return !(null == r || (!n && r.isHidden())) && (0, d.XZ)(r);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = R(e, t);
        return n && null != r ? ((0, d.XZ)(r) ? r : null) : r;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = A[e];
        if (null != n) {
            let r = (0, d.gW)(e, n),
                i = p[r] ?? m[r];
            if (null != i && (0, d.XZ)(i) && (t || !i.isHidden())) return i;
        }
        let r = v();
        for (let n in r)
            if (r[n].id === e) {
                let e = r[n];
                if ((0, d.XZ)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return g.has((0, d.gW)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return I[(0, d.gW)(e, t)];
    }
    get fetched() {
        return h;
    }
    get entitledBranchIds() {
        return i()(v())
            .values()
            .filter((e) => (0, d.XZ)(e))
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
let b = new C(l.h, {
    LOGOUT: function () {
        h = !1;
    },
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        (p = {}), N(t), (h = !0);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        N(t);
    },
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: function (e) {
        let { applicationId: t, branchId: n, flags: r } = e,
            i = (0, d.gW)(t, n),
            a = R(t, n);
        null != a && !a.isHidden() && s.Lt(r, _.hM6.HIDDEN) && (T = !0), g.add(i);
    },
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: O,
    LIBRARY_APPLICATION_UPDATE: O,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, launchOptionId: r } = e;
        (I[(0, d.gW)(t, n)] = r), S();
    },
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function (e) {
        let { applicationId: t, branchId: n } = e;
        if (A[t] === n) return !1;
        (A[t] = n), y();
    },
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) m[(0, d.gW)(e.id, e.branchId)] = e;
    },
    DEVELOPER_TEST_MODE_RESET: function () {
        m = {};
    },
});
