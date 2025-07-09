(i.d(t, { Z: () => x }), i(388685));
var n,
    s = i(255367),
    a = i(73800),
    l = i(120356),
    o = i.n(l),
    r = i(772848),
    h = i(846519),
    d = i(755721),
    c = i(481060),
    m = i(981631),
    u = i(388032),
    g = i(944084),
    p = i(893354),
    f = i(20493);
function C(e, t, i) {
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
class v extends (n = a.PureComponent) {
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
        (this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0)));
    }
    renderInputs() {
        let { emailError: e, passwordError: t, submitting: i } = this.props,
            { email: n, password: a } = this.state;
        return (0, s.jsxs)('div', {
            className: g.container,
            children: [
                (0, s.jsx)(c.xJW, {
                    title: u.intl.string(u.t.dI4d4e),
                    className: f.marginBottom20,
                    children: (0, s.jsx)(c.oil, {
                        value: n,
                        error: e,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    })
                }),
                (0, s.jsx)(c.xJW, {
                    title: u.intl.string(u.t['CIGa+/']),
                    className: f.marginBottom40,
                    children: (0, s.jsx)(c.oil, {
                        type: 'password',
                        value: a,
                        error: t,
                        onChange: this.handlePasswordChange,
                        onKeyPress: this.handleKeyPress
                    })
                }),
                (0, s.jsx)(d.zx, {
                    fullWidth: !0,
                    size: d.zx.Sizes.LARGE,
                    onClick: this.handleVerify,
                    submitting: i,
                    disabled: 0 === n.length || 0 === a.length,
                    children: u.intl.string(u.t.v740sr)
                })
            ]
        });
    }
    renderActions() {
        let { canChange: e } = this.props;
        return (0, s.jsxs)('div', {
            className: g.container,
            children: [
                (0, s.jsx)(d.zx, {
                    className: f.marginTop20,
                    fullWidth: !0,
                    size: d.zx.Sizes.LARGE,
                    color: d.Tt.PRIMARY,
                    onClick: this.handleResendEmail,
                    children: u.intl.string(u.t.LdUkOz)
                }),
                e &&
                    (0, s.jsx)(d.zx, {
                        className: f.marginTop20,
                        fullWidth: !0,
                        size: d.zx.Sizes.MEDIUM,
                        look: d.iL.LINK,
                        color: d.Tt.LINK,
                        onClick: this.handleChangeEmailClick,
                        children: u.intl.string(u.t.oP5zGB)
                    })
            ]
        });
    }
    render() {
        let e,
            { resent: t } = this.state,
            { email: i, canResend: n, transitionState: a } = this.props;
        return (
            (e = t && null != i ? u.intl.format(u.t.JqLgQE, { email: i }) : n ? u.intl.string(u.t.tSXg8P) : u.intl.string(u.t.KW5DEh)),
            (0, s.jsxs)(c.Y0X, {
                transitionState: a,
                'aria-labelledby': this._headerId,
                className: o()(g.emailVerificationModal, p.vertical, p.alignCenter, p.justifyCenter, f.marginTop60),
                parentComponent: 'EmailVerificationModal',
                children: [
                    (0, s.jsx)('div', {
                        className: g.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, s.jsx)('div', {
                        id: this._headerId,
                        className: o()(g.title, f.marginBottom8),
                        children: u.intl.string(u.t['1MPz29'])
                    }),
                    (0, s.jsx)('div', {
                        className: o()(g.body, f.marginBottom20),
                        children: e
                    }),
                    n ? this.renderActions() : this.renderInputs()
                ]
            })
        );
    }
    constructor(...e) {
        (super(...e),
            C(this, '_lottieRef', void 0),
            C(this, '_animItem', null),
            C(this, '_timeout', new h.V7()),
            C(this, '_headerId', (0, r.Z)()),
            C(this, 'state', {
                resent: !1,
                shouldClose: !1,
                email: '',
                password: ''
            }),
            C(this, 'setLottieRef', (e) => {
                this._lottieRef = e;
            }),
            C(this, 'handleVerify', () => {
                let { onVerify: e } = this.props;
                e(this.state.email, this.state.password);
            }),
            C(this, 'handleResendEmail', () => {
                let { onResend: e, onClose: t } = this.props;
                (e(),
                    this.state.resent ||
                        (this.setState({
                            resent: !0,
                            shouldClose: !0
                        }),
                        this._timeout.start(3000, () => {
                            this.state.shouldClose && t();
                        })));
            }),
            C(this, 'handleChangeEmailClick', () => {
                let { onChangeEmailClick: e } = this.props;
                (this.setState({
                    resent: !1,
                    shouldClose: !1
                }),
                    e());
            }),
            C(this, 'handleEmailChange', (e) => {
                this.setState({ email: e });
            }),
            C(this, 'handlePasswordChange', (e) => {
                this.setState({ password: e });
            }),
            C(this, 'handleKeyPress', (e) => {
                let { email: t, password: i } = this.state;
                13 === e.which && t.length > 0 && i.length > 0 && (e.preventDefault(), this.handleVerify());
            }));
    }
}
C(v, 'defaultProps', {
    canResend: !1,
    canChange: !0,
    onChangeEmailClick: m.dG4,
    onVerify: (e, t) => {},
    onResend: m.dG4,
    onClose: m.dG4
});
let x = v;
