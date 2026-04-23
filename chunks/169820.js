let n;
e.d(i, {
    E: () => g,
    W_: () => m,
    Ko: () => b,
    sD: () => O,
    GD: () => F,
    CZ: () => h,
    $s: () => L,
    mJ: () => P,
    wm: () => R,
}),
    e(321073),
    e(938796);
var l,
    s = e(64700),
    a = e(17928),
    o = e(339048),
    r = e(71393),
    u = e(576705),
    c = e(97352),
    d = e(166403),
    S = e(67480),
    p = e(228366);
let I = { lastGuildDismissedTime: {} };
class _ extends a.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
        n = t;
    }
    getUserAgnosticState() {
        return n;
    }
    getLastGuildDismissedTime(t) {
        return n.lastGuildDismissedTime[t];
    }
}
let T = new _(p.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (t) {
        let { guildId: i } = t;
        n.lastGuildDismissedTime[i] = Date.now();
    },
});
var C = e(143582),
    A = e(337095),
    E = e(607940),
    N = e(163437),
    f = e(652215),
    P =
        (((l = {})[(l.NOT_LOADED = 0)] = "NOT_LOADED"),
        (l[(l.LOADING = 1)] = "LOADING"),
        (l[(l.LOADED = 2)] = "LOADED"),
        (l[(l.ERROR = 3)] = "ERROR"),
        l);
let h = (t) => {
    let { guildId: i, canFetch: e = !0, forceRefetch: n = !1 } = t,
        l = (0, a.bG)([E.A], () => (null != i ? E.A.getEntitlementsForGuildFetchState(i) : null), [i]);
    return (
        s.useEffect(() => {
            if (null == i || i === f.ME) return;
            let t = E.A.getEntitlementsForGuildFetchState(i);
            e && (t === E.e.NOT_FETCHED || n) && (0, C.f5)(i);
        }, [i, e, n]),
        { entitlementsLoaded: l === E.e.FETCHED }
    );
};
function L(t) {
    let i = t?.id ?? f.dJq,
        { entitlementsLoaded: e } = h({
            guildId: i,
            canFetch: (0, a.bG)([u.A], () => u.A.can(f.xBc.ADMINISTRATOR, t)),
        }),
        n = (0, a.bG)([T], () => T.getLastGuildDismissedTime(i)),
        l = (0, a.yK)([E.A], () => {
            let t = E.A.getEntitlementsForGuild(i),
                e = E.A.getEntitlementsForGuild(i, !1),
                n = t.map((t) => t.applicationId);
            return e.filter((t) => !n.includes(t.applicationId));
        }),
        o = (0, a.cf)([S.A], () => S.A.getSKUs()),
        r = s.useMemo(
            () =>
                l.filter((t) => {
                    let i = o[t.skuId];
                    return null != i && i.available;
                }),
            [l, o],
        );
    return e ? r.filter((t) => null != t.endsAt && t.endsAt.getTime() > Math.max(n ?? 0, Date.now() - 2592e6)) : [];
}
let g = () => {
    let [t, i] = s.useState(0);
    return (
        s.useEffect(() => {
            i(1),
                Promise.all([
                    (0, o.qw)({ withSku: !0, withApplication: !0, entitlementType: f.zF_.APPLICATION_SUBSCRIPTION }),
                    (0, o.qw)({ withSku: !0, withApplication: !0, entitlementType: f.zF_.PURCHASE }),
                ])
                    .catch(() => {
                        i(3);
                    })
                    .then(() => {
                        i(2);
                    });
        }, []),
        { loadState: t }
    );
};
function O(t, i) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [n, l] = s.useState([]),
        [o, u] = s.useState(!1);
    return (
        s.useLayoutEffect(() => {
            null != t &&
                e &&
                (u(!0),
                (0, A.L5)(t, i)
                    .then(l)
                    .finally(() => {
                        u(!1);
                    }));
        }, [t, i, e]),
        { guilds: (0, a.yK)([r.A], () => n.map((t) => r.A.getGuild(t)).filter((t) => null != t), [n]), isFetching: o }
    );
}
let m = (t) => t.items;
function F(t, i) {
    return U(t, i, m);
}
let y = (t) => t.renewalMutations?.items ?? [];
function b(t, i) {
    return U(t, i, y);
}
function U(t, i, e) {
    let [n, l] = (0, a.yK)(
        [d.A, c.A],
        () =>
            null == t
                ? []
                : R({
                      groupSku: t,
                      SubscriptionStore: d.A,
                      SubscriptionPlanStore: c.A,
                      mapSubscriptionItems: e,
                      guildId: i,
                  }),
        [t, e, i],
    );
    return s.useMemo(() => {
        if (null != n && null != l) return { subscription: n, subscriptionPlan: l };
    }, [n, l]);
}
function R(t) {
    let { groupSku: i, SubscriptionStore: e, SubscriptionPlanStore: n, mapSubscriptionItems: l, guildId: s } = t,
        { bundledSkuIds: a, flags: o } = i;
    for (let t of e.getActiveApplicationSubscriptions() ?? []) {
        if ((0, N.PJ)(o) && null != s && t.metadata?.application_subscription_guild_id !== s) continue;
        let i = l(t)
            .map((t) => n.get(t.planId))
            .find((t) => null != t && a.includes(t.skuId));
        if (null != i) return [t, i];
    }
    return [];
}
