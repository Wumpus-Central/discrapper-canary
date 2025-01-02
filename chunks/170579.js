var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    o = n(481060),
    u = n(607070),
    s = n(600164),
    c = n(483444),
    d = n(599250),
    f = n(926153),
    C = n(27693),
    _ = n(74538),
    m = n(937615),
    L = n(104494),
    S = n(639119),
    p = n(108989),
    T = n(474936),
    E = n(388032),
    N = n(779655);
let h = (e) => {
    let { isTier0: t, discountAmount: n } = e,
        l = (0, S.N)(),
        r = null != l && l.trial_id === T.a7,
        u = E.intl.string(E.t.IBYG5e);
    return (
        void 0 !== n ? (u = E.intl.formatToPlainString(E.t.iiLbvr, { percent: n })) : r && (u = E.intl.string(E.t.gtNqJS)),
        (0, i.jsx)('div', {
            className: N.trialBadgeContainer,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-xs/bold',
                className: a()(N.trialOfferText, { [N.tier0TrialOffer]: t }),
                children: u
            })
        })
    );
};
t.Z = function (e) {
    var t;
    let n;
    let { hideCloseButton: l = !1, hideCloseOnFullScreen: S, shouldShowPrice: g, plan: A, renderAnimation: v, onClose: R, isGift: P, upgradeToPremiumType: x, headerTheme: I = T.nL.DEFAULT, className: M, showTrialBadge: b = !1, showDiscountBadge: y = !1 } = e,
        O = x === T.p9.TIER_2;
    n = x === T.p9.TIER_0 ? d.Z : x === T.p9.TIER_1 ? f.Z : c.Z;
    let D = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
        Z = (0, L.Ng)(),
        w = null == Z ? void 0 : null === (t = Z.discount) || void 0 === t ? void 0 : t.amount;
    return (0, i.jsxs)('div', {
        'aria-hidden': !0,
        className: a()(
            {
                [N.headerBackground]: !O,
                [N.tier2HeaderBackground]: O
            },
            M
        ),
        children: [
            D || I !== T.nL.WINTER
                ? null
                : (0, i.jsx)(p.Z, {
                      className: N.snow,
                      wind: 5
                  }),
            (b || y) && (0, i.jsx)(C.Z, { className: N.trialBadgeSparkles }),
            v(),
            (0, i.jsxs)(s.Z, {
                align: s.Z.Align.START,
                justify: s.Z.Justify.BETWEEN,
                className: N.headerTop,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(n, { className: a()(N.headerIcon, { [N.nonTier2]: !O }) }),
                            (b || y) &&
                                (0, i.jsx)(h, {
                                    isTier0: x === T.p9.TIER_0,
                                    discountAmount: y ? w : void 0
                                })
                        ]
                    }),
                    !l &&
                        (0, i.jsx)(o.ModalCloseButton, {
                            hideOnFullscreen: S,
                            onClick: R,
                            className: N.closeButton
                        })
                ]
            }),
            g && null != A
                ? (0, i.jsx)('div', {
                      className: N.price,
                      children: (function (e, t) {
                          let n = _.ZP.getDefaultPrice(e),
                              { intervalType: i } = _.ZP.getInterval(e),
                              l = (0, m.T4)(n.amount, n.currency);
                          if (t) return l;
                          switch (i) {
                              case T.rV.MONTH:
                                  return E.intl.formatToPlainString(E.t.AbOLNj, { price: l });
                              case T.rV.YEAR:
                                  return E.intl.formatToPlainString(E.t.rS8FAw, { price: l });
                          }
                      })(A, P)
                  })
                : null
        ]
    });
};
