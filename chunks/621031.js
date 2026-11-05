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
    p = n(506426),
    f = n(637141),
    x = n(688810),
    _ = n(781300),
    I = n(160946),
    N = n(351906),
    b = n(295405),
    C = n(97352),
    y = n(722178),
    v = n(83617),
    j = n(615396),
    O = n(543767),
    L = n(793574),
    R = n(166532),
    D = n(778705);
function P(e) {
    let { dropdownProps: t, subscription: n, openInvoice: l } = e,
        { analyticsLocations: s } = (0, x.Ay)(L.A.SUBSCRIPTION_DETAILS);
    return null == l
        ? (0, i.jsx)(f.Ay, { ...t, disabled: !0 })
        : (0, i.jsx)(f.Ay, {
              ...t,
              onChange: (e) => {
                  null != e &&
                      (0, D.A)({
                          initialPlanId: n.planIdFromItems,
                          openInvoiceId: l.id,
                          analyticsLocations: s,
                          initialPaymentSourceId: e.id,
                      });
              },
              onPaymentSourceAdd: () => {
                  (0, D.A)({
                      initialPlanId: n.planIdFromItems,
                      openInvoiceId: l.id,
                      analyticsLocations: s,
                      startingStepOverride: R.pn.ADD_PAYMENT_STEPS,
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
            analyticsLocation: L,
            currentInvoicePreview: R,
            disabled: D = !1,
            openInvoice: k,
        } = e,
        w = (0, u.bG)([N.A], () => N.A.hidePersonalInformation),
        [F, B, X] = (0, u.yK)([b.A], () => [
            b.A.paymentSources,
            b.A.hasFetchedPaymentSources,
            b.A.paymentSourceFetchError,
        ]),
        z = (0, I.Y)((0, j.MP)(t)),
        { analyticsLocations: H } = (0, x.Ay)(),
        Y = l.useMemo(() => {
            let e = R.checkoutContext;
            if (null == e) return Object.values(F).filter((e) => !e.invalid);
            let t = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
            return Object.values(F).filter((e) => !e.invalid && t.has(e.id));
        }, [F, R.checkoutContext]),
        [K, W] = l.useState(!1),
        [Z, q] = l.useState(t.currency);
    async function Q(e, n, i) {
        if (null == t) throw Error("missing subscription and paymentSource");
        (null == e ? await S.r6(t, n, i, H, L) : await S.uK(t, e, i, H, L), W(!1), q(n));
    }
    async function J(e, l, s) {
        W(!0);
        let r = await (0, O.OQ)({
                subscriptionId: t.id,
                paymentSourceId: e?.id,
                renewal: !0,
                currency: null != e ? void 0 : l,
                analyticsLocations: H,
                analyticsLocation: L,
            }),
            a = { amount: r.subtotal, currency: r.currency };
        R.currency !== r.currency || (R.currency === r.currency && R.total !== r.total)
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
                      W(!1);
                  },
              )
            : s(e, r.currency, a);
    }
    function $(e) {
        ((0, v.c_)(e.id, (0, j.MP)(t)).then(() => {
            J(e, void 0, Q);
        }),
            "function" == typeof s && s(e.id));
    }
    let ee = () => {
        (0, d.mM)(async () => (e) => (0, i.jsx)(T.default, { ...e, onAddPaymentSource: $, analyticsLocation: L }), {
            onCloseCallback: () => {
                (0, h.ET)();
            },
            onCloseRequest: G.tEg,
        });
    };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, y.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: U.uZ,
                children: (0, i.jsx)(c.$, { variant: "secondary", text: M.intl.string(M.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if ((!B && !X) || !z) return (0, i.jsx)(m.y, {});
    if (Y.length > 0) {
        let e,
            n,
            l = C.A.get(t.planIdForCurrencies);
        o()(null != l, "Unable to fetch plan");
        let s = null != R.checkoutContext ? R.checkoutContext.allowed_currencies : null,
            a = null != s && s.length > 0 ? s : (0, v._w)(l, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? Y.find((e) => e.id === t.paymentSourceId) : null,
            d = u?.type === G.hes.TDS_WALLET;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((n = {
                    prependOption:
                        null == (e = t.paymentSourceId) ? { label: M.intl.string(M.t.iA5vA1), value: null } : null,
                    paymentSources: Y,
                    hidePersonalInformation: w,
                    selectedPaymentSourceId: e,
                    onChange: function (e) {
                        null != e && J(e, void 0, Q);
                    },
                    onPaymentSourceAdd: ee,
                    dropdownLoading: K,
                    disabled: D,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                }),
                t.status === G.Dmq.PAST_DUE && t.isPremium
                    ? (0, i.jsx)(P, { dropdownProps: n, subscription: t, openInvoice: k ?? null })
                    : (0, i.jsx)(f.Ay, { ...n })),
                null == t.paymentSourceId || d
                    ? null
                    : (0, i.jsx)(p.f, {
                          currencies: a,
                          children: (0, i.jsx)("div", {
                              className: r()(U.Gl, V.Uu, V.Hu),
                              children: (0, i.jsx)(p.A, {
                                  label: M.intl.string(M.t["0YjaXf"]),
                                  selectedCurrency: Z,
                                  currencies: a,
                                  onChange: (e) => {
                                      J(void 0, e, Q);
                                  },
                              }),
                          }),
                      }),
            ],
        });
    }
    if (X)
        return (0, i.jsxs)(A.B, {
            direction: "vertical",
            align: "start",
            gap: 8,
            children: [
                (0, i.jsx)(E.w, { type: "critical", message: M.intl.string(M.t["5mlOCW"]), role: "alert" }),
                (0, i.jsx)(c.$, {
                    variant: "secondary",
                    onClick: () => (0, _.$o)(),
                    text: M.intl.string(M.t["5911Lb"]),
                }),
            ],
        });
    return (0, i.jsx)(c.$, {
        fullWidth: !0,
        variant: a ? "primary" : "secondary",
        onClick: ee,
        text: M.intl.string(M.t.CpOiEO),
    });
}
