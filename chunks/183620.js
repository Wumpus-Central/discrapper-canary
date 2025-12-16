n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(775086),
    o = n(481060),
    s = n(816814),
    l = n(388032),
    c = n(44463);
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
            s = i
                ? (0, r.jsx)(o.Zbd, {
                      type: o.Zbd.Types.SUCCESS,
                      className: c.card,
                      children: (0, r.jsx)(o.Text, {
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
            children: (0, r.jsxs)(o.Kqy, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: c.spacing,
                        children: l.intl.string(l.t["37S9yU"]),
                    }),
                    s,
                    (0, r.jsx)(o.oil, {
                        inputRef: this.setRef,
                        label: l.intl.string(l.t.TjGb4Q),
                        onChange: this.handleCodeChange,
                        maxLength: 8,
                        value: t,
                        autoComplete: "one-time-code",
                        autoFocus: !0,
                        error: n,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: (0, r.jsx)(o.P3F, {
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, { children: l.intl.string(l.t.PZgmxv) }),
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
                await s.Z.sendMFABackupCodesVerificationKeyEmail(this.props.password),
                    this.setState({ retrySuccess: !0 });
            }),
            u(this, "handleSubmit", async (e) => {
                e.preventDefault(), this.setState({ isLoading: !0 });
                try {
                    await s.Z.confirmViewBackupCodes(this.state.code, !1), this.props.onClose();
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
