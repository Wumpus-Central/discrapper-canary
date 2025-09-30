var r = n(751177),
    i = n(467631),
    a = n(181515),
    o = n(585606),
    s = n(521392),
    l = Math.max;
e.exports = function (e) {
    if (!(e && e.length)) return [];
    var t = 0;
    return (
        (e = r(e, function (e) {
            if (s(e)) return (t = l(e.length, t)), !0;
        })),
        o(t, function (t) {
            return i(e, a(t));
        })
    );
};
