t.d(n, { Z: () => g }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(442837),
    s = t(706898),
    r = t(481060),
    a = t(246946),
    d = t(785717),
    c = t(786366),
    u = t(323090),
    I = t(296391),
    f = t(384816),
    p = t(389190),
    x = t(428927),
    m = t(228168),
    _ = t(388032),
    h = t(782276),
    Z = t(480234);
function v(e) {
    let { section: n, subsection: t, user: l, currentUser: o, displayProfile: s, guildId: r, onClose: a } = e;
    return n === m.oh.ACTIVITY
        ? (0, i.jsx)(I.Z, {
              user: l,
              currentUser: o,
              displayProfile: s,
              guildId: r,
              onClose: a
          })
        : n === m.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(p.Z, {
                user: l,
                onClose: a
            })
          : n === m.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(x.Z, {
                  user: l,
                  onClose: a
              })
            : n === m.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(c.Z, { user: l })
              : n === m.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: a
                  })
                : (0, i.jsx)(f.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: a
                  });
}
function g(e) {
    var n, t, c;
    let { user: u, currentUser: I, displayProfile: f, guildId: p, items: x, initialSection: g = m.oh.USER_INFO, initialSubsection: j, onClose: E } = e,
        { trackUserProfileAction: y } = (0, d.KZ)(),
        N = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: T, subsection: b }, P] = l.useState({
            section:
                null !==
                    (c =
                        null ===
                            (n = x.find((e) => {
                                let { section: n } = e;
                                return n === g;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== c
                    ? c
                    : null === (t = x[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: j
        });
    l.useEffect(() => {
        null == x.find((e) => e.section === T) &&
            P({
                section: x[0].section,
                subsection: void 0
            });
    }, [x, T]);
    let S = l.useCallback(
        (e) => {
            y({
                action: 'PRESS_SECTION',
                section: e
            }),
                P({
                    section: e,
                    subsection: void 0
                });
        },
        [y, P]
    );
    return N
        ? (0, i.jsx)('div', {
              className: Z.container,
              children: (0, i.jsxs)('div', {
                  className: h.empty,
                  children: [
                      (0, i.jsx)('div', { className: h.emptyIconStreamerMode }),
                      (0, i.jsx)('div', {
                          className: h.emptyText,
                          children: _.intl.string(_.t.Br1ls7)
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
                      selectedItem: T,
                      onItemSelect: S,
                      children: x.map((e) => {
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
                  (0, i.jsx)(v, {
                      items: x,
                      section: T,
                      subsection: b,
                      user: u,
                      currentUser: I,
                      displayProfile: f,
                      guildId: p,
                      onClose: E
                  })
              ]
          });
}
