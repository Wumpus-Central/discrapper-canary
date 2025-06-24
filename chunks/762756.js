n.d(t, { Z: () => v }), n(388685);
var r,
    i = n(255367),
    a = n(73800),
    l = n(120356),
    o = n.n(l),
    c = n(873546),
    s = n(481060),
    u = n(599857),
    d = n(600164),
    f = n(63063),
    p = n(1964),
    m = n(981631),
    h = n(388032),
    y = n(816676),
    g = n(20493);
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
class j extends (r = a.PureComponent) {
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
                              className: g.marginBottom20,
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
            className: y.verification,
            align: d.Z.Align.CENTER,
            direction: d.Z.Direction.VERTICAL,
            children: [
                (0, i.jsxs)(d.Z, {
                    className: o()(y.container, { [y.isMobile]: c.tq }),
                    direction: d.Z.Direction.VERTICAL,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: y.image }),
                        (0, i.jsx)('div', {
                            className: o()(y.title, g.marginTop20),
                            children: h.intl.string(h.t.Iz0kDg)
                        }),
                        (0, i.jsx)('div', {
                            className: o()(y.body, g.marginTop4, g.marginBottom20),
                            children: h.intl.format(h.t['0rqMV1'], { helpCenterURL: E })
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
                    className: o()(y.footer, g.marginTop20),
                    children: h.intl.string(h.t.qqYun5)
                }),
                (0, i.jsxs)(d.Z, {
                    className: o()(g.marginTop4, g.marginBottom20),
                    grow: 0,
                    children: [
                        (0, i.jsx)('div', {
                            className: o()(y.footer, y.footerAction),
                            children: h.intl.format(h.t.WL51ZW, { supportURL: f.Z.getSubmitRequestURL() })
                        }),
                        (0, i.jsx)('div', {
                            className: o()(y.footer, y.footerBullet),
                            children: '\u2022'
                        }),
                        (0, i.jsx)('div', {
                            className: o()(y.footer, y.footerAction),
                            children: h.intl.format(h.t.Hv7ztb, { logoutOnClick: this.props.onLogout })
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
b(j, 'defaultProps', {
    types: [m.PUi.CAPTCHA],
    onCaptchaVerify: m.dG4,
    onLogout: m.dG4
});
let v = j;
