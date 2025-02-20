i.d(t, { Z: () => v }), i(47120);
var s,
    n = i(200651),
    a = i(192379),
    l = i(120356),
    o = i.n(l),
    r = i(772848),
    h = i(846519),
    d = i(481060),
    c = i(981631),
    m = i(388032),
    u = i(379799),
    g = i(968693),
    p = i(455812);
function f(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
class C extends (s = a.PureComponent) {
    async componentDidMount() {
        let [e, { default: t }] = await Promise.all([i.e('27526').then(i.t.bind(i, 555589, 19)), Promise.resolve().then(i.t.bind(i, 500923, 23))]);
        null != this._lottieRef &&
            (this._animItem = t.loadAnimation({
                container: this._lottieRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: e
            }));
    }
    componentWillUnmount() {
        this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0));
    }
    renderInputs() {
        let { emailError: e, passwordError: t, submitting: i } = this.props,
            { email: s, password: a } = this.state;
        return (0, n.jsxs)('div', {
            className: u.container,
            children: [
                (0, n.jsx)(d.xJW, {
                    title: m.NW.string(m.t.dI4d4e),
                    className: p.marginBottom20,
                    children: (0, n.jsx)(d.oil, {
                        value: s,
                        error: e,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    })
                }),
                (0, n.jsx)(d.xJW, {
                    title: m.NW.string(m.t['CIGa+/']),
                    className: p.marginBottom40,
                    children: (0, n.jsx)(d.oil, {
                        type: 'password',
                        value: a,
                        error: t,
                        onChange: this.handlePasswordChange,
                        onKeyPress: this.handleKeyPress
                    })
                }),
                (0, n.jsx)(d.zxk, {
                    fullWidth: !0,
                    size: d.zxk.Sizes.LARGE,
                    onClick: this.handleVerify,
                    submitting: i,
                    disabled: 0 === s.length || 0 === a.length,
                    children: m.NW.string(m.t.v740sr)
                })
            ]
        });
    }
    renderActions() {
        let { canChange: e } = this.props;
        return (0, n.jsxs)('div', {
            className: u.container,
            children: [
                (0, n.jsx)(d.zxk, {
                    className: p.marginTop20,
                    fullWidth: !0,
                    size: d.zxk.Sizes.LARGE,
                    color: d.Ttl.PRIMARY,
                    onClick: this.handleResendEmail,
                    children: m.NW.string(m.t.LdUkOz)
                }),
                e &&
                    (0, n.jsx)(d.zxk, {
                        className: p.marginTop20,
                        fullWidth: !0,
                        size: d.zxk.Sizes.MEDIUM,
                        look: d.iLD.LINK,
                        color: d.Ttl.LINK,
                        onClick: this.handleChangeEmailClick,
                        children: m.NW.string(m.t.oP5zGB)
                    })
            ]
        });
    }
    render() {
        let e;
        let { resent: t } = this.state,
            { email: i, canResend: s, transitionState: a } = this.props;
        return (
            (e = t && null != i ? m.NW.format(m.t.JqLgQE, { email: i }) : s ? m.NW.string(m.t.tSXg8P) : m.NW.string(m.t.KW5DEh)),
            (0, n.jsxs)(d.Y0X, {
                transitionState: a,
                'aria-labelledby': this._headerId,
                className: o()(u.emailVerificationModal, g.vertical, g.alignCenter, g.justifyCenter, p.marginTop60),
                children: [
                    (0, n.jsx)('div', {
                        className: u.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, n.jsx)('div', {
                        id: this._headerId,
                        className: o()(u.title, p.marginBottom8),
                        children: m.NW.string(m.t['1MPz29'])
                    }),
                    (0, n.jsx)('div', {
                        className: o()(u.body, p.marginBottom20),
                        children: e
                    }),
                    s ? this.renderActions() : this.renderInputs()
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
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
            f(this, 'setLottieRef', (e) => {
                this._lottieRef = e;
            }),
            f(this, 'handleVerify', () => {
                let { onVerify: e } = this.props;
                e(this.state.email, this.state.password);
            }),
            f(this, 'handleResendEmail', () => {
                let { onResend: e, onClose: t } = this.props;
                e(),
                    this.state.resent ||
                        (this.setState({
                            resent: !0,
                            shouldClose: !0
                        }),
                        this._timeout.start(3000, () => {
                            this.state.shouldClose && t();
                        }));
            }),
            f(this, 'handleChangeEmailClick', () => {
                let { onChangeEmailClick: e } = this.props;
                this.setState({
                    resent: !1,
                    shouldClose: !1
                }),
                    e();
            }),
            f(this, 'handleEmailChange', (e) => {
                this.setState({ email: e });
            }),
            f(this, 'handlePasswordChange', (e) => {
                this.setState({ password: e });
            }),
            f(this, 'handleKeyPress', (e) => {
                let { email: t, password: i } = this.state;
                13 === e.which && t.length > 0 && i.length > 0 && (e.preventDefault(), this.handleVerify());
            });
    }
}
f(C, 'defaultProps', {
    canResend: !1,
    canChange: !0,
    onChangeEmailClick: c.dG4,
    onVerify: (e, t) => {},
    onResend: c.dG4,
    onClose: c.dG4
});
let v = C;
