n.d(t, { Z: () => f }), n(388685), n(35282);
var s = n(255367),
    i = n(73800),
    r = n(120356),
    o = n.n(r),
    l = n(217986),
    a = n(481060),
    c = n(600164),
    h = n(259580),
    u = n(317175),
    d = n(388032),
    E = n(159728),
    p = n(20795),
    R = n(20493);
function m(e, t, n) {
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
class I extends i.PureComponent {
    render() {
        let { countryCode: e, phone: t, open: n } = this.state,
            { className: i, submitting: r } = this.props,
            [, l] = e.split('+');
        return (0, s.jsxs)(c.Z, {
            className: o()(E.phoneField, p.elevationLow, i),
            align: c.Z.Align.CENTER,
            grow: 0,
            children: [
                (0, s.jsxs)(a.zxk, {
                    size: a.PhG.SMALL,
                    className: E.countryButton,
                    color: a.Ttl.PRIMARY,
                    innerClassName: E.countryButtonInner,
                    onClick: this.handleTogglePopout,
                    children: [
                        (0, s.jsxs)(c.Z, {
                            className: o()(E.countryCodeContainer, R.marginReset),
                            justify: c.Z.Justify.CENTER,
                            children: [
                                (0, s.jsx)('div', {
                                    className: E.plusSign,
                                    children: '+'
                                }),
                                (0, s.jsx)('div', {
                                    className: E.countryCode,
                                    children: l
                                })
                            ]
                        }),
                        (0, s.jsx)(h.Z, {
                            foreground: E.phoneFieldExpand,
                            expanded: n,
                            width: 16,
                            height: 16
                        })
                    ]
                }),
                (0, s.jsx)('input', {
                    'aria-label': d.intl.string(d.t['64bX0N']),
                    className: E.inputField,
                    value: t,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    autoFocus: !0
                }),
                (0, s.jsx)(a.zxk, {
                    className: E.sendButton,
                    size: a.PhG.SMALL,
                    submitting: r,
                    onClick: this.handleSubmit,
                    children: d.intl.string(d.t.TXNS7e)
                }),
                n ? (0, s.jsx)(u.Z, { onClick: this.handleClick }) : null
            ]
        });
    }
    closePopout() {
        this.state.open && this.setState({ open: !1 });
    }
    constructor(e) {
        super(e),
            m(this, 'handleChange', (e) => {
                this.closePopout(), this.setState({ phone: e.currentTarget.value });
            }),
            m(this, 'handleKeyPress', (e) => {
                this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            m(this, 'handleSubmit', () => {
                let { onSubmit: e, submitting: t } = this.props,
                    { countryCode: n, phone: s } = this.state;
                t || null == e || e(''.concat(n).concat(s));
            }),
            m(this, 'handleTogglePopout', () => {
                this.setState({ open: !this.state.open });
            }),
            m(this, 'handleClick', (e) => {
                let [t, n] = e.code.split(' ');
                this.setState({
                    open: !1,
                    countryCode: t,
                    phone: null != n ? n : ''
                });
            });
        let [t, n] = l.Z.find((e) => 'United States' === e.name).phoneCountryCode.split(' ');
        this.state = {
            countryCode: t,
            phone: null != n ? n : '',
            open: !1
        };
    }
}
let f = I;
