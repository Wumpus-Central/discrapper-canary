t.d(n, { Z: () => h }), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(706898),
    s = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(296391),
    p = t(384816),
    m = t(389190),
    I = t(428927),
    b = t(228168),
    g = t(388032),
    v = t(865152),
    y = t(410214);
function j(e) {
    let { section: n, subsection: t, user: o, currentUser: i, displayProfile: l, guildId: s, onClose: c } = e;
    return n === b.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: o,
              currentUser: i,
              displayProfile: l,
              guildId: s,
              onClose: c
          })
        : n === b.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(m.Z, {
                user: o,
                onClose: c
            })
          : n === b.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(I.Z, {
                  user: o,
                  onClose: c
              })
            : n === b.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: o })
              : n === b.oh.BOT_INFO
                ? (0, r.jsx)(u.Z, {
                      user: o,
                      currentUser: i,
                      displayProfile: l,
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
function h(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: m, items: I, initialSection: h = b.oh.USER_INFO, initialSubsection: x, onClose: O } = e,
        { trackUserProfileAction: _ } = (0, a.KZ)(),
        Z = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: N, subsection: P }, E] = o.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = I.find((e) => {
                                let { section: n } = e;
                                return n === h;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (t = I[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: x
        });
    o.useEffect(() => {
        null == I.find((e) => e.section === N) &&
            E({
                section: I[0].section,
                subsection: void 0
            });
    }, [I, N]);
    let S = o.useCallback(
        (e) => {
            _({
                action: 'PRESS_SECTION',
                section: e
            }),
                E({
                    section: e,
                    subsection: void 0
                });
        },
        [_, E]
    );
    return Z
        ? (0, r.jsx)('div', {
              className: y.container,
              children: (0, r.jsxs)('div', {
                  className: v.empty,
                  children: [
                      (0, r.jsx)('div', { className: v.emptyIconStreamerMode }),
                      (0, r.jsx)('div', {
                          className: v.emptyText,
                          children: g.NW.string(g.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: y.container,
              children: [
                  (0, r.jsx)(l.n, {
                      className: y.tabBar,
                      type: 'top',
                      selectedItem: N,
                      onItemSelect: S,
                      children: I.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, r.jsx)(
                              l.n.Item,
                              {
                                  className: y.tabBarItem,
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
                  (0, r.jsx)(j, {
                      items: I,
                      section: N,
                      subsection: P,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: m,
                      onClose: O
                  })
              ]
          });
}
