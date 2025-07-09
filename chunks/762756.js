(n.d(t, { Z: () => j }), n(388685));
var r,
    i = n(255367),
    a = n(73800),
    l = n(120356),
    c = n.n(l),
    o = n(873546),
    s = n(755721),
    u = n(599857),
    d = n(600164),
    f = n(63063),
    p = n(1964),
    m = n(981631),
    y = n(388032),
    g = n(816676),
    h = n(20493);
function b(e, t, n) {
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
let E = f.Z.getArticleURL(m.BhN.VERIFICATION_FAQ);
class v extends (r = a.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === m.PUi.CAPTCHA
                    ? (0, i.jsx)(
                          u.Z,
                          {
                              onVerify: r,
                              theme: n
                          },
                          t
                      )
                    : (0, i.jsx)(
                          s.zx,
                          {
                              className: h.marginBottom20,
                              onClick: () => this.handleClick(e),
                              children: p.Z.getButtonTitle(e)
                          },
                          e
                      )
            )
        });
    }
    render() {
        return (0, i.jsxs)(d.Z, {
            className: g.verification,
            align: d.Z.Align.CENTER,
            direction: d.Z.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(d.Z, {
                    className: c()(g.container, { [g.isMobile]: o.tq }),
                    direction: d.Z.Direction.VERTICAL,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: g.image }),
                        (0, i.jsx)('div', {
                            className: c()(g.title, h.marginTop20),
                            children: y.intl.string(y.t.Iz0kDg)
                        }),
                        (0, i.jsx)('div', {
                            className: c()(g.body, h.marginTop4, h.marginBottom20),
                            children: y.intl.format(y.t['0rqMV1'], { helpCenterURL: E })
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
                    className: c()(g.footer, h.marginTop20),
                    children: y.intl.string(y.t.qqYun5)
                }),
                (0, i.jsxs)(d.Z, {
                    className: c()(h.marginTop4, h.marginBottom20),
                    grow: 0,
                    children: [
                        (0, i.jsx)('div', {
                            className: c()(g.footer, g.footerAction),
                            children: y.intl.format(y.t.WL51ZW, { supportURL: f.Z.getSubmitRequestURL() })
                        }),
                        (0, i.jsx)('div', {
                            className: c()(g.footer, g.footerBullet),
                            children: '\u2022'
                        }),
                        (0, i.jsx)('div', {
                            className: c()(g.footer, g.footerAction),
                            children: y.intl.format(y.t.Hv7ztb, { logoutOnClick: this.props.onLogout })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            b(this, 'handleClick', (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            }));
    }
}
b(v, 'defaultProps', {
    types: [m.PUi.CAPTCHA],
    onCaptchaVerify: m.dG4,
    onLogout: m.dG4
});
let j = v;
