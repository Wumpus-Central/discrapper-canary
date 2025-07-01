(t.d(n, { Z: () => O }), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(442837),
    o = t(706898),
    s = t(481060),
    a = t(246946),
    c = t(785717),
    u = t(786366),
    d = t(323090),
    f = t(116906),
    p = t(384816),
    g = t(389190),
    v = t(428927),
    j = t(228168),
    h = t(388032),
    m = t(301150),
    b = t(923243);
function x(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: o, guildId: s, channelId: a, onClose: c } = e;
    return n === j.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: o,
              guildId: s,
              onClose: c
          })
        : n === j.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(g.Z, {
                user: r,
                guildId: s,
                channelId: a,
                onClose: c
            })
          : n === j.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(v.Z, {
                  user: r,
                  onClose: c
              })
            : n === j.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(u.Z, { user: r })
              : n === j.oh.BOT_INFO
                ? (0, l.jsx)(d.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      guildId: s,
                      subsection: t,
                      onClose: c
                  })
                : (0, l.jsx)(p.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: o,
                      subsection: t,
                      onClose: c
                  });
}
function O(e) {
    var n, t, u;
    let { user: d, currentUser: f, displayProfile: p, guildId: g, items: v, initialSection: O = j.oh.USER_INFO, initialSubsection: y, onClose: Z } = e,
        { trackUserProfileAction: I } = (0, c.KZ)(),
        P = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: E, subsection: T }, S] = r.useState({
            section:
                null !=
                (u =
                    null ==
                    (n = v.find((e) => {
                        let { section: n } = e;
                        return n === O;
                    }))
                        ? void 0
                        : n.section)
                    ? u
                    : null == (t = v[0])
                      ? void 0
                      : t.section,
            subsection: y
        });
    r.useEffect(() => {
        null == v.find((e) => e.section === E) &&
            S({
                section: v[0].section,
                subsection: void 0
            });
    }, [v, E]);
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
                          children: h.intl.string(h.t.Br1ls7)
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
                      subsection: T,
                      user: d,
                      currentUser: f,
                      displayProfile: p,
                      guildId: g,
                      onClose: Z
                  })
              ]
          });
}
