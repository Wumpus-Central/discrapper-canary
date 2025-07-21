(n.d(e, {
    CR: () => v,
    E8: () => N,
    Ev: () => m,
    LM: () => _,
    cr: () => h,
    ec: () => E,
    h6: () => y,
    jd: () => g,
    qz: () => P
}),
    n(539854),
    n(388685),
    n(457542),
    n(997841));
var i,
    r = n(73800),
    l = n(442837),
    o = n(496929),
    a = n(430824),
    u = n(496675),
    s = n(509545),
    c = n(78839),
    d = n(55563),
    p = n(801249),
    f = n(106976),
    S = n(307643),
    O = n(488915),
    I = n(171246),
    b = n(981631),
    g = (((i = {})[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR'), i);
let _ = (t) => {
    let { guildId: e, canFetch: n = !0, forceRefetch: i = !1 } = t,
        o = (0, l.e7)([O.Z], () => (null != e ? O.Z.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        r.useEffect(() => {
            if (null == e || e === b.ME) return;
            let t = O.Z.getEntitlementsForGuildFetchState(e);
            n && (t === O.M.NOT_FETCHED || i) && (0, f.i1)(e);
        }, [e, n, i]),
        { entitlementsLoaded: o === O.M.FETCHED }
    );
};
function y(t) {
    var e;
    let n = null != (e = null == t ? void 0 : t.id) ? e : b.lds,
        { entitlementsLoaded: i } = _({
            guildId: n,
            canFetch: (0, l.e7)([u.Z], () => u.Z.can(b.Plq.ADMINISTRATOR, t))
        }),
        o = (0, l.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(n)),
        a = (0, l.Wu)([O.Z], () => {
            let t = O.Z.getEntitlementsForGuild(n),
                e = O.Z.getEntitlementsForGuild(n, !1),
                i = t.map((t) => t.applicationId);
            return e.filter((t) => !i.includes(t.applicationId));
        }),
        s = (0, l.cj)([d.Z], () => d.Z.getSKUs()),
        c = r.useMemo(
            () =>
                a.filter((t) => {
                    let e = s[t.skuId];
                    return null != e && e.available;
                }),
            [a, s]
        );
    return i ? c.filter((t) => null != t.endsAt && t.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - 2592000000)) : [];
}
let P = () => {
    let [t, e] = r.useState(0);
    return (
        r.useEffect(() => {
            (e(1),
                Promise.all([
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: b.qc2.APPLICATION_SUBSCRIPTION
                    }),
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: b.qc2.PURCHASE
                    })
                ])
                    .catch(() => {
                        e(3);
                    })
                    .then(() => {
                        e(2);
                    }));
        }, []),
        { loadState: t }
    );
};
function v(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, o] = r.useState([]),
        [u, s] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != t &&
                n &&
                (s(!0),
                (0, S.tn)(t, e)
                    .then(o)
                    .finally(() => {
                        s(!1);
                    }));
        }, [t, e, n]),
        {
            guilds: (0, l.Wu)([a.Z], () => i.map((t) => a.Z.getGuild(t)).filter((t) => null != t), [i]),
            isFetching: u
        }
    );
}
let E = (t) => t.items;
function m(t, e) {
    return C(t, e, E);
}
let T = (t) => {
    var e, n;
    return null != (n = null == (e = t.renewalMutations) ? void 0 : e.items) ? n : [];
};
function h(t, e) {
    return C(t, e, T);
}
function C(t, e, n) {
    let [i, o] = (0, l.Wu)(
        [c.Z, s.Z],
        () =>
            null == t
                ? []
                : N({
                      groupSku: t,
                      SubscriptionStore: c.Z,
                      SubscriptionPlanStore: s.Z,
                      mapSubscriptionItems: n,
                      guildId: e
                  }),
        [t, n, e]
    );
    return r.useMemo(() => {
        if (null != i && null != o)
            return {
                subscription: i,
                subscriptionPlan: o
            };
    }, [i, o]);
}
function N(t) {
    var e, n;
    let { groupSku: i, SubscriptionStore: r, SubscriptionPlanStore: l, mapSubscriptionItems: o, guildId: a } = t,
        { bundledSkuIds: u, flags: s } = i;
    for (let t of null != (e = r.getActiveApplicationSubscriptions()) ? e : []) {
        if ((0, I.KK)(s) && null != a && (null == (n = t.metadata) ? void 0 : n.application_subscription_guild_id) !== a) continue;
        let e = o(t)
            .map((t) => l.get(t.planId))
            .find((t) => null != t && u.includes(t.skuId));
        if (null != e) return [t, e];
    }
    return [];
}
