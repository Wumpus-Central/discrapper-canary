var r = n(834647),
    a = n(999843),
    o = n(280173),
    i = n(463843),
    s = i.get,
    l = i.has,
    c = i.set;
r(
    {
        target: "Map",
        proto: !0,
        real: !0,
        forced: !0,
    },
    {
        getOrInsertComputed: function (e, t) {
            if ((o(this), a(t), l(this, e))) return s(this, e);
            0 === e && 1 / e == -1 / 0 && (e = 0);
            var n = t(e);
            return c(this, e, n), n;
        },
    },
);
