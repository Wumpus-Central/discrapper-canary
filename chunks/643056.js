let n = (0, l(945810).mj)({
    name: "2026-08-badge-management",
    kind: "user",
    defaultConfig: { enabled: !1, tenureBadgeHideable: !1 },
    variations: { 1: { enabled: !0, tenureBadgeHideable: !0 }, 2: { enabled: !0, tenureBadgeHideable: !1 } },
});
l.d(
    t,
    {},
    {
        A: n,
        d: function (e) {
            let { location: t } = e;
            return n.useConfig({ location: t }).enabled;
        },
    },
);
