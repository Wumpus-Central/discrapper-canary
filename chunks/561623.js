r.d(t, { default: () => j }), r(388685), r(415506);
var n = r(200651),
    o = r(192379),
    i = r(442837),
    l = r(780384),
    a = r(481060),
    s = r(366939),
    c = r(911969),
    u = r(410030),
    d = r(100527),
    _ = r(906732),
    m = r(583046),
    f = r(963249),
    p = r(853872),
    N = r(509545),
    h = r(626135),
    I = r(74538),
    C = r(937615),
    b = r(212895),
    T = r(296848),
    g = r(374649),
    y = r(807163),
    x = r(798769),
    E = r(317269),
    P = r(474936),
    O = r(981631),
    M = r(388032),
    W = r(349641);
let j = (e) => {
    var t,
        r,
        j,
        S,
        R,
        k,
        { daysLeft: A, premiumType: L, premiumSubscription: U, analyticsSource: v } = e,
        Z = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['daysLeft', 'premiumType', 'premiumSubscription', 'analyticsSource']);
    let w = (0, u.ZP)(),
        [F, X] = o.useState(!1),
        { analyticsLocations: Y } = (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
        B = (0, i.e7)([p.Z], () => ((null == U ? void 0 : U.paymentSourceId) != null ? p.Z.getPaymentSource(U.paymentSourceId) : null), [U]),
        D = U.items[0].planId,
        z = (0, I.Wz)(P.GP[D].skuId),
        { priceOptions: H } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [z],
            paymentSourceId: null == U ? void 0 : U.paymentSourceId,
            isGift: !1
        }),
        [G] = (0, g.ED)({
            subscriptionId: U.id,
            items: [
                {
                    planId: D,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == U ? void 0 : U.paymentSourceId,
            currency: H.currency,
            analyticsLocations: (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
        }),
        K = (0, i.e7)([N.Z], () => (0, T.oE)(D), [D]),
        Q = (0, i.e7)([N.Z], () => N.Z.isFetchingForSKU(z)),
        V = null == G || null == (k = G.invoiceItems) || null == (R = k.find((e) => e.subscriptionPlanId === D)) || null == (S = R.discounts) || null == (j = S.find((e) => e.type === c.eW.SUBSCRIPTION_PLAN)) ? void 0 : j.amount,
        q = null != K ? (0, I.aS)(K.id, !1, !1, H) : null,
        J = null != q && null != V ? (0, C.T4)(q.amount - (null != V ? V : 0), q.currency) : null,
        { intervalType: $, intervalCount: ee } = I.ZP.getInterval(D),
        et = L === P.p9.TIER_1,
        er = null != q ? (0, C.T4)(q.amount, q.currency) : null;
    return (
        o.useEffect(() => {
            h.default.track(O.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: v
            });
        }, [v]),
        (0, n.jsx)(
            a.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, Z)),
            (r = r =
                {
                    className: W.modal,
                    children: F
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.Z, {
                                      premiumType: L,
                                      onClose: Z.onClose
                                  }),
                                  (0, n.jsx)(E.ZP, {
                                      planId: D,
                                      onClose: Z.onClose,
                                      paymentSourceType: null == B ? void 0 : B.type
                                  })
                              ]
                          })
                        : (0, n.jsx)(y.Z, {
                              premiumType: L,
                              titleText: et ? M.NW.formatToPlainString(M.t.Sngnzs, { daysLeft: A }) : M.NW.formatToPlainString(M.t.tdvIlZ, { daysLeft: A }),
                              subtitleText: et ? M.NW.format(M.t['6Su2XV'], {}) : M.NW.format(M.t['lE+P8f'], {}),
                              footer: (0, n.jsxs)('div', {
                                  children: [
                                      null !== er
                                          ? (0, n.jsx)(a.Text, {
                                                variant: 'text-sm/normal',
                                                children: (function (e) {
                                                    switch ($) {
                                                        case P.rV.YEAR:
                                                            return et ? M.NW.format(M.t.O7JRzc, { price: e }) : M.NW.format(M.t['0y5kAA'], { price: e });
                                                        case P.rV.MONTH:
                                                            if (null != J)
                                                                return M.NW.format(M.t['1/ucvr'], {
                                                                    discountPrice: J,
                                                                    defaultPrice: e
                                                                });
                                                            if (et) return M.NW.format(M.t.rbwRlZ, { price: e });
                                                            if (1 === ee) return M.NW.format(M.t.C9oRCw, { price: e });
                                                            return M.NW.format(M.t.TmmTgo, {
                                                                price: e,
                                                                intervalCount: ee
                                                            });
                                                        default:
                                                            throw Error('Unknown interval type '.concat($));
                                                    }
                                                })(er)
                                            })
                                          : (0, n.jsx)(a.$jN, { type: a.RAz.SPINNING_CIRCLE }),
                                      (0, n.jsxs)('div', {
                                          className: W.footer,
                                          children: [
                                              (0, n.jsx)(a.zxk, {
                                                  disabled: Q,
                                                  onClick: () => {
                                                      if (null != U) {
                                                          let e = (0, b.tD)(D, U.currency, null == B ? void 0 : B.id);
                                                          null != B && B.id === U.paymentSourceId && e
                                                              ? (s.O5(U, Y, O.Sbl.UNCANCEL_WINBACK_MODAL), X(!0))
                                                              : (Z.onClose(),
                                                                (0, f.Z)({
                                                                    initialPlanId: D,
                                                                    analyticsLocations: Y,
                                                                    analyticsLocation: O.Sbl.UNCANCEL_WINBACK_MODAL
                                                                }));
                                                      }
                                                  },
                                                  children: M.NW.string(M.t['2+luBg'])
                                              }),
                                              (0, n.jsx)(a.zxk, {
                                                  look: a.zxk.Looks.LINK,
                                                  color: (0, l.wj)(w) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
                                                  onClick: Z.onClose,
                                                  children: M.NW.string(M.t.XDpS4O)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              onClose: Z.onClose
                          })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t)
        )
    );
};
