var r = n(834647),
    a = n(683570),
    o = n(486816),
    i = n(978887),
    s = n(57284),
    l = n(633555),
    c = a("URL"),
    u =
        l &&
        o(function () {
            c.canParse();
        }),
    d = o(function () {
        return 1 !== c.canParse.length;
    });
r(
    {
        target: "URL",
        stat: !0,
        forced: !u || d,
    },
    {
        canParse: function (e) {
            var t = i(arguments.length, 1),
                n = s(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : s(arguments[1]);
            try {
                return new c(n, r), !0;
            } catch (e) {
                return !1;
            }
        },
    },
);
