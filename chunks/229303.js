var e = n(185156),
    o = n(506887),
    i = n(550172),
    u = n(268571),
    s = n(271221),
    c = n(825677),
    f = n(871959),
    a = o.has,
    p = o.remove;
t.exports = function (t) {
    var r = e(this),
        n = s(t),
        o = i(r);
    return (
        u(r) <= n.size
            ? c(r, function (t) {
                  n.includes(t) && p(o, t);
              })
            : f(n.getIterator(), function (t) {
                  a(r, t) && p(o, t);
              }),
        o
    );
};
