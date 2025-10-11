t.d(n, { Z: () => b }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(442837),
    o = t(481060),
    s = t(246946),
    a = t(785717),
    c = t(786366),
    d = t(323090),
    u = t(116906),
    m = t(384816),
    p = t(389190),
    f = t(428927),
    h = t(228168),
    x = t(388032),
    j = t(878449),
    v = t(602727);
function g(e) {
    let {
        section: n,
        subsection: t,
        user: i,
        currentUser: r,
        displayProfile: o,
        guildId: s,
        channelId: a,
        onClose: x,
    } = e;
    return n === h.oh.ACTIVITY
        ? (0, l.jsx)(u.Z, {
              user: i,
              currentUser: r,
              guildId: s,
              onClose: x,
          })
        : n === h.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(p.Z, {
                user: i,
                guildId: s,
                channelId: a,
                onClose: x,
            })
          : n === h.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(f.Z, {
                  user: i,
                  onClose: x,
              })
            : n === h.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(c.Z, { user: i })
              : n === h.oh.BOT_INFO
                ? (0, l.jsx)(d.Z, {
                      user: i,
                      currentUser: r,
                      displayProfile: o,
                      guildId: s,
                      subsection: t,
                      onClose: x,
                  })
                : (0, l.jsx)(m.Z, {
                      user: i,
                      currentUser: r,
                      displayProfile: o,
                      subsection: t,
                      onClose: x,
                  });
}
function b(e) {
    var n, t, c;
    let {
            user: d,
            currentUser: u,
            displayProfile: m,
            guildId: p,
            items: f,
            initialSection: b = h.oh.USER_INFO,
            initialSubsection: I,
            onClose: y,
        } = e,
        { trackUserProfileAction: Z } = (0, a.KZ)(),
        O = (0, r.e7)([s.Z], () => s.Z.hidePersonalInformation),
        [{ section: N, subsection: P }, T] = i.useState({
            section:
                null !=
                (c =
                    null ==
                    (n = f.find((e) => {
                        let { section: n } = e;
                        return n === b;
                    }))
                        ? void 0
                        : n.section)
                    ? c
                    : null == (t = f[0])
                      ? void 0
                      : t.section,
            subsection: I,
        });
    i.useEffect(() => {
        null == f.find((e) => e.section === N) &&
            T({
                section: f[0].section,
                subsection: void 0,
            });
    }, [f, N]);
    let A = i.useCallback(
        (e) => {
            Z({
                action: "PRESS_SECTION",
                section: e,
            }),
                T({
                    section: e,
                    subsection: void 0,
                });
        },
        [Z, T],
    );
    return O
        ? (0, l.jsx)("div", {
              className: v.container,
              children: (0, l.jsxs)("div", {
                  className: j.empty,
                  children: [
                      (0, l.jsx)("div", { className: j.emptyIconStreamerMode }),
                      (0, l.jsx)("div", {
                          className: j.emptyText,
                          children: x.intl.string(x.t.Br1ls7),
                      }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: v.container,
              children: [
                  (0, l.jsx)(o.njP, {
                      className: v.tabBar,
                      type: "top",
                      selectedItem: N,
                      onItemSelect: A,
                      children: f.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, l.jsx)(
                              o.njP.Item,
                              {
                                  className: v.tabBarItem,
                                  id: n,
                                  "aria-label": t,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: t,
                                  }),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, l.jsx)(g, {
                      items: f,
                      section: N,
                      subsection: P,
                      user: d,
                      currentUser: u,
                      displayProfile: m,
                      guildId: p,
                      onClose: y,
                  }),
              ],
          });
}
