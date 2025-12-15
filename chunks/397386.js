n.d(t, { default: () => m }), n(388685);
var r = n(54381),
    s = n(473749),
    i = n(775086),
    a = n(481060),
    o = n(816814),
    c = n(198993),
    l = n(594174),
    d = n(287880),
    u = n(388032),
    p = n(416094);
function h(e, t, n) {
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
let f = (e) => {
    let { image: t, label: n, text: s, children: i } = e;
    return (0, r.jsxs)("div", {
        className: p.section,
        children: [
            (0, r.jsx)("div", {
                className: p.sectionImage,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: p.sectionContent,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-sm/semibold",
                            className: p.headerSpacing,
                            children: n,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: s,
                        }),
                        i,
                    ],
                }),
            }),
        ],
    });
};
class g extends s.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: s } = this.props,
            { totpSecret: o, code: h, isVerifying: g } = this.state,
            m = null == (e = l.default.getCurrentUser()) ? void 0 : e.email,
            x = (0, d.U0)(null != m ? m : "", o),
            b = (0, r.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, r.jsxs)("div", {
                    className: p.inputContainer,
                    children: [
                        (0, r.jsx)(a.oil, {
                            value: h,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: u.intl.string(u.t["/a5+YV"]),
                            type: "submit",
                            loading: g,
                        }),
                    ],
                }),
            });
        return (0, r.jsxs)(i.Modal, {
            title: u.intl.string(u.t.cDgKte),
            subtitle: u.intl.string(u.t["7NGwtH"]),
            transitionState: t,
            onClose: s,
            actions: [],
            children: [
                (0, r.jsx)(f, {
                    image: (0, r.jsx)("img", {
                        alt: "",
                        src: n(340061),
                        width: 100,
                        height: 100,
                    }),
                    label: u.intl.string(u.t["9E74Dx"]),
                    text: u.intl.format(u.t.A7Aehw, {
                        googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                        authyURL: "https://www.authy.com/",
                    }),
                }),
                (0, r.jsx)(a.izJ, { className: p.divider }),
                (0, r.jsx)(f, {
                    image: (0, r.jsx)(c.ZP, { text: x }),
                    label: u.intl.string(u.t["91InF1"]),
                    text: u.intl.string(u.t.hFeBkl),
                    children: (0, r.jsxs)("div", {
                        className: p.topSpacing,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-sm/semibold",
                                className: p.headerSpacing,
                                children: u.intl.string(u.t["76IPwr"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: p.secret,
                                selectable: !0,
                                children: o,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(a.izJ, { className: p.divider }),
                (0, r.jsx)(f, {
                    image: (0, r.jsx)("img", {
                        alt: "",
                        src: n(308777),
                    }),
                    label: u.intl.string(u.t["SaD/LY"]),
                    text: u.intl.string(u.t.vI1zic),
                    children: b,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", {
                code: "",
                totpSecret: (0, d.bV)(),
                error: null,
                isVerifying: !1,
            }),
            h(this, "handleCodeChange", (e) => {
                this.setState({ code: e });
            }),
            h(this, "handleActivate", (e) => {
                e.preventDefault();
                let { totpSecret: t, code: n } = this.state;
                this.setState({ isVerifying: !0 }),
                    o.Z.enable({
                        code: n,
                        secret: (0, d.Qe)(t),
                    }).then(this.handleActivateSuccess, (e) =>
                        this.setState({
                            error: e.body.message,
                            isVerifying: !1,
                        }),
                    );
            }),
            h(this, "handleActivateSuccess", () => {
                let { onClose: e, handleEnableMFASuccess: t } = this.props;
                this.setState({ isVerifying: !1 }), t(), null == e || e();
            });
    }
}
let m = g;
