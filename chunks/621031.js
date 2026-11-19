n.d(t, { A: () => k });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(855986),
    c = n(192308),
    d = n(821609),
    m = n(28863),
    g = n(289873),
    A = n(834730),
    E = n(331322),
    h = n(683071),
    f = n(391048),
    p = n(158032),
    S = n(362111),
    T = n(506426),
    x = n(637141),
    I = n(136857),
    _ = n(688810),
    b = n(669815),
    C = n(351906),
    y = n(97352),
    N = n(448645),
    v = n(83617),
    j = n(615396),
    O = n(543767),
    D = n(198317),
    P = n(793574),
    R = n(166532),
    L = n(778705);
function G(e) {
    let { dropdownProps: t, subscription: n, openInvoice: l } = e,
        { analyticsLocations: s } = (0, _.Ay)(P.A.SUBSCRIPTION_DETAILS);
    return null == l
        ? (0, i.jsx)(x.Ay, { ...t, disabled: !0 })
        : (0, i.jsx)(x.Ay, {
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
                      startingStepOverride: R.pn.ADD_PAYMENT_STEPS,
                  });
              },
          });
}
var M = n(652215),
    U = n(792996),
    V = n(153345),
    w = n(938442);
function k(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: s,
            highlightAddPaymentMethodButton: a,
            analyticsLocation: P,
            currentInvoicePreview: R,
            disabled: L = !1,
            openInvoice: k,
            isBrandRefresh: F = !1,
            ref: B,
        } = e,
        H = (0, u.bG)([C.A], () => C.A.hidePersonalInformation),
        {
            validPaymentSources: X,
            hasFetchedPaymentSources: z,
            hasFetchedSubscriptionPlans: Y,
            hasFetchError: W,
        } = (0, D.A)(t, R),
        { analyticsLocations: K } = (0, _.Ay)(),
        [Z, q] = l.useState(!1),
        [Q, $] = l.useState(null),
        [J, ee] = l.useState(t.currency);
    async function et(e, n, i) {
        (q(!0), $(null));
        try {
            (null == e ? await p.r6(t, n, i, K, P) : await p.uK(t, e, i, K, P), ee(n));
        } catch (e) {
            $(e instanceof I.Ay ? e : new I.Ay(e));
        } finally {
            q(!1);
        }
    }
    async function en(e, l, s) {
        (q(!0), $(null));
        try {
            var r, a;
            let o = await (0, O.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: null != e ? void 0 : l,
                    analyticsLocations: K,
                    analyticsLocation: P,
                }),
                u = { amount: o.subtotal, currency: o.currency };
            R.currency !== o.currency || R.total !== o.total
                ? await ((r = o),
                  (a = () => s(e, o.currency, u)),
                  new Promise((e, t) => {
                      let l = !1;
                      function s() {
                          l || e();
                      }
                      !(async function () {
                          try {
                              await (0, c.mM)(
                                  async () => {
                                      let { default: o } = await n.e(771678).then(n.bind(n, 760941));
                                      return (n) =>
                                          (0, i.jsx)(o, {
                                              newInvoice: r,
                                              onConfirm: async () => {
                                                  l = !0;
                                                  try {
                                                      (await a(), e());
                                                  } catch (e) {
                                                      t(e);
                                                  }
                                              },
                                              onCancel: s,
                                              modalProps: n,
                                          });
                                  },
                                  { onCloseCallback: s },
                              );
                          } catch (e) {
                              t(e);
                          }
                      })();
                  }))
                : await s(e, o.currency, u);
        } catch (e) {
            $(e instanceof I.Ay ? e : new I.Ay(e));
        } finally {
            q(!1);
        }
    }
    async function ei(e) {
        (q(!0), $(null));
        let n = (0, v.c_)(e.id, (0, j.MP)(t));
        s?.(e.id);
        try {
            (await n, await en(e, void 0, et));
        } catch (e) {
            ($(e instanceof I.Ay ? e : new I.Ay(e)), q(!1));
        }
    }
    let el = () => {
            (0, c.mM)(
                async () => (e) => (0, i.jsx)(S.default, { ...e, onAddPaymentSource: ei, analyticsLocation: P }),
                {
                    onCloseCallback: () => {
                        (0, f.ET)();
                    },
                    onCloseRequest: M.tEg,
                },
            );
        },
        es = l.useRef(null);
    if (
        (l.useImperativeHandle(B, () => ({
            openManagePayment() {
                if (t.isPurchasedExternally) return;
                if (0 === X.length) return void el();
                let e = es.current;
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
            (0, i.jsx)(m.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: V.uZ,
                children: (0, i.jsx)(d.$, { variant: "secondary", text: U.intl.string(U.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if ((!z && !W) || !Y) return (0, i.jsx)(g.y, {});
    if (X.length > 0) {
        let e,
            n,
            l = y.A.get(t.planIdForCurrencies);
        o()(null != l, "Unable to fetch plan");
        let s = null != R.checkoutContext ? R.checkoutContext.allowed_currencies : null,
            a = null != s && s.length > 0 ? s : (0, v._w)(l, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? X.find((e) => e.id === t.paymentSourceId) : null,
            c = u?.type === M.hes.TDS_WALLET,
            d = (0, i.jsx)(T.A, {
                label: U.intl.string(U.t["0YjaXf"]),
                selectedCurrency: J,
                currencies: a,
                onChange: (e) => {
                    en(void 0, e, et);
                },
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    ref: es,
                    children:
                        ((n = {
                            prependOption:
                                null == (e = t.paymentSourceId)
                                    ? { label: U.intl.string(U.t.iA5vA1), value: null }
                                    : null,
                            paymentSources: X,
                            hidePersonalInformation: H,
                            selectedPaymentSourceId: e,
                            onChange: async function (e) {
                                null != e && (await en(e, void 0, et));
                            },
                            onPaymentSourceAdd: el,
                            dropdownLoading: Z,
                            disabled: L,
                            paymentGatewayRestrictions: t.eligiblePaymentGateways,
                        }),
                        t.status === M.Dmq.PAST_DUE && t.isPremium
                            ? (0, i.jsx)(G, { dropdownProps: n, subscription: t, openInvoice: k ?? null })
                            : (0, i.jsx)(x.Ay, { ...n })),
                }),
                null != Q
                    ? (0, i.jsx)(A.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: Q.message,
                      })
                    : null,
                null == t.paymentSourceId || c
                    ? null
                    : (0, i.jsx)(T.f, {
                          currencies: a,
                          children: F
                              ? (0, i.jsx)(E.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 0,
                                    className: V.Gl,
                                    children: d,
                                })
                              : (0, i.jsx)("div", { className: r()(V.Gl, w.Uu, w.Hu), children: d }),
                      }),
            ],
        });
    }
    if (!W)
        return (0, i.jsx)(d.$, {
            fullWidth: !0,
            variant: a ? "primary" : "secondary",
            onClick: el,
            text: U.intl.string(U.t.CpOiEO),
        });
    return F
        ? null
        : (0, i.jsxs)(E.B, {
              direction: "vertical",
              align: "start",
              gap: 8,
              children: [
                  (0, i.jsx)(h.w, { type: "critical", message: U.intl.string(U.t["5mlOCW"]), role: "alert" }),
                  (0, i.jsx)(d.$, {
                      variant: "secondary",
                      onClick: () => (0, b.$o)(),
                      text: U.intl.string(U.t["5911Lb"]),
                  }),
              ],
          });
}
