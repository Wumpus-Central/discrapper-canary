n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(607399),
    o = n(821609),
    d = n(331322),
    c = n(534514),
    u = n(834730),
    p = n(354949),
    h = n(975571),
    m = n(446868),
    _ = n(652215),
    A = n(985018),
    f = n(72828);
let g = h.A.getArticleURL(_.MVz.VERIFICATION_FAQ);
class x extends s.PureComponent {
    static defaultProps = { types: [_.Fz7.CAPTCHA], onCaptchaVerify: _.tEg, onLogout: _.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: s } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === _.Fz7.CAPTCHA
                    ? (0, i.jsx)(p.A, { onVerify: s, theme: n }, t)
                    : (0, i.jsx)(o.$, { onClick: () => this.handleClick(e), text: m.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(d.B, {
            gap: 16,
            className: f.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(d.B, {
                    gap: 16,
                    fullWidth: !1,
                    className: a()(f.kL, { [f.Fr]: r.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(d.B, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: f.Sl }),
                                (0, i.jsxs)(d.B, {
                                    className: f.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(c.D, {
                                            variant: "heading-xl/normal",
                                            children: A.intl.string(A.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            children: A.intl.format(A.t["0rqMV5"], { helpCenterURL: g }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(d.B, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(d.B, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/normal",
                            className: f.qr,
                            children: A.intl.string(A.t.qqYun3),
                        }),
                        (0, i.jsxs)(d.B, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    className: f.qr,
                                    children: A.intl.format(A.t.WL51ZR, { supportURL: h.A.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", { className: a()(f.qr, f.mf), children: "•" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    className: f.qr,
                                    children: A.intl.format(A.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    handleClick = (e) => {
        let { onClick: t } = this.props;
        t?.(e);
    };
}
let E = x;
