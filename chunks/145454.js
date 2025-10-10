n.d(t, { default: () => p });
var r = n(951288),
    i = n(647438),
    a = n(990547),
    o = n(793030),
    s = n(481060),
    l = n(7557),
    c = n(200357),
    u = n(388032),
    d = n(520668);
function f(e, t, n) {
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
class _ extends i.PureComponent {
    render() {
        let e,
            t,
            n,
            i,
            { error: f, working: _, transitionState: p, validPhone: h, layerContext: m } = this.props,
            { phone: g } = this.state,
            E = [];
        return (
            h
                ? (e = u.intl.string(u.t["4qMI6O"]))
                : ((e = u.intl.string(u.t.Vp9je3)),
                  (t = (0, r.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      children: u.intl.format(u.t["3BTmqa"], {}),
                  }))),
            h
                ? ((n = (0, r.jsx)(s.gNt, {
                      label: u.intl.string(u.t.Xclkxs),
                      hideLabel: !0,
                      errorMessage: null != f ? f : void 0,
                      children: (0, r.jsx)(l.Z, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (E = [
                      {
                          variant: "secondary",
                          text: u.intl.string(u.t["5b60go"]),
                          onClick: this.handleResendCode,
                          loading: _,
                      },
                  ]))
                : ((n = (0, r.jsx)(c.Z, {
                      label: u.intl.string(u.t["64bX0N"]),
                      errorMessage: null != f ? f : void 0,
                      className: d.field,
                      onChange: this.handlePhoneChange,
                      submitting: _,
                      layerContext: m,
                  })),
                  (E = [
                      {
                          text: u.intl.string(u.t.TXNS7e),
                          disabled: "" === g,
                          loading: _,
                          onClick: this.handleAddPhone,
                      },
                  ])),
            (i = h ? u.intl.string(u.t.Xclkxs) : u.intl.string(u.t.uR76s7)),
            (0, r.jsx)(o.Modal, {
                size: h ? "sm" : "md",
                title: i,
                subtitle: e,
                actions: E,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: p,
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 8,
                    children: [n, t],
                }),
            })
        );
    }
    constructor(e) {
        super(e),
            f(this, "handlePhoneChange", (e) => {
                this.setState({ phone: e });
            }),
            f(this, "handleAddPhone", () => {
                let { phone: e } = this.state,
                    { onAddPhone: t } = this.props;
                null == t || t(e);
            }),
            f(this, "handleVerifyPhone", (e) => {
                let { onVerifyPhone: t } = this.props;
                null == t || t(e);
            }),
            f(this, "handleResendCode", () => {
                let { onAddPhone: e } = this.props;
                null == e || e(this.state.phone);
            }),
            (this.state = { phone: "" });
    }
}
let p = _;
