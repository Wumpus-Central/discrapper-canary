t.d(n, {
    C: () => i,
    Y: () => o
});
var r = t(442837),
    l = t(496675),
    c = t(981631);
function i(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
    return null != e && null != e.linkedLobby && n.can(c.Plq.MANAGE_CHANNELS, e) && n.can(c.Plq.VIEW_CHANNEL, e) && n.can(c.Plq.SEND_MESSAGES, e);
}
function o(e) {
    return (0, r.e7)([l.Z], () => i(e, l.Z));
}
