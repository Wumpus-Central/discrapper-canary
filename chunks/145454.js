n.d(t, { default: () => h });
var r = n(951288),
    i = n(647438),
    a = n(990547),
    o = n(886025),
    s = n(82659),
    l = n(481060),
    c = n(7557),
    u = n(200357),
    d = n(388032),
    f = n(520668);
function _(e, t, n) {
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
            { error: _, working: p, transitionState: h, validPhone: m, layerContext: g } = this.props,
            { phone: E } = this.state,
            b = [];
        return (
            m
                ? (e = d.intl.string(d.t["4qMI6O"]))
                : ((e = d.intl.string(d.t.Vp9je3)),
                  (t = (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: d.intl.format(d.t["3BTmqa"], {}),
                  }))),
            m
                ? ((n = (0, r.jsx)(o.N, {
                      label: d.intl.string(d.t.Xclkxs),
                      hideLabel: !0,
                      errorMessage: null != _ ? _ : void 0,
                      children: (0, r.jsx)(c.Z, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (b = [
                      {
                          variant: "secondary",
                          text: d.intl.string(d.t["5b60go"]),
                          onClick: this.handleResendCode,
                          loading: p,
                      },
                  ]))
                : ((n = (0, r.jsx)(u.Z, {
                      label: d.intl.string(d.t["64bX0N"]),
                      errorMessage: null != _ ? _ : void 0,
                      className: f.field,
                      onChange: this.handlePhoneChange,
                      submitting: p,
                      layerContext: g,
                  })),
                  (b = [
                      {
                          text: d.intl.string(d.t.TXNS7e),
                          disabled: "" === E,
                          loading: p,
                          onClick: this.handleAddPhone,
                      },
                  ])),
            (i = m ? d.intl.string(d.t.Xclkxs) : d.intl.string(d.t.uR76s7)),
            (0, r.jsx)(s.Modal, {
                size: m ? "sm" : "md",
                title: i,
                subtitle: e,
                actions: b,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: h,
                children: (0, r.jsxs)(l.Kqy, {
                    gap: 8,
                    children: [n, t],
                }),
            })
        );
    }
    constructor(e) {
        super(e),
            _(this, "handlePhoneChange", (e) => {
                this.setState({ phone: e });
            }),
            _(this, "handleAddPhone", () => {
                let { phone: e } = this.state,
                    { onAddPhone: t } = this.props;
                null == t || t(e);
            }),
            _(this, "handleVerifyPhone", (e) => {
                let { onVerifyPhone: t } = this.props;
                null == t || t(e);
            }),
            _(this, "handleResendCode", () => {
                let { onAddPhone: e } = this.props;
                null == e || e(this.state.phone);
            }),
            (this.state = { phone: "" });
    }
}
let h = p;
