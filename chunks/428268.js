n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(692547),
    o = n(755721),
    s = n(481060),
    l = n(726542),
    c = n(231757),
    u = n(511010),
    d = n(553795),
    _ = n(979192),
    f = n(873128),
    p = n(463031),
    h = n(981631),
    m = n(388032),
    g = n(767826);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = function (e) {
    let { guildId: t, leaderboardId: E } = e,
        { leaderboardsDisabled: y } = (0, _.O)(t, E),
        v = (0, i.e7)([d.Z], () => d.Z.getAccount(null, h.ABu.RIOT_GAMES)),
        I = (0, i.e7)([d.Z], () => d.Z.getAccount(null, h.ABu.LEAGUE_OF_LEGENDS)),
        T = (0, f.Z)({
            guildId: t,
            leaderboardId: E
        }),
        S = E === p.z;
    if ((!S || (null != v && null != I)) && !y) return null;
    let A = l.Z.get(h.ABu.RIOT_GAMES),
        N = S && null == v && null == I,
        C = S && null != v && null == I,
        R = S && null == v && null != I,
        P = C || R;
    function w() {
        null != T &&
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        O(b({}, n), {
                            guildId: t,
                            leaderboard: T
                        })
                    );
            });
    }
    function D() {
        return N || P ? (0, c.Z)({ platformType: h.ABu.RIOT_GAMES }) : w();
    }
    function L() {
        return N ? m.intl.string(m.t.w6VSSE) : P ? m.intl.string(m.t.CHNBdn) : m.intl.string(m.t['0yRXHx']);
    }
    function x() {
        if (y) return null;
        let e = N
                ? (0, r.jsx)(s.d3s, { className: g.infoMessageIcon })
                : (0, r.jsx)(s.aNP, {
                      color: a.Z.colors.STATUS_WARNING,
                      className: g.infoMessageIcon
                  }),
            t = N ? m.intl.string(m.t['Ihg/Dg']) : m.intl.string(m.t['J8U+Iy']);
        return (0, r.jsxs)('div', {
            className: g.updateMessage,
            children: [
                e,
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: t
                })
            ]
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, { className: g.divider }),
            x(),
            (0, r.jsxs)(o.zx, {
                className: g.joinLeaderboardButton,
                innerClassName: g.joinLeaderboardButtonInner,
                onClick: D,
                children: [
                    S &&
                        !y &&
                        (0, r.jsx)('img', {
                            alt: 'Riot Games',
                            src: A.icon.whiteSVG,
                            className: g.riotIcon
                        }),
                    L()
                ]
            })
        ]
    });
};
