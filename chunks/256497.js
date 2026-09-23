n.d(t, { aA: () => s, fX: () => l });
var i = n(945810),
    r = n(652215);
let a = (0, i.mj)({
    kind: "guild",
    name: "2026-09-guild-spaces",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(e, t) {
    return null != e && a.getConfig({ guildId: e, location: t }).enabled;
}
function l(e, t) {
    return a.useConfig({ guildId: e ?? r.dJq, location: t }).enabled;
}
