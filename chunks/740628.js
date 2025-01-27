t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(442837),
    r = t(706898),
    s = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(296391),
    m = t(384816),
    p = t(389190),
    I = t(428927),
    x = t(228168),
    h = t(388032),
    v = t(731218),
    g = t(893302);
function Z(e) {
    let { section: n, subsection: t, user: l, currentUser: o, displayProfile: r, onClose: s, hideIdentityInfo: c = !1 } = e;
    return n === x.oh.ACTIVITY
        ? (0, i.jsx)(f.Z, {
              profileGuildId: null == r ? void 0 : r.guildId,
              user: l,
              currentUser: o,
              onClose: s
          })
        : n === x.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(p.Z, {
                user: l,
                onClose: s
            })
          : n === x.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(I.Z, {
                  user: l,
                  onClose: s
              })
            : n === x.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: l })
              : n === x.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: s
                  })
                : (0, i.jsx)(m.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: s,
                      hideIdentityInfo: c
                  });
}
function j(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: m, items: p, initialSection: I = x.oh.USER_INFO, initialSubsection: j, onClose: _, hideIdentityInfo: b = !1 } = e,
        { trackUserProfileAction: E } = (0, a.KZ)(),
        N = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: y, subsection: S }, T] = l.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = p.find((e) => {
                                let { section: n } = e;
                                return n === I;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (t = p[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: j
        });
    l.useEffect(() => {
        if (null == p.find((e) => e.section === y))
            T({
                section: p[0].section,
                subsection: void 0
            });
    }, [p, y]);
    let P = l.useCallback(
        (e) => {
            E({
                action: 'PRESS_SECTION',
                section: e
            }),
                T({
                    section: e,
                    subsection: void 0
                });
        },
        [E, T]
    );
    return N
        ? (0, i.jsx)('div', {
              className: g.container,
              children: (0, i.jsxs)('div', {
                  className: v.empty,
                  children: [
                      (0, i.jsx)('div', { className: v.emptyIconStreamerMode }),
                      (0, i.jsx)('div', {
                          className: v.emptyText,
                          children: h.intl.string(h.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(r.n, {
                      className: g.tabBar,
                      type: 'top',
                      selectedItem: y,
                      onItemSelect: P,
                      children: p.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              r.n.Item,
                              {
                                  className: g.tabBarItem,
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
                  (0, i.jsx)(Z, {
                      items: p,
                      section: y,
                      subsection: S,
                      user: u,
                      currentUser: f,
                      displayProfile: m,
                      onClose: _,
                      hideIdentityInfo: b
                  })
              ]
          });
}
