n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(97808),
    l = n(778712),
    s = n(573613),
    o = n(442433),
    d = n(297413),
    u = n(235986),
    c = n(883202);
class A extends r.PureComponent {
    handleContextMenu(e, t) {
        (0, o.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(n.bind(n, 668569));
            return (n) => (0, i.jsx)(e, { ...n, user: t });
        });
    }
    renderUser(e) {
        return null == e
            ? null
            : (0, i.jsxs)(
                  u.A,
                  {
                      className: c.kQ,
                      align: u.A.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, i.jsx)(a.eu, {
                              src: e.getAvatarURL(void 0, 24),
                              "aria-label": e.username,
                              size: l._3.SIZE_24,
                              className: c.my,
                          }),
                          (0, i.jsx)(d.A, { user: e, className: c.Tc, usernameClass: c.Xh, discriminatorClass: c.D2 }),
                      ],
                  },
                  e.id,
              );
    }
    render() {
        let { party: e, header: t } = this.props,
            n = e.map((e) => this.renderUser(e));
        return (0, i.jsxs)("div", {
            className: c.Gh,
            children: [
                (0, i.jsx)("div", { className: c.wx, children: t }),
                (0, i.jsx)(s.Ip, { className: c.Qs, fade: !0, children: n }),
            ],
        });
    }
}
let h = A;
