a.d(t, { A: () => v });
var n = a(627968),
    i = a(64700),
    l = a(311907),
    r = a(761508),
    d = a(834730),
    o = a(351906),
    s = a(183555),
    c = a(382120),
    _ = a(128490),
    u = a(539548),
    m = a(412775),
    p = a(86404),
    g = a(738759),
    b = a(518477),
    f = a(985018),
    x = a(2074),
    h = a(837604);
function A(e) {
    let { section: t, user: a, currentUser: i, displayProfile: l, guildId: r, channelId: d, onClose: o } = e;
    return t === b.RP.ACTIVITY
        ? (0, n.jsx)(u.A, { user: a, currentUser: i, guildId: r, onClose: o })
        : t === b.RP.MUTUAL_FRIENDS
          ? (0, n.jsx)(p.A, { user: a, guildId: r, channelId: d, onClose: o })
          : t === b.RP.MUTUAL_GUILDS
            ? (0, n.jsx)(g.A, { user: a, onClose: o })
            : t === b.RP.BOT_DATA_ACCESS
              ? (0, n.jsx)(c.A, { user: a })
              : t === b.RP.BOT_INFO
                ? (0, n.jsx)(_.A, { user: a, displayProfile: l, guildId: r, onClose: o })
                : (0, n.jsx)(m.A, { user: a, displayProfile: l, onClose: o });
}
function v(e) {
    let {
            user: t,
            currentUser: a,
            displayProfile: c,
            guildId: _,
            items: u,
            initialSection: m = b.RP.USER_INFO,
            onClose: p,
        } = e,
        { trackUserProfileAction: g } = (0, s.NJ)(),
        v = (0, l.bG)([o.A], () => o.A.hidePersonalInformation),
        [I, y] = i.useState(
            () =>
                u.find((e) => {
                    let { section: t } = e;
                    return t === m;
                })?.section ?? u[0]?.section,
        );
    i.useEffect(() => {
        null == u.find((e) => e.section === I) && y(u[0].section);
    }, [u, I]);
    let C = i.useCallback(
        (e) => {
            g({ action: "PRESS_SECTION", section: e }), y(e);
        },
        [g],
    );
    return v
        ? (0, n.jsx)("div", {
              className: h.kL,
              children: (0, n.jsxs)("div", {
                  className: x.Ie,
                  children: [
                      (0, n.jsx)("div", { className: x.hB }),
                      (0, n.jsx)("div", { className: x.BI, children: f.intl.string(f.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, n.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, n.jsx)(r.V, {
                      className: h.$H,
                      type: "top",
                      selectedItem: I,
                      onItemSelect: C,
                      children: u.map((e) => {
                          let { section: t, text: a } = e;
                          return (0, n.jsx)(
                              r.V.Item,
                              {
                                  className: h.YU,
                                  id: t,
                                  "aria-label": a,
                                  children: (0, n.jsx)(d.E, { variant: "text-sm/normal", children: a }),
                              },
                              t,
                          );
                      }),
                  }),
                  (0, n.jsx)(A, {
                      items: u,
                      section: I,
                      user: t,
                      currentUser: a,
                      displayProfile: c,
                      guildId: _,
                      onClose: p,
                  }),
              ],
          });
}
