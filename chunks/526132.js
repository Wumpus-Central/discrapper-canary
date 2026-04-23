n.d(t, { e: () => r, n: () => a });
var i = n(17928),
    l = n(576705),
    s = n(652215);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    return (
        null != e &&
        null != e.linkedLobby &&
        t.can(s.xBc.MANAGE_CHANNELS, e) &&
        t.can(s.xBc.VIEW_CHANNEL, e) &&
        t.can(s.xBc.SEND_MESSAGES, e)
    );
}
function r(e) {
    return (0, i.bG)([l.A], () => a(e, l.A));
}
