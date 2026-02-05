n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(284009),
    o = n.n(l),
    c = n(311907),
    d = n(397927),
    u = n(391048),
    _ = n(158032),
    m = n(362111),
    A = n(821189),
    g = n(637141),
    E = n(688810),
    h = n(160946),
    p = n(351906),
    C = n(295405),
    x = n(97352),
    T = n(927578),
    I = n(83617),
    S = n(615396),
    f = n(543767),
    N = n(652215),
    b = n(985018),
    R = n(752375),
    v = n(20976);
function O(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: r,
            dropdownClassName: l,
            analyticsLocation: O,
            currentInvoicePreview: P,
            disabled: y = !1,
        } = e,
        L = (0, c.bG)([p.A], () => p.A.hidePersonalInformation),
        [D, M] = (0, c.yK)([C.A], () => [C.A.paymentSources, C.A.hasFetchedPaymentSources]),
        G = (0, h.Y)((0, S.MP)(t)),
        { analyticsLocations: U } = (0, E.Ay)(),
        k = s.useMemo(() => Object.values(D).filter((e) => !e.invalid), [D]),
        [B, w] = s.useState(!1),
        [H, V] = s.useState(t.currency),
        F = async (e, n, i) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await _.r6(t, n, i, U, O) : await _.uK(t, e, n, i, U, O), w(!1), V(n);
        },
        Y = async (e, n, i) => {
            w(!0);
            let s = await (0, f.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: U,
                    analyticsLocation: O,
                }),
                r = { amount: s.subtotal, currency: s.currency };
            P.currency !== s.currency || (P.currency === s.currency && P.total !== s.total)
                ? await j(
                      s,
                      () => {
                          i(e, n, r);
                      },
                      () => {
                          w(!1);
                      },
                  )
                : i(e, n, r);
        },
        W = (e) => {
            let n = x.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
            let i = (0, I._w)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : N.Yri.USD;
        },
        z = (e) => {
            (0, I.c_)(e.id, (0, S.MP)(t)).then(() => {
                Y(e, W(e), F);
            }),
                "function" == typeof n && n(e.id);
        },
        K = () => {
            (0, d.mMO)(
                async () => (e) => (0, i.jsx)(m.default, { ...e, onAddPaymentSource: z, analyticsLocation: O }),
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
            (e = (0, T.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(d.MzZ, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: R.uZ,
                children: (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    text: b.intl.string(b.t.SgX7Ra),
                    fullWidth: !0,
                }),
            })
        );
    }
    if (!M || !G) return (0, i.jsx)(d.y$y, {});
    if (!(k.length > 0))
        return (0, i.jsx)(d.Button, {
            fullWidth: !0,
            variant: r ? "primary" : "secondary",
            onClick: K,
            text: b.intl.string(b.t.CpOiEO),
        });
    {
        let e,
            n = x.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let s = (0, I._w)(n, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, i.jsx)(g.A, {
                    prependOption: null == e ? { label: b.intl.string(b.t.iA5vA1), value: null } : null,
                    className: l,
                    paymentSources: k,
                    hidePersonalInformation: L,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && Y(e, W(e), F);
                    },
                    onPaymentSourceAdd: K,
                    dropdownLoading: B,
                    disabled: y,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, i.jsx)(A.f, {
                          currencies: s,
                          children: (0, i.jsx)("div", {
                              className: a()(R.Gl, v.Uu, v.Hu),
                              children: (0, i.jsx)(A.A, {
                                  label: b.intl.string(b.t["0YjaXf"]),
                                  selectedCurrency: H,
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
let j = async (e, t, s) => {
    let r = await (0, d.mMO)(
        async () => {
            let { default: r } = await n.e("49297").then(n.bind(n, 760941));
            return (n) => (0, i.jsx)(r, { newInvoice: e, onConfirm: t, onCancel: s, modalProps: n });
        },
        {
            onCloseRequest: () => {
                null != r && (0, d.OoC)(r), s();
            },
        },
    );
};
