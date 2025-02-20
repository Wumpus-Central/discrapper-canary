var r = n(67867),
    i = n(96403),
    o = n(505642),
    a = n(463374),
    s = n(342545),
    l = n(663158),
    c = i(''.indexOf);
r(
    {
        target: 'String',
        proto: !0,
        forced: !l('includes')
    },
    {
        includes: function (e) {
            return !!~c(s(a(this)), s(o(e)), arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
