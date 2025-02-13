n.d(t, { Z: () => I }), n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(481060),
    c = n(355467),
    d = n(159351),
    u = n(600164),
    h = n(212895),
    m = n(709054),
    g = n(156729),
    x = n(244526),
    _ = n(981631),
    p = n(388032),
    E = n(5040);
function C(e, t, n) {
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
class N extends (i = l.PureComponent) {
    render() {
        let { paymentSource: e, isDefault: t, isEditing: n, index: i, hideDivider: l, isForSubscription: r, locale: a, removing: c, submitting: d, onSubmit: h, onCancel: m, onDelete: _ } = this.props;
        return n
            ? (0, s.jsx)(g.Z, {
                  paymentSource: e,
                  isDefault: t,
                  removing: c,
                  submitting: d,
                  locale: a,
                  isForSubscription: r,
                  onSubmit: h,
                  onCancel: m,
                  onDelete: _
              })
            : (0, s.jsxs)('div', {
                  className: E.__invalid_paymentSourceItem,
                  children: [
                      i > 0 && !l ? (0, s.jsx)(o.$i$, { className: E.__invalid_sourceDivider }) : null,
                      (0, s.jsxs)(u.Z, {
                          align: u.Z.Align.CENTER,
                          justify: u.Z.Justify.BETWEEN,
                          className: E.paymentSourceRow,
                          children: [
                              (0, s.jsx)(x.Z, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: r,
                                  locale: a,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0
                              }),
                              n
                                  ? null
                                  : (0, s.jsx)(o.zxk, {
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: this.handleEditClick,
                                        size: o.zxk.Sizes.SMALL,
                                        children: p.intl.string(p.t.bt75u7)
                                    })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            C(this, 'handleEditClick', () => {
                this.props.onEditClick(this.props.paymentSource.id);
            });
    }
}
C(N, 'defaultProps', {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {}
});
class f extends l.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, s.jsxs)(u.Z, {
            justify: u.Z.Justify.END,
            className: E.footer,
            children: [
                0 === Object.keys(e).length
                    ? (0, s.jsxs)(u.Z.Child, {
                          children: [
                              (0, s.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  children: p.intl.string(p.t.aRHpAA)
                              }),
                              (0, s.jsx)('div', {
                                  className: E.subText,
                                  children: p.intl.string(p.t.o9bOIi)
                              })
                          ]
                      })
                    : null,
                (0, s.jsx)(o.zxk, {
                    onClick: this.handleAddPaymentMethod,
                    children: p.intl.string(p.t.CpOiEB)
                })
            ]
        });
    }
    render() {
        let { defaultPaymentSourceId: e, paymentSources: t, locale: n, removing: i, submitting: l, premiumSubscriptionPaymentSourceId: r } = this.props,
            c = a()
                .values(t)
                .sort((t, n) => (t.id === e ? -1 : n.id === e ? 1 : m.default.compare(t.id, n.id))),
            d = this.state.editingPayment,
            h = c.findIndex((e) => e.id === d),
            g = c.map((t, a) =>
                (0, s.jsx)(
                    N,
                    {
                        locale: n,
                        paymentSource: t,
                        isDefault: e === t.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: t.id === r,
                        hideDivider: h === a - 1,
                        onSubmit: this.handleSubmit,
                        index: a,
                        submitting: l,
                        removing: i,
                        isEditing: d === t.id,
                        onEditClick: this.handleEditClick
                    },
                    t.id
                )
            );
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(o.vwX, {
                    tag: 'h1',
                    children: (0, s.jsxs)(u.Z, {
                        align: u.Z.Align.CENTER,
                        children: [
                            (0, s.jsx)(o.ua7, {
                                position: 'left',
                                text: p.intl.string(p.t.h6V3uL),
                                children: (e) =>
                                    (0, s.jsx)(o.mBM, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: E.lockIcon,
                                        ...e
                                    })
                            }),
                            p.intl.string(p.t.W26xGR)
                        ]
                    })
                }),
                g,
                h !== c.length - 1 ? (0, s.jsx)(o.$i$, { className: E.__invalid_sourceDivider }) : null,
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'state', { editingPayment: null }),
            C(this, 'handleEditClick', async (e) => {
                try {
                    await c.lO(e), this.setState({ editingPayment: e });
                } catch (e) {}
            }),
            C(this, 'handleCancel', () => {
                this.setState({ editingPayment: null });
            }),
            C(this, 'handleDelete', async (e) => {
                try {
                    await c.xt(e), this.setState({ editingPayment: null });
                } catch (e) {}
            }),
            C(this, 'handleSubmit', async (e, t) => {
                if (null != e)
                    try {
                        await c.LI(e, t), this.setState({ editingPayment: null });
                    } catch (e) {}
            }),
            C(this, 'handlePaymentSourceAdded', async (e) => {
                await (0, h.i1)(e.id);
            }),
            C(this, 'handleAddPaymentMethod', () => {
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 623573));
                        return (t) =>
                            (0, s.jsx)(e, {
                                ...t,
                                onAddPaymentSource: this.handlePaymentSourceAdded
                            });
                    },
                    {
                        onCloseCallback: () => {
                            (0, d.fw)();
                        },
                        onCloseRequest: _.dG4
                    }
                );
            });
    }
}
let I = f;
