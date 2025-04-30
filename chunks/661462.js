t.d(n, { Z: () => p }), t(388685);
var o = t(200651),
    r = t(192379),
    c = t(481060),
    i = t(785717),
    a = t(128156),
    l = t(311044),
    s = t(408986),
    d = t(228168),
    u = t(662776);
function f(e) {
    let { user: n, currentUser: t, section: r, subsection: c, displayProfile: i, guildId: u, channelId: f, onClose: p } = e;
    return r === d.oh.ACTIVITY
        ? (0, o.jsx)(a.Z, {
              user: n,
              currentUser: t,
              displayProfile: i,
              guildId: u,
              subsection: c,
              onClose: p
          })
        : r === d.oh.MUTUAL_FRIENDS
          ? (0, o.jsx)(l.Z, {
                user: n,
                guildId: u,
                channelId: f,
                onClose: p
            })
          : r === d.oh.MUTUAL_GUILDS
            ? (0, o.jsx)(s.Z, {
                  user: n,
                  onClose: p
              })
            : null;
}
function p(e) {
    var n, t, a;
    let { user: l, currentUser: s, displayProfile: d, guildId: p, channelId: m, items: b, initialSection: _, initialSubsection: y, onClose: h } = e,
        { trackUserProfileAction: j } = (0, i.KZ)(),
        [{ section: x, subsection: g, text: I }, O] = r.useState(
            ((t = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        o.forEach(function (n) {
                            var o;
                            (o = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = o);
                        });
                }
                return e;
            })(
                {},
                null !=
                    (n = b.find((e) => {
                        let { section: n } = e;
                        return n === _;
                    }))
                    ? n
                    : b[0]
            )),
            (a = a = { subsection: y }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, o);
                      }
                      return t;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            t)
        );
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsx)(c.njP, {
                type: 'top',
                className: u.tabBar,
                selectedItem: x,
                onItemSelect: (e) => {
                    j({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        O((n) => {
                            var t;
                            return null != (t = b.find((n) => n.section === e)) ? t : n;
                        });
                },
                children: b.map((e) =>
                    (0, o.jsx)(
                        c.njP.Item,
                        {
                            className: u.tabBarItem,
                            id: e.section,
                            'aria-label': e.text,
                            children: (0, o.jsx)(c.X6q, {
                                variant: 'heading-lg/medium',
                                children: e.text
                            })
                        },
                        e.section
                    )
                )
            }),
            (0, o.jsx)(c.njP.Panel, {
                id: x,
                'aria-label': I,
                className: u.tabBarPanel,
                children: (0, o.jsx)(f, {
                    user: l,
                    currentUser: s,
                    displayProfile: d,
                    guildId: p,
                    channelId: m,
                    section: x,
                    subsection: g,
                    onClose: h
                })
            })
        ]
    });
}
