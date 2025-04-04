var r = n(220159),
    o = n(324474),
    a = n(519467),
    i = n(717853);
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        every: function (e) {
            var t = a(this),
                n = o(e, arguments.length > 1 ? arguments[1] : void 0);
            return (
                !1 !==
                i(
                    t,
                    function (e, r) {
                        if (!n(e, r, t)) return !1;
                    },
                    !0
                )
            );
        }
    }
);
