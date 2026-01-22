n.d(t, {
    e: () => s,
    n: () => a,
});
var i = n(311907),
    r = n(576705),
    l = n(652215);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return (
        null != e &&
        null != e.linkedLobby &&
        t.can(l.xBc.MANAGE_CHANNELS, e) &&
        t.can(l.xBc.VIEW_CHANNEL, e) &&
        t.can(l.xBc.SEND_MESSAGES, e)
    );
}
function s(e) {
    return (0, i.bG)([r.A], () => a(e, r.A));
}
