n.d(t, { tm: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    id: "2025-09_you_bar",
    label: "You Bar",
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    kind: "user",
    defaultConfig: {
        enabled: !1,
        backButtonBadge: !1,
        animateBetweenServers: !1,
    },
    treatments: [
        {
            id: 1,
            label: "You Bar",
            config: {
                enabled: !0,
                backButtonBadge: !1,
                animateBetweenServers: !1,
            },
        },
        {
            id: 2,
            label: "You Bar with badged back button",
            config: {
                enabled: !0,
                backButtonBadge: !0,
                animateBetweenServers: !1,
            },
        },
        {
            id: 3,
            label: "You Bar with badged back button and animate between servers",
            config: {
                enabled: !0,
                backButtonBadge: !0,
                animateBetweenServers: !0,
            },
        },
    ],
});
