t.d(n, { Z: () => v }), t(388685);
var o = t(200651),
    r = t(192379),
    i = t(442837),
    l = t(706898),
    s = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(116906),
    p = t(384816),
    b = t(389190),
    m = t(428927),
    I = t(228168),
    h = t(388032),
    g = t(301150),
    y = t(923243);
function j(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: l, guildId: s, onClose: c } = e;
    return n === I.oh.ACTIVITY
        ? (0, o.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: l,
              guildId: s,
              onClose: c
          })
        : n === I.oh.MUTUAL_FRIENDS
          ? (0, o.jsx)(b.Z, {
                user: r,
                onClose: c
            })
          : n === I.oh.MUTUAL_GUILDS
            ? (0, o.jsx)(m.Z, {
                  user: r,
                  onClose: c
              })
            : n === I.oh.BOT_DATA_ACCESS
              ? (0, o.jsx)(d.Z, { user: r })
              : n === I.oh.BOT_INFO
                ? (0, o.jsx)(u.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: l,
                      guildId: s,
                      subsection: t,
                      onClose: c
                  })
                : (0, o.jsx)(p.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: l,
                      subsection: t,
                      onClose: c
                  });
}
function v(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: b, items: m, initialSection: v = I.oh.USER_INFO, initialSubsection: x, onClose: _ } = e,
        { trackUserProfileAction: Z } = (0, a.KZ)(),
        O = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: N, subsection: E }, P] = r.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = m.find((e) => {
                        let { section: n } = e;
                        return n === v;
                    }))
                        ? void 0
                        : n.section)
                    ? d
                    : null == (t = m[0])
                      ? void 0
                      : t.section,
            subsection: x
        });
    r.useEffect(() => {
        null == m.find((e) => e.section === N) &&
            P({
                section: m[0].section,
                subsection: void 0
            });
    }, [m, N]);
    let S = r.useCallback(
        (e) => {
            Z({
                action: 'PRESS_SECTION',
                section: e
            }),
                P({
                    section: e,
                    subsection: void 0
                });
        },
        [Z, P]
    );
    return O
        ? (0, o.jsx)('div', {
              className: y.container,
              children: (0, o.jsxs)('div', {
                  className: g.empty,
                  children: [
                      (0, o.jsx)('div', { className: g.emptyIconStreamerMode }),
                      (0, o.jsx)('div', {
                          className: g.emptyText,
                          children: h.NW.string(h.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, o.jsxs)('div', {
              className: y.container,
              children: [
                  (0, o.jsx)(l.n, {
                      className: y.tabBar,
                      type: 'top',
                      selectedItem: N,
                      onItemSelect: S,
                      children: m.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, o.jsx)(
                              l.n.Item,
                              {
                                  className: y.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, o.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, o.jsx)(j, {
                      items: m,
                      section: N,
                      subsection: E,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: b,
                      onClose: _
                  })
              ]
          });
}
