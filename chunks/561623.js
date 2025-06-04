r.d(o, { default: () => x }), r(388685), r(415506);
var t = r(255367),
    n = r(73800),
    i = r(442837),
    l = r(780384),
    a = r(481060),
    c = r(366939),
    u = r(911969),
    s = r(410030),
    _ = r(100527),
    d = r(906732),
    p = r(583046),
    f = r(963249),
    m = r(853872),
    C = r(509545),
    b = r(626135),
    y = r(74538),
    I = r(937615),
    h = r(212895),
    O = r(296848),
    P = r(374649),
    g = r(807163),
    L = r(798769),
    S = r(317269),
    T = r(474936),
    j = r(981631),
    v = r(388032),
    w = r(349641);
let x = (e) => {
    var o,
        r,
        x,
        A,
        F,
        N,
        { daysLeft: E, premiumType: k, premiumSubscription: Z, analyticsSource: U } = e,
        M = (function (e, o) {
            if (null == e) return {};
            var r,
                t,
                n = (function (e, o) {
                    if (null == e) return {};
                    var r,
                        t,
                        n = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) (r = i[t]), o.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n;
                })(e, o);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (t = 0; t < i.length; t++) (r = i[t]), !(o.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            }
            return n;
        })(e, ['daysLeft', 'premiumType', 'premiumSubscription', 'analyticsSource']);
    let B = (0, s.ZP)(),
        [z, R] = n.useState(!1),
        { analyticsLocations: D } = (0, d.ZP)(_.Z.PREMIUM_UNCANCEL_MODAL),
        Y = (0, i.e7)([m.Z], () => ((null == Z ? void 0 : Z.paymentSourceId) != null ? m.Z.getPaymentSource(Z.paymentSourceId) : null), [Z]),
        G = Z.items[0].planId,
        W = (0, y.Wz)(T.GP[G].skuId),
        { priceOptions: K } = (0, p.Z)({
            activeSubscription: null,
            skuIDs: [W],
            paymentSourceId: null == Z ? void 0 : Z.paymentSourceId,
            isGift: !1
        }),
        [V] = (0, P.ED)({
            subscriptionId: Z.id,
            items: [
                {
                    planId: G,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == Z ? void 0 : Z.paymentSourceId,
            currency: K.currency,
            analyticsLocations: (0, d.ZP)(_.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: _.Z.PREMIUM_UNCANCEL_MODAL
        }),
        X = (0, i.e7)([C.Z], () => (0, O.oE)(G), [G]),
        H = (0, i.e7)([C.Z], () => C.Z.isFetchingForSKU(W)),
        q = null == V || null == (N = V.invoiceItems) || null == (F = N.find((e) => e.subscriptionPlanId === G)) || null == (A = F.discounts) || null == (x = A.find((e) => e.type === u.eW.SUBSCRIPTION_PLAN)) ? void 0 : x.amount,
        J = null != X ? (0, y.aS)(X.id, !1, !1, K) : null,
        $ = null != J && null != q ? (0, I.T4)(J.amount - (null != q ? q : 0), J.currency) : null,
        { intervalType: Q, intervalCount: ee } = y.ZP.getInterval(G),
        eo = k === T.p9.TIER_1,
        er = null != J ? (0, I.T4)(J.amount, J.currency) : null;
    return (
        n.useEffect(() => {
            b.default.track(j.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: U
            });
        }, [U]),
        (0, t.jsx)(
            a.Y0X,
            ((o = (function (e) {
                for (var o = 1; o < arguments.length; o++) {
                    var r = null != arguments[o] ? arguments[o] : {},
                        t = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        t.forEach(function (o) {
                            var t;
                            (t = r[o]),
                                o in e
                                    ? Object.defineProperty(e, o, {
                                          value: t,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[o] = t);
                        });
                }
                return e;
            })({}, M)),
            (r = r =
                {
                    className: w.modal,
                    children: z
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(L.Z, {
                                      premiumType: k,
                                      onClose: M.onClose
                                  }),
                                  (0, t.jsx)(S.ZP, {
                                      planId: G,
                                      onClose: M.onClose,
                                      paymentSourceType: null == Y ? void 0 : Y.type
                                  })
                              ]
                          })
                        : (0, t.jsx)(g.Z, {
                              premiumType: k,
                              titleText: eo ? v.intl.formatToPlainString(v.t.Sngnzs, { daysLeft: E }) : v.intl.formatToPlainString(v.t.tdvIlZ, { daysLeft: E }),
                              subtitleText: eo ? v.intl.format(v.t['6Su2XV'], {}) : v.intl.format(v.t['lE+P8f'], {}),
                              footer: (0, t.jsxs)('div', {
                                  children: [
                                      null !== er
                                          ? (0, t.jsx)(a.Text, {
                                                variant: 'text-sm/normal',
                                                children: (function (e) {
                                                    switch (Q) {
                                                        case T.rV.YEAR:
                                                            return eo ? v.intl.format(v.t.O7JRzc, { price: e }) : v.intl.format(v.t['0y5kAA'], { price: e });
                                                        case T.rV.MONTH:
                                                            if (null != $)
                                                                return v.intl.format(v.t['1/ucvr'], {
                                                                    discountPrice: $,
                                                                    defaultPrice: e
                                                                });
                                                            if (eo) return v.intl.format(v.t.rbwRlZ, { price: e });
                                                            if (1 === ee) return v.intl.format(v.t.C9oRCw, { price: e });
                                                            return v.intl.format(v.t.TmmTgo, {
                                                                price: e,
                                                                intervalCount: ee
                                                            });
                                                        default:
                                                            throw Error('Unknown interval type '.concat(Q));
                                                    }
                                                })(er)
                                            })
                                          : (0, t.jsx)(a.$jN, { type: a.RAz.SPINNING_CIRCLE }),
                                      (0, t.jsxs)('div', {
                                          className: w.footer,
                                          children: [
                                              (0, t.jsx)(a.zxk, {
                                                  disabled: H,
                                                  onClick: () => {
                                                      if (null != Z) {
                                                          let e = (0, h.tD)(G, Z.currency, null == Y ? void 0 : Y.id);
                                                          null != Y && Y.id === Z.paymentSourceId && e
                                                              ? (c.O5(Z, D, j.Sbl.UNCANCEL_WINBACK_MODAL), R(!0))
                                                              : (M.onClose(),
                                                                (0, f.Z)({
                                                                    initialPlanId: G,
                                                                    analyticsLocations: D,
                                                                    analyticsLocation: j.Sbl.UNCANCEL_WINBACK_MODAL
                                                                }));
                                                      }
                                                  },
                                                  children: v.intl.string(v.t['2+luBg'])
                                              }),
                                              (0, t.jsx)(a.zxk, {
                                                  look: a.zxk.Looks.LINK,
                                                  color: (0, l.wj)(B) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
                                                  onClick: M.onClose,
                                                  children: v.intl.string(v.t.XDpS4O)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              onClose: M.onClose
                          })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
                : (function (e, o) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var t = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, t);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            o)
        )
    );
};
