n.d(t, { W: () => i, j: () => r });
let l = (0, n(945810).mj)({
    kind: "guild",
    name: "2026-09-soundboard-echo",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e, t) {
    return l.useConfig({ guildId: e, location: t });
}
function r(e, t) {
    return l.getConfig({ guildId: e, location: t });
}
