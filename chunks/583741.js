var n = r(98405),
    i = r(46015),
    s = r(88996),
    a = i([].reverse),
    o = [1, 2];
n(
    {
        target: 'Array',
        proto: !0,
        forced: String(o) === String(o.reverse())
    },
    {
        reverse: function () {
            return (s(this) && (this.length = this.length), a(this));
        }
    }
);
