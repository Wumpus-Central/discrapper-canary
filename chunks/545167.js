"use strict";
n.d(t, { pz: () => l, vY: () => c });
var r = n(600975),
    i = n(945810),
    a = n(723702);
let s = (0, r.C)({
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
    return { autoTrackExposure: !0, disable: !(0, a.isDesktop)() };
}
function l(e) {
    return s.useExperiment(e, o());
}
let u = (0, i.mj)({
    name: "2026-02-bf-browser",
    kind: "user",
    defaultConfig: { allowEnhancedNav: !0 },
    variations: { 1: { allowEnhancedNav: !1 } },
});
function c(e) {
    if (!(0, a.isDesktop)()) return !1;
    let { allowEnhancedNav: t } = u.getConfig(e);
    return t;
}
