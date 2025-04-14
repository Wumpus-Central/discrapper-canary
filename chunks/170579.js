n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(600164),
    u = n(483444),
    d = n(599250),
    f = n(926153),
    _ = n(27693),
    p = n(74538),
    h = n(937615),
    m = n(104494),
    g = n(639119),
    E = n(108989),
    b = n(474936),
    y = n(388032),
    v = n(790816);
function O(e, t) {
    let n = p.ZP.getDefaultPrice(e),
        { intervalType: r } = p.ZP.getInterval(e),
        i = (0, h.T4)(n.amount, n.currency);
    if (t) return i;
    switch (r) {
        case b.rV.MONTH:
            return y.NW.formatToPlainString(y.t.AbOLNj, { price: i });
        case b.rV.YEAR:
            return y.NW.formatToPlainString(y.t.rS8FAw, { price: i });
    }
}
let I = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            i = (0, g.N)(),
            a = null != i && i.trial_id === b.a7,
            l = y.NW.string(y.t.IBYG5e);
        return (
            void 0 !== n ? (l = y.NW.formatToPlainString(y.t.iiLbvr, { percent: n })) : a && (l = y.NW.string(y.t.gtNqJS)),
            (0, r.jsx)('div', {
                className: v.trialBadgeContainer,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-xs/bold',
                    className: o()(v.trialOfferText, { [v.tier0TrialOffer]: t }),
                    children: l
                })
            })
        );
    },
    S = function (e) {
        var t;
        let n,
            { hideCloseButton: i = !1, hideCloseOnFullScreen: p, shouldShowPrice: h, plan: g, renderAnimation: y, onClose: S, isGift: T, upgradeToPremiumType: N, headerTheme: A = b.nL.DEFAULT, className: C, showTrialBadge: R = !1, showDiscountBadge: P = !1 } = e,
            w = N === b.p9.TIER_2;
        n = N === b.p9.TIER_0 ? d.Z : N === b.p9.TIER_1 ? f.Z : u.Z;
        let D = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
            L = (0, m.Ng)(),
            x = null == L || null == (t = L.discount) ? void 0 : t.amount;
        return (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: o()(
                {
                    [v.headerBackground]: !w,
                    [v.tier2HeaderBackground]: w
                },
                C
            ),
            children: [
                D || A !== b.nL.WINTER
                    ? null
                    : (0, r.jsx)(E.Z, {
                          className: v.snow,
                          wind: 5
                      }),
                (R || P) && (0, r.jsx)(_.Z, { className: v.trialBadgeSparkles }),
                y(),
                (0, r.jsxs)(c.Z, {
                    align: c.Z.Align.START,
                    justify: c.Z.Justify.BETWEEN,
                    className: v.headerTop,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(n, { className: o()(v.headerIcon, { [v.nonTier2]: !w }) }),
                                (R || P) &&
                                    (0, r.jsx)(I, {
                                        isTier0: N === b.p9.TIER_0,
                                        discountAmount: P ? x : void 0
                                    })
                            ]
                        }),
                        !i &&
                            (0, r.jsx)(s.olH, {
                                hideOnFullscreen: p,
                                onClick: S,
                                className: v.closeButton
                            })
                    ]
                }),
                h && null != g
                    ? (0, r.jsx)('div', {
                          className: v.price,
                          children: O(g, T)
                      })
                    : null
            ]
        });
    };
