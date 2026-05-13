"use strict";
n.d(t, { Eu: () => g, IO: () => m, y7: () => E });
var i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(287809),
    o = n(354670),
    l = n(927578),
    u = n(89366),
    c = n(881489),
    d = n(264779),
    _ = n(962644),
    f = n(374200),
    h = n(788868);
function p(e, t, n, s) {
    let a = (0, r.yK)([f.A], () => f.A.outboundPromotions),
        o = (0, r.bG)([f.A], () => f.A.consumedInboundPromotionId);
    return i.useMemo(
        () => a.filter((i) => !(i.id === o || !(0, d.OP)(i) || n || (0, d.dG)(i)) && ((!e && !t) || (0, d.S0)(i, s))),
        [a, o, n, e, t, s],
    );
}
function E() {
    let e = (0, r.bG)([f.A], () => f.A.lastFetchedActivePromotions),
        t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, u.QQ)(),
        E = (0, r.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
        m = (0, c.ds)(),
        g = l.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        A = !l.Ay.isPremium(t) || g,
        I = (0, r.bG)([f.A], () => f.A.claimedOutboundPromotionCodes),
        T = (0, r.bG)([f.A], () => f.A.claimedOutboundPromotionCodesLoaded);
    i.useEffect(() => {
        (null != e || m) && s.h.wait(() => _.Ay.markOutboundPromotionsSeen());
    }, [e, m]),
        i.useEffect(() => {
            s.h.wait(() => {
                A && (null == e || m) && _.Ay.fetchActivePromotions();
            });
        }, [e, A, m]),
        i.useEffect(() => {
            s.h.wait(() => {
                _.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []);
    let S = {};
    for (let { code: e, promotion: t } of I) S[t.id] = e;
    let N = p(n, E, m, S),
        y = i.useMemo(() => {
            let e = new Set(
                N.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return I.filter((t) => {
                let { promotion: n } = t;
                return (
                    !e.has(n.id) &&
                    !1 === (0, d.HB)({ promotionType: n.promotionType }) &&
                    !(0, d.dG)(n) &&
                    (0, d.OP)(n)
                );
            });
        }, [N, I]);
    return {
        promotionsLoaded: T && (!A || null != e || m),
        activeOutboundPromotions: N,
        claimedEndedOutboundPromotions: y,
        claimedOutboundPromotionCodeMap: S,
    };
}
function m() {
    let e = (0, r.bG)([f.A], () => f.A.lastSeenOutboundPromotionStartDate),
        t = p(
            (0, u.QQ)(),
            (0, r.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
            (0, c.ds)(),
            {},
        );
    return i
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
        .filter((e) => (0, d.OP)(e));
}
function g() {
    return { promotion: (0, r.bG)([f.A], () => f.A.bogoPromotion) };
}
