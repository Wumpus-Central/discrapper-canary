n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(351906),
    d = n(183555),
    o = n(382120),
    c = n(128490),
    u = n(539548),
    A = n(412775),
    x = n(86404),
    m = n(738759),
    p = n(518477),
    h = n(985018),
    f = n(781425),
    g = n(368519);
function I(e) {
    let { section: t, user: n, currentUser: s, displayProfile: l, guildId: a, channelId: r, onClose: d } = e;
    return t === p.RP.ACTIVITY
        ? (0, i.jsx)(u.A, { user: n, currentUser: s, guildId: a, onClose: d })
        : t === p.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(x.A, { user: n, guildId: a, channelId: r, onClose: d })
          : t === p.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(m.A, { user: n, onClose: d })
            : t === p.RP.BOT_DATA_ACCESS
              ? (0, i.jsx)(o.A, { user: n })
              : t === p.RP.BOT_INFO
                ? (0, i.jsx)(c.A, { user: n, displayProfile: l, guildId: a, onClose: d })
                : (0, i.jsx)(A.A, { user: n, displayProfile: l, onClose: d });
}
function j(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: o,
            guildId: c,
            items: u,
            initialSection: A = p.RP.USER_INFO,
            onClose: x,
        } = e,
        { trackUserProfileAction: m } = (0, d.NJ)(),
        j = (0, l.bG)([r.A], () => r.A.hidePersonalInformation),
        [_, N] = s.useState(
            () =>
                u.find((e) => {
                    let { section: t } = e;
                    return t === A;
                })?.section ?? u[0]?.section,
        );
    s.useEffect(() => {
        null == u.find((e) => e.section === _) && N(u[0].section);
    }, [u, _]);
    let v = s.useCallback(
        (e) => {
            m({ action: "PRESS_SECTION", section: e }), N(e);
        },
        [m],
    );
    return j
        ? (0, i.jsx)("div", {
              className: g.kL,
              children: (0, i.jsxs)("div", {
                  className: f.Ie,
                  children: [
                      (0, i.jsx)("div", { className: f.hB }),
                      (0, i.jsx)("div", { className: f.BI, children: h.intl.string(h.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: g.kL,
              children: [
                  (0, i.jsx)(a.VQ0, {
                      className: g.$H,
                      type: "top",
                      selectedItem: _,
                      onItemSelect: v,
                      children: u.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, i.jsx)(
                              a.VQ0.Item,
                              {
                                  className: g.YU,
                                  id: t,
                                  "aria-label": n,
                                  children: (0, i.jsx)(a.Text, { variant: "text-sm/normal", children: n }),
                              },
                              t,
                          );
                      }),
                  }),
                  (0, i.jsx)(I, {
                      items: u,
                      section: _,
                      user: t,
                      currentUser: n,
                      displayProfile: o,
                      guildId: c,
                      onClose: x,
                  }),
              ],
          });
}
