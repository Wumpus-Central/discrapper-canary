r.d(n, {
    NM: function () {
        return o;
    }
});
var i = r(162461);
let a = (0, r(818083).B)({
    kind: 'guild',
    id: '2024-09_league_of_legends_leaderboard',
    label: 'League of Legends Leaderboard',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Leaderboard',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { guildId: n, location: r, autoTrackExposure: o = !0 } = e,
        { enabled: s } = i.DG.getCurrentConfig({ location: r }, { autoTrackExposure: !1 });
    if (!s) return !1;
    let { enabled: l } = a.getCurrentConfig(
        {
            guildId: n,
            location: r
        },
        { autoTrackExposure: o }
    );
    return l;
}
