n.d(t, { Z: () => O }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(442837),
    s = n(706898),
    o = n(481060),
    c = n(246946),
    a = n(785717),
    d = n(786366),
    u = n(323090),
    f = n(116906),
    p = n(384816),
    h = n(389190),
    j = n(428927),
    g = n(228168),
    v = n(388032),
    m = n(301150),
    x = n(923243);
function b(e) {
    let { section: t, subsection: n, user: r, currentUser: i, displayProfile: s, guildId: o, channelId: c, onClose: a } = e;
    return t === g.oh.ACTIVITY
        ? (0, l.jsx)(f.Z, {
              user: r,
              currentUser: i,
              displayProfile: s,
              guildId: o,
              onClose: a
          })
        : t === g.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(h.Z, {
                user: r,
                guildId: o,
                channelId: c,
                onClose: a
            })
          : t === g.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(j.Z, {
                  user: r,
                  onClose: a
              })
            : t === g.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(d.Z, { user: r })
              : t === g.oh.BOT_INFO
                ? (0, l.jsx)(u.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: s,
                      guildId: o,
                      subsection: n,
                      onClose: a
                  })
                : (0, l.jsx)(p.Z, {
                      user: r,
                      currentUser: i,
                      displayProfile: s,
                      subsection: n,
                      onClose: a
                  });
}
function O(e) {
    var t, n, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: h, items: j, initialSection: O = g.oh.USER_INFO, initialSubsection: Z, onClose: y } = e,
        { trackUserProfileAction: I } = (0, a.KZ)(),
        P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: E, subsection: N }, T] = r.useState({
            section:
                null !=
                (d =
                    null ==
                    (t = j.find((e) => {
                        let { section: t } = e;
                        return t === O;
                    }))
                        ? void 0
                        : t.section)
                    ? d
                    : null == (n = j[0])
                      ? void 0
                      : n.section,
            subsection: Z
        });
    r.useEffect(() => {
        null == j.find((e) => e.section === E) &&
            T({
                section: j[0].section,
                subsection: void 0
            });
    }, [j, E]);
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
              className: x.container,
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
              className: x.container,
              children: [
                  (0, l.jsx)(s.n, {
                      className: x.tabBar,
                      type: 'top',
                      selectedItem: E,
                      onItemSelect: S,
                      children: j.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, l.jsx)(
                              s.n.Item,
                              {
                                  className: x.tabBarItem,
                                  id: t,
                                  'aria-label': n,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: 'text-sm/normal',
                                      children: n
                                  })
                              },
                              t
                          );
                      })
                  }),
                  (0, l.jsx)(b, {
                      items: j,
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
