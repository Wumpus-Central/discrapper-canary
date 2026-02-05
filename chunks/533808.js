n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(607399),
    o = n(311907),
    c = n(435371),
    d = n(732955),
    u = n(397927),
    _ = n(73153),
    m = n(384904),
    A = n(256006),
    g = n(202613),
    E = n(615405),
    h = n(403362),
    p = n(450233),
    C = n(849918),
    x = n(219887),
    T = n(985018),
    I = n(670566);
let S = "isDefault";
class f extends s.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        const { paymentSource: t, isDefault: n } = e,
            i = t.billingAddress;
        this.state = {
            billingAddress: {
                name: i.name ?? "",
                line1: i.line1 ?? "",
                line2: i.line2 ?? "",
                country: i.country ?? "",
                state: i.state ?? "",
                city: i.city ?? "",
                postalCode: i.postalCode ?? "",
            },
            expiresMonth: t instanceof g.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof g.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        _.h.wait(() => {
            (0, m.ey)(), (0, m.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(h.Vq).length))
            this.props.onCancel();
        else {
            let { billingAddress: e, isDefault: t, expiresMonth: n, expiresYear: i } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: n,
                expiresYear: i,
                isDefault: t,
            });
        }
    };
    handleCancel = () => {
        this.props.onCancel();
    };
    handleDelete = () => {
        let { onDelete: e, paymentSource: t } = this.props;
        e(t.id);
    };
    handleAddressUpdate = (e, t, n) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: { ...this.state.dirtyFields, billingAddress: n },
        });
    };
    handleExpirationDateUpdate = (e, t) => {
        let { expirationDate: n } = e;
        if ((this.setState({ expirationValid: t }), null == n || "" === n)) return;
        let [i, s] = n.split("/");
        this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${s}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, i.jsx)("div", {
                      className: I.zc,
                      children: (0, i.jsx)(u.wx6, { type: "critical", children: t.message }),
                  })
                : null
            : (0, i.jsx)("div", {
                  className: I.zc,
                  children: (0, i.jsx)(u.wx6, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            s = (0, A.g)(n);
        return (0, i.jsxs)("div", {
            className: I.yV,
            children: [
                (0, i.jsx)(u.Text, {
                    className: I.bV,
                    variant: "text-sm/normal",
                    children: T.intl.string(T.t["50Auo2"]),
                }),
                (0, i.jsx)(p.Ay, {
                    ...e,
                    mode: p.Ay.Modes.EDIT,
                    layout: s,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t,
                }),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let n = `${e.toString().padStart(2, "0")}/${t.toString().padStart(2, "0").slice(-2)}`;
        return (0, i.jsxs)("div", {
            className: I.yV,
            children: [
                (0, i.jsx)(u.Text, { className: I.bV, variant: "text-sm/normal", children: T.intl.string(T.t.Fo2YP7) }),
                (0, i.jsx)(C.A, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: s, expirationValid: r } = this.state;
        return (0, i.jsx)("div", {
            className: I.AU,
            children: (0, i.jsxs)(u.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, i.jsx)(d.e2v, {
                        children: (0, i.jsxs)("div", {
                            className: I.lH,
                            children: [
                                n
                                    ? (0, i.jsx)(c.m_, {
                                          text: T.intl.string(T.t["v6/z28"]),
                                          children: (0, i.jsx)("div", { "aria-hidden": !0, className: I.dm }),
                                      })
                                    : null,
                                (0, i.jsx)(d.$nd, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: l.Fr ? "sm" : "md",
                                    text: l.Fr ? T.intl.string(T.t.oyYWHE) : T.intl.string(T.t.yk5qfb),
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
                                text: T.intl.string(T.t["ETE/oC"]),
                            }),
                            (0, i.jsx)(d.$nd, {
                                loading: e,
                                disabled: !s || t || !r,
                                type: "submit",
                                variant: "active",
                                size: l.Fr ? "sm" : "md",
                                text: T.intl.string(T.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: s, isForSubscription: r } = this.props,
            { isDefault: l } = this.state,
            o = e instanceof g.SJ;
        return (0, i.jsx)(u.ZpM, {
            editable: !0,
            className: a()(I.Nr, s),
            children: (0, i.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, i.jsxs)("div", {
                        className: I.__invalid_paymentSection,
                        children: [
                            (0, i.jsx)(x.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: r,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, i.jsx)("div", { className: I.Um, children: T.intl.string(T.t["3R0U0b"]) })
                                : null,
                            (0, i.jsx)("div", {
                                className: I.Sv,
                                children: o
                                    ? T.intl.format(T.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : T.intl.string(T.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, i.jsx)("div", {
                        className: I.D5,
                        children: (0, i.jsx)(u.Checkbox, {
                            value: S,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, S),
                            label: T.intl.string(T.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, i.jsx)(u.cGx, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let N = o.Ay.connectStores([E.A], () => ({ updateError: E.A.editSourceError, removeError: E.A.removeSourceError }))(f);
