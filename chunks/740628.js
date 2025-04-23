t.d(n, { Z: () => y }), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    o = t(706898),
    s = t(481060),
    u = t(246946),
    a = t(785717),
    c = t(786366),
    d = t(323090),
    f = t(116906),
    p = t(384816),
    g = t(389190),
    b = t(428927),
    v = t(228168),
    h = t(388032),
    j = t(301150),
    m = t(923243);
function O(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: o, guildId: s, onClose: u } = e;
    return n === v.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: o,
              guildId: s,
              onClose: u
          })
        : n === v.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(g.Z, {
                user: r,
                onClose: u
            })
          : n === v.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(b.Z, {
                  user: r,
                  onClose: u
              })
            : n === v.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(c.Z, { user: r })
              : n === v.oh.BOT_INFO
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
function y(e) {
    var n, t, c;
    let { user: d, currentUser: f, displayProfile: p, guildId: g, items: b, initialSection: y = v.oh.USER_INFO, initialSubsection: Z, onClose: I } = e,
        { trackUserProfileAction: x } = (0, a.KZ)(),
        P = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        [{ section: E, subsection: T }, N] = r.useState({
            section:
                null !=
                (c =
                    null ==
                    (n = b.find((e) => {
                        let { section: n } = e;
                        return n === y;
                    }))
                        ? void 0
                        : n.section)
                    ? c
                    : null == (t = b[0])
                      ? void 0
                      : t.section,
            subsection: Z
        });
    r.useEffect(() => {
        null == b.find((e) => e.section === E) &&
            N({
                section: b[0].section,
                subsection: void 0
            });
    }, [b, E]);
    let S = r.useCallback(
        (e) => {
            x({
                action: 'PRESS_SECTION',
                section: e
            }),
                N({
                    section: e,
                    subsection: void 0
                });
        },
        [x, N]
    );
    return P
        ? (0, l.jsx)('div', {
              className: m.container,
              children: (0, l.jsxs)('div', {
                  className: j.empty,
                  children: [
                      (0, l.jsx)('div', { className: j.emptyIconStreamerMode }),
                      (0, l.jsx)('div', {
                          className: j.emptyText,
                          children: h.intl.string(h.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, l.jsxs)('div', {
              className: m.container,
              children: [
                  (0, l.jsx)(o.n, {
                      className: m.tabBar,
                      type: 'top',
                      selectedItem: E,
                      onItemSelect: S,
                      children: b.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, l.jsx)(
                              o.n.Item,
                              {
                                  className: m.tabBarItem,
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
                  (0, l.jsx)(O, {
                      items: b,
                      section: E,
                      subsection: T,
                      user: d,
                      currentUser: f,
                      displayProfile: p,
                      guildId: g,
                      onClose: I
                  })
              ]
          });
}
