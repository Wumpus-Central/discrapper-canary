"use strict";
r.d(t, { default: () => m });
var s = r(627968),
    n = r(64700),
    i = r(189213),
    o = r(534514),
    a = r(834730),
    c = r(292666),
    l = r(821609),
    d = r(404778),
    h = r(98207),
    _ = r(414121),
    p = r(287809),
    u = r(464477),
    E = r(985018),
    C = r(274112);
let S = (e) => {
    let { image: t, label: r, text: n, children: i } = e;
    return (0, s.jsxs)("div", {
        className: C.uW,
        children: [
            (0, s.jsx)("div", { className: C.X$, children: t }),
            (0, s.jsx)("div", {
                className: C.f5,
                children: (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(o.D, { variant: "heading-sm/semibold", className: C.p_, children: r }),
                        (0, s.jsx)(a.E, { variant: "text-md/normal", children: n }),
                        i,
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
            m = p.default.getCurrentUser()?.email,
            y = (0, u.V3)(m ?? "", n),
            A = (0, s.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, s.jsxs)("div", {
                    className: C.Kf,
                    children: [
                        (0, s.jsx)(c.k, {
                            label: E.intl.string(E.t.HZPBOd),
                            hideLabel: !0,
                            value: h,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, s.jsx)(l.$, {
                            variant: "primary",
                            text: E.intl.string(E.t["/a5+YV"]),
                            type: "submit",
                            loading: g,
                        }),
                    ],
                }),
            });
        return (0, s.jsxs)(i.Modal, {
            title: E.intl.string(E.t.cDgKte),
            subtitle: E.intl.string(E.t["7NGwtH"]),
            transitionState: e,
            onClose: t,
            actions: [],
            children: [
                (0, s.jsx)(S, {
                    image: (0, s.jsx)("img", { alt: "", src: r(582248), width: 100, height: 100 }),
                    label: E.intl.string(E.t["9E74Dx"]),
                    text: E.intl.format(E.t.A7Aehw, {
                        googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                        authyURL: "https://www.authy.com/",
                    }),
                }),
                (0, s.jsx)(d.c, { className: C.yF }),
                (0, s.jsx)(S, {
                    image: (0, s.jsx)(_.Ay, { text: y, ariaLabel: E.intl.string(E.t["91InF1"]) }),
                    label: E.intl.string(E.t["91InF1"]),
                    text: E.intl.string(E.t.hFeBkl),
                    children: (0, s.jsxs)("div", {
                        className: C.h8,
                        children: [
                            (0, s.jsx)(o.D, {
                                variant: "heading-sm/semibold",
                                className: C.p_,
                                children: E.intl.string(E.t["76IPwr"]),
                            }),
                            (0, s.jsx)(a.E, {
                                variant: "text-md/normal",
                                className: C.rJ,
                                selectable: !0,
                                children: n,
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(d.c, { className: C.yF }),
                (0, s.jsx)(S, {
                    image: (0, s.jsx)("img", { alt: "", src: r(87282) }),
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
        let { totpSecret: t, code: r } = this.state;
        this.setState({ isVerifying: !0 }),
            h.A.enable({ code: r, secret: (0, u.cC)(t) }).then(this.handleActivateSuccess, (e) =>
                this.setState({ error: e.body.message, isVerifying: !1 }),
            );
    };
    handleActivateSuccess = () => {
        let { onClose: e, handleEnableMFASuccess: t } = this.props;
        this.setState({ isVerifying: !1 }), t(), e?.();
    };
}
let m = g;
