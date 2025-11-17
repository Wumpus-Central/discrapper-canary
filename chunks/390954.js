n.d(t, { Z: () => S }), n(388685), n(642613);
var r,
    i = n(54381),
    a = n(473749),
    o = n(392711),
    s = n.n(o),
    l = n(159691),
    c = n(481060),
    u = n(355467),
    d = n(159351),
    f = n(212895),
    _ = n(709054),
    p = n(156729),
    h = n(244526),
    m = n(981631),
    g = n(388032),
    E = n(579378);
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
function v(e, t) {
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
class I extends (r = a.PureComponent) {
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            index: r,
            hideDivider: a,
            isForSubscription: o,
            locale: s,
            removing: u,
            submitting: d,
            onSubmit: f,
            onCancel: _,
            onDelete: m,
        } = this.props;
        return n
            ? (0, i.jsx)(p.Z, {
                  paymentSource: e,
                  isDefault: t,
                  removing: u,
                  submitting: d,
                  locale: s,
                  isForSubscription: o,
                  onSubmit: f,
                  onCancel: _,
                  onDelete: m,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      r > 0 && !a ? (0, i.jsx)(c.izJ, { className: E.__invalid_sourceDivider }) : null,
                      (0, i.jsxs)("div", {
                          className: E.paymentSourceRow,
                          children: [
                              (0, i.jsx)(h.Z, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: o,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              n
                                  ? null
                                  : (0, i.jsx)(l.zxk, {
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
b(I, "defaultProps", {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {},
});
class T extends a.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: E.footer,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: E.footerContent,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: g.intl.string(g.t.aRHpAB),
                              }),
                              (0, i.jsx)("div", {
                                  className: E.subText,
                                  children: g.intl.string(g.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(l.zxk, {
                    onClick: this.handleAddPaymentMethod,
                    text: g.intl.string(g.t.CpOiEO),
                }),
            ],
        });
    }
    render() {
        let {
                defaultPaymentSourceId: e,
                paymentSources: t,
                locale: n,
                removing: r,
                submitting: a,
                premiumSubscriptionPaymentSourceId: o,
            } = this.props,
            l = s()
                .values(t)
                .sort((t, n) => (t.id === e ? -1 : n.id === e ? 1 : _.default.compare(t.id, n.id))),
            u = this.state.editingPayment,
            d = l.findIndex((e) => e.id === u),
            f = l.map((t, s) =>
                (0, i.jsx)(
                    I,
                    {
                        locale: n,
                        paymentSource: t,
                        isDefault: e === t.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: t.id === o,
                        hideDivider: d === s - 1,
                        onSubmit: this.handleSubmit,
                        index: s,
                        submitting: a,
                        removing: r,
                        isEditing: u === t.id,
                        onEditClick: this.handleEditClick,
                    },
                    t.id,
                ),
            );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: [
                        (0, i.jsx)(c.mBM, {
                            size: "sm",
                            className: E.lockIcon,
                        }),
                        " ",
                        g.intl.string(g.t.W26xGQ),
                    ],
                }),
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: g.intl.string(g.t.h6V3uK),
                }),
                f,
                d !== l.length - 1 ? (0, i.jsx)(c.izJ, { className: E.__invalid_sourceDivider }) : null,
                this.renderFooter(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", { editingPayment: null }),
            b(this, "handleEditClick", async (e) => {
                try {
                    await u.lO(e), this.setState({ editingPayment: e });
                } catch (e) {}
            }),
            b(this, "handleCancel", () => {
                this.setState({ editingPayment: null });
            }),
            b(this, "handleDelete", async (e) => {
                try {
                    await u.xt(e), this.setState({ editingPayment: null });
                } catch (e) {}
            }),
            b(this, "handleSubmit", async (e, t) => {
                if (null != e)
                    try {
                        await u.LI(e, t), this.setState({ editingPayment: null });
                    } catch (e) {}
            }),
            b(this, "handlePaymentSourceAdded", async (e) => {
                await (0, f.i1)(e.id);
            }),
            b(this, "handleAddPaymentMethod", () => {
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 623573));
                        return (t) => (0, i.jsx)(e, v(y({}, t), { onAddPaymentSource: this.handlePaymentSourceAdded }));
                    },
                    {
                        onCloseCallback: () => {
                            (0, d.fw)();
                        },
                        onCloseRequest: m.dG4,
                    },
                );
            });
    }
}
let S = T;
