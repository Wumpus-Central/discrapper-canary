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
    p = n(748770),
    _ = n(1844),
    m = n(474936);
function h(e, t, n, a) {
    let o = (0, i.Wu)([_.Z], () => _.Z.outboundPromotions),
        s = (0, i.e7)([_.Z], () => _.Z.consumedInboundPromotionId);
    return r.useMemo(
        () => o.filter((r) => r.id !== s && !!(0, f.ZC)(r) && !n && ((!e && !t) || (0, f.Qf)(r, a))),
        [o, s, n, e, t, a],
    );
}
function g() {
    let e = (0, i.e7)([_.Z], () => _.Z.lastFetchedActivePromotions),
        t = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, c._O)(),
        g = (0, i.e7)([s.Z], () => s.Z.hasAnyUnexpiredOffer()),
        E = (0, u.W)(),
        [b, y] = r.useState(!1),
        [O, v] = r.useState([]);
    r.useEffect(() => {
        (null != e || E) && a.Z.wait(() => p.ZP.markOutboundPromotionsSeen());
    }, [e, E]);
    let S = r.useCallback((e) => {
            v((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e],
            );
        }, []),
        I = l.ZP.isPremiumExactly(t, m.PremiumTypes.TIER_2),
        T =
            d.g.useExperiment(
                { location: "useOutboundPromotions" },
                {
                    autoTrackExposure: !1,
                    disable: I,
                },
            ).enabled || I;
    r.useEffect(() => {
        a.Z.wait(() => {
            T && (null == e || E) && p.ZP.fetchActivePromotions();
        });
    }, [e, T, E]),
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
    let C = h(n, g, E, A),
        N = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: b && (!T || null != e || E),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: O.filter((e) => {
            let { promotion: t } = e;
            return !N.has(t.id) && !1 === (0, f.pD)({ promotionPartner: t.outboundTitle });
        }).filter((e) => (0, f.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: A,
        addClaimedOutboundPromotionCode: S,
    };
}
function E() {
    let e = (0, i.e7)([_.Z], () => _.Z.lastSeenOutboundPromotionStartDate),
        t = (0, c._O)(),
        n = h(
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
    return { promotion: (0, i.e7)([_.Z], () => _.Z.bogoPromotion) };
}
