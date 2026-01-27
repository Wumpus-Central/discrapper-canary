n.d(t, {
    A: () => N,
}),
    n(896048),
    n(747238);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    c = n(311907),
    d = n(435371),
    u = n(732955),
    _ = n(397927),
    p = n(73153),
    m = n(384904),
    g = n(256006),
    A = n(202613),
    f = n(615405),
    h = n(403362),
    b = n(450233),
    E = n(849918),
    x = n(219887),
    O = n(985018),
    C = n(670566);

function I(e, t, n) {
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

function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = "isDefault";
class v extends (r = l.PureComponent) {
    componentWillUnmount() {
        p.h.wait(() => {
            (0, m.ey)(), (0, m.tc)();
        });
    }
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, i.jsx)("div", {
                      className: C.zc,
                      children: (0, i.jsx)(_.wx6, {
                          type: "critical",
                          children: t.message,
                      }),
                  })
                : null
            : (0, i.jsx)("div", {
                  className: C.zc,
                  children: (0, i.jsx)(_.wx6, {
                      type: "critical",
                      children: e.message,
                  }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            r = (0, g.g)(n);
        return (0, i.jsxs)("div", {
            className: C.yV,
            children: [
                (0, i.jsx)(_.Text, {
                    className: C.bV,
                    variant: "text-sm/normal",
                    children: O.intl.string(O.t["50Auo2"]),
                }),
                (0, i.jsx)(
                    b.Ay,
                    S(T({}, e), {
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
            className: C.yV,
            children: [
                (0, i.jsx)(_.Text, {
                    className: C.bV,
                    variant: "text-sm/normal",
                    children: O.intl.string(O.t.Fo2YP7),
                }),
                (0, i.jsx)(E.A, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: r, expirationValid: l } = this.state;
        return (0, i.jsx)("div", {
            className: C.AU,
            children: (0, i.jsxs)(_.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, i.jsx)(u.e2v, {
                        children: (0, i.jsxs)("div", {
                            className: C.lH,
                            children: [
                                n
                                    ? (0, i.jsx)(d.m_, {
                                          text: O.intl.string(O.t["v6/z28"]),
                                          children: (0, i.jsx)("div", {
                                              "aria-hidden": !0,
                                              className: C.dm,
                                          }),
                                      })
                                    : null,
                                (0, i.jsx)(u.$nd, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: o.Fr ? "sm" : "md",
                                    text: o.Fr ? O.intl.string(O.t.oyYWHE) : O.intl.string(O.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)(u.e2v, {
                        children: [
                            (0, i.jsx)(u.$nd, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: o.Fr ? "sm" : "md",
                                text: O.intl.string(O.t["ETE/oC"]),
                            }),
                            (0, i.jsx)(u.$nd, {
                                loading: e,
                                disabled: !r || t || !l,
                                type: "submit",
                                variant: "active",
                                size: o.Fr ? "sm" : "md",
                                text: O.intl.string(O.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: r, isForSubscription: l } = this.props,
            { isDefault: s } = this.state,
            o = e instanceof A.SJ;
        return (0, i.jsx)(_.ZpM, {
            editable: !0,
            className: a()(C.Nr, r),
            children: (0, i.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, i.jsxs)("div", {
                        className: C.__invalid_paymentSection,
                        children: [
                            (0, i.jsx)(x.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, i.jsx)("div", {
                                      className: C.Um,
                                      children: O.intl.string(O.t["3R0U0b"]),
                                  })
                                : null,
                            (0, i.jsx)("div", {
                                className: C.Sv,
                                children: o
                                    ? O.intl.format(O.t.w9WkBl, {
                                          paypalURL: "https://www.paypal.com",
                                      })
                                    : O.intl.string(O.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, i.jsx)("div", {
                        className: C.D5,
                        children: (0, i.jsx)(_.Checkbox, {
                            value: j,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, j),
                            label: O.intl.string(O.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, i.jsx)(_.cGx, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
    constructor(e) {
        var t, n, r, i, l, s, a;
        super(e),
            I(this, "handleSubmit", (e) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    0 === Object.values(this.state.dirtyFields).filter(h.Vq).length)
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
            I(this, "handleCancel", () => {
                this.props.onCancel();
            }),
            I(this, "handleDelete", () => {
                let { onDelete: e, paymentSource: t } = this.props;
                e(t.id);
            }),
            I(this, "handleAddressUpdate", (e, t, n) => {
                this.setState({
                    billingAddress: e,
                    billingAddressValid: t,
                    dirtyFields: S(T({}, this.state.dirtyFields), {
                        billingAddress: n,
                    }),
                });
            }),
            I(this, "handleExpirationDateUpdate", (e, t) => {
                let { expirationDate: n } = e;
                if (
                    (this.setState({
                        expirationValid: t,
                    }),
                    null == n || "" === n)
                )
                    return;
                let [r, i] = n.split("/");
                this.handleFieldChange(Number(r), "expiresMonth"),
                    this.handleFieldChange(
                        Number("".concat(new Date().getFullYear().toString().slice(0, 2)).concat(i)),
                        "expiresYear",
                    );
            }),
            I(this, "handleFieldChange", (e, t) => {
                null != t &&
                    this.setState({
                        [t]: e,
                        dirtyFields: S(T({}, this.state.dirtyFields), {
                            [t]: !0,
                        }),
                    });
            });
        const { paymentSource: o, isDefault: c } = e,
            d = o.billingAddress;
        this.state = {
            billingAddress: {
                name: null != (t = d.name) ? t : "",
                line1: null != (n = d.line1) ? n : "",
                line2: null != (r = d.line2) ? r : "",
                country: null != (i = d.country) ? i : "",
                state: null != (l = d.state) ? l : "",
                city: null != (s = d.city) ? s : "",
                postalCode: null != (a = d.postalCode) ? a : "",
            },
            expiresMonth: o instanceof A.YS ? o.expiresMonth : void 0,
            expiresYear: o instanceof A.YS ? o.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: c,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
}
I(v, "defaultProps", {
    onDelete: () => {},
    onSubmit: () => {},
    onCancel: () => {},
});
let N = c.Ay.connectStores([f.A], () => ({
    updateError: f.A.editSourceError,
    removeError: f.A.removeSourceError,
}))(v);
