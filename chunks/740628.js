t.d(n, { Z: () => _ }), t(388685);
var i = t(200651),
    o = t(192379),
    l = t(442837),
    r = t(706898),
    s = t(481060),
    a = t(246946),
    c = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(116906),
    p = t(384816),
    m = t(389190),
    h = t(428927),
    x = t(228168),
    I = t(388032),
    j = t(301150),
    v = t(923243);
function b(e) {
    let { section: n, subsection: t, user: o, currentUser: l, displayProfile: r, guildId: s, onClose: a } = e;
    return n === x.oh.ACTIVITY
        ? (0, i.jsx)(f.Z, {
              user: o,
              currentUser: l,
              displayProfile: r,
              guildId: s,
              onClose: a
          })
        : n === x.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(m.Z, {
                user: o,
                onClose: a
            })
          : n === x.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(h.Z, {
                  user: o,
                  onClose: a
              })
            : n === x.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: o })
              : n === x.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: o,
                      currentUser: l,
                      displayProfile: r,
                      guildId: s,
                      subsection: t,
                      onClose: a
                  })
                : (0, i.jsx)(p.Z, {
                      user: o,
                      currentUser: l,
                      displayProfile: r,
                      subsection: t,
                      onClose: a
                  });
}
function _(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: p, guildId: m, items: h, initialSection: _ = x.oh.USER_INFO, initialSubsection: g, onClose: Z } = e,
        { trackUserProfileAction: y } = (0, c.KZ)(),
        N = (0, l.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: A, subsection: T }, O] = o.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = h.find((e) => {
                        let { section: n } = e;
                        return n === _;
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
        null == h.find((e) => e.section === A) &&
            O({
                section: h[0].section,
                subsection: void 0
            });
    }, [h, A]);
    let C = o.useCallback(
        (e) => {
            y({
                action: 'PRESS_SECTION',
                section: e
            }),
                O({
                    section: e,
                    subsection: void 0
                });
        },
        [y, O]
    );
    return N
        ? (0, i.jsx)('div', {
              className: v.container,
              children: (0, i.jsxs)('div', {
                  className: j.empty,
                  children: [
                      (0, i.jsx)('div', { className: j.emptyIconStreamerMode }),
                      (0, i.jsx)('div', {
                          className: j.emptyText,
                          children: I.intl.string(I.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: v.container,
              children: [
                  (0, i.jsx)(r.n, {
                      className: v.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: C,
                      children: h.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              r.n.Item,
                              {
                                  className: v.tabBarItem,
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
                  (0, i.jsx)(b, {
                      items: h,
                      section: A,
                      subsection: T,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: m,
                      onClose: Z
                  })
              ]
          });
}
