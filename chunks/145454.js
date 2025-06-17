n.d(t, { Z: () => C }), n(388685), n(953529);
var s = n(255367),
    i = n(73800),
    r = n(120356),
    o = n.n(r),
    l = n(772848),
    a = n(990547),
    c = n(481060),
    h = n(600164),
    u = n(7557),
    d = n(200357),
    E = n(388032),
    p = n(282287),
    R = n(893354),
    m = n(20493);
function I(e, t, n) {
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
            { error: i, working: r, transitionState: l, validPhone: I } = this.props;
        return (
            (e =
                null != i && '' !== i
                    ? (0, s.jsx)('div', {
                          className: o()(p.description, p.error, m.marginBottom20),
                          children: i
                      })
                    : I
                      ? (0, s.jsx)('div', {
                            className: o()(p.description, m.marginBottom20),
                            children: E.intl.string(E.t['4qMI6O'])
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)('div', {
                                    className: o()(p.description, m.marginBottom20),
                                    children: E.intl.string(E.t.Vp9je3)
                                }),
                                (0, s.jsx)('div', {
                                    className: o()(p.description, m.marginBottom20),
                                    children: E.intl.format(E.t['3BTmqa'], {})
                                })
                            ]
                        })),
            (t = I
                ? (0, s.jsxs)(h.Z, {
                      className: p.field,
                      direction: h.Z.Direction.VERTICAL,
                      align: h.Z.Align.CENTER,
                      children: [
                          (0, s.jsx)(u.Z, { onSubmit: this.handleVerifyPhone }),
                          (0, s.jsx)(c.zxk, {
                              className: m.marginTop8,
                              size: c.PhG.SMALL,
                              look: c.iLD.LINK,
                              color: c.Ttl.PRIMARY,
                              onClick: this.handleResendCode,
                              children: E.intl.string(E.t['5b60go'])
                          })
                      ]
                  })
                : (0, s.jsx)(d.Z, {
                      className: p.field,
                      onSubmit: this.handleAddPhone,
                      submitting: r
                  })),
            (n = I ? E.intl.string(E.t.Xclkxs) : E.intl.string(E.t.uR76s7)),
            (0, s.jsxs)(c.Y0X, {
                impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE },
                transitionState: l,
                className: o()(p.phoneVerificationModal, R.vertical, R.alignCenter, R.justifyCenter, m.marginTop60),
                'aria-labelledby': this.headerId,
                parentComponent: 'PhoneVerificationModal',
                children: [
                    (0, s.jsx)('div', {
                        className: p.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, s.jsx)('div', {
                        className: o()(p.title, m.marginBottom8),
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
        super(e),
            I(this, '_animItem', null),
            I(this, '_lottieRef', void 0),
            I(this, 'headerId', (0, l.Z)()),
            I(this, 'setLottieRef', (e) => {
                this._lottieRef = e;
            }),
            I(this, 'handleAddPhone', (e) => {
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
            I(this, 'handleVerifyPhone', (e) => {
                let { onVerifyPhone: t } = this.props;
                null == t || t(e);
            }),
            I(this, 'handleResendCode', () => {
                let { onAddPhone: e } = this.props;
                null == e || e(this.state.phone);
            }),
            (this.state = {
                animated: !1,
                phone: ''
            });
    }
}
let C = f;
