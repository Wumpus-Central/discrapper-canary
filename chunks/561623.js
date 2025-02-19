r.d(t, { default: () => M }), r(47120), r(411104);
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
    C = r(626135),
    h = r(74538),
    I = r(937615),
    b = r(212895),
    g = r(296848),
    y = r(374649),
    T = r(807163),
    x = r(798769),
    P = r(317269),
    E = r(474936),
    O = r(981631),
    v = r(388032),
    W = r(15353);
let M = (e) => {
    var t,
        r,
        M,
        S,
        j,
        k,
        { daysLeft: R, premiumType: U, premiumSubscription: A, analyticsSource: L } = e,
        w = (function (e, t) {
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
    let Z = (0, u.ZP)(),
        [F, Y] = o.useState(!1),
        { analyticsLocations: X } = (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
        D = (0, i.e7)([p.Z], () => ((null == A ? void 0 : A.paymentSourceId) != null ? p.Z.getPaymentSource(A.paymentSourceId) : null), [A]),
        B = A.items[0].planId,
        H = (0, h.Wz)(E.GP[B].skuId),
        { priceOptions: z } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [H],
            paymentSourceId: null == A ? void 0 : A.paymentSourceId,
            isGift: !1
        }),
        [G] = (0, y.ED)({
            subscriptionId: A.id,
            items: [
                {
                    planId: B,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == A ? void 0 : A.paymentSourceId,
            currency: z.currency,
            analyticsLocations: (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
        }),
        K = (0, i.e7)([N.Z], () => (0, g.oE)(B), [B]),
        Q = (0, i.e7)([N.Z], () => N.Z.isFetchingForSKU(H)),
        V = null == G ? void 0 : null === (k = G.invoiceItems) || void 0 === k ? void 0 : null === (j = k.find((e) => e.subscriptionPlanId === B)) || void 0 === j ? void 0 : null === (S = j.discounts) || void 0 === S ? void 0 : null === (M = S.find((e) => e.type === c.eW.SUBSCRIPTION_PLAN)) || void 0 === M ? void 0 : M.amount,
        q = null != K ? (0, h.aS)(K.id, !1, !1, z) : null,
        J = null != q && null != V ? (0, I.T4)(q.amount - (null != V ? V : 0), q.currency) : null,
        { intervalType: $, intervalCount: ee } = h.ZP.getInterval(B),
        et = U === E.p9.TIER_1,
        er = null != q ? (0, I.T4)(q.amount, q.currency) : null;
    return (
        o.useEffect(() => {
            C.default.track(O.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: L
            });
        }, [L]),
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
            })({}, w)),
            (r = r =
                {
                    className: W.modal,
                    children: F
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.Z, {
                                      premiumType: U,
                                      onClose: w.onClose
                                  }),
                                  (0, n.jsx)(P.ZP, {
                                      planId: B,
                                      onClose: w.onClose,
                                      paymentSourceType: null == D ? void 0 : D.type
                                  })
                              ]
                          })
                        : (0, n.jsx)(T.Z, {
                              premiumType: U,
                              titleText: et ? v.NW.formatToPlainString(v.t.Sngnzs, { daysLeft: R }) : v.NW.formatToPlainString(v.t.tdvIlZ, { daysLeft: R }),
                              subtitleText: et ? v.NW.format(v.t['6Su2XV'], {}) : v.NW.format(v.t['lE+P8f'], {}),
                              footer: (0, n.jsxs)('div', {
                                  children: [
                                      null !== er
                                          ? (0, n.jsx)(a.Text, {
                                                variant: 'text-sm/normal',
                                                children: (function (e) {
                                                    switch ($) {
                                                        case E.rV.YEAR:
                                                            return et ? v.NW.format(v.t.O7JRzc, { price: e }) : v.NW.format(v.t['0y5kAA'], { price: e });
                                                        case E.rV.MONTH:
                                                            if (null != J)
                                                                return v.NW.format(v.t['1/ucvr'], {
                                                                    discountPrice: J,
                                                                    defaultPrice: e
                                                                });
                                                            if (et) return v.NW.format(v.t.rbwRlZ, { price: e });
                                                            if (1 === ee) return v.NW.format(v.t.C9oRCw, { price: e });
                                                            return v.NW.format(v.t.TmmTgo, {
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
                                                      if (null != A) {
                                                          let e = (0, b.tD)(B, A.currency, null == D ? void 0 : D.id);
                                                          null != D && D.id === A.paymentSourceId && e
                                                              ? (s.O5(A, X, O.Sbl.UNCANCEL_WINBACK_MODAL), Y(!0))
                                                              : (w.onClose(),
                                                                (0, f.Z)({
                                                                    initialPlanId: B,
                                                                    analyticsLocations: X,
                                                                    analyticsLocation: O.Sbl.UNCANCEL_WINBACK_MODAL
                                                                }));
                                                      }
                                                  },
                                                  children: v.NW.string(v.t['2+luBg'])
                                              }),
                                              (0, n.jsx)(a.zxk, {
                                                  look: a.zxk.Looks.LINK,
                                                  color: (0, l.wj)(Z) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
                                                  onClick: w.onClose,
                                                  children: v.NW.string(v.t.XDpS4O)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              onClose: w.onClose
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
