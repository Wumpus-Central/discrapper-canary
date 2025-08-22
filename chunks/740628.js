t.d(n, { Z: () => _ }), t(388685);
var r = t(951288),
    o = t(647438),
    l = t(442837),
    i = t(706898),
    c = t(481060),
    a = t(246946),
    s = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(116906),
    m = t(384816),
    p = t(389190),
    x = t(428927),
    b = t(228168),
    g = t(388032),
    h = t(878449),
    j = t(602727);
function v(e) {
    let {
        section: n,
        subsection: t,
        user: o,
        currentUser: l,
        displayProfile: i,
        guildId: c,
        channelId: a,
        onClose: s,
    } = e;
    return n === b.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: o,
              currentUser: l,
              guildId: c,
              onClose: s,
          })
        : n === b.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(p.Z, {
                user: o,
                guildId: c,
                channelId: a,
                onClose: s,
            })
          : n === b.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(x.Z, {
                  user: o,
                  onClose: s,
              })
            : n === b.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: o })
              : n === b.oh.BOT_INFO
                ? (0, r.jsx)(u.Z, {
                      user: o,
                      currentUser: l,
                      displayProfile: i,
                      guildId: c,
                      subsection: t,
                      onClose: s,
                  })
                : (0, r.jsx)(m.Z, {
                      user: o,
                      currentUser: l,
                      displayProfile: i,
                      subsection: t,
                      onClose: s,
                  });
}
function _(e) {
    var n, t, d;
    let {
            user: u,
            currentUser: f,
            displayProfile: m,
            guildId: p,
            items: x,
            initialSection: _ = b.oh.USER_INFO,
            initialSubsection: y,
            onClose: O,
        } = e,
        { trackUserProfileAction: I } = (0, s.KZ)(),
        Z = (0, l.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: P, subsection: T }, N] = o.useState({
            section:
                null !=
                (d =
                    null ==
                    (n = x.find((e) => {
                        let { section: n } = e;
                        return n === _;
                    }))
                        ? void 0
                        : n.section)
                    ? d
                    : null == (t = x[0])
                      ? void 0
                      : t.section,
            subsection: y,
        });
    o.useEffect(() => {
        null == x.find((e) => e.section === P) &&
            N({
                section: x[0].section,
                subsection: void 0,
            });
    }, [x, P]);
    let A = o.useCallback(
        (e) => {
            I({
                action: "PRESS_SECTION",
                section: e,
            }),
                N({
                    section: e,
                    subsection: void 0,
                });
        },
        [I, N],
    );
    return Z
        ? (0, r.jsx)("div", {
              className: j.container,
              children: (0, r.jsxs)("div", {
                  className: h.empty,
                  children: [
                      (0, r.jsx)("div", { className: h.emptyIconStreamerMode }),
                      (0, r.jsx)("div", {
                          className: h.emptyText,
                          children: g.intl.string(g.t.Br1ls7),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)("div", {
              className: j.container,
              children: [
                  (0, r.jsx)(i.n, {
                      className: j.tabBar,
                      type: "top",
                      selectedItem: P,
                      onItemSelect: A,
                      children: x.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, r.jsx)(
                              i.n.Item,
                              {
                                  className: j.tabBarItem,
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
                      items: x,
                      section: P,
                      subsection: T,
                      user: u,
                      currentUser: f,
                      displayProfile: m,
                      guildId: p,
                      onClose: O,
                  }),
              ],
          });
}
