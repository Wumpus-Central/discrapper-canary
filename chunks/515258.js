n.d(t, { default: () => h });
var s = n(627968),
    a = n(64700),
    i = n(110259),
    l = n(158954),
    o = n(397927),
    r = n(13008),
    E = n(457570),
    d = n(985018),
    c = n(603344);
class u extends a.PureComponent {
    constructor(e) {
        super(e), (this.state = { phone: "" });
    }
    handlePhoneChange = (e) => {
        this.setState({ phone: e });
    };
    render() {
        let e,
            t,
            n,
            a,
            { error: u, working: h, transitionState: R, validPhone: I, layerContext: p } = this.props,
            { phone: _ } = this.state,
            f = [];
        return (
            I
                ? (e = d.intl.string(d.t["4qMI6A"]))
                : ((e = d.intl.string(d.t.Vp9je2)),
                  (t = (0, s.jsx)(o.Text, { variant: "text-sm/normal", children: d.intl.format(d.t["3BTmqX"], {}) }))),
            I
                ? ((n = (0, s.jsx)(o.D0$, {
                      label: d.intl.string(d.t.Xclkxp),
                      hideLabel: !0,
                      errorMessage: u ?? void 0,
                      children: (0, s.jsx)(r.A, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (f = [
                      {
                          variant: "secondary",
                          text: d.intl.string(d.t["5b60gi"]),
                          onClick: this.handleResendCode,
                          loading: h,
                      },
                  ]))
                : ((n = (0, s.jsx)(E.A, {
                      label: d.intl.string(d.t["64bX0M"]),
                      errorMessage: u ?? void 0,
                      className: c.ZZ,
                      onChange: this.handlePhoneChange,
                      submitting: h,
                      layerContext: p,
                  })),
                  (f = [
                      { text: d.intl.string(d.t.TXNS7S), disabled: "" === _, loading: h, onClick: this.handleAddPhone },
                  ])),
            (a = I ? d.intl.string(d.t.Xclkxp) : d.intl.string(d.t.uR76s6)),
            (0, s.jsx)(l.Modal, {
                size: I ? "sm" : "md",
                title: a,
                subtitle: e,
                actions: f,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: i.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: R,
                children: (0, s.jsxs)(o.BJc, { gap: 8, children: [n, t] }),
            })
        );
    }
    handleAddPhone = () => {
        let { phone: e } = this.state,
            { onAddPhone: t } = this.props;
        t?.(e);
    };
    handleVerifyPhone = (e) => {
        let { onVerifyPhone: t } = this.props;
        t?.(e);
    };
    handleResendCode = () => {
        let { onAddPhone: e } = this.props;
        e?.(this.state.phone);
    };
}
let h = u;
