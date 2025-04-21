n.d(t, { default: () => R }), n(388685), n(415506);
var r = n(200651),
    o = n(192379),
    i = n(442837),
    l = n(780384),
    a = n(481060),
    s = n(366939),
    c = n(911969),
    u = n(410030),
    d = n(100527),
    _ = n(906732),
    m = n(583046),
    f = n(963249),
    p = n(853872),
    h = n(509545),
    I = n(626135),
    C = n(74538),
    b = n(937615),
    T = n(212895),
    g = n(296848),
    N = n(374649),
    y = n(807163),
    x = n(798769),
    E = n(317269),
    P = n(474936),
    O = n(981631),
    M = n(388032),
    j = n(349641);
let R = (e) => {
    var t,
        n,
        R,
        S,
        k,
        L,
        { daysLeft: U, premiumType: A, premiumSubscription: v, analyticsSource: Z } = e,
        w = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['daysLeft', 'premiumType', 'premiumSubscription', 'analyticsSource']);
    let F = (0, u.ZP)(),
        [X, Y] = o.useState(!1),
        { analyticsLocations: B } = (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
        D = (0, i.e7)([p.Z], () => ((null == v ? void 0 : v.paymentSourceId) != null ? p.Z.getPaymentSource(v.paymentSourceId) : null), [v]),
        H = v.items[0].planId,
        z = (0, C.Wz)(P.GP[H].skuId),
        { priceOptions: G } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [z],
            paymentSourceId: null == v ? void 0 : v.paymentSourceId,
            isGift: !1
        }),
        [W] = (0, N.ED)({
            subscriptionId: v.id,
            items: [
                {
                    planId: H,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == v ? void 0 : v.paymentSourceId,
            currency: G.currency,
            analyticsLocations: (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
        }),
        K = (0, i.e7)([h.Z], () => (0, g.oE)(H), [H]),
        Q = (0, i.e7)([h.Z], () => h.Z.isFetchingForSKU(z)),
        V = null == W || null == (L = W.invoiceItems) || null == (k = L.find((e) => e.subscriptionPlanId === H)) || null == (S = k.discounts) || null == (R = S.find((e) => e.type === c.eW.SUBSCRIPTION_PLAN)) ? void 0 : R.amount,
        q = null != K ? (0, C.aS)(K.id, !1, !1, G) : null,
        J = null != q && null != V ? (0, b.T4)(q.amount - (null != V ? V : 0), q.currency) : null,
        { intervalType: $, intervalCount: ee } = C.ZP.getInterval(H),
        et = A === P.p9.TIER_1,
        en = null != q ? (0, b.T4)(q.amount, q.currency) : null;
    return (
        o.useEffect(() => {
            I.default.track(O.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: Z
            });
        }, [Z]),
        (0, r.jsx)(
            a.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, w)),
            (n = n =
                {
                    className: j.modal,
                    children: X
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(x.Z, {
                                      premiumType: A,
                                      onClose: w.onClose
                                  }),
                                  (0, r.jsx)(E.ZP, {
                                      planId: H,
                                      onClose: w.onClose,
                                      paymentSourceType: null == D ? void 0 : D.type
                                  })
                              ]
                          })
                        : (0, r.jsx)(y.Z, {
                              premiumType: A,
                              titleText: et ? M.intl.formatToPlainString(M.t.Sngnzs, { daysLeft: U }) : M.intl.formatToPlainString(M.t.tdvIlZ, { daysLeft: U }),
                              subtitleText: et ? M.intl.format(M.t['6Su2XV'], {}) : M.intl.format(M.t['lE+P8f'], {}),
                              footer: (0, r.jsxs)('div', {
                                  children: [
                                      null !== en
                                          ? (0, r.jsx)(a.Text, {
                                                variant: 'text-sm/normal',
                                                children: (function (e) {
                                                    switch ($) {
                                                        case P.rV.YEAR:
                                                            return et ? M.intl.format(M.t.O7JRzc, { price: e }) : M.intl.format(M.t['0y5kAA'], { price: e });
                                                        case P.rV.MONTH:
                                                            if (null != J)
                                                                return M.intl.format(M.t['1/ucvr'], {
                                                                    discountPrice: J,
                                                                    defaultPrice: e
                                                                });
                                                            if (et) return M.intl.format(M.t.rbwRlZ, { price: e });
                                                            if (1 === ee) return M.intl.format(M.t.C9oRCw, { price: e });
                                                            return M.intl.format(M.t.TmmTgo, {
                                                                price: e,
                                                                intervalCount: ee
                                                            });
                                                        default:
                                                            throw Error('Unknown interval type '.concat($));
                                                    }
                                                })(en)
                                            })
                                          : (0, r.jsx)(a.$jN, { type: a.RAz.SPINNING_CIRCLE }),
                                      (0, r.jsxs)('div', {
                                          className: j.footer,
                                          children: [
                                              (0, r.jsx)(a.zxk, {
                                                  disabled: Q,
                                                  onClick: () => {
                                                      if (null != v) {
                                                          let e = (0, T.tD)(H, v.currency, null == D ? void 0 : D.id);
                                                          null != D && D.id === v.paymentSourceId && e
                                                              ? (s.O5(v, B, O.Sbl.UNCANCEL_WINBACK_MODAL), Y(!0))
                                                              : (w.onClose(),
                                                                (0, f.Z)({
                                                                    initialPlanId: H,
                                                                    analyticsLocations: B,
                                                                    analyticsLocation: O.Sbl.UNCANCEL_WINBACK_MODAL
                                                                }));
                                                      }
                                                  },
                                                  children: M.intl.string(M.t['2+luBg'])
                                              }),
                                              (0, r.jsx)(a.zxk, {
                                                  look: a.zxk.Looks.LINK,
                                                  color: (0, l.wj)(F) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
                                                  onClick: w.onClose,
                                                  children: M.intl.string(M.t.XDpS4O)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              onClose: w.onClose
                          })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    );
};
