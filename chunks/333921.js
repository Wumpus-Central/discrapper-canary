var r = n(67867),
    o = n(96403),
    a = n(505642),
    i = n(463374),
    s = n(342545),
    c = n(663158),
    l = o(''.indexOf);
r(
    {
        target: 'String',
        proto: !0,
        forced: !c('includes')
    },
    {
        includes: function (e) {
            return !!~l(s(i(this)), s(a(e)), arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
