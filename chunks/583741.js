var r = n(98405),
    i = n(46015),
    o = n(88996),
    a = i([].reverse),
    s = [1, 2];
r(
    {
        target: 'Array',
        proto: !0,
        forced: String(s) === String(s.reverse())
    },
    {
        reverse: function () {
            return o(this) && (this.length = this.length), a(this);
        }
    }
);
