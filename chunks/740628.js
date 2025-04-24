t.d(n, { Z: () => v }), t(388685);
var i = t(200651),
    o = t(192379),
    l = t(442837),
    r = t(706898),
    s = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(116906),
    p = t(384816),
    m = t(389190),
    h = t(428927),
    I = t(228168),
    x = t(388032),
    b = t(301150),
    _ = t(923243);
function j(e) {
    let { section: n, subsection: t, user: o, currentUser: l, displayProfile: r, guildId: s, onClose: c } = e;
    return n === I.oh.ACTIVITY
        ? (0, i.jsx)(f.Z, {
              user: o,
              currentUser: l,
              displayProfile: r,
              guildId: s,
              onClose: c
          })
        : n === I.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(m.Z, {
                user: o,
                onClose: c
            })
          : n === I.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(h.Z, {
                  user: o,
                  onClose: c
              })
            : n === I.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: o })
              : n === I.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: o,
                      currentUser: l,
                      displayProfile: r,
                      guildId: s,
                      subsection: t,
                      onClose: c
                  })
                : (0, i.jsx)(p.Z, {
                      user: o,
                      currentUser: l,
                      displayProfile: r,
                      subsection: t,
                      onClose: c
                  });
}
function v(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: m, items: h, initialSection: v = I.oh.USER_INFO, initialSubsection: g, onClose: Z } = e,
        { trackUserProfileAction: y } = (0, a.KZ)(),
        A = (0, l.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: T, subsection: O }, N] = o.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = h.find((e) => {
                        let { section: n } = e;
                        return n === v;
                    }))
                        ? void 0
                        : n.section)
                    ? d
                    : null == (t = h[0])
                      ? void 0
                      : t.section,
            subsection: g
        });
    o.useEffect(() => {
        null == h.find((e) => e.section === T) &&
            N({
                section: h[0].section,
                subsection: void 0
            });
    }, [h, T]);
    let E = o.useCallback(
        (e) => {
            y({
                action: 'PRESS_SECTION',
                section: e
            }),
                N({
                    section: e,
                    subsection: void 0
                });
        },
        [y, N]
    );
    return A
        ? (0, i.jsx)('div', {
              className: _.container,
              children: (0, i.jsxs)('div', {
                  className: b.empty,
                  children: [
                      (0, i.jsx)('div', { className: b.emptyIconStreamerMode }),
                      (0, i.jsx)('div', {
                          className: b.emptyText,
                          children: x.intl.string(x.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: _.container,
              children: [
                  (0, i.jsx)(r.n, {
                      className: _.tabBar,
                      type: 'top',
                      selectedItem: T,
                      onItemSelect: E,
                      children: h.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              r.n.Item,
                              {
                                  className: _.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, i.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, i.jsx)(j, {
                      items: h,
                      section: T,
                      subsection: O,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: m,
                      onClose: Z
                  })
              ]
          });
}
