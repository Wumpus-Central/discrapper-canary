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
    b = t(940640),
    v = t(9113);
function j(e) {
    let {
        section: n,
        subsection: t,
        user: i,
        currentUser: o,
        displayProfile: r,
        guildId: a,
        channelId: c,
        onClose: h,
    } = e;
    return n === x.oh.ACTIVITY
        ? (0, l.jsx)(u.Z, {
              user: i,
              currentUser: o,
              guildId: a,
              onClose: h,
          })
        : n === x.oh.MUTUAL_FRIENDS
          ? (0, l.jsx)(m.Z, {
                user: i,
                guildId: a,
                channelId: c,
                onClose: h,
            })
          : n === x.oh.MUTUAL_GUILDS
            ? (0, l.jsx)(p.Z, {
                  user: i,
                  onClose: h,
              })
            : n === x.oh.BOT_DATA_ACCESS
              ? (0, l.jsx)(s.Z, { user: i })
              : n === x.oh.BOT_INFO
                ? (0, l.jsx)(d.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: r,
                      guildId: a,
                      subsection: t,
                      onClose: h,
                  })
                : (0, l.jsx)(f.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: h,
                  });
}
function g(e) {
    var n, t, s;
    let {
            user: d,
            currentUser: u,
            displayProfile: f,
            guildId: m,
            items: p,
            initialSection: g = x.oh.USER_INFO,
            initialSubsection: I,
            onClose: y,
        } = e,
        { trackUserProfileAction: Z } = (0, c.KZ)(),
        O = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: N, subsection: T }, A] = i.useState({
            section:
                null !=
                (s =
                    null ==
                    (n = p.find((e) => {
                        let { section: n } = e;
                        return n === g;
                    }))
                        ? void 0
                        : n.section)
                    ? s
                    : null == (t = p[0])
                      ? void 0
                      : t.section,
            subsection: I,
        });
    i.useEffect(() => {
        null == p.find((e) => e.section === N) &&
            A({
                section: p[0].section,
                subsection: void 0,
            });
    }, [p, N]);
    let P = i.useCallback(
        (e) => {
            Z({
                action: "PRESS_SECTION",
                section: e,
            }),
                A({
                    section: e,
                    subsection: void 0,
                });
        },
        [Z, A],
    );
    return O
        ? (0, l.jsx)("div", {
              className: v.container,
              children: (0, l.jsxs)("div", {
                  className: b.empty,
                  children: [
                      (0, l.jsx)("div", { className: b.emptyIconStreamerMode }),
                      (0, l.jsx)("div", {
                          className: b.emptyText,
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
                      selectedItem: N,
                      onItemSelect: P,
                      children: p.map((e) => {
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
                  (0, l.jsx)(j, {
                      items: p,
                      section: N,
                      subsection: T,
                      user: d,
                      currentUser: u,
                      displayProfile: f,
                      guildId: m,
                      onClose: y,
                  }),
              ],
          });
}
