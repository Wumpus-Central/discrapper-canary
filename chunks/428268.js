a.d(e, { Z: () => j });
var c = a(200651);
a(192379);
var d = a(442837),
    s = a(692547),
    n = a(481060),
    f = a(726542),
    i = a(231757),
    o = a(511010),
    p = a(553795),
    r = a(979192),
    l = a(873128),
    b = a(463031),
    u = a(981631),
    m = a(388032),
    g = a(767826);
let j = function (t) {
    let { guildId: e, leaderboardId: j } = t,
        { leaderboardsDisabled: h } = (0, r.O)(e, j),
        y = (0, d.e7)([p.Z], () => p.Z.getAccount(null, u.ABu.RIOT_GAMES)),
        _ = (0, d.e7)([p.Z], () => p.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS)),
        B = (0, l.Z)({
            guildId: e,
            leaderboardId: j
        }),
        x = j === b.z;
    if ((!x || (null != y && null != _)) && !h) return null;
    let v = f.Z.get(u.ABu.RIOT_GAMES),
        O = x && null == y && null == _,
        N = x && null != y && null == _,
        S = x && null == y && null != _,
        Z = N || S;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(o.Z, { className: g.divider }),
            (function () {
                if (h) return null;
                let t = O
                        ? (0, c.jsx)(n.d3s, { className: g.infoMessageIcon })
                        : (0, c.jsx)(n.aNP, {
                              color: s.Z.colors.STATUS_WARNING,
                              className: g.infoMessageIcon
                          }),
                    e = O ? m.NW.string(m.t['Ihg/Dg']) : m.NW.string(m.t['J8U+Iy']);
                return (0, c.jsxs)('div', {
                    className: g.updateMessage,
                    children: [
                        t,
                        (0, c.jsx)(n.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: e
                        })
                    ]
                });
            })(),
            (0, c.jsxs)(n.zxk, {
                className: g.joinLeaderboardButton,
                innerClassName: g.joinLeaderboardButtonInner,
                onClick: function () {
                    return O || Z
                        ? (0, i.Z)({ platformType: u.ABu.RIOT_GAMES })
                        : void (
                              null != B &&
                              (0, n.ZDy)(async () => {
                                  let { default: t } = await a.e('73217').then(a.bind(a, 139964));
                                  return (a) => {
                                      var d, s;
                                      return (0, c.jsx)(
                                          t,
                                          ((d = (function (t) {
                                              for (var e = 1; e < arguments.length; e++) {
                                                  var a = null != arguments[e] ? arguments[e] : {},
                                                      c = Object.keys(a);
                                                  'function' == typeof Object.getOwnPropertySymbols &&
                                                      (c = c.concat(
                                                          Object.getOwnPropertySymbols(a).filter(function (t) {
                                                              return Object.getOwnPropertyDescriptor(a, t).enumerable;
                                                          })
                                                      )),
                                                      c.forEach(function (e) {
                                                          var c;
                                                          (c = a[e]),
                                                              e in t
                                                                  ? Object.defineProperty(t, e, {
                                                                        value: c,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (t[e] = c);
                                                      });
                                              }
                                              return t;
                                          })({}, a)),
                                          (s = s =
                                              {
                                                  guildId: e,
                                                  leaderboard: B
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(s))
                                              : (function (t, e) {
                                                    var a = Object.keys(t);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var c = Object.getOwnPropertySymbols(t);
                                                        a.push.apply(a, c);
                                                    }
                                                    return a;
                                                })(Object(s)).forEach(function (t) {
                                                    Object.defineProperty(d, t, Object.getOwnPropertyDescriptor(s, t));
                                                }),
                                          d)
                                      );
                                  };
                              })
                          );
                },
                children: [
                    x &&
                        !h &&
                        (0, c.jsx)('img', {
                            alt: 'Riot Games',
                            src: v.icon.whiteSVG,
                            className: g.riotIcon
                        }),
                    O ? m.NW.string(m.t.w6VSSE) : Z ? m.NW.string(m.t.CHNBdn) : m.NW.string(m.t['0yRXHx'])
                ]
            })
        ]
    });
};
