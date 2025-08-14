n.d(t, { Z: () => h }), n(388685);
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
    p = n(384816),
    m = n(389190),
    g = n(428927),
    b = n(228168),
    j = n(388032),
    y = n(878449),
    x = n(602727);
function O(e) {
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
          ? (0, r.jsx)(m.Z, {
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
                : (0, r.jsx)(p.Z, {
                      user: l,
                      currentUser: i,
                      displayProfile: o,
                      subsection: n,
                      onClose: s,
                  });
}
function h(e) {
    var t, n, d;
    let {
            user: u,
            currentUser: f,
            displayProfile: p,
            guildId: m,
            items: g,
            initialSection: h = b.oh.USER_INFO,
            initialSubsection: v,
            onClose: _,
        } = e,
        { trackUserProfileAction: I } = (0, s.KZ)(),
        P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: E, subsection: T }, Z] = l.useState({
            section:
                null !=
                (d =
                    null ==
                    (t = g.find((e) => {
                        let { section: t } = e;
                        return t === h;
                    }))
                        ? void 0
                        : t.section)
                    ? d
                    : null == (n = g[0])
                      ? void 0
                      : n.section,
            subsection: v,
        });
    l.useEffect(() => {
        null == g.find((e) => e.section === E) &&
            Z({
                section: g[0].section,
                subsection: void 0,
            });
    }, [g, E]);
    let N = l.useCallback(
        (e) => {
            I({
                action: "PRESS_SECTION",
                section: e,
            }),
                Z({
                    section: e,
                    subsection: void 0,
                });
        },
        [I, Z],
    );
    return P
        ? (0, r.jsx)("div", {
              className: x.container,
              children: (0, r.jsxs)("div", {
                  className: y.empty,
                  children: [
                      (0, r.jsx)("div", { className: y.emptyIconStreamerMode }),
                      (0, r.jsx)("div", {
                          className: y.emptyText,
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
                      selectedItem: E,
                      onItemSelect: N,
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
                  (0, r.jsx)(O, {
                      items: g,
                      section: E,
                      subsection: T,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: m,
                      onClose: _,
                  }),
              ],
          });
}
