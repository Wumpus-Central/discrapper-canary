var n = l(945810);
let a = (0, n.mj)({
    name: "2026-07-orbchievements",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
((0, n.mj)({
    name: "2026-10-orbchievements-mobile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
}),
    l.d(
        t,
        {},
        {
            Hy: function (e) {
                let { location: t } = e;
                return a.useConfig({ location: t }).enabled;
            },
        },
    ));
