n.d(e, { A: () => tt }), n(321073);
var i = n(518977),
    r = n(536802),
    l = n(287809),
    a = n(860689),
    s = n(661191),
    o = n(899847),
    d = n(923531),
    u = n(936926),
    E = n(191627);
let _ = null,
    T = null,
    c = {},
    S = !1,
    A = F(),
    C = Y(),
    I = null,
    N = v(),
    f = !1,
    p = !1,
    g = null,
    h = null,
    R = [],
    y = [],
    L = null,
    U = null,
    D = {},
    m = null,
    M = {};
function v() {
    return window?.location?.pathname === E.he.FAMILY_CENTER_MY_FAMILY
        ? E.u9.REQUESTS
        : window?.location?.pathname === E.he.FAMILY_CENTER_SETTINGS
          ? E.u9.SETTINGS
          : E.u9.ACTIVITY;
}
function F() {
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
function Y() {
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
function O() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (c = t.length > 0 ? t.reduce((t, e) => ({ ...t, [e.user_id]: e }), {}) : {}),
        (S = !0),
        c
    );
}
function b(t) {
    void 0 !== t && (C = t);
}
function V(t, e) {
    let n = e ? A : F();
    return (
        t.forEach((t) => {
            let e = t.display_type,
                i = n.get(e);
            void 0 === i || i.has(t.event_id) || i.set(t.event_id, t);
        }),
        (A = n)
    );
}
function H(t) {
    M = t.reduce(
        (t, e) => ({
            ...t,
            [e.id]: {
                ...(0, a.dangerouslyConstructGuildRecordFromUntypedObject)(e),
                approximateMemberCount: e.approximate_member_count ?? 0,
            },
        }),
        M,
    );
}
function G(t) {
    D = t.reduce((t, e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0],
                i = n.sku_id,
                r = n.subscription_plan_id;
            (null != i || null != r) &&
                (t[e.id] = { sku_id: i, subscription_plan_id: r, total: e.total, currency: e.currency });
        }
        return t;
    }, {});
}
function k() {
    p = !0;
}
function P(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n, ageGroup: i } = t,
        {
            actions: r,
            guilds: l,
            totals: a,
            teenId: o,
            rangeStartId: d,
            topUserActivities: u,
            topGuildActivities: E,
            totalSpendAmount: c,
            totalSpendCurrency: S,
            invoices: A,
        } = n;
    (_ = o),
        (T = d),
        V(r),
        b(a),
        H(l),
        O(e),
        null != A && G(A),
        (R = u),
        (y = E),
        (L = c),
        (U = S),
        (m = i ?? null),
        (p = !1),
        (g = s.default.fromTimestamp(Date.now())),
        (f = !0);
}
function w(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function Q(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function j(t) {
    let { familyCenterTeenActivity: e } = t;
    if (void 0 === e) return !1;
    let {
        actions: n,
        totals: i,
        guilds: r,
        teenId: l,
        rangeStartId: a,
        topUserActivities: o,
        topGuildActivities: d,
        totalSpendAmount: u,
        totalSpendCurrency: E,
        invoices: c,
    } = e;
    (_ = l),
        (T = a),
        V(n),
        b(i),
        H(r),
        null != c && G(c),
        (R = o),
        (y = d),
        (p = !1),
        (g = s.default.fromTimestamp(Date.now())),
        (L = u),
        (U = E);
}
function B(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: i } = e;
    V(n, !0), H(i);
}
function W(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function K(t) {
    let { linkedUsers: e } = t;
    O(e, !0);
}
function z(t) {
    let { linkCode: e } = t;
    I = e;
}
function q(t) {
    let { tab: e } = t;
    N = e;
}
function X(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return !1;
    let n = l.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(c).length
        ? o.Ay.fetchLinkedUsers()
        : O(e.linked_users);
}
function x(t) {
    let { linkedUsers: e } = t;
    if (null == e) return !1;
    O(e);
}
function Z(t) {
    let { countryCode: e } = t;
    null != e && (h = (0, i.XF)(e) ?? null);
}
function $() {
    (_ = null),
        (T = null),
        (c = {}),
        (A = F()),
        (C = Y()),
        (M = {}),
        (p = !1),
        (g = null),
        (N = v()),
        (S = !1),
        (R = []),
        (y = []),
        (L = null),
        (U = null),
        (D = {}),
        (m = null),
        (f = !1);
}
class J extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: x,
            CURRENT_USER_UPDATE: X,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: P,
            FAMILY_CENTER_FETCH_START: k,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: w,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: j,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: B,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: Q,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: W,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: K,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: z,
            FAMILY_CENTER_HANDLE_TAB_SELECT: q,
            SET_LOCATION_METADATA: Z,
            LOGOUT: $,
        });
    }
    initialize() {
        this.waitFor(l.default);
    }
    loadCache() {
        let t = this.readSnapshot(J.LATEST_SNAPSHOT_VERSION);
        null != t &&
            (O(t.linkedUsers),
            H(t.guilds),
            V(t.teenActivity),
            (C = t.teenActivityTotals.reduce((t, e) => {
                let [n, i] = e.split(":"),
                    r = (0, d.k5)(n);
                return void 0 === r ? t : { ...t, [r]: parseInt(i, 10) };
            }, Y())));
    }
    takeSnapshot() {
        let t;
        return {
            version: J.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(c),
                teenActivityTotals: Object.entries(C).map((t) => {
                    let [e, n] = t;
                    return `${e}:${n}`;
                }),
                teenActivity:
                    ((t = []),
                    A.forEach((e) => {
                        t.push(...Array.from(e.values()));
                    }),
                    t),
                guilds: Object.values(M),
            },
        };
    }
    getSelectedTeenId() {
        return _;
    }
    getLinkedUsers() {
        return c;
    }
    getLinkTimestamp(t) {
        let e = c[t];
        return null == e ? null : (e.updated_at ?? e.created_at);
    }
    getRangeStartTimestamp() {
        return null == T ? null : s.default.extractTimestamp(T);
    }
    getActionsForDisplayType(t) {
        let e = A.get(t);
        return null != e ? Array.from(e.values()) : [];
    }
    getTotalForDisplayType(t) {
        return C[t];
    }
    getLinkCode() {
        return I;
    }
    getGuild(t) {
        return M[t];
    }
    getSelectedTab() {
        return N;
    }
    getStartId() {
        return T;
    }
    getIsInitialized() {
        return f;
    }
    getAreLinkedUsersProcessed() {
        return S;
    }
    getUserCountry() {
        return h;
    }
    isLoading() {
        return p;
    }
    getTopUserActivities() {
        return R;
    }
    getTopGuildActivities() {
        return y;
    }
    getTotalSpendAmount() {
        return L;
    }
    getTotalSpendCurrency() {
        return U;
    }
    getPurchaseInfo(t) {
        return D[t];
    }
    getAgeGroup() {
        return m;
    }
    canRefetch() {
        return null === g || s.default.age(g) > E.fD;
    }
    isCurrentUserInRestrictedHours() {
        if (!(0, u.Eq)({ location: "isInRestrictedHours" })) return !1;
        let t = l.default.getCurrentUser();
        return t?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let tt = new J();
