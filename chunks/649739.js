r.d(n, {
    Hr: function () {
        return a;
    },
    Ku: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-01_voice_user_game_activity',
    label: 'Voice User Game Activity',
    defaultConfig: { showGameIcon: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show game icon next to the Voice User in VC',
            config: { showGameIcon: !0 }
        }
    ]
});
function a(e, n) {
    let { showGameIcon: r } = i.useExperiment({ location: e }, { autoTrackExposure: n });
    return r;
}
function o(e, n) {
    let { showGameIcon: r } = i.getCurrentConfig({ location: e }, { autoTrackExposure: n });
    return r;
}
n.ZP = i;
