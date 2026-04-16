"use strict";
s.d(t, { default: () => E });
var r = s(627968),
    n = s(64700),
    i = s(189213),
    o = s(397927),
    a = s(98207),
    c = s(414121),
    l = s(287809),
    d = s(464477),
    h = s(985018),
    _ = s(876096);
let p = (e) => {
    let { image: t, label: s, text: n, children: i } = e;
    return (0, r.jsxs)("div", {
        className: _.uW,
        children: [
            (0, r.jsx)("div", { className: _.X$, children: t }),
            (0, r.jsx)("div", {
                className: _.f5,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.Heading, { variant: "heading-sm/semibold", className: _.p_, children: s }),
                        (0, r.jsx)(o.Text, { variant: "text-md/normal", children: n }),
                        i,
                    ],
                }),
            }),
        ],
    });
};
class u extends n.PureComponent {
    state = { code: "", totpSecret: (0, d.tn)(), error: null, isVerifying: !1 };
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { totpSecret: n, code: a, isVerifying: u } = this.state,
            E = l.default.getCurrentUser()?.email,
            C = (0, d.V3)(E ?? "", n),
            S = (0, r.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, r.jsxs)("div", {
                    className: _.Kf,
                    children: [
                        (0, r.jsx)(o.ksK, {
                            value: a,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: h.intl.string(h.t["/a5+YV"]),
                            type: "submit",
                            loading: u,
                        }),
                    ],
                }),
            });
        return (0, r.jsxs)(i.Modal, {
            title: h.intl.string(h.t.cDgKte),
            subtitle: h.intl.string(h.t["7NGwtH"]),
            transitionState: e,
            onClose: t,
            actions: [],
            children: [
                (0, r.jsx)(p, {
                    image: (0, r.jsx)("img", { alt: "", src: s(582248), width: 100, height: 100 }),
                    label: h.intl.string(h.t["9E74Dx"]),
                    text: h.intl.format(h.t.A7Aehw, {
                        googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                        authyURL: "https://www.authy.com/",
                    }),
                }),
                (0, r.jsx)(o.cGx, { className: _.yF }),
                (0, r.jsx)(p, {
                    image: (0, r.jsx)(c.Ay, { text: C }),
                    label: h.intl.string(h.t["91InF1"]),
                    text: h.intl.string(h.t.hFeBkl),
                    children: (0, r.jsxs)("div", {
                        className: _.h8,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-sm/semibold",
                                className: _.p_,
                                children: h.intl.string(h.t["76IPwr"]),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: _.rJ,
                                selectable: !0,
                                children: n,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(o.cGx, { className: _.yF }),
                (0, r.jsx)(p, {
                    image: (0, r.jsx)("img", { alt: "", src: s(87282) }),
                    label: h.intl.string(h.t["SaD/LY"]),
                    text: h.intl.string(h.t.vI1zic),
                    children: S,
                }),
            ],
        });
    }
    handleCodeChange = (e) => {
        this.setState({ code: e });
    };
    handleActivate = (e) => {
        e.preventDefault();
        let { totpSecret: t, code: s } = this.state;
        this.setState({ isVerifying: !0 }),
            a.A.enable({ code: s, secret: (0, d.cC)(t) }).then(this.handleActivateSuccess, (e) =>
                this.setState({ error: e.body.message, isVerifying: !1 }),
            );
    };
    handleActivateSuccess = () => {
        let { onClose: e, handleEnableMFASuccess: t } = this.props;
        this.setState({ isVerifying: !1 }), t(), e?.();
    };
}
let E = u;
