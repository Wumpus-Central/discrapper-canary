n.d(t, { Kf: () => a });
var i = n(600975),
    r = n(688151);
let a = (0, i.C)({
    id: "2025-09_you_bar",
    label: "You Bar",
    commonTriggerPoint: r.$G.CONNECTION_OPEN,
    kind: "user",
    defaultConfig: { enabled: !1, backButtonBadge: !1, animateBetweenServers: !1, profileButton: !1 },
    treatments: [
        {
            id: 1,
            label: "You Bar no profile button",
            config: { enabled: !0, backButtonBadge: !0, animateBetweenServers: !1, profileButton: !1 },
        },
        {
            id: 2,
            label: "You Bar profile button",
            config: { enabled: !0, backButtonBadge: !0, animateBetweenServers: !1, profileButton: !0 },
        },
        {
            id: 3,
            label: "You Bar with badged back button and animate between servers",
            config: { enabled: !0, backButtonBadge: !0, animateBetweenServers: !0, profileButton: !1 },
        },
    ],
});
