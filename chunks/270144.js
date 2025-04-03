n.d(t, {
    CR: () => S,
    E8: () => N,
    Ev: () => I,
    LM: () => g,
    cr: () => x,
    ec: () => P,
    h6: () => h,
    jd: () => v,
    qz: () => j
}),
    n(653041),
    n(47120),
    n(773603),
    n(789020);
var r,
    l = n(192379),
    i = n(442837),
    o = n(496929),
    a = n(430824),
    u = n(496675),
    s = n(509545),
    c = n(78839),
    d = n(55563),
    p = n(801249),
    f = n(106976),
    b = n(307643),
    O = n(488915),
    m = n(171246),
    y = n(981631),
    v = (((r = {})[(r.NOT_LOADED = 0)] = 'NOT_LOADED'), (r[(r.LOADING = 1)] = 'LOADING'), (r[(r.LOADED = 2)] = 'LOADED'), (r[(r.ERROR = 3)] = 'ERROR'), r);
let g = (e) => {
    let { guildId: t, canFetch: n = !0, forceRefetch: r = !1 } = e,
        o = (0, i.e7)([O.Z], () => (null != t ? O.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        l.useEffect(() => {
            if (null == t || t === y.ME) return;
            let e = O.Z.getEntitlementsForGuildFetchState(t);
            n && (e === O.M.NOT_FETCHED || r) && (0, f.i1)(t);
        }, [t, n, r]),
        { entitlementsLoaded: o === O.M.FETCHED }
    );
};
function h(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : y.lds,
        { entitlementsLoaded: r } = g({
            guildId: n,
            canFetch: (0, i.e7)([u.Z], () => u.Z.can(y.Plq.ADMINISTRATOR, e))
        }),
        o = (0, i.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(n)),
        a = (0, i.Wu)([O.Z], () => {
            let e = O.Z.getEntitlementsForGuild(n),
                t = O.Z.getEntitlementsForGuild(n, !1),
                r = e.map((e) => e.applicationId);
            return t.filter((e) => !r.includes(e.applicationId));
        }),
        s = (0, i.cj)([d.Z], () => d.Z.getSKUs()),
        c = l.useMemo(
            () =>
                a.filter((e) => {
                    let t = s[e.skuId];
                    return null != t && t.available;
                }),
            [a, s]
        );
    return r ? c.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - 2592000000)) : [];
}
let j = () => {
    let [e, t] = l.useState(0);
    return (
        l.useEffect(() => {
            t(1),
                Promise.all([
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: y.qc2.APPLICATION_SUBSCRIPTION
                    }),
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: y.qc2.PURCHASE
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
function S(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, o] = l.useState([]),
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
            guilds: (0, i.Wu)([a.Z], () => r.map((e) => a.Z.getGuild(e)).filter((e) => null != e), [r]),
            isFetching: u
        }
    );
}
let P = (e) => e.items;
function I(e, t) {
    return Z(e, t, P);
}
let E = (e) => {
    var t, n;
    return null != (n = null == (t = e.renewalMutations) ? void 0 : t.items) ? n : [];
};
function x(e, t) {
    return Z(e, t, E);
}
function Z(e, t, n) {
    let [r, o] = (0, i.Wu)(
        [c.ZP, s.Z],
        () =>
            null == e
                ? []
                : N({
                      groupSku: e,
                      SubscriptionStore: c.ZP,
                      SubscriptionPlanStore: s.Z,
                      mapSubscriptionItems: n,
                      guildId: t
                  }),
        [e, n, t]
    );
    return l.useMemo(() => {
        if (null != r && null != o)
            return {
                subscription: r,
                subscriptionPlan: o
            };
    }, [r, o]);
}
function N(e) {
    var t, n;
    let { groupSku: r, SubscriptionStore: l, SubscriptionPlanStore: i, mapSubscriptionItems: o, guildId: a } = e,
        { bundledSkuIds: u, flags: s } = r;
    for (let e of null != (t = l.getActiveApplicationSubscriptions()) ? t : []) {
        if ((0, m.KK)(s) && null != a && (null == (n = e.metadata) ? void 0 : n.application_subscription_guild_id) !== a) continue;
        let t = o(e)
            .map((e) => i.get(e.planId))
            .find((e) => null != e && u.includes(e.skuId));
        if (null != t) return [e, t];
    }
    return [];
}
