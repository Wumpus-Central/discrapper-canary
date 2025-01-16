var i = r(200651);
r(192379);
var a = r(442837),
    s = r(692547),
    o = r(481060),
    l = r(726542),
    u = r(231757),
    c = r(511010),
    d = r(553795),
    f = r(979192),
    _ = r(873128),
    h = r(463031),
    p = r(981631),
    m = r(388032),
    g = r(804665);
function E(e) {
    let { guildId: n, leaderboardId: E } = e,
        { leaderboardsDisabled: v } = (0, f.O)(n, E),
        I = (0, a.e7)([d.Z], () => d.Z.getAccount(null, p.ABu.RIOT_GAMES)),
        T = (0, a.e7)([d.Z], () => d.Z.getAccount(null, p.ABu.LEAGUE_OF_LEGENDS)),
        b = (0, _.Z)({
            guildId: n,
            leaderboardId: E
        }),
        y = E === h.z;
    if ((!y || (null != I && null != T)) && !v) return null;
    let S = l.Z.get(p.ABu.RIOT_GAMES),
        A = y && null == I && null == T,
        N = y && null != I && null == T,
        C = y && null == I && null != T,
        R = N || C;
    function O() {
        if (null != b)
            (0, o.openModalLazy)(async () => {
                let { default: e } = await r.e('73217').then(r.bind(r, 139964));
                return (r) =>
                    (0, i.jsx)(e, {
                        ...r,
                        guildId: n,
                        leaderboard: b
                    });
            });
    }
    function D() {
        return A || R ? (0, u.Z)({ platformType: p.ABu.RIOT_GAMES }) : O();
    }
    function L() {
        return A ? m.intl.string(m.t.w6VSSE) : R ? m.intl.string(m.t.CHNBdn) : m.intl.string(m.t['0yRXHx']);
    }
    function x() {
        if (v) return null;
        let e = A
                ? (0, i.jsx)(o.CircleInformationIcon, { className: g.infoMessageIcon })
                : (0, i.jsx)(o.WarningIcon, {
                      color: s.Z.colors.STATUS_WARNING,
                      className: g.infoMessageIcon
                  }),
            n = A ? m.intl.string(m.t['Ihg/Dg']) : m.intl.string(m.t['J8U+Iy']);
        return (0, i.jsxs)('div', {
            className: g.updateMessage,
            children: [
                e,
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: n
                })
            ]
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, { className: g.divider }),
            x(),
            (0, i.jsxs)(o.Button, {
                className: g.joinLeaderboardButton,
                innerClassName: g.joinLeaderboardButtonInner,
                onClick: D,
                children: [
                    y &&
                        !v &&
                        (0, i.jsx)('img', {
                            alt: 'Riot Games',
                            src: S.icon.whiteSVG,
                            className: g.riotIcon
                        }),
                    L()
                ]
            })
        ]
    });
}
n.Z = E;
