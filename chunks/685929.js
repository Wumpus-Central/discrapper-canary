t.d(e, {
    C: () => c,
    Y: () => r
});
var l = t(442837),
    i = t(496675),
    a = t(981631);
function c(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
    return null != n && null != n.linkedLobby && e.can(a.Plq.MANAGE_CHANNELS, n) && e.can(a.Plq.VIEW_CHANNEL, n) && e.can(a.Plq.SEND_MESSAGES, n);
}
function r(n) {
    return (0, l.e7)([i.Z], () => c(n, i.Z));
}
