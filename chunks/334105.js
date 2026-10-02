a.d(e, { cz: () => p, fJ: () => s });
var t = a(17928),
    d = a(138298),
    i = a(940382),
    r = a(761640);
function s(n, e, a) {
    d.A.openChannelAsSidebar({
        guildId: n,
        channelId: e,
        baseChannelId: e,
        details: { type: i.kk.CHAT, initialMessageId: a },
    });
}
function p(n) {
    return (0, t.bG)([r.Ay], () => null != n && r.Ay.getCurrentSidebarChannelId(n) === n, [n]);
}
a(573163);
