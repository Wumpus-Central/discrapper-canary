(r.d(o, { default: () => A }), r(388685), r(415506));
var t = r(255367),
    n = r(73800),
    i = r(442837),
    l = r(780384),
    a = r(755721),
    c = r(481060),
    u = r(366939),
    s = r(911969),
    _ = r(410030),
    d = r(100527),
    p = r(906732),
    m = r(583046),
    f = r(963249),
    C = r(853872),
    b = r(509545),
    y = r(626135),
    I = r(74538),
    h = r(937615),
    O = r(212895),
    P = r(296848),
    g = r(374649),
    L = r(807163),
    S = r(798769),
    T = r(317269),
    j = r(474936),
    v = r(981631),
    x = r(388032),
    w = r(349641);
let A = (e) => {
    var o,
        r,
        A,
        F,
        N,
        E,
        { daysLeft: k, premiumType: U, premiumSubscription: Z, analyticsSource: M } = e,
        R = (function (e, o) {
            if (null == e) return {};
            var r,
                t,
                n = (function (e, o) {
                    if (null == e) return {};
                    var r,
                        t,
                        n = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) ((r = i[t]), o.indexOf(r) >= 0 || (n[r] = e[r]));
                    return n;
                })(e, o);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (t = 0; t < i.length; t++) ((r = i[t]), !(o.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
            }
            return n;
        })(e, ['daysLeft', 'premiumType', 'premiumSubscription', 'analyticsSource']);
    let B = (0, _.ZP)(),
        [z, D] = n.useState(!1),
        { analyticsLocations: Y } = (0, p.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
        G = (0, i.e7)([C.Z], () => ((null == Z ? void 0 : Z.paymentSourceId) != null ? C.Z.getPaymentSource(Z.paymentSourceId) : null), [Z]),
        W = Z.items[0].planId,
        K = (0, I.Wz)(j.GP[W].skuId),
        { priceOptions: V } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [K],
            paymentSourceId: null == Z ? void 0 : Z.paymentSourceId,
            isGift: !1
        }),
        [X] = (0, g.ED)({
            subscriptionId: Z.id,
            items: [
                {
                    planId: W,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == Z ? void 0 : Z.paymentSourceId,
            currency: V.currency,
            analyticsLocations: (0, p.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
        }),
        H = (0, i.e7)([b.Z], () => (0, P.oE)(W), [W]),
        q = (0, i.e7)([b.Z], () => b.Z.isFetchingForSKU(K)),
        J = null == X || null == (E = X.invoiceItems) || null == (N = E.find((e) => e.subscriptionPlanId === W)) || null == (F = N.discounts) || null == (A = F.find((e) => e.type === s.eW.SUBSCRIPTION_PLAN)) ? void 0 : A.amount,
        $ = null != H ? (0, I.aS)(H.id, !1, !1, V) : null,
        Q = null != $ && null != J ? (0, h.T4)($.amount - (null != J ? J : 0), $.currency) : null,
        { intervalType: ee, intervalCount: eo } = I.ZP.getInterval(W),
        er = U === j.p9.TIER_1,
        et = null != $ ? (0, h.T4)($.amount, $.currency) : null;
    return (
        n.useEffect(() => {
            y.default.track(v.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: M
            });
        }, [M]),
        (0, t.jsx)(
            c.Y0X,
            ((o = (function (e) {
                for (var o = 1; o < arguments.length; o++) {
                    var r = null != arguments[o] ? arguments[o] : {},
                        t = Object.keys(r);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        t.forEach(function (o) {
                            var t;
                            ((t = r[o]),
                                o in e
                                    ? Object.defineProperty(e, o, {
                                          value: t,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[o] = t));
                        }));
                }
                return e;
            })({}, R)),
            (r = r =
                {
                    className: w.modal,
                    parentComponent: 'UncancelModalWhatYouLose',
                    children: z
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(S.Z, {
                                      premiumType: U,
                                      onClose: R.onClose
                                  }),
                                  (0, t.jsx)(T.ZP, {
                                      planId: W,
                                      onClose: R.onClose,
                                      paymentSourceType: null == G ? void 0 : G.type
                                  })
                              ]
                          })
                        : (0, t.jsx)(L.Z, {
                              premiumType: U,
                              titleText: er ? x.intl.formatToPlainString(x.t.Sngnzs, { daysLeft: k }) : x.intl.formatToPlainString(x.t.tdvIlZ, { daysLeft: k }),
                              subtitleText: er ? x.intl.format(x.t['6Su2XV'], {}) : x.intl.format(x.t['lE+P8f'], {}),
                              footer: (0, t.jsxs)('div', {
                                  children: [
                                      null !== et
                                          ? (0, t.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                children: (function (e) {
                                                    switch (ee) {
                                                        case j.rV.YEAR:
                                                            return er ? x.intl.format(x.t.O7JRzc, { price: e }) : x.intl.format(x.t['0y5kAA'], { price: e });
                                                        case j.rV.MONTH:
                                                            if (null != Q)
                                                                return x.intl.format(x.t['1/ucvr'], {
                                                                    discountPrice: Q,
                                                                    defaultPrice: e
                                                                });
                                                            if (er) return x.intl.format(x.t.rbwRlZ, { price: e });
                                                            if (1 === eo) return x.intl.format(x.t.C9oRCw, { price: e });
                                                            return x.intl.format(x.t.TmmTgo, {
                                                                price: e,
                                                                intervalCount: eo
                                                            });
                                                        default:
                                                            throw Error('Unknown interval type '.concat(ee));
                                                    }
                                                })(et)
                                            })
                                          : (0, t.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
                                      (0, t.jsxs)('div', {
                                          className: w.footer,
                                          children: [
                                              (0, t.jsx)(c.zxk, {
                                                  variant: 'primary',
                                                  text: x.intl.string(x.t['2+luBg']),
                                                  disabled: q,
                                                  onClick: () => {
                                                      if (null != Z) {
                                                          let e = (0, O.tD)(W, Z.currency, null == G ? void 0 : G.id);
                                                          null != G && G.id === Z.paymentSourceId && e
                                                              ? (u.O5(Z, Y, v.Sbl.UNCANCEL_WINBACK_MODAL), D(!0))
                                                              : (R.onClose(),
                                                                (0, f.Z)({
                                                                    initialPlanId: W,
                                                                    analyticsLocations: Y,
                                                                    analyticsLocation: v.Sbl.UNCANCEL_WINBACK_MODAL
                                                                }));
                                                      }
                                                  }
                                              }),
                                              (0, t.jsx)(a.zx, {
                                                  look: a.zx.Looks.LINK,
                                                  color: (0, l.wj)(B) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
                                                  onClick: R.onClose,
                                                  children: x.intl.string(x.t.XDpS4O)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              onClose: R.onClose
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
