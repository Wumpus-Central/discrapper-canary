(n.d(t, { Z: () => g }), n(388685), n(953529));
var s = n(255367),
    i = n(73800),
    r = n(120356),
    l = n.n(r),
    o = n(772848),
    a = n(990547),
    c = n(755721),
    h = n(481060),
    u = n(600164),
    d = n(7557),
    E = n(200357),
    p = n(388032),
    R = n(282287),
    m = n(893354),
    I = n(20493);
function f(e, t, n) {
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
class C extends i.PureComponent {
    async componentDidMount() {
        let [e, { default: t }] = await Promise.all([n.e('93198').then(n.t.bind(n, 140523, 19)), Promise.resolve().then(n.t.bind(n, 500923, 23))]);
        null != this._lottieRef &&
            (this._animItem = t.loadAnimation({
                container: this._lottieRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !1,
                animationData: e
            }));
    }
    componentWillUnmount() {
        null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0));
    }
    render() {
        let e,
            t,
            n,
            { error: i, working: r, transitionState: o, validPhone: f } = this.props;
        return (
            (e =
                null != i && '' !== i
                    ? (0, s.jsx)('div', {
                          className: l()(R.description, R.error, I.marginBottom20),
                          children: i
                      })
                    : f
                      ? (0, s.jsx)('div', {
                            className: l()(R.description, I.marginBottom20),
                            children: p.intl.string(p.t['4qMI6O'])
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)('div', {
                                    className: l()(R.description, I.marginBottom20),
                                    children: p.intl.string(p.t.Vp9je3)
                                }),
                                (0, s.jsx)('div', {
                                    className: l()(R.description, I.marginBottom20),
                                    children: p.intl.format(p.t['3BTmqa'], {})
                                })
                            ]
                        })),
            (t = f
                ? (0, s.jsxs)(u.Z, {
                      className: R.field,
                      direction: u.Z.Direction.VERTICAL,
                      align: u.Z.Align.CENTER,
                      children: [
                          (0, s.jsx)(d.Z, { onSubmit: this.handleVerifyPhone }),
                          (0, s.jsx)(c.zx, {
                              className: I.marginTop8,
                              size: c.Ph.SMALL,
                              look: c.iL.LINK,
                              color: c.Tt.PRIMARY,
                              onClick: this.handleResendCode,
                              children: p.intl.string(p.t['5b60go'])
                          })
                      ]
                  })
                : (0, s.jsx)(E.Z, {
                      className: R.field,
                      onSubmit: this.handleAddPhone,
                      submitting: r
                  })),
            (n = f ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7)),
            (0, s.jsxs)(h.Y0X, {
                impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE },
                transitionState: o,
                className: l()(R.phoneVerificationModal, m.vertical, m.alignCenter, m.justifyCenter, I.marginTop60),
                'aria-labelledby': this.headerId,
                parentComponent: 'PhoneVerificationModal',
                children: [
                    (0, s.jsx)('div', {
                        className: R.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, s.jsx)('div', {
                        className: l()(R.title, I.marginBottom8),
                        id: this.headerId,
                        children: n
                    }),
                    e,
                    t
                ]
            })
        );
    }
    constructor(e) {
        (super(e),
            f(this, '_animItem', null),
            f(this, '_lottieRef', void 0),
            f(this, 'headerId', (0, o.Z)()),
            f(this, 'setLottieRef', (e) => {
                this._lottieRef = e;
            }),
            f(this, 'handleAddPhone', (e) => {
                this.state.animated || null == this._animItem
                    ? this.setState({ phone: e })
                    : (this._animItem.play(),
                      this.setState({
                          animated: !0,
                          phone: e
                      }));
                let { onAddPhone: t } = this.props;
                null == t || t(e);
            }),
            f(this, 'handleVerifyPhone', (e) => {
                let { onVerifyPhone: t } = this.props;
                null == t || t(e);
            }),
            f(this, 'handleResendCode', () => {
                let { onAddPhone: e } = this.props;
                null == e || e(this.state.phone);
            }),
            (this.state = {
                animated: !1,
                phone: ''
            }));
    }
}
let g = C;
