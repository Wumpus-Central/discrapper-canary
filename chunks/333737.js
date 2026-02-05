"use strict";
r.d(t, { default: () => E });
var s = r(627968),
    n = r(64700),
    o = r(189213),
    i = r(397927),
    a = r(98207),
    c = r(414121),
    l = r(287809),
    d = r(464477),
    h = r(985018),
    p = r(954469);
let u = (e) => {
    let { image: t, label: r, text: n, children: o } = e;
    return (0, s.jsxs)("div", {
        className: p.uW,
        children: [
            (0, s.jsx)("div", { className: p.X$, children: t }),
            (0, s.jsx)("div", {
                className: p.f5,
                children: (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(i.Heading, { variant: "heading-sm/semibold", className: p.p_, children: r }),
                        (0, s.jsx)(i.Text, { variant: "text-md/normal", children: n }),
                        o,
                    ],
                }),
            }),
        ],
    });
};
class _ extends n.PureComponent {
    state = { code: "", totpSecret: (0, d.tn)(), error: null, isVerifying: !1 };
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { totpSecret: n, code: a, isVerifying: _ } = this.state,
            E = l.default.getCurrentUser()?.email,
            g = (0, d.V3)(E ?? "", n),
            C = (0, s.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, s.jsxs)("div", {
                    className: p.Kf,
                    children: [
                        (0, s.jsx)(i.ksK, {
                            value: a,
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
                            text: h.intl.string(h.t["/a5+YV"]),
                            type: "submit",
                            loading: _,
                        }),
                    ],
                }),
            });
        return (0, s.jsxs)(o.Modal, {
            title: h.intl.string(h.t.cDgKte),
            subtitle: h.intl.string(h.t["7NGwtH"]),
            transitionState: e,
            onClose: t,
            actions: [],
            children: [
                (0, s.jsx)(u, {
                    image: (0, s.jsx)("img", { alt: "", src: r(582248), width: 100, height: 100 }),
                    label: h.intl.string(h.t["9E74Dx"]),
                    text: h.intl.format(h.t.A7Aehw, {
                        googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                        authyURL: "https://www.authy.com/",
                    }),
                }),
                (0, s.jsx)(i.cGx, { className: p.yF }),
                (0, s.jsx)(u, {
                    image: (0, s.jsx)(c.Ay, { text: g }),
                    label: h.intl.string(h.t["91InF1"]),
                    text: h.intl.string(h.t.hFeBkl),
                    children: (0, s.jsxs)("div", {
                        className: p.h8,
                        children: [
                            (0, s.jsx)(i.Heading, {
                                variant: "heading-sm/semibold",
                                className: p.p_,
                                children: h.intl.string(h.t["76IPwr"]),
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: p.rJ,
                                selectable: !0,
                                children: n,
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(i.cGx, { className: p.yF }),
                (0, s.jsx)(u, {
                    image: (0, s.jsx)("img", { alt: "", src: r(87282) }),
                    label: h.intl.string(h.t["SaD/LY"]),
                    text: h.intl.string(h.t.vI1zic),
                    children: C,
                }),
            ],
        });
    }
    handleCodeChange = (e) => {
        this.setState({ code: e });
    };
    handleActivate = (e) => {
        e.preventDefault();
        let { totpSecret: t, code: r } = this.state;
        this.setState({ isVerifying: !0 }),
            a.A.enable({ code: r, secret: (0, d.cC)(t) }).then(this.handleActivateSuccess, (e) =>
                this.setState({ error: e.body.message, isVerifying: !1 }),
            );
    };
    handleActivateSuccess = () => {
        let { onClose: e, handleEnableMFASuccess: t } = this.props;
        this.setState({ isVerifying: !1 }), t(), e?.();
    };
}
let E = _;
