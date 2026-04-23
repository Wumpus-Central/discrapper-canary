"use strict";
n.d(t, { Eu: () => g, IO: () => m, y7: () => E });
var r = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(287809),
    o = n(816733),
    l = n(927578),
    u = n(89366),
    c = n(881489),
    d = n(264779),
    _ = n(597758),
    f = n(412260),
    p = n(788868);
function h(e, t, n, s) {
    let a = (0, i.yK)([f.A], () => f.A.outboundPromotions),
        o = (0, i.bG)([f.A], () => f.A.consumedInboundPromotionId);
    return r.useMemo(
        () => a.filter((r) => !(r.id === o || !(0, d.OP)(r) || n || (0, d.dG)(r)) && ((!e && !t) || (0, d.S0)(r, s))),
        [a, o, n, e, t, s],
    );
}
function E() {
    let e = (0, i.bG)([f.A], () => f.A.lastFetchedActivePromotions),
        t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, u.QQ)(),
        E = (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
        m = (0, c.ds)(),
        g = l.Ay.isPremiumExactly(t, p.PremiumTypes.TIER_2),
        A = !l.Ay.isPremium(t) || g,
        [I, T] = r.useState(!1),
        [S, y] = r.useState([]);
    r.useEffect(() => {
        (null != e || m) && s.h.wait(() => _.Ay.markOutboundPromotionsSeen());
    }, [e, m]);
    let N = r.useCallback((e) => {
        y((t) =>
            t.some((t) => {
                let { promotion: n } = t;
                return n.id === e.promotion.id;
            })
                ? t
                : [...t, e],
        );
    }, []);
    r.useEffect(() => {
        s.h.wait(() => {
            A && (null == e || m) && _.Ay.fetchActivePromotions();
        });
    }, [e, A, m]),
        r.useEffect(() => {
            s.h.wait(() => {
                (0, d.b3)()
                    .then((e) => {
                        y(e), T(!0);
                    })
                    .catch(() => {
                        y([]), T(!0);
                    });
            });
        }, []);
    let v = {};
    for (let { code: e, promotion: t } of S) v[t.id] = e;
    let C = h(n, E, m, v),
        O = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: I && (!A || null != e || m),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: S.filter((e) => {
            let { promotion: t } = e;
            return !O.has(t.id) && !1 === (0, d.HB)({ promotionType: t.promotionType }) && !(0, d.dG)(t);
        }).filter((e) => (0, d.OP)(e.promotion)),
        claimedOutboundPromotionCodeMap: v,
        addClaimedOutboundPromotionCode: N,
    };
}
function m() {
    let e = (0, i.bG)([f.A], () => f.A.lastSeenOutboundPromotionStartDate),
        t = h(
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
        .filter((e) => (0, d.OP)(e));
}
function g() {
    return { promotion: (0, i.bG)([f.A], () => f.A.bogoPromotion) };
}
