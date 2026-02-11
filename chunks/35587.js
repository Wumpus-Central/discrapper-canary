"use strict";
n.d(t, { Eu: () => I, IO: () => A, y7: () => E });
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
    h = n(412260),
    p = n(788868);
function g(e, t, n, a) {
    let s = (0, i.yK)([h.A], () => h.A.outboundPromotions),
        o = (0, i.bG)([h.A], () => h.A.consumedInboundPromotionId);
    return r.useMemo(
        () => s.filter((r) => r.id !== o && !!(0, _.OP)(r) && !n && ((!e && !t) || (0, _.S0)(r, a))),
        [s, o, n, e, t, a],
    );
}
function E() {
    let e = (0, i.bG)([h.A], () => h.A.lastFetchedActivePromotions),
        t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, u.QQ)(),
        E = (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
        A = (0, c.d)(),
        [I, T] = r.useState(!1),
        [y, S] = r.useState([]);
    r.useEffect(() => {
        (null != e || A) && a.h.wait(() => f.Ay.markOutboundPromotionsSeen());
    }, [e, A]);
    let v = r.useCallback((e) => {
            S((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e],
            );
        }, []),
        C = l.Ay.isPremiumExactly(t, p.PremiumTypes.TIER_2),
        b =
            d.m.useExperiment({ location: "useOutboundPromotions" }, { autoTrackExposure: !1, disable: C }).enabled ||
            C;
    r.useEffect(() => {
        a.h.wait(() => {
            b && (null == e || A) && f.Ay.fetchActivePromotions();
        });
    }, [e, b, A]),
        r.useEffect(() => {
            a.h.wait(() => {
                (0, _.b3)()
                    .then((e) => {
                        S(e), T(!0);
                    })
                    .catch(() => {
                        S([]), T(!0);
                    });
            });
        }, []);
    let N = {};
    for (let { code: e, promotion: t } of y) N[t.id] = e;
    let R = g(n, E, A, N),
        O = new Set(
            R.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: I && (!b || null != e || A),
        activeOutboundPromotions: R,
        claimedEndedOutboundPromotions: y
            .filter((e) => {
                let { promotion: t } = e;
                return (
                    !O.has(t.id) &&
                    !1 === (0, _.HB)({ promotionPartner: t.outboundTitle, promotionType: t.promotionType })
                );
            })
            .filter((e) => (0, _.OP)(e.promotion)),
        claimedOutboundPromotionCodeMap: N,
        addClaimedOutboundPromotionCode: v,
    };
}
function A() {
    let e = (0, i.bG)([h.A], () => h.A.lastSeenOutboundPromotionStartDate),
        t = g(
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
function I() {
    return { promotion: (0, i.bG)([h.A], () => h.A.bogoPromotion) };
}
