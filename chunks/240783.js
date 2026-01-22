t.d(l, { A: () => v }), t(896048);
var n = t(627968),
    i = t(64700),
    r = t(311907),
    s = t(397927),
    a = t(351906),
    o = t(183555),
    d = t(382120),
    c = t(128490),
    u = t(539548),
    f = t(412775),
    p = t(86404),
    m = t(738759),
    x = t(518477),
    A = t(985018),
    j = t(781425),
    h = t(368519);
function g(e) {
    let { section: l, user: t, currentUser: i, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === x.RP.ACTIVITY
        ? (0, n.jsx)(u.A, {
              user: t,
              currentUser: i,
              guildId: s,
              onClose: o,
          })
        : l === x.RP.MUTUAL_FRIENDS
          ? (0, n.jsx)(p.A, {
                user: t,
                guildId: s,
                channelId: a,
                onClose: o,
            })
          : l === x.RP.MUTUAL_GUILDS
            ? (0, n.jsx)(m.A, {
                  user: t,
                  onClose: o,
              })
            : l === x.RP.BOT_DATA_ACCESS
              ? (0, n.jsx)(d.A, { user: t })
              : l === x.RP.BOT_INFO
                ? (0, n.jsx)(c.A, {
                      user: t,
                      displayProfile: r,
                      guildId: s,
                      onClose: o,
                  })
                : (0, n.jsx)(f.A, {
                      user: t,
                      displayProfile: r,
                      onClose: o,
                  });
}
function v(e) {
    let {
            user: l,
            currentUser: t,
            displayProfile: d,
            guildId: c,
            items: u,
            initialSection: f = x.RP.USER_INFO,
            onClose: p,
        } = e,
        { trackUserProfileAction: m } = (0, o.NJ)(),
        v = (0, r.bG)([a.A], () => a.A.hidePersonalInformation),
        [b, I] = i.useState(() => {
            var e, l, t;
            return null !=
                (e =
                    null ==
                    (l = u.find((e) => {
                        let { section: l } = e;
                        return l === f;
                    }))
                        ? void 0
                        : l.section)
                ? e
                : null == (t = u[0])
                  ? void 0
                  : t.section;
        });
    i.useEffect(() => {
        null == u.find((e) => e.section === b) && I(u[0].section);
    }, [u, b]);
    let y = i.useCallback(
        (e) => {
            m({
                action: "PRESS_SECTION",
                section: e,
            }),
                I(e);
        },
        [m],
    );
    return v
        ? (0, n.jsx)("div", {
              className: h.kL,
              children: (0, n.jsxs)("div", {
                  className: j.Ie,
                  children: [
                      (0, n.jsx)("div", { className: j.hB }),
                      (0, n.jsx)("div", {
                          className: j.BI,
                          children: A.intl.string(A.t.Br1ls3),
                      }),
                  ],
              }),
          })
        : (0, n.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, n.jsx)(s.VQ0, {
                      className: h.$H,
                      type: "top",
                      selectedItem: b,
                      onItemSelect: y,
                      children: u.map((e) => {
                          let { section: l, text: t } = e;
                          return (0, n.jsx)(
                              s.VQ0.Item,
                              {
                                  className: h.YU,
                                  id: l,
                                  "aria-label": t,
                                  children: (0, n.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      children: t,
                                  }),
                              },
                              l,
                          );
                      }),
                  }),
                  (0, n.jsx)(g, {
                      items: u,
                      section: b,
                      user: l,
                      currentUser: t,
                      displayProfile: d,
                      guildId: c,
                      onClose: p,
                  }),
              ],
          });
}
