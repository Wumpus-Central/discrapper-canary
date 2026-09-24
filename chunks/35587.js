r.d(t, { IO: () => f, Sq: () => p, T1: () => m, Wi: () => x, y7: () => h });
var i = r(582128),
    n = r(17928),
    s = r(228366),
    l = r(287809),
    a = r(158045),
    u = r(264779),
    o = r(962644),
    c = r(412260),
    d = r(202541);
function m() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, n.yK)([c.A], () => c.A.outboundPromotions),
        r = (0, n.bG)([c.A], () => c.A.consumedInboundPromotionId),
        s = (0, n.bG)([c.A], () => c.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
        let i = e
            ? new Set(
                  s.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === r || !(0, u.OP)(e) || (0, u.g_)(e)) && (i?.has(e.id), !0));
    }, [t, r, s, e]);
}
function h() {
    let e = (0, n.bG)([c.A], () => c.A.lastFetchedActivePromotions),
        t = (0, n.bG)([l.default], () => l.default.getCurrentUser()),
        r = a.Ay.isPremiumExactly(t, d.PremiumTypes.TIER_2),
        h = !a.Ay.isPremium(t) || r,
        f = (0, n.bG)([c.A], () => c.A.claimedOutboundPromotionCodes),
        x = (0, n.bG)([c.A], () => c.A.claimedOutboundPromotionCodesLoaded);
    (i.useEffect(() => {
        null != e && s.h.wait(() => o.Ay.markOutboundPromotionsSeen());
    }, [e]),
        i.useEffect(() => {
            s.h.wait(() => {
                h && null == e && o.Ay.fetchActivePromotions();
            });
        }, [e, h]),
        i.useEffect(() => {
            s.h.wait(() => {
                o.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []));
    let p = i.useMemo(() => (0, u.eN)(f), [f]),
        g = m({ includeClaimedPromotions: !0 }),
        A = i.useMemo(() => {
            let e = new Set(
                g.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return f.filter((t) => {
                let { promotion: r } = t;
                return (
                    !e.has(r.id) &&
                    !1 === (0, u.HB)({ promotionType: r.promotionType }) &&
                    !(0, u.g_)(r) &&
                    (0, u.OP)(r)
                );
            });
        }, [g, f]);
    return {
        promotionsLoaded: x && (!h || null != e),
        activeOutboundPromotions: g,
        claimedEndedOutboundPromotions: A,
        claimedOutboundPromotionCodeMap: p,
    };
}
function f() {
    let e = (0, n.bG)([c.A], () => c.A.lastSeenOutboundPromotionStartDate),
        t = m();
    return i
        .useMemo(
            () =>
                null == e
                    ? t
                    : t.filter((t) => {
                          let { startDate: r } = t;
                          return new Date(r) > new Date(e);
                      }),
            [t, e],
        )
        .filter((e) => (0, u.OP)(e));
}
function x(e) {
    return (0, n.bG)([c.A], () => c.A.hasPromotion(e));
}
function p() {
    return (
        i.useEffect(() => {
            (0, o.BE)();
        }, []),
        (0, n.bG)([c.A], () => c.A.hasActiveBogoRewardPromotion())
    );
}
