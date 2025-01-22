r.d(n, {
    Y: function () {
        return s;
    },
    o: function () {
        return l;
    }
});
var i = r(18323),
    a = r(358085),
    o = r(616922);
function s(e) {
    let n = null;
    !(0, a.isDesktop)() && (n = window.open('', '_blank')), null != n ? (n.location.href = e) : window.open(e);
}
function l(e, n) {
    s(i.Z.isProtocolRegistered() ? o.C7.PLAYER_OPEN(e, n) : o.C7.WEB_OPEN(e, n));
}
