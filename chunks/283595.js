var i,
    a = r(47120);
var o = r(789020);
var s = r(177593);
var l = r(392711),
    u = r.n(l),
    c = r(442837),
    d = r(433517),
    f = r(570140),
    p = r(85521),
    h = r(630388),
    _ = r(780570),
    m = r(314897),
    g = r(981631);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let v = 'LibraryApplicationStore';
function y() {
    var e;
    return null !== (e = d.K.get(v)) && void 0 !== e ? e : {};
}
let b = !1,
    I = {},
    T = {},
    S = new Set(),
    A = {},
    C = {},
    N = !1;
function R() {
    d.K.set(v, {
        ...y(),
        activeLaunchOptionIds: C
    });
}
function O() {
    d.K.set(v, {
        ...y(),
        activeLibraryApplicationBranchIds: A
    });
}
function D(e) {
    for (let n of e) {
        let e = p.Z.createFromServer(n);
        I[(0, _.Tu)(e.id, e.branchId)] = e;
    }
}
function L() {
    b = !1;
}
function x(e) {
    let { libraryApplications: n } = e;
    (I = {}), D(n), (b = !0);
}
function w(e) {
    let { libraryApplications: n } = e;
    D(n);
}
function P(e) {
    let { applicationId: n, branchId: r, flags: i } = e,
        a = (0, _.Tu)(n, r),
        o = F(n, r);
    null != o && !o.isHidden() && h.yE(i, g.eHb.HIDDEN) && (N = !0), S.add(a);
}
function M(e) {
    let { libraryApplication: n } = e,
        r = p.Z.createFromServer(n),
        i = (0, _.Tu)(r.id, r.branchId);
    (I[i] = r), S.delete(i);
}
function k(e) {
    let { applicationId: n, branchId: r, launchOptionId: i } = e;
    (C[(0, _.Tu)(n, r)] = i), R();
}
function U(e) {
    let { applicationId: n, branchId: r } = e;
    if (A[n] === r) return !1;
    (A[n] = r), O();
}
function B(e) {
    let { libraryApplications: n } = e;
    for (let e of n) T[(0, _.Tu)(e.id, e.branchId)] = e;
}
function G() {
    T = {};
}
function Z(e) {
    let n = V();
    return (
        Object.keys(n).forEach((r) => {
            !e(n[r]) && delete n[r];
        }),
        n
    );
}
function F(e, n) {
    var r;
    let i = (0, _.Tu)(e, n);
    return null !== (r = I[i]) && void 0 !== r ? r : T[i];
}
function V() {
    return {
        ...T,
        ...I
    };
}
class j extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(m.default);
        let e = d.K.get(v);
        null != e && (null == e.activeLaunchOptionIds ? R() : (C = e.activeLaunchOptionIds), null == e.activeLibraryApplicationBranchIds ? O() : (A = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        return Z((e) => !e.isHidden());
    }
    getAllLibraryApplications() {
        return V();
    }
    hasLibraryApplication() {
        return Object.keys(V()).length > 0;
    }
    hasApplication(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = F(e, n);
        return !(null == i || (!r && i.isHidden())) && (0, _.Je)(i);
    }
    getLibraryApplication(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = F(e, n);
        return r && null != i ? ((0, _.Je)(i) ? i : null) : i;
    }
    getActiveLibraryApplication(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = A[e];
        if (null != r) {
            var i;
            let a = (0, _.Tu)(e, r),
                o = null !== (i = I[a]) && void 0 !== i ? i : T[a];
            if (null != o && (0, _.Je)(o) && (n || !o.isHidden())) return o;
        }
        let a = V();
        for (let r in a)
            if (a[r].id === e) {
                let e = a[r];
                if ((0, _.Je)(e) && (n || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, n) {
        return S.has((0, _.Tu)(e, n));
    }
    getActiveLaunchOptionId(e, n) {
        return C[(0, _.Tu)(e, n)];
    }
    get fetched() {
        return b;
    }
    get entitledBranchIds() {
        return u()(V())
            .values()
            .filter((e) => (0, _.Je)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return N;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (b) return setImmediate(e), !1;
        });
    }
}
E(j, 'displayName', 'LibraryApplicationStore'),
    (n.Z = new j(f.Z, {
        LOGOUT: L,
        LIBRARY_FETCH_SUCCESS: x,
        SKU_PURCHASE_SUCCESS: w,
        LIBRARY_APPLICATION_FLAGS_UPDATE_START: P,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: M,
        LIBRARY_APPLICATION_UPDATE: M,
        LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: k,
        LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: U,
        LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: B,
        DEVELOPER_TEST_MODE_RESET: G
    }));
