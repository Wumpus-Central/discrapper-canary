var i = n(945810);
n(652215);
let r = (0, i.mj)({
    kind: "guild",
    name: "2026-09-guild-spaces",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        aA: function (e, t) {
            return null != e && r.getConfig({ guildId: e, location: t }).enabled;
        },
        fX: function (e, t) {
            return r.useConfig({ guildId: e ?? "", location: t }).enabled;
        },
    },
);
