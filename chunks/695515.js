"use strict";
n.d(t, { A: () => es }), n(321073);
var i = n(423764),
    r = n(536802),
    s = n(287809),
    a = n(860689),
    o = n(935208),
    l = n(899847),
    u = n(923531),
    c = n(936926),
    d = n(191627);
let _ = null,
    h = null,
    f = {},
    p = !1,
    E = k(),
    m = U(),
    g = null,
    A = null,
    I = x(),
    T = !1,
    S = !1,
    y = null,
    C = null,
    N = [],
    v = [],
    R = null,
    O = null,
    b = null,
    D = null,
    L = {},
    w = {},
    M = null,
    P = {};
function x() {
    return window?.location?.pathname === d.he.FAMILY_CENTER_MY_FAMILY
        ? d.u9.REQUESTS
        : window?.location?.pathname === d.he.FAMILY_CENTER_SETTINGS
          ? d.u9.SETTINGS
          : d.u9.ACTIVITY;
}
function k() {
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
function U() {
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
        (f = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (p = !0),
        f
    );
}
function F(e) {
    void 0 !== e && (m = e);
}
function V(e, t) {
    let n = t ? E : k();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                i = n.get(t);
            void 0 === i || i.has(e.event_id) || i.set(e.event_id, e);
        }),
        (E = n)
    );
}
function B(e) {
    P = e.reduce(
        (e, t) => ({
            ...e,
            [t.id]: {
                ...(0, a.dangerouslyConstructGuildRecordFromUntypedObject)(t),
                approximateMemberCount: t.approximate_member_count ?? 0,
            },
        }),
        P,
    );
}
function j(e) {
    L = e.reduce((e, t) => {
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
    w = e.reduce((e, t) => ((e[t.entitlement_id] = t), e), {});
}
function Y() {
    S = !0;
}
function W(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n, ageGroup: i } = e,
        {
            actions: r,
            guilds: s,
            totals: a,
            teenId: l,
            rangeStartId: u,
            topUserActivities: c,
            topGuildActivities: d,
            totalSpendAmount: f,
            totalSpendCurrency: p,
            spendingLimit: E,
            monthlyPurchases: m,
            invoices: g,
            gifts: A,
        } = n;
    (_ = l),
        (h = u),
        V(r),
        F(a),
        B(s),
        G(t),
        null != g && j(g),
        null != A && H(A),
        (N = c),
        (v = d),
        (R = f),
        (O = p),
        (b = E ?? null),
        (D = m ?? null),
        (M = i ?? null),
        (S = !1),
        (y = o.default.fromTimestamp(Date.now())),
        (T = !0);
}
function K(e) {
    let { linkedUsers: t } = e;
    G(t);
}
function $(e) {
    let { linkedUsers: t } = e;
    G(t);
}
function z(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return !1;
    let {
        actions: n,
        totals: i,
        guilds: r,
        teenId: s,
        rangeStartId: a,
        topUserActivities: l,
        topGuildActivities: u,
        totalSpendAmount: c,
        totalSpendCurrency: d,
        invoices: f,
        gifts: p,
        spendingLimit: E,
        monthlyPurchases: m,
    } = t;
    (_ = s),
        (h = a),
        V(n),
        F(i),
        B(r),
        null != f && j(f),
        null != p && H(p),
        (N = l),
        (v = u),
        (S = !1),
        (y = o.default.fromTimestamp(Date.now())),
        (R = c),
        (O = d),
        (b = E ?? null),
        (D = m ?? null);
}
function q(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    V(n, !0), B(i);
}
function Z(e) {
    let { linkedUsers: t } = e;
    G(t);
}
function X(e) {
    let { linkedUsers: t } = e;
    G(t, !0);
}
function Q(e) {
    let { linkCode: t, expiresAt: n } = e;
    (g = t), (A = n);
}
function J(e) {
    let { tab: t } = e;
    I = t;
}
function ee(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = s.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(f).length
        ? l.Ay.fetchLinkedUsers()
        : G(t.linked_users);
}
function et(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    G(t);
}
function en(e) {
    let { countryCode: t } = e;
    null != t && (C = (0, i.XF)(t) ?? null);
}
function ei() {
    (_ = null),
        (h = null),
        (f = {}),
        (g = null),
        (A = null),
        (E = k()),
        (m = U()),
        (P = {}),
        (S = !1),
        (y = null),
        (I = x()),
        (p = !1),
        (N = []),
        (v = []),
        (R = null),
        (O = null),
        (b = null),
        (D = null),
        (L = {}),
        (w = {}),
        (M = null),
        (T = !1);
}
class er extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: et,
            CURRENT_USER_UPDATE: ee,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: W,
            FAMILY_CENTER_FETCH_START: Y,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: K,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: z,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: q,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: $,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: Z,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: X,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Q,
            FAMILY_CENTER_HANDLE_TAB_SELECT: J,
            SET_LOCATION_METADATA: en,
            LOGOUT: ei,
        });
    }
    initialize() {
        this.waitFor(s.default);
    }
    loadCache() {
        let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (G(e.linkedUsers),
            B(e.guilds),
            V(e.teenActivity),
            (m = e.teenActivityTotals.reduce((e, t) => {
                let [n, i] = t.split(":"),
                    r = (0, u.k5)(n);
                return void 0 === r ? e : { ...e, [r]: parseInt(i, 10) };
            }, U())));
    }
    takeSnapshot() {
        let e;
        return {
            version: er.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(f),
                teenActivityTotals: Object.entries(m).map((e) => {
                    let [t, n] = e;
                    return `${t}:${n}`;
                }),
                teenActivity:
                    ((e = []),
                    E.forEach((t) => {
                        e.push(...Array.from(t.values()));
                    }),
                    e),
                guilds: Object.values(P),
            },
        };
    }
    getSelectedTeenId() {
        return _;
    }
    getLinkedUsers() {
        return f;
    }
    getLinkTimestamp(e) {
        let t = f[e];
        return null == t ? null : (t.updated_at ?? t.created_at);
    }
    getRangeStartTimestamp() {
        return null == h ? null : o.default.extractTimestamp(h);
    }
    getActionsForDisplayType(e) {
        let t = E.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return m[e];
    }
    getLinkCode() {
        return g;
    }
    getLinkCodeExpiresAt() {
        return A;
    }
    getGuild(e) {
        return P[e];
    }
    getSelectedTab() {
        return I;
    }
    getStartId() {
        return h;
    }
    getIsInitialized() {
        return T;
    }
    getAreLinkedUsersProcessed() {
        return p;
    }
    getUserCountry() {
        return C;
    }
    isLoading() {
        return S;
    }
    getTopUserActivities() {
        return N;
    }
    getTopGuildActivities() {
        return v;
    }
    getTotalSpendAmount() {
        return R;
    }
    getTotalSpendCurrency() {
        return O;
    }
    getTotalGiftValue() {
        let e = null,
            t = 0,
            n = !1;
        for (let i of Object.values(w))
            if (null != i.price) {
                if (null != e && i.price.currency !== e) return null;
                (e = i.price.currency), (t += i.price.amount), (n = !0);
            }
        return n && null != e ? { amount: t, currency: e } : null;
    }
    getSpendingLimit() {
        return b;
    }
    getMonthlyPurchases() {
        return D;
    }
    getPurchaseInfo(e) {
        return L[e];
    }
    getGiftInfo(e) {
        return w[e];
    }
    getAgeGroup() {
        return M;
    }
    canRefetch() {
        return null === y || o.default.age(y) > d.fD;
    }
    isCurrentUserInRestrictedHours() {
        if (!(0, c.Eq)({ location: "isInRestrictedHours" })) return !1;
        let e = s.default.getCurrentUser();
        return e?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let es = new er();
