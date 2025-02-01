n.d(t, { Z: () => S });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(600164),
    c = n(483444),
    d = n(599250),
    f = n(926153),
    _ = n(27693),
    p = n(74538),
    h = n(937615),
    m = n(104494),
    g = n(639119),
    E = n(108989),
    v = n(474936),
    y = n(388032),
    I = n(779655);
function T(e, t) {
    let n = p.ZP.getDefaultPrice(e),
        { intervalType: i } = p.ZP.getInterval(e),
        r = (0, h.T4)(n.amount, n.currency);
    if (t) return r;
    switch (i) {
        case v.rV.MONTH:
            return y.intl.formatToPlainString(y.t.AbOLNj, { price: r });
        case v.rV.YEAR:
            return y.intl.formatToPlainString(y.t.rS8FAw, { price: r });
    }
}
let b = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            r = (0, g.N)(),
            s = null != r && r.trial_id === v.a7,
            l = y.intl.string(y.t.IBYG5e);
        return (
            void 0 !== n ? (l = y.intl.formatToPlainString(y.t.iiLbvr, { percent: n })) : s && (l = y.intl.string(y.t.gtNqJS)),
            (0, i.jsx)('div', {
                className: I.trialBadgeContainer,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-xs/bold',
                    className: a()(I.trialOfferText, { [I.tier0TrialOffer]: t }),
                    children: l
                })
            })
        );
    },
    S = function (e) {
        var t;
        let n;
        let { hideCloseButton: r = !1, hideCloseOnFullScreen: p, shouldShowPrice: h, plan: g, renderAnimation: y, onClose: S, isGift: A, upgradeToPremiumType: N, headerTheme: C = v.nL.DEFAULT, className: R, showTrialBadge: O = !1, showDiscountBadge: D = !1 } = e,
            x = N === v.p9.TIER_2;
        n = N === v.p9.TIER_0 ? d.Z : N === v.p9.TIER_1 ? f.Z : c.Z;
        let L = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
            P = (0, m.Ng)(),
            w = null == P ? void 0 : null === (t = P.discount) || void 0 === t ? void 0 : t.amount;
        return (0, i.jsxs)('div', {
            'aria-hidden': !0,
            className: a()(
                {
                    [I.headerBackground]: !x,
                    [I.tier2HeaderBackground]: x
                },
                R
            ),
            children: [
                L || C !== v.nL.WINTER
                    ? null
                    : (0, i.jsx)(E.Z, {
                          className: I.snow,
                          wind: 5
                      }),
                (O || D) && (0, i.jsx)(_.Z, { className: I.trialBadgeSparkles }),
                y(),
                (0, i.jsxs)(u.Z, {
                    align: u.Z.Align.START,
                    justify: u.Z.Justify.BETWEEN,
                    className: I.headerTop,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(n, { className: a()(I.headerIcon, { [I.nonTier2]: !x }) }),
                                (O || D) &&
                                    (0, i.jsx)(b, {
                                        isTier0: N === v.p9.TIER_0,
                                        discountAmount: D ? w : void 0
                                    })
                            ]
                        }),
                        !r &&
                            (0, i.jsx)(o.olH, {
                                hideOnFullscreen: p,
                                onClick: S,
                                className: I.closeButton
                            })
                    ]
                }),
                h && null != g
                    ? (0, i.jsx)('div', {
                          className: I.price,
                          children: T(g, A)
                      })
                    : null
            ]
        });
    };
