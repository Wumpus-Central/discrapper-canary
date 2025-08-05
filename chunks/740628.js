(t.d(n, { Z: () => Z }), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(442837),
    o = t(706898),
    s = t(481060),
    d = t(246946),
    a = t(785717),
    c = t(786366),
    u = t(323090),
    f = t(116906),
    p = t(384816),
    h = t(389190),
    g = t(428927),
    v = t(228168),
    j = t(388032),
    m = t(301150),
    b = t(923243);
function x(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: o, guildId: s, channelId: d, onClose: a } = e;
    return n === v.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: o,
              guildId: s,
              onClose: a
          })
        : n === v.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(h.Z, {
                user: r,
                guildId: s,
                channelId: d,
                onClose: a
            })
          : n === v.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(g.Z, {
                  user: r,
                  onClose: a
              })
            : n === v.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(c.Z, { user: r })
              : n === v.oh.BOT_INFO
                ? (0, l.jsx)(u.Z, {
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
function Z(e) {
    var n, t, c;
    let { user: u, currentUser: f, displayProfile: p, guildId: h, items: g, initialSection: Z = v.oh.USER_INFO, initialSubsection: y, onClose: O } = e,
        { trackUserProfileAction: I } = (0, a.KZ)(),
        P = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation),
        [{ section: E, subsection: T }, S] = r.useState({
            section:
                null !=
                (c =
                    null ==
                    (n = g.find((e) => {
                        let { section: n } = e;
                        return n === Z;
                    }))
                        ? void 0
                        : n.section)
                    ? c
                    : null == (t = g[0])
                      ? void 0
                      : t.section,
            subsection: y
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
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: h,
                      onClose: O
                  })
              ]
          });
}
