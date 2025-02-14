n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(239091),
    s = n(129861),
    o = n(600164),
    d = n(368667);
class c extends l.PureComponent {
    handleContextMenu(e, t) {
        (0, a.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('4616')]).then(n.bind(n, 881351));
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
                      className: d.user,
                      align: o.Z.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, i.jsx)(r.qEK, {
                              src: e.getAvatarURL(void 0, 24),
                              'aria-label': e.username,
                              size: r.EFr.SIZE_24,
                              className: d.avatar
                          }),
                          (0, i.jsx)(s.Z, {
                              user: e,
                              className: d.tag,
                              usernameClass: d.username,
                              discriminatorClass: d.discriminator
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
            className: d.userList,
            children: [
                (0, i.jsx)('div', {
                    className: d.header,
                    children: t
                }),
                (0, i.jsx)(r.zJl, {
                    className: d.content,
                    fade: !0,
                    children: n
                })
            ]
        });
    }
}
let u = c;
