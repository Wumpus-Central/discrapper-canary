t.d(n, { Z: () => p }), t(388685);
var o = t(200651),
    r = t(192379),
    i = t(481060),
    c = t(785717),
    a = t(128156),
    l = t(210788),
    s = t(228168),
    d = t(388032),
    u = t(662776);
function f(e) {
    let { user: n, currentUser: t, section: r, subsection: i, displayProfile: c, guildId: d, onClose: u } = e;
    return r === s.oh.ACTIVITY
        ? (0, o.jsx)(a.Z, {
              user: n,
              currentUser: t,
              displayProfile: c,
              guildId: d,
              subsection: i,
              onClose: u
          })
        : r === s.oh.MUTUALS
          ? (0, o.jsx)(l.Z, {
                user: n,
                onClose: u
            })
          : null;
}
function p(e) {
    var n, t, a;
    let { user: l, currentUser: p, displayProfile: m, guildId: b, initialSection: _, initialSubsection: h, onClose: y } = e,
        { trackUserProfileAction: g } = (0, c.KZ)(),
        x = r.useMemo(
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
        [{ section: j, subsection: I, text: O }, v] = r.useState(
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
                    (n = x.find((e) => {
                        let { section: n } = e;
                        return n === _;
                    }))
                    ? n
                    : x[0]
            )),
            (a = a = { subsection: h }),
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
            (0, o.jsx)(i.njP, {
                type: 'top',
                className: u.tabBar,
                selectedItem: j,
                onItemSelect: (e) => {
                    g({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        v((n) => {
                            var t;
                            return null != (t = x.find((n) => n.section === e)) ? t : n;
                        });
                },
                children: x.map((e) =>
                    (0, o.jsx)(
                        i.njP.Item,
                        {
                            className: u.tabBarItem,
                            id: e.section,
                            'aria-label': e.text,
                            children: (0, o.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
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
                    user: l,
                    currentUser: p,
                    displayProfile: m,
                    guildId: b,
                    section: j,
                    subsection: I,
                    onClose: y
                })
            })
        ]
    });
}
