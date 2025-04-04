var r = n(220159),
    o = n(519467),
    a = n(613694),
    i = a.get,
    s = a.has,
    c = a.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        emplace: function (e, t) {
            var n,
                r,
                a = o(this);
            return s(a, e) ? ((n = i(a, e)), 'update' in t && ((n = t.update(n, e, a)), c(a, e, n)), n) : ((r = t.insert(e, a)), c(a, e, r), r);
        }
    }
);
