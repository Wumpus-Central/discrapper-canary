"use strict";
n.d(t, { Eu: () => p, IO: () => g, y7: () => f });
var i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(287809),
    o = n(354670),
    l = n(927578),
    d = n(89366),
    _ = n(881489),
    u = n(264779),
    c = n(597758),
    E = n(374200),
    h = n(788868);
function m(e, t, n, s) {
    let a = (0, r.yK)([E.A], () => E.A.outboundPromotions),
        o = (0, r.bG)([E.A], () => E.A.consumedInboundPromotionId);
    return i.useMemo(
        () => a.filter((i) => !(i.id === o || !(0, u.OP)(i) || n || (0, u.dG)(i)) && ((!e && !t) || (0, u.S0)(i, s))),
        [a, o, n, e, t, s],
    );
}
function f() {
    let e = (0, r.bG)([E.A], () => E.A.lastFetchedActivePromotions),
        t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, d.QQ)(),
        f = (0, r.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
        g = (0, _.ds)(),
        p = l.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        A = !l.Ay.isPremium(t) || p,
        [I, T] = i.useState(!1),
        [S, N] = i.useState([]);
    i.useEffect(() => {
        (null != e || g) && s.h.wait(() => c.Ay.markOutboundPromotionsSeen());
    }, [e, g]);
    let C = i.useCallback((e) => {
        N((t) =>
            t.some((t) => {
                let { promotion: n } = t;
                return n.id === e.promotion.id;
            })
                ? t
                : [...t, e],
        );
    }, []);
    i.useEffect(() => {
        s.h.wait(() => {
            A && (null == e || g) && c.Ay.fetchActivePromotions();
        });
    }, [e, A, g]),
        i.useEffect(() => {
            s.h.wait(() => {
                (0, u.b3)()
                    .then((e) => {
                        N(e), T(!0);
                    })
                    .catch(() => {
                        N([]), T(!0);
                    });
            });
        }, []);
    let R = {};
    for (let { code: e, promotion: t } of S) R[t.id] = e;
    let O = m(n, f, g, R),
        y = new Set(
            O.map((e) => {
                let { id: t } = e;
                return t;
            }),
        );
    return {
        promotionsLoaded: I && (!A || null != e || g),
        activeOutboundPromotions: O,
        claimedEndedOutboundPromotions: S.filter((e) => {
            let { promotion: t } = e;
            return !y.has(t.id) && !1 === (0, u.HB)({ promotionType: t.promotionType }) && !(0, u.dG)(t);
        }).filter((e) => (0, u.OP)(e.promotion)),
        claimedOutboundPromotionCodeMap: R,
        addClaimedOutboundPromotionCode: C,
    };
}
function g() {
    let e = (0, r.bG)([E.A], () => E.A.lastSeenOutboundPromotionStartDate),
        t = m(
            (0, d.QQ)(),
            (0, r.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
            (0, _.ds)(),
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
        .filter((e) => (0, u.OP)(e));
}
function p() {
    return { promotion: (0, r.bG)([E.A], () => E.A.bogoPromotion) };
}
