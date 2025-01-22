var i = r(200651);
r(192379);
var a = r(442837),
    o = r(692547),
    s = r(481060),
    l = r(726542),
    u = r(231757),
    c = r(511010),
    d = r(553795),
    f = r(979192),
    p = r(873128),
    h = r(463031),
    _ = r(981631),
    m = r(388032),
    g = r(804665);
function E(e) {
    let { guildId: n, leaderboardId: E } = e,
        { leaderboardsDisabled: v } = (0, f.O)(n, E),
        y = (0, a.e7)([d.Z], () => d.Z.getAccount(null, _.ABu.RIOT_GAMES)),
        b = (0, a.e7)([d.Z], () => d.Z.getAccount(null, _.ABu.LEAGUE_OF_LEGENDS)),
        I = (0, p.Z)({
            guildId: n,
            leaderboardId: E
        }),
        T = E === h.z;
    if ((!T || (null != y && null != b)) && !v) return null;
    let S = l.Z.get(_.ABu.RIOT_GAMES),
        A = T && null == y && null == b,
        C = T && null != y && null == b,
        N = T && null == y && null != b,
        R = C || N;
    function O() {
        if (null != I)
            (0, s.openModalLazy)(async () => {
                let { default: e } = await r.e('73217').then(r.bind(r, 139964));
                return (r) =>
                    (0, i.jsx)(e, {
                        ...r,
                        guildId: n,
                        leaderboard: I
                    });
            });
    }
    function D() {
        return A || R ? (0, u.Z)({ platformType: _.ABu.RIOT_GAMES }) : O();
    }
    function x() {
        return A ? m.intl.string(m.t.w6VSSE) : R ? m.intl.string(m.t.CHNBdn) : m.intl.string(m.t['0yRXHx']);
    }
    function L() {
        if (v) return null;
        let e = A
                ? (0, i.jsx)(s.CircleInformationIcon, { className: g.infoMessageIcon })
                : (0, i.jsx)(s.WarningIcon, {
                      color: o.Z.colors.STATUS_WARNING,
                      className: g.infoMessageIcon
                  }),
            n = A ? m.intl.string(m.t['Ihg/Dg']) : m.intl.string(m.t['J8U+Iy']);
        return (0, i.jsxs)('div', {
            className: g.updateMessage,
            children: [
                e,
                (0, i.jsx)(s.Text, {
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
            L(),
            (0, i.jsxs)(s.Button, {
                className: g.joinLeaderboardButton,
                innerClassName: g.joinLeaderboardButtonInner,
                onClick: D,
                children: [
                    T &&
                        !v &&
                        (0, i.jsx)('img', {
                            alt: 'Riot Games',
                            src: S.icon.whiteSVG,
                            className: g.riotIcon
                        }),
                    x()
                ]
            })
        ]
    });
}
n.Z = E;
