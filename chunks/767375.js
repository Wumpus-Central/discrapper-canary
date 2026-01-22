n.d(t, { A: () => I }), n(896048), n(638769);
var r,
    i = n(627968),
    a = n(64700),
    s = n(735438),
    o = n.n(s),
    l = n(732955),
    c = n(397927),
    u = n(384904),
    d = n(391048),
    f = n(83617),
    p = n(661191),
    _ = n(533808),
    h = n(219887),
    m = n(652215),
    g = n(985018),
    E = n(228851);
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
function y(e) {
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
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class v extends (r = a.PureComponent) {
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            index: r,
            hideDivider: a,
            isForSubscription: s,
            locale: o,
            removing: u,
            submitting: d,
            onSubmit: f,
            onCancel: p,
            onDelete: m,
        } = this.props;
        return n
            ? (0, i.jsx)(_.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: u,
                  submitting: d,
                  locale: o,
                  isForSubscription: s,
                  onSubmit: f,
                  onCancel: p,
                  onDelete: m,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      r > 0 && !a ? (0, i.jsx)(c.cGx, { className: E.__invalid_sourceDivider }) : null,
                      (0, i.jsxs)("div", {
                          className: E.Yb,
                          children: [
                              (0, i.jsx)(h.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: o,
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
                                        text: g.intl.string(g.t.bt75uw),
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
b(v, "defaultProps", {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {},
});
class S extends a.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: E.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: E.z8,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: g.intl.string(g.t.aRHpAB),
                              }),
                              (0, i.jsx)("div", {
                                  className: E.Sv,
                                  children: g.intl.string(g.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(l.$nd, {
                    onClick: this.handleAddPaymentMethod,
                    text: g.intl.string(g.t.CpOiEO),
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
                removing: a,
                submitting: s,
                premiumSubscriptionPaymentSourceId: l,
            } = this.props,
            u = o()
                .values(n)
                .sort((e, n) => (e.id === t ? -1 : n.id === t ? 1 : p.default.compare(e.id, n.id))),
            d = this.state.editingPayment,
            f = u.findIndex((e) => e.id === d),
            _ = u.map((e, n) =>
                (0, i.jsx)(
                    v,
                    {
                        locale: r,
                        paymentSource: e,
                        isDefault: t === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === l,
                        hideDivider: f === n - 1,
                        onSubmit: this.handleSubmit,
                        index: n,
                        submitting: s,
                        removing: a,
                        isEditing: d === e.id,
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
                                          className: E.hz,
                                      }),
                                      " ",
                                      g.intl.string(g.t.W26xGQ),
                                  ],
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: g.intl.string(g.t.h6V3uK),
                              }),
                          ],
                      })
                    : null,
                _,
                f !== u.length - 1 ? (0, i.jsx)(c.cGx, {}) : null,
                this.renderFooter(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", { editingPayment: null }),
            b(this, "handleEditClick", async (e) => {
                try {
                    await u.Gr(e), this.setState({ editingPayment: e });
                } catch (e) {}
            }),
            b(this, "handleCancel", () => {
                this.setState({ editingPayment: null });
            }),
            b(this, "handleDelete", async (e) => {
                try {
                    await u.JQ(e), this.setState({ editingPayment: null });
                } catch (e) {}
            }),
            b(this, "handleSubmit", async (e, t) => {
                if (null != e)
                    try {
                        await u.Ps(e, t), this.setState({ editingPayment: null });
                    } catch (e) {}
            }),
            b(this, "handlePaymentSourceAdded", async (e) => {
                await (0, f.c_)(e.id);
            }),
            b(this, "handleAddPaymentMethod", () => {
                (0, c.mMO)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                        return (t) => (0, i.jsx)(e, A(y({}, t), { onAddPaymentSource: this.handlePaymentSourceAdded }));
                    },
                    {
                        onCloseCallback: () => {
                            (0, d.ET)();
                        },
                        onCloseRequest: m.tEg,
                    },
                );
            });
    }
}
let I = S;
