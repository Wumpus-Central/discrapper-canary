n.d(t, { A: () => P }), n(896048), n(747238);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(607399),
    c = n(311907),
    u = n(435371),
    d = n(732955),
    f = n(397927),
    p = n(73153),
    _ = n(384904),
    h = n(256006),
    m = n(202613),
    g = n(615405),
    E = n(403362),
    b = n(450233),
    y = n(849918),
    O = n(219887),
    A = n(985018),
    v = n(670566);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = "https://www.paypal.com",
    R = "isDefault";
class w extends (r = a.PureComponent) {
    componentWillUnmount() {
        p.h.wait(() => {
            (0, _.ey)(), (0, _.tc)();
        });
    }
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, i.jsx)("div", {
                      className: v.zc,
                      children: (0, i.jsx)(f.wx6, {
                          type: "critical",
                          children: t.message,
                      }),
                  })
                : null
            : (0, i.jsx)("div", {
                  className: v.zc,
                  children: (0, i.jsx)(f.wx6, {
                      type: "critical",
                      children: e.message,
                  }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            r = (0, h.g)(n);
        return (0, i.jsxs)("div", {
            className: v.yV,
            children: [
                (0, i.jsx)(f.Text, {
                    className: v.bV,
                    variant: "text-sm/normal",
                    children: A.intl.string(A.t["50Auo2"]),
                }),
                (0, i.jsx)(
                    b.Ay,
                    C(I({}, e), {
                        mode: b.Ay.Modes.EDIT,
                        layout: r,
                        onBillingAddressChange: this.handleAddressUpdate,
                        error: t,
                    }),
                ),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let n = "".concat(e.toString().padStart(2, "0"), "/").concat(t.toString().padStart(2, "0").slice(-2));
        return (0, i.jsxs)("div", {
            className: v.yV,
            children: [
                (0, i.jsx)(f.Text, {
                    className: v.bV,
                    variant: "text-sm/normal",
                    children: A.intl.string(A.t.Fo2YP7),
                }),
                (0, i.jsx)(y.A, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: r, expirationValid: a } = this.state;
        return (0, i.jsx)("div", {
            className: v.AU,
            children: (0, i.jsxs)(f.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, i.jsx)(d.e2v, {
                        children: (0, i.jsxs)("div", {
                            className: v.lH,
                            children: [
                                n
                                    ? (0, i.jsx)(u.m_, {
                                          text: A.intl.string(A.t["v6/z28"]),
                                          children: (0, i.jsx)("div", {
                                              "aria-hidden": !0,
                                              className: v.dm,
                                          }),
                                      })
                                    : null,
                                (0, i.jsx)(d.$nd, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: l.Fr ? "sm" : "md",
                                    text: l.Fr ? A.intl.string(A.t.oyYWHE) : A.intl.string(A.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)(d.e2v, {
                        children: [
                            (0, i.jsx)(d.$nd, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: l.Fr ? "sm" : "md",
                                text: A.intl.string(A.t["ETE/oC"]),
                            }),
                            (0, i.jsx)(d.$nd, {
                                loading: e,
                                disabled: !r || t || !a,
                                type: "submit",
                                variant: "active",
                                size: l.Fr ? "sm" : "md",
                                text: A.intl.string(A.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: r, isForSubscription: a } = this.props,
            { isDefault: s } = this.state,
            l = e instanceof m.SJ;
        return (0, i.jsx)(f.ZpM, {
            editable: !0,
            className: o()(v.Nr, r),
            children: (0, i.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, i.jsxs)("div", {
                        className: v.__invalid_paymentSection,
                        children: [
                            (0, i.jsx)(O.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: a,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, i.jsx)("div", {
                                      className: v.Um,
                                      children: A.intl.string(A.t["3R0U0b"]),
                                  })
                                : null,
                            (0, i.jsx)("div", {
                                className: v.Sv,
                                children: l ? A.intl.format(A.t.w9WkBl, { paypalURL: N }) : A.intl.string(A.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, i.jsx)("div", {
                        className: v.D5,
                        children: (0, i.jsx)(f.Checkbox, {
                            value: R,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, R),
                            label: A.intl.string(A.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, i.jsx)(f.cGx, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
    constructor(e) {
        var t, n, r, i, a, s, o;
        super(e),
            S(this, "handleSubmit", (e) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    0 === Object.values(this.state.dirtyFields).filter(E.Vq).length)
                )
                    this.props.onCancel();
                else {
                    let { billingAddress: e, isDefault: t, expiresMonth: n, expiresYear: r } = this.state;
                    this.props.onSubmit(this.props.paymentSource.id, {
                        billingAddress: e,
                        expiresMonth: n,
                        expiresYear: r,
                        isDefault: t,
                    });
                }
            }),
            S(this, "handleCancel", () => {
                this.props.onCancel();
            }),
            S(this, "handleDelete", () => {
                let { onDelete: e, paymentSource: t } = this.props;
                e(t.id);
            }),
            S(this, "handleAddressUpdate", (e, t, n) => {
                this.setState({
                    billingAddress: e,
                    billingAddressValid: t,
                    dirtyFields: C(I({}, this.state.dirtyFields), { billingAddress: n }),
                });
            }),
            S(this, "handleExpirationDateUpdate", (e, t) => {
                let { expirationDate: n } = e;
                if ((this.setState({ expirationValid: t }), null == n || "" === n)) return;
                let [r, i] = n.split("/");
                this.handleFieldChange(Number(r), "expiresMonth"),
                    this.handleFieldChange(
                        Number("".concat(new Date().getFullYear().toString().slice(0, 2)).concat(i)),
                        "expiresYear",
                    );
            }),
            S(this, "handleFieldChange", (e, t) => {
                null != t &&
                    this.setState({
                        [t]: e,
                        dirtyFields: C(I({}, this.state.dirtyFields), { [t]: !0 }),
                    });
            });
        const { paymentSource: l, isDefault: c } = e,
            u = l.billingAddress;
        this.state = {
            billingAddress: {
                name: null != (t = u.name) ? t : "",
                line1: null != (n = u.line1) ? n : "",
                line2: null != (r = u.line2) ? r : "",
                country: null != (i = u.country) ? i : "",
                state: null != (a = u.state) ? a : "",
                city: null != (s = u.city) ? s : "",
                postalCode: null != (o = u.postalCode) ? o : "",
            },
            expiresMonth: l instanceof m.YS ? l.expiresMonth : void 0,
            expiresYear: l instanceof m.YS ? l.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: c,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
}
S(w, "defaultProps", {
    onDelete: () => {},
    onSubmit: () => {},
    onCancel: () => {},
});
let P = c.Ay.connectStores([g.A], () => ({
    updateError: g.A.editSourceError,
    removeError: g.A.removeSourceError,
}))(w);
