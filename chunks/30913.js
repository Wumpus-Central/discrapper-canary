var r = n(67867),
    i = n(294377),
    o = n(821819),
    a = n(274745),
    s = n(342545),
    l = n(502754),
    c = i('URL');
r(
    {
        target: 'URL',
        stat: !0,
        forced: !(
            l &&
            o(function () {
                c.canParse();
            })
        )
    },
    {
        canParse: function (e) {
            var t = a(arguments.length, 1),
                n = s(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : s(arguments[1]);
            try {
                return new c(n, r), !0;
            } catch (e) {
                return !1;
            }
        }
    }
);
