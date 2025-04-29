t.d(n, { Z: () => p }), t(388685);
var o = t(255367),
    r = t(73800),
    c = t(481060),
    a = t(785717),
    i = t(128156),
    l = t(210788),
    s = t(228168),
    d = t(388032),
    u = t(662776);
function f(e) {
    let { user: n, currentUser: t, section: r, subsection: c, displayProfile: a, guildId: d, channelId: u, onClose: f } = e;
    return r === s.oh.ACTIVITY
        ? (0, o.jsx)(i.Z, {
              user: n,
              currentUser: t,
              displayProfile: a,
              guildId: d,
              subsection: c,
              onClose: f
          })
        : r === s.oh.MUTUALS
          ? (0, o.jsx)(l.Z, {
                user: n,
                guildId: d,
                channelId: u,
                onClose: f
            })
          : null;
}
function p(e) {
    var n, t, i;
    let { user: l, currentUser: p, displayProfile: m, guildId: b, channelId: _, initialSection: h, initialSubsection: y, onClose: g } = e,
        { trackUserProfileAction: x } = (0, a.KZ)(),
        j = r.useMemo(
            () =>
                l.id === p.id
                    ? [
                          {
                              section: s.oh.ACTIVITY,
                              text: d.intl.string(d.t.chq59f),
                              subsection: void 0
                          }
                      ]
                    : [
                          {
                              section: s.oh.ACTIVITY,
                              text: d.intl.string(d.t.chq59f),
                              subsection: void 0
                          },
                          {
                              section: s.oh.MUTUALS,
                              text: d.intl.string(d.t.f5KLNj),
                              subsection: void 0
                          }
                      ],
            [l.id, p.id]
        ),
        [{ section: I, subsection: O, text: v }, P] = r.useState(
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
                    (n = j.find((e) => {
                        let { section: n } = e;
                        return n === h;
                    }))
                    ? n
                    : j[0]
            )),
            (i = i = { subsection: y }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, o);
                      }
                      return t;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            t)
        );
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsx)(c.njP, {
                type: 'top',
                className: u.tabBar,
                selectedItem: I,
                onItemSelect: (e) => {
                    x({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        P((n) => {
                            var t;
                            return null != (t = j.find((n) => n.section === e)) ? t : n;
                        });
                },
                children: j.map((e) =>
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
                id: I,
                'aria-label': v,
                className: u.tabBarPanel,
                children: (0, o.jsx)(f, {
                    user: l,
                    currentUser: p,
                    displayProfile: m,
                    guildId: b,
                    channelId: _,
                    section: I,
                    subsection: O,
                    onClose: g
                })
            })
        ]
    });
}
