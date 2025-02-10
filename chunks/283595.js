n.d(t, { Z: () => Z }), n(47120), n(789020), n(177593);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(85521),
    c = n(630388),
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
let h = 'LibraryApplicationStore';
function m() {
    var e;
    return null !== (e = o.K.get(h)) && void 0 !== e ? e : {};
}
let g = !1,
    E = {},
    v = {},
    y = new Set(),
    I = {},
    T = {},
    b = !1;
function S() {
    o.K.set(h, {
        ...m(),
        activeLaunchOptionIds: T
    });
}
function A() {
    o.K.set(h, {
        ...m(),
        activeLibraryApplicationBranchIds: I
    });
}
function N(e) {
    for (let t of e) {
        let e = u.Z.createFromServer(t);
        E[(0, d.Tu)(e.id, e.branchId)] = e;
    }
}
function C() {
    g = !1;
}
function R(e) {
    let { libraryApplications: t } = e;
    (E = {}), N(t), (g = !0);
}
function O(e) {
    let { libraryApplications: t } = e;
    N(t);
}
function D(e) {
    let { applicationId: t, branchId: n, flags: i } = e,
        r = (0, d.Tu)(t, n),
        a = U(t, n);
    null != a && !a.isHidden() && c.yE(i, _.eHb.HIDDEN) && (b = !0), y.add(r);
}
function L(e) {
    let { libraryApplication: t } = e,
        n = u.Z.createFromServer(t),
        i = (0, d.Tu)(n.id, n.branchId);
    (E[i] = n), y.delete(i);
}
function x(e) {
    let { applicationId: t, branchId: n, launchOptionId: i } = e;
    (T[(0, d.Tu)(t, n)] = i), S();
}
function P(e) {
    let { applicationId: t, branchId: n } = e;
    if (I[t] === n) return !1;
    (I[t] = n), A();
}
function w(e) {
    let { libraryApplications: t } = e;
    for (let e of t) v[(0, d.Tu)(e.id, e.branchId)] = e;
}
function M() {
    v = {};
}
function k(e) {
    let t = G();
    return (
        Object.keys(t).forEach((n) => {
            e(t[n]) || delete t[n];
        }),
        t
    );
}
function U(e, t) {
    var n;
    let i = (0, d.Tu)(e, t);
    return null !== (n = E[i]) && void 0 !== n ? n : v[i];
}
function G() {
    return {
        ...v,
        ...E
    };
}
class B extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
        let e = o.K.get(h);
        null != e && (null == e.activeLaunchOptionIds ? S() : (T = e.activeLaunchOptionIds), null == e.activeLibraryApplicationBranchIds ? A() : (I = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        return k((e) => !e.isHidden());
    }
    getAllLibraryApplications() {
        return G();
    }
    hasLibraryApplication() {
        return Object.keys(G()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = U(e, t);
        return !(null == i || (!n && i.isHidden())) && (0, d.Je)(i);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = U(e, t);
        return n && null != i ? ((0, d.Je)(i) ? i : null) : i;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = I[e];
        if (null != n) {
            var i;
            let r = (0, d.Tu)(e, n),
                a = null !== (i = E[r]) && void 0 !== i ? i : v[r];
            if (null != a && (0, d.Je)(a) && (t || !a.isHidden())) return a;
        }
        let r = G();
        for (let n in r)
            if (r[n].id === e) {
                let e = r[n];
                if ((0, d.Je)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return y.has((0, d.Tu)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return T[(0, d.Tu)(e, t)];
    }
    get fetched() {
        return g;
    }
    get entitledBranchIds() {
        return a()(G())
            .values()
            .filter((e) => (0, d.Je)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return b;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (g) return setImmediate(e), !1;
        });
    }
}
p(B, 'displayName', 'LibraryApplicationStore');
let Z = new B(l.Z, {
    LOGOUT: C,
    LIBRARY_FETCH_SUCCESS: R,
    SKU_PURCHASE_SUCCESS: O,
    LIBRARY_APPLICATION_FLAGS_UPDATE_START: D,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
    LIBRARY_APPLICATION_UPDATE: L,
    LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: x,
    LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: P,
    LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: w,
    DEVELOPER_TEST_MODE_RESET: M
});
