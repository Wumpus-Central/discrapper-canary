n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    l = n(311907),
    r = n(761508),
    s = n(834730),
    o = n(351906),
    d = n(183555),
    c = n(382120),
    _ = n(128490),
    u = n(539548),
    p = n(412775),
    m = n(86404),
    f = n(738759),
    x = n(518477),
    g = n(985018),
    h = n(928666),
    A = n(551652);
function b(e) {
    let { section: t, user: n, currentUser: i, displayProfile: l, guildId: r, channelId: s, onClose: o } = e;
    return t === x.RP.ACTIVITY
        ? (0, a.jsx)(u.A, { user: n, currentUser: i, guildId: r, onClose: o })
        : t === x.RP.MUTUAL_FRIENDS
          ? (0, a.jsx)(m.A, { user: n, guildId: r, channelId: s, onClose: o })
          : t === x.RP.MUTUAL_GUILDS
            ? (0, a.jsx)(f.A, { user: n, onClose: o })
            : t === x.RP.BOT_DATA_ACCESS
              ? (0, a.jsx)(c.A, { user: n })
              : t === x.RP.BOT_INFO
                ? (0, a.jsx)(_.A, { user: n, displayProfile: l, guildId: r, onClose: o })
                : (0, a.jsx)(p.A, { user: n, displayProfile: l, onClose: o });
}
function v(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: c,
            guildId: _,
            items: u,
            initialSection: p = x.RP.USER_INFO,
            onClose: m,
        } = e,
        { trackUserProfileAction: f } = (0, d.NJ)(),
        v = (0, l.bG)([o.A], () => o.A.hidePersonalInformation),
        [I, j] = i.useState(
            () =>
                u.find((e) => {
                    let { section: t } = e;
                    return t === p;
                })?.section ?? u[0]?.section,
        );
    i.useEffect(() => {
        null == u.find((e) => e.section === I) && j(u[0].section);
    }, [u, I]);
    let y = i.useCallback(
        (e) => {
            f({ action: "PRESS_SECTION", section: e }), j(e);
        },
        [f],
    );
    return v
        ? (0, a.jsx)("div", {
              className: A.kL,
              children: (0, a.jsxs)("div", {
                  className: h.Ie,
                  children: [
                      (0, a.jsx)("div", { className: h.hB }),
                      (0, a.jsx)("div", { className: h.BI, children: g.intl.string(g.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, a.jsxs)("div", {
              className: A.kL,
              children: [
                  (0, a.jsx)(r.V, {
                      className: A.$H,
                      type: "top",
                      selectedItem: I,
                      onItemSelect: y,
                      children: u.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, a.jsx)(
                              r.V.Item,
                              {
                                  className: A.YU,
                                  id: t,
                                  "aria-label": n,
                                  children: (0, a.jsx)(s.E, { variant: "text-sm/normal", children: n }),
                              },
                              t,
                          );
                      }),
                  }),
                  (0, a.jsx)(b, {
                      items: u,
                      section: I,
                      user: t,
                      currentUser: n,
                      displayProfile: c,
                      guildId: _,
                      onClose: m,
                  }),
              ],
          });
}
