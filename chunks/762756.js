n.d(t, { Z: () => E }), n(388685);
var r,
    i = n(255367),
    a = n(73800),
    l = n(120356),
    c = n.n(l),
    o = n(873546),
    s = n(481060),
    u = n(599857),
    d = n(600164),
    f = n(63063),
    p = n(1964),
    m = n(981631),
    g = n(388032),
    h = n(816676),
    y = n(20493);
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
let j = f.Z.getArticleURL(m.BhN.VERIFICATION_FAQ);
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
                          s.zxk,
                          {
                              className: y.marginBottom20,
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
            className: h.verification,
            align: d.Z.Align.CENTER,
            direction: d.Z.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(d.Z, {
                    className: c()(h.container, { [h.isMobile]: o.tq }),
                    direction: d.Z.Direction.VERTICAL,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: h.image }),
                        (0, i.jsx)('div', {
                            className: c()(h.title, y.marginTop20),
                            children: g.intl.string(g.t.Iz0kDg)
                        }),
                        (0, i.jsx)('div', {
                            className: c()(h.body, y.marginTop4, y.marginBottom20),
                            children: g.intl.format(g.t['0rqMV1'], { helpCenterURL: j })
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
                    className: c()(h.footer, y.marginTop20),
                    children: g.intl.string(g.t.qqYun5)
                }),
                (0, i.jsxs)(d.Z, {
                    className: c()(y.marginTop4, y.marginBottom20),
                    grow: 0,
                    children: [
                        (0, i.jsx)('div', {
                            className: c()(h.footer, h.footerAction),
                            children: g.intl.format(g.t.WL51ZW, { supportURL: f.Z.getSubmitRequestURL() })
                        }),
                        (0, i.jsx)('div', {
                            className: c()(h.footer, h.footerBullet),
                            children: '\u2022'
                        }),
                        (0, i.jsx)('div', {
                            className: c()(h.footer, h.footerAction),
                            children: g.intl.format(g.t.Hv7ztb, { logoutOnClick: this.props.onLogout })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleClick', (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
b(v, 'defaultProps', {
    types: [m.PUi.CAPTCHA],
    onCaptchaVerify: m.dG4,
    onLogout: m.dG4
});
let E = v;
