n.d(t, { default: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(158954),
    o = n(397927),
    l = n(13008),
    c = n(457570),
    u = n(985018),
    d = n(603344);
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
            { error: f, working: p, transitionState: _, validPhone: h, layerContext: m } = this.props,
            { phone: g } = this.state,
            E = [];
        return (
            h
                ? (e = u.intl.string(u.t["4qMI6A"]))
                : ((e = u.intl.string(u.t.Vp9je2)),
                  (t = (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      children: u.intl.format(u.t["3BTmqX"], {}),
                  }))),
            h
                ? ((n = (0, r.jsx)(o.D0$, {
                      label: u.intl.string(u.t.Xclkxp),
                      hideLabel: !0,
                      errorMessage: null != f ? f : void 0,
                      children: (0, r.jsx)(l.A, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (E = [
                      {
                          variant: "secondary",
                          text: u.intl.string(u.t["5b60gi"]),
                          onClick: this.handleResendCode,
                          loading: p,
                      },
                  ]))
                : ((n = (0, r.jsx)(c.A, {
                      label: u.intl.string(u.t["64bX0M"]),
                      errorMessage: null != f ? f : void 0,
                      className: d.ZZ,
                      onChange: this.handlePhoneChange,
                      submitting: p,
                      layerContext: m,
                  })),
                  (E = [
                      {
                          text: u.intl.string(u.t.TXNS7S),
                          disabled: "" === g,
                          loading: p,
                          onClick: this.handleAddPhone,
                      },
                  ])),
            (i = h ? u.intl.string(u.t.Xclkxp) : u.intl.string(u.t.uR76s6)),
            (0, r.jsx)(s.Modal, {
                size: h ? "sm" : "md",
                title: i,
                subtitle: e,
                actions: E,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: _,
                children: (0, r.jsxs)(o.BJc, {
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
