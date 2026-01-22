n.d(t, { t: () => a });
var r = n(600975),
    i = n(723702);
let l = (0, r.C)({
    kind: "user",
    id: "2025-03_fast_travel",
    label: "Fast Travel",
    defaultConfig: {
        backForwardButtons: !1,
        titlebarFastTravel: !1,
        quickSwitcherInsteadOfTitle: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Back/Forward Buttons only",
            config: {
                backForwardButtons: !0,
                titlebarFastTravel: !1,
                quickSwitcherInsteadOfTitle: !1,
            },
        },
        {
            id: 2,
            label: "back/forward buttons and quick switcher on title",
            config: {
                backForwardButtons: !0,
                titlebarFastTravel: !0,
                quickSwitcherInsteadOfTitle: !1,
            },
        },
        {
            id: 3,
            label: "back/forward buttons and quick switcher INSTEAD of title",
            config: {
                backForwardButtons: !0,
                titlebarFastTravel: !0,
                quickSwitcherInsteadOfTitle: !0,
            },
        },
    ],
});
function a(e) {
    return l.useExperiment(e, {
        autoTrackExposure: !0,
        disable: !(0, i.isDesktop)(),
    });
}
