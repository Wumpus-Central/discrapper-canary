function r(e) {
    return '/' === e.charAt(0);
}
function i(e, n) {
    for (var r = n, i = r + 1, a = e.length; i < a; r += 1, i += 1) e[r] = e[i];
    e.pop();
}
function a(e, n) {
    void 0 === n && (n = '');
    var a,
        o = (e && e.split('/')) || [],
        s = (n && n.split('/')) || [],
        l = e && r(e),
        u = n && r(n),
        c = l || u;
    if ((e && r(e) ? (s = o) : o.length && (s.pop(), (s = s.concat(o))), !s.length)) return '/';
    if (s.length) {
        var d = s[s.length - 1];
        a = '.' === d || '..' === d || '' === d;
    } else a = !1;
    for (var f = 0, p = s.length; p >= 0; p--) {
        var h = s[p];
        '.' === h ? i(s, p) : '..' === h ? (i(s, p), f++) : f && (i(s, p), f--);
    }
    if (!c) for (; f--; f) s.unshift('..');
    c && '' !== s[0] && (!s[0] || !r(s[0])) && s.unshift('');
    var _ = s.join('/');
    return a && '/' !== _.substr(-1) && (_ += '/'), _;
}
n.Z = a;
