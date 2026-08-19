"use strict";
n.d(t, { A: () => D }), n(938796), n(142703);
var i = n(435558),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(506774),
    o = n(228366),
    d = n(319317),
    c = n(674378),
    u = n(280450),
    _ = n(652215);
let E = "LibraryApplicationStore";
function A() {
    return l.w.get(E) ?? {};
}
let h = !1,
    I = {},
    f = {},
    p = new Set(),
    T = {},
    m = {},
    g = !1;
function S() {
    l.w.set(E, { ...A(), activeLaunchOptionIds: m });
}
function N() {
    l.w.set(E, { ...A(), activeLibraryApplicationBranchIds: T });
}
function C(e) {
    for (let t of e) {
        let e = d.A.createFromServer(t);
        I[(0, c.gW)(e.id, e.branchId)] = e;
    }
}
function O(e) {
    let { libraryApplication: t } = e,
        n = d.A.createFromServer(t),
        i = (0, c.gW)(n.id, n.branchId);
    (I[i] = n), p.delete(i);
}
function R(e, t) {
    let n = (0, c.gW)(e, t);
    return I[n] ?? f[n];
}
function L() {
    return { ...f, ...I };
}
class y extends s.Ay.Store {
    static displayName = "LibraryApplicationStore";
    initialize() {
        this.waitFor(u.default);
        let e = l.w.get(E);
        null != e &&
            (null == e.activeLaunchOptionIds ? S() : (m = e.activeLaunchOptionIds),
            null == e.activeLibraryApplicationBranchIds ? N() : (T = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        var e;
        let t;
        return (
            (e = (e) => !e.isHidden()),
            Object.keys((t = L())).forEach((n) => {
                e(t[n]) || delete t[n];
            }),
            t
        );
    }
    getAllLibraryApplications() {
        return L();
    }
    hasLibraryApplication() {
        return Object.keys(L()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = R(e, t);
        return !(null == i || (!n && i.isHidden())) && (0, c.XZ)(i);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = R(e, t);
        return n && null != i ? ((0, c.XZ)(i) ? i : null) : i;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = T[e];
        if (null != n) {
            let i = (0, c.gW)(e, n),
                r = I[i] ?? f[i];
            if (null != r && (0, c.XZ)(r) && (t || !r.isHidden())) return r;
        }
        let i = L();
        for (let n in i)
            if (i[n].id === e) {
                let e = i[n];
                if ((0, c.XZ)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return p.has((0, c.gW)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return m[(0, c.gW)(e, t)];
    }
    get fetched() {
        return h;
    }
    get entitledBranchIds() {
        return r()(L())
            .values()
            .filter((e) => (0, c.XZ)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return g;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (h) return setImmediate(e), !1;
        });
    }
}
let D = new y(o.h, {
    LOGOUT: function () {
        h = !1;
    },
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        (I = {}), C(t), (h = !0);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        C(t);
    },
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: function (e) {
        let { applicationId: t, branchId: n, flags: i } = e,
            r = (0, c.gW)(t, n),
            s = R(t, n);
        null != s && !s.isHidden() && a.Lt(i, _.hM6.HIDDEN) && (g = !0), p.add(r);
    },
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: O,
    LIBRARY_APPLICATION_UPDATE: O,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, launchOptionId: i } = e;
        (m[(0, c.gW)(t, n)] = i), S();
    },
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function (e) {
        let { applicationId: t, branchId: n } = e;
        if (T[t] === n) return !1;
        (T[t] = n), N();
    },
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) f[(0, c.gW)(e.id, e.branchId)] = e;
    },
    DEVELOPER_TEST_MODE_RESET: function () {
        f = {};
    },
});
