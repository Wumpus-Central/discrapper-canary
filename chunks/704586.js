var r = n(67867),
    i = n(804104).find,
    o = n(501953),
    a = 'find',
    s = !0;
a in [] &&
    [,][a](function () {
        s = !1;
    }),
    r(
        {
            target: 'Array',
            proto: !0,
            forced: s
        },
        {
            find: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }
    ),
    o(a);
