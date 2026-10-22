r.d(e, { HP: () => d, ci: () => l, m: () => A });
var t = r(17928),
    u = r(138298),
    a = r(940382),
    i = r(358047);
function l(n, e) {
    u.A.openChannelAsSidebar({ guildId: n, channelId: e, baseChannelId: e, details: { type: a.kk.CHAT } });
}
function A(n) {
    u.A.closeChannelSidebar(n);
}
function d(n) {
    return (0, t.bG)([i.Ay], () => null != n && i.Ay.getCurrentSidebarChannelId(n) === n, [n]);
}
