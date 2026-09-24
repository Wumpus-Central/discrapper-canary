(n.d(t, { A: () => er }), n(321073));
var i = n(423764),
    r = n(536802),
    a = n(287809),
    s = n(149790),
    l = n(935208),
    o = n(899847),
    d = n(923531),
    c = n(191627);
let u = null,
    _ = null,
    E = {},
    A = !1,
    h = w(),
    I = G(),
    f = null,
    p = null,
    T = U(),
    g = !1,
    m = !1,
    S = null,
    N = null,
    C = [],
    O = [],
    R = null,
    L = null,
    y = null,
    D = null,
    v = {},
    b = {},
    M = null,
    P = {};
function U() {
    return window?.location?.pathname === c.he.FAMILY_CENTER_MY_FAMILY
        ? c.u9.REQUESTS
        : window?.location?.pathname === c.he.FAMILY_CENTER_SETTINGS
          ? c.u9.SETTINGS
          : c.u9.ACTIVITY;
}
function w() {
    let e = new Map();
    return (
        e.set(c.NV.USER_ADD, new Map()),
        e.set(c.NV.GUILD_ADD, new Map()),
        e.set(c.NV.USER_INTERACTION, new Map()),
        e.set(c.NV.GUILD_INTERACTION, new Map()),
        e.set(c.NV.USER_CALLED, new Map()),
        e.set(c.NV.TOTAL_VOICE_MINUTES, new Map()),
        e.set(c.NV.PURCHASES, new Map()),
        e.set(c.NV.GIFTS, new Map()),
        e
    );
}
function G() {
    return {
        [c.NV.USER_ADD]: 0,
        [c.NV.GUILD_ADD]: 0,
        [c.NV.USER_INTERACTION]: 0,
        [c.NV.GUILD_INTERACTION]: 0,
        [c.NV.USER_CALLED]: 0,
        [c.NV.TOTAL_VOICE_MINUTES]: 0,
        [c.NV.PURCHASES]: 0,
        [c.NV.GIFTS]: 0,
    };
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (E = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (A = !0),
        E
    );
}
function k(e) {
    void 0 !== e && (I = e);
}
function F(e, t) {
    let n = t ? h : w();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                i = n.get(t);
            void 0 === i || i.has(e.event_id) || i.set(e.event_id, e);
        }),
        (h = n)
    );
}
function B(e) {
    P = e.reduce(
        (e, t) => ({
            ...e,
            [t.id]: {
                ...(0, s.dangerouslyConstructGuildRecordFromUntypedObject)(t),
                approximateMemberCount: t.approximate_member_count ?? 0,
            },
        }),
        P,
    );
}
function V(e) {
    v = e.reduce((e, t) => {
        if (null != t.invoice_items && t.invoice_items.length > 0) {
            let n = t.invoice_items[0],
                i = n.sku_id,
                r = n.subscription_plan_id;
            (null != i || null != r) &&
                (e[t.id] = { sku_id: i, subscription_plan_id: r, total: t.total, currency: t.currency });
        }
        return e;
    }, {});
}
function H(e) {
    b = e.reduce((e, t) => ((e[t.entitlement_id] = t), e), {});
}
function j() {
    m = !0;
}
function W(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n, ageGroup: i } = e,
        {
            actions: r,
            guilds: a,
            totals: s,
            teenId: o,
            rangeStartId: d,
            topUserActivities: c,
            topGuildActivities: E,
            totalSpendAmount: A,
            totalSpendCurrency: h,
            spendingLimit: I,
            monthlyPurchases: f,
            invoices: p,
            gifts: T,
        } = n;
    ((u = o),
        (_ = d),
        F(r),
        k(s),
        B(a),
        x(t),
        null != p && V(p),
        null != T && H(T),
        (C = c),
        (O = E),
        (R = A),
        (L = h),
        (y = I ?? null),
        (D = f ?? null),
        (M = i ?? null),
        (m = !1),
        (S = l.default.fromTimestamp(Date.now())),
        (g = !0));
}
function Y(e) {
    let { linkedUsers: t } = e;
    x(t);
}
function K(e) {
    let { linkedUsers: t } = e;
    x(t);
}
function $(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return !1;
    let {
        actions: n,
        totals: i,
        guilds: r,
        teenId: a,
        rangeStartId: s,
        topUserActivities: o,
        topGuildActivities: d,
        totalSpendAmount: c,
        totalSpendCurrency: E,
        invoices: A,
        gifts: h,
        spendingLimit: I,
        monthlyPurchases: f,
    } = t;
    ((u = a),
        (_ = s),
        F(n),
        k(i),
        B(r),
        null != A && V(A),
        null != h && H(h),
        (C = o),
        (O = d),
        (m = !1),
        (S = l.default.fromTimestamp(Date.now())),
        (R = c),
        (L = E),
        (y = I ?? null),
        (D = f ?? null));
}
function z(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    (F(n, !0), B(i));
}
function X(e) {
    let { linkedUsers: t } = e;
    x(t);
}
function q(e) {
    let { linkedUsers: t } = e;
    x(t, !0);
}
function Z(e) {
    let { linkCode: t, expiresAt: n } = e;
    ((f = t), (p = n));
}
function Q(e) {
    let { tab: t } = e;
    T = t;
}
function J(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(E).length
        ? o.Ay.fetchLinkedUsers()
        : x(t.linked_users);
}
function ee(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    x(t);
}
function et(e) {
    let { countryCode: t } = e;
    null != t && (N = (0, i.XF)(t) ?? null);
}
function en() {
    ((u = null),
        (_ = null),
        (E = {}),
        (f = null),
        (p = null),
        (h = w()),
        (I = G()),
        (P = {}),
        (m = !1),
        (S = null),
        (T = U()),
        (A = !1),
        (C = []),
        (O = []),
        (R = null),
        (L = null),
        (y = null),
        (D = null),
        (v = {}),
        (b = {}),
        (M = null),
        (g = !1));
}
class ei extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: ee,
            CURRENT_USER_UPDATE: J,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: W,
            FAMILY_CENTER_FETCH_START: j,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: Y,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: $,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: K,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: X,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: q,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Z,
            FAMILY_CENTER_HANDLE_TAB_SELECT: Q,
            SET_LOCATION_METADATA: et,
            LOGOUT: en,
        });
    }
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (x(e.linkedUsers),
            B(e.guilds),
            F(e.teenActivity),
            (I = e.teenActivityTotals.reduce((e, t) => {
                let [n, i] = t.split(":"),
                    r = (0, d.k5)(n);
                return void 0 === r ? e : { ...e, [r]: parseInt(i, 10) };
            }, G())));
    }
    takeSnapshot() {
        let e;
        return {
            version: ei.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(E),
                teenActivityTotals: Object.entries(I).map((e) => {
                    let [t, n] = e;
                    return `${t}:${n}`;
                }),
                teenActivity:
                    ((e = []),
                    h.forEach((t) => {
                        e.push(...Array.from(t.values()));
                    }),
                    e),
                guilds: Object.values(P),
            },
        };
    }
    getSelectedTeenId() {
        return u;
    }
    getLinkedUsers() {
        return E;
    }
    getLinkTimestamp(e) {
        let t = E[e];
        return null == t ? null : (t.updated_at ?? t.created_at);
    }
    getRangeStartTimestamp() {
        return null == _ ? null : l.default.extractTimestamp(_);
    }
    getActionsForDisplayType(e) {
        let t = h.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return I[e];
    }
    getLinkCode() {
        return f;
    }
    getLinkCodeExpiresAt() {
        return p;
    }
    getGuild(e) {
        return P[e];
    }
    getSelectedTab() {
        return T;
    }
    getStartId() {
        return _;
    }
    getIsInitialized() {
        return g;
    }
    getAreLinkedUsersProcessed() {
        return A;
    }
    getUserCountry() {
        return N;
    }
    isLoading() {
        return m;
    }
    getTopUserActivities() {
        return C;
    }
    getTopGuildActivities() {
        return O;
    }
    getTotalSpendAmount() {
        return R;
    }
    getTotalSpendCurrency() {
        return L;
    }
    getTotalGiftValue() {
        let e = null,
            t = 0,
            n = !1;
        for (let i of Object.values(b))
            if (null != i.price) {
                if (null != e && i.price.currency !== e) return null;
                ((e = i.price.currency), (t += i.price.amount), (n = !0));
            }
        return n && null != e ? { amount: t, currency: e } : null;
    }
    getSpendingLimit() {
        return y;
    }
    getMonthlyPurchases() {
        return D;
    }
    getPurchaseInfo(e) {
        return v[e];
    }
    getGiftInfo(e) {
        return b[e];
    }
    getAgeGroup() {
        return M;
    }
    canRefetch() {
        return null === S || l.default.age(S) > c.fD;
    }
    isCurrentUserInRestrictedHours() {
        let e = a.default.getCurrentUser();
        return e?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let er = new ei();
