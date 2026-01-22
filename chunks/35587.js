n.d(t, {
    Eu: () => b,
    IO: () => E,
    y7: () => g,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(287809),
    o = n(816733),
    l = n(927578),
    c = n(89366),
    u = n(637073),
    d = n(728364),
    f = n(264779),
    p = n(597758),
    _ = n(412260),
    h = n(788868);

function m(e, t, n, a) {
    let s = (0, i.yK)([_.A], () => _.A.outboundPromotions),
        o = (0, i.bG)([_.A], () => _.A.consumedInboundPromotionId);
    return r.useMemo(
        () => s.filter((r) => r.id !== o && !!(0, f.OP)(r) && !n && ((!e && !t) || (0, f.S0)(r, a))),
        [s, o, n, e, t, a],
    );
}

function g() {
    let e = (0, i.bG)([_.A], () => _.A.lastFetchedActivePromotions),
        t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, c.QQ)(),
        g = (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
        E = (0, u.d)(),
        [b, y] = r.useState(!1),
        [O, A] = r.useState([]);
    r.useEffect(() => {
        (null != e || E) && a.h.wait(() => p.Ay.markOutboundPromotionsSeen());
    }, [e, E]);
    let v = r.useCallback((e) => {
            A((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e],
            );
        }, []),
        S = l.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        I =
            d.m.useExperiment(
                {
                    location: "useOutboundPromotions",
                },
                {
                    autoTrackExposure: !1,
                    disable: S,
                },
            ).enabled || S;
    r.useEffect(() => {
        a.h.wait(() => {
            I && (null == e || E) && p.Ay.fetchActivePromotions();
        });
    }, [e, I, E]),
        r.useEffect(() => {
            a.h.wait(() => {
                (0, f.b3)()
                    .then((e) => {
                        A(e), y(!0);
                    })
                    .catch(() => {
                        A([]), y(!0);
                    });
            });
        }, []);
    let T = {};
    for (let { code: e, promotion: t } of O) T[t.id] = e;
    let C = m(n, g, E, T),
        N = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: b && (!I || null != e || E),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: O.filter((e) => {
            let { promotion: t } = e;
            return (
                !N.has(t.id) &&
                !1 ===
                    (0, f.HB)({
                        promotionPartner: t.outboundTitle,
                        promotionType: t.promotionType,
                    })
            );
        }).filter((e) => (0, f.OP)(e.promotion)),
        claimedOutboundPromotionCodeMap: T,
        addClaimedOutboundPromotionCode: v,
    };
}

function E() {
    let e = (0, i.bG)([_.A], () => _.A.lastSeenOutboundPromotionStartDate),
        t = m(
            (0, c.QQ)(),
            (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
            (0, u.d)(),
            {},
        );
    return r
        .useMemo(
            () =>
                null == e
                    ? t
                    : t.filter((t) => {
                          let { startDate: n } = t;
                          return new Date(n) > new Date(e);
                      }),
            [t, e],
        )
        .filter((e) => (0, f.OP)(e));
}

function b() {
    return {
        promotion: (0, i.bG)([_.A], () => _.A.bogoPromotion),
    };
}
