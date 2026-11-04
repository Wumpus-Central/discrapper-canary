var u = t(855986),
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
t.d(
    c,
    {},
    {
        e: function (n) {
            return (0, u.bG)([e.A], () => a(n, e.A));
        },
        n: a,
    },
);
