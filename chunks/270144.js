n.d(t, {
    CR: () => v,
    E8: () => N,
    Ev: () => T,
    LM: () => b,
    cr: () => A,
    ec: () => I,
    h6: () => y,
    jd: () => E,
    qz: () => O,
}),
    n(539854),
    n(388685),
    n(457542),
    n(997841);
var r = n(473749),
    i = n(442837),
    a = n(496929),
    o = n(430824),
    s = n(496675),
    l = n(509545),
    c = n(78839),
    u = n(55563),
    d = n(801249),
    f = n(106976),
    _ = n(307643),
    p = n(488915),
    h = n(171246),
    m = n(981631);
let g = 2592000000;
var E = (function (e) {
    return (
        (e[(e.NOT_LOADED = 0)] = "NOT_LOADED"),
        (e[(e.LOADING = 1)] = "LOADING"),
        (e[(e.LOADED = 2)] = "LOADED"),
        (e[(e.ERROR = 3)] = "ERROR"),
        e
    );
})({});
let b = (e) => {
    let { guildId: t, canFetch: n = !0, forceRefetch: a = !1 } = e,
        o = (0, i.e7)([p.Z], () => (null != t ? p.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        r.useEffect(() => {
            if (null == t || t === m.ME) return;
            let e = p.Z.getEntitlementsForGuildFetchState(t);
            n && (e === p.M.NOT_FETCHED || a) && (0, f.i1)(t);
        }, [t, n, a]),
        { entitlementsLoaded: o === p.M.FETCHED }
    );
};
function y(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : m.lds,
        { entitlementsLoaded: a } = b({
            guildId: n,
            canFetch: (0, i.e7)([s.Z], () => s.Z.can(m.Plq.ADMINISTRATOR, e)),
        }),
        o = (0, i.e7)([d.Z], () => d.Z.getLastGuildDismissedTime(n)),
        l = (0, i.Wu)([p.Z], () => {
            let e = p.Z.getEntitlementsForGuild(n),
                t = p.Z.getEntitlementsForGuild(n, !1),
                r = e.map((e) => e.applicationId);
            return t.filter((e) => !r.includes(e.applicationId));
        }),
        c = (0, i.cj)([u.Z], () => u.Z.getSKUs()),
        f = r.useMemo(
            () =>
                l.filter((e) => {
                    let t = c[e.skuId];
                    return null != t && t.available;
                }),
            [l, c],
        );
    return a
        ? f.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - g))
        : [];
}
let O = () => {
    let [e, t] = r.useState(0);
    return (
        r.useEffect(() => {
            t(1),
                Promise.all([
                    (0, a.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: m.qc2.APPLICATION_SUBSCRIPTION,
                    }),
                    (0, a.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: m.qc2.PURCHASE,
                    }),
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
function v(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, s] = r.useState([]),
        [l, c] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != e &&
                n &&
                (c(!0),
                (0, _.tn)(e, t)
                    .then(s)
                    .finally(() => {
                        c(!1);
                    }));
        }, [e, t, n]),
        {
            guilds: (0, i.Wu)([o.Z], () => a.map((e) => o.Z.getGuild(e)).filter((e) => null != e), [a]),
            isFetching: l,
        }
    );
}
let I = (e) => e.items;
function T(e, t) {
    return C(e, t, I);
}
let S = (e) => {
    var t, n;
    return null != (n = null == (t = e.renewalMutations) ? void 0 : t.items) ? n : [];
};
function A(e, t) {
    return C(e, t, S);
}
function C(e, t, n) {
    let [a, o] = (0, i.Wu)(
        [c.Z, l.Z],
        () =>
            null == e
                ? []
                : N({
                      groupSku: e,
                      SubscriptionStore: c.Z,
                      SubscriptionPlanStore: l.Z,
                      mapSubscriptionItems: n,
                      guildId: t,
                  }),
        [e, n, t],
    );
    return r.useMemo(() => {
        if (null != a && null != o)
            return {
                subscription: a,
                subscriptionPlan: o,
            };
    }, [a, o]);
}
function N(e) {
    var t, n;
    let { groupSku: r, SubscriptionStore: i, SubscriptionPlanStore: a, mapSubscriptionItems: o, guildId: s } = e,
        { bundledSkuIds: l, flags: c } = r;
    for (let e of null != (t = i.getActiveApplicationSubscriptions()) ? t : []) {
        if (
            (0, h.KK)(c) &&
            null != s &&
            (null == (n = e.metadata) ? void 0 : n.application_subscription_guild_id) !== s
        )
            continue;
        let t = o(e)
            .map((e) => a.get(e.planId))
            .find((e) => null != e && l.includes(e.skuId));
        if (null != t) return [e, t];
    }
    return [];
}
