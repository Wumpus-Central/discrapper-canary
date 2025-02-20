var r = n(476508),
    i = n(570596),
    o = n(548828),
    a = n(831496),
    s = n(250765),
    l = n(730427),
    c = [].push;
e.exports = function (e) {
    var t,
        n,
        u,
        d,
        f = arguments.length,
        p = f > 1 ? arguments[1] : void 0;
    return (a(this), (t = void 0 !== p) && o(p), s(e))
        ? new this()
        : ((n = []),
          t
              ? ((u = 0),
                (d = r(p, f > 2 ? arguments[2] : void 0)),
                l(e, function (e) {
                    i(c, n, d(e, u++));
                }))
              : l(e, c, { that: n }),
          new this(n));
};
