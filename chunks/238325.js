var r = n(67867),
    o = n(96403),
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
