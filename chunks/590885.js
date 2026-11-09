n.d(t, { A: () => k });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(855986),
    d = n(192308),
    c = n(821609),
    g = n(28863),
    m = n(289873),
    A = n(331322),
    E = n(683071),
    h = n(391048),
    S = n(158032),
    T = n(362111),
    f = n(506426),
    p = n(637141),
    x = n(688810),
    I = n(781300),
    _ = n(351906),
    b = n(97352),
    N = n(722178),
    C = n(83617),
    y = n(615396),
    v = n(543767),
    j = n(160946),
    O = n(295405),
    R = n(793574),
    D = n(166532),
    L = n(778705);
function P(e) {
    let { dropdownProps: t, subscription: n, openInvoice: l } = e,
        { analyticsLocations: s } = (0, x.Ay)(R.A.SUBSCRIPTION_DETAILS);
    return null == l
        ? (0, i.jsx)(p.Ay, { ...t, disabled: !0 })
        : (0, i.jsx)(p.Ay, {
              ...t,
              onChange: (e) => {
                  null != e &&
                      (0, L.A)({
                          initialPlanId: n.planIdFromItems,
                          openInvoiceId: l.id,
                          analyticsLocations: s,
                          initialPaymentSourceId: e.id,
                      });
              },
              onPaymentSourceAdd: () => {
                  (0, L.A)({
                      initialPlanId: n.planIdFromItems,
                      openInvoiceId: l.id,
                      analyticsLocations: s,
                      startingStepOverride: D.pn.ADD_PAYMENT_STEPS,
                  });
              },
          });
}
var G = n(652215),
    M = n(792996),
    U = n(153345),
    V = n(938442);
function k(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: s,
            highlightAddPaymentMethodButton: a,
            analyticsLocation: R,
            currentInvoicePreview: D,
            disabled: L = !1,
            openInvoice: k,
            isBrandRefresh: w = !1,
            ref: F,
        } = e,
        B = (0, u.bG)([_.A], () => _.A.hidePersonalInformation),
        {
            validPaymentSources: X,
            hasFetchedPaymentSources: z,
            hasFetchedSubscriptionPlans: H,
            hasFetchError: Y,
        } = (function (e, t) {
            let [n, i, s] = (0, u.yK)([O.A], () => [
                    O.A.paymentSources,
                    O.A.hasFetchedPaymentSources,
                    O.A.paymentSourceFetchError,
                ]),
                r = (0, j.Y)((0, y.MP)(e)),
                a = l.useMemo(() => {
                    let e = t.checkoutContext;
                    if (null == e) return Object.values(n).filter((e) => !e.invalid);
                    let i = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
                    return Object.values(n).filter((e) => !e.invalid && i.has(e.id));
                }, [n, t.checkoutContext]),
                o = (!i && !s) || !r;
            return {
                isLoading: o,
                hasFetchError: s,
                validPaymentSources: a,
                hasFetchedPaymentSources: i,
                hasFetchedSubscriptionPlans: r,
                canManagePayment: !o && !(s && 0 === a.length),
            };
        })(t, D),
        { analyticsLocations: W } = (0, x.Ay)(),
        [K, Z] = l.useState(!1),
        [q, Q] = l.useState(t.currency);
    async function $(e, n, i) {
        if (null == t) throw Error("missing subscription and paymentSource");
        (null == e ? await S.r6(t, n, i, W, R) : await S.uK(t, e, i, W, R), Z(!1), Q(n));
    }
    async function J(e, l, s) {
        Z(!0);
        let r = await (0, v.OQ)({
                subscriptionId: t.id,
                paymentSourceId: e?.id,
                renewal: !0,
                currency: null != e ? void 0 : l,
                analyticsLocations: W,
                analyticsLocation: R,
            }),
            a = { amount: r.subtotal, currency: r.currency };
        D.currency !== r.currency || (D.currency === r.currency && D.total !== r.total)
            ? await (async function (e, t, l) {
                  let s = await (0, d.mM)(
                      async () => {
                          let { default: s } = await n.e(771678).then(n.bind(n, 760941));
                          return (n) => (0, i.jsx)(s, { newInvoice: e, onConfirm: t, onCancel: l, modalProps: n });
                      },
                      {
                          onCloseRequest: () => {
                              (null != s && (0, d.Oo)(s), l());
                          },
                      },
                  );
              })(
                  r,
                  () => {
                      s(e, r.currency, a);
                  },
                  () => {
                      Z(!1);
                  },
              )
            : s(e, r.currency, a);
    }
    function ee(e) {
        ((0, C.c_)(e.id, (0, y.MP)(t)).then(() => {
            J(e, void 0, $);
        }),
            "function" == typeof s && s(e.id));
    }
    let et = () => {
            (0, d.mM)(
                async () => (e) => (0, i.jsx)(T.default, { ...e, onAddPaymentSource: ee, analyticsLocation: R }),
                {
                    onCloseCallback: () => {
                        (0, h.ET)();
                    },
                    onCloseRequest: G.tEg,
                },
            );
        },
        en = l.useRef(null);
    if (
        (l.useImperativeHandle(F, () => ({
            openManagePayment() {
                if (t.isPurchasedExternally) return;
                if (0 === X.length) return void et();
                let e = en.current;
                if (null == e) return;
                e.scrollIntoView({ block: "center" });
                let n = e.querySelector('[role="combobox"]');
                (n?.focus(), n?.click());
            },
        })),
        t.isPurchasedExternally)
    ) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, N.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: U.uZ,
                children: (0, i.jsx)(c.$, { variant: "secondary", text: M.intl.string(M.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if ((!z && !Y) || !H) return (0, i.jsx)(m.y, {});
    if (X.length > 0) {
        let e,
            n,
            l = b.A.get(t.planIdForCurrencies);
        o()(null != l, "Unable to fetch plan");
        let s = null != D.checkoutContext ? D.checkoutContext.allowed_currencies : null,
            a = null != s && s.length > 0 ? s : (0, C._w)(l, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? X.find((e) => e.id === t.paymentSourceId) : null,
            d = u?.type === G.hes.TDS_WALLET,
            c = (0, i.jsx)(f.A, {
                label: M.intl.string(M.t["0YjaXf"]),
                selectedCurrency: q,
                currencies: a,
                onChange: (e) => {
                    J(void 0, e, $);
                },
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    ref: en,
                    children:
                        ((n = {
                            prependOption:
                                null == (e = t.paymentSourceId)
                                    ? { label: M.intl.string(M.t.iA5vA1), value: null }
                                    : null,
                            paymentSources: X,
                            hidePersonalInformation: B,
                            selectedPaymentSourceId: e,
                            onChange: function (e) {
                                null != e && J(e, void 0, $);
                            },
                            onPaymentSourceAdd: et,
                            dropdownLoading: K,
                            disabled: L,
                            paymentGatewayRestrictions: t.eligiblePaymentGateways,
                        }),
                        t.status === G.Dmq.PAST_DUE && t.isPremium
                            ? (0, i.jsx)(P, { dropdownProps: n, subscription: t, openInvoice: k ?? null })
                            : (0, i.jsx)(p.Ay, { ...n })),
                }),
                null == t.paymentSourceId || d
                    ? null
                    : (0, i.jsx)(f.f, {
                          currencies: a,
                          children: w
                              ? (0, i.jsx)(A.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 0,
                                    className: U.Gl,
                                    children: c,
                                })
                              : (0, i.jsx)("div", { className: r()(U.Gl, V.Uu, V.Hu), children: c }),
                      }),
            ],
        });
    }
    if (!Y)
        return (0, i.jsx)(c.$, {
            fullWidth: !0,
            variant: a ? "primary" : "secondary",
            onClick: et,
            text: M.intl.string(M.t.CpOiEO),
        });
    return w
        ? null
        : (0, i.jsxs)(A.B, {
              direction: "vertical",
              align: "start",
              gap: 8,
              children: [
                  (0, i.jsx)(E.w, { type: "critical", message: M.intl.string(M.t["5mlOCW"]), role: "alert" }),
                  (0, i.jsx)(c.$, {
                      variant: "secondary",
                      onClick: () => (0, I.$o)(),
                      text: M.intl.string(M.t["5911Lb"]),
                  }),
              ],
          });
}
