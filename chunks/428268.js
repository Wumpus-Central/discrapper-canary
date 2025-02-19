c.d(e, { Z: () => j });
var d = c(200651);
c(192379);
var a = c(442837),
    s = c(692547),
    n = c(481060),
    o = c(726542),
    f = c(231757),
    p = c(511010),
    i = c(553795),
    r = c(979192),
    b = c(873128),
    u = c(463031),
    l = c(981631),
    m = c(388032),
    g = c(486193);
let j = function (t) {
    let { guildId: e, leaderboardId: j } = t,
        { leaderboardsDisabled: h } = (0, r.O)(e, j),
        _ = (0, a.e7)([i.Z], () => i.Z.getAccount(null, l.ABu.RIOT_GAMES)),
        v = (0, a.e7)([i.Z], () => i.Z.getAccount(null, l.ABu.LEAGUE_OF_LEGENDS)),
        x = (0, b.Z)({
            guildId: e,
            leaderboardId: j
        }),
        O = j === u.z;
    if ((!O || (null != _ && null != v)) && !h) return null;
    let y = o.Z.get(l.ABu.RIOT_GAMES),
        N = O && null == _ && null == v,
        S = O && null != _ && null == v,
        Z = O && null == _ && null != v,
        P = S || Z;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(p.Z, { className: g.divider }),
            (function () {
                if (h) return null;
                let t = N
                        ? (0, d.jsx)(n.d3s, { className: g.infoMessageIcon })
                        : (0, d.jsx)(n.aNP, {
                              color: s.Z.colors.STATUS_WARNING,
                              className: g.infoMessageIcon
                          }),
                    e = N ? m.NW.string(m.t['Ihg/Dg']) : m.NW.string(m.t['J8U+Iy']);
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
                    return N || P
                        ? (0, f.Z)({ platformType: l.ABu.RIOT_GAMES })
                        : void (
                              null != x &&
                              (0, n.ZDy)(async () => {
                                  let { default: t } = await c.e('73217').then(c.bind(c, 139964));
                                  return (c) => {
                                      var a, s;
                                      return (0, d.jsx)(
                                          t,
                                          ((a = (function (t) {
                                              for (var e = 1; e < arguments.length; e++) {
                                                  var c = null != arguments[e] ? arguments[e] : {},
                                                      d = Object.keys(c);
                                                  'function' == typeof Object.getOwnPropertySymbols &&
                                                      (d = d.concat(
                                                          Object.getOwnPropertySymbols(c).filter(function (t) {
                                                              return Object.getOwnPropertyDescriptor(c, t).enumerable;
                                                          })
                                                      )),
                                                      d.forEach(function (e) {
                                                          var d;
                                                          (d = c[e]),
                                                              e in t
                                                                  ? Object.defineProperty(t, e, {
                                                                        value: d,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (t[e] = d);
                                                      });
                                              }
                                              return t;
                                          })({}, c)),
                                          (s = s =
                                              {
                                                  guildId: e,
                                                  leaderboard: x
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                                              : (function (t, e) {
                                                    var c = Object.keys(t);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var d = Object.getOwnPropertySymbols(t);
                                                        c.push.apply(c, d);
                                                    }
                                                    return c;
                                                })(Object(s)).forEach(function (t) {
                                                    Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(s, t));
                                                }),
                                          a)
                                      );
                                  };
                              })
                          );
                },
                children: [
                    O &&
                        !h &&
                        (0, d.jsx)('img', {
                            alt: 'Riot Games',
                            src: y.icon.whiteSVG,
                            className: g.riotIcon
                        }),
                    N ? m.NW.string(m.t.w6VSSE) : P ? m.NW.string(m.t.CHNBdn) : m.NW.string(m.t['0yRXHx'])
                ]
            })
        ]
    });
};
