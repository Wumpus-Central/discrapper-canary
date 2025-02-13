s.d(t, { Z: () => x }), s(47120);
var n = s(200651),
    i = s(192379),
    l = s(120356),
    o = s.n(l),
    a = s(772848),
    r = s(990547),
    h = s(481060),
    d = s(600164),
    c = s(7557),
    u = s(200357),
    p = s(388032),
    m = s(468515),
    f = s(179683),
    g = s(483938);
function C(e, t, s) {
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
class y extends i.PureComponent {
    async componentDidMount() {
        let [e, { default: t }] = await Promise.all([s.e('93198').then(s.t.bind(s, 140523, 19)), Promise.resolve().then(s.t.bind(s, 500923, 23))]);
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
        let e, t, s;
        let { error: i, working: l, transitionState: a, validPhone: C } = this.props;
        return (
            (e =
                null != i && '' !== i
                    ? (0, n.jsx)('div', {
                          className: o()(m.description, m.error, g.marginBottom20),
                          children: i
                      })
                    : C
                      ? (0, n.jsx)('div', {
                            className: o()(m.description, g.marginBottom20),
                            children: p.intl.string(p.t['4qMI6O'])
                        })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)('div', {
                                    className: o()(m.description, g.marginBottom20),
                                    children: p.intl.string(p.t.Vp9je3)
                                }),
                                (0, n.jsx)('div', {
                                    className: o()(m.description, g.marginBottom20),
                                    children: p.intl.format(p.t['3BTmqa'], {})
                                })
                            ]
                        })),
            (t = C
                ? (0, n.jsxs)(d.Z, {
                      className: m.field,
                      direction: d.Z.Direction.VERTICAL,
                      align: d.Z.Align.CENTER,
                      children: [
                          (0, n.jsx)(c.Z, { onSubmit: this.handleVerifyPhone }),
                          (0, n.jsx)(h.zxk, {
                              className: g.marginTop8,
                              size: h.PhG.SMALL,
                              look: h.iLD.LINK,
                              color: h.Ttl.PRIMARY,
                              onClick: this.handleResendCode,
                              children: p.intl.string(p.t['5b60go'])
                          })
                      ]
                  })
                : (0, n.jsx)(u.Z, {
                      className: m.field,
                      onSubmit: this.handleAddPhone,
                      submitting: l
                  })),
            (s = C ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7)),
            (0, n.jsxs)(h.Y0X, {
                impression: { impressionName: r.ImpressionNames.USER_VERIFY_PHONE },
                transitionState: a,
                className: o()(m.phoneVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, g.marginTop60),
                'aria-labelledby': this.headerId,
                children: [
                    (0, n.jsx)('div', {
                        className: m.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, n.jsx)('div', {
                        className: o()(m.title, g.marginBottom8),
                        id: this.headerId,
                        children: s
                    }),
                    e,
                    t
                ]
            })
        );
    }
    constructor(e) {
        super(e),
            C(this, '_animItem', null),
            C(this, '_lottieRef', void 0),
            C(this, 'headerId', (0, a.Z)()),
            C(this, 'setLottieRef', (e) => {
                this._lottieRef = e;
            }),
            C(this, 'handleAddPhone', (e) => {
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
            C(this, 'handleVerifyPhone', (e) => {
                let { onVerifyPhone: t } = this.props;
                null == t || t(e);
            }),
            C(this, 'handleResendCode', () => {
                let { onAddPhone: e } = this.props;
                null == e || e(this.state.phone);
            }),
            (this.state = {
                animated: !1,
                phone: ''
            });
    }
}
let x = y;
