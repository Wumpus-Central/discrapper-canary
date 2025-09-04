n.d(t, {
    T: () => s,
    v: () => l,
});
var r = n(818083),
    i = n(358085);
let a = (0, r.B)({
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
function o() {
    return {
        autoTrackExposure: !0,
        disable: !(0, i.isDesktop)(),
    };
}
function s(e) {
    return a.useExperiment(e, o());
}
function l(e) {
    let { backForwardButtons: t } = a.getCurrentConfig(e, o());
    return t;
}
