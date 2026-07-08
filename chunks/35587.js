"use strict";
n.d(t, { Eu: () => h, IO: () => A, Sq: () => f, T1: () => _, Wi: () => I, y7: () => E });
var i = n(64700),
    r = n(17928),
    a = n(228366),
    s = n(287809),
    l = n(428262),
    o = n(264779),
    d = n(962644),
    c = n(374200),
    u = n(202541);
function _() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.yK)([c.A], () => c.A.outboundPromotions),
        n = (0, r.bG)([c.A], () => c.A.consumedInboundPromotionId),
        a = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
        let i = e
            ? new Set(
                  a.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === n || !(0, o.OP)(e) || (0, o.dG)(e)) && (i?.has(e.id), !0));
    }, [t, n, a, e]);
}
function E() {
    let e = (0, r.bG)([c.A], () => c.A.lastFetchedActivePromotions),
        t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        n = l.Ay.isPremiumExactly(t, u.PremiumTypes.TIER_2),
        E = !l.Ay.isPremium(t) || n,
        A = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodes),
        h = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodesLoaded);
    i.useEffect(() => {
        null != e && a.h.wait(() => d.Ay.markOutboundPromotionsSeen());
    }, [e]),
        i.useEffect(() => {
            a.h.wait(() => {
                E && null == e && d.Ay.fetchActivePromotions();
            });
        }, [e, E]),
        i.useEffect(() => {
            a.h.wait(() => {
                d.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []);
    let I = i.useMemo(() => (0, o.eN)(A), [A]),
        f = _({ includeClaimedPromotions: !0 }),
        p = i.useMemo(() => {
            let e = new Set(
                f.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return A.filter((t) => {
                let { promotion: n } = t;
                return (
                    !e.has(n.id) &&
                    !1 === (0, o.HB)({ promotionType: n.promotionType }) &&
                    !(0, o.dG)(n) &&
                    (0, o.OP)(n)
                );
            });
        }, [f, A]);
    return {
        promotionsLoaded: h && (!E || null != e),
        activeOutboundPromotions: f,
        claimedEndedOutboundPromotions: p,
        claimedOutboundPromotionCodeMap: I,
    };
}
function A() {
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
        .filter((e) => (0, o.OP)(e));
}
function h() {
    return { promotion: (0, r.bG)([c.A], () => c.A.bogoPromotion) };
}
function I(e) {
    return (0, r.bG)([c.A], () => c.A.hasPromotion(e));
}
function f() {
    return (
        i.useEffect(() => {
            (0, d.BE)();
        }, []),
        (0, r.bG)([c.A], () => c.A.getMarketingMomentPromotion()?.hasBogoReward === !0)
    );
}
