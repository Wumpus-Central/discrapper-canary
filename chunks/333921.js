var i = r(67867),
    a = r(96403),
    o = r(505642),
    s = r(463374),
    l = r(342545),
    u = r(663158),
    c = a(''.indexOf);
i(
    {
        target: 'String',
        proto: !0,
        forced: !u('includes')
    },
    {
        includes: function (e) {
            return !!~c(l(s(this)), l(o(e)), arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
