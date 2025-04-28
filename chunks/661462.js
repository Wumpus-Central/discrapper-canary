n.d(t, { Z: () => p }), n(388685);
var o = n(200651),
    r = n(192379),
    i = n(481060),
    c = n(785717),
    a = n(128156),
    l = n(210788),
    s = n(228168),
    d = n(388032),
    u = n(662776);
function f(e) {
    let { user: t, currentUser: n, section: r, subsection: i, displayProfile: c, guildId: d, onClose: u } = e;
    return r === s.oh.ACTIVITY
        ? (0, o.jsx)(a.Z, {
              user: t,
              currentUser: n,
              displayProfile: c,
              guildId: d,
              subsection: i,
              onClose: u
          })
        : r === s.oh.MUTUALS
          ? (0, o.jsx)(l.Z, {
                user: t,
                onClose: u
            })
          : null;
}
function p(e) {
    var t, n, a;
    let { user: l, currentUser: p, displayProfile: m, guildId: b, initialSection: h, initialSubsection: y, onClose: g } = e,
        { trackUserProfileAction: j } = (0, c.KZ)(),
        _ = r.useMemo(
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
        [{ section: x, subsection: I, text: v }, O] = r.useState(
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
                    (t = _.find((e) => {
                        let { section: t } = e;
                        return t === h;
                    }))
                    ? t
                    : _[0]
            )),
            (a = a = { subsection: y }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, o);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            n)
        );
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsx)(i.njP, {
                type: 'top',
                className: u.tabBar,
                selectedItem: x,
                onItemSelect: (e) => {
                    j({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        O((t) => {
                            var n;
                            return null != (n = _.find((t) => t.section === e)) ? n : t;
                        });
                },
                children: _.map((e) =>
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
                id: x,
                'aria-label': v,
                className: u.tabBarPanel,
                children: (0, o.jsx)(f, {
                    user: l,
                    currentUser: p,
                    displayProfile: m,
                    guildId: b,
                    section: x,
                    subsection: I,
                    onClose: g
                })
            })
        ]
    });
}
