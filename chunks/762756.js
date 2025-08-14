n.d(t, { Z: () => j }), n(388685);
var r,
    i = n(255367),
    a = n(73800),
    l = n(120356),
    c = n.n(l),
    o = n(873546),
    s = n(481060),
    u = n(599857),
    d = n(63063),
    f = n(1964),
    p = n(981631),
    y = n(388032),
    m = n(222198);
function h(e, t, n) {
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
let g = d.Z.getArticleURL(p.BhN.VERIFICATION_FAQ);
class b extends (r = a.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === p.PUi.CAPTCHA
                    ? (0, i.jsx)(
                          u.Z,
                          {
                              onVerify: r,
                              theme: n,
                          },
                          t,
                      )
                    : (0, i.jsx)(
                          s.zxk,
                          {
                              onClick: () => this.handleClick(e),
                              text: f.Z.getButtonTitle(e),
                          },
                          e,
                      ),
            ),
        });
    }
    render() {
        return (0, i.jsxs)(s.Kqy, {
            gap: 16,
            className: m.verification,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
                (0, i.jsxs)(s.Kqy, {
                    gap: 16,
                    className: c()(m.container, { [m.isMobile]: o.tq }),
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsxs)(s.Kqy, {
                            align: "center",
                            direction: "vertical",
                            justify: "center",
                            gap: 16,
                            children: [
                                (0, i.jsx)("div", { className: m.image }),
                                (0, i.jsxs)(s.Kqy, {
                                    className: m.textContainer,
                                    gap: 4,
                                    align: "center",
                                    direction: "vertical",
                                    justify: "center",
                                    children: [
                                        (0, i.jsx)(s.X6q, {
                                            variant: "heading-xl/normal",
                                            children: y.intl.string(y.t.Iz0kDg),
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.format(y.t["0rqMV1"], { helpCenterURL: g }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.Kqy, {
                            gap: 16,
                            direction: "vertical",
                            justify: "center",
                            align: "center",
                            children: this.renderFields(),
                        }),
                    ],
                }),
                (0, i.jsxs)(s.Kqy, {
                    gap: 8,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            className: m.footer,
                            children: y.intl.string(y.t.qqYun5),
                        }),
                        (0, i.jsxs)(s.Kqy, {
                            gap: 8,
                            align: "center",
                            direction: "horizontal",
                            justify: "center",
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    className: m.footer,
                                    children: y.intl.format(y.t.WL51ZW, { supportURL: d.Z.getSubmitRequestURL() }),
                                }),
                                (0, i.jsx)("div", {
                                    className: c()(m.footer, m.footerBullet),
                                    children: "\u2022",
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    className: m.footer,
                                    children: y.intl.format(y.t.Hv7ztb, { logoutOnClick: this.props.onLogout }),
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
            h(this, "handleClick", (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
h(b, "defaultProps", {
    types: [p.PUi.CAPTCHA],
    onCaptchaVerify: p.dG4,
    onLogout: p.dG4,
});
let j = b;
