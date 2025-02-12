i.d(e, { Z: () => v }), i(47120);
var n,
    s = i(200651),
    a = i(192379),
    l = i(120356),
    o = i.n(l),
    r = i(772848),
    h = i(846519),
    d = i(481060),
    c = i(981631),
    u = i(388032),
    m = i(597484),
    g = i(179683),
    p = i(483938);
function f(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
class C extends (n = a.PureComponent) {
    async componentDidMount() {
        let [t, { default: e }] = await Promise.all([i.e('27526').then(i.t.bind(i, 555589, 19)), Promise.resolve().then(i.t.bind(i, 500923, 23))]);
        null != this._lottieRef &&
            (this._animItem = e.loadAnimation({
                container: this._lottieRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: t
            }));
    }
    componentWillUnmount() {
        this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0));
    }
    renderInputs() {
        let { emailError: t, passwordError: e, submitting: i } = this.props,
            { email: n, password: a } = this.state;
        return (0, s.jsxs)('div', {
            className: m.container,
            children: [
                (0, s.jsx)(d.xJW, {
                    title: u.intl.string(u.t.dI4d4e),
                    className: p.marginBottom20,
                    children: (0, s.jsx)(d.oil, {
                        value: n,
                        error: t,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    })
                }),
                (0, s.jsx)(d.xJW, {
                    title: u.intl.string(u.t['CIGa+/']),
                    className: p.marginBottom40,
                    children: (0, s.jsx)(d.oil, {
                        type: 'password',
                        value: a,
                        error: e,
                        onChange: this.handlePasswordChange,
                        onKeyPress: this.handleKeyPress
                    })
                }),
                (0, s.jsx)(d.zxk, {
                    fullWidth: !0,
                    size: d.zxk.Sizes.LARGE,
                    onClick: this.handleVerify,
                    submitting: i,
                    disabled: 0 === n.length || 0 === a.length,
                    children: u.intl.string(u.t.v740sr)
                })
            ]
        });
    }
    renderActions() {
        let { canChange: t } = this.props;
        return (0, s.jsxs)('div', {
            className: m.container,
            children: [
                (0, s.jsx)(d.zxk, {
                    className: p.marginTop20,
                    fullWidth: !0,
                    size: d.zxk.Sizes.LARGE,
                    color: d.Ttl.PRIMARY,
                    onClick: this.handleResendEmail,
                    children: u.intl.string(u.t.LdUkOz)
                }),
                t &&
                    (0, s.jsx)(d.zxk, {
                        className: p.marginTop20,
                        fullWidth: !0,
                        size: d.zxk.Sizes.MEDIUM,
                        look: d.iLD.LINK,
                        color: d.Ttl.LINK,
                        onClick: this.handleChangeEmailClick,
                        children: u.intl.string(u.t.oP5zGB)
                    })
            ]
        });
    }
    render() {
        let t;
        let { resent: e } = this.state,
            { email: i, canResend: n, transitionState: a } = this.props;
        return (
            (t = e && null != i ? u.intl.format(u.t.JqLgQE, { email: i }) : n ? u.intl.string(u.t.tSXg8P) : u.intl.string(u.t.KW5DEh)),
            (0, s.jsxs)(d.Y0X, {
                transitionState: a,
                'aria-labelledby': this._headerId,
                className: o()(m.emailVerificationModal, g.vertical, g.alignCenter, g.justifyCenter, p.marginTop60),
                children: [
                    (0, s.jsx)('div', {
                        className: m.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, s.jsx)('div', {
                        id: this._headerId,
                        className: o()(m.title, p.marginBottom8),
                        children: u.intl.string(u.t['1MPz29'])
                    }),
                    (0, s.jsx)('div', {
                        className: o()(m.body, p.marginBottom20),
                        children: t
                    }),
                    n ? this.renderActions() : this.renderInputs()
                ]
            })
        );
    }
    constructor(...t) {
        super(...t),
            f(this, '_lottieRef', void 0),
            f(this, '_animItem', null),
            f(this, '_timeout', new h.V7()),
            f(this, '_headerId', (0, r.Z)()),
            f(this, 'state', {
                resent: !1,
                shouldClose: !1,
                email: '',
                password: ''
            }),
            f(this, 'setLottieRef', (t) => {
                this._lottieRef = t;
            }),
            f(this, 'handleVerify', () => {
                let { onVerify: t } = this.props;
                t(this.state.email, this.state.password);
            }),
            f(this, 'handleResendEmail', () => {
                let { onResend: t, onClose: e } = this.props;
                t(),
                    this.state.resent ||
                        (this.setState({
                            resent: !0,
                            shouldClose: !0
                        }),
                        this._timeout.start(3000, () => {
                            this.state.shouldClose && e();
                        }));
            }),
            f(this, 'handleChangeEmailClick', () => {
                let { onChangeEmailClick: t } = this.props;
                this.setState({
                    resent: !1,
                    shouldClose: !1
                }),
                    t();
            }),
            f(this, 'handleEmailChange', (t) => {
                this.setState({ email: t });
            }),
            f(this, 'handlePasswordChange', (t) => {
                this.setState({ password: t });
            }),
            f(this, 'handleKeyPress', (t) => {
                let { email: e, password: i } = this.state;
                13 === t.which && e.length > 0 && i.length > 0 && (t.preventDefault(), this.handleVerify());
            });
    }
}
f(C, 'defaultProps', {
    canResend: !1,
    canChange: !0,
    onChangeEmailClick: c.dG4,
    onVerify: (t, e) => {},
    onResend: c.dG4,
    onClose: c.dG4
});
let v = C;
