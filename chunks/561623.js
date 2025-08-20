n.d(t, { default: () => E }), n(388685), n(415506);
var r = n(951288),
    o = n(647438),
    i = n(442837),
    l = n(780384),
    a = n(755721),
    c = n(481060),
    u = n(366939),
    s = n(911969),
    d = n(410030),
    p = n(100527),
    f = n(906732),
    m = n(583046),
    y = n(963249),
    b = n(853872),
    _ = n(509545),
    O = n(626135),
    C = n(74538),
    P = n(937615),
    I = n(212895),
    g = n(296848),
    v = n(374649),
    x = n(807163),
    j = n(798769),
    S = n(317269),
    w = n(474936),
    h = n(981631),
    N = n(388032),
    L = n(953333);
let E = (e) => {
    var t,
        n,
        E,
        A,
        Z,
        k,
        { daysLeft: T, premiumType: M, premiumSubscription: D, analyticsSource: R } = e,
        U = (function (e, t) {
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
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["daysLeft", "premiumType", "premiumSubscription", "analyticsSource"]);
    let B = (0, d.ZP)(),
        [z, W] = o.useState(!1),
        { analyticsLocations: G } = (0, f.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL),
        K = (0, i.e7)(
            [b.Z],
            () => ((null == D ? void 0 : D.paymentSourceId) != null ? b.Z.getPaymentSource(D.paymentSourceId) : null),
            [D],
        ),
        Y = D.items[0].planId,
        F = (0, C.Wz)(w.GP[Y].skuId),
        { priceOptions: V } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [F],
            paymentSourceId: null == D ? void 0 : D.paymentSourceId,
            isGift: !1,
        }),
        [X] = (0, v.ED)({
            subscriptionId: D.id,
            items: [
                {
                    planId: Y,
                    quantity: 1,
                },
            ],
            renewal: !0,
            paymentSourceId: null == D ? void 0 : D.paymentSourceId,
            currency: V.currency,
            analyticsLocations: (0, f.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: p.Z.PREMIUM_UNCANCEL_MODAL,
        }),
        H = (0, i.e7)([_.Z], () => (0, g.oE)(Y), [Y]),
        q = (0, i.e7)([_.Z], () => _.Z.isFetchingForSKU(F)),
        J =
            null == X ||
            null == (k = X.invoiceItems) ||
            null == (Z = k.find((e) => e.subscriptionPlanId === Y)) ||
            null == (A = Z.discounts) ||
            null == (E = A.find((e) => e.type === s.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : E.amount,
        $ = null != H ? (0, C.aS)(H.id, !1, !1, V) : null,
        Q = null != $ && null != J ? (0, P.T4)($.amount - (null != J ? J : 0), $.currency) : null,
        { intervalType: ee, intervalCount: et } = C.ZP.getInterval(Y),
        en = M === w.p9.TIER_1,
        er = null != $ ? (0, P.T4)($.amount, $.currency) : null;
    return (
        o.useEffect(() => {
            O.default.track(h.rMx.OPEN_MODAL, {
                type: "Premium Uncancel Winback",
                source: R,
            });
        }, [R]),
        (0, r.jsx)(
            c.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, U)),
            (n = n =
                {
                    className: L.modal,
                    parentComponent: "UncancelModalWhatYouLose",
                    children: z
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(j.Z, {
                                      premiumType: M,
                                      onClose: U.onClose,
                                  }),
                                  (0, r.jsx)(S.ZP, {
                                      planId: Y,
                                      onClose: U.onClose,
                                      paymentSourceType: null == K ? void 0 : K.type,
                                  }),
                              ],
                          })
                        : (0, r.jsx)(x.Z, {
                              premiumType: M,
                              titleText: en
                                  ? N.intl.formatToPlainString(N.t.Sngnzs, { daysLeft: T })
                                  : N.intl.formatToPlainString(N.t.tdvIlZ, { daysLeft: T }),
                              subtitleText: en ? N.intl.format(N.t["6Su2XV"], {}) : N.intl.format(N.t["lE+P8f"], {}),
                              footer: (0, r.jsxs)("div", {
                                  children: [
                                      null !== er
                                          ? (0, r.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                children: (function (e) {
                                                    switch (ee) {
                                                        case w.rV.YEAR:
                                                            return en
                                                                ? N.intl.format(N.t.O7JRzc, { price: e })
                                                                : N.intl.format(N.t["0y5kAA"], { price: e });
                                                        case w.rV.MONTH:
                                                            if (null != Q)
                                                                return N.intl.format(N.t["1/ucvr"], {
                                                                    discountPrice: Q,
                                                                    defaultPrice: e,
                                                                });
                                                            if (en) return N.intl.format(N.t.rbwRlZ, { price: e });
                                                            if (1 === et)
                                                                return N.intl.format(N.t.C9oRCw, { price: e });
                                                            return N.intl.format(N.t.TmmTgo, {
                                                                price: e,
                                                                intervalCount: et,
                                                            });
                                                        default:
                                                            throw Error("Unknown interval type ".concat(ee));
                                                    }
                                                })(er),
                                            })
                                          : (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
                                      (0, r.jsxs)("div", {
                                          className: L.footer,
                                          children: [
                                              (0, r.jsx)(c.zxk, {
                                                  variant: "primary",
                                                  text: N.intl.string(N.t["2+luBg"]),
                                                  disabled: q,
                                                  onClick: () => {
                                                      if (null != D) {
                                                          let e = (0, I.tD)(Y, D.currency, null == K ? void 0 : K.id);
                                                          null != K && K.id === D.paymentSourceId && e
                                                              ? (u.O5(D, G, h.Sbl.UNCANCEL_WINBACK_MODAL), W(!0))
                                                              : (U.onClose(),
                                                                (0, y.Z)({
                                                                    initialPlanId: Y,
                                                                    analyticsLocations: G,
                                                                    analyticsLocation: h.Sbl.UNCANCEL_WINBACK_MODAL,
                                                                }));
                                                      }
                                                  },
                                              }),
                                              (0, r.jsx)(a.zx, {
                                                  "data-migration-pending": !0,
                                                  look: a.zx.Looks.LINK,
                                                  color: (0, l.wj)(B) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
                                                  onClick: U.onClose,
                                                  children: N.intl.string(N.t.XDpS4O),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              onClose: U.onClose,
                          }),
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
            t),
        )
    );
};
