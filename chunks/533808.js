n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(607399),
    o = n(311907),
    d = n(990078),
    u = n(825484),
    c = n(821609),
    g = n(683071),
    m = n(834730),
    _ = n(331322),
    A = n(359778),
    h = n(150934),
    p = n(404778),
    x = n(73153),
    E = n(323082),
    T = n(256006),
    S = n(202613),
    f = n(615405),
    b = n(403362),
    C = n(450233),
    v = n(849918),
    N = n(219887),
    I = n(985018),
    y = n(276589);
let j = "isDefault";
class O extends s.PureComponent {
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
            expiresMonth: t instanceof S.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof S.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        x.h.wait(() => {
            (0, E.ey)(), (0, E.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(b.Vq).length))
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
                      className: y.zc,
                      children: (0, i.jsx)(g.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, i.jsx)("div", {
                  className: y.zc,
                  children: (0, i.jsx)(g.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            s = (0, T.g)(n);
        return (0, i.jsxs)("div", {
            className: y.yV,
            children: [
                (0, i.jsx)(m.E, { className: y.bV, variant: "text-sm/normal", children: I.intl.string(I.t["50Auo2"]) }),
                (0, i.jsx)(C.Ay, {
                    ...e,
                    mode: C.Ay.Modes.EDIT,
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
            className: y.yV,
            children: [
                (0, i.jsx)(m.E, { className: y.bV, variant: "text-sm/normal", children: I.intl.string(I.t.Fo2YP7) }),
                (0, i.jsx)(v.A, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: s, expirationValid: l } = this.state;
        return (0, i.jsx)("div", {
            className: y.AU,
            children: (0, i.jsxs)(_.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, i.jsx)(u.e, {
                        children: (0, i.jsxs)("div", {
                            className: y.lH,
                            children: [
                                n
                                    ? (0, i.jsx)(d.m, {
                                          text: I.intl.string(I.t["v6/z28"]),
                                          children: (0, i.jsx)("div", { "aria-hidden": !0, className: y.dm }),
                                      })
                                    : null,
                                (0, i.jsx)(c.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: r.Fr ? "sm" : "md",
                                    text: r.Fr ? I.intl.string(I.t.oyYWHE) : I.intl.string(I.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)(u.e, {
                        children: [
                            (0, i.jsx)(c.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: r.Fr ? "sm" : "md",
                                text: I.intl.string(I.t["ETE/oC"]),
                            }),
                            (0, i.jsx)(c.$, {
                                loading: e,
                                disabled: !s || t || !l,
                                type: "submit",
                                variant: "active",
                                size: r.Fr ? "sm" : "md",
                                text: I.intl.string(I.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: s, isForSubscription: l } = this.props,
            { isDefault: r } = this.state,
            o = e instanceof S.SJ;
        return (0, i.jsx)(A.Z, {
            editable: !0,
            className: a()(y.Nr, s),
            children: (0, i.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, i.jsxs)("div", {
                        className: y.__invalid_paymentSection,
                        children: [
                            (0, i.jsx)(N.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, i.jsx)("div", { className: y.Um, children: I.intl.string(I.t["3R0U0b"]) })
                                : null,
                            (0, i.jsx)("div", {
                                className: y.Sv,
                                children: o
                                    ? I.intl.format(I.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : I.intl.string(I.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, i.jsx)("div", {
                        className: y.D5,
                        children: (0, i.jsx)(h.S, {
                            value: j,
                            checked: r,
                            onChange: (e) => this.handleFieldChange(e, j),
                            label: I.intl.string(I.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, i.jsx)(p.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let R = o.Ay.connectStores([f.A], () => ({ updateError: f.A.editSourceError, removeError: f.A.removeSourceError }))(O);
