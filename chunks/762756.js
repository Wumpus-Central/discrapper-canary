r.d(t, { Z: () => E }), r(388685);
var n,
    i = r(255367),
    c = r(73800),
    o = r(120356),
    l = r.n(o),
    a = r(873546),
    s = r(481060),
    u = r(599857),
    f = r(600164),
    p = r(63063),
    d = r(1964),
    y = r(981631),
    g = r(388032),
    m = r(816676),
    b = r(20493);
function h(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let O = p.Z.getArticleURL(y.BhN.VERIFICATION_FAQ);
class j extends (n = c.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: r, onCaptchaVerify: n } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === y.PUi.CAPTCHA
                    ? (0, i.jsx)(
                          u.Z,
                          {
                              onVerify: n,
                              theme: r
                          },
                          t
                      )
                    : (0, i.jsx)(
                          s.zxk,
                          {
                              className: b.marginBottom20,
                              onClick: () => this.handleClick(e),
                              children: d.Z.getButtonTitle(e)
                          },
                          e
                      )
            )
        });
    }
    render() {
        return (0, i.jsxs)(f.Z, {
            className: m.verification,
            align: f.Z.Align.CENTER,
            direction: f.Z.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(f.Z, {
                    className: l()(m.container, { [m.isMobile]: a.tq }),
                    direction: f.Z.Direction.VERTICAL,
                    align: f.Z.Align.CENTER,
                    justify: f.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: m.image }),
                        (0, i.jsx)('div', {
                            className: l()(m.title, b.marginTop20),
                            children: g.intl.string(g.t.Iz0kDg)
                        }),
                        (0, i.jsx)('div', {
                            className: l()(m.body, b.marginTop4, b.marginBottom20),
                            children: g.intl.format(g.t['0rqMV1'], { helpCenterURL: O })
                        }),
                        (0, i.jsx)(f.Z, {
                            grow: 0,
                            direction: f.Z.Direction.VERTICAL,
                            justify: f.Z.Justify.CENTER,
                            children: this.renderFields()
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: l()(m.footer, b.marginTop20),
                    children: g.intl.string(g.t.qqYun5)
                }),
                (0, i.jsxs)(f.Z, {
                    className: l()(b.marginTop4, b.marginBottom20),
                    grow: 0,
                    children: [
                        (0, i.jsx)('div', {
                            className: l()(m.footer, m.footerAction),
                            children: g.intl.format(g.t.WL51ZW, { supportURL: p.Z.getSubmitRequestURL() })
                        }),
                        (0, i.jsx)('div', {
                            className: l()(m.footer, m.footerBullet),
                            children: '\u2022'
                        }),
                        (0, i.jsx)('div', {
                            className: l()(m.footer, m.footerAction),
                            children: g.intl.format(g.t.Hv7ztb, { logoutOnClick: this.props.onLogout })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'handleClick', (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
h(j, 'defaultProps', {
    types: [y.PUi.CAPTCHA],
    onCaptchaVerify: y.dG4,
    onLogout: y.dG4
});
let E = j;
