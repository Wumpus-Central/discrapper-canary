t.d(n, { Z: () => b }), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    o = t(706898),
    s = t(481060),
    a = t(246946),
    d = t(785717),
    c = t(786366),
    u = t(323090),
    f = t(116906),
    h = t(384816),
    p = t(389190),
    g = t(428927),
    j = t(228168),
    v = t(388032),
    m = t(301150),
    x = t(923243);
function Z(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: o, guildId: s, onClose: a } = e;
    return n === j.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: o,
              guildId: s,
              onClose: a
          })
        : n === j.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(p.Z, {
                user: r,
                onClose: a
            })
          : n === j.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(g.Z, {
                  user: r,
                  onClose: a
              })
            : n === j.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(c.Z, { user: r })
              : n === j.oh.BOT_INFO
                ? (0, l.jsx)(u.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      guildId: s,
                      subsection: t,
                      onClose: a
                  })
                : (0, l.jsx)(h.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      subsection: t,
                      onClose: a
                  });
}
function b(e) {
    var n, t, c;
    let { user: u, currentUser: f, displayProfile: h, guildId: p, items: g, initialSection: b = j.oh.USER_INFO, initialSubsection: O, onClose: y } = e,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        E = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: P, subsection: T }, N] = r.useState({
            section:
                null !=
                (c =
                    null ==
                    (n = g.find((e) => {
                        let { section: n } = e;
                        return n === b;
                    }))
                        ? void 0
                        : n.section)
                    ? c
                    : null == (t = g[0])
                      ? void 0
                      : t.section,
            subsection: O
        });
    r.useEffect(() => {
        null == g.find((e) => e.section === P) &&
            N({
                section: g[0].section,
                subsection: void 0
            });
    }, [g, P]);
    let A = r.useCallback(
        (e) => {
            I({
                action: 'PRESS_SECTION',
                section: e
            }),
                N({
                    section: e,
                    subsection: void 0
                });
        },
        [I, N]
    );
    return E
        ? (0, l.jsx)('div', {
              className: x.container,
              children: (0, l.jsxs)('div', {
                  className: m.empty,
                  children: [
                      (0, l.jsx)('div', { className: m.emptyIconStreamerMode }),
                      (0, l.jsx)('div', {
                          className: m.emptyText,
                          children: v.intl.string(v.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, l.jsxs)('div', {
              className: x.container,
              children: [
                  (0, l.jsx)(o.n, {
                      className: x.tabBar,
                      type: 'top',
                      selectedItem: P,
                      onItemSelect: A,
                      children: g.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, l.jsx)(
                              o.n.Item,
                              {
                                  className: x.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, l.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, l.jsx)(Z, {
                      items: g,
                      section: P,
                      subsection: T,
                      user: u,
                      currentUser: f,
                      displayProfile: h,
                      guildId: p,
                      onClose: y
                  })
              ]
          });
}
