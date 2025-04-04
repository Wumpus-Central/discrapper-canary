n.d(t, {
    YO: () => E,
    lG: () => g,
    mq: () => b
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(570140),
    a = n(594174),
    s = n(431),
    l = n(74538),
    c = n(775412),
    u = n(695349),
    d = n(163684),
    f = n(518638),
    _ = n(748770),
    p = n(1844),
    h = n(474936);
function m(e, t, n, o) {
    let a = (0, i.Wu)([p.Z], () => p.Z.outboundPromotions),
        s = (0, i.e7)([p.Z], () => p.Z.consumedInboundPromotionId);
    return r.useMemo(() => a.filter((r) => r.id !== s && !!(0, f.ZC)(r) && !n && ((!e && !t) || (0, f.Qf)(r, o))), [a, s, n, e, t, o]);
}
function g() {
    let e = (0, i.e7)([p.Z], () => p.Z.lastFetchedActivePromotions),
        t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, c._O)(),
        g = (0, i.e7)([s.Z], () => s.Z.hasAnyUnexpiredOffer()),
        E = (0, u.W)(),
        [b, y] = r.useState(!1),
        [v, O] = r.useState([]);
    r.useEffect(() => {
        (null != e || E) && o.Z.wait(() => _.ZP.markOutboundPromotionsSeen());
    }, [e, E]);
    let I = r.useCallback((e) => {
            O((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e]
            );
        }, []),
        S = l.ZP.isPremiumExactly(t, h.p9.TIER_2),
        T =
            d.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: S
                }
            ).enabled || S;
    r.useEffect(() => {
        o.Z.wait(() => {
            T && (null == e || E) && _.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, T, E]),
        r.useEffect(() => {
            o.Z.wait(() => {
                (0, f.t8)()
                    .then((e) => {
                        O(e), y(!0);
                    })
                    .catch(() => {
                        O([]), y(!0);
                    });
            });
        }, []);
    let N = {};
    for (let { code: e, promotion: t } of v) N[t.id] = e;
    let A = m(n, g, E, N),
        C = new Set(
            A.map((e) => {
                let { id: t } = e;
                return t;
            })
        );
    return {
        promotionsLoaded: b && (!T || null != e || E),
        activeOutboundPromotions: A,
        claimedEndedOutboundPromotions: v
            .filter((e) => {
                let { promotion: t } = e;
                return !C.has(t.id);
            })
            .filter((e) => (0, f.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: N,
        addClaimedOutboundPromotionCode: I
    };
}
function E() {
    let e = (0, i.e7)([p.Z], () => p.Z.lastSeenOutboundPromotionStartDate),
        t = (0, c._O)(),
        n = m(
            t,
            (0, i.e7)([s.Z], () => s.Z.hasAnyUnexpiredOffer()),
            (0, u.W)(),
            {}
        );
    return r
        .useMemo(
            () =>
                null == e
                    ? n
                    : n.filter((t) => {
                          let { startDate: n } = t;
                          return new Date(n) > new Date(e);
                      }),
            [n, e]
        )
        .filter((e) => (0, f.ZC)(e));
}
function b() {
    return { promotion: (0, i.e7)([p.Z], () => p.Z.bogoPromotion) };
}
