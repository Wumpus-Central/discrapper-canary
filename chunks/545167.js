i.d(e, { pz: () => l, vY: () => c });
var n = i(600975),
    r = i(945810),
    a = i(723702);
let s = (0, n.C)({
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
function l(t) {
    return s.useExperiment(t, { autoTrackExposure: !0, disable: !(0, a.isDesktop)() });
}
let o = (0, r.mj)({
    name: "2026-02-bf-browser",
    kind: "user",
    defaultConfig: { allowEnhancedNav: !0 },
    variations: { 1: { allowEnhancedNav: !1 } },
});
function c(t) {
    if (!(0, a.isDesktop)()) return !1;
    let { allowEnhancedNav: e } = o.getConfig(t);
    return e;
}
