var i = r(67867),
    a = r(96403),
    o = Date,
    s = a(o.prototype.getTime);
i(
    {
        target: 'Date',
        stat: !0
    },
    {
        now: function () {
            return s(new o());
        }
    }
);
