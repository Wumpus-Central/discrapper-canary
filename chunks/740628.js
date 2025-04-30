t.d(n, { Z: () => Z }), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    s = t(706898),
    o = t(481060),
    a = t(246946),
    c = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(116906),
    p = t(384816),
    h = t(389190),
    v = t(428927),
    g = t(228168),
    j = t(388032),
    m = t(301150),
    b = t(923243);
function x(e) {
    let { section: n, subsection: t, user: r, currentUser: i, displayProfile: s, guildId: o, channelId: a, onClose: c } = e;
    return n === g.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: s,
              guildId: o,
              onClose: c
          })
        : n === g.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(h.Z, {
                user: r,
                guildId: o,
                channelId: a,
                onClose: c
            })
          : n === g.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(v.Z, {
                  user: r,
                  onClose: c
              })
            : n === g.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(d.Z, { user: r })
              : n === g.oh.BOT_INFO
                ? (0, l.jsx)(u.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: s,
                      guildId: o,
                      subsection: t,
                      onClose: c
                  })
                : (0, l.jsx)(p.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: s,
                      subsection: t,
                      onClose: c
                  });
}
function Z(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: h, items: v, initialSection: Z = g.oh.USER_INFO, initialSubsection: O, onClose: y } = e,
        { trackUserProfileAction: I } = (0, c.KZ)(),
        P = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: E, subsection: N }, T] = r.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = v.find((e) => {
                        let { section: n } = e;
                        return n === Z;
                    }))
                        ? void 0
                        : n.section)
                    ? d
                    : null == (t = v[0])
                      ? void 0
                      : t.section,
            subsection: O
        });
    r.useEffect(() => {
        null == v.find((e) => e.section === E) &&
            T({
                section: v[0].section,
                subsection: void 0
            });
    }, [v, E]);
    let S = r.useCallback(
        (e) => {
            I({
                action: 'PRESS_SECTION',
                section: e
            }),
                T({
                    section: e,
                    subsection: void 0
                });
        },
        [I, T]
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
                  (0, l.jsx)(s.n, {
                      className: b.tabBar,
                      type: 'top',
                      selectedItem: E,
                      onItemSelect: S,
                      children: v.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, l.jsx)(
                              s.n.Item,
                              {
                                  className: b.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, l.jsx)(o.Text, {
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
                      subsection: N,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: h,
                      onClose: y
                  })
              ]
          });
}
