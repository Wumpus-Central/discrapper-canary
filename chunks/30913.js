var r = n(67867),
    o = n(294377),
    a = n(821819),
    i = n(274745),
    s = n(342545),
    c = n(502754),
    l = o('URL');
r(
    {
        target: 'URL',
        stat: !0,
        forced: !(
            c &&
            a(function () {
                l.canParse();
            })
        )
    },
    {
        canParse: function (e) {
            var t = i(arguments.length, 1),
                n = s(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : s(arguments[1]);
            try {
                return new l(n, r), !0;
            } catch (e) {
                return !1;
            }
        }
    }
);
