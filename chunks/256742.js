var r = n(834647),
    a = n(675879),
    o = Date,
    i = a(o.prototype.getTime);
r(
    {
        target: "Date",
        stat: !0,
    },
    {
        now: function () {
            return i(new o());
        },
    },
);
