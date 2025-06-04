t.d(n, { Z: () => O }), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(442837),
    o = t(706898),
    s = t(481060),
    a = t(246946),
    u = t(785717),
    c = t(786366),
    d = t(323090),
    f = t(116906),
    p = t(384816),
    g = t(389190),
    v = t(428927),
    h = t(228168),
    j = t(388032),
    m = t(301150),
    b = t(923243);
function x(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: o, guildId: s, channelId: a, onClose: u } = e;
    return n === h.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: o,
              guildId: s,
              onClose: u
          })
        : n === h.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(g.Z, {
                user: r,
                guildId: s,
                channelId: a,
                onClose: u
            })
          : n === h.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(v.Z, {
                  user: r,
                  onClose: u
              })
            : n === h.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(c.Z, { user: r })
              : n === h.oh.BOT_INFO
                ? (0, l.jsx)(d.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      guildId: s,
                      subsection: t,
                      onClose: u
                  })
                : (0, l.jsx)(p.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      subsection: t,
                      onClose: u
                  });
}
function O(e) {
    var n, t, c;
    let { user: d, currentUser: f, displayProfile: p, guildId: g, items: v, initialSection: O = h.oh.USER_INFO, initialSubsection: Z, onClose: y } = e,
        { trackUserProfileAction: P } = (0, u.KZ)(),
        I = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: E, subsection: S }, T] = r.useState({
            section:
                null !=
                (c =
                    null ==
                    (n = v.find((e) => {
                        let { section: n } = e;
                        return n === O;
                    }))
                        ? void 0
                        : n.section)
                    ? c
                    : null == (t = v[0])
                      ? void 0
                      : t.section,
            subsection: Z
        });
    r.useEffect(() => {
        null == v.find((e) => e.section === E) &&
            T({
                section: v[0].section,
                subsection: void 0
            });
    }, [v, E]);
    let N = r.useCallback(
        (e) => {
            P({
                action: 'PRESS_SECTION',
                section: e
            }),
                T({
                    section: e,
                    subsection: void 0
                });
        },
        [P, T]
    );
    return I
        ? (0, l.jsx)('div', {
              className: b.container,
              children: (0, l.jsxs)('div', {
                  className: m.empty,
                  children: [
                      (0, l.jsx)('div', { className: m.emptyIconStreamerMode }),
                      (0, l.jsx)('div', {
                          className: m.emptyText,
                          children: j.intl.string(j.t.Br1ls7)
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
                      children: v.map((e) => {
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
                      items: v,
                      section: E,
                      subsection: S,
                      user: d,
                      currentUser: f,
                      displayProfile: p,
                      guildId: g,
                      onClose: y
                  })
              ]
          });
}
