var r = n(147018),
    i = n(545576),
    o = n(936940),
    a = n(202934),
    s = n(714050),
    l = n(259230),
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
