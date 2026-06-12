var i = n(13347),
    r = n(587779),
    s = n(664078),
    a = n(670453),
    o = n(670082),
    l = Math.max;
e.exports = function (e) {
    if (!(e && e.length)) return [];
    var t = 0;
    return (
        (e = i(e, function (e) {
            if (o(e)) return (t = l(e.length, t)), !0;
        })),
        a(t, function (t) {
            return r(e, s(t));
        })
    );
};
