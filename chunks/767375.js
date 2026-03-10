n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(732955),
    o = n(397927),
    d = n(384904),
    c = n(391048),
    u = n(99696),
    _ = n(202613),
    g = n(927578),
    m = n(580630),
    A = n(83617),
    h = n(661191),
    p = n(533808),
    x = n(219887),
    E = n(652215),
    T = n(985018),
    S = n(228851);
class C extends s.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            hideDivider: s,
            isForSubscription: l,
            locale: a,
            removing: d,
            submitting: c,
            onSubmit: u,
            onCancel: _,
            onDelete: g,
        } = this.props;
        return n
            ? (0, i.jsx)(p.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: d,
                  submitting: c,
                  locale: a,
                  isForSubscription: l,
                  onSubmit: u,
                  onCancel: _,
                  onDelete: g,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      s ? null : (0, i.jsx)(o.cGx, { className: S.__invalid_sourceDivider }),
                      (0, i.jsxs)("div", {
                          className: S.Yb,
                          children: [
                              (0, i.jsx)(x.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: a,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              n
                                  ? null
                                  : (0, i.jsx)(r.$nd, {
                                        variant: "secondary",
                                        onClick: this.handleEditClick,
                                        size: "sm",
                                        text: T.intl.string(T.t.bt75uw),
                                    }),
                          ],
                      }),
                  ],
              });
    }
}
let f = s.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: l, locale: a, onRedeemClick: c } = e,
        [u, _] = s.useState(null);
    return (
        s.useEffect(() => {
            void 0 === t
                ? _({ amount: 0, currency: (0, g.Rr)() })
                : d.YP(t.id).then((e) => {
                      _(e);
                  });
        }, [t]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                n ? null : (0, i.jsx)(o.cGx, { className: S.__invalid_sourceDivider }),
                (0, i.jsxs)("div", {
                    className: S.Yb,
                    children: [
                        void 0 !== t
                            ? (0, i.jsx)(x.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: l,
                                  locale: a,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, i.jsx)(o.Text, { variant: "text-sm/medium", children: T.intl.string(T.t["6EEgNt"]) }),
                        (0, i.jsxs)("div", {
                            className: S.zy,
                            children: [
                                (0, i.jsx)("div", {
                                    className: S.Tq,
                                    children:
                                        null == u
                                            ? (0, i.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE })
                                            : (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = u ?? {},
                                                          n = t ?? (0, g.Rr)(),
                                                          i = String(n).toUpperCase(),
                                                          s = (0, m.$g)(e ?? 0, n);
                                                      return `${i} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, i.jsx)(r.$nd, {
                                    variant: "secondary",
                                    onClick: c,
                                    size: "sm",
                                    text: T.intl.string(T.t.H2hHyf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class I extends s.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await d.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await d.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await d.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, A.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, i.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, c.ET)();
                },
                onCloseRequest: E.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: S.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: S.z8,
                          children: [
                              (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: T.intl.string(T.t.aRHpAB) }),
                              (0, i.jsx)("div", { className: S.Sv, children: T.intl.string(T.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, i.jsx)(r.$nd, { onClick: this.handleAddPaymentMethod, text: T.intl.string(T.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: s,
                locale: l,
                removing: r,
                submitting: d,
                premiumSubscriptionPaymentSourceId: c,
                showGiftCards: g,
            } = this.props,
            m = a()
                .values(s)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : h.default.compare(e.id, t.id))),
            A = m.filter((e) => !(e instanceof _.LQ)),
            p = m.filter((e) => e instanceof _.LQ),
            x = this.state.editingPayment,
            E = A.findIndex((e) => e.id === x),
            I = A.map((e, t) =>
                (0, i.jsx)(
                    C,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === c,
                        hideDivider: 0 === t || E === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: d,
                        removing: r,
                        isEditing: x === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                p.length > 0
                    ? p.map((e, t) =>
                          (0, i.jsx)(
                              f,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === A.length || E === A.length - 1,
                                  isForSubscription: e.id === c,
                                  locale: l,
                                  onRedeemClick: () =>
                                      (0, u.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, i.jsx)(f, {
                          hideDivider: 0 === A.length || E === A.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: () =>
                              (0, u.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, i.jsx)(o.XAi, { size: "sm", className: S.hz }),
                                          " ",
                                          T.intl.string(T.t.W26xGQ),
                                      ],
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: T.intl.string(T.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    I,
                    g && e,
                    E !== A.length - 1 || (g && p.length > 0) ? (0, i.jsx)(o.cGx, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
let b = I;
