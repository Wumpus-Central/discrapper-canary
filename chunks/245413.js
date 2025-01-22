var i = r(957578).Buffer,
    a = r(292735);
function o(e, n, r, o) {
    if ((!i.isBuffer(e) && (e = i.from(e, 'binary')), n && (!i.isBuffer(n) && (n = i.from(n, 'binary')), 8 !== n.length))) throw RangeError('salt should be Buffer with 8 byte length');
    for (var s = r / 8, l = i.alloc(s), u = i.alloc(o || 0), c = i.alloc(0); s > 0 || o > 0; ) {
        var d = new a();
        d.update(c), d.update(e), n && d.update(n), (c = d.digest());
        var f = 0;
        if (s > 0) {
            var p = l.length - s;
            (f = Math.min(s, c.length)), c.copy(l, p, 0, f), (s -= f);
        }
        if (f < c.length && o > 0) {
            var h = u.length - o,
                _ = Math.min(o, c.length - f);
            c.copy(u, h, f, f + _), (o -= _);
        }
    }
    return (
        c.fill(0),
        {
            key: l,
            iv: u
        }
    );
}
e.exports = o;
