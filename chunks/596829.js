var r = n(557939),
    i = n(230606),
    a = n(503628),
    s = n(627),
    o = n(304880),
    l = n(39911),
    c = i("URL"),
    u =
        l &&
        a(function () {
            c.canParse();
        }),
    d = a(function () {
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
            var t = s(arguments.length, 1),
                n = o(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : o(arguments[1]);
            try {
                return new c(n, r), !0;
            } catch (e) {
                return !1;
            }
        },
    },
);
