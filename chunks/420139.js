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
    m = n(158032),
    _ = n(362111),
    g = n(821189),
    x = n(637141),
    A = n(688810),
    h = n(160946),
    p = n(351906),
    f = n(295405),
    T = n(97352),
    S = n(927578),
    E = n(83617),
    b = n(615396),
    C = n(543767),
    v = n(652215),
    N = n(985018),
    I = n(187386),
    j = n(435115);
function y(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: l,
            dropdownClassName: r,
            analyticsLocation: y,
            currentInvoicePreview: R,
            disabled: L = !1,
        } = e,
        P = (0, d.bG)([p.A], () => p.A.hidePersonalInformation),
        [D, G] = (0, d.yK)([f.A], () => [f.A.paymentSources, f.A.hasFetchedPaymentSources]),
        M = (0, h.Y)((0, b.MP)(t)),
        { analyticsLocations: U } = (0, A.Ay)(),
        k = s.useMemo(() => Object.values(D).filter((e) => !e.invalid), [D]),
        [w, V] = s.useState(!1),
        [B, F] = s.useState(t.currency),
        H = async (e, n, i) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await m.r6(t, n, i, U, y) : await m.uK(t, e, n, i, U, y), V(!1), F(n);
        },
        z = async (e, n, i) => {
            V(!0);
            let s = await (0, C.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: U,
                    analyticsLocation: y,
                }),
                l = { amount: s.subtotal, currency: s.currency };
            R.currency !== s.currency || (R.currency === s.currency && R.total !== s.total)
                ? await O(
                      s,
                      () => {
                          i(e, n, l);
                      },
                      () => {
                          V(!1);
                      },
                  )
                : i(e, n, l);
        },
        Y = (e) => {
            let n = T.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
            let i = (0, E._w)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : v.Yri.USD;
        },
        X = (e) => {
            (0, E.c_)(e.id, (0, b.MP)(t)).then(() => {
                z(e, Y(e), H);
            }),
                "function" == typeof n && n(e.id);
        },
        K = () => {
            (0, c.mMO)(
                async () => (e) => (0, i.jsx)(_.default, { ...e, onAddPaymentSource: X, analyticsLocation: y }),
                {
                    onCloseCallback: () => {
                        (0, u.ET)();
                    },
                    onCloseRequest: v.tEg,
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
                className: I.uZ,
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
            onClick: K,
            text: N.intl.string(N.t.CpOiEO),
        });
    {
        let e,
            n = T.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let s = (0, E._w)(n, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, i.jsx)(x.A, {
                    prependOption: null == e ? { label: N.intl.string(N.t.iA5vA1), value: null } : null,
                    className: r,
                    paymentSources: k,
                    hidePersonalInformation: P,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && z(e, Y(e), H);
                    },
                    onPaymentSourceAdd: K,
                    dropdownLoading: w,
                    disabled: L,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, i.jsx)(g.f, {
                          currencies: s,
                          children: (0, i.jsx)("div", {
                              className: a()(I.Gl, j.Uu, j.Hu),
                              children: (0, i.jsx)(g.A, {
                                  label: N.intl.string(N.t["0YjaXf"]),
                                  selectedCurrency: B,
                                  currencies: s,
                                  onChange: (e) => {
                                      z(void 0, e, H);
                                  },
                              }),
                          }),
                      })
                    : null,
            ],
        });
    }
}
let O = async (e, t, s) => {
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
