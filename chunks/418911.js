var n = e(610475),
    o = e(208909),
    s = e(433979),
    i = e(500968),
    u = e(587822),
    c = e(349674),
    a = o.Set,
    f = o.add,
    p = o.has;
t.exports = function (t) {
    var r = n(this),
        e = i(t),
        o = new a();
    return (
        s(r) > e.size
            ? c(e.getIterator(), function (t) {
                  p(r, t) && f(o, t);
              })
            : u(r, function (t) {
                  e.includes(t) && f(o, t);
              }),
        o
    );
};
