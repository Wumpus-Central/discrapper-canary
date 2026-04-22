s.d(t, { default: () => C });
var n = s(627968),
    l = s(64700),
    a = s(110259),
    o = s(189213),
    i = s(834730),
    r = s(452027),
    d = s(331322),
    h = s(13008),
    u = s(457570),
    c = s(985018),
    p = s(20147);
class f extends l.PureComponent {
    constructor(e) {
        super(e), (this.state = { phone: "" });
    }
    handlePhoneChange = (e) => {
        this.setState({ phone: e });
    };
    render() {
        let e,
            t,
            s,
            l,
            { error: f, working: C, transitionState: g, validPhone: m, layerContext: y } = this.props,
            { phone: b } = this.state,
            x = [];
        return (
            m
                ? (e = c.intl.string(c.t["4qMI6A"]))
                : ((e = c.intl.string(c.t.Vp9je2)),
                  (t = (0, n.jsx)(i.E, { variant: "text-sm/normal", children: c.intl.format(c.t["3BTmqX"], {}) }))),
            m
                ? ((s = (0, n.jsx)(r.D, {
                      label: c.intl.string(c.t.Xclkxp),
                      hideLabel: !0,
                      errorMessage: f ?? void 0,
                      children: (0, n.jsx)(h.A, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (x = [
                      {
                          variant: "secondary",
                          text: c.intl.string(c.t["5b60gi"]),
                          onClick: this.handleResendCode,
                          loading: C,
                      },
                  ]))
                : ((s = (0, n.jsx)(u.A, {
                      label: c.intl.string(c.t["64bX0M"]),
                      errorMessage: f ?? void 0,
                      className: p.ZZ,
                      onChange: this.handlePhoneChange,
                      submitting: C,
                      layerContext: y,
                  })),
                  (x = [
                      { text: c.intl.string(c.t.TXNS7S), disabled: "" === b, loading: C, onClick: this.handleAddPhone },
                  ])),
            (l = m ? c.intl.string(c.t.xDBSN9) : c.intl.string(c.t.hY8QTR)),
            (0, n.jsx)(o.Modal, {
                size: m ? "sm" : "md",
                title: l,
                subtitle: e,
                actions: x,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: g,
                children: (0, n.jsxs)(d.B, { gap: 8, children: [s, t] }),
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
let C = f;
