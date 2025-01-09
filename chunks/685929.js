t.d(e, {
    C: function () {
        return u;
    },
    Y: function () {
        return a;
    }
});
var l = t(442837),
    i = t(496675),
    r = t(981631);
function u(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
    return null != n && null != n.linkedLobby && e.can(r.Plq.MANAGE_CHANNELS, n) && e.can(r.Plq.VIEW_CHANNEL, n) && e.can(r.Plq.SEND_MESSAGES, n);
}
function a(n) {
    return (0, l.e7)([i.Z], () => u(n, i.Z));
}
