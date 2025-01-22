r.d(n, {
    k: function () {
        return o;
    },
    v: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2023-11_soundboard_recently_heard_frequently_played',
    label: 'Soundboard Recently Heard & Frequently Played',
    defaultConfig: {
        canSeeRecentlyHeard: !1,
        canSeeFrequentlyPlayed: !1
    },
    treatments: [
        {
            id: 1,
            label: 'User can see Recently Heard soundboard section',
            config: {
                canSeeRecentlyHeard: !0,
                canSeeFrequentlyPlayed: !1
            }
        },
        {
            id: 2,
            label: 'User can see Frequently Played soundboard section',
            config: {
                canSeeRecentlyHeard: !1,
                canSeeFrequentlyPlayed: !0
            }
        },
        {
            id: 3,
            label: 'User can see Frequently Played & Recently Heard soundboard sections',
            config: {
                canSeeRecentlyHeard: !0,
                canSeeFrequentlyPlayed: !0
            }
        }
    ]
});
function a(e) {
    let { location: n, autoTrackExposure: r } = e;
    return i.getCurrentConfig({ location: n }, { autoTrackExposure: r });
}
function o(e) {
    let { autoTrackExposure: n, location: r } = e;
    return i.useExperiment({ location: r }, { autoTrackExposure: n });
}
