var i = n(855986),
    l = n(91242),
    a = n(150861),
    s = n(778597),
    r = n(75721),
    o = n(843002);
n.d(
    t,
    {},
    {
        EJ: function (e, t) {
            let n = (0, r.WA)(e),
                a = (0, i.bG)([l.A], () => (0, o.B)(l.A.getFramesForSurface((0, o.e)(e.id)), n), [e.id, n]);
            return t && a;
        },
        Fh: function (e, t) {
            let n = (0, r.WA)(e);
            return t && null != n;
        },
        d7: function (e, t) {
            let n = (0, r.WA)(e);
            return ((0, a.A)(e), t ? n : null);
        },
        kM: function (e) {
            let t = (0, r.WA)(e);
            return (0, i.bG)([s.A], () => s.A.isAppVisible(e.id, null != t), [e.id, t]);
        },
    },
);
