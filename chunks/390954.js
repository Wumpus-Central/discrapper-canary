(n.d(t, { Z: () => E }), n(388685), n(642613));
var i,
    r = n(255367),
    s = n(73800),
    a = n(392711),
    l = n.n(a),
    o = n(159691),
    c = n(481060),
    d = n(355467),
    u = n(159351),
    m = n(212895),
    p = n(709054),
    g = n(156729),
    h = n(244526),
    f = n(981631),
    b = n(388032),
    x = n(797073);
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
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
class O extends (i = s.PureComponent) {
    render() {
        let { paymentSource: e, isDefault: t, isEditing: n, index: i, hideDivider: s, isForSubscription: a, locale: l, removing: d, submitting: u, onSubmit: m, onCancel: p, onDelete: f } = this.props;
        return n
            ? (0, r.jsx)(g.Z, {
                  paymentSource: e,
                  isDefault: t,
                  removing: d,
                  submitting: u,
                  locale: l,
                  isForSubscription: a,
                  onSubmit: m,
                  onCancel: p,
                  onDelete: f
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      i > 0 && !s ? (0, r.jsx)(c.$i$, { className: x.__invalid_sourceDivider }) : null,
                      (0, r.jsxs)('div', {
                          className: x.paymentSourceRow,
                          children: [
                              (0, r.jsx)(h.Z, {
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
                                  : (0, r.jsx)(o.zx, {
                                        variant: 'secondary',
                                        onClick: this.handleEditClick,
                                        size: 'sm',
                                        text: b.intl.string(b.t.bt75u7)
                                    })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        (super(...e),
            _(this, 'handleEditClick', () => {
                this.props.onEditClick(this.props.paymentSource.id);
            }));
    }
}
_(O, 'defaultProps', {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {}
});
class C extends s.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, r.jsxs)('div', {
            className: x.footer,
            children: [
                0 === Object.keys(e).length
                    ? (0, r.jsxs)('div', {
                          className: x.footerContent,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: b.intl.string(b.t.aRHpAA)
                              }),
                              (0, r.jsx)('div', {
                                  className: x.subText,
                                  children: b.intl.string(b.t.o9bOIi)
                              })
                          ]
                      })
                    : null,
                (0, r.jsx)(o.zx, {
                    onClick: this.handleAddPaymentMethod,
                    text: b.intl.string(b.t.CpOiEB)
                })
            ]
        });
    }
    render() {
        let { defaultPaymentSourceId: e, paymentSources: t, locale: n, removing: i, submitting: s, premiumSubscriptionPaymentSourceId: a } = this.props,
            o = l()
                .values(t)
                .sort((t, n) => (t.id === e ? -1 : n.id === e ? 1 : p.default.compare(t.id, n.id))),
            d = this.state.editingPayment,
            u = o.findIndex((e) => e.id === d),
            m = o.map((t, l) =>
                (0, r.jsx)(
                    O,
                    {
                        locale: n,
                        paymentSource: t,
                        isDefault: e === t.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: t.id === a,
                        hideDivider: u === l - 1,
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
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.vwX, {
                    tag: 'h1',
                    children: (0, r.jsxs)('div', {
                        className: x.titleContainer,
                        children: [
                            (0, r.jsx)(c.ua7, {
                                position: 'left',
                                text: b.intl.string(b.t.h6V3uL),
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.mBM,
                                        j(
                                            {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: x.lockIcon
                                            },
                                            e
                                        )
                                    )
                            }),
                            b.intl.string(b.t.W26xGR)
                        ]
                    })
                }),
                m,
                u !== o.length - 1 ? (0, r.jsx)(c.$i$, { className: x.__invalid_sourceDivider }) : null,
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            _(this, 'state', { editingPayment: null }),
            _(this, 'handleEditClick', async (e) => {
                try {
                    (await d.lO(e), this.setState({ editingPayment: e }));
                } catch (e) {}
            }),
            _(this, 'handleCancel', () => {
                this.setState({ editingPayment: null });
            }),
            _(this, 'handleDelete', async (e) => {
                try {
                    (await d.xt(e), this.setState({ editingPayment: null }));
                } catch (e) {}
            }),
            _(this, 'handleSubmit', async (e, t) => {
                if (null != e)
                    try {
                        (await d.LI(e, t), this.setState({ editingPayment: null }));
                    } catch (e) {}
            }),
            _(this, 'handlePaymentSourceAdded', async (e) => {
                await (0, m.i1)(e.id);
            }),
            _(this, 'handleAddPaymentMethod', () => {
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 623573));
                        return (t) => {
                            var n, i;
                            return (0, r.jsx)(
                                e,
                                ((n = j({}, t)),
                                (i = i = { onAddPaymentSource: this.handlePaymentSourceAdded }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n)
                            );
                        };
                    },
                    {
                        onCloseCallback: () => {
                            (0, u.fw)();
                        },
                        onCloseRequest: f.dG4
                    }
                );
            }));
    }
}
let E = C;
