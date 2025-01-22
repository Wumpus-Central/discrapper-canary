var i = r(67867),
    a = r(294377),
    o = r(821819),
    s = r(274745),
    l = r(342545),
    u = r(502754),
    c = a('URL');
i(
    {
        target: 'URL',
        stat: !0,
        forced: !(
            u &&
            o(function () {
                c.canParse();
            })
        )
    },
    {
        canParse: function (e) {
            var n = s(arguments.length, 1),
                r = l(e),
                i = n < 2 || void 0 === arguments[1] ? void 0 : l(arguments[1]);
            try {
                return new c(r, i), !0;
            } catch (e) {
                return !1;
            }
        }
    }
);
