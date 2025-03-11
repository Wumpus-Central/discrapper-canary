n.d(t, {
    CR: () => I,
    E8: () => x,
    Ev: () => P,
    LM: () => g,
    cr: () => Z,
    ec: () => j,
    h6: () => h,
    jd: () => y,
    qz: () => S
}),
    n(653041),
    n(47120),
    n(773603),
    n(789020);
var i,
    l = n(192379),
    r = n(442837),
    o = n(496929),
    a = n(430824),
    u = n(496675),
    s = n(509545),
    c = n(78839),
    d = n(55563),
    p = n(801249),
    f = n(106976),
    b = n(307643),
    v = n(488915),
    O = n(171246),
    m = n(981631),
    y = (((i = {})[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR'), i);
let g = (e) => {
    let { guildId: t, canFetch: n = !0, forceRefetch: i = !1 } = e,
        o = (0, r.e7)([v.Z], () => (null != t ? v.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        l.useEffect(() => {
            if (null == t || t === m.ME) return;
            let e = v.Z.getEntitlementsForGuildFetchState(t);
            n && (e === v.M.NOT_FETCHED || i) && (0, f.i1)(t);
        }, [t, n, i]),
        { entitlementsLoaded: o === v.M.FETCHED }
    );
};
function h(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : m.lds,
        { entitlementsLoaded: i } = g({
            guildId: n,
            canFetch: (0, r.e7)([u.Z], () => u.Z.can(m.Plq.ADMINISTRATOR, e))
        }),
        o = (0, r.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(n)),
        a = (0, r.Wu)([v.Z], () => {
            let e = v.Z.getEntitlementsForGuild(n),
                t = v.Z.getEntitlementsForGuild(n, !1),
                i = e.map((e) => e.applicationId);
            return t.filter((e) => !i.includes(e.applicationId));
        }),
        s = (0, r.cj)([d.Z], () => d.Z.getSKUs()),
        c = l.useMemo(
            () =>
                a.filter((e) => {
                    let t = s[e.skuId];
                    return null != t && t.available;
                }),
            [a, s]
        );
    return i ? c.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - 2592000000)) : [];
}
let S = () => {
    let [e, t] = l.useState(0);
    return (
        l.useEffect(() => {
            t(1),
                Promise.all([
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: m.qc2.APPLICATION_SUBSCRIPTION
                    }),
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: m.qc2.PURCHASE
                    })
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
function I(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, o] = l.useState([]),
        [u, s] = l.useState(!1);
    return (
        l.useLayoutEffect(() => {
            null != e &&
                n &&
                (s(!0),
                (0, b.tn)(e, t)
                    .then(o)
                    .finally(() => {
                        s(!1);
                    }));
        }, [e, t, n]),
        {
            guilds: (0, r.Wu)([a.Z], () => i.map((e) => a.Z.getGuild(e)).filter((e) => null != e), [i]),
            isFetching: u
        }
    );
}
let j = (e) => e.items;
function P(e, t) {
    return N(e, t, j);
}
let E = (e) => {
    var t, n;
    return null !== (n = null === (t = e.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== n ? n : [];
};
function Z(e, t) {
    return N(e, t, E);
}
function N(e, t, n) {
    let [i, o] = (0, r.Wu)(
        [c.ZP, s.Z],
        () =>
            null == e
                ? []
                : x({
                      groupSku: e,
                      SubscriptionStore: c.ZP,
                      SubscriptionPlanStore: s.Z,
                      mapSubscriptionItems: n,
                      guildId: t
                  }),
        [e, n, t]
    );
    return l.useMemo(() => {
        if (null != i && null != o)
            return {
                subscription: i,
                subscriptionPlan: o
            };
    }, [i, o]);
}
function x(e) {
    var t, n;
    let { groupSku: i, SubscriptionStore: l, SubscriptionPlanStore: r, mapSubscriptionItems: o, guildId: a } = e,
        { bundledSkuIds: u, flags: s } = i;
    for (let e of null !== (t = l.getActiveApplicationSubscriptions()) && void 0 !== t ? t : []) {
        if ((0, O.KK)(s) && null != a && (null === (n = e.metadata) || void 0 === n ? void 0 : n.application_subscription_guild_id) !== a) continue;
        let t = o(e)
            .map((e) => r.get(e.planId))
            .find((e) => null != e && u.includes(e.skuId));
        if (null != t) return [e, t];
    }
    return [];
}
