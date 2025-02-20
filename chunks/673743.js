var n = e(84297).IteratorPrototype,
    o = e(803938),
    i = e(879),
    u = e(865312),
    a = e(874652),
    c = function () {
        return this;
    };
t.exports = function (t, r, e, s) {
    var f = r + ' Iterator';
    return (t.prototype = o(n, { next: i(+!s, e) })), u(t, f, !1, !0), (a[f] = c), t;
};
