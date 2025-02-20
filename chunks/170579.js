n.d(t, { Z: () => I });
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
    p = n(27693),
    _ = n(74538),
    h = n(937615),
    m = n(104494),
    g = n(639119),
    E = n(108989),
    v = n(474936),
    b = n(388032),
    y = n(236118);
function O(e, t) {
    let n = _.ZP.getDefaultPrice(e),
        { intervalType: r } = _.ZP.getInterval(e),
        i = (0, h.T4)(n.amount, n.currency);
    if (t) return i;
    switch (r) {
        case v.rV.MONTH:
            return b.NW.formatToPlainString(b.t.AbOLNj, { price: i });
        case v.rV.YEAR:
            return b.NW.formatToPlainString(b.t.rS8FAw, { price: i });
    }
}
let S = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            i = (0, g.N)(),
            a = null != i && i.trial_id === v.a7,
            l = b.NW.string(b.t.IBYG5e);
        return (
            void 0 !== n ? (l = b.NW.formatToPlainString(b.t.iiLbvr, { percent: n })) : a && (l = b.NW.string(b.t.gtNqJS)),
            (0, r.jsx)('div', {
                className: y.trialBadgeContainer,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-xs/bold',
                    className: o()(y.trialOfferText, { [y.tier0TrialOffer]: t }),
                    children: l
                })
            })
        );
    },
    I = function (e) {
        var t;
        let n;
        let { hideCloseButton: i = !1, hideCloseOnFullScreen: _, shouldShowPrice: h, plan: g, renderAnimation: b, onClose: I, isGift: T, upgradeToPremiumType: N, headerTheme: A = v.nL.DEFAULT, className: C, showTrialBadge: R = !1, showDiscountBadge: P = !1 } = e,
            w = N === v.p9.TIER_2;
        n = N === v.p9.TIER_0 ? d.Z : N === v.p9.TIER_1 ? f.Z : u.Z;
        let D = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
            x = (0, m.Ng)(),
            L = null == x ? void 0 : null === (t = x.discount) || void 0 === t ? void 0 : t.amount;
        return (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: o()(
                {
                    [y.headerBackground]: !w,
                    [y.tier2HeaderBackground]: w
                },
                C
            ),
            children: [
                D || A !== v.nL.WINTER
                    ? null
                    : (0, r.jsx)(E.Z, {
                          className: y.snow,
                          wind: 5
                      }),
                (R || P) && (0, r.jsx)(p.Z, { className: y.trialBadgeSparkles }),
                b(),
                (0, r.jsxs)(c.Z, {
                    align: c.Z.Align.START,
                    justify: c.Z.Justify.BETWEEN,
                    className: y.headerTop,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(n, { className: o()(y.headerIcon, { [y.nonTier2]: !w }) }),
                                (R || P) &&
                                    (0, r.jsx)(S, {
                                        isTier0: N === v.p9.TIER_0,
                                        discountAmount: P ? L : void 0
                                    })
                            ]
                        }),
                        !i &&
                            (0, r.jsx)(s.olH, {
                                hideOnFullscreen: _,
                                onClick: I,
                                className: y.closeButton
                            })
                    ]
                }),
                h && null != g
                    ? (0, r.jsx)('div', {
                          className: y.price,
                          children: O(g, T)
                      })
                    : null
            ]
        });
    };
