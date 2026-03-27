"use strict";
n.d(t, { Eu: () => A, IO: () => g, y7: () => E });
var r = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(287809),
    o = n(816733),
    l = n(927578),
    u = n(89366),
    c = n(637073),
    d = n(728364),
    _ = n(264779),
    f = n(597758),
    p = n(412260),
    h = n(788868);
function m(e, t, n, s) {
    let a = (0, i.yK)([p.A], () => p.A.outboundPromotions),
        o = (0, i.bG)([p.A], () => p.A.consumedInboundPromotionId);
    return r.useMemo(
        () => a.filter((r) => !(r.id === o || !(0, _.OP)(r) || n || (0, _.dG)(r)) && ((!e && !t) || (0, _.S0)(r, s))),
        [a, o, n, e, t, s],
    );
}
function E() {
    let e = (0, i.bG)([p.A], () => p.A.lastFetchedActivePromotions),
        t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, u.QQ)(),
        E = (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
        g = (0, c.ds)(),
        [A, I] = r.useState(!1),
        [T, S] = r.useState([]);
    r.useEffect(() => {
        (null != e || g) && s.h.wait(() => f.Ay.markOutboundPromotionsSeen());
    }, [e, g]);
    let y = r.useCallback((e) => {
            S((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e],
            );
        }, []),
        v = l.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        N =
            d.m.useExperiment({ location: "useOutboundPromotions" }, { autoTrackExposure: !1, disable: v }).enabled ||
            v;
    r.useEffect(() => {
        s.h.wait(() => {
            N && (null == e || g) && f.Ay.fetchActivePromotions();
        });
    }, [e, N, g]),
        r.useEffect(() => {
            s.h.wait(() => {
                (0, _.b3)()
                    .then((e) => {
                        S(e), I(!0);
                    })
                    .catch(() => {
                        S([]), I(!0);
                    });
            });
        }, []);
    let C = {};
    for (let { code: e, promotion: t } of T) C[t.id] = e;
    let R = m(n, E, g, C),
        O = new Set(
            R.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: A && (!N || null != e || g),
        activeOutboundPromotions: R,
        claimedEndedOutboundPromotions: T.filter((e) => {
            let { promotion: t } = e;
            return (
                !O.has(t.id) && !1 === (0, _.HB)({ promotionPartner: t.outboundTitle, promotionType: t.promotionType })
            );
        }).filter((e) => (0, _.OP)(e.promotion)),
        claimedOutboundPromotionCodeMap: C,
        addClaimedOutboundPromotionCode: y,
    };
}
function g() {
    let e = (0, i.bG)([p.A], () => p.A.lastSeenOutboundPromotionStartDate),
        t = m(
            (0, u.QQ)(),
            (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
            (0, c.ds)(),
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
