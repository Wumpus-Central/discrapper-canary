var i = r(369529),
    a = r(886985),
    o = r(901806),
    s = r(484155),
    l = r(246209),
    u = Math.max;
function c(e) {
    if (!(e && e.length)) return [];
    var n = 0;
    return (
        (e = i(e, function (e) {
            if (l(e)) return (n = u(e.length, n)), !0;
        })),
        s(n, function (n) {
            return a(e, o(n));
        })
    );
}
e.exports = c;
