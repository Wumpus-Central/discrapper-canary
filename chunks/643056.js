let n = (0, a(945810).mj)({
    name: "2026-08-badge-management",
    kind: "user",
    defaultConfig: { enabled: !1, tenureBadgeHideable: !1 },
    variations: { 1: { enabled: !0, tenureBadgeHideable: !0 }, 2: { enabled: !0, tenureBadgeHideable: !1 } },
});
a.d(
    d,
    {},
    {
        A: n,
        d: function (e) {
            let { location: d } = e;
            return n.useConfig({ location: d }).enabled;
        },
    },
);
