var r = n(557939),
    i = n(410323),
    a = n(703441),
    s = i([].reverse),
    o = [1, 2];
r(
    {
        target: "Array",
        proto: !0,
        forced: String(o) === String(o.reverse()),
    },
    {
        reverse: function () {
            return a(this) && (this.length = this.length), s(this);
        },
    },
);
