n.d(t, { Z: () => E }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(217986),
    l = n(755721),
    c = n(600164),
    u = n(259580),
    d = n(317175),
    f = n(388032),
    _ = n(577216),
    p = n(285236),
    h = n(10198);
function m(e, t, n) {
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
class g extends i.PureComponent {
    render() {
        let { countryCode: e, phone: t, open: n } = this.state,
            { className: i, submitting: a } = this.props,
            [, s] = e.split("+");
        return (0, r.jsxs)(c.Z, {
            className: o()(_.phoneField, p.elevationLow, i),
            align: c.Z.Align.CENTER,
            grow: 0,
            children: [
                (0, r.jsxs)(l.zx, {
                    size: l.Ph.SMALL,
                    className: _.countryButton,
                    color: l.Tt.PRIMARY,
                    innerClassName: _.countryButtonInner,
                    onClick: this.handleTogglePopout,
                    children: [
                        (0, r.jsxs)(c.Z, {
                            className: o()(_.countryCodeContainer, h.marginReset),
                            justify: c.Z.Justify.CENTER,
                            children: [
                                (0, r.jsx)("div", {
                                    className: _.plusSign,
                                    children: "+",
                                }),
                                (0, r.jsx)("div", {
                                    className: _.countryCode,
                                    children: s,
                                }),
                            ],
                        }),
                        (0, r.jsx)(u.Z, {
                            expanded: n,
                            width: 16,
                            height: 16,
                        }),
                    ],
                }),
                (0, r.jsx)("input", {
                    "aria-label": f.intl.string(f.t["64bX0N"]),
                    className: _.inputField,
                    value: t,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    autoFocus: !0,
                }),
                (0, r.jsx)(l.zx, {
                    className: _.sendButton,
                    size: l.Ph.SMALL,
                    submitting: a,
                    onClick: this.handleSubmit,
                    children: f.intl.string(f.t.TXNS7e),
                }),
                n ? (0, r.jsx)(d.Z, { onClick: this.handleClick }) : null,
            ],
        });
    }
    closePopout() {
        this.state.open && this.setState({ open: !1 });
    }
    constructor(e) {
        super(e),
            m(this, "handleChange", (e) => {
                this.closePopout(), this.setState({ phone: e.currentTarget.value });
            }),
            m(this, "handleKeyPress", (e) => {
                this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            m(this, "handleSubmit", () => {
                let { onSubmit: e, submitting: t } = this.props,
                    { countryCode: n, phone: r } = this.state;
                t || null == e || e("".concat(n).concat(r));
            }),
            m(this, "handleTogglePopout", () => {
                this.setState({ open: !this.state.open });
            }),
            m(this, "handleClick", (e) => {
                let [t, n] = e.code.split(" ");
                this.setState({
                    open: !1,
                    countryCode: t,
                    phone: null != n ? n : "",
                });
            });
        let [t, n] = s.Z.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
        this.state = {
            countryCode: t,
            phone: null != n ? n : "",
            open: !1,
        };
    }
}
let E = g;
