var l = n(210528),
    r = n(723702),
    i = n(272984);
function o(t) {
    let e = null;
    ((0, r.xl)() || (e = window.open("", "_blank")), null != e ? (e.location.href = t) : window.open(t));
}
n.d(
    e,
    {},
    {
        C: o,
        n: function (t, e) {
            o(l.A.isProtocolRegistered() ? i.RQ.PLAYER_OPEN(t, e) : i.RQ.WEB_OPEN(t, e));
        },
    },
);
