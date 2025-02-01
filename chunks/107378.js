var r = a(92801),
    n = a(58834);
t.exports = function (t) {
    for (var e = n(t), a = e.length; a--; ) {
        var o = e[a],
            _ = t[o];
        e[a] = [o, _, r(_)];
    }
    return e;
};
