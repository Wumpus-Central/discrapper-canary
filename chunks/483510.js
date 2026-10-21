a.d(e, { HP: () => u, ci: () => s, m: () => c });
var i = a(17928),
    t = a(138298),
    d = a(940382),
    r = a(358047);
function s(n, e) {
    t.A.openChannelAsSidebar({ guildId: n, channelId: e, baseChannelId: e, details: { type: d.kk.CHAT } });
}
function c(n) {
    t.A.closeChannelSidebar(n);
}
function u(n) {
    return (0, i.bG)([r.Ay], () => null != n && r.Ay.getCurrentSidebarChannelId(n) === n, [n]);
}
