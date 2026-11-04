let i = (0, n(945810).mj)({
    name: "2026-08-tiny-bronco",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        n: function (e) {
            return i.getConfig({ location: e }).enabled;
        },
        w: function (e) {
            let { enabled: t } = i.useConfig({ location: e });
            return t;
        },
    },
);
