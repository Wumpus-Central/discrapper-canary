n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(239091),
    s = n(129861),
    o = n(600164),
    c = n(320538);
class d extends l.PureComponent {
    handleContextMenu(e, t) {
        (0, a.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('18509')]).then(n.bind(n, 881351));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    user: t
                });
        });
    }
    renderUser(e) {
        return null == e
            ? null
            : (0, i.jsxs)(
                  o.Z,
                  {
                      className: c.user,
                      align: o.Z.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, i.jsx)(r.qEK, {
                              src: e.getAvatarURL(void 0, 24),
                              'aria-label': e.username,
                              size: r.EFr.SIZE_24,
                              className: c.avatar
                          }),
                          (0, i.jsx)(s.Z, {
                              user: e,
                              className: c.tag,
                              usernameClass: c.username,
                              discriminatorClass: c.discriminator
                          })
                      ]
                  },
                  e.id
              );
    }
    render() {
        let { party: e, header: t } = this.props,
            n = e.map((e) => this.renderUser(e));
        return (0, i.jsxs)('div', {
            className: c.userList,
            children: [
                (0, i.jsx)('div', {
                    className: c.header,
                    children: t
                }),
                (0, i.jsx)(r.zJl, {
                    className: c.content,
                    fade: !0,
                    children: n
                })
            ]
        });
    }
}
let u = d;
