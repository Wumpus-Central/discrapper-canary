n.d(t, { default: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(793030),
    s = n(481060),
    l = n(7557),
    c = n(200357),
    u = n(388032),
    d = n(109491);
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
class p extends i.PureComponent {
    render() {
        let e,
            t,
            n,
            i,
            { error: f, working: p, transitionState: _, validPhone: m, layerContext: h } = this.props,
            { phone: g } = this.state,
            E = [];
        return (
            m
                ? (e = u.intl.string(u.t["4qMI6A"]))
                : ((e = u.intl.string(u.t.Vp9je2)),
                  (t = (0, r.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      children: u.intl.format(u.t["3BTmqX"], {}),
                  }))),
            m
                ? ((n = (0, r.jsx)(s.gNt, {
                      label: u.intl.string(u.t.Xclkxp),
                      hideLabel: !0,
                      errorMessage: null != f ? f : void 0,
                      children: (0, r.jsx)(l.Z, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (E = [
                      {
                          variant: "secondary",
                          text: u.intl.string(u.t["5b60gi"]),
                          onClick: this.handleResendCode,
                          loading: p,
                      },
                  ]))
                : ((n = (0, r.jsx)(c.Z, {
                      label: u.intl.string(u.t["64bX0M"]),
                      errorMessage: null != f ? f : void 0,
                      className: d.field,
                      onChange: this.handlePhoneChange,
                      submitting: p,
                      layerContext: h,
                  })),
                  (E = [
                      {
                          text: u.intl.string(u.t.TXNS7S),
                          disabled: "" === g,
                          loading: p,
                          onClick: this.handleAddPhone,
                      },
                  ])),
            (i = m ? u.intl.string(u.t.Xclkxp) : u.intl.string(u.t.uR76s6)),
            (0, r.jsx)(o.Modal, {
                size: m ? "sm" : "md",
                title: i,
                subtitle: e,
                actions: E,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: _,
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
let _ = p;
