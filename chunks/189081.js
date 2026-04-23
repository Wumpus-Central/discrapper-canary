"use strict";
n.d(t, { A: () => D }), n(938796), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(506774),
    l = n(228366),
    d = n(319317),
    _ = n(674378),
    u = n(495544),
    c = n(652215);
let E = "LibraryApplicationStore";
function h() {
    return o.w.get(E) ?? {};
}
let m = !1,
    f = {},
    g = {},
    p = new Set(),
    A = {},
    I = {},
    T = !1;
function S() {
    o.w.set(E, { ...h(), activeLaunchOptionIds: I });
}
function N() {
    o.w.set(E, { ...h(), activeLibraryApplicationBranchIds: A });
}
function C(e) {
    for (let t of e) {
        let e = d.A.createFromServer(t);
        f[(0, _.gW)(e.id, e.branchId)] = e;
    }
}
function R(e) {
    let { libraryApplication: t } = e,
        n = d.A.createFromServer(t),
        i = (0, _.gW)(n.id, n.branchId);
    (f[i] = n), p.delete(i);
}
function O(e, t) {
    let n = (0, _.gW)(e, t);
    return f[n] ?? g[n];
}
function y() {
    return { ...g, ...f };
}
class v extends a.Ay.Store {
    static displayName = "LibraryApplicationStore";
    initialize() {
        this.waitFor(u.default);
        let e = o.w.get(E);
        null != e &&
            (null == e.activeLaunchOptionIds ? S() : (I = e.activeLaunchOptionIds),
            null == e.activeLibraryApplicationBranchIds ? N() : (A = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        var e;
        let t;
        return (
            (e = (e) => !e.isHidden()),
            Object.keys((t = y())).forEach((n) => {
                e(t[n]) || delete t[n];
            }),
            t
        );
    }
    getAllLibraryApplications() {
        return y();
    }
    hasLibraryApplication() {
        return Object.keys(y()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = O(e, t);
        return !(null == i || (!n && i.isHidden())) && (0, _.XZ)(i);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = O(e, t);
        return n && null != i ? ((0, _.XZ)(i) ? i : null) : i;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = A[e];
        if (null != n) {
            let i = (0, _.gW)(e, n),
                r = f[i] ?? g[i];
            if (null != r && (0, _.XZ)(r) && (t || !r.isHidden())) return r;
        }
        let i = y();
        for (let n in i)
            if (i[n].id === e) {
                let e = i[n];
                if ((0, _.XZ)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return p.has((0, _.gW)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return I[(0, _.gW)(e, t)];
    }
    get fetched() {
        return m;
    }
    get entitledBranchIds() {
        return r()(y())
            .values()
            .filter((e) => (0, _.XZ)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return T;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (m) return setImmediate(e), !1;
        });
    }
}
let D = new v(l.h, {
    LOGOUT: function () {
        m = !1;
    },
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        (f = {}), C(t), (m = !0);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        C(t);
    },
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: function (e) {
        let { applicationId: t, branchId: n, flags: i } = e,
            r = (0, _.gW)(t, n),
            a = O(t, n);
        null != a && !a.isHidden() && s.Lt(i, c.hM6.HIDDEN) && (T = !0), p.add(r);
    },
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: R,
    LIBRARY_APPLICATION_UPDATE: R,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, launchOptionId: i } = e;
        (I[(0, _.gW)(t, n)] = i), S();
    },
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function (e) {
        let { applicationId: t, branchId: n } = e;
        if (A[t] === n) return !1;
        (A[t] = n), N();
    },
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) g[(0, _.gW)(e.id, e.branchId)] = e;
    },
    DEVELOPER_TEST_MODE_RESET: function () {
        g = {};
    },
});
