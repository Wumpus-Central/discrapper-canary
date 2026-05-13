i.d(t, { A: () => L });
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
    T = i(457287),
    x = i(637141),
    S = i(688810),
    p = i(160946),
    f = i(351906),
    N = i(295405),
    _ = i(97352),
    C = i(927578),
    I = i(83617),
    b = i(615396),
    v = i(543767),
    j = i(652215),
    y = i(375708),
    O = i(652362),
    R = i(653307);
function L(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: i,
            highlightAddPaymentMethodButton: l,
            dropdownClassName: a,
            analyticsLocation: L,
            currentInvoicePreview: P,
            disabled: G = !1,
        } = e,
        U = (0, u.bG)([f.A], () => f.A.hidePersonalInformation),
        [M, V] = (0, u.yK)([N.A], () => [N.A.paymentSources, N.A.hasFetchedPaymentSources]),
        k = (0, p.Y)((0, b.MP)(t)),
        { analyticsLocations: w } = (0, S.Ay)(),
        F = s.useMemo(() => Object.values(M).filter((e) => !e.invalid), [M]),
        [B, z] = s.useState(!1),
        [Y, X] = s.useState(t.currency),
        H = async (e, i, n) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await h.r6(t, i, n, w, L) : await h.uK(t, e, i, n, w, L), z(!1), X(i);
        },
        K = async (e, i, n) => {
            z(!0);
            let s = await (0, v.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: i,
                    analyticsLocations: w,
                    analyticsLocation: L,
                }),
                l = { amount: s.subtotal, currency: s.currency };
            P.currency !== s.currency || (P.currency === s.currency && P.total !== s.total)
                ? await D(
                      s,
                      () => {
                          n(e, i, l);
                      },
                      () => {
                          z(!1);
                      },
                  )
                : n(e, i, l);
        },
        W = (e) => {
            let i = _.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != i, "Unable to fetch plan");
            let n = (0, I._w)(i.id, e.id, !1);
            return n.length > 0 ? n[0] : j.Yri.USD;
        },
        Z = (e) => {
            (0, I.c_)(e.id, (0, b.MP)(t)).then(() => {
                K(e, W(e), H);
            }),
                "function" == typeof i && i(e.id);
        },
        q = () => {
            (0, d.openModalLazy)(
                async () => (e) => (0, n.jsx)(E.default, { ...e, onAddPaymentSource: Z, analyticsLocation: L }),
                {
                    onCloseCallback: () => {
                        (0, A.ET)();
                    },
                    onCloseRequest: j.tEg,
                },
            );
        };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, C.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, n.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: O.uZ,
                children: (0, n.jsx)(c.$, { variant: "secondary", text: y.intl.string(y.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if (!V || !k) return (0, n.jsx)(m.y, {});
    if (!(F.length > 0))
        return (0, n.jsx)(c.$, {
            fullWidth: !0,
            variant: l ? "primary" : "secondary",
            onClick: q,
            text: y.intl.string(y.t.CpOiEO),
        });
    {
        let e,
            i = _.A.get(t.planIdForCurrencies);
        o()(null != i, "Unable to fetch plan");
        let s = (0, I._w)(i, t.paymentSourceId, !1),
            l = null != t.paymentSourceId ? F.find((e) => e.id === t.paymentSourceId) : null,
            u = l?.type === j.hes.TDS_WALLET;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, n.jsx)(x.A, {
                    prependOption: null == e ? { label: y.intl.string(y.t.iA5vA1), value: null } : null,
                    className: a,
                    paymentSources: F,
                    hidePersonalInformation: U,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && K(e, W(e), H);
                    },
                    onPaymentSourceAdd: q,
                    dropdownLoading: B,
                    disabled: G,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null == t.paymentSourceId || u
                    ? null
                    : (0, n.jsx)(T.f, {
                          currencies: s,
                          children: (0, n.jsx)("div", {
                              className: r()(O.Gl, R.Uu, R.Hu),
                              children: (0, n.jsx)(T.A, {
                                  label: y.intl.string(y.t["0YjaXf"]),
                                  selectedCurrency: Y,
                                  currencies: s,
                                  onChange: (e) => {
                                      K(void 0, e, H);
                                  },
                              }),
                          }),
                      }),
            ],
        });
    }
}
let D = async (e, t, s) => {
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
