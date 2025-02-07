i.d(n, { Z: () => _ }), i(47120);
var t = i(200651),
    l = i(192379),
    o = i(442837),
    s = i(706898),
    r = i(481060),
    a = i(246946),
    d = i(785717),
    c = i(786366),
    u = i(323090),
    m = i(296391),
    x = i(384816),
    p = i(389190),
    f = i(428927),
    I = i(228168),
    h = i(388032),
    v = i(731218),
    Z = i(893302);
function g(e) {
    let { section: n, subsection: i, user: l, currentUser: o, displayProfile: s, guildId: r, onClose: a } = e;
    return n === I.oh.ACTIVITY
        ? (0, t.jsx)(m.Z, {
              user: l,
              currentUser: o,
              displayProfile: s,
              guildId: r,
              onClose: a
          })
        : n === I.oh.MUTUAL_FRIENDS
          ? (0, t.jsx)(p.Z, {
                user: l,
                onClose: a
            })
          : n === I.oh.MUTUAL_GUILDS
            ? (0, t.jsx)(f.Z, {
                  user: l,
                  onClose: a
              })
            : n === I.oh.BOT_DATA_ACCESS
              ? (0, t.jsx)(c.Z, { user: l })
              : n === I.oh.BOT_INFO
                ? (0, t.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: i,
                      onClose: a
                  })
                : (0, t.jsx)(x.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: i,
                      onClose: a
                  });
}
function _(e) {
    var n, i, c;
    let { user: u, currentUser: m, displayProfile: x, guildId: p, items: f, initialSection: _ = I.oh.USER_INFO, initialSubsection: j, onClose: E } = e,
        { trackUserProfileAction: N } = (0, d.KZ)(),
        y = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: T, subsection: S }, b] = l.useState({
            section:
                null !==
                    (c =
                        null ===
                            (n = f.find((e) => {
                                let { section: n } = e;
                                return n === _;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== c
                    ? c
                    : null === (i = f[0]) || void 0 === i
                      ? void 0
                      : i.section,
            subsection: j
        });
    l.useEffect(() => {
        null == f.find((e) => e.section === T) &&
            b({
                section: f[0].section,
                subsection: void 0
            });
    }, [f, T]);
    let P = l.useCallback(
        (e) => {
            N({
                action: 'PRESS_SECTION',
                section: e
            }),
                b({
                    section: e,
                    subsection: void 0
                });
        },
        [N, b]
    );
    return y
        ? (0, t.jsx)('div', {
              className: Z.container,
              children: (0, t.jsxs)('div', {
                  className: v.empty,
                  children: [
                      (0, t.jsx)('div', { className: v.emptyIconStreamerMode }),
                      (0, t.jsx)('div', {
                          className: v.emptyText,
                          children: h.intl.string(h.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, t.jsxs)('div', {
              className: Z.container,
              children: [
                  (0, t.jsx)(s.n, {
                      className: Z.tabBar,
                      type: 'top',
                      selectedItem: T,
                      onItemSelect: P,
                      children: f.map((e) => {
                          let { section: n, text: i } = e;
                          return (0, t.jsx)(
                              s.n.Item,
                              {
                                  className: Z.tabBarItem,
                                  id: n,
                                  'aria-label': i,
                                  children: (0, t.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: i
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, t.jsx)(g, {
                      items: f,
                      section: T,
                      subsection: S,
                      user: u,
                      currentUser: m,
                      displayProfile: x,
                      guildId: p,
                      onClose: E
                  })
              ]
          });
}
