n.d(t, {
    t: () => s,
    v: () => l,
});
var r = n(818083),
    i = n(358085);
let a = (0, r.B)({
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
