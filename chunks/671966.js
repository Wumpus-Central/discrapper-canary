var r = n(176206),
    i = n(257816),
    a = n(317281),
    s = n(278276),
    o = n(599769),
    l = Math.max;
e.exports = function (e) {
    if (!(e && e.length)) return [];
    var t = 0;
    return (
        (e = r(e, function (e) {
            if (o(e)) return (t = l(e.length, t)), !0;
        })),
        s(t, function (t) {
            return i(e, a(t));
        })
    );
};
