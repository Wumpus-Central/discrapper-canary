var l = n(210528),
    r = n(723702),
    o = n(272984);
function i(t) {
    let e = null;
    ((0, r.xl)() || (e = window.open("", "_blank")), null != e ? (e.location.href = t) : window.open(t));
}
n.d(
    e,
    {},
    {
        C: i,
        n: function (t, e) {
            i(l.A.isProtocolRegistered() ? o.RQ.PLAYER_OPEN(t, e) : o.RQ.WEB_OPEN(t, e));
        },
    },
);
