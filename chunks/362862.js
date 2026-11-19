var a = l(945810);
let n = (0, a.mj)({
    name: "2026-07-orbchievements",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
((0, a.mj)({
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
                return n.useConfig({ location: t }).enabled;
            },
        },
    ));
