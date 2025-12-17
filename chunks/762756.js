n.d(t, { Z: () => v }), n(388685);
var a,
    r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(873546),
    c = n(481060),
    d = n(599857),
    u = n(63063),
    m = n(1964),
    p = n(981631),
    h = n(388032),
    f = n(922895);
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
let b = u.Z.getArticleURL(p.BhN.VERIFICATION_FAQ);
class g extends (a = l.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: a } = this.props;
        return (0, r.jsx)(r.Fragment, {
            children: e.map((e) =>
                e === p.PUi.CAPTCHA
                    ? (0, r.jsx)(
                          d.Z,
                          {
                              onVerify: a,
                              theme: n,
                          },
                          t,
                      )
                    : (0, r.jsx)(
                          c.Button,
                          {
                              onClick: () => this.handleClick(e),
                              text: m.Z.getButtonTitle(e),
                          },
                          e,
                      ),
            ),
        });
    }
    render() {
        return (0, r.jsxs)(c.Kqy, {
            gap: 16,
            className: f.verification,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, r.jsxs)(c.Kqy, {
                    gap: 16,
                    fullWidth: !1,
                    className: s()(f.container, { [f.isMobile]: o.tq }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, r.jsxs)(c.Kqy, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, r.jsx)("div", { className: f.image }),
                                (0, r.jsxs)(c.Kqy, {
                                    className: f.textContainer,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-xl/normal",
                                            children: h.intl.string(h.t.Iz0kDg),
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: h.intl.format(h.t["0rqMV5"], { helpCenterURL: b }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Kqy, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, r.jsxs)(c.Kqy, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: f.footer,
                            children: h.intl.string(h.t.qqYun3),
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    className: f.footer,
                                    children: h.intl.format(h.t.WL51ZR, { supportURL: u.Z.getSubmitRequestURL() }),
                                }),
                                (0, r.jsx)("div", {
                                    className: s()(f.footer, f.footerBullet),
                                    children: "\u2022",
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    className: f.footer,
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
    types: [p.PUi.CAPTCHA],
    onCaptchaVerify: p.dG4,
    onLogout: p.dG4,
});
let v = g;
