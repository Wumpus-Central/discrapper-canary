e.d(t, {
    CR: () => x,
    E8: () => k,
    Ev: () => L,
    LM: () => g,
    cr: () => C,
    ec: () => N,
    h6: () => E,
    jd: () => Z,
    qz: () => b,
    sp: () => A
}),
    e(653041),
    e(47120),
    e(773603),
    e(789020);
var l,
    i = e(192379),
    a = e(442837),
    r = e(496929),
    s = e(430824),
    u = e(496675),
    o = e(509545),
    d = e(78839),
    c = e(55563),
    p = e(801249),
    f = e(106976),
    v = e(307643),
    m = e(488915),
    I = e(171246),
    h = e(981631);
let S = 12633 == e.j ? 2592000000 : null;
var Z = (((l = {})[(l.NOT_LOADED = 0)] = 'NOT_LOADED'), (l[(l.LOADING = 1)] = 'LOADING'), (l[(l.LOADED = 2)] = 'LOADED'), (l[(l.ERROR = 3)] = 'ERROR'), l);
let g = (n) => {
    let { guildId: t, canFetch: e = !0, forceRefetch: l = !1 } = n,
        r = (0, a.e7)([m.Z], () => (null != t ? m.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        i.useEffect(() => {
            if (null == t || t === h.ME) return;
            let n = m.Z.getEntitlementsForGuildFetchState(t);
            e && (n === m.M.NOT_FETCHED || l) && (0, f.i1)(t);
        }, [t, e, l]),
        { entitlementsLoaded: r === m.M.FETCHED }
    );
};
function E(n) {
    var t;
    let e = null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : h.lds,
        { entitlementsLoaded: l } = g({
            guildId: e,
            canFetch: (0, a.e7)([u.Z], () => u.Z.can(h.Plq.ADMINISTRATOR, n))
        }),
        r = (0, a.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(e)),
        s = (0, a.Wu)([m.Z], () => {
            let n = m.Z.getEntitlementsForGuild(e),
                t = m.Z.getEntitlementsForGuild(e, !1),
                l = n.map((n) => n.applicationId);
            return t.filter((n) => !l.includes(n.applicationId));
        }),
        o = (0, a.cj)([c.Z], () => c.Z.getSKUs()),
        d = i.useMemo(
            () =>
                s.filter((n) => {
                    let t = o[n.skuId];
                    return null != t && t.available;
                }),
            [s, o]
        );
    return l ? d.filter((n) => null != n.endsAt && n.endsAt.getTime() > Math.max(null != r ? r : 0, Date.now() - S)) : [];
}
let A = (n) => {
        let [t, e] = i.useState(!1),
            l = i.useMemo(() => n.map(I.bZ), [n]);
        return (
            i.useEffect(() => {
                e(!0),
                    Promise.all(l.map((n) => (0, f.vY)(n)))
                        .catch(() => {})
                        .then(() => {
                            e(!1);
                        });
            }, [l]),
            { loading: t }
        );
    },
    b = () => {
        let [n, t] = i.useState(0);
        return (
            i.useEffect(() => {
                t(1),
                    Promise.all([
                        (0, r.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: h.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, r.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: h.qc2.PURCHASE
                        })
                    ])
                        .catch(() => {
                            t(3);
                        })
                        .then(() => {
                            t(2);
                        });
            }, []),
            { loadState: n }
        );
    };
function x(n, t) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, r] = i.useState([]),
        [u, o] = i.useState(!1);
    return (
        i.useLayoutEffect(() => {
            null != n &&
                e &&
                (o(!0),
                (0, v.tn)(n, t)
                    .then(r)
                    .finally(() => {
                        o(!1);
                    }));
        }, [n, t, e]),
        {
            guilds: (0, a.Wu)([s.Z], () => l.map((n) => s.Z.getGuild(n)).filter((n) => null != n), [l]),
            isFetching: u
        }
    );
}
let N = (n) => n.items;
function L(n, t) {
    return T(n, t, N);
}
let P = (n) => {
    var t, e;
    return null !== (e = null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== e ? e : [];
};
function C(n, t) {
    return T(n, t, P);
}
function T(n, t, e) {
    let [l, r] = (0, a.Wu)(
        [d.ZP, o.Z],
        () =>
            null == n
                ? []
                : k({
                      groupSku: n,
                      SubscriptionStore: d.ZP,
                      SubscriptionPlanStore: o.Z,
                      mapSubscriptionItems: e,
                      guildId: t
                  }),
        [n, e, t]
    );
    return i.useMemo(() => {
        if (null != l && null != r)
            return {
                subscription: l,
                subscriptionPlan: r
            };
    }, [l, r]);
}
function k(n) {
    var t, e;
    let { groupSku: l, SubscriptionStore: i, SubscriptionPlanStore: a, mapSubscriptionItems: r, guildId: s } = n,
        { bundledSkuIds: u, flags: o } = l;
    for (let n of null !== (t = i.getActiveApplicationSubscriptions()) && void 0 !== t ? t : []) {
        if ((0, I.KK)(o) && null != s && (null === (e = n.metadata) || void 0 === e ? void 0 : e.application_subscription_guild_id) !== s) continue;
        let t = r(n)
            .map((n) => a.get(n.planId))
            .find((n) => null != n && u.includes(n.skuId));
        if (null != t) return [n, t];
    }
    return [];
}
