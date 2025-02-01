var i = n(147018),
    r = n(545576),
    a = n(936940),
    s = n(202934),
    o = n(714050),
    l = n(259230),
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
