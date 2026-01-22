var r = n(248876).IteratorPrototype,
    i = n(482779),
    a = n(231977),
    s = n(174168),
    o = n(70670),
    l = function () {
        return this;
    };
e.exports = function (e, t, n, c) {
    var u = t + " Iterator";
    return (e.prototype = i(r, { next: a(+!c, n) })), s(e, u, !1, !0), (o[u] = l), e;
};
