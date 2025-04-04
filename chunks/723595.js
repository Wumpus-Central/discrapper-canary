var r = n(220159),
    o = n(178476),
    a = n(779688),
    i = n(592802),
    s = n(565130),
    c = n(91345),
    l = o('URL'),
    u =
        c &&
        a(function () {
            l.canParse();
        }),
    d = a(function () {
        return 1 !== l.canParse.length;
    });
r(
    {
        target: 'URL',
        stat: !0,
        forced: !u || d
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
