n.d(e, {
    A: () => tn,
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
    d = n(191627);

function E(t, e, n) {
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
                E(t, e, n[e]);
            });
    }
    return t;
}

function c(t, e) {
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
let T = null,
    S = null,
    A = {},
    C = !1,
    f = F(),
    I = Y(),
    N = null,
    p = M(),
    g = !1,
    y = !1,
    h = null,
    R = null,
    L = [],
    D = [],
    v = null,
    m = null,
    U = {},
    b = null,
    O = {};

function M() {
    var t, e, n, i;
    return (null == (e = window) || null == (t = e.location) ? void 0 : t.pathname) === d.he.FAMILY_CENTER_MY_FAMILY
        ? d.u9.REQUESTS
        : (null == (i = window) || null == (n = i.location) ? void 0 : n.pathname) === d.he.FAMILY_CENTER_SETTINGS
          ? d.u9.SETTINGS
          : d.u9.ACTIVITY;
}

function F() {
    let t = new Map();
    return (
        t.set(d.NV.USER_ADD, new Map()),
        t.set(d.NV.GUILD_ADD, new Map()),
        t.set(d.NV.USER_INTERACTION, new Map()),
        t.set(d.NV.GUILD_INTERACTION, new Map()),
        t.set(d.NV.USER_CALLED, new Map()),
        t.set(d.NV.TOTAL_VOICE_MINUTES, new Map()),
        t.set(d.NV.PURCHASES, new Map()),
        t
    );
}

function Y() {
    return {
        [d.NV.USER_ADD]: 0,
        [d.NV.GUILD_ADD]: 0,
        [d.NV.USER_INTERACTION]: 0,
        [d.NV.GUILD_INTERACTION]: 0,
        [d.NV.USER_CALLED]: 0,
        [d.NV.TOTAL_VOICE_MINUTES]: 0,
        [d.NV.PURCHASES]: 0,
    };
}

function P() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (A =
            t.length > 0
                ? t.reduce(
                      (t, e) =>
                          c(_({}, t), {
                              [e.user_id]: e,
                          }),
                      {},
                  )
                : {}),
        (C = !0),
        A
    );
}

function w(t) {
    void 0 !== t && (I = t);
}

function V(t, e) {
    let n = e ? f : F();
    return (
        t.forEach((t) => {
            let e = t.display_type,
                i = n.get(e);
            void 0 === i || i.has(t.event_id) || i.set(t.event_id, t);
        }),
        (f = n)
    );
}

function k(t) {
    O = t.reduce((t, e) => {
        var n;
        return c(_({}, t), {
            [e.id]: c(_({}, (0, a.dangerouslyConstructGuildRecordFromUntypedObject)(e)), {
                approximateMemberCount: null != (n = e.approximate_member_count) ? n : 0,
            }),
        });
    }, O);
}

function H(t) {
    U = t.reduce((t, e) => {
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

function G() {
    y = !0;
}

function j(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n, ageGroup: i } = t,
        {
            actions: l,
            guilds: r,
            totals: a,
            teenId: u,
            rangeStartId: s,
            topUserActivities: d,
            topGuildActivities: E,
            totalSpendAmount: _,
            totalSpendCurrency: c,
            invoices: A,
        } = n;
    (T = u),
        (S = s),
        V(l),
        w(a),
        k(r),
        P(e),
        null != A && H(A),
        (L = d),
        (D = E),
        (v = _),
        (m = c),
        (b = null != i ? i : null),
        (y = !1),
        (h = o.default.fromTimestamp(Date.now())),
        (g = !0);
}

function Q(t) {
    let { linkedUsers: e } = t;
    P(e);
}

function B(t) {
    let { linkedUsers: e } = t;
    P(e);
}

function W(t) {
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
        invoices: _,
    } = e;
    (T = r),
        (S = a),
        V(n),
        w(i),
        k(l),
        null != _ && H(_),
        (L = u),
        (D = s),
        (y = !1),
        (h = o.default.fromTimestamp(Date.now())),
        (v = d),
        (m = E);
}

function K(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: i } = e;
    V(n, !0), k(i);
}

function z(t) {
    let { linkedUsers: e } = t;
    P(e);
}

function q(t) {
    let { linkedUsers: e } = t;
    P(e, !0);
}

function X(t) {
    let { linkCode: e } = t;
    N = e;
}

function x(t) {
    let { tab: e } = t;
    p = e;
}

function Z(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return !1;
    let n = r.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(A).length
        ? u.Ay.fetchLinkedUsers()
        : P(e.linked_users);
}

function J(t) {
    let { linkedUsers: e } = t;
    if (null == e) return !1;
    P(e);
}

function $(t) {
    var e;
    let { countryCode: n } = t;
    null != n && (R = null != (e = (0, i.XF)(n)) ? e : null);
}

function tt() {
    (T = null),
        (S = null),
        (A = {}),
        (f = F()),
        (I = Y()),
        (O = {}),
        (y = !1),
        (h = null),
        (p = M()),
        (C = !1),
        (L = []),
        (D = []),
        (v = null),
        (m = null),
        (U = {}),
        (b = null),
        (g = !1);
}
class te extends l.A {
    initialize() {
        this.waitFor(r.default);
    }
    loadCache() {
        let t = this.readSnapshot(te.LATEST_SNAPSHOT_VERSION);
        null != t &&
            (P(t.linkedUsers),
            k(t.guilds),
            V(t.teenActivity),
            (I = t.teenActivityTotals.reduce((t, e) => {
                let [n, i] = e.split(":"),
                    l = (0, s.k5)(n);
                return void 0 === l
                    ? t
                    : c(_({}, t), {
                          [l]: parseInt(i, 10),
                      });
            }, Y())));
    }
    takeSnapshot() {
        let t;
        return {
            version: te.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(A),
                teenActivityTotals: Object.entries(I).map((t) => {
                    let [e, n] = t;
                    return "".concat(e, ":").concat(n);
                }),
                teenActivity:
                    ((t = []),
                    f.forEach((e) => {
                        t.push(...Array.from(e.values()));
                    }),
                    t),
                guilds: Object.values(O),
            },
        };
    }
    getSelectedTeenId() {
        return T;
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
        return null == S ? null : o.default.extractTimestamp(S);
    }
    getActionsForDisplayType(t) {
        let e = f.get(t);
        return null != e ? Array.from(e.values()) : [];
    }
    getTotalForDisplayType(t) {
        return I[t];
    }
    getLinkCode() {
        return N;
    }
    getGuild(t) {
        return O[t];
    }
    getSelectedTab() {
        return p;
    }
    getStartId() {
        return S;
    }
    getIsInitialized() {
        return g;
    }
    getAreLinkedUsersProcessed() {
        return C;
    }
    getUserCountry() {
        return R;
    }
    isLoading() {
        return y;
    }
    getTopUserActivities() {
        return L;
    }
    getTopGuildActivities() {
        return D;
    }
    getTotalSpendAmount() {
        return v;
    }
    getTotalSpendCurrency() {
        return m;
    }
    getPurchaseInfo(t) {
        return U[t];
    }
    getAgeGroup() {
        return b;
    }
    canRefetch() {
        return null === h || o.default.age(h) > d.fD;
    }
    constructor() {
        super({
            CONNECTION_OPEN: J,
            CURRENT_USER_UPDATE: Z,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: j,
            FAMILY_CENTER_FETCH_START: G,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: Q,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: W,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: K,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: B,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: q,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: X,
            FAMILY_CENTER_HANDLE_TAB_SELECT: x,
            SET_LOCATION_METADATA: $,
            LOGOUT: tt,
        });
    }
}
E(te, "displayName", "FamilyCenterStore"), E(te, "LATEST_SNAPSHOT_VERSION", 3);
let tn = new te();
