n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(735438),
    a = n.n(r),
    l = n(732955),
    o = n(397927),
    c = n(384904),
    d = n(391048),
    u = n(83617),
    _ = n(661191),
    m = n(533808),
    A = n(219887),
    g = n(652215),
    E = n(985018),
    h = n(228851);
class p extends s.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            index: s,
            hideDivider: r,
            isForSubscription: a,
            locale: c,
            removing: d,
            submitting: u,
            onSubmit: _,
            onCancel: g,
            onDelete: p,
        } = this.props;
        return n
            ? (0, i.jsx)(m.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: d,
                  submitting: u,
                  locale: c,
                  isForSubscription: a,
                  onSubmit: _,
                  onCancel: g,
                  onDelete: p,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      s > 0 && !r ? (0, i.jsx)(o.cGx, { className: h.__invalid_sourceDivider }) : null,
                      (0, i.jsxs)("div", {
                          className: h.Yb,
                          children: [
                              (0, i.jsx)(A.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: a,
                                  locale: c,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              n
                                  ? null
                                  : (0, i.jsx)(l.$nd, {
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
class C extends s.PureComponent {
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
        await (0, u.c_)(e.id);
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
                onCloseRequest: g.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: h.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: h.z8,
                          children: [
                              (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: E.intl.string(E.t.aRHpAB) }),
                              (0, i.jsx)("div", { className: h.Sv, children: E.intl.string(E.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, i.jsx)(l.$nd, { onClick: this.handleAddPaymentMethod, text: E.intl.string(E.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let {
                showHeader: e,
                defaultPaymentSourceId: t,
                paymentSources: n,
                locale: s,
                removing: r,
                submitting: l,
                premiumSubscriptionPaymentSourceId: c,
            } = this.props,
            d = a()
                .values(n)
                .sort((e, n) => (e.id === t ? -1 : n.id === t ? 1 : _.default.compare(e.id, n.id))),
            u = this.state.editingPayment,
            m = d.findIndex((e) => e.id === u),
            A = d.map((e, n) =>
                (0, i.jsx)(
                    p,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: t === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === c,
                        hideDivider: m === n - 1,
                        onSubmit: this.handleSubmit,
                        index: n,
                        submitting: l,
                        removing: r,
                        isEditing: u === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                e
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(o.Heading, {
                                  variant: "heading-lg/semibold",
                                  children: [
                                      (0, i.jsx)(o.XAi, { size: "sm", className: h.hz }),
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
                A,
                m !== d.length - 1 ? (0, i.jsx)(o.cGx, {}) : null,
                this.renderFooter(),
            ],
        });
    }
}
let x = C;
