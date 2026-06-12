t.d(c, { e: () => r, n: () => a });
var u = t(17928),
    e = t(576705),
    i = t(652215);
function a(n) {
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.A;
    return (
        null != n &&
        null != n.linkedLobby &&
        c.can(i.xBc.MANAGE_CHANNELS, n) &&
        c.can(i.xBc.VIEW_CHANNEL, n) &&
        c.can(i.xBc.SEND_MESSAGES, n)
    );
}
function r(n) {
    return (0, u.bG)([e.A], () => a(n, e.A));
}
