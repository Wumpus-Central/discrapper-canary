r.d(n, { HP: () => A, ci: () => i, m: () => d });
var t = r(17928),
    u = r(138298),
    a = r(940382),
    l = r(358047);
function i(e, n) {
    u.A.openChannelAsSidebar({ guildId: e, channelId: n, baseChannelId: n, details: { type: a.kk.CHAT } });
}
function d(e) {
    u.A.closeChannelSidebar(e);
}
function A(e) {
    return (0, t.bG)([l.Ay], () => null != e && l.Ay.getCurrentSidebarChannelId(e) === e, [e]);
}
