n.d(t, { default: () => A });
var i = n(627968),
    s = n(64700),
    l = n(189213),
    a = n(359778),
    r = n(834730),
    o = n(331322),
    d = n(292666),
    u = n(939249),
    c = n(349288),
    g = n(98207),
    m = n(985018),
    _ = n(903523);
class A extends s.PureComponent {
    _input;
    state = { code: "", errorMessage: "", retrySuccess: !1, isLoading: !1 };
    setRef = (e) => {
        this._input = e;
    };
    handleRetry = async () => {
        await g.A.sendMFABackupCodesVerificationKeyEmail(this.props.password), this.setState({ retrySuccess: !0 });
    };
    handleSubmit = async (e) => {
        e.preventDefault(), this.setState({ isLoading: !0 });
        try {
            await g.A.confirmViewBackupCodes(this.state.code, !1), this.props.onClose();
        } catch (e) {
            if (null == e.body) return;
            e.body.message && this.setState({ errorMessage: e.body.message });
        } finally {
            this.setState({ isLoading: !1 });
        }
    };
    handleCodeChange = (e) => {
        this.setState({ code: e });
    };
    render() {
        let { transitionState: e } = this.props,
            { code: t, errorMessage: n, retrySuccess: s } = this.state,
            g = s
                ? (0, i.jsx)(a.Z, {
                      type: a.Z.Types.SUCCESS,
                      className: _.Nr,
                      children: (0, i.jsx)(r.E, { variant: "text-md/normal", children: m.intl.string(m.t.j4qu8n) }),
                  })
                : null;
        return (0, i.jsx)(l.Modal, {
            title: m.intl.string(m.t["mGppp/"]),
            actions: [
                {
                    text: m.intl.string(m.t["ETE/oC"]),
                    onClick: this.props.onClose,
                    variant: "secondary",
                    disabled: this.state.isLoading,
                },
                {
                    text: m.intl.string(m.t.piW6YS),
                    type: "submit",
                    disabled: this.state.isLoading || 0 === t.length,
                    onClick: this.handleSubmit,
                },
            ],
            onClose: this.props.onClose,
            transitionState: e,
            children: (0, i.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, i.jsx)(r.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: _.YK,
                        children: m.intl.string(m.t["37S9yU"]),
                    }),
                    g,
                    (0, i.jsx)(d.k, {
                        inputRef: this.setRef,
                        label: m.intl.string(m.t.TjGb4Q),
                        onChange: this.handleCodeChange,
                        maxLength: 8,
                        value: t,
                        autoComplete: "one-time-code",
                        autoFocus: !0,
                        error: n,
                    }),
                    (0, i.jsx)(r.E, {
                        variant: "text-sm/normal",
                        children: (0, i.jsx)(u.D, {
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(c.Anchor, { children: m.intl.string(m.t.PZgmxv) }),
                        }),
                    }),
                ],
            }),
        });
    }
}
