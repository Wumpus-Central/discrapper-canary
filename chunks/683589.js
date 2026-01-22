n.d(t, { A: () => v }), n(896048);
var a,
    l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(607399),
    c = n(397927),
    d = n(354949),
    u = n(975571),
    m = n(446868),
    p = n(652215),
    h = n(985018),
    f = n(441609);
function x(e, t, n) {
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
let b = u.A.getArticleURL(p.MVz.VERIFICATION_FAQ);
class g extends (a = i.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: a } = this.props;
        return (0, l.jsx)(l.Fragment, {
            children: e.map((e) =>
                e === p.Fz7.CAPTCHA
                    ? (0, l.jsx)(
                          d.A,
                          {
                              onVerify: a,
                              theme: n,
                          },
                          t,
                      )
                    : (0, l.jsx)(
                          c.Button,
                          {
                              onClick: () => this.handleClick(e),
                              text: m.A.getButtonTitle(e),
                          },
                          e,
                      ),
            ),
        });
    }
    render() {
        return (0, l.jsxs)(c.BJc, {
            gap: 16,
            className: f.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, l.jsxs)(c.BJc, {
                    gap: 16,
                    fullWidth: !1,
                    className: s()(f.kL, { [f.Fr]: o.Fr }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, l.jsxs)(c.BJc, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, l.jsx)("div", { className: f.Sl }),
                                (0, l.jsxs)(c.BJc, {
                                    className: f.FS,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, l.jsx)(c.Heading, {
                                            variant: "heading-xl/normal",
                                            children: h.intl.string(h.t.Iz0kDg),
                                        }),
                                        (0, l.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: h.intl.format(h.t["0rqMV5"], { helpCenterURL: b }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)(c.BJc, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, l.jsxs)(c.BJc, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, l.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: f.qr,
                            children: h.intl.string(h.t.qqYun3),
                        }),
                        (0, l.jsxs)(c.BJc, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, l.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    className: f.qr,
                                    children: h.intl.format(h.t.WL51ZR, { supportURL: u.A.getSubmitRequestURL() }),
                                }),
                                (0, l.jsx)("div", {
                                    className: s()(f.qr, f.mf),
                                    children: "\u2022",
                                }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    className: f.qr,
                                    children: h.intl.format(h.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "handleClick", (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
x(g, "defaultProps", {
    types: [p.Fz7.CAPTCHA],
    onCaptchaVerify: p.tEg,
    onLogout: p.tEg,
});
let v = g;
