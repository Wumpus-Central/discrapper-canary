(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(785717),
    l = n(128156),
    c = n(311044),
    s = n(408986),
    d = n(778414),
    u = n(228168),
    f = n(662776);
function m(e) {
    let { user: t, currentUser: n, section: o, subsection: i, displayProfile: a, guildId: f, channelId: m, onClose: p } = e;
    return o === u.oh.ACTIVITY
        ? (0, r.jsx)(l.Z, {
              user: t,
              currentUser: n,
              displayProfile: a,
              guildId: f,
              channelId: m,
              subsection: i,
              onClose: p
          })
        : o === u.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(c.Z, {
                user: t,
                guildId: f,
                channelId: m,
                onClose: p
            })
          : o === u.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(s.Z, {
                  user: t,
                  onClose: p
              })
            : o === u.oh.WIDGETS
              ? (0, r.jsx)(d.Z, { user: t })
              : null;
}
function p(e) {
    var t, n, l;
    let { user: c, currentUser: s, displayProfile: d, guildId: u, channelId: p, items: g, initialSection: b, initialSubsection: x, onClose: _ } = e,
        { trackUserProfileAction: h } = (0, a.KZ)(),
        [{ section: y, subsection: j, text: v }, I] = o.useState(
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })(
                {},
                null !=
                    (t = g.find((e) => {
                        let { section: t } = e;
                        return t === b;
                    }))
                    ? t
                    : g[0]
            )),
            (l = l = { subsection: x }),
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
        className: f.container,
        children: [
            (0, r.jsx)(i.Ttm, {
                orientation: 'horizontal',
                className: f.scroller,
                fade: !0,
                paddingFix: !1,
                children: (0, r.jsx)(i.njP, {
                    type: 'top',
                    look: 'custom',
                    selectedItem: y,
                    onItemSelect: (e) => {
                        (h({
                            action: 'PRESS_SECTION',
                            section: e
                        }),
                            I((t) => {
                                var n;
                                return null != (n = g.find((t) => t.section === e)) ? n : t;
                            }));
                    },
                    children: g.map((e) =>
                        (0, r.jsx)(
                            i.njP.Item,
                            {
                                className: f.tabBarItem,
                                id: e.section,
                                'aria-label': e.text,
                                children: e.text
                            },
                            e.section
                        )
                    )
                })
            }),
            (0, r.jsx)(i.njP.Panel, {
                id: y,
                'aria-label': v,
                className: f.tabBarPanel,
                children: (0, r.jsx)(m, {
                    user: c,
                    currentUser: s,
                    displayProfile: d,
                    guildId: u,
                    channelId: p,
                    section: y,
                    subsection: j,
                    onClose: _
                })
            })
        ]
    });
}
