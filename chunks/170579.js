var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(607070),
    c = r(600164),
    d = r(483444),
    f = r(599250),
    p = r(926153),
    h = r(27693),
    _ = r(74538),
    m = r(937615),
    g = r(104494),
    E = r(639119),
    v = r(108989),
    y = r(474936),
    b = r(388032),
    I = r(779655);
function T(e, n) {
    let r = _.ZP.getDefaultPrice(e),
        { intervalType: i } = _.ZP.getInterval(e),
        a = (0, m.T4)(r.amount, r.currency);
    if (n) return a;
    switch (i) {
        case y.rV.MONTH:
            return b.intl.formatToPlainString(b.t.AbOLNj, { price: a });
        case y.rV.YEAR:
            return b.intl.formatToPlainString(b.t.rS8FAw, { price: a });
    }
}
let S = (e) => {
    let { isTier0: n, discountAmount: r } = e,
        a = (0, E.N)(),
        s = null != a && a.trial_id === y.a7,
        u = b.intl.string(b.t.IBYG5e);
    return (
        void 0 !== r ? (u = b.intl.formatToPlainString(b.t.iiLbvr, { percent: r })) : s && (u = b.intl.string(b.t.gtNqJS)),
        (0, i.jsx)('div', {
            className: I.trialBadgeContainer,
            children: (0, i.jsx)(l.Text, {
                variant: 'text-xs/bold',
                className: o()(I.trialOfferText, { [I.tier0TrialOffer]: n }),
                children: u
            })
        })
    );
};
function A(e) {
    var n;
    let r;
    let { hideCloseButton: a = !1, hideCloseOnFullScreen: _, shouldShowPrice: m, plan: E, renderAnimation: b, onClose: A, isGift: C, upgradeToPremiumType: N, headerTheme: R = y.nL.DEFAULT, className: O, showTrialBadge: D = !1, showDiscountBadge: x = !1 } = e,
        L = N === y.p9.TIER_2;
    r = N === y.p9.TIER_0 ? f.Z : N === y.p9.TIER_1 ? p.Z : d.Z;
    let w = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        P = (0, g.Ng)(),
        M = null == P ? void 0 : null === (n = P.discount) || void 0 === n ? void 0 : n.amount;
    return (0, i.jsxs)('div', {
        'aria-hidden': !0,
        className: o()(
            {
                [I.headerBackground]: !L,
                [I.tier2HeaderBackground]: L
            },
            O
        ),
        children: [
            w || R !== y.nL.WINTER
                ? null
                : (0, i.jsx)(v.Z, {
                      className: I.snow,
                      wind: 5
                  }),
            (D || x) && (0, i.jsx)(h.Z, { className: I.trialBadgeSparkles }),
            b(),
            (0, i.jsxs)(c.Z, {
                align: c.Z.Align.START,
                justify: c.Z.Justify.BETWEEN,
                className: I.headerTop,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(r, { className: o()(I.headerIcon, { [I.nonTier2]: !L }) }),
                            (D || x) &&
                                (0, i.jsx)(S, {
                                    isTier0: N === y.p9.TIER_0,
                                    discountAmount: x ? M : void 0
                                })
                        ]
                    }),
                    !a &&
                        (0, i.jsx)(l.ModalCloseButton, {
                            hideOnFullscreen: _,
                            onClick: A,
                            className: I.closeButton
                        })
                ]
            }),
            m && null != E
                ? (0, i.jsx)('div', {
                      className: I.price,
                      children: T(E, C)
                  })
                : null
        ]
    });
}
n.Z = A;
