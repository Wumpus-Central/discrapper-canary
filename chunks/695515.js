n.d(e, {
    A: () => ti,
}),
    n(896048),
    n(321073),
    n(747238);
var i = n(518977),
    l = n(536802),
    r = n(287809),
    a = n(860689),
    o = n(661191),
    u = n(899847),
    s = n(923531),
    d = n(936926),
    E = n(191627);

function c(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}

function _(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                c(t, e, n[e]);
            });
    }
    return t;
}

function T(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
let S = null,
    f = null,
    A = {},
    C = !1,
    I = Y(),
    N = P(),
    p = null,
    g = F(),
    y = !1,
    h = !1,
    R = null,
    L = null,
    v = [],
    D = [],
    m = null,
    U = null,
    b = {},
    O = null,
    M = {};

function F() {
    var t, e, n, i;
    return (null == (e = window) || null == (t = e.location) ? void 0 : t.pathname) === E.he.FAMILY_CENTER_MY_FAMILY
        ? E.u9.REQUESTS
        : (null == (i = window) || null == (n = i.location) ? void 0 : n.pathname) === E.he.FAMILY_CENTER_SETTINGS
          ? E.u9.SETTINGS
          : E.u9.ACTIVITY;
}

function Y() {
    let t = new Map();
    return (
        t.set(E.NV.USER_ADD, new Map()),
        t.set(E.NV.GUILD_ADD, new Map()),
        t.set(E.NV.USER_INTERACTION, new Map()),
        t.set(E.NV.GUILD_INTERACTION, new Map()),
        t.set(E.NV.USER_CALLED, new Map()),
        t.set(E.NV.TOTAL_VOICE_MINUTES, new Map()),
        t.set(E.NV.PURCHASES, new Map()),
        t
    );
}

function P() {
    return {
        [E.NV.USER_ADD]: 0,
        [E.NV.GUILD_ADD]: 0,
        [E.NV.USER_INTERACTION]: 0,
        [E.NV.GUILD_INTERACTION]: 0,
        [E.NV.USER_CALLED]: 0,
        [E.NV.TOTAL_VOICE_MINUTES]: 0,
        [E.NV.PURCHASES]: 0,
    };
}

function w() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (A =
            t.length > 0
                ? t.reduce(
                      (t, e) =>
                          T(_({}, t), {
                              [e.user_id]: e,
                          }),
                      {},
                  )
                : {}),
        (C = !0),
        A
    );
}

function V(t) {
    void 0 !== t && (N = t);
}

function H(t, e) {
    let n = e ? I : Y();
    return (
        t.forEach((t) => {
            let e = t.display_type,
                i = n.get(e);
            void 0 === i || i.has(t.event_id) || i.set(t.event_id, t);
        }),
        (I = n)
    );
}

function k(t) {
    M = t.reduce((t, e) => {
        var n;
        return T(_({}, t), {
            [e.id]: T(_({}, (0, a.dangerouslyConstructGuildRecordFromUntypedObject)(e)), {
                approximateMemberCount: null != (n = e.approximate_member_count) ? n : 0,
            }),
        });
    }, M);
}

function G(t) {
    b = t.reduce((t, e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0],
                i = n.sku_id,
                l = n.subscription_plan_id;
            (null != i || null != l) &&
                (t[e.id] = {
                    sku_id: i,
                    subscription_plan_id: l,
                    total: e.total,
                    currency: e.currency,
                });
        }
        return t;
    }, {});
}

function j() {
    h = !0;
}

function Q(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n, ageGroup: i } = t,
        {
            actions: l,
            guilds: r,
            totals: a,
            teenId: u,
            rangeStartId: s,
            topUserActivities: d,
            topGuildActivities: E,
            totalSpendAmount: c,
            totalSpendCurrency: _,
            invoices: T,
        } = n;
    (S = u),
        (f = s),
        H(l),
        V(a),
        k(r),
        w(e),
        null != T && G(T),
        (v = d),
        (D = E),
        (m = c),
        (U = _),
        (O = null != i ? i : null),
        (h = !1),
        (R = o.default.fromTimestamp(Date.now())),
        (y = !0);
}

function B(t) {
    let { linkedUsers: e } = t;
    w(e);
}

function W(t) {
    let { linkedUsers: e } = t;
    w(e);
}

function K(t) {
    let { familyCenterTeenActivity: e } = t;
    if (void 0 === e) return !1;
    let {
        actions: n,
        totals: i,
        guilds: l,
        teenId: r,
        rangeStartId: a,
        topUserActivities: u,
        topGuildActivities: s,
        totalSpendAmount: d,
        totalSpendCurrency: E,
        invoices: c,
    } = e;
    (S = r),
        (f = a),
        H(n),
        V(i),
        k(l),
        null != c && G(c),
        (v = u),
        (D = s),
        (h = !1),
        (R = o.default.fromTimestamp(Date.now())),
        (m = d),
        (U = E);
}

function z(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: i } = e;
    H(n, !0), k(i);
}

function q(t) {
    let { linkedUsers: e } = t;
    w(e);
}

function X(t) {
    let { linkedUsers: e } = t;
    w(e, !0);
}

function x(t) {
    let { linkCode: e } = t;
    p = e;
}

function Z(t) {
    let { tab: e } = t;
    g = e;
}

function J(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return !1;
    let n = r.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(A).length
        ? u.Ay.fetchLinkedUsers()
        : w(e.linked_users);
}

function $(t) {
    let { linkedUsers: e } = t;
    if (null == e) return !1;
    w(e);
}

function tt(t) {
    var e;
    let { countryCode: n } = t;
    null != n && (L = null != (e = (0, i.XF)(n)) ? e : null);
}

function te() {
    (S = null),
        (f = null),
        (A = {}),
        (I = Y()),
        (N = P()),
        (M = {}),
        (h = !1),
        (R = null),
        (g = F()),
        (C = !1),
        (v = []),
        (D = []),
        (m = null),
        (U = null),
        (b = {}),
        (O = null),
        (y = !1);
}
class tn extends l.A {
    initialize() {
        this.waitFor(r.default);
    }
    loadCache() {
        let t = this.readSnapshot(tn.LATEST_SNAPSHOT_VERSION);
        null != t &&
            (w(t.linkedUsers),
            k(t.guilds),
            H(t.teenActivity),
            (N = t.teenActivityTotals.reduce((t, e) => {
                let [n, i] = e.split(":"),
                    l = (0, s.k5)(n);
                return void 0 === l
                    ? t
                    : T(_({}, t), {
                          [l]: parseInt(i, 10),
                      });
            }, P())));
    }
    takeSnapshot() {
        let t;
        return {
            version: tn.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(A),
                teenActivityTotals: Object.entries(N).map((t) => {
                    let [e, n] = t;
                    return "".concat(e, ":").concat(n);
                }),
                teenActivity:
                    ((t = []),
                    I.forEach((e) => {
                        t.push(...Array.from(e.values()));
                    }),
                    t),
                guilds: Object.values(M),
            },
        };
    }
    getSelectedTeenId() {
        return S;
    }
    getLinkedUsers() {
        return A;
    }
    getLinkTimestamp(t) {
        var e;
        let n = A[t];
        return null == n ? null : null != (e = n.updated_at) ? e : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == f ? null : o.default.extractTimestamp(f);
    }
    getActionsForDisplayType(t) {
        let e = I.get(t);
        return null != e ? Array.from(e.values()) : [];
    }
    getTotalForDisplayType(t) {
        return N[t];
    }
    getLinkCode() {
        return p;
    }
    getGuild(t) {
        return M[t];
    }
    getSelectedTab() {
        return g;
    }
    getStartId() {
        return f;
    }
    getIsInitialized() {
        return y;
    }
    getAreLinkedUsersProcessed() {
        return C;
    }
    getUserCountry() {
        return L;
    }
    isLoading() {
        return h;
    }
    getTopUserActivities() {
        return v;
    }
    getTopGuildActivities() {
        return D;
    }
    getTotalSpendAmount() {
        return m;
    }
    getTotalSpendCurrency() {
        return U;
    }
    getPurchaseInfo(t) {
        return b[t];
    }
    getAgeGroup() {
        return O;
    }
    canRefetch() {
        return null === R || o.default.age(R) > E.fD;
    }
    isCurrentUserInRestrictedHours() {
        var t, e;
        if (
            !(0, d.Eq)({
                location: "isInRestrictedHours",
            })
        )
            return !1;
        let n = r.default.getCurrentUser();
        return null != (t = null == n || null == (e = n.restrictedSchedule) ? void 0 : e.isInRestrictedHours()) && t;
    }
    constructor() {
        super({
            CONNECTION_OPEN: $,
            CURRENT_USER_UPDATE: J,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: Q,
            FAMILY_CENTER_FETCH_START: j,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: B,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: K,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: W,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: q,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: X,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: x,
            FAMILY_CENTER_HANDLE_TAB_SELECT: Z,
            SET_LOCATION_METADATA: tt,
            LOGOUT: te,
        });
    }
}
c(tn, "displayName", "FamilyCenterStore"), c(tn, "LATEST_SNAPSHOT_VERSION", 3);
let ti = new tn();
