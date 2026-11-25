var i = t(210528),
    l = t(723702),
    n = t(272984);
function o(e) {
    let C = null;
    ((0, l.xl)() || (C = window.open("", "_blank")), null != C ? (C.location.href = e) : window.open(e));
}
t.d(
    C,
    {},
    {
        C: o,
        n: function (e, C) {
            o(i.A.isProtocolRegistered() ? n.RQ.PLAYER_OPEN(e, C) : n.RQ.WEB_OPEN(e, C));
        },
    },
);
