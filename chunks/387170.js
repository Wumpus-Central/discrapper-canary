var r = n(834647),
    a = n(241091),
    o = n(280173),
    i = n(381568);
r(
    {
        target: "Map",
        proto: !0,
        real: !0,
        forced: !0,
    },
    {
        findKey: function (e) {
            var t = o(this),
                n = a(e, arguments.length > 1 ? arguments[1] : void 0),
                r = i(
                    t,
                    function (e, r) {
                        if (n(e, r, t)) return { key: r };
                    },
                    !0,
                );
            return r && r.key;
        },
    },
);
