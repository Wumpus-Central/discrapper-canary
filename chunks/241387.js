n.d(t, { A: () => T });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(922016),
    a = n(939249),
    o = n(866665),
    u = n(369606),
    c = n(696451),
    d = n(251812),
    h = n(297264),
    m = n(834730),
    f = n(821609),
    p = n(964486),
    g = n(85935),
    x = n(378570),
    A = n(309010),
    C = n(287809),
    E = n(174459),
    I = n(562153),
    y = n(313627),
    S = n(652215),
    v = n(746080),
    N = n(375708),
    _ = n(916388);
function j(e) {
    let { guildId: t, userId: n, onClose: i, leaderboardWinnerData: r } = e,
        a = (0, s.bG)([A.Ay], () => A.Ay.getChannelId(t)),
        o = (0, s.bG)([C.default], () => C.default.getUser(n)),
        c = I.Ay.useName(t, a, o),
        j = (0, y.Uq)(t, "LeaderboardWinnerBadgePopout"),
        b = r.winningStreak;
    return (
        (0, p.Ay)(() => {
            E.default.track(S.HAw.OPEN_POPOUT, { type: "Leaderboard Winner Badge Popout", guild_id: t, channel_id: a });
        }),
        (0, l.jsx)(g.Uq, {
            className: _.cc,
            children: (0, l.jsxs)("div", {
                className: _.jC,
                children: [
                    (0, l.jsxs)("div", {
                        className: _.rb,
                        children: [
                            (0, l.jsx)("div", {
                                className: _.zc,
                                children: (0, l.jsx)(u.TrophyIcon, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 40,
                                    height: 40,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(h.D, {
                                        variant: "heading-sm/normal",
                                        children: N.intl.format(N.t["LRh/OJ"], {
                                            username: c,
                                            statName: (0, d.K)(r?.winningStat).name,
                                        }),
                                    }),
                                    null != b && b > 1
                                        ? (0, l.jsx)(m.E, {
                                              variant: "text-sm/normal",
                                              className: _.AR,
                                              children: N.intl.format(N.t.ltaxJz, { streakCount: b }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    j &&
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: _.lI,
                            children: (0, l.jsx)(f.$, {
                                variant: "primary",
                                size: "sm",
                                text: N.intl.string(N.t.N8M39C),
                                fullWidth: !0,
                                onClick: function () {
                                    (i(),
                                        (0, x.vn)(t, v.VV.GUILD_SPACE, { source: "Leaderboard Winner Badge Popout" }));
                                },
                            }),
                        }),
                ],
            }),
        })
    );
}
var b = n(631949);
function T(e) {
    let { guildId: t, userId: n } = e,
        h = i.useRef(null),
        m = (0, s.bG)([c.Ay], () => c.Ay.getMember(t, n)?.gamingLeaderboardData);
    return null == m
        ? null
        : (0, l.jsx)(r.Y, {
              targetElementRef: h,
              animation: r.Y.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsx)(j, { guildId: t, userId: n, onClose: i, leaderboardWinnerData: m });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, l.jsx)(a.D, {
                      onClick: t,
                      tag: "span",
                      innerRef: h,
                      children: (0, l.jsx)(o.m, {
                          text: N.intl.formatToPlainString(N.t.So4gmj, { statName: (0, d.K)(m?.winningStat).name }),
                          children: (0, l.jsx)("div", {
                              className: b.M,
                              children: (0, l.jsx)(u.TrophyIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                              }),
                          }),
                      }),
                  });
              },
          });
}
