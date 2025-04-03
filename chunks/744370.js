var r = n(476508),
    o = n(570596),
    a = n(548828),
    i = n(831496),
    s = n(250765),
    c = n(730427),
    l = [].push;
e.exports = function (e) {
    var t,
        n,
        u,
        d,
        p = arguments.length,
        h = p > 1 ? arguments[1] : void 0;
    return (i(this), (t = void 0 !== h) && a(h), s(e))
        ? new this()
        : ((n = []),
          t
              ? ((u = 0),
                (d = r(h, p > 2 ? arguments[2] : void 0)),
                c(e, function (e) {
                    o(l, n, d(e, u++));
                }))
              : c(e, l, { that: n }),
          new this(n));
};
