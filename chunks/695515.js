"use strict";
n.d(t, { A: () => er }), n(321073);
var r = n(518977),
    i = n(536802),
    s = n(287809),
    a = n(860689),
    o = n(661191),
    l = n(899847),
    u = n(923531),
    c = n(936926),
    d = n(191627);
let _ = null,
    f = null,
    p = {},
    h = !1,
    m = w(),
    E = x(),
    g = null,
    A = L(),
    I = !1,
    T = !1,
    S = null,
    y = null,
    v = [],
    N = [],
    C = null,
    b = null,
    R = {},
    O = null,
    D = {};
function L() {
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
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (p = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (h = !0),
        p
    );
}
function P(e) {
    void 0 !== e && (E = e);
}
function k(e, t) {
    let n = t ? m : w();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                r = n.get(t);
            void 0 === r || r.has(e.event_id) || r.set(e.event_id, e);
        }),
        (m = n)
    );
}
function U(e) {
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
    R = e.reduce((e, t) => {
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
function F() {
    T = !0;
}
function V(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n, ageGroup: r } = e,
        {
            actions: i,
            guilds: s,
            totals: a,
            teenId: l,
            rangeStartId: u,
            topUserActivities: c,
            topGuildActivities: d,
            totalSpendAmount: p,
            totalSpendCurrency: h,
            invoices: m,
        } = n;
    (_ = l),
        (f = u),
        k(i),
        P(a),
        U(s),
        M(t),
        null != m && G(m),
        (v = c),
        (N = d),
        (C = p),
        (b = h),
        (O = r ?? null),
        (T = !1),
        (S = o.default.fromTimestamp(Date.now())),
        (I = !0);
}
function B(e) {
    let { linkedUsers: t } = e;
    M(t);
}
function H(e) {
    let { linkedUsers: t } = e;
    M(t);
}
function j(e) {
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
        totalSpendAmount: c,
        totalSpendCurrency: d,
        invoices: p,
    } = t;
    (_ = s),
        (f = a),
        k(n),
        P(r),
        U(i),
        null != p && G(p),
        (v = l),
        (N = u),
        (T = !1),
        (S = o.default.fromTimestamp(Date.now())),
        (C = c),
        (b = d);
}
function Y(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: r } = t;
    k(n, !0), U(r);
}
function W(e) {
    let { linkedUsers: t } = e;
    M(t);
}
function K(e) {
    let { linkedUsers: t } = e;
    M(t, !0);
}
function z(e) {
    let { linkCode: t } = e;
    g = t;
}
function $(e) {
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
    }) && t.linked_users.length > Object.keys(p).length
        ? l.Ay.fetchLinkedUsers()
        : M(t.linked_users);
}
function Z(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    M(t);
}
function X(e) {
    let { countryCode: t } = e;
    null != t && (y = (0, r.XF)(t) ?? null);
}
function Q() {
    let e = [];
    return (
        m.forEach((t) => {
            e.push(...Array.from(t.values()));
        }),
        e
    );
}
function J() {
    return Object.entries(E).map((e) => {
        let [t, n] = e;
        return `${t}:${n}`;
    });
}
function ee(e) {
    E = e.reduce((e, t) => {
        let [n, r] = t.split(":"),
            i = (0, u.k5)(n);
        return void 0 === i ? e : { ...e, [i]: parseInt(r, 10) };
    }, x());
}
function et() {
    (_ = null),
        (f = null),
        (p = {}),
        (m = w()),
        (E = x()),
        (D = {}),
        (T = !1),
        (S = null),
        (A = L()),
        (h = !1),
        (v = []),
        (N = []),
        (C = null),
        (b = null),
        (R = {}),
        (O = null),
        (I = !1);
}
class en extends i.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: Z,
            CURRENT_USER_UPDATE: q,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: V,
            FAMILY_CENTER_FETCH_START: F,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: B,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: j,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: Y,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: H,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: W,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: K,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: z,
            FAMILY_CENTER_HANDLE_TAB_SELECT: $,
            SET_LOCATION_METADATA: X,
            LOGOUT: et,
        });
    }
    initialize() {
        this.waitFor(s.default);
    }
    loadCache() {
        let e = this.readSnapshot(en.LATEST_SNAPSHOT_VERSION);
        null != e && (M(e.linkedUsers), U(e.guilds), k(e.teenActivity), ee(e.teenActivityTotals));
    }
    takeSnapshot() {
        return {
            version: en.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(p),
                teenActivityTotals: J(),
                teenActivity: Q(),
                guilds: Object.values(D),
            },
        };
    }
    getSelectedTeenId() {
        return _;
    }
    getLinkedUsers() {
        return p;
    }
    getLinkTimestamp(e) {
        let t = p[e];
        return null == t ? null : (t.updated_at ?? t.created_at);
    }
    getRangeStartTimestamp() {
        return null == f ? null : o.default.extractTimestamp(f);
    }
    getActionsForDisplayType(e) {
        let t = m.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return E[e];
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
        return v;
    }
    getTopGuildActivities() {
        return N;
    }
    getTotalSpendAmount() {
        return C;
    }
    getTotalSpendCurrency() {
        return b;
    }
    getPurchaseInfo(e) {
        return R[e];
    }
    getAgeGroup() {
        return O;
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
let er = new en();
