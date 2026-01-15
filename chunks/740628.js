t.d(n, { Z: () => g }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(442837),
    r = t(481060),
    a = t(246946),
    c = t(785717),
    s = t(786366),
    d = t(323090),
    u = t(116906),
    f = t(384816),
    m = t(389190),
    p = t(428927),
    x = t(228168),
    h = t(388032),
    j = t(940640),
    v = t(9113);
function b(e) {
    let { section: n, user: t, currentUser: i, displayProfile: o, guildId: r, channelId: a, onClose: c } = e;
    return n === x.oh.ACTIVITY
        ? (0, l.jsx)(u.Z, {
              user: t,
              currentUser: i,
              guildId: r,
              onClose: c,
          })
        : n === x.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(m.Z, {
                user: t,
                guildId: r,
                channelId: a,
                onClose: c,
            })
          : n === x.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(p.Z, {
                  user: t,
                  onClose: c,
              })
            : n === x.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(s.Z, { user: t })
              : n === x.oh.BOT_INFO
                ? (0, l.jsx)(d.Z, {
                      user: t,
                      displayProfile: o,
                      guildId: r,
                      onClose: c,
                  })
                : (0, l.jsx)(f.Z, {
                      user: t,
                      displayProfile: o,
                      onClose: c,
                  });
}
function g(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: s,
            guildId: d,
            items: u,
            initialSection: f = x.oh.USER_INFO,
            onClose: m,
        } = e,
        { trackUserProfileAction: p } = (0, c.KZ)(),
        g = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [I, y] = i.useState(() => {
            var e, n, t;
            return null !=
                (t =
                    null ==
                    (e = u.find((e) => {
                        let { section: n } = e;
                        return n === f;
                    }))
                        ? void 0
                        : e.section)
                ? t
                : null == (n = u[0])
                  ? void 0
                  : n.section;
        });
    i.useEffect(() => {
        null == u.find((e) => e.section === I) && y(u[0].section);
    }, [u, I]);
    let Z = i.useCallback(
        (e) => {
            p({
                action: "PRESS_SECTION",
                section: e,
            }),
                y(e);
        },
        [p],
    );
    return g
        ? (0, l.jsx)("div", {
              className: v.container,
              children: (0, l.jsxs)("div", {
                  className: j.empty,
                  children: [
                      (0, l.jsx)("div", { className: j.emptyIconStreamerMode }),
                      (0, l.jsx)("div", {
                          className: j.emptyText,
                          children: h.intl.string(h.t.Br1ls3),
                      }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: v.container,
              children: [
                  (0, l.jsx)(r.njP, {
                      className: v.tabBar,
                      type: "top",
                      selectedItem: I,
                      onItemSelect: Z,
                      children: u.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, l.jsx)(
                              r.njP.Item,
                              {
                                  className: v.tabBarItem,
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
                  (0, l.jsx)(b, {
                      items: u,
                      section: I,
                      user: n,
                      currentUser: t,
                      displayProfile: s,
                      guildId: d,
                      onClose: m,
                  }),
              ],
          });
}
