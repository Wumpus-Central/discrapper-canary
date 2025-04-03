n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(239091),
    o = n(129861),
    s = n(600164),
    c = n(983184);
class u extends i.PureComponent {
    handleContextMenu(e, t) {
        (0, a.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    e,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, n)),
                    (l = l = { user: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i)
                );
            };
        });
    }
    renderUser(e) {
        return null == e
            ? null
            : (0, r.jsxs)(
                  s.Z,
                  {
                      className: c.user,
                      align: s.Z.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, r.jsx)(l.qEK, {
                              src: e.getAvatarURL(void 0, 24),
                              'aria-label': e.username,
                              size: l.EFr.SIZE_24,
                              className: c.avatar
                          }),
                          (0, r.jsx)(o.Z, {
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
        return (0, r.jsxs)('div', {
            className: c.userList,
            children: [
                (0, r.jsx)('div', {
                    className: c.header,
                    children: t
                }),
                (0, r.jsx)(l.zJl, {
                    className: c.content,
                    fade: !0,
                    children: n
                })
            ]
        });
    }
}
let d = u;
