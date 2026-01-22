var r = n(834647),
    a = n(280173),
    o = n(463843),
    i = o.get,
    s = o.has,
    l = o.set;
r(
    {
        target: "Map",
        proto: !0,
        real: !0,
        forced: !0,
    },
    {
        getOrInsert: function (e, t) {
            return s(a(this), e) ? i(this, e) : (l(this, e, t), t);
        },
    },
);
