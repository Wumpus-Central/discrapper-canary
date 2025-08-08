n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(706898),
    a = n(481060),
    c = n(246946),
    s = n(785717),
    d = n(786366),
    u = n(323090),
    f = n(116906),
    m = n(384816),
    p = n(389190),
    g = n(428927),
    b = n(228168),
    j = n(388032),
    h = n(301150),
    x = n(923243);
function y(e) {
    let {
        section: t,
        subsection: n,
        user: l,
        currentUser: i,
        displayProfile: o,
        guildId: a,
        channelId: c,
        onClose: s,
    } = e;
    return t === b.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: l,
              currentUser: i,
              displayProfile: o,
              guildId: a,
              onClose: s,
          })
        : t === b.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(p.Z, {
                user: l,
                guildId: a,
                channelId: c,
                onClose: s,
            })
          : t === b.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(g.Z, {
                  user: l,
                  onClose: s,
              })
            : t === b.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: l })
              : t === b.oh.BOT_INFO
                ? (0, r.jsx)(u.Z, {
                      user: l,
                      currentUser: i,
                      displayProfile: o,
                      guildId: a,
                      subsection: n,
                      onClose: s,
                  })
                : (0, r.jsx)(m.Z, {
                      user: l,
                      currentUser: i,
                      displayProfile: o,
                      subsection: n,
                      onClose: s,
                  });
}
function v(e) {
    var t, n, d;
    let {
            user: u,
            currentUser: f,
            displayProfile: m,
            guildId: p,
            items: g,
            initialSection: v = b.oh.USER_INFO,
            initialSubsection: O,
            onClose: I,
        } = e,
        { trackUserProfileAction: _ } = (0, s.KZ)(),
        P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: Z, subsection: N }, E] = l.useState({
            section:
                null !=
                (d =
                    null ==
                    (t = g.find((e) => {
                        let { section: t } = e;
                        return t === v;
                    }))
                        ? void 0
                        : t.section)
                    ? d
                    : null == (n = g[0])
                      ? void 0
                      : n.section,
            subsection: O,
        });
    l.useEffect(() => {
        null == g.find((e) => e.section === Z) &&
            E({
                section: g[0].section,
                subsection: void 0,
            });
    }, [g, Z]);
    let S = l.useCallback(
        (e) => {
            _({
                action: "PRESS_SECTION",
                section: e,
            }),
                E({
                    section: e,
                    subsection: void 0,
                });
        },
        [_, E],
    );
    return P
        ? (0, r.jsx)("div", {
              className: x.container,
              children: (0, r.jsxs)("div", {
                  className: h.empty,
                  children: [
                      (0, r.jsx)("div", { className: h.emptyIconStreamerMode }),
                      (0, r.jsx)("div", {
                          className: h.emptyText,
                          children: j.intl.string(j.t.Br1ls7),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)("div", {
              className: x.container,
              children: [
                  (0, r.jsx)(o.n, {
                      className: x.tabBar,
                      type: "top",
                      selectedItem: Z,
                      onItemSelect: S,
                      children: g.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, r.jsx)(
                              o.n.Item,
                              {
                                  className: x.tabBarItem,
                                  id: t,
                                  "aria-label": n,
                                  children: (0, r.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      children: n,
                                  }),
                              },
                              t,
                          );
                      }),
                  }),
                  (0, r.jsx)(y, {
                      items: g,
                      section: Z,
                      subsection: N,
                      user: u,
                      currentUser: f,
                      displayProfile: m,
                      guildId: p,
                      onClose: I,
                  }),
              ],
          });
}
