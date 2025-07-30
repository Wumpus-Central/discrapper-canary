n.d(t, {
    C: () => o,
    Y: () => a
});
var i = n(442837),
    r = n(496675),
    l = n(981631);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
    return null != e && null != e.linkedLobby && t.can(l.Plq.MANAGE_CHANNELS, e) && t.can(l.Plq.VIEW_CHANNEL, e) && t.can(l.Plq.SEND_MESSAGES, e);
}
function a(e) {
    return (0, i.e7)([r.Z], () => o(e, r.Z));
}
