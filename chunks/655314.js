var r = n(220159),
    o = n(958288).findIndex,
    a = n(855802),
    i = 'findIndex',
    s = !0;
i in [] &&
    [,][i](function () {
        s = !1;
    }),
    r(
        {
            target: 'Array',
            proto: !0,
            forced: s
        },
        {
            findIndex: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }
    ),
    a(i);
