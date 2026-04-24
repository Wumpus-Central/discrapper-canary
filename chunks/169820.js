"use strict";
let i;
n.d(t, {
    E: () => y,
    W_: () => x,
    Ko: () => N,
    sD: () => C,
    GD: () => L,
    CZ: () => S,
    $s: () => T,
    mJ: () => v,
    wm: () => w,
}),
    n(321073),
    n(938796);
var r,
    a = n(64700),
    s = n(17928),
    l = n(339048),
    o = n(71393),
    c = n(576705),
    d = n(97352),
    u = n(166403),
    _ = n(67480),
    p = n(228366);
let f = { lastGuildDismissedTime: {} };
class h extends s.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
        i = e;
    }
    getUserAgnosticState() {
        return i;
    }
    getLastGuildDismissedTime(e) {
        return i.lastGuildDismissedTime[e];
    }
}
let m = new h(p.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        i.lastGuildDismissedTime[t] = Date.now();
    },
});
var g = n(143582),
    b = n(337095),
    A = n(607940),
    E = n(163437),
    I = n(652215),
    v =
        (((r = {})[(r.NOT_LOADED = 0)] = "NOT_LOADED"),
        (r[(r.LOADING = 1)] = "LOADING"),
        (r[(r.LOADED = 2)] = "LOADED"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let S = (e) => {
    let { guildId: t, canFetch: n = !0, forceRefetch: i = !1 } = e,
        r = (0, s.bG)([A.A], () => (null != t ? A.A.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        a.useEffect(() => {
            if (null == t || t === I.ME) return;
            let e = A.A.getEntitlementsForGuildFetchState(t);
            n && (e === A.e.NOT_FETCHED || i) && (0, g.f5)(t);
        }, [t, n, i]),
        { entitlementsLoaded: r === A.e.FETCHED }
    );
};
function T(e) {
    let t = e?.id ?? I.dJq,
        { entitlementsLoaded: n } = S({
            guildId: t,
            canFetch: (0, s.bG)([c.A], () => c.A.can(I.xBc.ADMINISTRATOR, e)),
        }),
        i = (0, s.bG)([m], () => m.getLastGuildDismissedTime(t)),
        r = (0, s.yK)([A.A], () => {
            let e = A.A.getEntitlementsForGuild(t),
                n = A.A.getEntitlementsForGuild(t, !1),
                i = e.map((e) => e.applicationId);
            return n.filter((e) => !i.includes(e.applicationId));
        }),
        l = (0, s.cf)([_.A], () => _.A.getSKUs()),
        o = a.useMemo(
            () =>
                r.filter((e) => {
                    let t = l[e.skuId];
                    return null != t && t.available;
                }),
            [r, l],
        );
    return n ? o.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(i ?? 0, Date.now() - 2592e6)) : [];
}
let y = () => {
    let [e, t] = a.useState(0);
    return (
        a.useEffect(() => {
            t(1),
                Promise.all([
                    (0, l.qw)({ withSku: !0, withApplication: !0, entitlementType: I.zF_.APPLICATION_SUBSCRIPTION }),
                    (0, l.qw)({ withSku: !0, withApplication: !0, entitlementType: I.zF_.PURCHASE }),
                ])
                    .catch(() => {
                        t(3);
                    })
                    .then(() => {
                        t(2);
                    });
        }, []),
        { loadState: e }
    );
};
function C(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, r] = a.useState([]),
        [l, c] = a.useState(!1);
    return (
        a.useLayoutEffect(() => {
            null != e &&
                n &&
                (c(!0),
                (0, b.L5)(e, t)
                    .then(r)
                    .finally(() => {
                        c(!1);
                    }));
        }, [e, t, n]),
        { guilds: (0, s.yK)([o.A], () => i.map((e) => o.A.getGuild(e)).filter((e) => null != e), [i]), isFetching: l }
    );
}
let x = (e) => e.items;
function L(e, t) {
    return O(e, t, x);
}
let R = (e) => e.renewalMutations?.items ?? [];
function N(e, t) {
    return O(e, t, R);
}
function O(e, t, n) {
    let [i, r] = (0, s.yK)(
        [u.A, d.A],
        () =>
            null == e
                ? []
                : w({
                      groupSku: e,
                      SubscriptionStore: u.A,
                      SubscriptionPlanStore: d.A,
                      mapSubscriptionItems: n,
                      guildId: t,
                  }),
        [e, n, t],
    );
    return a.useMemo(() => {
        if (null != i && null != r) return { subscription: i, subscriptionPlan: r };
    }, [i, r]);
}
function w(e) {
    let { groupSku: t, SubscriptionStore: n, SubscriptionPlanStore: i, mapSubscriptionItems: r, guildId: a } = e,
        { bundledSkuIds: s, flags: l } = t;
    for (let e of n.getActiveApplicationSubscriptions() ?? []) {
        if ((0, E.PJ)(l) && null != a && e.metadata?.application_subscription_guild_id !== a) continue;
        let t = r(e)
            .map((e) => i.get(e.planId))
            .find((e) => null != e && s.includes(e.skuId));
        if (null != t) return [e, t];
    }
    return [];
}
