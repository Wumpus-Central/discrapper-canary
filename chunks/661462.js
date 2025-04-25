t.d(n, { Z: () => f }), t(388685);
var o = t(200651),
    i = t(192379),
    c = t(481060),
    r = t(785717),
    l = t(128156),
    a = t(228168),
    s = t(388032),
    d = t(662776);
function u(e) {
    let { user: n, currentUser: t, section: i, subsection: c, displayProfile: r, guildId: s, onClose: d } = e;
    return i === a.oh.ACTIVITY
        ? (0, o.jsx)(l.Z, {
              user: n,
              currentUser: t,
              displayProfile: r,
              guildId: s,
              subsection: c,
              onClose: d
          })
        : (a.oh.MUTUALS, null);
}
function f(e) {
    var n, t;
    let { user: l, currentUser: f, displayProfile: p, guildId: b, initialSection: m, initialSubsection: h, onClose: g } = e,
        { trackUserProfileAction: x } = (0, r.KZ)(),
        j = i.useMemo(
            () =>
                l.id === f.id
                    ? [
                          {
                              section: a.oh.ACTIVITY,
                              text: s.intl.string(s.t.chq59f)
                          }
                      ]
                    : [
                          {
                              section: a.oh.ACTIVITY,
                              text: s.intl.string(s.t.chq59f)
                          },
                          {
                              section: a.oh.MUTUALS,
                              text: s.intl.string(s.t.f5KLNj)
                          }
                      ],
            [l.id, f.id]
        ),
        [{ section: _, subsection: y }, I] = i.useState({
            section:
                null !=
                (t =
                    null ==
                    (n = j.find((e) => {
                        let { section: n } = e;
                        return n === m;
                    }))
                        ? void 0
                        : n.section)
                    ? t
                    : a.oh.ACTIVITY,
            subsection: h
        });
    return (0, o.jsxs)('div', {
        className: d.container,
        children: [
            (0, o.jsx)(c.njP, {
                type: 'top',
                className: d.tabBar,
                selectedItem: _,
                onItemSelect: (e) => {
                    x({
                        action: 'PRESS_SECTION',
                        section: e
                    }),
                        I({
                            section: e,
                            subsection: void 0
                        });
                },
                children: j.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, o.jsx)(
                        c.njP.Item,
                        {
                            className: d.tabBarItem,
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
            (0, o.jsx)(u, {
                user: l,
                currentUser: f,
                displayProfile: p,
                guildId: b,
                section: _,
                subsection: y,
                onClose: g
            })
        ]
    });
}
