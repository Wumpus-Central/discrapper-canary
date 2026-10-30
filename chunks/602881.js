n.d(t, { Dl: () => s, mI: () => l });
let i = (0, n(945810).mj)({
    kind: "guild",
    name: "2026-09-linked-guilds",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function l(e, t) {
    return i.useConfig({ guildId: e ?? "", location: t }).enabled;
}
function s(e, t) {
    return i.getConfig({ guildId: e, location: t }).enabled;
}
