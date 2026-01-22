n.d(t, { A: () => ea }), n(896048), n(321073), n(747238);
var r = n(518977),
    i = n(536802),
    a = n(287809),
    s = n(860689),
    o = n(661191),
    l = n(899847),
    c = n(923531),
    u = n(191627);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = null,
    m = null,
    g = {},
    E = !1,
    b = L(),
    y = j(),
    O = null,
    A = x(),
    v = !1,
    S = !1,
    I = null,
    T = null,
    C = [],
    N = [],
    R = null,
    w = null,
    P = {},
    D = {};
function x() {
    var e, t, n, r;
    return (null == (t = window) || null == (e = t.location) ? void 0 : e.pathname) === u.he.FAMILY_CENTER_MY_FAMILY
        ? u.u9.REQUESTS
        : (null == (r = window) || null == (n = r.location) ? void 0 : n.pathname) === u.he.FAMILY_CENTER_SETTINGS
          ? u.u9.SETTINGS
          : u.u9.ACTIVITY;
}
function L() {
    let e = new Map();
    return (
        e.set(u.NV.USER_ADD, new Map()),
        e.set(u.NV.GUILD_ADD, new Map()),
        e.set(u.NV.USER_INTERACTION, new Map()),
        e.set(u.NV.GUILD_INTERACTION, new Map()),
        e.set(u.NV.USER_CALLED, new Map()),
        e.set(u.NV.TOTAL_VOICE_MINUTES, new Map()),
        e.set(u.NV.PURCHASES, new Map()),
        e
    );
}
function j() {
    return {
        [u.NV.USER_ADD]: 0,
        [u.NV.GUILD_ADD]: 0,
        [u.NV.USER_INTERACTION]: 0,
        [u.NV.GUILD_INTERACTION]: 0,
        [u.NV.USER_CALLED]: 0,
        [u.NV.TOTAL_VOICE_MINUTES]: 0,
        [u.NV.PURCHASES]: 0,
    };
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (
        arguments.length > 1 && arguments[1],
        (g = e.length > 0 ? e.reduce((e, t) => _(f({}, e), { [t.user_id]: t }), {}) : {}),
        (E = !0),
        g
    );
}
function k(e) {
    void 0 !== e && (y = e);
}
function U(e, t) {
    let n = t ? b : L();
    return (
        e.forEach((e) => {
            let t = e.display_type,
                r = n.get(t);
            void 0 === r || r.has(e.event_id) || r.set(e.event_id, e);
        }),
        (b = n)
    );
}
function G(e) {
    D = e.reduce((e, t) => {
        var n;
        return _(f({}, e), {
            [t.id]: _(f({}, (0, s.dangerouslyConstructGuildRecordFromUntypedObject)(t)), {
                approximateMemberCount: null != (n = t.approximate_member_count) ? n : 0,
            }),
        });
    }, D);
}
function V(e) {
    P = e.reduce((e, t) => {
        if (null != t.invoice_items && t.invoice_items.length > 0) {
            let n = t.invoice_items[0],
                r = n.sku_id,
                i = n.subscription_plan_id;
            (null != r || null != i) &&
                (e[t.id] = {
                    sku_id: r,
                    subscription_plan_id: i,
                    total: t.total,
                    currency: t.currency,
                });
        }
        return e;
    }, {});
}
function F() {
    S = !0;
}
function B(e) {
    let { linkedUsers: t, familyCenterTeenActivity: n } = e,
        {
            actions: r,
            guilds: i,
            totals: a,
            teenId: s,
            rangeStartId: l,
            topUserActivities: c,
            topGuildActivities: u,
            totalSpendAmount: d,
            totalSpendCurrency: f,
            invoices: p,
        } = n;
    (h = s),
        (m = l),
        U(r),
        k(a),
        G(i),
        M(t),
        null != p && V(p),
        (C = c),
        (N = u),
        (R = d),
        (w = f),
        (S = !1),
        (I = o.default.fromTimestamp(Date.now())),
        (v = !0);
}
function H(e) {
    let { linkedUsers: t } = e;
    M(t);
}
function Y(e) {
    let { linkedUsers: t } = e;
    M(t);
}
function W(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return !1;
    let {
        actions: n,
        totals: r,
        guilds: i,
        teenId: a,
        rangeStartId: s,
        topUserActivities: l,
        topGuildActivities: c,
        totalSpendAmount: u,
        totalSpendCurrency: d,
        invoices: f,
    } = t;
    (h = a),
        (m = s),
        U(n),
        k(r),
        G(i),
        null != f && V(f),
        (C = l),
        (N = c),
        (S = !1),
        (I = o.default.fromTimestamp(Date.now())),
        (R = u),
        (w = d);
}
function K(e) {
    let { familyCenterTeenActivity: t } = e,
        { actions: n, guilds: r } = t;
    U(n, !0), G(r);
}
function z(e) {
    let { linkedUsers: t } = e;
    M(t);
}
function q(e) {
    let { linkedUsers: t } = e;
    M(t, !0);
}
function X(e) {
    let { linkCode: t } = e;
    O = t;
}
function Z(e) {
    let { tab: t } = e;
    A = t;
}
function Q(e) {
    let { user: t } = e;
    if (void 0 === t.linked_users) return !1;
    let n = a.default.getUsers();
    t.linked_users.some((e) => {
        let { user_id: t } = e;
        return void 0 === n[t];
    }) && t.linked_users.length > Object.keys(g).length
        ? l.Ay.fetchLinkedUsers()
        : M(t.linked_users);
}
function $(e) {
    let { linkedUsers: t } = e;
    if (null == t) return !1;
    M(t);
}
function J(e) {
    var t;
    let { countryCode: n } = e;
    null != n && (T = null != (t = (0, r.XF)(n)) ? t : null);
}
function ee() {
    let e = [];
    return (
        b.forEach((t) => {
            e.push(...Array.from(t.values()));
        }),
        e
    );
}
function et() {
    return Object.entries(y).map((e) => {
        let [t, n] = e;
        return "".concat(t, ":").concat(n);
    });
}
function en(e) {
    y = e.reduce((e, t) => {
        let [n, r] = t.split(":"),
            i = (0, c.k5)(n);
        return void 0 === i ? e : _(f({}, e), { [i]: parseInt(r, 10) });
    }, j());
}
function er() {
    (h = null),
        (m = null),
        (g = {}),
        (b = L()),
        (y = j()),
        (D = {}),
        (S = !1),
        (I = null),
        (A = x()),
        (E = !1),
        (C = []),
        (N = []),
        (R = null),
        (w = null),
        (P = {});
}
class ei extends i.A {
    initialize() {
        this.waitFor(a.default);
    }
    loadCache() {
        let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
        null != e && (M(e.linkedUsers), G(e.guilds), U(e.teenActivity), en(e.teenActivityTotals));
    }
    takeSnapshot() {
        return {
            version: ei.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(g),
                teenActivityTotals: et(),
                teenActivity: ee(),
                guilds: Object.values(D),
            },
        };
    }
    getSelectedTeenId() {
        return h;
    }
    getLinkedUsers() {
        return g;
    }
    getLinkTimestamp(e) {
        var t;
        let n = g[e];
        return null == n ? null : null != (t = n.updated_at) ? t : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == m ? null : o.default.extractTimestamp(m);
    }
    getActionsForDisplayType(e) {
        let t = b.get(e);
        return null != t ? Array.from(t.values()) : [];
    }
    getTotalForDisplayType(e) {
        return y[e];
    }
    getLinkCode() {
        return O;
    }
    getGuild(e) {
        return D[e];
    }
    getSelectedTab() {
        return A;
    }
    getStartId() {
        return m;
    }
    getIsInitialized() {
        return v;
    }
    getAreLinkedUsersProcessed() {
        return E;
    }
    getUserCountry() {
        return T;
    }
    isLoading() {
        return S;
    }
    getTopUserActivities() {
        return C;
    }
    getTopGuildActivities() {
        return N;
    }
    getTotalSpendAmount() {
        return R;
    }
    getTotalSpendCurrency() {
        return w;
    }
    getPurchaseInfo(e) {
        return P[e];
    }
    canRefetch() {
        return null === I || o.default.age(I) > u.fD;
    }
    constructor() {
        super({
            CONNECTION_OPEN: $,
            CURRENT_USER_UPDATE: Q,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: B,
            FAMILY_CENTER_FETCH_START: F,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: H,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: W,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: K,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: Y,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: z,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: q,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: X,
            FAMILY_CENTER_HANDLE_TAB_SELECT: Z,
            SET_LOCATION_METADATA: J,
            LOGOUT: er,
        });
    }
}
d(ei, "displayName", "FamilyCenterStore"), d(ei, "LATEST_SNAPSHOT_VERSION", 3);
let ea = new ei();
