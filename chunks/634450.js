function i(e) {
    return '/' === e.charAt(0);
}
function r(e, t) {
    for (var n = t, i = n + 1, r = e.length; i < r; n += 1, i += 1) e[n] = e[i];
    e.pop();
}
n.d(t, { Z: () => a });
let a = function (e, t) {
    void 0 === t && (t = '');
    var n,
        a = (e && e.split('/')) || [],
        s = (t && t.split('/')) || [],
        o = e && i(e),
        l = t && i(t),
        u = o || l;
    if ((e && i(e) ? (s = a) : a.length && (s.pop(), (s = s.concat(a))), !s.length)) return '/';
    if (s.length) {
        var c = s[s.length - 1];
        n = '.' === c || '..' === c || '' === c;
    } else n = !1;
    for (var d = 0, f = s.length; f >= 0; f--) {
        var _ = s[f];
        '.' === _ ? r(s, f) : '..' === _ ? (r(s, f), d++) : d && (r(s, f), d--);
    }
    if (!u) for (; d--; d) s.unshift('..');
    !u || '' === s[0] || (s[0] && i(s[0])) || s.unshift('');
    var p = s.join('/');
    return n && '/' !== p.substr(-1) && (p += '/'), p;
};
