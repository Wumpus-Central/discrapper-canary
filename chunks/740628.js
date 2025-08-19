n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    o = n(647438),
    i = n(442837),
    l = n(706898),
    a = n(481060),
    c = n(246946),
    s = n(785717),
    d = n(786366),
    u = n(323090),
    f = n(116906),
    p = n(384816),
    m = n(389190),
    b = n(428927),
    g = n(228168),
    h = n(388032),
    x = n(878449),
    _ = n(602727);
function j(e) {
    let {
        section: t,
        subsection: n,
        user: o,
        currentUser: i,
        displayProfile: l,
        guildId: a,
        channelId: c,
        onClose: s,
    } = e;
    return t === g.oh.ACTIVITY
        ? (0, r.jsx)(f.Z, {
              user: o,
              currentUser: i,
              displayProfile: l,
              guildId: a,
              onClose: s,
          })
        : t === g.oh.MUTUAL_FRIENDS
          ? (0, r.jsx)(m.Z, {
                user: o,
                guildId: a,
                channelId: c,
                onClose: s,
            })
          : t === g.oh.MUTUAL_GUILDS
            ? (0, r.jsx)(b.Z, {
                  user: o,
                  onClose: s,
              })
            : t === g.oh.BOT_DATA_ACCESS
              ? (0, r.jsx)(d.Z, { user: o })
              : t === g.oh.BOT_INFO
                ? (0, r.jsx)(u.Z, {
                      user: o,
                      currentUser: i,
                      displayProfile: l,
                      guildId: a,
                      subsection: n,
                      onClose: s,
                  })
                : (0, r.jsx)(p.Z, {
                      user: o,
                      currentUser: i,
                      displayProfile: l,
                      subsection: n,
                      onClose: s,
                  });
}
function v(e) {
    var t, n, d;
    let {
            user: u,
            currentUser: f,
            displayProfile: p,
            guildId: m,
            items: b,
            initialSection: v = g.oh.USER_INFO,
            initialSubsection: y,
            onClose: I,
        } = e,
        { trackUserProfileAction: O } = (0, s.KZ)(),
        Z = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: P, subsection: T }, C] = o.useState({
            section:
                null !=
                (d =
                    null ==
                    (t = b.find((e) => {
                        let { section: t } = e;
                        return t === v;
                    }))
                        ? void 0
                        : t.section)
                    ? d
                    : null == (n = b[0])
                      ? void 0
                      : n.section,
            subsection: y,
        });
    o.useEffect(() => {
        null == b.find((e) => e.section === P) &&
            C({
                section: b[0].section,
                subsection: void 0,
            });
    }, [b, P]);
    let A = o.useCallback(
        (e) => {
            O({
                action: "PRESS_SECTION",
                section: e,
            }),
                C({
                    section: e,
                    subsection: void 0,
                });
        },
        [O, C],
    );
    return Z
        ? (0, r.jsx)("div", {
              className: _.container,
              children: (0, r.jsxs)("div", {
                  className: x.empty,
                  children: [
                      (0, r.jsx)("div", { className: x.emptyIconStreamerMode }),
                      (0, r.jsx)("div", {
                          className: x.emptyText,
                          children: h.intl.string(h.t.Br1ls7),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)("div", {
              className: _.container,
              children: [
                  (0, r.jsx)(l.n, {
                      className: _.tabBar,
                      type: "top",
                      selectedItem: P,
                      onItemSelect: A,
                      children: b.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, r.jsx)(
                              l.n.Item,
                              {
                                  className: _.tabBarItem,
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
                  (0, r.jsx)(j, {
                      items: b,
                      section: P,
                      subsection: T,
                      user: u,
                      currentUser: f,
                      displayProfile: p,
                      guildId: m,
                      onClose: I,
                  }),
              ],
          });
}
