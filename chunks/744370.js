var i = r(476508),
    a = r(570596),
    o = r(548828),
    s = r(831496),
    l = r(250765),
    u = r(730427),
    c = [].push;
e.exports = function (e) {
    var n,
        r,
        d,
        f,
        p = arguments.length,
        h = p > 1 ? arguments[1] : void 0;
    return (s(this), (n = void 0 !== h) && o(h), l(e))
        ? new this()
        : ((r = []),
          n
              ? ((d = 0),
                (f = i(h, p > 2 ? arguments[2] : void 0)),
                u(e, function (e) {
                    a(c, r, f(e, d++));
                }))
              : u(e, c, { that: r }),
          new this(r));
};
