n.d(t, { d: () => i });
let r = (0, n(427164).le)({
    name: "2025-11-message-context-menu-mana-design",
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
function i(e) {
    let t = r.useConfig({ location: e });
    return {
        forceIconsLeft: t.forceIconsLeft,
        reorderMessageMenuItems: t.reorderMessageMenuItems,
    };
}
