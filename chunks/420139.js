n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(391048),
    _ = n(158032),
    m = n(362111),
    g = n(821189),
    A = n(637141),
    x = n(688810),
    h = n(160946),
    p = n(351906),
    T = n(295405),
    E = n(97352),
    S = n(927578),
    f = n(83617),
    C = n(615396),
    b = n(543767),
    N = n(652215),
    I = n(985018),
    v = n(752375),
    j = n(20976);
function y(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: l,
            dropdownClassName: r,
            analyticsLocation: y,
            currentInvoicePreview: O,
            disabled: L = !1,
        } = e,
        D = (0, d.bG)([p.A], () => p.A.hidePersonalInformation),
        [P, M] = (0, d.yK)([T.A], () => [T.A.paymentSources, T.A.hasFetchedPaymentSources]),
        G = (0, h.Y)((0, C.MP)(t)),
        { analyticsLocations: U } = (0, x.Ay)(),
        k = s.useMemo(() => Object.values(P).filter((e) => !e.invalid), [P]),
        [V, w] = s.useState(!1),
        [B, H] = s.useState(t.currency),
        F = async (e, n, i) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await _.r6(t, n, i, U, y) : await _.uK(t, e, n, i, U, y), w(!1), H(n);
        },
        Y = async (e, n, i) => {
            w(!0);
            let s = await (0, b.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: U,
                    analyticsLocation: y,
                }),
                l = { amount: s.subtotal, currency: s.currency };
            O.currency !== s.currency || (O.currency === s.currency && O.total !== s.total)
                ? await R(
                      s,
                      () => {
                          i(e, n, l);
                      },
                      () => {
                          w(!1);
                      },
                  )
                : i(e, n, l);
        },
        z = (e) => {
            let n = E.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
            let i = (0, f._w)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : N.Yri.USD;
        },
        X = (e) => {
            (0, f.c_)(e.id, (0, C.MP)(t)).then(() => {
                Y(e, z(e), F);
            }),
                "function" == typeof n && n(e.id);
        },
        W = () => {
            (0, c.mMO)(
                async () => (e) => (0, i.jsx)(m.default, { ...e, onAddPaymentSource: X, analyticsLocation: y }),
                {
                    onCloseCallback: () => {
                        (0, u.ET)();
                    },
                    onCloseRequest: N.tEg,
                },
            );
        };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, S.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(c.MzZ, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: v.uZ,
                children: (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    text: I.intl.string(I.t.SgX7Ra),
                    fullWidth: !0,
                }),
            })
        );
    }
    if (!M || !G) return (0, i.jsx)(c.y$y, {});
    if (!(k.length > 0))
        return (0, i.jsx)(c.Button, {
            fullWidth: !0,
            variant: l ? "primary" : "secondary",
            onClick: W,
            text: I.intl.string(I.t.CpOiEO),
        });
    {
        let e,
            n = E.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let s = (0, f._w)(n, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, i.jsx)(A.A, {
                    prependOption: null == e ? { label: I.intl.string(I.t.iA5vA1), value: null } : null,
                    className: r,
                    paymentSources: k,
                    hidePersonalInformation: D,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && Y(e, z(e), F);
                    },
                    onPaymentSourceAdd: W,
                    dropdownLoading: V,
                    disabled: L,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, i.jsx)(g.f, {
                          currencies: s,
                          children: (0, i.jsx)("div", {
                              className: a()(v.Gl, j.Uu, j.Hu),
                              children: (0, i.jsx)(g.A, {
                                  label: I.intl.string(I.t["0YjaXf"]),
                                  selectedCurrency: B,
                                  currencies: s,
                                  onChange: (e) => {
                                      Y(void 0, e, F);
                                  },
                              }),
                          }),
                      })
                    : null,
            ],
        });
    }
}
let R = async (e, t, s) => {
    let l = await (0, c.mMO)(
        async () => {
            let { default: l } = await n.e("49297").then(n.bind(n, 760941));
            return (n) => (0, i.jsx)(l, { newInvoice: e, onConfirm: t, onCancel: s, modalProps: n });
        },
        {
            onCloseRequest: () => {
                null != l && (0, c.OoC)(l), s();
            },
        },
    );
};
