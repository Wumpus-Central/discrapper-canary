n.d(t, { Z: () => d }), n(388685), n(457542);
var r,
    i = n(54381),
    a = n(473749),
    o = n(481060),
    s = n(388032),
    l = n(718325);
function c(e, t, n) {
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
class u extends (r = a.PureComponent) {
    render() {
        let { title: e, actionText: t, children: n, transitionState: r } = this.props,
            { error: c, isLoading: u, value: d } = this.state,
            f =
                a.Children.count(n) > 0
                    ? (0, i.jsx)(o.Zbd, {
                          type: o.Zbd.Types.WARNING,
                          className: l.card,
                          children: (0, i.jsx)(o.Text, {
                              color: "currentColor",
                              variant: "text-md/normal",
                              children: n,
                          }),
                      })
                    : null;
        return (0, i.jsx)(o.Y0X, {
            transitionState: r,
            parentComponent: "PasswordConfirm",
            children: (0, i.jsxs)("form", {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(o.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            children: e,
                        }),
                    }),
                    (0, i.jsxs)(o.hzk, {
                        children: [
                            f,
                            (0, i.jsxs)("div", {
                                className: l.spacing,
                                children: [
                                    (0, i.jsx)(o.oil, {
                                        type: "password",
                                        label: s.intl.string(s.t["CIGa+7"]),
                                        autoComplete: "current-password",
                                        autoFocus: !0,
                                        value: d,
                                        onChange: this.handlePasswordChange,
                                        required: !0,
                                    }),
                                    null != c && "" !== c
                                        ? (0, i.jsxs)(o.Text, {
                                              variant: "text-xs/normal",
                                              color: "text-feedback-critical",
                                              className: l.error,
                                              children: [" ", c, " "],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.mzw, {
                        children: (0, i.jsxs)(o.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, i.jsx)(o.Button, {
                                    variant: "primary",
                                    text: null != t ? t : s.intl.string(s.t["cY+Oob"]),
                                    type: "submit",
                                    disabled: u || 0 === d.length,
                                }),
                                (0, i.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: s.intl.string(s.t["ETE/oC"]),
                                    onClick: this.handleCancel,
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
            c(this, "state", {
                value: "",
                error: null,
                isLoading: !1,
            }),
            c(this, "handleSubmit", (e) => {
                e.preventDefault();
                let { value: t } = this.state,
                    { handleSubmit: n, onClose: r, onError: i } = this.props;
                this.setState({ isLoading: !0 }),
                    n(t)
                        .then(
                            (e) => r(null != e ? e : void 0),
                            (e) => {
                                null != e.body &&
                                    (null == i || i(e.body),
                                    !this.shouldSkipErrorMsgRender(e.body) &&
                                        (e.body.password
                                            ? this.setState({
                                                  error: e.body.password,
                                                  isLoading: !1,
                                              })
                                            : e.body.message &&
                                              this.setState({
                                                  error: e.body.message,
                                                  isLoading: !1,
                                              })));
                            },
                        )
                        .finally(() => this.setState({ isLoading: !1 }));
            }),
            c(this, "shouldSkipErrorMsgRender", (e) => {
                let { skipErrorMsgAbortCode: t } = this.props;
                return null != t && (null == e ? void 0 : e.code) === t;
            }),
            c(this, "handleCancel", () => {
                let { onClose: e } = this.props;
                e();
            }),
            c(this, "handlePasswordChange", (e) => {
                let { onPasswordChange: t } = this.props;
                null == t || t(e), this.setState({ value: e });
            });
    }
}
c(u, "key", () => "password-confirm-modal");
let d = u;
