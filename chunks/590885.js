n.d(t, { A: () => F });
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
    A = n(834730),
    E = n(331322),
    h = n(683071),
    S = n(391048),
    T = n(158032),
    f = n(362111),
    p = n(506426),
    x = n(637141),
    I = n(136857),
    _ = n(688810),
    b = n(669815),
    N = n(351906),
    C = n(97352),
    y = n(448645),
    v = n(83617),
    j = n(615396),
    O = n(543767),
    D = n(160946),
    R = n(295405),
    L = n(793574),
    P = n(166532),
    G = n(778705);
function M(e) {
    let { dropdownProps: t, subscription: n, openInvoice: l } = e,
        { analyticsLocations: s } = (0, _.Ay)(L.A.SUBSCRIPTION_DETAILS);
    return null == l
        ? (0, i.jsx)(x.Ay, { ...t, disabled: !0 })
        : (0, i.jsx)(x.Ay, {
              ...t,
              onChange: (e) => {
                  null != e &&
                      (0, G.A)({
                          initialPlanId: n.planIdFromItems,
                          openInvoiceId: l.id,
                          analyticsLocations: s,
                          initialPaymentSourceId: e.id,
                      });
              },
              onPaymentSourceAdd: () => {
                  (0, G.A)({
                      initialPlanId: n.planIdFromItems,
                      openInvoiceId: l.id,
                      analyticsLocations: s,
                      startingStepOverride: P.pn.ADD_PAYMENT_STEPS,
                  });
              },
          });
}
var U = n(652215),
    V = n(792996),
    k = n(153345),
    w = n(938442);
function F(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: s,
            highlightAddPaymentMethodButton: a,
            analyticsLocation: L,
            currentInvoicePreview: P,
            disabled: G = !1,
            openInvoice: F,
            isBrandRefresh: B = !1,
            ref: X,
        } = e,
        z = (0, u.bG)([N.A], () => N.A.hidePersonalInformation),
        {
            validPaymentSources: H,
            hasFetchedPaymentSources: Y,
            hasFetchedSubscriptionPlans: W,
            hasFetchError: K,
        } = (function (e, t) {
            let [n, i, s] = (0, u.yK)([R.A], () => [
                    R.A.paymentSources,
                    R.A.hasFetchedPaymentSources,
                    R.A.paymentSourceFetchError,
                ]),
                r = (0, D.Y)((0, j.MP)(e)),
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
        })(t, P),
        { analyticsLocations: Z } = (0, _.Ay)(),
        [q, Q] = l.useState(!1),
        [$, J] = l.useState(null),
        [ee, et] = l.useState(t.currency);
    async function en(e, n, i) {
        (Q(!0), J(null));
        try {
            (null == e ? await T.r6(t, n, i, Z, L) : await T.uK(t, e, i, Z, L), et(n));
        } catch (e) {
            J(e instanceof I.Ay ? e : new I.Ay(e));
        } finally {
            Q(!1);
        }
    }
    async function ei(e, l, s) {
        (Q(!0), J(null));
        try {
            var r, a;
            let o = await (0, O.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: null != e ? void 0 : l,
                    analyticsLocations: Z,
                    analyticsLocation: L,
                }),
                u = { amount: o.subtotal, currency: o.currency };
            P.currency !== o.currency || P.total !== o.total
                ? await ((r = o),
                  (a = () => s(e, o.currency, u)),
                  new Promise((e, t) => {
                      let l = !1;
                      function s() {
                          l || e();
                      }
                      !(async function () {
                          try {
                              await (0, d.mM)(
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
            J(e instanceof I.Ay ? e : new I.Ay(e));
        } finally {
            Q(!1);
        }
    }
    async function el(e) {
        (Q(!0), J(null));
        let n = (0, v.c_)(e.id, (0, j.MP)(t));
        s?.(e.id);
        try {
            (await n, await ei(e, void 0, en));
        } catch (e) {
            (J(e instanceof I.Ay ? e : new I.Ay(e)), Q(!1));
        }
    }
    let es = () => {
            (0, d.mM)(
                async () => (e) => (0, i.jsx)(f.default, { ...e, onAddPaymentSource: el, analyticsLocation: L }),
                {
                    onCloseCallback: () => {
                        (0, S.ET)();
                    },
                    onCloseRequest: U.tEg,
                },
            );
        },
        er = l.useRef(null);
    if (
        (l.useImperativeHandle(X, () => ({
            openManagePayment() {
                if (t.isPurchasedExternally) return;
                if (0 === H.length) return void es();
                let e = er.current;
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
            (e = (0, y.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: k.uZ,
                children: (0, i.jsx)(c.$, { variant: "secondary", text: V.intl.string(V.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if ((!Y && !K) || !W) return (0, i.jsx)(m.y, {});
    if (H.length > 0) {
        let e,
            n,
            l = C.A.get(t.planIdForCurrencies);
        o()(null != l, "Unable to fetch plan");
        let s = null != P.checkoutContext ? P.checkoutContext.allowed_currencies : null,
            a = null != s && s.length > 0 ? s : (0, v._w)(l, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? H.find((e) => e.id === t.paymentSourceId) : null,
            d = u?.type === U.hes.TDS_WALLET,
            c = (0, i.jsx)(p.A, {
                label: V.intl.string(V.t["0YjaXf"]),
                selectedCurrency: ee,
                currencies: a,
                onChange: (e) => {
                    ei(void 0, e, en);
                },
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    ref: er,
                    children:
                        ((n = {
                            prependOption:
                                null == (e = t.paymentSourceId)
                                    ? { label: V.intl.string(V.t.iA5vA1), value: null }
                                    : null,
                            paymentSources: H,
                            hidePersonalInformation: z,
                            selectedPaymentSourceId: e,
                            onChange: async function (e) {
                                null != e && (await ei(e, void 0, en));
                            },
                            onPaymentSourceAdd: es,
                            dropdownLoading: q,
                            disabled: G,
                            paymentGatewayRestrictions: t.eligiblePaymentGateways,
                        }),
                        t.status === U.Dmq.PAST_DUE && t.isPremium
                            ? (0, i.jsx)(M, { dropdownProps: n, subscription: t, openInvoice: F ?? null })
                            : (0, i.jsx)(x.Ay, { ...n })),
                }),
                null != $
                    ? (0, i.jsx)(A.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: $.message,
                      })
                    : null,
                null == t.paymentSourceId || d
                    ? null
                    : (0, i.jsx)(p.f, {
                          currencies: a,
                          children: B
                              ? (0, i.jsx)(E.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 0,
                                    className: k.Gl,
                                    children: c,
                                })
                              : (0, i.jsx)("div", { className: r()(k.Gl, w.Uu, w.Hu), children: c }),
                      }),
            ],
        });
    }
    if (!K)
        return (0, i.jsx)(c.$, {
            fullWidth: !0,
            variant: a ? "primary" : "secondary",
            onClick: es,
            text: V.intl.string(V.t.CpOiEO),
        });
    return B
        ? null
        : (0, i.jsxs)(E.B, {
              direction: "vertical",
              align: "start",
              gap: 8,
              children: [
                  (0, i.jsx)(h.w, { type: "critical", message: V.intl.string(V.t["5mlOCW"]), role: "alert" }),
                  (0, i.jsx)(c.$, {
                      variant: "secondary",
                      onClick: () => (0, b.$o)(),
                      text: V.intl.string(V.t["5911Lb"]),
                  }),
              ],
          });
}
