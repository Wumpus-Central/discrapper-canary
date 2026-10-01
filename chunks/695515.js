(n.d(t, { A: () => ei }), n(321073));
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
    A = U(),
    h = w(),
    I = null,
    f = null,
    p = P(),
    T = !1,
    g = !1,
    m = null,
    S = null,
    N = [],
    C = [],
    O = null,
    R = null,
    L = null,
    y = null,
    D = {},
    v = {},
    b = null,
    M = {};
function P() {
    return window?.location?.pathname === d.he.FAMILY_CENTER_MY_FAMILY
        ? d.u9.REQUESTS
        : window?.location?.pathname === d.he.FAMILY_CENTER_SETTINGS
          ? d.u9.SETTINGS
          : d.u9.ACTIVITY;
}
function U() {
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
function w() {
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
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (_ = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (E = !0),
        _
    );
}
function x(e) {
    void 0 !== e && (h = e);
}
function k(e, t) {
    let n = t ? A : U();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                i = n.get(t);
            void 0 === i || i.has(e.event_id) || i.set(e.event_id, e);
        }),
        (A = n)
    );
}
function F(e) {
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
function B(e) {
    D = e.reduce((e, t) => {
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
function V(e) {
    v = e.reduce((e, t) => ((e[t.entitlement_id] = t), e), {});
}
function H() {
    g = !0;
}
function j(e) {
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
            spendingLimit: I,
            monthlyPurchases: f,
            invoices: p,
            gifts: S,
        } = n;
    ((c = o),
        (u = d),
        k(r),
        x(s),
        F(a),
        G(t),
        null != p && B(p),
        null != S && V(S),
        (N = _),
        (C = E),
        (O = A),
        (R = h),
        (L = I ?? null),
        (y = f ?? null),
        (b = i ?? null),
        (g = !1),
        (m = l.default.fromTimestamp(Date.now())),
        (T = !0));
}
function W(e) {
    let { linkedUsers: t } = e;
    G(t);
}
function Y(e) {
    let { linkedUsers: t } = e;
    G(t);
}
function K(e) {
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
        spendingLimit: I,
        monthlyPurchases: f,
    } = t;
    ((c = a),
        (u = s),
        k(n),
        x(i),
        F(r),
        null != A && B(A),
        null != h && V(h),
        (N = o),
        (C = d),
        (g = !1),
        (m = l.default.fromTimestamp(Date.now())),
        (O = _),
        (R = E),
        (L = I ?? null),
        (y = f ?? null));
}
function $(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    (k(n, !0), F(i));
}
function z(e) {
    let { linkedUsers: t } = e;
    G(t);
}
function X(e) {
    let { linkedUsers: t } = e;
    G(t, !0);
}
function Z(e) {
    let { linkCode: t, expiresAt: n } = e;
    ((I = t), (f = n));
}
function q(e) {
    let { tab: t } = e;
    p = t;
}
function Q(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(_).length
        ? o.Ay.fetchLinkedUsers()
        : G(t.linked_users);
}
function J(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    G(t);
}
function ee(e) {
    let { countryCode: t } = e;
    null != t && (S = (0, i.XF)(t) ?? null);
}
function et() {
    ((c = null),
        (u = null),
        (_ = {}),
        (I = null),
        (f = null),
        (A = U()),
        (h = w()),
        (M = {}),
        (g = !1),
        (m = null),
        (p = P()),
        (E = !1),
        (N = []),
        (C = []),
        (O = null),
        (R = null),
        (L = null),
        (y = null),
        (D = {}),
        (v = {}),
        (b = null),
        (T = !1));
}
class en extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: J,
            CURRENT_USER_UPDATE: Q,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: j,
            FAMILY_CENTER_FETCH_START: H,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: W,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: K,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: $,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: Y,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: X,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Z,
            FAMILY_CENTER_HANDLE_TAB_SELECT: q,
            SET_LOCATION_METADATA: ee,
            LOGOUT: et,
        });
    }
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(en.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (G(e.linkedUsers),
            F(e.guilds),
            k(e.teenActivity),
            (h = e.teenActivityTotals.reduce((e, t) => {
                let [n, i] = t.split(":"),
                    r = (function (e) {
                        for (let t of Object.values(d.NV)) if (t.toString() === e) return t;
                    })(n);
                return void 0 === r ? e : { ...e, [r]: parseInt(i, 10) };
            }, w())));
    }
    takeSnapshot() {
        let e;
        return {
            version: en.LATEST_SNAPSHOT_VERSION,
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
        return I;
    }
    getLinkCodeExpiresAt() {
        return f;
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
        return S;
    }
    isLoading() {
        return g;
    }
    getTopUserActivities() {
        return N;
    }
    getTopGuildActivities() {
        return C;
    }
    getTotalSpendAmount() {
        return O;
    }
    getTotalSpendCurrency() {
        return R;
    }
    getTotalGiftValue() {
        let e = null,
            t = 0,
            n = !1;
        for (let i of Object.values(v))
            if (null != i.price) {
                if (null != e && i.price.currency !== e) return null;
                ((e = i.price.currency), (t += i.price.amount), (n = !0));
            }
        return n && null != e ? { amount: t, currency: e } : null;
    }
    getSpendingLimit() {
        return L;
    }
    getMonthlyPurchases() {
        return y;
    }
    getPurchaseInfo(e) {
        return D[e];
    }
    getGiftInfo(e) {
        return v[e];
    }
    getAgeGroup() {
        return b;
    }
    canRefetch() {
        return null === m || l.default.age(m) > d.fD;
    }
    isCurrentUserInRestrictedHours() {
        let e = a.default.getCurrentUser();
        return e?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let ei = new en();
