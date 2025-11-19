n.d(t, {
    YO: () => E,
    lG: () => g,
    mq: () => b,
}),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(570140),
    o = n(594174),
    s = n(431),
    l = n(74538),
    c = n(775412),
    u = n(695349),
    d = n(163684),
    f = n(518638),
    _ = n(748770),
    p = n(1844),
    h = n(474936);
function m(e, t, n, a) {
    let o = (0, i.Wu)([p.Z], () => p.Z.outboundPromotions),
        s = (0, i.e7)([p.Z], () => p.Z.consumedInboundPromotionId);
    return r.useMemo(
        () => o.filter((r) => r.id !== s && !!(0, f.ZC)(r) && !n && ((!e && !t) || (0, f.Qf)(r, a))),
        [o, s, n, e, t, a],
    );
}
function g() {
    let e = (0, i.e7)([p.Z], () => p.Z.lastFetchedActivePromotions),
        t = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, c._O)(),
        g = (0, i.e7)([s.Z], () => s.Z.hasAnyUnexpiredOffer()),
        E = (0, u.W)(),
        [b, y] = r.useState(!1),
        [O, v] = r.useState([]);
    r.useEffect(() => {
        (null != e || E) && a.Z.wait(() => _.ZP.markOutboundPromotionsSeen());
    }, [e, E]);
    let I = r.useCallback((e) => {
            v((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e],
            );
        }, []),
        T = l.ZP.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        S =
            d.g.useExperiment(
                { location: "useOutboundPromotions" },
                {
                    autoTrackExposure: !1,
                    disable: T,
                },
            ).enabled || T;
    r.useEffect(() => {
        a.Z.wait(() => {
            S && (null == e || E) && _.ZP.fetchActivePromotions();
        });
    }, [e, S, E]),
        r.useEffect(() => {
            a.Z.wait(() => {
                (0, f.t8)()
                    .then((e) => {
                        v(e), y(!0);
                    })
                    .catch(() => {
                        v([]), y(!0);
                    });
            });
        }, []);
    let A = {};
    for (let { code: e, promotion: t } of O) A[t.id] = e;
    let C = m(n, g, E, A),
        N = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: b && (!S || null != e || E),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: O.filter((e) => {
            let { promotion: t } = e;
            return !N.has(t.id) && !1 === (0, f.pD)({ promotionPartner: t.outboundTitle });
        }).filter((e) => (0, f.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: A,
        addClaimedOutboundPromotionCode: I,
    };
}
function E() {
    let e = (0, i.e7)([p.Z], () => p.Z.lastSeenOutboundPromotionStartDate),
        t = (0, c._O)(),
        n = m(
            t,
            (0, i.e7)([s.Z], () => s.Z.hasAnyUnexpiredOffer()),
            (0, u.W)(),
            {},
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
            [n, e],
        )
        .filter((e) => (0, f.ZC)(e));
}
function b() {
    return { promotion: (0, i.e7)([p.Z], () => p.Z.bogoPromotion) };
}
