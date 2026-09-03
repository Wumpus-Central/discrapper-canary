var n = e(610475),
    o = e(208909),
    s = e(523005),
    i = e(433979),
    u = e(500968),
    c = e(587822),
    a = e(349674),
    f = o.has,
    p = o.remove;
t.exports = function (t) {
    var r = n(this),
        e = u(t),
        o = s(r);
    return (
        i(r) <= e.size
            ? c(r, function (t) {
                  e.includes(t) && p(o, t);
              })
            : a(e.getIterator(), function (t) {
                  f(r, t) && p(o, t);
              }),
        o
    );
};
