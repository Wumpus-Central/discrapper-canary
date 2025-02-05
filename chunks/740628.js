t.d(n, { Z: () => _ }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(442837),
    s = t(706898),
    r = t(481060),
    a = t(246946),
    d = t(785717),
    c = t(786366),
    u = t(323090),
    m = t(296391),
    x = t(384816),
    p = t(389190),
    I = t(428927),
    f = t(228168),
    h = t(388032),
    v = t(731218),
    Z = t(893302);
function g(e) {
    let { section: n, subsection: t, user: l, currentUser: o, displayProfile: s, guildId: r, onClose: a } = e;
    return n === f.oh.ACTIVITY
        ? (0, i.jsx)(m.Z, {
              user: l,
              currentUser: o,
              displayProfile: s,
              guildId: r,
              onClose: a
          })
        : n === f.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(p.Z, {
                user: l,
                onClose: a
            })
          : n === f.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(I.Z, {
                  user: l,
                  onClose: a
              })
            : n === f.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(c.Z, { user: l })
              : n === f.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: a
                  })
                : (0, i.jsx)(x.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: a
                  });
}
function _(e) {
    var n, t, c;
    let { user: u, currentUser: m, displayProfile: x, guildId: p, items: I, initialSection: _ = f.oh.USER_INFO, initialSubsection: j, onClose: E } = e,
        { trackUserProfileAction: N } = (0, d.KZ)(),
        y = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: T, subsection: P }, S] = l.useState({
            section:
                null !==
                    (c =
                        null ===
                            (n = I.find((e) => {
                                let { section: n } = e;
                                return n === _;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== c
                    ? c
                    : null === (t = I[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: j
        });
    l.useEffect(() => {
        null == I.find((e) => e.section === T) &&
            S({
                section: I[0].section,
                subsection: void 0
            });
    }, [I, T]);
    let b = l.useCallback(
        (e) => {
            N({
                action: 'PRESS_SECTION',
                section: e
            }),
                S({
                    section: e,
                    subsection: void 0
                });
        },
        [N, S]
    );
    return y
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
                      selectedItem: T,
                      onItemSelect: b,
                      children: I.map((e) => {
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
                  (0, i.jsx)(g, {
                      items: I,
                      section: T,
                      subsection: P,
                      user: u,
                      currentUser: m,
                      displayProfile: x,
                      guildId: p,
                      onClose: E
                  })
              ]
          });
}
