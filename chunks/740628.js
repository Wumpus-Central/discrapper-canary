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
    b = t(389190),
    y = t(428927),
    m = t(228168),
    g = t(388032),
    I = t(301150),
    j = t(923243);
function v(e) {
    let { section: n, subsection: t, user: o, currentUser: i, displayProfile: l, guildId: s, onClose: c } = e;
    return n === m.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: o,
              currentUser: i,
              displayProfile: l,
              guildId: s,
              onClose: c
          })
        : n === m.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(b.Z, {
                user: o,
                onClose: c
            })
          : n === m.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(y.Z, {
                  user: o,
                  onClose: c
              })
            : n === m.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: o })
              : n === m.oh.BOT_INFO
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
    let { user: u, currentUser: f, displayProfile: p, guildId: b, items: y, initialSection: h = m.oh.USER_INFO, initialSubsection: _, onClose: x } = e,
        { trackUserProfileAction: O } = (0, a.KZ)(),
        Z = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: P, subsection: N }, E] = o.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = y.find((e) => {
                        let { section: n } = e;
                        return n === h;
                    }))
                        ? void 0
                        : n.section)
                    ? d
                    : null == (t = y[0])
                      ? void 0
                      : t.section,
            subsection: _
        });
    o.useEffect(() => {
        null == y.find((e) => e.section === P) &&
            E({
                section: y[0].section,
                subsection: void 0
            });
    }, [y, P]);
    let S = o.useCallback(
        (e) => {
            O({
                action: 'PRESS_SECTION',
                section: e
            }),
                E({
                    section: e,
                    subsection: void 0
                });
        },
        [O, E]
    );
    return Z
        ? (0, r.jsx)('div', {
              className: j.container,
              children: (0, r.jsxs)('div', {
                  className: I.empty,
                  children: [
                      (0, r.jsx)('div', { className: I.emptyIconStreamerMode }),
                      (0, r.jsx)('div', {
                          className: I.emptyText,
                          children: g.NW.string(g.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: j.container,
              children: [
                  (0, r.jsx)(l.n, {
                      className: j.tabBar,
                      type: 'top',
                      selectedItem: P,
                      onItemSelect: S,
                      children: y.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, r.jsx)(
                              l.n.Item,
                              {
                                  className: j.tabBarItem,
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
                  (0, r.jsx)(v, {
                      items: y,
                      section: P,
                      subsection: N,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: b,
                      onClose: x
                  })
              ]
          });
}
