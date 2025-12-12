t.d(n, { Z: () => b }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(442837),
    r = t(481060),
    s = t(246946),
    a = t(785717),
    c = t(786366),
    d = t(323090),
    u = t(116906),
    m = t(384816),
    f = t(389190),
    p = t(428927),
    x = t(228168),
    h = t(388032),
    v = t(878449),
    j = t(602727);
function g(e) {
    let {
        section: n,
        subsection: t,
        user: i,
        currentUser: o,
        displayProfile: r,
        guildId: s,
        channelId: a,
        onClose: h,
    } = e;
    return n === x.oh.ACTIVITY
        ? (0, l.jsx)(u.Z, {
              user: i,
              currentUser: o,
              guildId: s,
              onClose: h,
          })
        : n === x.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(f.Z, {
                user: i,
                guildId: s,
                channelId: a,
                onClose: h,
            })
          : n === x.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(p.Z, {
                  user: i,
                  onClose: h,
              })
            : n === x.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(c.Z, { user: i })
              : n === x.oh.BOT_INFO
                ? (0, l.jsx)(d.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: r,
                      guildId: s,
                      subsection: t,
                      onClose: h,
                  })
                : (0, l.jsx)(m.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: h,
                  });
}
function b(e) {
    var n, t, c;
    let {
            user: d,
            currentUser: u,
            displayProfile: m,
            guildId: f,
            items: p,
            initialSection: b = x.oh.USER_INFO,
            initialSubsection: I,
            onClose: y,
        } = e,
        { trackUserProfileAction: Z } = (0, a.KZ)(),
        _ = (0, o.e7)([s.Z], () => s.Z.hidePersonalInformation),
        [{ section: O, subsection: N }, T] = i.useState({
            section:
                null !=
                (c =
                    null ==
                    (n = p.find((e) => {
                        let { section: n } = e;
                        return n === b;
                    }))
                        ? void 0
                        : n.section)
                    ? c
                    : null == (t = p[0])
                      ? void 0
                      : t.section,
            subsection: I,
        });
    i.useEffect(() => {
        null == p.find((e) => e.section === O) &&
            T({
                section: p[0].section,
                subsection: void 0,
            });
    }, [p, O]);
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
    return _
        ? (0, l.jsx)("div", {
              className: j.container,
              children: (0, l.jsxs)("div", {
                  className: v.empty,
                  children: [
                      (0, l.jsx)("div", { className: v.emptyIconStreamerMode }),
                      (0, l.jsx)("div", {
                          className: v.emptyText,
                          children: h.intl.string(h.t.Br1ls3),
                      }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: j.container,
              children: [
                  (0, l.jsx)(r.njP, {
                      className: j.tabBar,
                      type: "top",
                      selectedItem: O,
                      onItemSelect: A,
                      children: p.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, l.jsx)(
                              r.njP.Item,
                              {
                                  className: j.tabBarItem,
                                  id: n,
                                  "aria-label": t,
                                  children: (0, l.jsx)(r.Text, {
                                      variant: "text-sm/normal",
                                      children: t,
                                  }),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, l.jsx)(g, {
                      items: p,
                      section: O,
                      subsection: N,
                      user: d,
                      currentUser: u,
                      displayProfile: m,
                      guildId: f,
                      onClose: y,
                  }),
              ],
          });
}
