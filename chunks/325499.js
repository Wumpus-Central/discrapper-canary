let i = (0, n(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        b: function (e) {
            let { enabled: t } = i.useConfig({ location: e });
            return t;
        },
        i: function (e) {
            let { enabled: t } = i.getConfig({ location: e });
            return t;
        },
    },
);
