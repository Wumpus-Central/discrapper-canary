n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    c = n(481060),
    u = n(599857),
    d = n(600164),
    p = n(63063),
    h = n(1964),
    f = n(981631),
    g = n(388032),
    m = n(816676),
    b = n(20493);
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
let E = p.Z.getArticleURL(f.BhN.VERIFICATION_FAQ);
class O extends (r = l.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
        return (0, i.jsx)(i.Fragment, {
            children: e.map((e) =>
                e === f.PUi.CAPTCHA
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
                              className: b.marginBottom20,
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
                    className: o()(m.container, { [m.isMobile]: s.tq }),
                    direction: d.Z.Direction.VERTICAL,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: m.image }),
                        (0, i.jsx)('div', {
                            className: o()(m.title, b.marginTop20),
                            children: g.intl.string(g.t.Iz0kDg)
                        }),
                        (0, i.jsx)('div', {
                            className: o()(m.body, b.marginTop4, b.marginBottom20),
                            children: g.intl.format(g.t['0rqMV1'], { helpCenterURL: E })
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
                    className: o()(m.footer, b.marginTop20),
                    children: g.intl.string(g.t.qqYun5)
                }),
                (0, i.jsxs)(d.Z, {
                    className: o()(b.marginTop4, b.marginBottom20),
                    grow: 0,
                    children: [
                        (0, i.jsx)('div', {
                            className: o()(m.footer, m.footerAction),
                            children: g.intl.format(g.t.WL51ZW, { supportURL: p.Z.getSubmitRequestURL() })
                        }),
                        (0, i.jsx)('div', {
                            className: o()(m.footer, m.footerBullet),
                            children: '\u2022'
                        }),
                        (0, i.jsx)('div', {
                            className: o()(m.footer, m.footerAction),
                            children: g.intl.format(g.t.Hv7ztb, { logoutOnClick: this.props.onLogout })
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
    types: [f.PUi.CAPTCHA],
    onCaptchaVerify: f.dG4,
    onLogout: f.dG4
});
let y = O;
