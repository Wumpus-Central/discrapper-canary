n(47120);
var i,
    r = n(200651),
    s = n(192379),
    a = n(392711),
    l = n.n(a),
    o = n(481060),
    c = n(355467),
    d = n(159351),
    u = n(600164),
    m = n(212895),
    g = n(709054),
    h = n(156729),
    p = n(244526),
    x = n(981631),
    f = n(388032),
    E = n(912891);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class C extends (i = s.PureComponent) {
    render() {
        let { paymentSource: e, isDefault: t, isEditing: n, index: i, hideDivider: s, isForSubscription: a, locale: l, removing: c, submitting: d, onSubmit: m, onCancel: g, onDelete: x } = this.props;
        return n
            ? (0, r.jsx)(h.Z, {
                  paymentSource: e,
                  isDefault: t,
                  removing: c,
                  submitting: d,
                  locale: l,
                  isForSubscription: a,
                  onSubmit: m,
                  onCancel: g,
                  onDelete: x
              })
            : (0, r.jsxs)('div', {
                  className: E.__invalid_paymentSourceItem,
                  children: [
                      i > 0 && !s ? (0, r.jsx)(o.FormDivider, { className: E.__invalid_sourceDivider }) : null,
                      (0, r.jsxs)(u.Z, {
                          align: u.Z.Align.CENTER,
                          justify: u.Z.Justify.BETWEEN,
                          className: E.paymentSourceRow,
                          children: [
                              (0, r.jsx)(p.Z, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: a,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0
                              }),
                              n
                                  ? null
                                  : (0, r.jsx)(o.Button, {
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: this.handleEditClick,
                                        size: o.Button.Sizes.SMALL,
                                        children: f.intl.string(f.t.bt75u7)
                                    })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleEditClick', () => {
                this.props.onEditClick(this.props.paymentSource.id);
            });
    }
}
_(C, 'defaultProps', {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {}
});
class T extends s.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, r.jsxs)(u.Z, {
            justify: u.Z.Justify.END,
            className: E.footer,
            children: [
                0 === Object.keys(e).length
                    ? (0, r.jsxs)(u.Z.Child, {
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  children: f.intl.string(f.t.aRHpAA)
                              }),
                              (0, r.jsx)('div', {
                                  className: E.subText,
                                  children: f.intl.string(f.t.o9bOIi)
                              })
                          ]
                      })
                    : null,
                (0, r.jsx)(o.Button, {
                    onClick: this.handleAddPaymentMethod,
                    children: f.intl.string(f.t.CpOiEB)
                })
            ]
        });
    }
    render() {
        let { defaultPaymentSourceId: e, paymentSources: t, locale: n, removing: i, submitting: s, premiumSubscriptionPaymentSourceId: a } = this.props,
            c = l()
                .values(t)
                .sort((t, n) => (t.id === e ? -1 : n.id === e ? 1 : g.default.compare(t.id, n.id))),
            d = this.state.editingPayment,
            m = c.findIndex((e) => e.id === d),
            h = c.map((t, l) =>
                (0, r.jsx)(
                    C,
                    {
                        locale: n,
                        paymentSource: t,
                        isDefault: e === t.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: t.id === a,
                        hideDivider: m === l - 1,
                        onSubmit: this.handleSubmit,
                        index: l,
                        submitting: s,
                        removing: i,
                        isEditing: d === t.id,
                        onEditClick: this.handleEditClick
                    },
                    t.id
                )
            );
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(o.FormTitle, {
                    tag: 'h1',
                    children: (0, r.jsxs)(u.Z, {
                        align: u.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(o.Tooltip, {
                                position: 'left',
                                text: f.intl.string(f.t.h6V3uL),
                                children: (e) =>
                                    (0, r.jsx)(o.LockIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: E.lockIcon,
                                        ...e
                                    })
                            }),
                            f.intl.string(f.t.W26xGR)
                        ]
                    })
                }),
                h,
                m !== c.length - 1 ? (0, r.jsx)(o.FormDivider, { className: E.__invalid_sourceDivider }) : null,
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', { editingPayment: null }),
            _(this, 'handleEditClick', async (e) => {
                try {
                    await c.lO(e), this.setState({ editingPayment: e });
                } catch (e) {}
            }),
            _(this, 'handleCancel', () => {
                this.setState({ editingPayment: null });
            }),
            _(this, 'handleDelete', async (e) => {
                try {
                    await c.xt(e), this.setState({ editingPayment: null });
                } catch (e) {}
            }),
            _(this, 'handleSubmit', async (e, t) => {
                if (null != e)
                    try {
                        await c.LI(e, t), this.setState({ editingPayment: null });
                    } catch (e) {}
            }),
            _(this, 'handlePaymentSourceAdded', async (e) => {
                await (0, m.i1)(e.id);
            }),
            _(this, 'handleAddPaymentMethod', () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 623573));
                        return (t) =>
                            (0, r.jsx)(e, {
                                ...t,
                                onAddPaymentSource: this.handlePaymentSourceAdded
                            });
                    },
                    {
                        onCloseCallback: () => {
                            (0, d.fw)();
                        },
                        onCloseRequest: x.dG4
                    }
                );
            });
    }
}
t.Z = T;
