n.d(t, { default: () => k }), n(388685), n(415506);
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
    m = n(563132),
    y = n(583046),
    b = n(963249),
    _ = n(853872),
    O = n(509545),
    C = n(626135),
    P = n(74538),
    I = n(937615),
    v = n(212895),
    g = n(296848),
    x = n(374649),
    S = n(807163),
    j = n(798769),
    w = n(317269),
    h = n(474936),
    N = n(981631),
    L = n(388032),
    E = n(953333);
let k = (e) => {
    var t,
        n,
        k,
        A,
        Z,
        T,
        { daysLeft: M, premiumType: D, premiumSubscription: R, analyticsSource: U } = e,
        B = (function (e, t) {
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
    let z = (0, d.ZP)(),
        [W, G] = o.useState(!1),
        { analyticsLocations: K } = (0, f.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL),
        Y = (0, i.e7)(
            [_.Z],
            () => ((null == R ? void 0 : R.paymentSourceId) != null ? _.Z.getPaymentSource(R.paymentSourceId) : null),
            [R],
        ),
        V = R.items[0].planId,
        X = (0, P.Wz)(h.GP[V].skuId),
        { priceOptions: F } = (0, y.Z)({
            activeSubscription: null,
            skuIDs: [X],
            paymentSourceId: null == R ? void 0 : R.paymentSourceId,
            isGift: !1,
        }),
        [H] = (0, x.ED)({
            subscriptionId: R.id,
            items: [
                {
                    planId: V,
                    quantity: 1,
                },
            ],
            renewal: !0,
            paymentSourceId: null == R ? void 0 : R.paymentSourceId,
            currency: F.currency,
            analyticsLocations: (0, f.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: p.Z.PREMIUM_UNCANCEL_MODAL,
        }),
        q = (0, i.e7)([O.Z], () => (0, g.oE)(V), [V]),
        J = (0, i.e7)([O.Z], () => O.Z.isFetchingForSKU(X)),
        $ =
            null == H ||
            null == (T = H.invoiceItems) ||
            null == (Z = T.find((e) => e.subscriptionPlanId === V)) ||
            null == (A = Z.discounts) ||
            null == (k = A.find((e) => e.type === s.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : k.amount,
        Q = null != q ? (0, P.aS)(q.id, !1, !1, F) : null,
        ee = null != Q && null != $ ? (0, I.T4)(Q.amount - (null != $ ? $ : 0), Q.currency) : null,
        { intervalType: et, intervalCount: en } = P.ZP.getInterval(V),
        er = D === h.p9.TIER_1,
        eo = null != Q ? (0, I.T4)(Q.amount, Q.currency) : null;
    return (
        o.useEffect(() => {
            C.default.track(N.rMx.OPEN_MODAL, {
                type: "Premium Uncancel Winback",
                source: U,
            });
        }, [U]),
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
            })({}, B)),
            (n = n =
                {
                    className: E.modal,
                    parentComponent: "UncancelModalWhatYouLose",
                    children: W
                        ? (0, r.jsxs)(m.PaymentContextProvider, {
                              activeSubscription: R,
                              stepConfigs: [],
                              skuIDs: [],
                              children: [
                                  (0, r.jsx)(j.Z, {
                                      premiumType: D,
                                      onClose: B.onClose,
                                  }),
                                  (0, r.jsx)(w.ZP, {
                                      planId: V,
                                      onClose: B.onClose,
                                      paymentSourceType: null == Y ? void 0 : Y.type,
                                  }),
                              ],
                          })
                        : (0, r.jsx)(S.Z, {
                              premiumType: D,
                              titleText: er
                                  ? L.intl.formatToPlainString(L.t.Sngnzs, { daysLeft: M })
                                  : L.intl.formatToPlainString(L.t.tdvIlZ, { daysLeft: M }),
                              subtitleText: er ? L.intl.format(L.t["6Su2XV"], {}) : L.intl.format(L.t["lE+P8f"], {}),
                              footer: (0, r.jsxs)("div", {
                                  children: [
                                      null !== eo
                                          ? (0, r.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                children: (function (e) {
                                                    switch (et) {
                                                        case h.rV.YEAR:
                                                            return er
                                                                ? L.intl.format(L.t.O7JRzc, { price: e })
                                                                : L.intl.format(L.t["0y5kAA"], { price: e });
                                                        case h.rV.MONTH:
                                                            if (null != ee)
                                                                return L.intl.format(L.t["1/ucvr"], {
                                                                    discountPrice: ee,
                                                                    defaultPrice: e,
                                                                });
                                                            if (er) return L.intl.format(L.t.rbwRlZ, { price: e });
                                                            if (1 === en)
                                                                return L.intl.format(L.t.C9oRCw, { price: e });
                                                            return L.intl.format(L.t.TmmTgo, {
                                                                price: e,
                                                                intervalCount: en,
                                                            });
                                                        default:
                                                            throw Error("Unknown interval type ".concat(et));
                                                    }
                                                })(eo),
                                            })
                                          : (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
                                      (0, r.jsxs)("div", {
                                          className: E.footer,
                                          children: [
                                              (0, r.jsx)(c.zxk, {
                                                  variant: "primary",
                                                  text: L.intl.string(L.t["2+luBg"]),
                                                  disabled: J,
                                                  onClick: async () => {
                                                      if (null != R) {
                                                          let e = (0, v.tD)(V, R.currency, null == Y ? void 0 : Y.id);
                                                          null != Y && Y.id === R.paymentSourceId && e
                                                              ? (await u.O5(
                                                                    R,
                                                                    K,
                                                                    R.currency,
                                                                    Y,
                                                                    N.Sbl.UNCANCEL_WINBACK_MODAL,
                                                                ),
                                                                G(!0))
                                                              : (B.onClose(),
                                                                (0, b.Z)({
                                                                    initialPlanId: V,
                                                                    analyticsLocations: K,
                                                                    analyticsLocation: N.Sbl.UNCANCEL_WINBACK_MODAL,
                                                                }));
                                                      }
                                                  },
                                              }),
                                              (0, r.jsx)(a.zx, {
                                                  "data-migration-pending": !0,
                                                  look: a.zx.Looks.LINK,
                                                  color: (0, l.wj)(z) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
                                                  onClick: B.onClose,
                                                  children: L.intl.string(L.t.XDpS4O),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              onClose: B.onClose,
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
