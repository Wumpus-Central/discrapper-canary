let d = (0, n(945810).mj)({
    name: "2026-08-badge-management",
    kind: "user",
    defaultConfig: { enabled: !1, tenureBadgeHideable: !1 },
    variations: { 1: { enabled: !0, tenureBadgeHideable: !0 }, 2: { enabled: !0, tenureBadgeHideable: !1 } },
});
n.d(
    a,
    {},
    {
        A: d,
        d: function (e) {
            let { location: a } = e;
            return d.useConfig({ location: a }).enabled;
        },
    },
);
