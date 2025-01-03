e.d(t, {
    CR: function () {
        return E;
    },
    E8: function () {
        return _;
    },
    Ev: function () {
        return C;
    },
    LM: function () {
        return Z;
    },
    cr: function () {
        return T;
    },
    ec: function () {
        return P;
    },
    h6: function () {
        return A;
    },
    jd: function () {
        return i;
    },
    qz: function () {
        return b;
    },
    sp: function () {
        return N;
    }
}),
    e(653041),
    e(47120),
    e(773603),
    e(789020);
var i,
    l,
    r = e(192379),
    u = e(442837),
    a = e(496929),
    o = e(430824),
    s = e(496675),
    c = e(509545),
    d = e(78839),
    f = e(55563),
    p = e(801249),
    m = e(106976),
    v = e(307643),
    I = e(488915),
    S = e(171246),
    h = e(981631);
let g = 12633 == e.j ? 2592000000 : null;
((l = i || (i = {}))[(l.NOT_LOADED = 0)] = 'NOT_LOADED'), (l[(l.LOADING = 1)] = 'LOADING'), (l[(l.LOADED = 2)] = 'LOADED'), (l[(l.ERROR = 3)] = 'ERROR');
let Z = (n) => {
    let { guildId: t, canFetch: e = !0, forceRefetch: i = !1 } = n,
        l = (0, u.e7)([I.Z], () => (null != t ? I.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        r.useEffect(() => {
            if (null == t || t === h.ME) return;
            let n = I.Z.getEntitlementsForGuildFetchState(t);
            e && (n === I.M.NOT_FETCHED || i) && (0, m.i1)(t);
        }, [t, e, i]),
        { entitlementsLoaded: l === I.M.FETCHED }
    );
};
function A(n) {
    var t;
    let e = null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : h.lds,
        { entitlementsLoaded: i } = Z({
            guildId: e,
            canFetch: (0, u.e7)([s.Z], () => s.Z.can(h.Plq.ADMINISTRATOR, n))
        }),
        l = (0, u.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(e)),
        a = (0, u.Wu)([I.Z], () => {
            let n = I.Z.getEntitlementsForGuild(e),
                t = I.Z.getEntitlementsForGuild(e, !1),
                i = n.map((n) => n.applicationId);
            return t.filter((n) => !i.includes(n.applicationId));
        }),
        o = (0, u.cj)([f.Z], () => f.Z.getSKUs()),
        c = r.useMemo(
            () =>
                a.filter((n) => {
                    let t = o[n.skuId];
                    return null != t && t.available;
                }),
            [a, o]
        );
    return i ? c.filter((n) => null != n.endsAt && n.endsAt.getTime() > Math.max(null != l ? l : 0, Date.now() - g)) : [];
}
let N = (n) => {
        let [t, e] = r.useState(!1),
            i = r.useMemo(() => n.map(S.bZ), [n]);
        return (
            r.useEffect(() => {
                e(!0),
                    Promise.all(i.map((n) => (0, m.vY)(n)))
                        .catch(() => {})
                        .then(() => {
                            e(!1);
                        });
            }, [i]),
            { loading: t }
        );
    },
    b = () => {
        let [n, t] = r.useState(0);
        return (
            r.useEffect(() => {
                t(1),
                    Promise.all([
                        (0, a.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: h.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, a.p0)({
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
function E(n, t) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, l] = r.useState([]),
        [a, s] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != n &&
                e &&
                (s(!0),
                (0, v.tn)(n, t)
                    .then(l)
                    .finally(() => {
                        s(!1);
                    }));
        }, [n, t, e]),
        {
            guilds: (0, u.Wu)([o.Z], () => i.map((n) => o.Z.getGuild(n)).filter((n) => null != n), [i]),
            isFetching: a
        }
    );
}
let P = (n) => n.items;
function C(n, t) {
    return x(n, t, P);
}
let L = (n) => {
    var t, e;
    return null !== (e = null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== e ? e : [];
};
function T(n, t) {
    return x(n, t, L);
}
function x(n, t, e) {
    let [i, l] = (0, u.Wu)(
        [d.ZP, c.Z],
        () =>
            null == n
                ? []
                : _({
                      groupSku: n,
                      SubscriptionStore: d.ZP,
                      SubscriptionPlanStore: c.Z,
                      mapSubscriptionItems: e,
                      guildId: t
                  }),
        [n, e, t]
    );
    return r.useMemo(() => {
        if (null != i && null != l)
            return {
                subscription: i,
                subscriptionPlan: l
            };
    }, [i, l]);
}
function _(n) {
    var t, e;
    let { groupSku: i, SubscriptionStore: l, SubscriptionPlanStore: r, mapSubscriptionItems: u, guildId: a } = n,
        { bundledSkuIds: o, flags: s } = i;
    for (let n of null !== (t = l.getActiveApplicationSubscriptions()) && void 0 !== t ? t : []) {
        if ((0, S.KK)(s) && null != a && (null === (e = n.metadata) || void 0 === e ? void 0 : e.application_subscription_guild_id) !== a) continue;
        let t = u(n)
            .map((n) => r.get(n.planId))
            .find((n) => null != n && o.includes(n.skuId));
        if (null != t) return [n, t];
    }
    return [];
}
