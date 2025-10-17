n.d(t, { Z: () => v }), n(388685);
var a,
    r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(873546),
    c = n(481060),
    d = n(599857),
    u = n(63063),
    m = n(1964),
    p = n(981631),
    h = n(388032),
    x = n(222198);
function f(e, t, n) {
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
let g = u.Z.getArticleURL(p.BhN.VERIFICATION_FAQ);
class b extends (a = i.PureComponent) {
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
            className: x.verification,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, r.jsxs)(c.Kqy, {
                    gap: 16,
                    fullWidth: !1,
                    className: o()(x.container, { [x.isMobile]: s.tq }),
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
                                (0, r.jsx)("div", { className: x.image }),
                                (0, r.jsxs)(c.Kqy, {
                                    className: x.textContainer,
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
                                            children: h.intl.format(h.t["0rqMV1"], { helpCenterURL: g }),
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
                            className: x.footer,
                            children: h.intl.string(h.t.qqYun5),
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    className: x.footer,
                                    children: h.intl.format(h.t.WL51ZW, { supportURL: u.Z.getSubmitRequestURL() }),
                                }),
                                (0, r.jsx)("div", {
                                    className: o()(x.footer, x.footerBullet),
                                    children: "\u2022",
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    className: x.footer,
                                    children: h.intl.format(h.t.Hv7ztb, { logoutOnClick: this.props.onLogout }),
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
            f(this, "handleClick", (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
f(b, "defaultProps", {
    types: [p.PUi.CAPTCHA],
    onCaptchaVerify: p.dG4,
    onLogout: p.dG4,
});
let v = b;
