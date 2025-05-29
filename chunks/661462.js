n.d(t, { Z: () => p }), n(388685);
var o = n(255367),
    r = n(73800),
    i = n(481060),
    c = n(785717),
    l = n(128156),
    a = n(311044),
    s = n(408986),
    d = n(228168),
    u = n(662776);
function f(e) {
    let { user: t, currentUser: n, section: r, subsection: i, displayProfile: c, guildId: u, channelId: f, onClose: p } = e;
    return r === d.oh.ACTIVITY
        ? (0, o.jsx)(l.Z, {
              user: t,
              currentUser: n,
              displayProfile: c,
              guildId: u,
              channelId: f,
              subsection: i,
              onClose: p
          })
        : r === d.oh.MUTUAL_FRIENDS
          ? (0, o.jsx)(a.Z, {
                user: t,
                guildId: u,
                channelId: f,
                onClose: p
            })
          : r === d.oh.MUTUAL_GUILDS
            ? (0, o.jsx)(s.Z, {
                  user: t,
                  onClose: p
              })
            : null;
}
function p(e) {
    var t, n, l;
    let { user: a, currentUser: s, displayProfile: d, guildId: p, channelId: m, items: b, initialSection: _, initialSubsection: y, onClose: x } = e,
        { trackUserProfileAction: h } = (0, c.KZ)(),
        [{ section: j, subsection: g, text: O }, I] = r.useState(
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        o.forEach(function (t) {
                            var o;
                            (o = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = o);
                        });
                }
                return e;
            })(
                {},
                null !=
                    (t = b.find((e) => {
                        let { section: t } = e;
                        return t === _;
                    }))
                    ? t
                    : b[0]
            )),
            (l = l = { subsection: y }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, o);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            n)
        );
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsx)(i.njP, {
                type: 'top',
                className: u.tabBar,
                selectedItem: j,
                onItemSelect: (e) => {
                    h({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        I((t) => {
                            var n;
                            return null != (n = b.find((t) => t.section === e)) ? n : t;
                        });
                },
                children: b.map((e) =>
                    (0, o.jsx)(
                        i.njP.Item,
                        {
                            className: u.tabBarItem,
                            id: e.section,
                            'aria-label': e.text,
                            children: (0, o.jsx)(i.Text, {
                                variant: 'heading-md/normal',
                                tag: 'span',
                                children: e.text
                            })
                        },
                        e.section
                    )
                )
            }),
            (0, o.jsx)(i.njP.Panel, {
                id: j,
                'aria-label': O,
                className: u.tabBarPanel,
                children: (0, o.jsx)(f, {
                    user: a,
                    currentUser: s,
                    displayProfile: d,
                    guildId: p,
                    channelId: m,
                    section: j,
                    subsection: g,
                    onClose: x
                })
            })
        ]
    });
}
