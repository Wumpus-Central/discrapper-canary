var r = n(220159),
    o = n(764908),
    a = n(884805),
    i = o([].reverse),
    s = [1, 2];
r(
    {
        target: 'Array',
        proto: !0,
        forced: String(s) === String(s.reverse())
    },
    {
        reverse: function () {
            return a(this) && (this.length = this.length), i(this);
        }
    }
);
