n.d(t, { Z: () => Z }), n(47120), n(789020), n(177593);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(85521),
    u = n(630388),
    d = n(780570),
    f = n(314897),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
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
let E = 'LibraryApplicationStore';
function b() {
    var e;
    return null != (e = s.K.get(E)) ? e : {};
}
let y = !1,
    v = {},
    O = {},
    I = new Set(),
    S = {},
    T = {},
    N = !1;
function A() {
    s.K.set(E, g(h({}, b()), { activeLaunchOptionIds: T }));
}
function C() {
    s.K.set(E, g(h({}, b()), { activeLibraryApplicationBranchIds: S }));
}
function R(e) {
    for (let t of e) {
        let e = c.Z.createFromServer(t);
        v[(0, d.Tu)(e.id, e.branchId)] = e;
    }
}
function P() {
    y = !1;
}
function w(e) {
    let { libraryApplications: t } = e;
    (v = {}), R(t), (y = !0);
}
function D(e) {
    let { libraryApplications: t } = e;
    R(t);
}
function L(e) {
    let { applicationId: t, branchId: n, flags: r } = e,
        i = (0, d.Tu)(t, n),
        o = B(t, n);
    null != o && !o.isHidden() && u.yE(r, _.eHb.HIDDEN) && (N = !0), I.add(i);
}
function x(e) {
    let { libraryApplication: t } = e,
        n = c.Z.createFromServer(t),
        r = (0, d.Tu)(n.id, n.branchId);
    (v[r] = n), I.delete(r);
}
function M(e) {
    let { applicationId: t, branchId: n, launchOptionId: r } = e;
    (T[(0, d.Tu)(t, n)] = r), A();
}
function k(e) {
    let { applicationId: t, branchId: n } = e;
    if (S[t] === n) return !1;
    (S[t] = n), C();
}
function j(e) {
    let { libraryApplications: t } = e;
    for (let e of t) O[(0, d.Tu)(e.id, e.branchId)] = e;
}
function U() {
    O = {};
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
function B(e, t) {
    var n;
    let r = (0, d.Tu)(e, t);
    return null != (n = v[r]) ? n : O[r];
}
function F() {
    return h({}, O, v);
}
class V extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
        let e = s.K.get(E);
        null != e && (null == e.activeLaunchOptionIds ? A() : (T = e.activeLaunchOptionIds), null == e.activeLibraryApplicationBranchIds ? C() : (S = e.activeLibraryApplicationBranchIds));
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
            r = B(e, t);
        return !(null == r || (!n && r.isHidden())) && (0, d.Je)(r);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = B(e, t);
        return n && null != r ? ((0, d.Je)(r) ? r : null) : r;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = S[e];
        if (null != n) {
            var r;
            let i = (0, d.Tu)(e, n),
                o = null != (r = v[i]) ? r : O[i];
            if (null != o && (0, d.Je)(o) && (t || !o.isHidden())) return o;
        }
        let i = F();
        for (let n in i)
            if (i[n].id === e) {
                let e = i[n];
                if ((0, d.Je)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return I.has((0, d.Tu)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return T[(0, d.Tu)(e, t)];
    }
    get fetched() {
        return y;
    }
    get entitledBranchIds() {
        return o()(F())
            .values()
            .filter((e) => (0, d.Je)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return N;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (y) return setImmediate(e), !1;
        });
    }
}
p(V, 'displayName', 'LibraryApplicationStore');
let Z = new V(l.Z, {
    LOGOUT: P,
    LIBRARY_FETCH_SUCCESS: w,
    SKU_PURCHASE_SUCCESS: D,
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: L,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: x,
    LIBRARY_APPLICATION_UPDATE: x,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: M,
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: k,
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: j,
    DEVELOPER_TEST_MODE_RESET: U
});
