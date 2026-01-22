n.d(t, {
    J: () => l,
    p: () => o,
});
var r = n(600975),
    i = n(723702);
let a = (0, r.C)({
    kind: "user",
    id: "2025-08_back_forward",
    label: "Back Forward",
    defaultConfig: {
        backForwardButtons: !1,
        titlebarHoverHighlight: !1,
        titlebarIconSize: "refresh_sm",
        guildTitleIconSize: "xs",
        guildIconSize: "Mini",
    },
    treatments: [
        {
            id: 1,
            label: "Back/forward buttons - 18px titlebar icons",
            config: {
                backForwardButtons: !0,
                titlebarHoverHighlight: !0,
                titlebarIconSize: "sm",
                guildTitleIconSize: "sm",
                guildIconSize: "Smol",
            },
        },
        {
            id: 2,
            label: "Back/forward buttons - 20px titlebar icons",
            config: {
                backForwardButtons: !0,
                titlebarHoverHighlight: !0,
                titlebarIconSize: "refresh_sm",
                guildTitleIconSize: "refresh_sm",
                guildIconSize: "Mini",
            },
        },
    ],
});

function s() {
    return {
        autoTrackExposure: !0,
        disable: !(0, i.isDesktop)(),
    };
}

function o(e) {
    return a.useExperiment(e, s());
}

function l(e) {
    let { backForwardButtons: t } = a.getCurrentConfig(e, s());
    return t;
}
