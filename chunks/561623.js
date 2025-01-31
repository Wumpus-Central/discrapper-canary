n.d(e, { default: () => S }), n(47120), n(411104);
var o = n(200651),
    r = n(192379),
    i = n(442837),
    l = n(780384),
    a = n(481060),
    s = n(366939),
    u = n(911969),
    c = n(410030),
    d = n(100527),
    _ = n(906732),
    m = n(583046),
    f = n(963249),
    C = n(853872),
    p = n(509545),
    I = n(626135),
    h = n(74538),
    T = n(937615),
    N = n(212895),
    g = n(296848),
    x = n(374649),
    E = n(807163),
    b = n(798769),
    M = n(317269),
    y = n(474936),
    P = n(981631),
    v = n(388032),
    R = n(486299);
let S = (t) => {
    var e, n, S, k;
    let { daysLeft: U, premiumType: A, premiumSubscription: L, analyticsSource: Z, ...j } = t,
        F = (0, c.ZP)(),
        [O, w] = r.useState(!1),
        { analyticsLocations: Y } = (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
        X = (0, i.e7)([C.Z], () => ((null == L ? void 0 : L.paymentSourceId) != null ? C.Z.getPaymentSource(L.paymentSourceId) : null), [L]),
        B = L.items[0].planId,
        H = (0, h.Wz)(y.GP[B].skuId),
        { priceOptions: z } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [H],
            paymentSourceId: null == L ? void 0 : L.paymentSourceId,
            isGift: !1
        }),
        [D] = (0, x.ED)({
            subscriptionId: L.id,
            items: [
                {
                    planId: B,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == L ? void 0 : L.paymentSourceId,
            currency: z.currency,
            analyticsLocations: (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
        }),
        G = (0, i.e7)([p.Z], () => (0, g.oE)(B), [B]),
        W = (0, i.e7)([p.Z], () => p.Z.isFetchingForSKU(H)),
        K = null == D ? void 0 : null === (k = D.invoiceItems) || void 0 === k ? void 0 : null === (S = k.find((t) => t.subscriptionPlanId === B)) || void 0 === S ? void 0 : null === (n = S.discounts) || void 0 === n ? void 0 : null === (e = n.find((t) => t.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === e ? void 0 : e.amount,
        Q = null != G ? (0, h.aS)(G.id, !1, !1, z) : null,
        V = null != Q && null != K ? (0, T.T4)(Q.amount - (null != K ? K : 0), Q.currency) : null,
        { intervalType: q, intervalCount: J } = h.ZP.getInterval(B),
        $ = A === y.p9.TIER_1,
        tt = null != Q ? (0, T.T4)(Q.amount, Q.currency) : null;
    return (
        r.useEffect(() => {
            I.default.track(P.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: Z
            });
        }, [Z]),
        (0, o.jsx)(a.Y0X, {
            ...j,
            className: R.modal,
            children: O
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(b.Z, {
                              premiumType: A,
                              onClose: j.onClose
                          }),
                          (0, o.jsx)(M.ZP, {
                              planId: B,
                              onClose: j.onClose,
                              paymentSourceType: null == X ? void 0 : X.type
                          })
                      ]
                  })
                : (0, o.jsx)(E.Z, {
                      premiumType: A,
                      titleText: $ ? v.intl.formatToPlainString(v.t.Sngnzs, { daysLeft: U }) : v.intl.formatToPlainString(v.t.tdvIlZ, { daysLeft: U }),
                      subtitleText: $ ? v.intl.format(v.t['6Su2XV'], {}) : v.intl.format(v.t['lE+P8f'], {}),
                      footer: (0, o.jsxs)('div', {
                          children: [
                              null !== tt
                                  ? (0, o.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        children: (function (t) {
                                            switch (q) {
                                                case y.rV.YEAR:
                                                    return $ ? v.intl.format(v.t.O7JRzc, { price: t }) : v.intl.format(v.t['0y5kAA'], { price: t });
                                                case y.rV.MONTH:
                                                    if (null != V)
                                                        return v.intl.format(v.t['1/ucvr'], {
                                                            discountPrice: V,
                                                            defaultPrice: t
                                                        });
                                                    if ($) return v.intl.format(v.t.rbwRlZ, { price: t });
                                                    if (1 === J) return v.intl.format(v.t.C9oRCw, { price: t });
                                                    return v.intl.format(v.t.TmmTgo, {
                                                        price: t,
                                                        intervalCount: J
                                                    });
                                                default:
                                                    throw Error('Unknown interval type '.concat(q));
                                            }
                                        })(tt)
                                    })
                                  : (0, o.jsx)(a.$jN, { type: a.RAz.SPINNING_CIRCLE }),
                              (0, o.jsxs)('div', {
                                  className: R.footer,
                                  children: [
                                      (0, o.jsx)(a.zxk, {
                                          disabled: W,
                                          onClick: () => {
                                              if (null != L) {
                                                  let t = (0, N.tD)(B, L.currency, null == X ? void 0 : X.id);
                                                  null != X && X.id === L.paymentSourceId && t
                                                      ? (s.O5(L, Y, P.Sbl.UNCANCEL_WINBACK_MODAL), w(!0))
                                                      : (j.onClose(),
                                                        (0, f.Z)({
                                                            initialPlanId: B,
                                                            analyticsLocations: Y,
                                                            analyticsLocation: P.Sbl.UNCANCEL_WINBACK_MODAL
                                                        }));
                                              }
                                          },
                                          children: v.intl.string(v.t['2+luBg'])
                                      }),
                                      (0, o.jsx)(a.zxk, {
                                          look: a.zxk.Looks.LINK,
                                          color: (0, l.wj)(F) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
                                          onClick: j.onClose,
                                          children: v.intl.string(v.t.XDpS4O)
                                      })
                                  ]
                              })
                          ]
                      }),
                      onClose: j.onClose
                  })
        })
    );
};
