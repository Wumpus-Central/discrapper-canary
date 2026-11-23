let i = (0, n(945810).mj)({
    name: "2026-11-stream-drawing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        T: function (e) {
            return i.useConfig({ location: e }).enabled;
        },
        q: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return i.getConfig({ location: e }, { autoTrackExposure: t }).enabled;
        },
    },
);
