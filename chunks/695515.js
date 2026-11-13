n(321073);
var i = n(956956),
    r = n(536802),
    a = n(287809),
    s = n(537975),
    l = n(811091),
    o = n(899847),
    d = n(191627);
let c = null,
    u = null,
    _ = {},
    E = !1,
    A = w(),
    f = G(),
    h = null,
    I = null,
    p = U(),
    m = !1,
    T = !1,
    g = !1,
    S = null,
    N = null,
    C = [],
    O = [],
    R = null,
    L = null,
    y = null,
    D = null,
    b = {},
    v = {},
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
    ((c = null),
        (u = null),
        (A = w()),
        (f = G()),
        (C = []),
        (O = []),
        (R = null),
        (L = null),
        (y = null),
        (D = null),
        (b = {}),
        (v = {}));
}
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = (arguments.length > 1 && arguments[1], null != c ? _[c] : void 0);
    return (
        (_ = e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.user_id]: t }), {}) : {}),
        (E = !0),
        null != t && _[t.user_id]?.link_status !== d.Ef.ACTIVE && x(),
        _
    );
}
function F(e) {
    void 0 !== e && (f = e);
}
function B(e, t) {
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
function V(e) {
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
    v = e.reduce((e, t) => ((e[t.entitlement_id] = t), e), {});
}
function W() {
    ((T = !0), (g = !1));
}
function Y() {
    if (!T) return !1;
    ((T = !1), (g = !0));
}
function K() {
    T = !1;
}
function $(e) {
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
            totalSpendCurrency: f,
            spendingLimit: h,
            monthlyPurchases: I,
            invoices: p,
            gifts: N,
        } = n;
    ((c = o),
        (u = d),
        B(r),
        F(s),
        V(a),
        k(t),
        null != p && H(p),
        null != N && j(N),
        (C = _),
        (O = E),
        (R = A),
        (L = f),
        (y = h ?? null),
        (D = I ?? null),
        (P = i ?? null),
        (T = !1),
        (g = !1),
        (S = l.default.fromTimestamp(Date.now())),
        (m = !0));
}
function X(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function z(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function q(e) {
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
        gifts: f,
        spendingLimit: h,
        monthlyPurchases: I,
    } = t;
    ((c = a),
        (u = s),
        B(n),
        F(i),
        V(r),
        null != A && H(A),
        null != f && j(f),
        (C = o),
        (O = d),
        (T = !1),
        (S = l.default.fromTimestamp(Date.now())),
        (R = _),
        (L = E),
        (y = h ?? null),
        (D = I ?? null));
}
function Q(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: i } = t;
    (B(n, !0), V(i));
}
function J(e) {
    let { linkedUsers: t } = e;
    k(t);
}
function Z(e) {
    let { linkedUsers: t } = e;
    k(t, !0);
}
function ee(e) {
    let { linkCode: t, expiresAt: n } = e;
    ((h = t), (I = n));
}
function et(e) {
    let { tab: t } = e;
    p = t;
}
function en(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(_).length
        ? o.Ay.fetchLinkedUsers()
        : k(t.linked_users);
}
function ei(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    k(t);
}
function er(e) {
    let { countryCode: t } = e;
    null != t && (N = (0, i.XF)(t) ?? null);
}
function ea() {
    (x(),
        (_ = {}),
        (h = null),
        (I = null),
        (M = {}),
        (T = !1),
        (g = !1),
        (S = null),
        (p = U()),
        (E = !1),
        (P = null),
        (m = !1));
}
class es extends r.A {
    static displayName = "FamilyCenterStore";
    static LATEST_SNAPSHOT_VERSION = 3;
    constructor() {
        super({
            CONNECTION_OPEN: ei,
            CURRENT_USER_UPDATE: en,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: $,
            FAMILY_CENTER_FETCH_START: W,
            FAMILY_CENTER_INITIAL_LOAD_FAILURE: Y,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: X,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: q,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_FAILURE: K,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: Q,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: J,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: Z,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: ee,
            FAMILY_CENTER_HANDLE_TAB_SELECT: et,
            SET_LOCATION_METADATA: er,
            LOGOUT: ea,
        });
    }
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(es.LATEST_SNAPSHOT_VERSION);
        null != e &&
            (k(e.linkedUsers),
            V(e.guilds),
            B(e.teenActivity),
            (f = e.teenActivityTotals.reduce((e, t) => {
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
            version: es.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(_),
                teenActivityTotals: Object.entries(f).map((e) => {
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
        return f[e];
    }
    getLinkCode() {
        return h;
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
        return m;
    }
    getAreLinkedUsersProcessed() {
        return E;
    }
    getUserCountry() {
        return N;
    }
    isLoading() {
        return T;
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
        for (let i of Object.values(v))
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
        return b[e];
    }
    getGiftInfo(e) {
        return v[e];
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
let el = new es();
n.d(t, {}, { A: el });
