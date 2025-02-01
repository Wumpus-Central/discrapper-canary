var i = n(476508),
    r = n(570596),
    a = n(548828),
    s = n(831496),
    o = n(250765),
    l = n(730427),
    u = [].push;
e.exports = function (e) {
    var t,
        n,
        c,
        d,
        f = arguments.length,
        _ = f > 1 ? arguments[1] : void 0;
    return (s(this), (t = void 0 !== _) && a(_), o(e))
        ? new this()
        : ((n = []),
          t
              ? ((c = 0),
                (d = i(_, f > 2 ? arguments[2] : void 0)),
                l(e, function (e) {
                    r(u, n, d(e, c++));
                }))
              : l(e, u, { that: n }),
          new this(n));
};
