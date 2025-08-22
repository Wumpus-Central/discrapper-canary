t.d(n, { Z: () => y }), t(388685);
var r = t(951288),
    l = t(647438),
    o = t(442837),
    i = t(706898),
    c = t(481060),
    s = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(116906),
    m = t(384816),
    p = t(389190),
    h = t(428927),
    x = t(228168),
    b = t(388032),
    j = t(878449),
    g = t(602727);
function v(e) {
    let {
        section: n,
        subsection: t,
        user: l,
        currentUser: o,
        displayProfile: i,
        guildId: c,
        channelId: s,
        onClose: a,
    } = e;
    return n === x.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: l,
              currentUser: o,
              guildId: c,
              onClose: a,
          })
        : n === x.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(p.Z, {
                user: l,
                guildId: c,
                channelId: s,
                onClose: a,
            })
          : n === x.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(h.Z, {
                  user: l,
                  onClose: a,
              })
            : n === x.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: l })
              : n === x.oh.BOT_INFO
                ? (0, r.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: i,
                      guildId: c,
                      subsection: t,
                      onClose: a,
                  })
                : (0, r.jsx)(m.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: i,
                      subsection: t,
                      onClose: a,
                  });
}
function y(e) {
    var n, t, d;
    let {
            user: u,
            currentUser: f,
            displayProfile: m,
            guildId: p,
            items: h,
            initialSection: y = x.oh.USER_INFO,
            initialSubsection: O,
            onClose: I,
        } = e,
        { trackUserProfileAction: _ } = (0, a.KZ)(),
        Z = (0, o.e7)([s.Z], () => s.Z.hidePersonalInformation),
        [{ section: P, subsection: T }, N] = l.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = h.find((e) => {
                        let { section: n } = e;
                        return n === y;
                    }))
                        ? void 0
                        : n.section)
                    ? d
                    : null == (t = h[0])
                      ? void 0
                      : t.section,
            subsection: O,
        });
    l.useEffect(() => {
        null == h.find((e) => e.section === P) &&
            N({
                section: h[0].section,
                subsection: void 0,
            });
    }, [h, P]);
    let A = l.useCallback(
        (e) => {
            _({
                action: "PRESS_SECTION",
                section: e,
            }),
                N({
                    section: e,
                    subsection: void 0,
                });
        },
        [_, N],
    );
    return Z
        ? (0, r.jsx)("div", {
              className: g.container,
              children: (0, r.jsxs)("div", {
                  className: j.empty,
                  children: [
                      (0, r.jsx)("div", { className: j.emptyIconStreamerMode }),
                      (0, r.jsx)("div", {
                          className: j.emptyText,
                          children: b.intl.string(b.t.Br1ls7),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)("div", {
              className: g.container,
              children: [
                  (0, r.jsx)(i.n, {
                      className: g.tabBar,
                      type: "top",
                      selectedItem: P,
                      onItemSelect: A,
                      children: h.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, r.jsx)(
                              i.n.Item,
                              {
                                  className: g.tabBarItem,
                                  id: n,
                                  "aria-label": t,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      children: t,
                                  }),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, r.jsx)(v, {
                      items: h,
                      section: P,
                      subsection: T,
                      user: u,
                      currentUser: f,
                      displayProfile: m,
                      guildId: p,
                      onClose: I,
                  }),
              ],
          });
}
