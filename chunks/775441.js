var r = n(13347),
    i = n(587779),
    a = n(664078),
    s = n(670453),
    o = n(670082),
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
