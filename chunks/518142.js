n.d(t, { A: () => d }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(189213),
    s = n(397927),
    o = n(98207),
    l = n(985018),
    c = n(876692);
function u(e, t, n) {
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
class d extends i.PureComponent {
    render() {
        let { transitionState: e } = this.props,
            { code: t, errorMessage: n, retrySuccess: i } = this.state,
            o = i
                ? (0, r.jsx)(s.ZpM, {
                      type: s.ZpM.Types.SUCCESS,
                      className: c.Nr,
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: l.intl.string(l.t.j4qu8n),
                      }),
                  })
                : null;
        return (0, r.jsx)(a.Modal, {
            title: l.intl.string(l.t["mGppp/"]),
            actions: [
                {
                    text: l.intl.string(l.t["ETE/oC"]),
                    onClick: this.props.onClose,
                    variant: "secondary",
                    disabled: this.state.isLoading,
                },
                {
                    text: l.intl.string(l.t.piW6YS),
                    type: "submit",
                    disabled: this.state.isLoading || 0 === t.length,
                    onClick: this.handleSubmit,
                },
            ],
            onClose: this.props.onClose,
            transitionState: e,
            children: (0, r.jsxs)(s.BJc, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, r.jsx)(s.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: c.YK,
                        children: l.intl.string(l.t["37S9yU"]),
                    }),
                    o,
                    (0, r.jsx)(s.ksK, {
                        inputRef: this.setRef,
                        label: l.intl.string(l.t.TjGb4Q),
                        onChange: this.handleCodeChange,
                        maxLength: 8,
                        value: t,
                        autoComplete: "one-time-code",
                        autoFocus: !0,
                        error: n,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: (0, r.jsx)(s.DUT, {
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(s.MzZ, { children: l.intl.string(l.t.PZgmxv) }),
                        }),
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "_input", void 0),
            u(this, "state", {
                code: "",
                errorMessage: "",
                retrySuccess: !1,
                isLoading: !1,
            }),
            u(this, "setRef", (e) => {
                this._input = e;
            }),
            u(this, "handleRetry", async () => {
                await o.A.sendMFABackupCodesVerificationKeyEmail(this.props.password),
                    this.setState({ retrySuccess: !0 });
            }),
            u(this, "handleSubmit", async (e) => {
                e.preventDefault(), this.setState({ isLoading: !0 });
                try {
                    await o.A.confirmViewBackupCodes(this.state.code, !1), this.props.onClose();
                } catch (e) {
                    if (null == e.body) return;
                    e.body.message && this.setState({ errorMessage: e.body.message });
                } finally {
                    this.setState({ isLoading: !1 });
                }
            }),
            u(this, "handleCodeChange", (e) => {
                this.setState({ code: e });
            });
    }
}
