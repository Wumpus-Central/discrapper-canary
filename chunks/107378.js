var r = a(92801),
    n = a(58834);
t.exports = function (t) {
    for (var e = n(t), a = e.length; a--; ) {
        var _ = e[a],
            o = t[_];
        e[a] = [_, o, r(o)];
    }
    return e;
};
