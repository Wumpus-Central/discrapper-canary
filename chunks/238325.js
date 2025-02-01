var i = n(67867),
    r = n(96403),
    a = Date,
    s = r(a.prototype.getTime);
i(
    {
        target: 'Date',
        stat: !0
    },
    {
        now: function () {
            return s(new a());
        }
    }
);
