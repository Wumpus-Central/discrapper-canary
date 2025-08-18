t.d(e, {
    C: () => c,
    Y: () => o,
});
var r = t(442837),
    l = t(496675),
    i = t(981631);
function c(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
    return (
        null != n &&
        null != n.linkedLobby &&
        e.can(i.Plq.MANAGE_CHANNELS, n) &&
        e.can(i.Plq.VIEW_CHANNEL, n) &&
        e.can(i.Plq.SEND_MESSAGES, n)
    );
}
function o(n) {
    return (0, r.e7)([l.Z], () => c(n, l.Z));
}
