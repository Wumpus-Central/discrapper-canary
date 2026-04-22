"use strict";
n.d(t, { A: () => ee }), n(321073);
var r = n(518977),
    i = n(536802),
    s = n(287809),
    a = n(860689),
    o = n(661191),
    l = n(899847),
    u = n(923531),
    d = n(936926),
    c = n(191627);
let _ = null,
    f = null,
    E = {},
    h = !1,
    p = w(),
    m = M(),
    g = null,
    A = L(),
    I = !1,
    T = !1,
    S = null,
    y = null,
    N = [],
    O = [],
    R = null,
    v = null,
    C = {},
    b = null,
    D = {};
function L() {
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
        e
    );
}
function M() {
    return {
        [c.NV.USER_ADD]: 0,
        [c.NV.GUILD_ADD]: 0,
        [c.NV.USER_INTERACTION]: 0,
        [c.NV.GUILD_INTERACTION]: 0,
        [c.NV.USER_CALLED]: 0,
        [c.NV.TOTAL_VOICE_MINUTES]: 0,
        [c.NV.PURCHASES]: 0,
    };
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (E = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (h = !0),
        E
    );
}
function U(e) {
    void 0 !== e && (m = e);
}
function k(e, t) {
    let n = t ? p : w();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                r = n.get(t);
            void 0 === r || r.has(e.event_id) || r.set(e.event_id, e);
        }),
        (p = n)
    );
}
function x(e) {
    D = e.reduce(
        (e, t) => ({
            ...e,
            [t.id]: {
                ...(0, a.dangerouslyConstructGuildRecordFromUntypedObject)(t),
                approximateMemberCount: t.approximate_member_count ?? 0,
            },
        }),
        D,
    );
}
function G(e) {
    C = e.reduce((e, t) => {
        if (null != t.invoice_items && t.invoice_items.length > 0) {
            let n = t.invoice_items[0],
                r = n.sku_id,
                i = n.subscription_plan_id;
            (null != r || null != i) &&
                (e[t.id] = { sku_id: r, subscription_plan_id: i, total: t.total, currency: t.currency });
        }
        return e;
    }, {});
}
function V() {
    T = !0;
}
function F(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n, ageGroup: r } = e,
        {
            actions: i,
            guilds: s,
            totals: a,
            teenId: l,
            rangeStartId: u,
            topUserActivities: d,
            topGuildActivities: c,
            totalSpendAmount: E,
            totalSpendCurrency: h,
            invoices: p,
        } = n;
    (_ = l),
        (f = u),
        k(i),
        U(a),
        x(s),
        P(t),
        null != p && G(p),
        (N = d),
        (O = c),
        (R = E),
        (v = h),
        (b = r ?? null),
        (T = !1),
        (S = o.default.fromTimestamp(Date.now())),
        (I = !0);
}
function B(e) {
    let { linkedUsers: t } = e;
    P(t);
}
function H(e) {
    let { linkedUsers: t } = e;
    P(t);
}
function Y(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return !1;
    let {
        actions: n,
        totals: r,
        guilds: i,
        teenId: s,
        rangeStartId: a,
        topUserActivities: l,
        topGuildActivities: u,
        totalSpendAmount: d,
        totalSpendCurrency: c,
        invoices: E,
    } = t;
    (_ = s),
        (f = a),
        k(n),
        U(r),
        x(i),
        null != E && G(E),
        (N = l),
        (O = u),
        (T = !1),
        (S = o.default.fromTimestamp(Date.now())),
        (R = d),
        (v = c);
}
function W(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: r } = t;
    k(n, !0), x(r);
}
function j(e) {
    let { linkedUsers: t } = e;
    P(t);
}
function K(e) {
    let { linkedUsers: t } = e;
    P(t, !0);
}
function $(e) {
    let { linkCode: t } = e;
    g = t;
}
function z(e) {
    let { tab: t } = e;
    A = t;
}
function q(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = s.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(E).length
        ? l.Ay.fetchLinkedUsers()
        : P(t.linked_users);
}
function X(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    P(t);
}
function Q(e) {
    let { countryCode: t } = e;
    null != t && (y = (0, r.XF)(t) ?? null);
}
function J() {
    (_ = null),
        (f = null),
        (E = {}),
        (p = w()),
        (m = M()),
        (D = {}),
        (T = !1),
        (S = null),
        (A = L()),
        (h = !1),
        (N = []),
        (O = []),
        (R = null),
        (v = null),
        (C = {}),
        (b = null),
        (I = !1);
}
class Z extends i.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: X,
            CURRENT_USER_UPDATE: q,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: F,
            FAMILY_CENTER_FETCH_START: V,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: B,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: Y,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: W,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: H,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: j,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: K,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: $,
            FAMILY_CENTER_HANDLE_TAB_SELECT: z,
            SET_LOCATION_METADATA: Q,
            LOGOUT: J,
        });
    }
    initialize() {
        this.waitFor(s.default);
    }
    loadCache() {
        let e = this.readSnapshot(Z.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (P(e.linkedUsers),
            x(e.guilds),
            k(e.teenActivity),
            (m = e.teenActivityTotals.reduce((e, t) => {
                let [n, r] = t.split(":"),
                    i = (0, u.k5)(n);
                return void 0 === i ? e : { ...e, [i]: parseInt(r, 10) };
            }, M())));
    }
    takeSnapshot() {
        let e;
        return {
            version: Z.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(E),
                teenActivityTotals: Object.entries(m).map((e) => {
                    let [t, n] = e;
                    return `${t}:${n}`;
                }),
                teenActivity:
                    ((e = []),
                    p.forEach((t) => {
                        e.push(...Array.from(t.values()));
                    }),
                    e),
                guilds: Object.values(D),
            },
        };
    }
    getSelectedTeenId() {
        return _;
    }
    getLinkedUsers() {
        return E;
    }
    getLinkTimestamp(e) {
        let t = E[e];
        return null == t ? null : (t.updated_at ?? t.created_at);
    }
    getRangeStartTimestamp() {
        return null == f ? null : o.default.extractTimestamp(f);
    }
    getActionsForDisplayType(e) {
        let t = p.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return m[e];
    }
    getLinkCode() {
        return g;
    }
    getGuild(e) {
        return D[e];
    }
    getSelectedTab() {
        return A;
    }
    getStartId() {
        return f;
    }
    getIsInitialized() {
        return I;
    }
    getAreLinkedUsersProcessed() {
        return h;
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
        return O;
    }
    getTotalSpendAmount() {
        return R;
    }
    getTotalSpendCurrency() {
        return v;
    }
    getPurchaseInfo(e) {
        return C[e];
    }
    getAgeGroup() {
        return b;
    }
    canRefetch() {
        return null === S || o.default.age(S) > c.fD;
    }
    isCurrentUserInRestrictedHours() {
        if (!(0, d.Eq)({ location: "isInRestrictedHours" })) return !1;
        let e = s.default.getCurrentUser();
        return e?.restrictedSchedule?.isInRestrictedHours() ?? !1;
    }
}
let ee = new Z();
