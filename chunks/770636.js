var r = n(67867),
    o = n(476508),
    a = n(228042),
    i = n(292137);
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        find: function (e) {
            var t = a(this),
                n = o(e, arguments.length > 1 ? arguments[1] : void 0),
                r = i(
                    t,
                    function (e, r) {
                        if (n(e, r, t)) return { value: e };
                    },
                    !0
                );
            return r && r.value;
        }
    }
);
