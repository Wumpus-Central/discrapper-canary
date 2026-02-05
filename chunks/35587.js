"use strict";
n.d(t, { Eu: () => A, IO: () => E, y7: () => g });
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(287809),
    o = n(816733),
    l = n(927578),
    u = n(89366),
    c = n(637073),
    d = n(728364),
    _ = n(264779),
    f = n(597758),
    p = n(412260),
    h = n(788868);
function m(e, t, n, a) {
    let s = (0, i.yK)([p.A], () => p.A.outboundPromotions),
        o = (0, i.bG)([p.A], () => p.A.consumedInboundPromotionId);
    return r.useMemo(
        () => s.filter((r) => r.id !== o && !!(0, _.OP)(r) && !n && ((!e && !t) || (0, _.S0)(r, a))),
        [s, o, n, e, t, a],
    );
}
function g() {
    let e = (0, i.bG)([p.A], () => p.A.lastFetchedActivePromotions),
        t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, u.QQ)(),
        g = (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
        E = (0, c.d)(),
        [A, I] = r.useState(!1),
        [T, y] = r.useState([]);
    r.useEffect(() => {
        (null != e || E) && a.h.wait(() => f.Ay.markOutboundPromotionsSeen());
    }, [e, E]);
    let S = r.useCallback((e) => {
            y((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e],
            );
        }, []),
        v = l.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        C =
            d.m.useExperiment({ location: "useOutboundPromotions" }, { autoTrackExposure: !1, disable: v }).enabled ||
            v;
    r.useEffect(() => {
        a.h.wait(() => {
            C && (null == e || E) && f.Ay.fetchActivePromotions();
        });
    }, [e, C, E]),
        r.useEffect(() => {
            a.h.wait(() => {
                (0, _.b3)()
                    .then((e) => {
                        y(e), I(!0);
                    })
                    .catch(() => {
                        y([]), I(!0);
                    });
            });
        }, []);
    let b = {};
    for (let { code: e, promotion: t } of T) b[t.id] = e;
    let N = m(n, g, E, b),
        R = new Set(
            N.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: A && (!C || null != e || E),
        activeOutboundPromotions: N,
        claimedEndedOutboundPromotions: T.filter((e) => {
            let { promotion: t } = e;
            return (
                !R.has(t.id) && !1 === (0, _.HB)({ promotionPartner: t.outboundTitle, promotionType: t.promotionType })
            );
        }).filter((e) => (0, _.OP)(e.promotion)),
        claimedOutboundPromotionCodeMap: b,
        addClaimedOutboundPromotionCode: S,
    };
}
function E() {
    let e = (0, i.bG)([p.A], () => p.A.lastSeenOutboundPromotionStartDate),
        t = m(
            (0, u.QQ)(),
            (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
            (0, c.d)(),
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
        .filter((e) => (0, _.OP)(e));
}
function A() {
    return { promotion: (0, i.bG)([p.A], () => p.A.bogoPromotion) };
}
