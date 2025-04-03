var e = n(594463).IteratorPrototype,
    o = n(224106),
    i = n(241777),
    u = n(414847),
    s = n(519723),
    c = function () {
        return this;
    };
t.exports = function (t, r, n, f) {
    var a = r + ' Iterator';
    return (t.prototype = o(e, { next: i(+!f, n) })), u(t, a, !1, !0), (s[a] = c), t;
};
