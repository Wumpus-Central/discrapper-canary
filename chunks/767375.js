n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    a = n(735438),
    l = n.n(a),
    r = n(732955),
    o = n(397927),
    c = n(384904),
    d = n(391048),
    u = n(99696),
    _ = n(202613),
    m = n(580630),
    A = n(83617),
    g = n(661191),
    h = n(533808),
    x = n(219887),
    p = n(652215),
    E = n(985018),
    C = n(228851);
class T extends s.PureComponent {
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
            isForSubscription: a,
            locale: l,
            removing: c,
            submitting: d,
            onSubmit: u,
            onCancel: _,
            onDelete: m,
        } = this.props;
        return n
            ? (0, i.jsx)(h.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: c,
                  submitting: d,
                  locale: l,
                  isForSubscription: a,
                  onSubmit: u,
                  onCancel: _,
                  onDelete: m,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      s ? null : (0, i.jsx)(o.cGx, { className: C.__invalid_sourceDivider }),
                      (0, i.jsxs)("div", {
                          className: C.Yb,
                          children: [
                              (0, i.jsx)(x.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: a,
                                  locale: l,
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
                                        text: E.intl.string(E.t.bt75uw),
                                    }),
                          ],
                      }),
                  ],
              });
    }
}
let S = s.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: a, locale: l, onRedeemClick: d } = e,
        [u, _] = s.useState(null);
    return (
        s.useEffect(() => {
            void 0 === t
                ? _({ amount: 0, currency: p.Yri.USD })
                : c.YP(t.id).then((e) => {
                      _(e);
                  });
        }, [t]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                n ? null : (0, i.jsx)(o.cGx, { className: C.__invalid_sourceDivider }),
                (0, i.jsxs)("div", {
                    className: C.Yb,
                    children: [
                        void 0 !== t
                            ? (0, i.jsx)(x.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: a,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, i.jsx)(o.Text, { variant: "text-sm/medium", children: E.intl.string(E.t["6EEgNt"]) }),
                        (0, i.jsxs)("div", {
                            className: C.zy,
                            children: [
                                (0, i.jsx)("div", {
                                    className: C.Tq,
                                    children:
                                        null == u
                                            ? (0, i.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE })
                                            : (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = u ?? {},
                                                          n = t ?? p.Yri.USD,
                                                          i = String(n).toUpperCase(),
                                                          s = (0, m.$g)(e ?? 0, n);
                                                      return `${i} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, i.jsx)(r.$nd, {
                                    variant: "secondary",
                                    onClick: d,
                                    size: "sm",
                                    text: E.intl.string(E.t.H2hHyf),
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
            await c.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await c.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await c.Ps(e, t), this.setState({ editingPayment: null });
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
                    (0, d.ET)();
                },
                onCloseRequest: p.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: C.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: C.z8,
                          children: [
                              (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: E.intl.string(E.t.aRHpAB) }),
                              (0, i.jsx)("div", { className: C.Sv, children: E.intl.string(E.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, i.jsx)(r.$nd, { onClick: this.handleAddPaymentMethod, text: E.intl.string(E.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: s,
                locale: a,
                removing: r,
                submitting: c,
                premiumSubscriptionPaymentSourceId: d,
                showGiftCards: m,
            } = this.props,
            A = l()
                .values(s)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : g.default.compare(e.id, t.id))),
            h = A.filter((e) => !(e instanceof _.LQ)),
            x = A.filter((e) => e instanceof _.LQ),
            p = this.state.editingPayment,
            I = h.findIndex((e) => e.id === p),
            f = h.map((e, t) =>
                (0, i.jsx)(
                    T,
                    {
                        locale: a,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === d,
                        hideDivider: 0 === t || I === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: c,
                        removing: r,
                        isEditing: p === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                x.length > 0
                    ? x.map((e, t) =>
                          (0, i.jsx)(
                              S,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === h.length || I === h.length - 1,
                                  isForSubscription: e.id === d,
                                  locale: a,
                                  onRedeemClick: () =>
                                      (0, u.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, i.jsx)(S, {
                          hideDivider: 0 === h.length || I === h.length - 1,
                          isForSubscription: !1,
                          locale: a,
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
                                          (0, i.jsx)(o.XAi, { size: "sm", className: C.hz }),
                                          " ",
                                          E.intl.string(E.t.W26xGQ),
                                      ],
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: E.intl.string(E.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    f,
                    m && e,
                    I !== h.length - 1 || (m && x.length > 0) ? (0, i.jsx)(o.cGx, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
let f = I;
