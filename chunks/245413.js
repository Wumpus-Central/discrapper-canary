var i = n(957578).Buffer,
    r = n(292735);
function a(e, t, n, a) {
    if ((i.isBuffer(e) || (e = i.from(e, 'binary')), t && (i.isBuffer(t) || (t = i.from(t, 'binary')), 8 !== t.length))) throw RangeError('salt should be Buffer with 8 byte length');
    for (var s = n / 8, o = i.alloc(s), l = i.alloc(a || 0), u = i.alloc(0); s > 0 || a > 0; ) {
        var c = new r();
        c.update(u), c.update(e), t && c.update(t), (u = c.digest());
        var d = 0;
        if (s > 0) {
            var f = o.length - s;
            (d = Math.min(s, u.length)), u.copy(o, f, 0, d), (s -= d);
        }
        if (d < u.length && a > 0) {
            var _ = l.length - a,
                p = Math.min(a, u.length - d);
            u.copy(l, _, d, d + p), (a -= p);
        }
    }
    return (
        u.fill(0),
        {
            key: o,
            iv: l
        }
    );
}
e.exports = a;
