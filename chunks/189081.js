n.d(t, {
    A: () => H,
}),
    n(896048),
    n(938796),
    n(142703);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(665260),
    o = n(311907),
    l = n(506774),
    c = n(73153),
    u = n(319317),
    d = n(674378),
    f = n(961350),
    p = n(652215);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = "LibraryApplicationStore";

function b() {
    var e;
    return null != (e = l.w.get(E)) ? e : {};
}
let y = !1,
    O = {},
    A = {},
    v = new Set(),
    S = {},
    I = {},
    T = !1;

function C() {
    l.w.set(
        E,
        g(h({}, b()), {
            activeLaunchOptionIds: I,
        }),
    );
}

function N() {
    l.w.set(
        E,
        g(h({}, b()), {
            activeLibraryApplicationBranchIds: S,
        }),
    );
}

function R(e) {
    for (let t of e) {
        let e = u.A.createFromServer(t);
        O[(0, d.gW)(e.id, e.branchId)] = e;
    }
}

function w() {
    y = !1;
}

function P(e) {
    let { libraryApplications: t } = e;
    (O = {}), R(t), (y = !0);
}

function D(e) {
    let { libraryApplications: t } = e;
    R(t);
}

function x(e) {
    let { applicationId: t, branchId: n, flags: r } = e,
        i = (0, d.gW)(t, n),
        a = V(t, n);
    null != a && !a.isHidden() && s.Lt(r, p.hM6.HIDDEN) && (T = !0), v.add(i);
}

function L(e) {
    let { libraryApplication: t } = e,
        n = u.A.createFromServer(t),
        r = (0, d.gW)(n.id, n.branchId);
    (O[r] = n), v.delete(r);
}

function j(e) {
    let { applicationId: t, branchId: n, launchOptionId: r } = e;
    (I[(0, d.gW)(t, n)] = r), C();
}

function M(e) {
    let { applicationId: t, branchId: n } = e;
    if (S[t] === n) return !1;
    (S[t] = n), N();
}

function k(e) {
    let { libraryApplications: t } = e;
    for (let e of t) A[(0, d.gW)(e.id, e.branchId)] = e;
}

function U() {
    A = {};
}

function G(e) {
    let t = F();
    return (
        Object.keys(t).forEach((n) => {
            e(t[n]) || delete t[n];
        }),
        t
    );
}

function V(e, t) {
    var n;
    let r = (0, d.gW)(e, t);
    return null != (n = O[r]) ? n : A[r];
}

function F() {
    return h({}, A, O);
}
class B extends (r = o.Ay.Store) {
    initialize() {
        this.waitFor(f.default);
        let e = l.w.get(E);
        null != e &&
            (null == e.activeLaunchOptionIds ? C() : (I = e.activeLaunchOptionIds),
            null == e.activeLibraryApplicationBranchIds ? N() : (S = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        return G((e) => !e.isHidden());
    }
    getAllLibraryApplications() {
        return F();
    }
    hasLibraryApplication() {
        return Object.keys(F()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = V(e, t);
        return !(null == r || (!n && r.isHidden())) && (0, d.XZ)(r);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = V(e, t);
        return n && null != r ? ((0, d.XZ)(r) ? r : null) : r;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = S[e];
        if (null != n) {
            var r;
            let i = (0, d.gW)(e, n),
                a = null != (r = O[i]) ? r : A[i];
            if (null != a && (0, d.XZ)(a) && (t || !a.isHidden())) return a;
        }
        let i = F();
        for (let n in i)
            if (i[n].id === e) {
                let e = i[n];
                if ((0, d.XZ)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return v.has((0, d.gW)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return I[(0, d.gW)(e, t)];
    }
    get fetched() {
        return y;
    }
    get entitledBranchIds() {
        return a()(F())
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
            if (y) return setImmediate(e), !1;
        });
    }
}
_(B, "displayName", "LibraryApplicationStore");
let H = new B(c.h, {
    LOGOUT: w,
    LIBRARY_FETCH_SUCCESS: P,
    SKU_PURCHASE_SUCCESS: D,
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: x,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
    LIBRARY_APPLICATION_UPDATE: L,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: j,
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: M,
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: k,
    DEVELOPER_TEST_MODE_RESET: U,
});
