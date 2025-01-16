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
    x = t(389190),
    I = t(428927),
    p = t(228168),
    h = t(388032),
    v = t(731218),
    Z = t(893302);
function g(e) {
    let { section: n, subsection: t, user: l, currentUser: o, displayProfile: r, onClose: s } = e;
    return n === p.oh.ACTIVITY
        ? (0, i.jsx)(f.Z, {
              profileGuildId: null == r ? void 0 : r.guildId,
              user: l,
              currentUser: o,
              onClose: s
          })
        : n === p.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(x.Z, {
                user: l,
                onClose: s
            })
          : n === p.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(I.Z, {
                  user: l,
                  onClose: s
              })
            : n === p.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: l })
              : n === p.oh.BOT_INFO
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
                      onClose: s
                  });
}
function j(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: m, items: x, initialSection: I = p.oh.USER_INFO, initialSubsection: j, onClose: _ } = e,
        { trackUserProfileAction: b } = (0, a.KZ)(),
        E = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: N, subsection: S }, y] = l.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = x.find((e) => {
                                let { section: n } = e;
                                return n === I;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (t = x[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: j
        });
    l.useEffect(() => {
        if (null == x.find((e) => e.section === N))
            y({
                section: x[0].section,
                subsection: void 0
            });
    }, [x, N]);
    let T = l.useCallback(
        (e) => {
            b({
                action: 'PRESS_SECTION',
                section: e
            }),
                y({
                    section: e,
                    subsection: void 0
                });
        },
        [b, y]
    );
    return E
        ? (0, i.jsx)('div', {
              className: Z.container,
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
              className: Z.container,
              children: [
                  (0, i.jsx)(r.n, {
                      className: Z.tabBar,
                      type: 'top',
                      selectedItem: N,
                      onItemSelect: T,
                      children: x.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              r.n.Item,
                              {
                                  className: Z.tabBarItem,
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
                  (0, i.jsx)(g, {
                      items: x,
                      section: N,
                      subsection: S,
                      user: u,
                      currentUser: f,
                      displayProfile: m,
                      onClose: _
                  })
              ]
          });
}
