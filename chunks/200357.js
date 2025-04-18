n.d(t, { Z: () => g }), n(388685), n(35282);
var s = n(200651),
    i = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(217986),
    a = n(481060),
    h = n(600164),
    c = n(259580),
    d = n(317175),
    u = n(388032),
    p = n(159728),
    E = n(20795),
    m = n(20493);
function R(e, t, n) {
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
class f extends i.PureComponent {
    render() {
        let { countryCode: e, phone: t, open: n } = this.state,
            { className: i, submitting: r } = this.props,
            [, l] = e.split('+');
        return (0, s.jsxs)(h.Z, {
            className: o()(p.phoneField, E.elevationLow, i),
            align: h.Z.Align.CENTER,
            grow: 0,
            children: [
                (0, s.jsxs)(a.zxk, {
                    size: a.PhG.SMALL,
                    className: p.countryButton,
                    color: a.Ttl.PRIMARY,
                    innerClassName: p.countryButtonInner,
                    onClick: this.handleTogglePopout,
                    children: [
                        (0, s.jsxs)(h.Z, {
                            className: o()(p.countryCodeContainer, m.marginReset),
                            justify: h.Z.Justify.CENTER,
                            children: [
                                (0, s.jsx)('div', {
                                    className: p.plusSign,
                                    children: '+'
                                }),
                                (0, s.jsx)('div', {
                                    className: p.countryCode,
                                    children: l
                                })
                            ]
                        }),
                        (0, s.jsx)(c.Z, {
                            foreground: p.phoneFieldExpand,
                            expanded: n,
                            width: 16,
                            height: 16
                        })
                    ]
                }),
                (0, s.jsx)('input', {
                    'aria-label': u.NW.string(u.t['64bX0N']),
                    className: p.inputField,
                    value: t,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    autoFocus: !0
                }),
                (0, s.jsx)(a.zxk, {
                    className: p.sendButton,
                    size: a.PhG.SMALL,
                    submitting: r,
                    onClick: this.handleSubmit,
                    children: u.NW.string(u.t.TXNS7e)
                }),
                n ? (0, s.jsx)(d.Z, { onClick: this.handleClick }) : null
            ]
        });
    }
    closePopout() {
        this.state.open && this.setState({ open: !1 });
    }
    constructor(e) {
        super(e),
            R(this, 'handleChange', (e) => {
                this.closePopout(), this.setState({ phone: e.currentTarget.value });
            }),
            R(this, 'handleKeyPress', (e) => {
                this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            R(this, 'handleSubmit', () => {
                let { onSubmit: e, submitting: t } = this.props,
                    { countryCode: n, phone: s } = this.state;
                t || null == e || e(''.concat(n).concat(s));
            }),
            R(this, 'handleTogglePopout', () => {
                this.setState({ open: !this.state.open });
            }),
            R(this, 'handleClick', (e) => {
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
let g = f;
