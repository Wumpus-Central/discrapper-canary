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
        getOrInsert: function (e, t) {
            return s(o(this), e) ? i(this, e) : (c(this, e, t), t);
        }
    }
);
