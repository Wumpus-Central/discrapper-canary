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
    O = n(790816);
function v(e, t) {
    let n = p.ZP.getDefaultPrice(e),
        { intervalType: r } = p.ZP.getInterval(e),
        i = (0, h.T4)(n.amount, n.currency);
    if (t) return i;
    switch (r) {
        case b.rV.MONTH:
            return y.intl.formatToPlainString(y.t.AbOLNj, { price: i });
        case b.rV.YEAR:
            return y.intl.formatToPlainString(y.t.rS8FAw, { price: i });
    }
}
let I = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            i = (0, g.N)(),
            a = null != i && i.trial_id === b.a7,
            l = y.intl.string(y.t.IBYG5e);
        return (
            void 0 !== n ? (l = y.intl.formatToPlainString(y.t.iiLbvr, { percent: n })) : a && (l = y.intl.string(y.t.gtNqJS)),
            (0, r.jsx)('div', {
                className: O.trialBadgeContainer,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-xs/bold',
                    className: o()(O.trialOfferText, { [O.tier0TrialOffer]: t }),
                    children: l
                })
            })
        );
    },
    S = function (e) {
        var t;
        let n,
            { hideCloseButton: i = !1, hideCloseOnFullScreen: p, shouldShowPrice: h, plan: g, renderAnimation: y, onClose: S, isGift: T, upgradeToPremiumType: A, headerTheme: N = b.nL.DEFAULT, className: C, showTrialBadge: R = !1, showDiscountBadge: P = !1 } = e,
            w = A === b.p9.TIER_2;
        n = A === b.p9.TIER_0 ? d.Z : A === b.p9.TIER_1 ? f.Z : u.Z;
        let D = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
            L = (0, m.Ng)(),
            x = null == L || null == (t = L.discount) ? void 0 : t.amount;
        return (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: o()(
                {
                    [O.headerBackground]: !w,
                    [O.tier2HeaderBackground]: w
                },
                C
            ),
            children: [
                D || N !== b.nL.WINTER
                    ? null
                    : (0, r.jsx)(E.Z, {
                          className: O.snow,
                          wind: 5
                      }),
                (R || P) && (0, r.jsx)(_.Z, { className: O.trialBadgeSparkles }),
                y(),
                (0, r.jsxs)(c.Z, {
                    align: c.Z.Align.START,
                    justify: c.Z.Justify.BETWEEN,
                    className: O.headerTop,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(n, { className: o()(O.headerIcon, { [O.nonTier2]: !w }) }),
                                (R || P) &&
                                    (0, r.jsx)(I, {
                                        isTier0: A === b.p9.TIER_0,
                                        discountAmount: P ? x : void 0
                                    })
                            ]
                        }),
                        !i &&
                            (0, r.jsx)(s.olH, {
                                hideOnFullscreen: p,
                                onClick: S,
                                className: O.closeButton
                            })
                    ]
                }),
                h && null != g
                    ? (0, r.jsx)('div', {
                          className: O.price,
                          children: v(g, T)
                      })
                    : null
            ]
        });
    };
