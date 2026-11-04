let i = (0, n(400845).Ay)({
    name: "2026-04-inappropriate-conversations-prescan",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        Lc: function (e) {
            let { location: t } = e,
                { enabled: n } = i.useConfig({ location: t });
            return n;
        },
        wv: function (e) {
            let { location: t } = e,
                { enabled: n } = i.getConfig({ location: t });
            return n;
        },
    },
);
