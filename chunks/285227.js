var r = n(369529),
    i = n(886985),
    o = n(901806),
    a = n(484155),
    s = n(246209),
    l = Math.max;
function c(e) {
    if (!(e && e.length)) return [];
    var t = 0;
    return (
        (e = r(e, function (e) {
            if (s(e)) return (t = l(e.length, t)), !0;
        })),
        a(t, function (t) {
            return i(e, o(t));
        })
    );
}
e.exports = c;
