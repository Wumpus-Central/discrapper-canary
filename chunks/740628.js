t.d(n, { Z: () => Z }), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(442837),
    o = t(706898),
    s = t(481060),
    c = t(246946),
    u = t(785717),
    a = t(786366),
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
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: o, guildId: s, channelId: c, onClose: u } = e;
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
                channelId: c,
                onClose: u
            })
          : n === h.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(v.Z, {
                  user: r,
                  onClose: u
              })
            : n === h.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(a.Z, { user: r })
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
function Z(e) {
    var n, t, a;
    let { user: d, currentUser: f, displayProfile: p, guildId: g, items: v, initialSection: Z = h.oh.USER_INFO, initialSubsection: O, onClose: y } = e,
        { trackUserProfileAction: I } = (0, u.KZ)(),
        P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: E, subsection: T }, S] = r.useState({
            section:
                null !=
                (a =
                    null ==
                    (n = v.find((e) => {
                        let { section: n } = e;
                        return n === Z;
                    }))
                        ? void 0
                        : n.section)
                    ? a
                    : null == (t = v[0])
                      ? void 0
                      : t.section,
            subsection: O
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
            I({
                action: 'PRESS_SECTION',
                section: e
            }),
                S({
                    section: e,
                    subsection: void 0
                });
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
                      onClose: y
                  })
              ]
          });
}
