n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(692547),
    a = n(481060),
    s = n(726542),
    l = n(231757),
    c = n(511010),
    u = n(553795),
    d = n(979192),
    f = n(873128),
    _ = n(463031),
    p = n(981631),
    h = n(388032),
    m = n(404633);
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = function (e) {
    let { guildId: t, leaderboardId: g } = e,
        { leaderboardsDisabled: b } = (0, d.O)(t, g),
        v = (0, i.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.RIOT_GAMES)),
        O = (0, i.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.LEAGUE_OF_LEGENDS)),
        I = (0, f.Z)({
            guildId: t,
            leaderboardId: g
        }),
        S = g === _.z;
    if ((!S || (null != v && null != O)) && !b) return null;
    let T = s.Z.get(p.ABu.RIOT_GAMES),
        N = S && null == v && null == O,
        A = S && null != v && null == O,
        C = S && null == v && null != O,
        R = A || C;
    function P() {
        null != I &&
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        y(E({}, n), {
                            guildId: t,
                            leaderboard: I
                        })
                    );
            });
    }
    function w() {
        return N || R ? (0, l.Z)({ platformType: p.ABu.RIOT_GAMES }) : P();
    }
    function D() {
        return N ? h.NW.string(h.t.w6VSSE) : R ? h.NW.string(h.t.CHNBdn) : h.NW.string(h.t['0yRXHx']);
    }
    function L() {
        if (b) return null;
        let e = N
                ? (0, r.jsx)(a.d3s, { className: m.infoMessageIcon })
                : (0, r.jsx)(a.aNP, {
                      color: o.Z.colors.STATUS_WARNING,
                      className: m.infoMessageIcon
                  }),
            t = N ? h.NW.string(h.t['Ihg/Dg']) : h.NW.string(h.t['J8U+Iy']);
        return (0, r.jsxs)('div', {
            className: m.updateMessage,
            children: [
                e,
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: t
                })
            ]
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Z, { className: m.divider }),
            L(),
            (0, r.jsxs)(a.zxk, {
                className: m.joinLeaderboardButton,
                innerClassName: m.joinLeaderboardButtonInner,
                onClick: w,
                children: [
                    S &&
                        !b &&
                        (0, r.jsx)('img', {
                            alt: 'Riot Games',
                            src: T.icon.whiteSVG,
                            className: m.riotIcon
                        }),
                    D()
                ]
            })
        ]
    });
};
