var i = r(67867),
    a = r(804104).find,
    o = r(501953),
    s = 'find',
    l = !0;
s in [] &&
    [,][s](function () {
        l = !1;
    }),
    i(
        {
            target: 'Array',
            proto: !0,
            forced: l
        },
        {
            find: function (e) {
                return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }
    ),
    o(s);
