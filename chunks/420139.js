n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(284009),
    c = n.n(l),
    o = n(17928),
    d = n(192308),
    u = n(821609),
    m = n(349288),
    p = n(289873),
    h = n(391048),
    _ = n(158032),
    x = n(362111),
    f = n(457287),
    g = n(637141),
    C = n(688810),
    y = n(160946),
    A = n(351906),
    v = n(295405),
    b = n(97352),
    j = n(927578),
    I = n(83617),
    S = n(615396),
    P = n(543767),
    N = n(652215),
    E = n(985018),
    L = n(652362),
    T = n(653307);
function D(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: a,
            dropdownClassName: l,
            analyticsLocation: D,
            currentInvoicePreview: R,
            disabled: M = !1,
        } = e,
        U = (0, o.bG)([A.A], () => A.A.hidePersonalInformation),
        [k, G] = (0, o.yK)([v.A], () => [v.A.paymentSources, v.A.hasFetchedPaymentSources]),
        B = (0, y.Y)((0, S.MP)(t)),
        { analyticsLocations: O } = (0, C.Ay)(),
        H = s.useMemo(() => Object.values(k).filter((e) => !e.invalid), [k]),
        [F, z] = s.useState(!1),
        [q, Y] = s.useState(t.currency),
        V = async (e, n, i) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await _.r6(t, n, i, O, D) : await _.uK(t, e, n, i, O, D), z(!1), Y(n);
        },
        W = async (e, n, i) => {
            z(!0);
            let s = await (0, P.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: O,
                    analyticsLocation: D,
                }),
                a = { amount: s.subtotal, currency: s.currency };
            R.currency !== s.currency || (R.currency === s.currency && R.total !== s.total)
                ? await w(
                      s,
                      () => {
                          i(e, n, a);
                      },
                      () => {
                          z(!1);
                      },
                  )
                : i(e, n, a);
        },
        K = (e) => {
            let n = b.A.get(t.planIdForCurrencies);
            c()(null != e, "paymentSource not specified for change"), c()(null != n, "Unable to fetch plan");
            let i = (0, I._w)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : N.Yri.USD;
        },
        Z = (e) => {
            (0, I.c_)(e.id, (0, S.MP)(t)).then(() => {
                W(e, K(e), V);
            }),
                "function" == typeof n && n(e.id);
        },
        Q = () => {
            (0, d.openModalLazy)(
                async () => (e) => (0, i.jsx)(x.default, { ...e, onAddPaymentSource: Z, analyticsLocation: D }),
                {
                    onCloseCallback: () => {
                        (0, h.ET)();
                    },
                    onCloseRequest: N.tEg,
                },
            );
        };
    if (t.isPurchasedExternally) {
        let e;
        return (
            c()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, j.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(m.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: L.uZ,
                children: (0, i.jsx)(u.$, { variant: "secondary", text: E.intl.string(E.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if (!G || !B) return (0, i.jsx)(p.y, {});
    if (!(H.length > 0))
        return (0, i.jsx)(u.$, {
            fullWidth: !0,
            variant: a ? "primary" : "secondary",
            onClick: Q,
            text: E.intl.string(E.t.CpOiEO),
        });
    {
        let e,
            n = b.A.get(t.planIdForCurrencies);
        c()(null != n, "Unable to fetch plan");
        let s = (0, I._w)(n, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, i.jsx)(g.A, {
                    prependOption: null == e ? { label: E.intl.string(E.t.iA5vA1), value: null } : null,
                    className: l,
                    paymentSources: H,
                    hidePersonalInformation: U,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && W(e, K(e), V);
                    },
                    onPaymentSourceAdd: Q,
                    dropdownLoading: F,
                    disabled: M,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, i.jsx)(f.f, {
                          currencies: s,
                          children: (0, i.jsx)("div", {
                              className: r()(L.Gl, T.Uu, T.Hu),
                              children: (0, i.jsx)(f.A, {
                                  label: E.intl.string(E.t["0YjaXf"]),
                                  selectedCurrency: q,
                                  currencies: s,
                                  onChange: (e) => {
                                      W(void 0, e, V);
                                  },
                              }),
                          }),
                      })
                    : null,
            ],
        });
    }
}
let w = async (e, t, s) => {
    let a = await (0, d.openModalLazy)(
        async () => {
            let { default: a } = await n.e("49297").then(n.bind(n, 760941));
            return (n) => (0, i.jsx)(a, { newInvoice: e, onConfirm: t, onCancel: s, modalProps: n });
        },
        {
            onCloseRequest: () => {
                null != a && (0, d.closeModal)(a), s();
            },
        },
    );
};
