var r = n(98405),
    i = n(46015),
    a = n(88996),
    o = i([].reverse),
    s = [1, 2];
r(
    {
        target: 'Array',
        proto: !0,
        forced: String(s) === String(s.reverse())
    },
    {
        reverse: function () {
            return a(this) && (this.length = this.length), o(this);
        }
    }
);
