n.d(t, { Z: () => V }), n(388685), n(997841), n(358797);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(95015),
    s = n(442837),
    l = n(433517),
    c = n(570140),
    u = n(85521),
    d = n(780570),
    f = n(314897),
    p = n(981631);
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
function m(e) {
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
function h(e, t) {
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
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = "LibraryApplicationStore";
function b() {
    var e;
    return null != (e = l.K.get(E)) ? e : {};
}
let y = !1,
    O = {},
    v = {},
    S = new Set(),
    I = {},
    T = {},
    C = !1;
function A() {
    l.K.set(E, g(m({}, b()), { activeLaunchOptionIds: T }));
}
function N() {
    l.K.set(E, g(m({}, b()), { activeLibraryApplicationBranchIds: I }));
}
function P(e) {
    for (let t of e) {
        let e = u.Z.createFromServer(t);
        O[(0, d.Tu)(e.id, e.branchId)] = e;
    }
}
function R() {
    y = !1;
}
function D(e) {
    let { libraryApplications: t } = e;
    (O = {}), P(t), (y = !0);
}
function w(e) {
    let { libraryApplications: t } = e;
    P(t);
}
function x(e) {
    let { applicationId: t, branchId: n, flags: r } = e,
        i = (0, d.Tu)(t, n),
        a = Z(t, n);
    null != a && !a.isHidden() && o.yE(r, p.eHb.HIDDEN) && (C = !0), S.add(i);
}
function L(e) {
    let { libraryApplication: t } = e,
        n = u.Z.createFromServer(t),
        r = (0, d.Tu)(n.id, n.branchId);
    (O[r] = n), S.delete(r);
}
function j(e) {
    let { applicationId: t, branchId: n, launchOptionId: r } = e;
    (T[(0, d.Tu)(t, n)] = r), A();
}
function M(e) {
    let { applicationId: t, branchId: n } = e;
    if (I[t] === n) return !1;
    (I[t] = n), N();
}
function k(e) {
    let { libraryApplications: t } = e;
    for (let e of t) v[(0, d.Tu)(e.id, e.branchId)] = e;
}
function U() {
    v = {};
}
function G(e) {
    let t = B();
    return (
        Object.keys(t).forEach((n) => {
            e(t[n]) || delete t[n];
        }),
        t
    );
}
function Z(e, t) {
    var n;
    let r = (0, d.Tu)(e, t);
    return null != (n = O[r]) ? n : v[r];
}
function B() {
    return m({}, v, O);
}
class F extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
        let e = l.K.get(E);
        null != e &&
            (null == e.activeLaunchOptionIds ? A() : (T = e.activeLaunchOptionIds),
            null == e.activeLibraryApplicationBranchIds ? N() : (I = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        return G((e) => !e.isHidden());
    }
    getAllLibraryApplications() {
        return B();
    }
    hasLibraryApplication() {
        return Object.keys(B()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Z(e, t);
        return !(null == r || (!n && r.isHidden())) && (0, d.Je)(r);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Z(e, t);
        return n && null != r ? ((0, d.Je)(r) ? r : null) : r;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = I[e];
        if (null != n) {
            var r;
            let i = (0, d.Tu)(e, n),
                a = null != (r = O[i]) ? r : v[i];
            if (null != a && (0, d.Je)(a) && (t || !a.isHidden())) return a;
        }
        let i = B();
        for (let n in i)
            if (i[n].id === e) {
                let e = i[n];
                if ((0, d.Je)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return S.has((0, d.Tu)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return T[(0, d.Tu)(e, t)];
    }
    get fetched() {
        return y;
    }
    get entitledBranchIds() {
        return a()(B())
            .values()
            .filter((e) => (0, d.Je)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return C;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (y) return setImmediate(e), !1;
        });
    }
}
_(F, "displayName", "LibraryApplicationStore");
let V = new F(c.Z, {
    LOGOUT: R,
    LIBRARY_FETCH_SUCCESS: D,
    SKU_PURCHASE_SUCCESS: w,
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: x,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
    LIBRARY_APPLICATION_UPDATE: L,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: j,
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: M,
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: k,
    DEVELOPER_TEST_MODE_RESET: U,
});
