var r = n(220159),
    o = n(764908),
    a = Date,
    i = o(a.prototype.getTime);
r(
    {
        target: 'Date',
        stat: !0
    },
    {
        now: function () {
            return i(new a());
        }
    }
);
