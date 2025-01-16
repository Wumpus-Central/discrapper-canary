n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    c = n(481060),
    d = n(599857),
    u = n(600164),
    h = n(63063),
    m = n(1964),
    p = n(981631),
    g = n(388032),
    f = n(906540),
    _ = n(232186);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = h.Z.getArticleURL(p.BhN.VERIFICATION_FAQ);
class C extends (i = l.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: i } = this.props;
        return (0, r.jsx)(r.Fragment, {
            children: e.map((e) =>
                e === p.PUi.CAPTCHA
                    ? (0, r.jsx)(
                          d.Z,
                          {
                              onVerify: i,
                              theme: n
                          },
                          t
                      )
                    : (0, r.jsx)(
                          c.Button,
                          {
                              className: s()(_.marginBottom20),
                              onClick: () => this.handleClick(e),
                              children: m.Z.getButtonTitle(e)
                          },
                          e
                      )
            )
        });
    }
    render() {
        return (0, r.jsxs)(u.Z, {
            className: f.verification,
            align: u.Z.Align.CENTER,
            direction: u.Z.Direction.VERTICAL,
            children: [
                (0, r.jsxs)(u.Z, {
                    className: s()(f.container, { [f.isMobile]: o.tq }),
                    direction: u.Z.Direction.VERTICAL,
                    align: u.Z.Align.CENTER,
                    justify: u.Z.Justify.CENTER,
                    children: [
                        (0, r.jsx)('div', { className: f.image }),
                        (0, r.jsx)('div', {
                            className: s()(f.title, _.marginTop20),
                            children: g.intl.string(g.t.Iz0kDg)
                        }),
                        (0, r.jsx)('div', {
                            className: s()(f.body, _.marginTop4, _.marginBottom20),
                            children: g.intl.format(g.t['//ppOD'], { helpCenterURL: I })
                        }),
                        (0, r.jsx)(u.Z, {
                            grow: 0,
                            direction: u.Z.Direction.VERTICAL,
                            justify: u.Z.Justify.CENTER,
                            children: this.renderFields()
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: s()(f.footer, _.marginTop20),
                    children: g.intl.string(g.t.qqYun5)
                }),
                (0, r.jsxs)(u.Z, {
                    className: s()(_.marginTop4, _.marginBottom20),
                    grow: 0,
                    children: [
                        (0, r.jsx)('div', {
                            className: s()(f.footer, f.footerAction),
                            children: g.intl.format(g.t.WL51ZW, { supportURL: h.Z.getSubmitRequestURL() })
                        }),
                        (0, r.jsx)('div', {
                            className: s()(f.footer, f.footerBullet),
                            children: '\u2022'
                        }),
                        (0, r.jsx)('div', {
                            className: s()(f.footer, f.footerAction),
                            children: g.intl.format(g.t.Hv7ztb, { logoutOnClick: this.props.onLogout })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleClick', (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
E(C, 'defaultProps', {
    types: [p.PUi.CAPTCHA],
    onCaptchaVerify: p.dG4,
    onLogout: p.dG4
}),
    (t.Z = C);
