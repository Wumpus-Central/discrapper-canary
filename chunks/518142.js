n.d(t, { default: () => c });
var i = n(627968),
    s = n(64700),
    l = n(189213),
    a = n(397927),
    r = n(98207),
    o = n(985018),
    d = n(788126);
class c extends s.PureComponent {
    _input;
    state = { code: "", errorMessage: "", retrySuccess: !1, isLoading: !1 };
    setRef = (e) => {
        this._input = e;
    };
    handleRetry = async () => {
        await r.A.sendMFABackupCodesVerificationKeyEmail(this.props.password), this.setState({ retrySuccess: !0 });
    };
    handleSubmit = async (e) => {
        e.preventDefault(), this.setState({ isLoading: !0 });
        try {
            await r.A.confirmViewBackupCodes(this.state.code, !1), this.props.onClose();
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
            r = s
                ? (0, i.jsx)(a.ZpM, {
                      type: a.ZpM.Types.SUCCESS,
                      className: d.Nr,
                      children: (0, i.jsx)(a.Text, { variant: "text-md/normal", children: o.intl.string(o.t.j4qu8n) }),
                  })
                : null;
        return (0, i.jsx)(l.Modal, {
            title: o.intl.string(o.t["mGppp/"]),
            actions: [
                {
                    text: o.intl.string(o.t["ETE/oC"]),
                    onClick: this.props.onClose,
                    variant: "secondary",
                    disabled: this.state.isLoading,
                },
                {
                    text: o.intl.string(o.t.piW6YS),
                    type: "submit",
                    disabled: this.state.isLoading || 0 === t.length,
                    onClick: this.handleSubmit,
                },
            ],
            onClose: this.props.onClose,
            transitionState: e,
            children: (0, i.jsxs)(a.BJc, {
                direction: "vertical",
                gap: 8,
                children: [
                    (0, i.jsx)(a.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: d.YK,
                        children: o.intl.string(o.t["37S9yU"]),
                    }),
                    r,
                    (0, i.jsx)(a.ksK, {
                        inputRef: this.setRef,
                        label: o.intl.string(o.t.TjGb4Q),
                        onChange: this.handleCodeChange,
                        maxLength: 8,
                        value: t,
                        autoComplete: "one-time-code",
                        autoFocus: !0,
                        error: n,
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: (0, i.jsx)(a.DUT, {
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.MzZ, { children: o.intl.string(o.t.PZgmxv) }),
                        }),
                    }),
                ],
            }),
        });
    }
}
