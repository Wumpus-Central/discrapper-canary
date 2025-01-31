n.d(t, { NM: () => a });
var i = n(162461);
let r = (0, n(818083).B)({
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
function a(e) {
    let { guildId: t, location: n, autoTrackExposure: a = !0 } = e,
        { enabled: s } = i.DG.getCurrentConfig({ location: n }, { autoTrackExposure: !1 });
    if (!s) return !1;
    let { enabled: o } = r.getCurrentConfig(
        {
            guildId: t,
            location: n
        },
        { autoTrackExposure: a }
    );
    return o;
}
