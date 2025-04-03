var e = n(67867),
    o = n(804104).find,
    i = n(501953),
    u = 'find',
    s = !0;
u in [] &&
    [,][u](function () {
        s = !1;
    }),
    e(
        {
            target: 'Array',
            proto: !0,
            forced: s
        },
        {
            find: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
        }
    ),
    i(u);
