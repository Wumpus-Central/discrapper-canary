n.d(t, {
    C: () => o,
    Y: () => a
});
var r = n(442837),
    i = n(496675),
    l = n(981631);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
    return null != e && null != e.linkedLobby && t.can(l.Plq.MANAGE_CHANNELS, e) && t.can(l.Plq.VIEW_CHANNEL, e) && t.can(l.Plq.SEND_MESSAGES, e);
}
function a(e) {
    return (0, r.e7)([i.Z], () => o(e, i.Z));
}
