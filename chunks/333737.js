s.d(e, { default: () => v });
var i = s(627968),
    a = s(64700),
    l = s(189213),
    n = s(534514),
    r = s(834730),
    c = s(292666),
    h = s(821609),
    d = s(404778),
    o = s(98207),
    g = s(414121),
    m = s(287809),
    x = s(464477),
    u = s(985018),
    p = s(876096);
let j = (t) => {
    let { image: e, label: s, text: a, children: l } = t;
    return (0, i.jsxs)("div", {
        className: p.uW,
        children: [
            (0, i.jsx)("div", { className: p.X$, children: e }),
            (0, i.jsx)("div", {
                className: p.f5,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(n.D, { variant: "heading-sm/semibold", className: p.p_, children: s }),
                        (0, i.jsx)(r.E, { variant: "text-md/normal", children: a }),
                        l,
                    ],
                }),
            }),
        ],
    });
};
class b extends a.PureComponent {
    state = { code: "", totpSecret: (0, x.tn)(), error: null, isVerifying: !1 };
    render() {
        let { transitionState: t, onClose: e } = this.props,
            { totpSecret: a, code: o, isVerifying: b } = this.state,
            v = m.default.getCurrentUser()?.email,
            f = (0, x.V3)(v ?? "", a),
            y = (0, i.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, i.jsxs)("div", {
                    className: p.Kf,
                    children: [
                        (0, i.jsx)(c.k, {
                            label: u.intl.string(u.t.HZPBOd),
                            hideLabel: !0,
                            value: o,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, i.jsx)(h.$, {
                            variant: "primary",
                            text: u.intl.string(u.t["/a5+YV"]),
                            type: "submit",
                            loading: b,
                        }),
                    ],
                }),
            });
        return (0, i.jsxs)(l.Modal, {
            title: u.intl.string(u.t.cDgKte),
            subtitle: u.intl.string(u.t["7NGwtH"]),
            transitionState: t,
            onClose: e,
            actions: [],
            children: [
                (0, i.jsx)(j, {
                    image: (0, i.jsx)("img", { alt: "", src: s(582248), width: 100, height: 100 }),
                    label: u.intl.string(u.t["9E74Dx"]),
                    text: u.intl.format(u.t.A7Aehw, {
                        googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                        authyURL: "https://www.authy.com/",
                    }),
                }),
                (0, i.jsx)(d.c, { className: p.yF }),
                (0, i.jsx)(j, {
                    image: (0, i.jsx)(g.Ay, { text: f, ariaLabel: u.intl.string(u.t["91InF1"]) }),
                    label: u.intl.string(u.t["91InF1"]),
                    text: u.intl.string(u.t.hFeBkl),
                    children: (0, i.jsxs)("div", {
                        className: p.h8,
                        children: [
                            (0, i.jsx)(n.D, {
                                variant: "heading-sm/semibold",
                                className: p.p_,
                                children: u.intl.string(u.t["76IPwr"]),
                            }),
                            (0, i.jsx)(r.E, {
                                variant: "text-md/normal",
                                className: p.rJ,
                                selectable: !0,
                                children: a,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(d.c, { className: p.yF }),
                (0, i.jsx)(j, {
                    image: (0, i.jsx)("img", { alt: "", src: s(87282) }),
                    label: u.intl.string(u.t["SaD/LY"]),
                    text: u.intl.string(u.t.vI1zic),
                    children: y,
                }),
            ],
        });
    }
    handleCodeChange = (t) => {
        this.setState({ code: t });
    };
    handleActivate = (t) => {
        t.preventDefault();
        let { totpSecret: e, code: s } = this.state;
        this.setState({ isVerifying: !0 }),
            o.A.enable({ code: s, secret: (0, x.cC)(e) }).then(this.handleActivateSuccess, (t) =>
                this.setState({ error: t.body.message, isVerifying: !1 }),
            );
    };
    handleActivateSuccess = () => {
        let { onClose: t, handleEnableMFASuccess: e } = this.props;
        this.setState({ isVerifying: !1 }), e(), t?.();
    };
}
let v = b;
