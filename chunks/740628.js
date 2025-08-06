(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(442837),
    i = n(706898),
    a = n(481060),
    c = n(246946),
    s = n(785717),
    d = n(786366),
    u = n(323090),
    f = n(116906),
    p = n(384816),
    m = n(389190),
    g = n(428927),
    b = n(228168),
    j = n(388032),
    h = n(301150),
    y = n(923243);
function v(e) {
    let { section: t, subsection: n, user: l, currentUser: o, displayProfile: i, guildId: a, channelId: c, onClose: s } = e;
    return t === b.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: l,
              currentUser: o,
              displayProfile: i,
              guildId: a,
              onClose: s
          })
        : t === b.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(m.Z, {
                user: l,
                guildId: a,
                channelId: c,
                onClose: s
            })
          : t === b.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(g.Z, {
                  user: l,
                  onClose: s
              })
            : t === b.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: l })
              : t === b.oh.BOT_INFO
                ? (0, r.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: i,
                      guildId: a,
                      subsection: n,
                      onClose: s
                  })
                : (0, r.jsx)(p.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: i,
                      subsection: n,
                      onClose: s
                  });
}
function O(e) {
    var t, n, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: m, items: g, initialSection: O = b.oh.USER_INFO, initialSubsection: x, onClose: _ } = e,
        { trackUserProfileAction: I } = (0, s.KZ)(),
        P = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: Z, subsection: E }, N] = l.useState({
            section:
                null !=
                (d =
                    null ==
                    (t = g.find((e) => {
                        let { section: t } = e;
                        return t === O;
                    }))
                        ? void 0
                        : t.section)
                    ? d
                    : null == (n = g[0])
                      ? void 0
                      : n.section,
            subsection: x
        });
    l.useEffect(() => {
        null == g.find((e) => e.section === Z) &&
            N({
                section: g[0].section,
                subsection: void 0
            });
    }, [g, Z]);
    let T = l.useCallback(
        (e) => {
            (I({
                action: 'PRESS_SECTION',
                section: e
            }),
                N({
                    section: e,
                    subsection: void 0
                }));
        },
        [I, N]
    );
    return P
        ? (0, r.jsx)('div', {
              className: y.container,
              children: (0, r.jsxs)('div', {
                  className: h.empty,
                  children: [
                      (0, r.jsx)('div', { className: h.emptyIconStreamerMode }),
                      (0, r.jsx)('div', {
                          className: h.emptyText,
                          children: j.intl.string(j.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: y.container,
              children: [
                  (0, r.jsx)(i.n, {
                      className: y.tabBar,
                      type: 'top',
                      selectedItem: Z,
                      onItemSelect: T,
                      children: g.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, r.jsx)(
                              i.n.Item,
                              {
                                  className: y.tabBarItem,
                                  id: t,
                                  'aria-label': n,
                                  children: (0, r.jsx)(a.Text, {
                                      variant: 'text-sm/normal',
                                      children: n
                                  })
                              },
                              t
                          );
                      })
                  }),
                  (0, r.jsx)(v, {
                      items: g,
                      section: Z,
                      subsection: E,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: m,
                      onClose: _
                  })
              ]
          });
}
