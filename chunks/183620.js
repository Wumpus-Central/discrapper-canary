n.d(t, { Z: () => p }), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(388032),
    u = n(791373);
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
class f extends (r = a.PureComponent) {
    render() {
        var e;
        let {
                title: t,
                actionText: n,
                children: r,
                error: o,
                isLoading: d,
                maxLength: f,
                transitionState: p,
                helpMessage: _,
                retryPrompt: m,
                retrySuccessMessage: h,
            } = this.props,
            { code: g, errorMessage: E, retrySuccess: b } = this.state,
            y =
                a.Children.count(r) > 0
                    ? (0, i.jsx)(l.Zbd, {
                          type: l.Zbd.Types.WARNING,
                          className: u.card,
                          children: (0, i.jsx)(l.Text, {
                              variant: "text-md/normal",
                              children: r,
                          }),
                      })
                    : null,
            O =
                null != m
                    ? (0, i.jsxs)(l.Text, {
                          className: s()(u.__invalid_submitText, u.spacing),
                          variant: "text-sm/normal",
                          children: [
                              (0, i.jsx)("br", {}),
                              (0, i.jsx)(l.P3F, {
                                  className: s()(u.spacing, u.__invalid_link),
                                  onClick: this.handleRetry,
                                  children: (0, i.jsx)(l.Anchor, { children: m }),
                              }),
                          ],
                      })
                    : null,
            v = b
                ? (0, i.jsx)(l.Zbd, {
                      type: l.Zbd.Types.SUCCESS,
                      className: u.card,
                      children: (0, i.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: h,
                      }),
                  })
                : null;
        return (0, i.jsx)(l.Y0X, {
            transitionState: p,
            parentComponent: "MFAConfirm",
            children: (0, i.jsxs)("form", {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(l.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: t,
                        }),
                    }),
                    (0, i.jsxs)(l.hzk, {
                        children: [
                            null != _
                                ? (0, i.jsx)(l.Text, {
                                      color: "text-default",
                                      variant: "text-md/normal",
                                      className: u.spacing,
                                      children: _,
                                  })
                                : null,
                            y,
                            v,
                            (0, i.jsxs)("div", {
                                className: u.spacing,
                                children: [
                                    (0, i.jsx)(l.oil, {
                                        inputRef: this.setRef,
                                        label: this.getLabelText(),
                                        onChange: this.handleCodeChange,
                                        placeholder: null != (e = this.getPlaceholder()) ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0,
                                    }),
                                    this.errorPresent()
                                        ? (0, i.jsx)(l.Text, {
                                              color: "text-danger",
                                              variant: "text-xs/normal",
                                              className: u.error,
                                              children: null != o ? o : E,
                                          })
                                        : null,
                                    O,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(l.mzw, {
                        children: (0, i.jsxs)(l.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, i.jsx)(l.Button, {
                                    variant: "primary",
                                    text: null != n ? n : c.intl.string(c.t["cY+Oob"]),
                                    type: "submit",
                                    disabled: d || 0 === g.length,
                                }),
                                (0, i.jsx)(l.Button, {
                                    variant: "secondary",
                                    text: c.intl.string(c.t["ETE/oC"]),
                                    onClick: this.handleCancel,
                                    disabled: d,
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
            }),
            d(this, "setRef", (e) => {
                this._input = e;
            }),
            d(this, "getLabelText", () => {
                var e;
                return null != (e = this.props.label)
                    ? e
                    : this.props.disallowBackupCodes
                      ? c.intl.string(c.t.HZPBOd)
                      : c.intl.string(c.t["+NQopF"]);
            }),
            d(this, "getSupportedCodeTypes", () =>
                this.props.disallowBackupCodes ? c.intl.string(c.t.tARzgo) : c.intl.string(c.t.yO4lAM),
            ),
            d(this, "getPlaceholder", () => {
                var e;
                return this.props.forceNoPlaceholder
                    ? null
                    : null != (e = this.props.placeholder)
                      ? e
                      : this.getSupportedCodeTypes();
            }),
            d(
                this,
                "errorPresent",
                () =>
                    (null != this.props.error && "" !== this.props.error) ||
                    (null != this.state.errorMessage && "" !== this.state.errorMessage),
            ),
            d(this, "handleRetry", () => {
                let { onRetry: e } = this.props;
                null == e || e().then(() => this.setState({ retrySuccess: !0 }));
            }),
            d(this, "handleSubmit", (e) => {
                e.preventDefault();
                let { handleSubmit: t, onError: n } = this.props;
                t(this.state.code).catch((e) => {
                    null != e.body &&
                        (null == n || n(e.body), e.body.message && this.setState({ errorMessage: e.body.message }));
                });
            }),
            d(this, "handleCancel", () => {
                let { onClose: e, handleEarlyClose: t } = this.props;
                e(), null == t || t();
            }),
            d(this, "handleCodeChange", (e) => {
                this.setState({ code: e });
            });
    }
}
d(f, "defaultProps", {
    btnClass: "",
    isLoading: !1,
    disallowBackupCodes: !1,
    error: null,
    forceNoPlaceholder: !1,
});
let p = f;
