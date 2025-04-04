var e = n(185156),
    o = n(506887),
    i = n(550172),
    u = n(271221),
    s = n(871959),
    c = o.add,
    f = o.has,
    a = o.remove;
t.exports = function (t) {
    var r = e(this),
        n = u(t).getIterator(),
        o = i(r);
    return (
        s(n, function (t) {
            f(r, t) ? a(o, t) : c(o, t);
        }),
        o
    );
};
