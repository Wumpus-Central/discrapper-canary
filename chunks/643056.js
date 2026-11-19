let l = (0, n(945810).mj)({
    name: "2026-08-badge-management",
    kind: "user",
    defaultConfig: { enabled: !1, tenureBadgeHideable: !1 },
    variations: { 1: { enabled: !0, tenureBadgeHideable: !0 }, 2: { enabled: !0, tenureBadgeHideable: !1 } },
});
n.d(
    t,
    {},
    {
        A: l,
        d: function (e) {
            let { location: t } = e;
            return l.useConfig({ location: t }).enabled;
        },
    },
);
