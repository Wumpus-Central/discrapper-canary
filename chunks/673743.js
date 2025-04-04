var n = e(84297).IteratorPrototype,
    o = e(803938),
    i = e(879),
    a = e(865312),
    s = e(874652),
    u = function () {
        return this;
    };
t.exports = function (t, r, e, c) {
    var f = r + ' Iterator';
    return (t.prototype = o(n, { next: i(+!c, e) })), a(t, f, !1, !0), (s[f] = u), t;
};
