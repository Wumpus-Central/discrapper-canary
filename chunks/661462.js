t.d(n, { Z: () => p }), t(388685);
var o = t(200651),
    i = t(192379),
    c = t(481060),
    r = t(785717),
    a = t(128156),
    l = t(210788),
    s = t(228168),
    d = t(388032),
    u = t(662776);
function f(e) {
    let { user: n, currentUser: t, section: i, subsection: c, displayProfile: r, guildId: d, onClose: u } = e;
    return i === s.oh.ACTIVITY
        ? (0, o.jsx)(a.Z, {
              user: n,
              currentUser: t,
              displayProfile: r,
              guildId: d,
              subsection: c,
              onClose: u
          })
        : i === s.oh.MUTUALS
          ? (0, o.jsx)(l.Z, {
                user: n,
                onClose: u
            })
          : null;
}
function p(e) {
    var n, t;
    let { user: a, currentUser: l, displayProfile: p, guildId: m, initialSection: h, initialSubsection: _, onClose: b } = e,
        { trackUserProfileAction: g } = (0, r.KZ)(),
        y = i.useMemo(
            () =>
                a.id === l.id
                    ? [
                          {
                              section: s.oh.ACTIVITY,
                              text: d.intl.string(d.t.chq59f)
                          }
                      ]
                    : [
                          {
                              section: s.oh.ACTIVITY,
                              text: d.intl.string(d.t.chq59f)
                          },
                          {
                              section: s.oh.MUTUALS,
                              text: d.intl.string(d.t.f5KLNj)
                          }
                      ],
            [a.id, l.id]
        ),
        [{ section: x, subsection: j }, I] = i.useState({
            section:
                null !=
                (t =
                    null ==
                    (n = y.find((e) => {
                        let { section: n } = e;
                        return n === h;
                    }))
                        ? void 0
                        : n.section)
                    ? t
                    : s.oh.ACTIVITY,
            subsection: _
        });
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsx)(c.njP, {
                type: 'top',
                className: u.tabBar,
                selectedItem: x,
                onItemSelect: (e) => {
                    g({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        I({
                            section: e,
                            subsection: void 0
                        });
                },
                children: y.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, o.jsx)(
                        c.njP.Item,
                        {
                            className: u.tabBarItem,
                            id: n,
                            'aria-label': t,
                            children: (0, o.jsx)(c.X6q, {
                                variant: 'heading-lg/medium',
                                children: t
                            })
                        },
                        n
                    );
                })
            }),
            (0, o.jsx)(f, {
                user: a,
                currentUser: l,
                displayProfile: p,
                guildId: m,
                section: x,
                subsection: j,
                onClose: b
            })
        ]
    });
}
