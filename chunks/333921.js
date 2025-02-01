var i = n(67867),
    r = n(96403),
    a = n(505642),
    s = n(463374),
    o = n(342545),
    l = n(663158),
    u = r(''.indexOf);
i(
    {
        target: 'String',
        proto: !0,
        forced: !l('includes')
    },
    {
        includes: function (e) {
            return !!~u(o(s(this)), o(a(e)), arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
