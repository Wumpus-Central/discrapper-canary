"use strict";
n.d(t, { A: () => ea }), n(321073);
var i = n(423764),
    r = n(536802),
    a = n(287809),
    s = n(149790),
    l = n(935208),
    o = n(899847),
    d = n(923531),
    c = n(936926),
    u = n(191627);
let _ = null,
    E = null,
    A = {},
    h = !1,
    I = G(),
    f = x(),
    p = null,
    T = null,
    m = w(),
    g = !1,
    S = !1,
    N = null,
    C = null,
    O = [],
    R = [],
    L = null,
    y = null,
    D = null,
    v = null,
    b = {},
    M = {},
    P = null,
    U = {};
function w() {
    return window?.location?.pathname === u.he.FAMILY_CENTER_MY_FAMILY
        ? u.u9.REQUESTS
        : window?.location?.pathname === u.he.FAMILY_CENTER_SETTINGS
          ? u.u9.SETTINGS
          : u.u9.ACTIVITY;
}
function G() {
    let e = new Map();
    return (
        e.set(u.NV.USER_ADD, new Map()),
        e.set(u.NV.GUILD_ADD, new Map()),
        e.set(u.NV.USER_INTERACTION, new Map()),
        e.set(u.NV.GUILD_INTERACTION, new Map()),
        e.set(u.NV.USER_CALLED, new Map()),
        e.set(u.NV.TOTAL_VOICE_MINUTES, new Map()),
        e.set(u.NV.PURCHASES, new Map()),
        e.set(u.NV.GIFTS, new Map()),
        e
    );
}
function x() {
    return {
        [u.NV.USER_ADD]: 0,
        [u.NV.GUILD_ADD]: 0,
        [u.NV.USER_INTERACTION]: 0,
        [u.NV.GUILD_INTERACTION]: 0,
        [u.NV.USER_CALLED]: 0,
        [u.NV.TOTAL_VOICE_MINUTES]: 0,
        [u.NV.PURCHASES]: 0,
        [u.NV.GIFTS]: 0,
    };
}
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (A = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (h = !0),
        A
    );
}
function F(e) {
    void 0 !== e && (f = e);
}
function V(e, t) {
    let n = t ? I : G();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                i = n.get(t);
            void 0 === i || i.has(e.event_id) || i.set(e.event_id, e);
        }),
        (I = n)
    );
}
function B(e) {
    U = e.reduce(
        (e, t) => ({
            ...e,
            [t.id]: {
                ...(0, s.dangerouslyConstructGuildRecordFromUntypedObject)(t),
                approximateMemberCount: t.approximate_member_count ?? 0,
            },
        }),
        U,
    );
}
function H(e) {
    b = e.reduce((e, t) => {
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
function j(e) {
    M = e.reduce((e, t) => ((e[t.entitlement_id] = t), e), {});
}
function W() {
    S = !0;
}
function Y(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n, ageGroup: i } = e,
        {
            actions: r,
            guilds: a,
            totals: s,
            teenId: o,
            rangeStartId: d,
            topUserActivities: c,
            topGuildActivities: u,
            totalSpendAmount: A,
            totalSpendCurrency: h,
            spendingLimit: I,
            monthlyPurchases: f,
            invoices: p,
            gifts: T,
        } = n;
    (_ = o),
        (E = d),
        V(r),
        F(s),
        B(a),
        k(t),
        null != p && H(p),
        null != T && j(T),
        (O = c),
        (R = u),
        (L = A),
        (y = h),
        (D = I ?? null),
        (v = f ?? null),
        (P = i ?? null),
        (S = !1),
        (N = l.default.fromTimestamp(Date.now())),
        (g = !0);
}
function K(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function $(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function z(e) {
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
        totalSpendCurrency: u,
        invoices: A,
        gifts: h,
        spendingLimit: I,
        monthlyPurchases: f,
    } = t;
    (_ = a),
        (E = s),
        V(n),
        F(i),
        B(r),
        null != A && H(A),
        null != h && j(h),
        (O = o),
        (R = d),
        (S = !1),
        (N = l.default.fromTimestamp(Date.now())),
        (L = c),
        (y = u),
        (D = I ?? null),
        (v = f ?? null);
}
function Z(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    V(n, !0), B(i);
}
function q(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function X(e) {
    let { linkedUsers: t } = e;
    k(t, !0);
}
function Q(e) {
    let { linkCode: t, expiresAt: n } = e;
    (p = t), (T = n);
}
function J(e) {
    let { tab: t } = e;
    m = t;
}
function ee(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(A).length
        ? o.Ay.fetchLinkedUsers()
        : k(t.linked_users);
}
function et(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    k(t);
}
function en(e) {
    let { countryCode: t } = e;
    null != t && (C = (0, i.XF)(t) ?? null);
}
function ei() {
    (_ = null),
        (E = null),
        (A = {}),
        (p = null),
        (T = null),
        (I = G()),
        (f = x()),
        (U = {}),
        (S = !1),
        (N = null),
        (m = w()),
        (h = !1),
        (O = []),
        (R = []),
        (L = null),
        (y = null),
        (D = null),
        (v = null),
        (b = {}),
        (M = {}),
        (P = null),
        (g = !1);
}
class er extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: et,
            CURRENT_USER_UPDATE: ee,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: Y,
            FAMILY_CENTER_FETCH_START: W,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: K,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: z,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: Z,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: $,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: q,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: X,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Q,
            FAMILY_CENTER_HANDLE_TAB_SELECT: J,
            SET_LOCATION_METADATA: en,
            LOGOUT: ei,
        });
    }
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (k(e.linkedUsers),
            B(e.guilds),
            V(e.teenActivity),
            (f = e.teenActivityTotals.reduce((e, t) => {
                let [n, i] = t.split(":"),
                    r = (0, d.k5)(n);
                return void 0 === r ? e : { ...e, [r]: parseInt(i, 10) };
            }, x())));
    }
    takeSnapshot() {
        let e;
        return {
            version: er.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(A),
                teenActivityTotals: Object.entries(f).map((e) => {
                    let [t, n] = e;
                    return `${t}:${n}`;
                }),
                teenActivity:
                    ((e = []),
                    I.forEach((t) => {
                        e.push(...Array.from(t.values()));
                    }),
                    e),
                guilds: Object.values(U),
            },
        };
    }
    getSelectedTeenId() {
        return _;
    }
    getLinkedUsers() {
        return A;
    }
    getLinkTimestamp(e) {
        let t = A[e];
        return null == t ? null : (t.updated_at ?? t.created_at);
    }
    getRangeStartTimestamp() {
        return null == E ? null : l.default.extractTimestamp(E);
    }
    getActionsForDisplayType(e) {
        let t = I.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return f[e];
    }
    getLinkCode() {
        return p;
    }
    getLinkCodeExpiresAt() {
        return T;
    }
    getGuild(e) {
        return U[e];
    }
    getSelectedTab() {
        return m;
    }
    getStartId() {
        return E;
    }
    getIsInitialized() {
        return g;
    }
    getAreLinkedUsersProcessed() {
        return h;
    }
    getUserCountry() {
        return C;
    }
    isLoading() {
        return S;
    }
    getTopUserActivities() {
        return O;
    }
    getTopGuildActivities() {
        return R;
    }
    getTotalSpendAmount() {
        return L;
    }
    getTotalSpendCurrency() {
        return y;
    }
    getTotalGiftValue() {
        let e = null,
            t = 0,
            n = !1;
        for (let i of Object.values(M))
            if (null != i.price) {
                if (null != e && i.price.currency !== e) return null;
                (e = i.price.currency), (t += i.price.amount), (n = !0);
            }
        return n && null != e ? { amount: t, currency: e } : null;
    }
    getSpendingLimit() {
        return D;
    }
    getMonthlyPurchases() {
        return v;
    }
    getPurchaseInfo(e) {
        return b[e];
    }
    getGiftInfo(e) {
        return M[e];
    }
    getAgeGroup() {
        return P;
    }
    canRefetch() {
        return null === N || l.default.age(N) > u.fD;
    }
    isCurrentUserInRestrictedHours() {
        if (!(0, c.Eq)({ location: "isInRestrictedHours" })) return !1;
        let e = a.default.getCurrentUser();
        return e?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let ea = new er();
