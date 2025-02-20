t.d(n, {
    C: () => a,
    Y: () => i
});
var r = t(442837),
    c = t(496675),
    l = t(981631);
function a(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z;
    return null != e && null != e.linkedLobby && n.can(l.Plq.MANAGE_CHANNELS, e) && n.can(l.Plq.VIEW_CHANNEL, e) && n.can(l.Plq.SEND_MESSAGES, e);
}
function i(e) {
    return (0, r.e7)([c.Z], () => a(e, c.Z));
}
