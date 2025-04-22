t.d(n, { Z: () => y }), t(388685);
var r = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(706898),
    s = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(116906),
    p = t(384816),
    m = t(389190),
    b = t(428927),
    h = t(228168),
    g = t(388032),
    j = t(301150),
    v = t(923243);
function x(e) {
    let { section: n, subsection: t, user: o, currentUser: i, displayProfile: l, guildId: s, onClose: c } = e;
    return n === h.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: o,
              currentUser: i,
              displayProfile: l,
              guildId: s,
              onClose: c
          })
        : n === h.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(m.Z, {
                user: o,
                onClose: c
            })
          : n === h.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(b.Z, {
                  user: o,
                  onClose: c
              })
            : n === h.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: o })
              : n === h.oh.BOT_INFO
                ? (0, r.jsx)(u.Z, {
                      user: o,
                      currentUser: i,
                      displayProfile: l,
                      guildId: s,
                      subsection: t,
                      onClose: c
                  })
                : (0, r.jsx)(p.Z, {
                      user: o,
                      currentUser: i,
                      displayProfile: l,
                      subsection: t,
                      onClose: c
                  });
}
function y(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: m, items: b, initialSection: y = h.oh.USER_INFO, initialSubsection: I, onClose: O } = e,
        { trackUserProfileAction: Z } = (0, a.KZ)(),
        _ = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: P, subsection: E }, N] = o.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = b.find((e) => {
                        let { section: n } = e;
                        return n === y;
                    }))
                        ? void 0
                        : n.section)
                    ? d
                    : null == (t = b[0])
                      ? void 0
                      : t.section,
            subsection: I
        });
    o.useEffect(() => {
        null == b.find((e) => e.section === P) &&
            N({
                section: b[0].section,
                subsection: void 0
            });
    }, [b, P]);
    let A = o.useCallback(
        (e) => {
            Z({
                action: 'PRESS_SECTION',
                section: e
            }),
                N({
                    section: e,
                    subsection: void 0
                });
        },
        [Z, N]
    );
    return _
        ? (0, r.jsx)('div', {
              className: v.container,
              children: (0, r.jsxs)('div', {
                  className: j.empty,
                  children: [
                      (0, r.jsx)('div', { className: j.emptyIconStreamerMode }),
                      (0, r.jsx)('div', {
                          className: j.emptyText,
                          children: g.intl.string(g.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  (0, r.jsx)(l.n, {
                      className: v.tabBar,
                      type: 'top',
                      selectedItem: P,
                      onItemSelect: A,
                      children: b.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, r.jsx)(
                              l.n.Item,
                              {
                                  className: v.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(x, {
                      items: b,
                      section: P,
                      subsection: E,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: m,
                      onClose: O
                  })
              ]
          });
}
