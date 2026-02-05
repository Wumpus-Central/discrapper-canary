n.d(t, { t: () => l });
var i = n(600975),
    r = n(723702);
let a = (0, i.C)({
    kind: "user",
    id: "2025-03_fast_travel",
    label: "Fast Travel",
    defaultConfig: { backForwardButtons: !1, titlebarFastTravel: !1, quickSwitcherInsteadOfTitle: !1 },
    treatments: [
        {
            id: 1,
            label: "Back/Forward Buttons only",
            config: { backForwardButtons: !0, titlebarFastTravel: !1, quickSwitcherInsteadOfTitle: !1 },
        },
        {
            id: 2,
            label: "back/forward buttons and quick switcher on title",
            config: { backForwardButtons: !0, titlebarFastTravel: !0, quickSwitcherInsteadOfTitle: !1 },
        },
        {
            id: 3,
            label: "back/forward buttons and quick switcher INSTEAD of title",
            config: { backForwardButtons: !0, titlebarFastTravel: !0, quickSwitcherInsteadOfTitle: !0 },
        },
    ],
});
function l(e) {
    return a.useExperiment(e, { autoTrackExposure: !0, disable: !(0, r.isDesktop)() });
}
