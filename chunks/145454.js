n.d(t, { Z: () => y }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(990547),
    c = n(755721),
    u = n(481060),
    d = n(600164),
    f = n(7557),
    _ = n(200357),
    p = n(388032),
    h = n(331899),
    m = n(465106),
    g = n(10198);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class b extends i.PureComponent {
    async componentDidMount() {
        let [e, { default: t }] = await Promise.all([
            n.e("93198").then(n.t.bind(n, 140523, 19)),
            Promise.resolve().then(n.t.bind(n, 500923, 23)),
        ]);
        null != this._lottieRef &&
            (this._animItem = t.loadAnimation({
                container: this._lottieRef,
                renderer: "svg",
                loop: !0,
                autoplay: !1,
                animationData: e,
            }));
    }
    componentWillUnmount() {
        null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0));
    }
    render() {
        let e,
            t,
            n,
            { error: i, working: a, transitionState: s, validPhone: E } = this.props;
        return (
            (e =
                null != i && "" !== i
                    ? (0, r.jsx)("div", {
                          className: o()(h.description, h.error, g.marginBottom20),
                          children: i,
                      })
                    : E
                      ? (0, r.jsx)("div", {
                            className: o()(h.description, g.marginBottom20),
                            children: p.intl.string(p.t["4qMI6O"]),
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    className: o()(h.description, g.marginBottom20),
                                    children: p.intl.string(p.t.Vp9je3),
                                }),
                                (0, r.jsx)("div", {
                                    className: o()(h.description, g.marginBottom20),
                                    children: p.intl.format(p.t["3BTmqa"], {}),
                                }),
                            ],
                        })),
            (t = E
                ? (0, r.jsxs)(d.Z, {
                      className: h.field,
                      direction: d.Z.Direction.VERTICAL,
                      align: d.Z.Align.CENTER,
                      children: [
                          (0, r.jsx)(f.Z, { onSubmit: this.handleVerifyPhone }),
                          (0, r.jsx)(c.zx, {
                              className: g.marginTop8,
                              size: c.Ph.SMALL,
                              look: c.iL.LINK,
                              color: c.Tt.PRIMARY,
                              onClick: this.handleResendCode,
                              children: p.intl.string(p.t["5b60go"]),
                          }),
                      ],
                  })
                : (0, r.jsx)(_.Z, {
                      className: h.field,
                      onSubmit: this.handleAddPhone,
                      submitting: a,
                  })),
            (n = E ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7)),
            (0, r.jsxs)(u.Y0X, {
                impression: { impressionName: l.ImpressionNames.USER_VERIFY_PHONE },
                transitionState: s,
                className: o()(h.phoneVerificationModal, m.vertical, m.alignCenter, m.justifyCenter, g.marginTop60),
                "aria-labelledby": this.headerId,
                parentComponent: "PhoneVerificationModal",
                children: [
                    (0, r.jsx)("div", {
                        className: h.animationContainer,
                        ref: this.setLottieRef,
                    }),
                    (0, r.jsx)("div", {
                        className: o()(h.title, g.marginBottom8),
                        id: this.headerId,
                        children: n,
                    }),
                    e,
                    t,
                ],
            })
        );
    }
    constructor(e) {
        super(e),
            E(this, "_animItem", null),
            E(this, "_lottieRef", void 0),
            E(this, "headerId", (0, s.Z)()),
            E(this, "setLottieRef", (e) => {
                this._lottieRef = e;
            }),
            E(this, "handleAddPhone", (e) => {
                this.state.animated || null == this._animItem
                    ? this.setState({ phone: e })
                    : (this._animItem.play(),
                      this.setState({
                          animated: !0,
                          phone: e,
                      }));
                let { onAddPhone: t } = this.props;
                null == t || t(e);
            }),
            E(this, "handleVerifyPhone", (e) => {
                let { onVerifyPhone: t } = this.props;
                null == t || t(e);
            }),
            E(this, "handleResendCode", () => {
                let { onAddPhone: e } = this.props;
                null == e || e(this.state.phone);
            }),
            (this.state = {
                animated: !1,
                phone: "",
            });
    }
}
let y = b;
