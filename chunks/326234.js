var e = n(185156),
    o = n(506887),
    i = n(268571),
    u = n(271221),
    s = n(825677),
    c = n(871959),
    f = o.Set,
    a = o.add,
    p = o.has;
t.exports = function (t) {
    var r = e(this),
        n = u(t),
        o = new f();
    return (
        i(r) > n.size
            ? c(n.getIterator(), function (t) {
                  p(r, t) && a(o, t);
              })
            : s(r, function (t) {
                  n.includes(t) && a(o, t);
              }),
        o
    );
};
