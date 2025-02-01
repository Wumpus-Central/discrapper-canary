var i = n(67867),
    r = n(294377),
    a = n(821819),
    s = n(274745),
    o = n(342545),
    l = n(502754),
    u = r('URL');
i(
    {
        target: 'URL',
        stat: !0,
        forced: !(
            l &&
            a(function () {
                u.canParse();
            })
        )
    },
    {
        canParse: function (e) {
            var t = s(arguments.length, 1),
                n = o(e),
                i = t < 2 || void 0 === arguments[1] ? void 0 : o(arguments[1]);
            try {
                return new u(n, i), !0;
            } catch (e) {
                return !1;
            }
        }
    }
);
