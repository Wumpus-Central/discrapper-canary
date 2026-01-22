r.d(t, { default: () => g }), r(896048);
var s = r(627968),
    n = r(64700),
    a = r(189213),
    i = r(397927),
    l = r(98207),
    o = r(414121),
    c = r(287809),
    d = r(464477),
    u = r(985018),
    f = r(954469);
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
let h = (e) => {
    let { image: t, label: r, text: n, children: a } = e;
    return (0, s.jsxs)("div", {
        className: f.uW,
        children: [
            (0, s.jsx)("div", {
                className: f.X$,
                children: t,
            }),
            (0, s.jsx)("div", {
                className: f.f5,
                children: (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(i.Heading, {
                            variant: "heading-sm/semibold",
                            className: f.p_,
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
class b extends n.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: n } = this.props,
            { totpSecret: l, code: p, isVerifying: b } = this.state,
            g = null == (e = c.default.getCurrentUser()) ? void 0 : e.email,
            m = (0, d.V3)(null != g ? g : "", l),
            x = (0, s.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, s.jsxs)("div", {
                    className: f.Kf,
                    children: [
                        (0, s.jsx)(i.ksK, {
                            value: p,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, s.jsx)(i.Button, {
                            variant: "primary",
                            text: u.intl.string(u.t["/a5+YV"]),
                            type: "submit",
                            loading: b,
                        }),
                    ],
                }),
            });
        return (0, s.jsxs)(a.Modal, {
            title: u.intl.string(u.t.cDgKte),
            subtitle: u.intl.string(u.t["7NGwtH"]),
            transitionState: t,
            onClose: n,
            actions: [],
            children: [
                (0, s.jsx)(h, {
                    image: (0, s.jsx)("img", {
                        alt: "",
                        src: r(582248),
                        width: 100,
                        height: 100,
                    }),
                    label: u.intl.string(u.t["9E74Dx"]),
                    text: u.intl.format(u.t.A7Aehw, {
                        googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                        authyURL: "https://www.authy.com/",
                    }),
                }),
                (0, s.jsx)(i.cGx, { className: f.yF }),
                (0, s.jsx)(h, {
                    image: (0, s.jsx)(o.Ay, { text: m }),
                    label: u.intl.string(u.t["91InF1"]),
                    text: u.intl.string(u.t.hFeBkl),
                    children: (0, s.jsxs)("div", {
                        className: f.h8,
                        children: [
                            (0, s.jsx)(i.Heading, {
                                variant: "heading-sm/semibold",
                                className: f.p_,
                                children: u.intl.string(u.t["76IPwr"]),
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: f.rJ,
                                selectable: !0,
                                children: l,
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(i.cGx, { className: f.yF }),
                (0, s.jsx)(h, {
                    image: (0, s.jsx)("img", {
                        alt: "",
                        src: r(87282),
                    }),
                    label: u.intl.string(u.t["SaD/LY"]),
                    text: u.intl.string(u.t.vI1zic),
                    children: x,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            p(this, "state", {
                code: "",
                totpSecret: (0, d.tn)(),
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
                    l.A.enable({
                        code: r,
                        secret: (0, d.cC)(t),
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
let g = b;
