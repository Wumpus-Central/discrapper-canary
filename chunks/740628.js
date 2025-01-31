t.d(n, { Z: () => g }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(442837),
    s = t(706898),
    r = t(481060),
    a = t(246946),
    c = t(785717),
    d = t(786366),
    u = t(323090),
    m = t(296391),
    x = t(384816),
    p = t(389190),
    f = t(428927),
    I = t(228168),
    h = t(388032),
    v = t(731218),
    Z = t(893302);
function _(e) {
    let { section: n, subsection: t, user: l, currentUser: o, displayProfile: s, onClose: r } = e;
    return n === I.oh.ACTIVITY
        ? (0, i.jsx)(m.Z, {
              profileGuildId: null == s ? void 0 : s.guildId,
              user: l,
              currentUser: o,
              onClose: r
          })
        : n === I.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(p.Z, {
                user: l,
                onClose: r
            })
          : n === I.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(f.Z, {
                  user: l,
                  onClose: r
              })
            : n === I.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: l })
              : n === I.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: r
                  })
                : (0, i.jsx)(x.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: r
                  });
}
function g(e) {
    var n, t, d;
    let { user: u, currentUser: m, displayProfile: x, items: p, initialSection: f = I.oh.USER_INFO, initialSubsection: g, onClose: j } = e,
        { trackUserProfileAction: E } = (0, c.KZ)(),
        N = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: y, subsection: T }, P] = l.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = p.find((e) => {
                                let { section: n } = e;
                                return n === f;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (t = p[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: g
        });
    l.useEffect(() => {
        null == p.find((e) => e.section === y) &&
            P({
                section: p[0].section,
                subsection: void 0
            });
    }, [p, y]);
    let b = l.useCallback(
        (e) => {
            E({
                action: 'PRESS_SECTION',
                section: e
            }),
                P({
                    section: e,
                    subsection: void 0
                });
        },
        [E, P]
    );
    return N
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
                  (0, i.jsx)(s.n, {
                      className: Z.tabBar,
                      type: 'top',
                      selectedItem: y,
                      onItemSelect: b,
                      children: p.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              s.n.Item,
                              {
                                  className: Z.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, i.jsx)(_, {
                      items: p,
                      section: y,
                      subsection: T,
                      user: u,
                      currentUser: m,
                      displayProfile: x,
                      onClose: j
                  })
              ]
          });
}
