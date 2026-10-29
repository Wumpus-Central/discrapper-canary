(n.d(t, { A: () => es }), n(321073));
var i = n(423764),
    r = n(536802),
    a = n(287809),
    s = n(149790),
    l = n(935208),
    o = n(899847),
    d = n(191627);
let c = null,
    u = null,
    _ = {},
    E = !1,
    A = w(),
    h = G(),
    f = null,
    I = null,
    p = U(),
    T = !1,
    m = !1,
    g = !1,
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
    P = null,
    M = {};
function U() {
    return window?.location?.pathname === d.he.FAMILY_CENTER_MY_FAMILY
        ? d.u9.REQUESTS
        : window?.location?.pathname === d.he.FAMILY_CENTER_SETTINGS
          ? d.u9.SETTINGS
          : d.u9.ACTIVITY;
}
function w() {
    let e = new Map();
    return (
        e.set(d.NV.USER_ADD, new Map()),
        e.set(d.NV.GUILD_ADD, new Map()),
        e.set(d.NV.USER_INTERACTION, new Map()),
        e.set(d.NV.GUILD_INTERACTION, new Map()),
        e.set(d.NV.USER_CALLED, new Map()),
        e.set(d.NV.TOTAL_VOICE_MINUTES, new Map()),
        e.set(d.NV.PURCHASES, new Map()),
        e.set(d.NV.GIFTS, new Map()),
        e
    );
}
function G() {
    return {
        [d.NV.USER_ADD]: 0,
        [d.NV.GUILD_ADD]: 0,
        [d.NV.USER_INTERACTION]: 0,
        [d.NV.GUILD_INTERACTION]: 0,
        [d.NV.USER_CALLED]: 0,
        [d.NV.TOTAL_VOICE_MINUTES]: 0,
        [d.NV.PURCHASES]: 0,
        [d.NV.GIFTS]: 0,
    };
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (_ = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (E = !0),
        _
    );
}
function k(e) {
    void 0 !== e && (h = e);
}
function F(e, t) {
    let n = t ? A : w();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                i = n.get(t);
            void 0 === i || i.has(e.event_id) || i.set(e.event_id, e);
        }),
        (A = n)
    );
}
function B(e) {
    M = e.reduce(
        (e, t) => ({
            ...e,
            [t.id]: {
                ...(0, s.dangerouslyConstructGuildRecordFromUntypedObject)(t),
                approximateMemberCount: t.approximate_member_count ?? 0,
            },
        }),
        M,
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
    ((m = !0), (g = !1));
}
function W() {
    if (!m) return !1;
    ((m = !1), (g = !0));
}
function Y() {
    m = !1;
}
function K(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n, ageGroup: i } = e,
        {
            actions: r,
            guilds: a,
            totals: s,
            teenId: o,
            rangeStartId: d,
            topUserActivities: _,
            topGuildActivities: E,
            totalSpendAmount: A,
            totalSpendCurrency: h,
            spendingLimit: f,
            monthlyPurchases: I,
            invoices: p,
            gifts: N,
        } = n;
    ((c = o),
        (u = d),
        F(r),
        k(s),
        B(a),
        x(t),
        null != p && V(p),
        null != N && H(N),
        (C = _),
        (O = E),
        (R = A),
        (L = h),
        (y = f ?? null),
        (D = I ?? null),
        (P = i ?? null),
        (m = !1),
        (g = !1),
        (S = l.default.fromTimestamp(Date.now())),
        (T = !0));
}
function $(e) {
    let { linkedUsers: t } = e;
    x(t);
}
function z(e) {
    let { linkedUsers: t } = e;
    x(t);
}
function X(e) {
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
        totalSpendAmount: _,
        totalSpendCurrency: E,
        invoices: A,
        gifts: h,
        spendingLimit: f,
        monthlyPurchases: I,
    } = t;
    ((c = a),
        (u = s),
        F(n),
        k(i),
        B(r),
        null != A && V(A),
        null != h && H(h),
        (C = o),
        (O = d),
        (m = !1),
        (S = l.default.fromTimestamp(Date.now())),
        (R = _),
        (L = E),
        (y = f ?? null),
        (D = I ?? null));
}
function q(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    (F(n, !0), B(i));
}
function Z(e) {
    let { linkedUsers: t } = e;
    x(t);
}
function Q(e) {
    let { linkedUsers: t } = e;
    x(t, !0);
}
function J(e) {
    let { linkCode: t, expiresAt: n } = e;
    ((f = t), (I = n));
}
function ee(e) {
    let { tab: t } = e;
    p = t;
}
function et(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(_).length
        ? o.Ay.fetchLinkedUsers()
        : x(t.linked_users);
}
function en(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    x(t);
}
function ei(e) {
    let { countryCode: t } = e;
    null != t && (N = (0, i.XF)(t) ?? null);
}
function er() {
    ((c = null),
        (u = null),
        (_ = {}),
        (f = null),
        (I = null),
        (A = w()),
        (h = G()),
        (M = {}),
        (m = !1),
        (g = !1),
        (S = null),
        (p = U()),
        (E = !1),
        (C = []),
        (O = []),
        (R = null),
        (L = null),
        (y = null),
        (D = null),
        (v = {}),
        (b = {}),
        (P = null),
        (T = !1));
}
class ea extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: en,
            CURRENT_USER_UPDATE: et,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: K,
            FAMILY_CENTER_FETCH_START: j,
            FAMILY_CENTER_INITIAL_LOAD_FAILURE: W,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: $,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: X,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_FAILURE: Y,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: q,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: Z,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: Q,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: J,
            FAMILY_CENTER_HANDLE_TAB_SELECT: ee,
            SET_LOCATION_METADATA: ei,
            LOGOUT: er,
        });
    }
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(ea.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (x(e.linkedUsers),
            B(e.guilds),
            F(e.teenActivity),
            (h = e.teenActivityTotals.reduce((e, t) => {
                let [n, i] = t.split(":"),
                    r = (function (e) {
                        for (let t of Object.values(d.NV)) if (t.toString() === e) return t;
                    })(n);
                return void 0 === r ? e : { ...e, [r]: parseInt(i, 10) };
            }, G())));
    }
    takeSnapshot() {
        let e;
        return {
            version: ea.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(_),
                teenActivityTotals: Object.entries(h).map((e) => {
                    let [t, n] = e;
                    return `${t}:${n}`;
                }),
                teenActivity:
                    ((e = []),
                    A.forEach((t) => {
                        e.push(...Array.from(t.values()));
                    }),
                    e),
                guilds: Object.values(M),
            },
        };
    }
    getSelectedTeenId() {
        return c;
    }
    getLinkedUsers() {
        return _;
    }
    getLinkTimestamp(e) {
        let t = _[e];
        return null == t ? null : (t.updated_at ?? t.created_at);
    }
    getRangeStartTimestamp() {
        return null == u ? null : l.default.extractTimestamp(u);
    }
    getActionsForDisplayType(e) {
        let t = A.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return h[e];
    }
    getLinkCode() {
        return f;
    }
    getLinkCodeExpiresAt() {
        return I;
    }
    getGuild(e) {
        return M[e];
    }
    getSelectedTab() {
        return p;
    }
    getStartId() {
        return u;
    }
    getIsInitialized() {
        return T;
    }
    getAreLinkedUsersProcessed() {
        return E;
    }
    getUserCountry() {
        return N;
    }
    isLoading() {
        return m;
    }
    hasInitialLoadFailed() {
        return g;
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
        return P;
    }
    canRefetch() {
        return null === S || l.default.age(S) > d.fD;
    }
    isCurrentUserInRestrictedHours() {
        let e = a.default.getCurrentUser();
        return e?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let es = new ea();
