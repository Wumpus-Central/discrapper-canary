n.d(e, { HP: () => p, ci: () => d, m: () => _ });
var i = n(17928),
    r = n(138298),
    a = n(940382),
    l = n(358047);
function d(t, e) {
    r.A.openChannelAsSidebar({ guildId: t, channelId: e, baseChannelId: e, details: { type: a.kk.CHAT } });
}
function _(t) {
    r.A.closeChannelSidebar(t);
}
function p(t) {
    return (0, i.bG)([l.Ay], () => null != t && l.Ay.getCurrentSidebarChannelId(t) === t, [t]);
}
