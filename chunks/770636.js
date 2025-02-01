var i = n(67867),
    r = n(476508),
    a = n(228042),
    s = n(292137);
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        find: function (e) {
            var t = a(this),
                n = r(e, arguments.length > 1 ? arguments[1] : void 0),
                i = s(
                    t,
                    function (e, i) {
                        if (n(e, i, t)) return { value: e };
                    },
                    !0
                );
            return i && i.value;
        }
    }
);
