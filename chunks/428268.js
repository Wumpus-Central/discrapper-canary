n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(726542),
    l = n(231757),
    u = n(511010),
    c = n(553795),
    d = n(979192),
    f = n(873128),
    _ = n(463031),
    p = n(981631),
    h = n(388032),
    m = n(804665);
let g = function (e) {
    let { guildId: t, leaderboardId: g } = e,
        { leaderboardsDisabled: E } = (0, d.O)(t, g),
        v = (0, r.e7)([c.Z], () => c.Z.getAccount(null, p.ABu.RIOT_GAMES)),
        y = (0, r.e7)([c.Z], () => c.Z.getAccount(null, p.ABu.LEAGUE_OF_LEGENDS)),
        I = (0, f.Z)({
            guildId: t,
            leaderboardId: g
        }),
        T = g === _.z;
    if ((!T || (null != v && null != y)) && !E) return null;
    let b = o.Z.get(p.ABu.RIOT_GAMES),
        S = T && null == v && null == y,
        A = T && null != v && null == y,
        N = T && null == v && null != y,
        C = A || N;
    function R() {
        null != I &&
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t,
                        leaderboard: I
                    });
            });
    }
    function O() {
        return S || C ? (0, l.Z)({ platformType: p.ABu.RIOT_GAMES }) : R();
    }
    function D() {
        return S ? h.intl.string(h.t.w6VSSE) : C ? h.intl.string(h.t.CHNBdn) : h.intl.string(h.t['0yRXHx']);
    }
    function x() {
        if (E) return null;
        let e = S
                ? (0, i.jsx)(s.d3s, { className: m.infoMessageIcon })
                : (0, i.jsx)(s.aNP, {
                      color: a.Z.colors.STATUS_WARNING,
                      className: m.infoMessageIcon
                  }),
            t = S ? h.intl.string(h.t['Ihg/Dg']) : h.intl.string(h.t['J8U+Iy']);
        return (0, i.jsxs)('div', {
            className: m.updateMessage,
            children: [
                e,
                (0, i.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: t
                })
            ]
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Z, { className: m.divider }),
            x(),
            (0, i.jsxs)(s.zxk, {
                className: m.joinLeaderboardButton,
                innerClassName: m.joinLeaderboardButtonInner,
                onClick: O,
                children: [
                    T &&
                        !E &&
                        (0, i.jsx)('img', {
                            alt: 'Riot Games',
                            src: b.icon.whiteSVG,
                            className: m.riotIcon
                        }),
                    D()
                ]
            })
        ]
    });
};
