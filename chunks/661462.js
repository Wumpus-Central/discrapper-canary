n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(481060),
    c = n(785717),
    l = n(128156),
    a = n(311044),
    s = n(408986),
    d = n(228168),
    u = n(163401);
function f(e) {
    let { user: t, currentUser: n, section: o, subsection: i, displayProfile: c, guildId: u, channelId: f, onClose: p } = e;
    return o === d.oh.ACTIVITY
        ? (0, r.jsx)(l.Z, {
              user: t,
              currentUser: n,
              displayProfile: c,
              guildId: u,
              channelId: f,
              subsection: i,
              onClose: p
          })
        : o === d.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(a.Z, {
                user: t,
                guildId: u,
                channelId: f
            })
          : o === d.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(s.Z, {
                  user: t,
                  onClose: p
              })
            : null;
}
function p(e) {
    var t, n, l;
    let { user: a, currentUser: s, displayProfile: d, guildId: p, channelId: m, items: b, initialSection: _, initialSubsection: y, onClose: h } = e,
        { trackUserProfileAction: x } = (0, c.KZ)(),
        [{ section: g, subsection: j, text: O }, I] = o.useState(
            ((n = (function (e) {
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
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            n)
        );
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(i.njP, {
                type: 'top',
                className: u.tabBar,
                selectedItem: g,
                onItemSelect: (e) => {
                    x({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        I((t) => {
                            var n;
                            return null != (n = b.find((t) => t.section === e)) ? n : t;
                        });
                },
                children: b.map((e) =>
                    (0, r.jsx)(
                        i.njP.Item,
                        {
                            className: u.tabBarItem,
                            id: e.section,
                            'aria-label': e.text,
                            children: (0, r.jsx)(i.Text, {
                                variant: 'heading-md/normal',
                                tag: 'span',
                                children: e.text
                            })
                        },
                        e.section
                    )
                )
            }),
            (0, r.jsx)(i.njP.Panel, {
                id: g,
                'aria-label': O,
                className: u.tabBarPanel,
                children: (0, r.jsx)(f, {
                    user: a,
                    currentUser: s,
                    displayProfile: d,
                    guildId: p,
                    channelId: m,
                    section: g,
                    subsection: j,
                    onClose: h
                })
            })
        ]
    });
}
