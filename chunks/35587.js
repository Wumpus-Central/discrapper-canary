"use strict";
n.d(t, { Eu: () => p, IO: () => f, T1: () => _, y7: () => h });
var i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(287809),
    o = n(428262),
    l = n(264779),
    u = n(962644),
    c = n(374200),
    d = n(788868);
function _() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.yK)([c.A], () => c.A.outboundPromotions),
        n = (0, r.bG)([c.A], () => c.A.consumedInboundPromotionId),
        s = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
        let i = e
            ? new Set(
                  s.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === n || !(0, l.OP)(e) || (0, l.dG)(e)) && (i?.has(e.id), !0));
    }, [t, n, s, e]);
}
function h() {
    let e = (0, r.bG)([c.A], () => c.A.lastFetchedActivePromotions),
        t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = o.Ay.isPremiumExactly(t, d.PremiumTypes.TIER_2),
        h = !o.Ay.isPremium(t) || n,
        f = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodes),
        p = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodesLoaded);
    i.useEffect(() => {
        null != e && s.h.wait(() => u.Ay.markOutboundPromotionsSeen());
    }, [e]),
        i.useEffect(() => {
            s.h.wait(() => {
                h && null == e && u.Ay.fetchActivePromotions();
            });
        }, [e, h]),
        i.useEffect(() => {
            s.h.wait(() => {
                u.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []);
    let E = i.useMemo(() => (0, l.eN)(f), [f]),
        m = _({ includeClaimedPromotions: !0 }),
        g = i.useMemo(() => {
            let e = new Set(
                m.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return f.filter((t) => {
                let { promotion: n } = t;
                return (
                    !e.has(n.id) &&
                    !1 === (0, l.HB)({ promotionType: n.promotionType }) &&
                    !(0, l.dG)(n) &&
                    (0, l.OP)(n)
                );
            });
        }, [m, f]);
    return {
        promotionsLoaded: p && (!h || null != e),
        activeOutboundPromotions: m,
        claimedEndedOutboundPromotions: g,
        claimedOutboundPromotionCodeMap: E,
    };
}
function f() {
    let e = (0, r.bG)([c.A], () => c.A.lastSeenOutboundPromotionStartDate),
        t = _();
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
        .filter((e) => (0, l.OP)(e));
}
function p() {
    return { promotion: (0, r.bG)([c.A], () => c.A.bogoPromotion) };
}
