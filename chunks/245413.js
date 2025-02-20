var r = n(957578).Buffer,
    i = n(292735);
function o(e, t, n, o) {
    if ((r.isBuffer(e) || (e = r.from(e, 'binary')), t && (r.isBuffer(t) || (t = r.from(t, 'binary')), 8 !== t.length))) throw RangeError('salt should be Buffer with 8 byte length');
    for (var a = n / 8, s = r.alloc(a), l = r.alloc(o || 0), c = r.alloc(0); a > 0 || o > 0; ) {
        var u = new i();
        u.update(c), u.update(e), t && u.update(t), (c = u.digest());
        var d = 0;
        if (a > 0) {
            var f = s.length - a;
            (d = Math.min(a, c.length)), c.copy(s, f, 0, d), (a -= d);
        }
        if (d < c.length && o > 0) {
            var p = l.length - o,
                _ = Math.min(o, c.length - d);
            c.copy(l, p, d, d + _), (o -= _);
        }
    }
    return (
        c.fill(0),
        {
            key: s,
            iv: l
        }
    );
}
e.exports = o;
