"use strict";
s.d(t, { default: () => y });
var r = s(627968),
    n = s(64700),
    o = s(189213),
    i = s(534514),
    a = s(834730),
    c = s(292666),
    l = s(821609),
    d = s(404778),
    h = s(98207),
    _ = s(414121),
    p = s(287809),
    u = s(464477),
    E = s(985018),
    C = s(876096);
let S = (e) => {
    let { image: t, label: s, text: n, children: o } = e;
    return (0, r.jsxs)("div", {
        className: C.uW,
        children: [
            (0, r.jsx)("div", { className: C.X$, children: t }),
            (0, r.jsx)("div", {
                className: C.f5,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(i.D, { variant: "heading-sm/semibold", className: C.p_, children: s }),
                        (0, r.jsx)(a.E, { variant: "text-md/normal", children: n }),
                        o,
                    ],
                }),
            }),
        ],
    });
};
class g extends n.PureComponent {
    state = { code: "", totpSecret: (0, u.tn)(), error: null, isVerifying: !1 };
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { totpSecret: n, code: h, isVerifying: g } = this.state,
            y = p.default.getCurrentUser()?.email,
            m = (0, u.V3)(y ?? "", n),
            A = (0, r.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, r.jsxs)("div", {
                    className: C.Kf,
                    children: [
                        (0, r.jsx)(c.k, {
                            value: h,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(l.$, {
                            variant: "primary",
                            text: E.intl.string(E.t["/a5+YV"]),
                            type: "submit",
                            loading: g,
                        }),
                    ],
                }),
            });
        return (0, r.jsxs)(o.Modal, {
            title: E.intl.string(E.t.cDgKte),
            subtitle: E.intl.string(E.t["7NGwtH"]),
            transitionState: e,
            onClose: t,
            actions: [],
            children: [
                (0, r.jsx)(S, {
                    image: (0, r.jsx)("img", { alt: "", src: s(582248), width: 100, height: 100 }),
                    label: E.intl.string(E.t["9E74Dx"]),
                    text: E.intl.format(E.t.A7Aehw, {
                        googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                        authyURL: "https://www.authy.com/",
                    }),
                }),
                (0, r.jsx)(d.c, { className: C.yF }),
                (0, r.jsx)(S, {
                    image: (0, r.jsx)(_.Ay, { text: m }),
                    label: E.intl.string(E.t["91InF1"]),
                    text: E.intl.string(E.t.hFeBkl),
                    children: (0, r.jsxs)("div", {
                        className: C.h8,
                        children: [
                            (0, r.jsx)(i.D, {
                                variant: "heading-sm/semibold",
                                className: C.p_,
                                children: E.intl.string(E.t["76IPwr"]),
                            }),
                            (0, r.jsx)(a.E, {
                                variant: "text-md/normal",
                                className: C.rJ,
                                selectable: !0,
                                children: n,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(d.c, { className: C.yF }),
                (0, r.jsx)(S, {
                    image: (0, r.jsx)("img", { alt: "", src: s(87282) }),
                    label: E.intl.string(E.t["SaD/LY"]),
                    text: E.intl.string(E.t.vI1zic),
                    children: A,
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
            h.A.enable({ code: s, secret: (0, u.cC)(t) }).then(this.handleActivateSuccess, (e) =>
                this.setState({ error: e.body.message, isVerifying: !1 }),
            );
    };
    handleActivateSuccess = () => {
        let { onClose: e, handleEnableMFASuccess: t } = this.props;
        this.setState({ isVerifying: !1 }), t(), e?.();
    };
}
let y = g;
