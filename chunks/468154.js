var i = r(594463).IteratorPrototype,
    a = r(224106),
    o = r(241777),
    s = r(414847),
    l = r(519723),
    u = function () {
        return this;
    };
e.exports = function (e, n, r, c) {
    var d = n + ' Iterator';
    return (e.prototype = a(i, { next: o(+!c, r) })), s(e, d, !1, !0), (l[d] = u), e;
};
