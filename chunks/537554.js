var r = n(834647),
    a = n(999843),
    o = n(280173),
    i = n(463843),
    s = TypeError,
    l = i.get,
    c = i.has,
    u = i.set;
r(
    {
        target: "Map",
        proto: !0,
        real: !0,
        forced: !0,
    },
    {
        update: function (e, t) {
            var n = o(this),
                r = arguments.length;
            a(t);
            var i = c(n, e);
            if (!i && r < 3) throw new s("Updating absent value");
            var d = i ? l(n, e) : a(r > 2 ? arguments[2] : void 0)(e, n);
            return u(n, e, t(d, e, n)), n;
        },
    },
);
