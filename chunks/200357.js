s.d(t, { Z: () => y }), s(47120);
var n = s(200651),
    i = s(192379),
    l = s(120356),
    o = s.n(l),
    a = s(217986),
    r = s(481060),
    h = s(600164),
    d = s(259580),
    c = s(317175),
    u = s(388032),
    p = s(793083),
    m = s(60412),
    f = s(814632);
function g(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class C extends i.PureComponent {
    render() {
        let { countryCode: e, phone: t, open: s } = this.state,
            { className: i, submitting: l } = this.props,
            [, a] = e.split('+');
        return (0, n.jsxs)(h.Z, {
            className: o()(p.phoneField, m.elevationLow, i),
            align: h.Z.Align.CENTER,
            grow: 0,
            children: [
                (0, n.jsxs)(r.zxk, {
                    size: r.PhG.SMALL,
                    className: p.countryButton,
                    color: r.Ttl.PRIMARY,
                    innerClassName: p.countryButtonInner,
                    onClick: this.handleTogglePopout,
                    children: [
                        (0, n.jsxs)(h.Z, {
                            className: o()(p.countryCodeContainer, f.marginReset),
                            justify: h.Z.Justify.CENTER,
                            children: [
                                (0, n.jsx)('div', {
                                    className: p.plusSign,
                                    children: '+'
                                }),
                                (0, n.jsx)('div', {
                                    className: p.countryCode,
                                    children: a
                                })
                            ]
                        }),
                        (0, n.jsx)(d.Z, {
                            foreground: p.phoneFieldExpand,
                            expanded: s,
                            width: 16,
                            height: 16
                        })
                    ]
                }),
                (0, n.jsx)('input', {
                    'aria-label': u.intl.string(u.t['64bX0N']),
                    className: p.inputField,
                    value: t,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    autoFocus: !0
                }),
                (0, n.jsx)(r.zxk, {
                    className: p.sendButton,
                    size: r.PhG.SMALL,
                    submitting: l,
                    onClick: this.handleSubmit,
                    children: u.intl.string(u.t.TXNS7e)
                }),
                s ? (0, n.jsx)(c.Z, { onClick: this.handleClick }) : null
            ]
        });
    }
    closePopout() {
        this.state.open && this.setState({ open: !1 });
    }
    constructor(e) {
        super(e),
            g(this, 'handleChange', (e) => {
                this.closePopout(), this.setState({ phone: e.currentTarget.value });
            }),
            g(this, 'handleKeyPress', (e) => {
                this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            g(this, 'handleSubmit', () => {
                let { onSubmit: e, submitting: t } = this.props,
                    { countryCode: s, phone: n } = this.state;
                t || null == e || e(''.concat(s).concat(n));
            }),
            g(this, 'handleTogglePopout', () => {
                this.setState({ open: !this.state.open });
            }),
            g(this, 'handleClick', (e) => {
                let [t, s] = e.code.split(' ');
                this.setState({
                    open: !1,
                    countryCode: t,
                    phone: null != s ? s : ''
                });
            });
        let [t, s] = a.Z.find((e) => 'United States' === e.name).phoneCountryCode.split(' ');
        this.state = {
            countryCode: t,
            phone: null != s ? s : '',
            open: !1
        };
    }
}
let y = C;
