n.d(t, { Z: () => N }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(873546),
    c = n(481060),
    u = n(599857),
    d = n(600164),
    p = n(63063),
    h = n(1964),
    g = n(981631),
    f = n(388032),
    m = n(789276),
    b = n(455812);
function _(e, t, n) {
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
let E = p.Z.getArticleURL(g.BhN.VERIFICATION_FAQ);
class O extends (r = l.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === g.PUi.CAPTCHA
                    ? (0, i.jsx)(
                          u.Z,
                          {
                              onVerify: r,
                              theme: n
                          },
                          t
                      )
                    : (0, i.jsx)(
                          c.zxk,
                          {
                              className: a()(b.marginBottom20),
                              onClick: () => this.handleClick(e),
                              children: h.Z.getButtonTitle(e)
                          },
                          e
                      )
            )
        });
    }
    render() {
        return (0, i.jsxs)(d.Z, {
            className: m.verification,
            align: d.Z.Align.CENTER,
            direction: d.Z.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(d.Z, {
                    className: a()(m.container, { [m.isMobile]: s.tq }),
                    direction: d.Z.Direction.VERTICAL,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: m.image }),
                        (0, i.jsx)('div', {
                            className: a()(m.title, b.marginTop20),
                            children: f.NW.string(f.t.Iz0kDg)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(m.body, b.marginTop4, b.marginBottom20),
                            children: f.NW.format(f.t['0rqMV1'], { helpCenterURL: E })
                        }),
                        (0, i.jsx)(d.Z, {
                            grow: 0,
                            direction: d.Z.Direction.VERTICAL,
                            justify: d.Z.Justify.CENTER,
                            children: this.renderFields()
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: a()(m.footer, b.marginTop20),
                    children: f.NW.string(f.t.qqYun5)
                }),
                (0, i.jsxs)(d.Z, {
                    className: a()(b.marginTop4, b.marginBottom20),
                    grow: 0,
                    children: [
                        (0, i.jsx)('div', {
                            className: a()(m.footer, m.footerAction),
                            children: f.NW.format(f.t.WL51ZW, { supportURL: p.Z.getSubmitRequestURL() })
                        }),
                        (0, i.jsx)('div', {
                            className: a()(m.footer, m.footerBullet),
                            children: '\u2022'
                        }),
                        (0, i.jsx)('div', {
                            className: a()(m.footer, m.footerAction),
                            children: f.NW.format(f.t.Hv7ztb, { logoutOnClick: this.props.onLogout })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleClick', (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
_(O, 'defaultProps', {
    types: [g.PUi.CAPTCHA],
    onCaptchaVerify: g.dG4,
    onLogout: g.dG4
});
let N = O;
