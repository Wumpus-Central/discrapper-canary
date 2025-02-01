var i = n(369529),
    r = n(886985),
    a = n(901806),
    s = n(484155),
    o = n(246209),
    l = Math.max;
function u(e) {
    if (!(e && e.length)) return [];
    var t = 0;
    return (
        (e = i(e, function (e) {
            if (o(e)) return (t = l(e.length, t)), !0;
        })),
        s(t, function (t) {
            return r(e, a(t));
        })
    );
}
e.exports = u;
