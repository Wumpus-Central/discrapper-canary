var r = n(220159),
    o = n(691593),
    a = n(519467),
    i = n(613694),
    s = TypeError,
    c = i.get,
    l = i.has,
    u = i.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        update: function (e, t) {
            var n = a(this),
                r = arguments.length;
            o(t);
            var i = l(n, e);
            if (!i && r < 3) throw new s('Updating absent value');
            var d = i ? c(n, e) : o(r > 2 ? arguments[2] : void 0)(e, n);
            return u(n, e, t(d, e, n)), n;
        }
    }
);
