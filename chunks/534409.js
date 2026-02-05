"use strict";
n.d(t, { k5: () => a, lV: () => s, qK: () => i });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-04_desktop_refresh_fast_follows",
    label: "Desktop Refresh Fast Follows",
    defaultConfig: { largerGuildIcons: !1, darkerGuildListBackground: !1, distinctBorders: !1 },
    treatments: [
        {
            id: 1,
            label: "Larger Guild Icons",
            config: { largerGuildIcons: !0, darkerGuildListBackground: !1, distinctBorders: !1 },
        },
        {
            id: 2,
            label: "Darker Guild List Background",
            config: { largerGuildIcons: !1, darkerGuildListBackground: !0, distinctBorders: !1 },
        },
        {
            id: 3,
            label: "Larger Guild Icons and Darker Guild List Background",
            config: { largerGuildIcons: !0, darkerGuildListBackground: !0, distinctBorders: !1 },
        },
        {
            id: 4,
            label: "More Distinct Chassis Borders",
            config: { largerGuildIcons: !1, darkerGuildListBackground: !1, distinctBorders: !0 },
        },
        {
            id: 5,
            label: "Larger Guild Icons and More Distinct Chassis Borders",
            config: { largerGuildIcons: !0, darkerGuildListBackground: !1, distinctBorders: !0 },
        },
    ],
});
function i(e) {
    return !1;
}
function a(e) {
    return r.useExperiment({ location: e }).darkerGuildListBackground;
}
function s(e) {
    return r.useExperiment({ location: e }).distinctBorders;
}
