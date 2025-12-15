n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(816814),
    c = n(388032),
    u = n(44463);
function d(e, t, n) {
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
class f extends i.PureComponent {
    render() {
        let { transitionState: e } = this.props,
            { code: t, errorMessage: n, retrySuccess: i } = this.state,
            a = i
                ? (0, r.jsx)(s.Zbd, {
                      type: s.Zbd.Types.SUCCESS,
                      className: u.card,
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: c.intl.string(c.t.j4qu8n),
                      }),
                  })
                : null;
        return (0, r.jsx)(s.Y0X, {
            transitionState: e,
            parentComponent: "MFAConfirm",
            children: (0, r.jsxs)("form", {
                onSubmit: this.handleSubmit,
                children: [
                    (0, r.jsx)(s.xBx, {
                        separator: !1,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: c.intl.string(c.t["mGppp/"]),
                        }),
                    }),
                    (0, r.jsxs)(s.hzk, {
                        children: [
                            (0, r.jsx)(s.Text, {
                                color: "text-default",
                                variant: "text-md/normal",
                                className: u.spacing,
                                children: c.intl.string(c.t["37S9yU"]),
                            }),
                            a,
                            (0, r.jsxs)("div", {
                                className: u.spacing,
                                children: [
                                    (0, r.jsx)(s.oil, {
                                        inputRef: this.setRef,
                                        label: c.intl.string(c.t.TjGb4Q),
                                        onChange: this.handleCodeChange,
                                        maxLength: 8,
                                        value: t,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0,
                                    }),
                                    null != this.state.errorMessage && "" !== this.state.errorMessage
                                        ? (0, r.jsx)(s.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: u.error,
                                              children: n,
                                          })
                                        : null,
                                    (0, r.jsxs)(s.Text, {
                                        className: o()(u.__invalid_submitText, u.spacing),
                                        variant: "text-sm/normal",
                                        children: [
                                            (0, r.jsx)("br", {}),
                                            (0, r.jsx)(s.P3F, {
                                                className: o()(u.spacing, u.__invalid_link),
                                                onClick: this.handleRetry,
                                                children: (0, r.jsx)(s.Anchor, { children: c.intl.string(c.t.PZgmxv) }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.mzw, {
                        children: (0, r.jsxs)(s.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, r.jsx)(s.Button, {
                                    variant: "primary",
                                    text: c.intl.string(c.t.piW6YS),
                                    type: "submit",
                                    disabled: this.state.isLoading || 0 === t.length,
                                }),
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    text: c.intl.string(c.t["ETE/oC"]),
                                    onClick: this.props.onClose,
                                    disabled: this.state.isLoading,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            d(this, "_input", void 0),
            d(this, "state", {
                code: "",
                errorMessage: "",
                retrySuccess: !1,
                isLoading: !1,
            }),
            d(this, "setRef", (e) => {
                this._input = e;
            }),
            d(this, "handleRetry", async () => {
                await l.Z.sendMFABackupCodesVerificationKeyEmail(this.props.password),
                    this.setState({ retrySuccess: !0 });
            }),
            d(this, "handleSubmit", async (e) => {
                e.preventDefault(), this.setState({ isLoading: !0 });
                try {
                    await l.Z.confirmViewBackupCodes(this.state.code, !1), this.props.onClose();
                } catch (e) {
                    if (null == e.body) return;
                    e.body.message && this.setState({ errorMessage: e.body.message });
                } finally {
                    this.setState({ isLoading: !1 });
                }
            }),
            d(this, "handleCodeChange", (e) => {
                this.setState({ code: e });
            });
    }
}
