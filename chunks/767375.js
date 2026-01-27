n.d(t, {
    A: () => O,
}),
    n(896048),
    n(638769);
var r,
    i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(732955),
    c = n(397927),
    d = n(384904),
    u = n(391048),
    _ = n(83617),
    p = n(661191),
    m = n(533808),
    g = n(219887),
    A = n(652215),
    f = n(985018),
    h = n(228851);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class E extends (r = l.PureComponent) {
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            index: r,
            hideDivider: l,
            isForSubscription: s,
            locale: a,
            removing: d,
            submitting: u,
            onSubmit: _,
            onCancel: p,
            onDelete: A,
        } = this.props;
        return n
            ? (0, i.jsx)(m.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: d,
                  submitting: u,
                  locale: a,
                  isForSubscription: s,
                  onSubmit: _,
                  onCancel: p,
                  onDelete: A,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      r > 0 && !l
                          ? (0, i.jsx)(c.cGx, {
                                className: h.__invalid_sourceDivider,
                            })
                          : null,
                      (0, i.jsxs)("div", {
                          className: h.Yb,
                          children: [
                              (0, i.jsx)(g.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: a,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              n
                                  ? null
                                  : (0, i.jsx)(o.$nd, {
                                        variant: "secondary",
                                        onClick: this.handleEditClick,
                                        size: "sm",
                                        text: f.intl.string(f.t.bt75uw),
                                    }),
                          ],
                      }),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            b(this, "handleEditClick", () => {
                this.props.onEditClick(this.props.paymentSource.id);
            });
    }
}
b(E, "defaultProps", {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {},
});
class x extends l.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: h.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: h.z8,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: f.intl.string(f.t.aRHpAB),
                              }),
                              (0, i.jsx)("div", {
                                  className: h.Sv,
                                  children: f.intl.string(f.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(o.$nd, {
                    onClick: this.handleAddPaymentMethod,
                    text: f.intl.string(f.t.CpOiEO),
                }),
            ],
        });
    }
    render() {
        let {
                showHeader: e,
                defaultPaymentSourceId: t,
                paymentSources: n,
                locale: r,
                removing: l,
                submitting: s,
                premiumSubscriptionPaymentSourceId: o,
            } = this.props,
            d = a()
                .values(n)
                .sort((e, n) => (e.id === t ? -1 : n.id === t ? 1 : p.default.compare(e.id, n.id))),
            u = this.state.editingPayment,
            _ = d.findIndex((e) => e.id === u),
            m = d.map((e, n) =>
                (0, i.jsx)(
                    E,
                    {
                        locale: r,
                        paymentSource: e,
                        isDefault: t === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === o,
                        hideDivider: _ === n - 1,
                        onSubmit: this.handleSubmit,
                        index: n,
                        submitting: s,
                        removing: l,
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
                              (0, i.jsxs)(c.Heading, {
                                  variant: "heading-lg/semibold",
                                  children: [
                                      (0, i.jsx)(c.XAi, {
                                          size: "sm",
                                          className: h.hz,
                                      }),
                                      " ",
                                      f.intl.string(f.t.W26xGQ),
                                  ],
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: f.intl.string(f.t.h6V3uK),
                              }),
                          ],
                      })
                    : null,
                m,
                _ !== d.length - 1 ? (0, i.jsx)(c.cGx, {}) : null,
                this.renderFooter(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", {
                editingPayment: null,
            }),
            b(this, "handleEditClick", async (e) => {
                try {
                    await d.Gr(e),
                        this.setState({
                            editingPayment: e,
                        });
                } catch (e) {}
            }),
            b(this, "handleCancel", () => {
                this.setState({
                    editingPayment: null,
                });
            }),
            b(this, "handleDelete", async (e) => {
                try {
                    await d.JQ(e),
                        this.setState({
                            editingPayment: null,
                        });
                } catch (e) {}
            }),
            b(this, "handleSubmit", async (e, t) => {
                if (null != e)
                    try {
                        await d.Ps(e, t),
                            this.setState({
                                editingPayment: null,
                            });
                    } catch (e) {}
            }),
            b(this, "handlePaymentSourceAdded", async (e) => {
                await (0, _.c_)(e.id);
            }),
            b(this, "handleAddPaymentMethod", () => {
                (0, c.mMO)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                        return (t) => {
                            var n, r;
                            return (0, i.jsx)(
                                e,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                b(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (r = r =
                                    {
                                        onAddPaymentSource: this.handlePaymentSourceAdded,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                n),
                            );
                        };
                    },
                    {
                        onCloseCallback: () => {
                            (0, u.ET)();
                        },
                        onCloseRequest: A.tEg,
                    },
                );
            });
    }
}
let O = x;
