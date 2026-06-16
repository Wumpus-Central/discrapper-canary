s.d(e, { default: () => m });
var i = s(627968),
    n = s(64700),
    a = s(189213),
    r = s(993077),
    o = s(834730),
    l = s(331322),
    d = s(292666),
    h = s(939249),
    c = s(349288),
    p = s(98207),
    u = s(375708),
    g = s(903523);
class m extends n.PureComponent {
    _input;
    state = { code: "", errorMessage: "", retrySuccess: !1, isLoading: !1 };
    setRef = (t) => {
        this._input = t;
    };
    handleRetry = async () => {
        await p.A.sendMFABackupCodesVerificationKeyEmail(this.props.password), this.setState({ retrySuccess: !0 });
    };
    handleSubmit = async (t) => {
        t.preventDefault(), this.setState({ isLoading: !0 });
        try {
            await p.A.confirmViewBackupCodes(this.state.code, !1), this.props.onClose();
        } catch (t) {
            if (null == t.body) return;
            t.body.message && this.setState({ errorMessage: t.body.message });
        } finally {
            this.setState({ isLoading: !1 });
        }
    };
    handleCodeChange = (t) => {
        this.setState({ code: t });
    };
    render() {
        let { transitionState: t } = this.props,
            { code: e, errorMessage: s, retrySuccess: n } = this.state,
            p = n
                ? (0, i.jsx)(r.Z, {
                      type: r.Z.Types.SUCCESS,
                      className: g.Nr,
                      children: (0, i.jsx)(o.E, { variant: "text-md/normal", children: u.intl.string(u.t.j4qu8n) }),
                  })
                : null;
        return (0, i.jsx)(a.Modal, {
            title: u.intl.string(u.t["mGppp/"]),
            actions: [
                {
                    text: u.intl.string(u.t["ETE/oC"]),
                    onClick: this.props.onClose,
                    variant: "secondary",
                    disabled: this.state.isLoading,
                },
                {
                    text: u.intl.string(u.t.piW6YS),
                    type: "submit",
                    disabled: this.state.isLoading || 0 === e.length,
                    onClick: this.handleSubmit,
                },
            ],
            onClose: this.props.onClose,
            transitionState: t,
            children: (0, i.jsxs)(l.B, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, i.jsx)(o.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: g.YK,
                        children: u.intl.string(u.t["37S9yU"]),
                    }),
                    p,
                    (0, i.jsx)(d.k, {
                        inputRef: this.setRef,
                        label: u.intl.string(u.t.TjGb4Q),
                        onChange: this.handleCodeChange,
                        maxLength: 8,
                        value: e,
                        autoComplete: "one-time-code",
                        autoFocus: !0,
                        error: s,
                    }),
                    (0, i.jsx)(o.E, {
                        variant: "text-sm/normal",
                        children: (0, i.jsx)(h.D, {
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(c.Anchor, { children: u.intl.string(u.t.PZgmxv) }),
                        }),
                    }),
                ],
            }),
        });
    }
}
