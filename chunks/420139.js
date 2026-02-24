n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(311907),
    d = n(397927),
    u = n(391048),
    _ = n(158032),
    m = n(362111),
    A = n(821189),
    g = n(637141),
    h = n(688810),
    x = n(160946),
    p = n(351906),
    E = n(295405),
    C = n(97352),
    T = n(927578),
    S = n(83617),
    I = n(615396),
    f = n(543767),
    N = n(652215),
    b = n(985018),
    j = n(107189),
    v = n(641254);
function O(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: a,
            dropdownClassName: r,
            analyticsLocation: O,
            currentInvoicePreview: y,
            disabled: P = !1,
        } = e,
        L = (0, c.bG)([p.A], () => p.A.hidePersonalInformation),
        [D, G] = (0, c.yK)([E.A], () => [E.A.paymentSources, E.A.hasFetchedPaymentSources]),
        M = (0, x.Y)((0, I.MP)(t)),
        { analyticsLocations: U } = (0, h.Ay)(),
        k = s.useMemo(() => Object.values(D).filter((e) => !e.invalid), [D]),
        [V, w] = s.useState(!1),
        [H, B] = s.useState(t.currency),
        Y = async (e, n, i) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await _.r6(t, n, i, U, O) : await _.uK(t, e, n, i, U, O), w(!1), B(n);
        },
        F = async (e, n, i) => {
            w(!0);
            let s = await (0, f.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: e?.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: U,
                    analyticsLocation: O,
                }),
                a = { amount: s.subtotal, currency: s.currency };
            y.currency !== s.currency || (y.currency === s.currency && y.total !== s.total)
                ? await R(
                      s,
                      () => {
                          i(e, n, a);
                      },
                      () => {
                          w(!1);
                      },
                  )
                : i(e, n, a);
        },
        z = (e) => {
            let n = C.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
            let i = (0, S._w)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : N.Yri.USD;
        },
        W = (e) => {
            (0, S.c_)(e.id, (0, I.MP)(t)).then(() => {
                F(e, z(e), Y);
            }),
                "function" == typeof n && n(e.id);
        },
        K = () => {
            (0, d.mMO)(
                async () => (e) => (0, i.jsx)(m.default, { ...e, onAddPaymentSource: W, analyticsLocation: O }),
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
                className: j.uZ,
                children: (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    text: b.intl.string(b.t.SgX7Ra),
                    fullWidth: !0,
                }),
            })
        );
    }
    if (!G || !M) return (0, i.jsx)(d.y$y, {});
    if (!(k.length > 0))
        return (0, i.jsx)(d.Button, {
            fullWidth: !0,
            variant: a ? "primary" : "secondary",
            onClick: K,
            text: b.intl.string(b.t.CpOiEO),
        });
    {
        let e,
            n = C.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let s = (0, S._w)(n, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, i.jsx)(g.A, {
                    prependOption: null == e ? { label: b.intl.string(b.t.iA5vA1), value: null } : null,
                    className: r,
                    paymentSources: k,
                    hidePersonalInformation: L,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && F(e, z(e), Y);
                    },
                    onPaymentSourceAdd: K,
                    dropdownLoading: V,
                    disabled: P,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, i.jsx)(A.f, {
                          currencies: s,
                          children: (0, i.jsx)("div", {
                              className: l()(j.Gl, v.Uu, v.Hu),
                              children: (0, i.jsx)(A.A, {
                                  label: b.intl.string(b.t["0YjaXf"]),
                                  selectedCurrency: H,
                                  currencies: s,
                                  onChange: (e) => {
                                      F(void 0, e, Y);
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
    let a = await (0, d.mMO)(
        async () => {
            let { default: a } = await n.e("49297").then(n.bind(n, 760941));
            return (n) => (0, i.jsx)(a, { newInvoice: e, onConfirm: t, onCancel: s, modalProps: n });
        },
        {
            onCloseRequest: () => {
                null != a && (0, d.OoC)(a), s();
            },
        },
    );
};
