"use strict";
n.d(t, { A: () => ei }), n(321073);
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
    E = x(),
    m = k(),
    g = null,
    A = null,
    I = P(),
    T = !1,
    S = !1,
    y = null,
    N = null,
    v = [],
    C = [],
    R = null,
    O = null,
    b = null,
    D = null,
    L = {},
    w = null,
    M = {};
function P() {
    return window?.location?.pathname === d.he.FAMILY_CENTER_MY_FAMILY
        ? d.u9.REQUESTS
        : window?.location?.pathname === d.he.FAMILY_CENTER_SETTINGS
          ? d.u9.SETTINGS
          : d.u9.ACTIVITY;
}
function x() {
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
function k() {
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
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (f = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (p = !0),
        f
    );
}
function G(e) {
    void 0 !== e && (m = e);
}
function F(e, t) {
    let n = t ? E : x();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                i = n.get(t);
            void 0 === i || i.has(e.event_id) || i.set(e.event_id, e);
        }),
        (E = n)
    );
}
function V(e) {
    M = e.reduce(
        (e, t) => ({
            ...e,
            [t.id]: {
                ...(0, a.dangerouslyConstructGuildRecordFromUntypedObject)(t),
                approximateMemberCount: t.approximate_member_count ?? 0,
            },
        }),
        M,
    );
}
function B(e) {
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
function H() {
    S = !0;
}
function j(e) {
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
        F(r),
        G(a),
        V(s),
        U(t),
        null != g && B(g),
        (v = c),
        (C = d),
        (R = f),
        (O = p),
        (b = E ?? null),
        (D = m ?? null),
        (w = i ?? null),
        (S = !1),
        (y = o.default.fromTimestamp(Date.now())),
        (T = !0);
}
function Y(e) {
    let { linkedUsers: t } = e;
    U(t);
}
function W(e) {
    let { linkedUsers: t } = e;
    U(t);
}
function K(e) {
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
        F(n),
        G(i),
        V(r),
        null != f && B(f),
        (v = l),
        (C = u),
        (S = !1),
        (y = o.default.fromTimestamp(Date.now())),
        (R = c),
        (O = d),
        (b = p ?? null),
        (D = E ?? null);
}
function $(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    F(n, !0), V(i);
}
function z(e) {
    let { linkedUsers: t } = e;
    U(t);
}
function q(e) {
    let { linkedUsers: t } = e;
    U(t, !0);
}
function X(e) {
    let { linkCode: t, expiresAt: n } = e;
    (g = t), (A = n);
}
function Z(e) {
    let { tab: t } = e;
    I = t;
}
function Q(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = s.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(f).length
        ? l.Ay.fetchLinkedUsers()
        : U(t.linked_users);
}
function J(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    U(t);
}
function ee(e) {
    let { countryCode: t } = e;
    null != t && (N = (0, i.XF)(t) ?? null);
}
function et() {
    (_ = null),
        (h = null),
        (f = {}),
        (E = x()),
        (m = k()),
        (M = {}),
        (S = !1),
        (y = null),
        (I = P()),
        (p = !1),
        (v = []),
        (C = []),
        (R = null),
        (O = null),
        (b = null),
        (D = null),
        (L = {}),
        (w = null),
        (T = !1);
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
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: Y,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: K,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: $,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: W,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: q,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: X,
            FAMILY_CENTER_HANDLE_TAB_SELECT: Z,
            SET_LOCATION_METADATA: ee,
            LOGOUT: et,
        });
    }
    initialize() {
        this.waitFor(s.default);
    }
    loadCache() {
        let e = this.readSnapshot(en.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (U(e.linkedUsers),
            V(e.guilds),
            F(e.teenActivity),
            (m = e.teenActivityTotals.reduce((e, t) => {
                let [n, i] = t.split(":"),
                    r = (0, u.k5)(n);
                return void 0 === r ? e : { ...e, [r]: parseInt(i, 10) };
            }, k())));
    }
    takeSnapshot() {
        let e;
        return {
            version: en.LATEST_SNAPSHOT_VERSION,
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
                guilds: Object.values(M),
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
        return M[e];
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
        return N;
    }
    isLoading() {
        return S;
    }
    getTopUserActivities() {
        return v;
    }
    getTopGuildActivities() {
        return C;
    }
    getTotalSpendAmount() {
        return R;
    }
    getTotalSpendCurrency() {
        return O;
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
    getAgeGroup() {
        return w;
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
let ei = new en();
