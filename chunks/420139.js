n.d(t, { A: () => O });
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
    g = n(362111),
    m = n(821189),
    A = n(637141),
    h = n(688810),
    p = n(160946),
    x = n(351906),
    E = n(295405),
    T = n(97352),
    S = n(927578),
    C = n(83617),
    f = n(615396),
    I = n(543767),
    b = n(652215),
    N = n(985018),
    v = n(752375),
    j = n(20976);
function O(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: l,
            dropdownClassName: r,
            analyticsLocation: O,
            currentInvoicePreview: y,
            disabled: P = !1,
        } = e,
        D = (0, d.bG)([x.A], () => x.A.hidePersonalInformation),
        [L, G] = (0, d.yK)([E.A], () => [E.A.paymentSources, E.A.hasFetchedPaymentSources]),
        M = (0, p.Y)((0, f.MP)(t)),
        { analyticsLocations: U } = (0, h.Ay)(),
        k = s.useMemo(() => Object.values(L).filter((e) => !e.invalid), [L]),
        [V, w] = s.useState(!1),
        [H, B] = s.useState(t.currency),
        F = async (e, n, i) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await _.r6(t, n, i, U, O) : await _.uK(t, e, n, i, U, O), w(!1), B(n);
        },
        Y = async (e, n, i) => {
            w(!0);
            let s = await (0, I.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: U,
                    analyticsLocation: O,
                }),
                l = { amount: s.subtotal, currency: s.currency };
            y.currency !== s.currency || (y.currency === s.currency && y.total !== s.total)
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
            let n = T.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
            let i = (0, C._w)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : b.Yri.USD;
        },
        X = (e) => {
            (0, C.c_)(e.id, (0, f.MP)(t)).then(() => {
                Y(e, z(e), F);
            }),
                "function" == typeof n && n(e.id);
        },
        W = () => {
            (0, c.mMO)(
                async () => (e) => (0, i.jsx)(g.default, { ...e, onAddPaymentSource: X, analyticsLocation: O }),
                {
                    onCloseCallback: () => {
                        (0, u.ET)();
                    },
                    onCloseRequest: b.tEg,
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
                    text: N.intl.string(N.t.SgX7Ra),
                    fullWidth: !0,
                }),
            })
        );
    }
    if (!G || !M) return (0, i.jsx)(c.y$y, {});
    if (!(k.length > 0))
        return (0, i.jsx)(c.Button, {
            fullWidth: !0,
            variant: l ? "primary" : "secondary",
            onClick: W,
            text: N.intl.string(N.t.CpOiEO),
        });
    {
        let e,
            n = T.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let s = (0, C._w)(n, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, i.jsx)(A.A, {
                    prependOption: null == e ? { label: N.intl.string(N.t.iA5vA1), value: null } : null,
                    className: r,
                    paymentSources: k,
                    hidePersonalInformation: D,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && Y(e, z(e), F);
                    },
                    onPaymentSourceAdd: W,
                    dropdownLoading: V,
                    disabled: P,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, i.jsx)(m.f, {
                          currencies: s,
                          children: (0, i.jsx)("div", {
                              className: a()(v.Gl, j.Uu, j.Hu),
                              children: (0, i.jsx)(m.A, {
                                  label: N.intl.string(N.t["0YjaXf"]),
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
