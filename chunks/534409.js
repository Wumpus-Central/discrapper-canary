let i = (0, n(945810).mj)({
    kind: "user",
    name: "2025-04-desktop-refresh-fast-follows",
    defaultConfig: { largerGuildIcons: !1, darkerGuildListBackground: !1, distinctBorders: !1 },
    variations: {
        1: { largerGuildIcons: !0, darkerGuildListBackground: !1, distinctBorders: !1 },
        2: { largerGuildIcons: !1, darkerGuildListBackground: !0, distinctBorders: !1 },
        3: { largerGuildIcons: !0, darkerGuildListBackground: !0, distinctBorders: !1 },
        4: { largerGuildIcons: !1, darkerGuildListBackground: !1, distinctBorders: !0 },
        5: { largerGuildIcons: !0, darkerGuildListBackground: !1, distinctBorders: !0 },
    },
});
n.d(
    t,
    {},
    {
        k5: function (e) {
            return i.useConfig({ location: e }).darkerGuildListBackground;
        },
        lV: function (e) {
            return i.useConfig({ location: e }).distinctBorders;
        },
        qK: function (e) {
            return !1;
        },
    },
);
