i.d(t, { A: () => D });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(284009),
    o = i.n(a),
    u = i(17928),
    d = i(192308),
    c = i(821609),
    g = i(349288),
    m = i(289873),
    A = i(391048),
    h = i(158032),
    E = i(362111),
    S = i(457287),
    T = i(637141),
    x = i(688810),
    p = i(160946),
    f = i(351906),
    N = i(295405),
    _ = i(97352),
    I = i(428262),
    C = i(83617),
    b = i(615396),
    y = i(543767),
    v = i(652215),
    j = i(375708),
    O = i(652362),
    R = i(653307);
function D(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: i,
            highlightAddPaymentMethodButton: l,
            analyticsLocation: a,
            currentInvoicePreview: D,
            disabled: P = !1,
        } = e,
        G = (0, u.bG)([f.A], () => f.A.hidePersonalInformation),
        [M, U] = (0, u.yK)([N.A], () => [N.A.paymentSources, N.A.hasFetchedPaymentSources]),
        V = (0, p.Y)((0, b.MP)(t)),
        { analyticsLocations: k } = (0, x.Ay)(),
        w = s.useMemo(() => {
            let e = D.checkoutContext;
            if (null == e) return Object.values(M).filter((e) => !e.invalid);
            let t = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
            return Object.values(M).filter((e) => !e.invalid && t.has(e.id));
        }, [M, D.checkoutContext]),
        [F, B] = s.useState(!1),
        [z, X] = s.useState(t.currency),
        Y = async (e, i, n) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await h.r6(t, i, n, k, a) : await h.uK(t, e, n, k, a), B(!1), X(i);
        },
        H = async (e, i, n) => {
            B(!0);
            let s = await (0, y.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: null != e ? void 0 : i,
                    analyticsLocations: k,
                    analyticsLocation: a,
                }),
                l = { amount: s.subtotal, currency: s.currency };
            D.currency !== s.currency || (D.currency === s.currency && D.total !== s.total)
                ? await L(
                      s,
                      () => {
                          n(e, s.currency, l);
                      },
                      () => {
                          B(!1);
                      },
                  )
                : n(e, s.currency, l);
        },
        K = (e) => {
            (0, C.c_)(e.id, (0, b.MP)(t)).then(() => {
                H(e, void 0, Y);
            }),
                "function" == typeof i && i(e.id);
        },
        W = () => {
            (0, d.openModalLazy)(
                async () => (e) => (0, n.jsx)(E.default, { ...e, onAddPaymentSource: K, analyticsLocation: a }),
                {
                    onCloseCallback: () => {
                        (0, A.ET)();
                    },
                    onCloseRequest: v.tEg,
                },
            );
        };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, I.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, n.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: O.uZ,
                children: (0, n.jsx)(c.$, { variant: "secondary", text: j.intl.string(j.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if (!U || !V) return (0, n.jsx)(m.y, {});
    if (!(w.length > 0))
        return (0, n.jsx)(c.$, {
            fullWidth: !0,
            variant: l ? "primary" : "secondary",
            onClick: W,
            text: j.intl.string(j.t.CpOiEO),
        });
    {
        let e,
            i = _.A.get(t.planIdForCurrencies);
        o()(null != i, "Unable to fetch plan");
        let s = null != D.checkoutContext ? D.checkoutContext.allowed_currencies : null,
            l = null != s && s.length > 0 ? s : (0, C._w)(i, t.paymentSourceId, !1),
            a = null != t.paymentSourceId ? w.find((e) => e.id === t.paymentSourceId) : null,
            u = a?.type === v.hes.TDS_WALLET;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, n.jsx)(T.Ay, {
                    prependOption: null == e ? { label: j.intl.string(j.t.iA5vA1), value: null } : null,
                    paymentSources: w,
                    hidePersonalInformation: G,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && H(e, void 0, Y);
                    },
                    onPaymentSourceAdd: W,
                    dropdownLoading: F,
                    disabled: P,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null == t.paymentSourceId || u
                    ? null
                    : (0, n.jsx)(S.f, {
                          currencies: l,
                          children: (0, n.jsx)("div", {
                              className: r()(O.Gl, R.Uu, R.Hu),
                              children: (0, n.jsx)(S.A, {
                                  label: j.intl.string(j.t["0YjaXf"]),
                                  selectedCurrency: z,
                                  currencies: l,
                                  onChange: (e) => {
                                      H(void 0, e, Y);
                                  },
                              }),
                          }),
                      }),
            ],
        });
    }
}
let L = async (e, t, s) => {
    let l = await (0, d.openModalLazy)(
        async () => {
            let { default: l } = await i.e("49297").then(i.bind(i, 760941));
            return (i) => (0, n.jsx)(l, { newInvoice: e, onConfirm: t, onCancel: s, modalProps: i });
        },
        {
            onCloseRequest: () => {
                null != l && (0, d.closeModal)(l), s();
            },
        },
    );
};
