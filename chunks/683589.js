n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(607399),
    o = n(397927),
    d = n(354949),
    c = n(975571),
    u = n(446868),
    m = n(652215),
    h = n(985018),
    x = n(441609);
let p = c.A.getArticleURL(m.MVz.VERIFICATION_FAQ);
class g extends i.PureComponent {
    static defaultProps = { types: [m.Fz7.CAPTCHA], onCaptchaVerify: m.tEg, onLogout: m.tEg };
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: i } = this.props;
        return (0, a.jsx)(a.Fragment, {
            children: e.map((e) =>
                e === m.Fz7.CAPTCHA
                    ? (0, a.jsx)(d.A, { onVerify: i, theme: n }, t)
                    : (0, a.jsx)(o.Button, { onClick: () => this.handleClick(e), text: u.A.getButtonTitle(e) }, e),
            ),
        });
    }
    render() {
        return (0, a.jsxs)(o.BJc, {
            gap: 16,
            className: x.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, a.jsxs)(o.BJc, {
                    gap: 16,
                    fullWidth: !1,
                    className: l()(x.kL, { [x.Fr]: r.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, a.jsxs)(o.BJc, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, a.jsx)("div", { className: x.Sl }),
                                (0, a.jsxs)(o.BJc, {
                                    className: x.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, a.jsx)(o.Heading, {
                                            variant: "heading-xl/normal",
                                            children: h.intl.string(h.t.Iz0kDg),
                                        }),
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: h.intl.format(h.t["0rqMV5"], { helpCenterURL: p }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(o.BJc, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, a.jsxs)(o.BJc, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: x.qr,
                            children: h.intl.string(h.t.qqYun3),
                        }),
                        (0, a.jsxs)(o.BJc, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    className: x.qr,
                                    children: h.intl.format(h.t.WL51ZR, { supportURL: c.A.getSubmitRequestURL() }),
                                }),
                                (0, a.jsx)("div", { className: l()(x.qr, x.mf), children: "•" }),
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    className: x.qr,
                                    children: h.intl.format(h.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
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
let _ = g;
