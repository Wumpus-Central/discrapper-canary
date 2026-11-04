let i = (0, n(945810).mj)({
    name: "2026-10-embedded-app-frame-policy",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        XF: function (e) {
            return i.useConfig({ location: e }).enabled;
        },
        ac: function (e) {
            return i.getConfig({ location: e }).enabled;
        },
    },
);
