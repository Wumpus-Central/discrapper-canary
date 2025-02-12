c.d(e, { Z: () => h });
var d = c(200651);
c(192379);
var a = c(442837),
    s = c(692547),
    n = c(481060),
    o = c(726542),
    f = c(231757),
    i = c(511010),
    p = c(553795),
    r = c(979192),
    b = c(873128),
    u = c(463031),
    l = c(981631),
    m = c(388032),
    g = c(425544);
let h = function (t) {
    let { guildId: e, leaderboardId: h } = t,
        { leaderboardsDisabled: j } = (0, r.O)(e, h),
        _ = (0, a.e7)([p.Z], () => p.Z.getAccount(null, l.ABu.RIOT_GAMES)),
        v = (0, a.e7)([p.Z], () => p.Z.getAccount(null, l.ABu.LEAGUE_OF_LEGENDS)),
        x = (0, b.Z)({
            guildId: e,
            leaderboardId: h
        }),
        N = h === u.z;
    if ((!N || (null != _ && null != v)) && !j) return null;
    let Z = o.Z.get(l.ABu.RIOT_GAMES),
        T = N && null == _ && null == v,
        E = N && null != _ && null == v,
        I = N && null == _ && null != v,
        S = E || I;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(i.Z, { className: g.divider }),
            (function () {
                if (j) return null;
                let t = T
                        ? (0, d.jsx)(n.d3s, { className: g.infoMessageIcon })
                        : (0, d.jsx)(n.aNP, {
                              color: s.Z.colors.STATUS_WARNING,
                              className: g.infoMessageIcon
                          }),
                    e = T ? m.intl.string(m.t['Ihg/Dg']) : m.intl.string(m.t['J8U+Iy']);
                return (0, d.jsxs)('div', {
                    className: g.updateMessage,
                    children: [
                        t,
                        (0, d.jsx)(n.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: e
                        })
                    ]
                });
            })(),
            (0, d.jsxs)(n.zxk, {
                className: g.joinLeaderboardButton,
                innerClassName: g.joinLeaderboardButtonInner,
                onClick: function () {
                    return T || S
                        ? (0, f.Z)({ platformType: l.ABu.RIOT_GAMES })
                        : void (
                              null != x &&
                              (0, n.ZDy)(async () => {
                                  let { default: t } = await c.e('73217').then(c.bind(c, 139964));
                                  return (c) =>
                                      (0, d.jsx)(t, {
                                          ...c,
                                          guildId: e,
                                          leaderboard: x
                                      });
                              })
                          );
                },
                children: [
                    N &&
                        !j &&
                        (0, d.jsx)('img', {
                            alt: 'Riot Games',
                            src: Z.icon.whiteSVG,
                            className: g.riotIcon
                        }),
                    T ? m.intl.string(m.t.w6VSSE) : S ? m.intl.string(m.t.CHNBdn) : m.intl.string(m.t['0yRXHx'])
                ]
            })
        ]
    });
};
