"use strict";
n.d(t, { Eu: () => m, IO: () => E, T1: () => f, y7: () => p });
var i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(287809),
    o = n(166403),
    l = n(354670),
    u = n(428262),
    c = n(264779),
    d = n(962644),
    _ = n(374200),
    h = n(788868);
function f() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.yK)([_.A], () => _.A.outboundPromotions),
        n = (0, r.bG)([_.A], () => _.A.consumedInboundPromotionId),
        s = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        a = (0, r.bG)([l.A], () => l.A.hasAnyUnexpiredOffer()),
        u = (0, r.bG)([_.A], () => _.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
        let i = e
            ? new Set(
                  u.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter(
            (e) => !(e.id === n || !(0, c.OP)(e) || (0, c.dG)(e)) && (i?.has(e.id) === !0 || !(0, c.P9)(s, e, a)),
        );
    }, [t, n, s, a, u, e]);
}
function p() {
    let e = (0, r.bG)([_.A], () => _.A.lastFetchedActivePromotions),
        t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = u.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        o = !u.Ay.isPremium(t) || n,
        l = (0, r.bG)([_.A], () => _.A.claimedOutboundPromotionCodes),
        p = (0, r.bG)([_.A], () => _.A.claimedOutboundPromotionCodesLoaded);
    i.useEffect(() => {
        null != e && s.h.wait(() => d.Ay.markOutboundPromotionsSeen());
    }, [e]),
        i.useEffect(() => {
            s.h.wait(() => {
                o && null == e && d.Ay.fetchActivePromotions();
            });
        }, [e, o]),
        i.useEffect(() => {
            s.h.wait(() => {
                d.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []);
    let E = i.useMemo(() => (0, c.eN)(l), [l]),
        m = f({ includeClaimedPromotions: !0 }),
        g = i.useMemo(() => {
            let e = new Set(
                m.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return l.filter((t) => {
                let { promotion: n } = t;
                return (
                    !e.has(n.id) &&
                    !1 === (0, c.HB)({ promotionType: n.promotionType }) &&
                    !(0, c.dG)(n) &&
                    (0, c.OP)(n)
                );
            });
        }, [m, l]);
    return {
        promotionsLoaded: p && (!o || null != e),
        activeOutboundPromotions: m,
        claimedEndedOutboundPromotions: g,
        claimedOutboundPromotionCodeMap: E,
    };
}
function E() {
    let e = (0, r.bG)([_.A], () => _.A.lastSeenOutboundPromotionStartDate),
        t = f();
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
        .filter((e) => (0, c.OP)(e));
}
function m() {
    return { promotion: (0, r.bG)([_.A], () => _.A.bogoPromotion) };
}
