n(47120);
var s = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    r = n(772848),
    a = n(990547),
    h = n(481060),
    c = n(600164),
    u = n(7557),
    d = n(200357),
    p = n(388032),
    E = n(498604),
    m = n(847854),
    R = n(275477);
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
        let e, t, n;
        let { error: i, working: o, transitionState: r, validPhone: f } = this.props;
        return (
            (e =
                null != i && '' !== i
                    ? (0, s.jsx)('div', {
                          className: l()(E.description, E.error, R.marginBottom20),
                          children: i
                      })
                    : f
                      ? (0, s.jsx)('div', {
                            className: l()(E.description, R.marginBottom20),
                            children: p.intl.string(p.t['4qMI6O'])
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)('div', {
                                    className: l()(E.description, R.marginBottom20),
                                    children: p.intl.string(p.t.Vp9je3)
                                }),
                                (0, s.jsx)('div', {
                                    className: l()(E.description, R.marginBottom20),
                                    children: p.intl.format(p.t['3BTmqa'], {})
                                })
                            ]
                        })),
            (t = f
                ? (0, s.jsxs)(c.Z, {
                      className: E.field,
                      direction: c.Z.Direction.VERTICAL,
                      align: c.Z.Align.CENTER,
                      children: [
                          (0, s.jsx)(u.Z, { onSubmit: this.handleVerifyPhone }),
                          (0, s.jsx)(h.Button, {
                              className: R.marginTop8,
                              size: h.ButtonSizes.SMALL,
                              look: h.ButtonLooks.LINK,
                              color: h.ButtonColors.PRIMARY,
                              onClick: this.handleResendCode,
                              children: p.intl.string(p.t['5b60go'])
                          })
                      ]
                  })
                : (0, s.jsx)(d.Z, {
                      className: E.field,
                      onSubmit: this.handleAddPhone,
                      submitting: o
                  })),
            (n = f ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7)),
            (0, s.jsxs)(h.ModalRoot, {
                impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE },
                transitionState: r,
                className: l()(E.phoneVerificationModal, m.vertical, m.alignCenter, m.justifyCenter, R.marginTop60),
                'aria-labelledby': this.headerId,
                children: [
                    (0, s.jsx)('div', {
                        className: E.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, s.jsx)('div', {
                        className: l()(E.title, R.marginBottom8),
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
            f(this, '_animItem', null),
            f(this, '_lottieRef', void 0),
            f(this, 'headerId', (0, r.Z)()),
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
            });
    }
}
t.Z = C;
