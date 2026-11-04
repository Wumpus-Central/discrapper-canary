let i = (0, n(945810).mj)({
    name: "2026-09-multi-sku-embed-rendering",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        _: function (e) {
            let { enabled: t } = i.useConfig({ location: e });
            return t;
        },
        x: function (e) {
            let { enabled: t } = i.getConfig({ location: e });
            return t;
        },
    },
);
