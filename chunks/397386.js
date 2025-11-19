r.d(t, { default: () => m }), r(388685);
var s = r(54381),
    n = r(473749),
    i = r(481060),
    a = r(816814),
    o = r(600164),
    l = r(198993),
    c = r(594174),
    d = r(287880),
    u = r(388032),
    h = r(390304);
function p(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let g = (e) => {
    let { image: t, label: r, text: n, children: a } = e;
    return (0, s.jsxs)(o.Z, {
        className: h.spacing,
        children: [
            (0, s.jsx)(o.Z, {
                grow: 0,
                shrink: 0,
                basis: "156px",
                justify: o.Z.Justify.CENTER,
                className: h.image,
                children: t,
            }),
            (0, s.jsx)(o.Z, {
                direction: o.Z.Direction.VERTICAL,
                justify: o.Z.Justify.CENTER,
                children: (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(i.Heading, {
                            variant: "heading-sm/semibold",
                            className: h.headerSpacing,
                            children: r,
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: n,
                        }),
                        a,
                    ],
                }),
            }),
        ],
    });
};
class f extends n.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: n } = this.props,
            { totpSecret: a, code: p, isVerifying: f } = this.state,
            m = null == (e = c.default.getCurrentUser()) ? void 0 : e.email,
            x = (0, d.U0)(null != m ? m : "", a),
            b = (0, s.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, s.jsxs)(o.Z, {
                    className: h.inputContainer,
                    align: o.Z.Align.START,
                    children: [
                        (0, s.jsx)(i.oil, {
                            value: p,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, s.jsx)(o.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, s.jsx)(i.Button, {
                                variant: "primary",
                                text: u.intl.string(u.t["/a5+YV"]),
                                type: "submit",
                                loading: f,
                            }),
                        }),
                    ],
                }),
            });
        return (0, s.jsxs)(i.Y0X, {
            transitionState: t,
            size: i.CgR.DYNAMIC,
            className: h.customWidth,
            parentComponent: "MFAEnable",
            children: [
                (0, s.jsxs)(i.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsxs)(o.Z.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [
                                (0, s.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: u.intl.string(u.t.cDgKte),
                                }),
                                (0, s.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    className: h.subHeader,
                                    children: u.intl.string(u.t["7NGwtH"]),
                                }),
                            ],
                        }),
                        (0, s.jsx)(o.Z.Child, {
                            grow: 0,
                            children: (0, s.jsx)(i.olH, { onClick: n }),
                        }),
                    ],
                }),
                (0, s.jsxs)(i.hzk, {
                    children: [
                        (0, s.jsx)(g, {
                            image: (0, s.jsx)("img", {
                                alt: "",
                                src: r(340061),
                                width: 100,
                                height: 100,
                            }),
                            label: u.intl.string(u.t["9E74Dx"]),
                            text: u.intl.format(u.t.A7Aehw, {
                                googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                                authyURL: "https://www.authy.com/",
                            }),
                        }),
                        (0, s.jsx)(i.izJ, { className: h.divider }),
                        (0, s.jsx)(g, {
                            image: (0, s.jsx)(l.ZP, { text: x }),
                            label: u.intl.string(u.t["91InF1"]),
                            text: u.intl.string(u.t.hFeBkl),
                            children: (0, s.jsxs)("div", {
                                className: h.topSpacing,
                                children: [
                                    (0, s.jsx)(i.Heading, {
                                        variant: "heading-sm/semibold",
                                        className: h.headerSpacing,
                                        children: u.intl.string(u.t["76IPwr"]),
                                    }),
                                    (0, s.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        className: h.secret,
                                        selectable: !0,
                                        children: a,
                                    }),
                                ],
                            }),
                        }),
                        (0, s.jsx)(i.izJ, { className: h.divider }),
                        (0, s.jsx)(g, {
                            image: (0, s.jsx)("img", {
                                alt: "",
                                src: r(308777),
                            }),
                            label: u.intl.string(u.t["SaD/LY"]),
                            text: u.intl.string(u.t.vI1zic),
                            children: b,
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            p(this, "state", {
                code: "",
                totpSecret: (0, d.bV)(),
                error: null,
                isVerifying: !1,
            }),
            p(this, "handleCodeChange", (e) => {
                this.setState({ code: e });
            }),
            p(this, "handleActivate", (e) => {
                e.preventDefault();
                let { totpSecret: t, code: r } = this.state;
                this.setState({ isVerifying: !0 }),
                    a.Z.enable({
                        code: r,
                        secret: (0, d.Qe)(t),
                    }).then(this.handleActivateSuccess, (e) =>
                        this.setState({
                            error: e.body.message,
                            isVerifying: !1,
                        }),
                    );
            }),
            p(this, "handleActivateSuccess", () => {
                let { onClose: e, handleEnableMFASuccess: t } = this.props;
                this.setState({ isVerifying: !1 }), t(), null == e || e();
            });
    }
}
let m = f;
