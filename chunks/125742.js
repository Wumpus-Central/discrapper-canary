n.d(t, { u: () => i });
let r = (0, n(427164).le)({
    name: "2025-12-user-profile-show-recommendations-in-breadcrumbs",
    kind: "user",
    defaultConfig: {
        enabledInPopout: !1,
        enabledInSidebar: !1,
    },
    variations: {
        0: {
            enabledInPopout: !1,
            enabledInSidebar: !1,
        },
        1: {
            enabledInPopout: !0,
            enabledInSidebar: !0,
        },
        2: {
            enabledInPopout: !0,
            enabledInSidebar: !1,
        },
        3: {
            enabledInPopout: !1,
            enabledInSidebar: !0,
        },
    },
});
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t });
}
