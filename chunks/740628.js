(t.d(n, { Z: () => y }), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(442837),
    o = t(706898),
    s = t(481060),
    c = t(246946),
    a = t(785717),
    u = t(786366),
    d = t(323090),
    f = t(116906),
    p = t(384816),
    j = t(389190),
    g = t(428927),
    h = t(228168),
    v = t(388032),
    m = t(301150),
    b = t(923243);
function x(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: o, guildId: s, channelId: c, onClose: a } = e;
    return n === h.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: o,
              guildId: s,
              onClose: a
          })
        : n === h.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(j.Z, {
                user: r,
                guildId: s,
                channelId: c,
                onClose: a
            })
          : n === h.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(g.Z, {
                  user: r,
                  onClose: a
              })
            : n === h.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(u.Z, { user: r })
              : n === h.oh.BOT_INFO
                ? (0, l.jsx)(d.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      guildId: s,
                      subsection: t,
                      onClose: a
                  })
                : (0, l.jsx)(p.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      subsection: t,
                      onClose: a
                  });
}
function y(e) {
    var n, t, u;
    let { user: d, currentUser: f, displayProfile: p, guildId: j, items: g, initialSection: y = h.oh.USER_INFO, initialSubsection: O, onClose: Z } = e,
        { trackUserProfileAction: I } = (0, a.KZ)(),
        P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: E, subsection: T }, S] = r.useState({
            section:
                null !=
                (u =
                    null ==
                    (n = g.find((e) => {
                        let { section: n } = e;
                        return n === y;
                    }))
                        ? void 0
                        : n.section)
                    ? u
                    : null == (t = g[0])
                      ? void 0
                      : t.section,
            subsection: O
        });
    r.useEffect(() => {
        null == g.find((e) => e.section === E) &&
            S({
                section: g[0].section,
                subsection: void 0
            });
    }, [g, E]);
    let N = r.useCallback(
        (e) => {
            (I({
                action: 'PRESS_SECTION',
                section: e
            }),
                S({
                    section: e,
                    subsection: void 0
                }));
        },
        [I, S]
    );
    return P
        ? (0, l.jsx)('div', {
              className: b.container,
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
              className: b.container,
              children: [
                  (0, l.jsx)(o.n, {
                      className: b.tabBar,
                      type: 'top',
                      selectedItem: E,
                      onItemSelect: N,
                      children: g.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, l.jsx)(
                              o.n.Item,
                              {
                                  className: b.tabBarItem,
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
                  (0, l.jsx)(x, {
                      items: g,
                      section: E,
                      subsection: T,
                      user: d,
                      currentUser: f,
                      displayProfile: p,
                      guildId: j,
                      onClose: Z
                  })
              ]
          });
}
