function r(e) {
    return '/' === e.charAt(0);
}
function i(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
}
n.d(t, { Z: () => o });
let o = function (e, t) {
    void 0 === t && (t = '');
    var n,
        o = (e && e.split('/')) || [],
        a = (t && t.split('/')) || [],
        s = e && r(e),
        l = t && r(t),
        c = s || l;
    if ((e && r(e) ? (a = o) : o.length && (a.pop(), (a = a.concat(o))), !a.length)) return '/';
    if (a.length) {
        var u = a[a.length - 1];
        n = '.' === u || '..' === u || '' === u;
    } else n = !1;
    for (var d = 0, f = a.length; f >= 0; f--) {
        var _ = a[f];
        '.' === _ ? i(a, f) : '..' === _ ? (i(a, f), d++) : d && (i(a, f), d--);
    }
    if (!c) for (; d--; ) a.unshift('..');
    !c || '' === a[0] || (a[0] && r(a[0])) || a.unshift('');
    var p = a.join('/');
    return n && '/' !== p.substr(-1) && (p += '/'), p;
};
