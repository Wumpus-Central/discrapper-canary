"use strict";
n.d(t, { A: () => en }), n(321073);
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
    E = P(),
    m = x(),
    g = null,
    A = M(),
    I = !1,
    T = !1,
    S = null,
    y = null,
    N = [],
    v = [],
    C = null,
    R = null,
    O = null,
    b = null,
    D = {},
    L = null,
    w = {};
function M() {
    return window?.location?.pathname === d.he.FAMILY_CENTER_MY_FAMILY
        ? d.u9.REQUESTS
        : window?.location?.pathname === d.he.FAMILY_CENTER_SETTINGS
          ? d.u9.SETTINGS
          : d.u9.ACTIVITY;
}
function P() {
    let e = new Map();
    return (
        e.set(d.NV.USER_ADD, new Map()),
        e.set(d.NV.GUILD_ADD, new Map()),
        e.set(d.NV.USER_INTERACTION, new Map()),
        e.set(d.NV.GUILD_INTERACTION, new Map()),
        e.set(d.NV.USER_CALLED, new Map()),
        e.set(d.NV.TOTAL_VOICE_MINUTES, new Map()),
        e.set(d.NV.PURCHASES, new Map()),
        e
    );
}
function x() {
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
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (f = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (p = !0),
        f
    );
}
function U(e) {
    void 0 !== e && (m = e);
}
function G(e, t) {
    let n = t ? E : P();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                i = n.get(t);
            void 0 === i || i.has(e.event_id) || i.set(e.event_id, e);
        }),
        (E = n)
    );
}
function F(e) {
    w = e.reduce(
        (e, t) => ({
            ...e,
            [t.id]: {
                ...(0, a.dangerouslyConstructGuildRecordFromUntypedObject)(t),
                approximateMemberCount: t.approximate_member_count ?? 0,
            },
        }),
        w,
    );
}
function V(e) {
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
function B() {
    T = !0;
}
function H(e) {
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
        } = n;
    (_ = l),
        (h = u),
        G(r),
        U(a),
        F(s),
        k(t),
        null != g && V(g),
        (N = c),
        (v = d),
        (C = f),
        (R = p),
        (O = E ?? null),
        (b = m ?? null),
        (L = i ?? null),
        (T = !1),
        (S = o.default.fromTimestamp(Date.now())),
        (I = !0);
}
function j(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function Y(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function W(e) {
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
        spendingLimit: p,
        monthlyPurchases: E,
    } = t;
    (_ = s),
        (h = a),
        G(n),
        U(i),
        F(r),
        null != f && V(f),
        (N = l),
        (v = u),
        (T = !1),
        (S = o.default.fromTimestamp(Date.now())),
        (C = c),
        (R = d),
        (O = p ?? null),
        (b = E ?? null);
}
function K(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    G(n, !0), F(i);
}
function $(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function z(e) {
    let { linkedUsers: t } = e;
    k(t, !0);
}
function q(e) {
    let { linkCode: t } = e;
    g = t;
}
function X(e) {
    let { tab: t } = e;
    A = t;
}
function Z(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = s.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(f).length
        ? l.Ay.fetchLinkedUsers()
        : k(t.linked_users);
}
function Q(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    k(t);
}
function J(e) {
    let { countryCode: t } = e;
    null != t && (y = (0, i.XF)(t) ?? null);
}
function ee() {
    (_ = null),
        (h = null),
        (f = {}),
        (E = P()),
        (m = x()),
        (w = {}),
        (T = !1),
        (S = null),
        (A = M()),
        (p = !1),
        (N = []),
        (v = []),
        (C = null),
        (R = null),
        (O = null),
        (b = null),
        (D = {}),
        (L = null),
        (I = !1);
}
class et extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: Q,
            CURRENT_USER_UPDATE: Z,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: H,
            FAMILY_CENTER_FETCH_START: B,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: j,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: W,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: K,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: Y,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: $,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: z,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: q,
            FAMILY_CENTER_HANDLE_TAB_SELECT: X,
            SET_LOCATION_METADATA: J,
            LOGOUT: ee,
        });
    }
    initialize() {
        this.waitFor(s.default);
    }
    loadCache() {
        let e = this.readSnapshot(et.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (k(e.linkedUsers),
            F(e.guilds),
            G(e.teenActivity),
            (m = e.teenActivityTotals.reduce((e, t) => {
                let [n, i] = t.split(":"),
                    r = (0, u.k5)(n);
                return void 0 === r ? e : { ...e, [r]: parseInt(i, 10) };
            }, x())));
    }
    takeSnapshot() {
        let e;
        return {
            version: et.LATEST_SNAPSHOT_VERSION,
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
                guilds: Object.values(w),
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
    getGuild(e) {
        return w[e];
    }
    getSelectedTab() {
        return A;
    }
    getStartId() {
        return h;
    }
    getIsInitialized() {
        return I;
    }
    getAreLinkedUsersProcessed() {
        return p;
    }
    getUserCountry() {
        return y;
    }
    isLoading() {
        return T;
    }
    getTopUserActivities() {
        return N;
    }
    getTopGuildActivities() {
        return v;
    }
    getTotalSpendAmount() {
        return C;
    }
    getTotalSpendCurrency() {
        return R;
    }
    getSpendingLimit() {
        return O;
    }
    getMonthlyPurchases() {
        return b;
    }
    getPurchaseInfo(e) {
        return D[e];
    }
    getAgeGroup() {
        return L;
    }
    canRefetch() {
        return null === S || o.default.age(S) > d.fD;
    }
    isCurrentUserInRestrictedHours() {
        if (!(0, c.Eq)({ location: "isInRestrictedHours" })) return !1;
        let e = s.default.getCurrentUser();
        return e?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let en = new et();
