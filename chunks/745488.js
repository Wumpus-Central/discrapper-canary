n.d(t, {
    $: () => l,
    N: () => o,
});
var r = n(818083),
    i = n(154579),
    o = (function (e) {
        return (
            (e.NONE = "NONE"),
            (e.ALL_GUILDS = "ALL_GUILDS"),
            (e.SELECTED_GUILD = "SELECTED_GUILD"),
            (e.FRECENCY_GUILDS = "FRECENCY_GUILDS"),
            e
        );
    })({});
let a = {
        enabled: !1,
        type: "NONE",
    },
    s = (0, r.B)({
        kind: "user",
        id: "2025-08_search_quick_switcher_guild_members",
        label: "Search Quick Switcher Guild Members Experiment",
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: "Enables searching against all guild members by default",
                config: {
                    enabled: !0,
                    type: "ALL_GUILDS",
                },
            },
            {
                id: 2,
                label: "Enables searching against members of the selected guild by default",
                config: {
                    enabled: !0,
                    type: "SELECTED_GUILD",
                },
            },
            {
                id: 3,
                label: "Enables searching against guilds with the highest frecency by default",
                config: {
                    enabled: !0,
                    type: "FRECENCY_GUILDS",
                },
            },
        ],
    });
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.ro)({
            location: t,
            autoTrackExposure: n,
        }),
        { enabled: o, type: a } = s.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return {
        enabled: o,
        type: a,
    };
}
