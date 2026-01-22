n.d(t, { P: () => l });
let r = (0, n(945810).mj)({
    name: "2025-11-message-context-menu",
    kind: "user",
    defaultConfig: {
        variant: "control",
        forceIconsLeft: !1,
        reorderMessageMenuItems: !1,
    },
    variations: {
        0: {
            variant: "control",
            forceIconsLeft: !1,
            reorderMessageMenuItems: !1,
        },
        1: {
            variant: "icons_added",
            forceIconsLeft: !0,
            reorderMessageMenuItems: !1,
        },
        2: {
            variant: "items_reordered",
            forceIconsLeft: !0,
            reorderMessageMenuItems: !0,
        },
    },
});
function l(e) {
    let t = r.useConfig({ location: e });
    return {
        forceIconsLeft: t.forceIconsLeft,
        reorderMessageMenuItems: t.reorderMessageMenuItems,
    };
}
