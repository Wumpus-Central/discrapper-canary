n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    u = n(192308),
    c = n(821609),
    g = n(349288),
    m = n(289873),
    _ = n(391048),
    A = n(158032),
    h = n(362111),
    p = n(821189),
    x = n(637141),
    E = n(688810),
    T = n(160946),
    S = n(351906),
    f = n(295405),
    b = n(97352),
    C = n(927578),
    v = n(83617),
    N = n(615396),
    I = n(543767),
    y = n(652215),
    j = n(985018),
    O = n(652362),
    R = n(653307);
function L(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: l,
            dropdownClassName: r,
            analyticsLocation: L,
            currentInvoicePreview: P,
            disabled: G = !1,
        } = e,
        M = (0, d.bG)([S.A], () => S.A.hidePersonalInformation),
        [U, k] = (0, d.yK)([f.A], () => [f.A.paymentSources, f.A.hasFetchedPaymentSources]),
        w = (0, T.Y)((0, N.MP)(t)),
        { analyticsLocations: V } = (0, E.Ay)(),
        B = s.useMemo(() => Object.values(U).filter((e) => !e.invalid), [U]),
        [F, z] = s.useState(!1),
        [H, Y] = s.useState(t.currency),
        X = async (e, n, i) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await A.r6(t, n, i, V, L) : await A.uK(t, e, n, i, V, L), z(!1), Y(n);
        },
        K = async (e, n, i) => {
            z(!0);
            let s = await (0, I.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: V,
                    analyticsLocation: L,
                }),
                l = { amount: s.subtotal, currency: s.currency };
            P.currency !== s.currency || (P.currency === s.currency && P.total !== s.total)
                ? await D(
                      s,
                      () => {
                          i(e, n, l);
                      },
                      () => {
                          z(!1);
                      },
                  )
                : i(e, n, l);
        },
        W = (e) => {
            let n = b.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
            let i = (0, v._w)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : y.Yri.USD;
        },
        Z = (e) => {
            (0, v.c_)(e.id, (0, N.MP)(t)).then(() => {
                K(e, W(e), X);
            }),
                "function" == typeof n && n(e.id);
        },
        q = () => {
            (0, u.openModalLazy)(
                async () => (e) => (0, i.jsx)(h.default, { ...e, onAddPaymentSource: Z, analyticsLocation: L }),
                {
                    onCloseCallback: () => {
                        (0, _.ET)();
                    },
                    onCloseRequest: y.tEg,
                },
            );
        };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, C.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: O.uZ,
                children: (0, i.jsx)(c.$, { variant: "secondary", text: j.intl.string(j.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if (!k || !w) return (0, i.jsx)(m.y, {});
    if (!(B.length > 0))
        return (0, i.jsx)(c.$, {
            fullWidth: !0,
            variant: l ? "primary" : "secondary",
            onClick: q,
            text: j.intl.string(j.t.CpOiEO),
        });
    {
        let e,
            n = b.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let s = (0, v._w)(n, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, i.jsx)(x.A, {
                    prependOption: null == e ? { label: j.intl.string(j.t.iA5vA1), value: null } : null,
                    className: r,
                    paymentSources: B,
                    hidePersonalInformation: M,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && K(e, W(e), X);
                    },
                    onPaymentSourceAdd: q,
                    dropdownLoading: F,
                    disabled: G,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, i.jsx)(p.f, {
                          currencies: s,
                          children: (0, i.jsx)("div", {
                              className: a()(O.Gl, R.Uu, R.Hu),
                              children: (0, i.jsx)(p.A, {
                                  label: j.intl.string(j.t["0YjaXf"]),
                                  selectedCurrency: H,
                                  currencies: s,
                                  onChange: (e) => {
                                      K(void 0, e, X);
                                  },
                              }),
                          }),
                      })
                    : null,
            ],
        });
    }
}
let D = async (e, t, s) => {
    let l = await (0, u.openModalLazy)(
        async () => {
            let { default: l } = await n.e("49297").then(n.bind(n, 760941));
            return (n) => (0, i.jsx)(l, { newInvoice: e, onConfirm: t, onCancel: s, modalProps: n });
        },
        {
            onCloseRequest: () => {
                null != l && (0, u.closeModal)(l), s();
            },
        },
    );
};
