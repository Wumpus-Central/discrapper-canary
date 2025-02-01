var i = n(948437);
let r = function (e) {
    return e && -1 !== e.indexOf('.') ? ((e = '.' + e.split('.').pop().toLowerCase()), /.*(\..*)/g.exec(e)[1] || '') : '';
};
var a = /^\s*([^;\s]*)(?:;|\s|$)/,
    s = /^text\//i;
function o(e) {
    if (!e || 'string' != typeof e) return !1;
    var t = a.exec(e),
        n = t && i[t[1].toLowerCase()];
    return n && n.charset ? n.charset : !!(t && s.test(t[1])) && 'UTF-8';
}
function l(e) {
    if (!e || 'string' != typeof e) return !1;
    var n = -1 === e.indexOf('/') ? t.lookup(e) : e;
    if (!n) return !1;
    if (-1 === n.indexOf('charset')) {
        var i = t.charset(n);
        i && (n += '; charset=' + i.toLowerCase());
    }
    return n;
}
function u(e) {
    if (!e || 'string' != typeof e) return !1;
    var n = a.exec(e),
        i = n && t.extensions[n[1].toLowerCase()];
    return !!i && !!i.length && i[0];
}
function c(e) {
    if (!e || 'string' != typeof e) return !1;
    var n = r('x.' + e)
        .toLowerCase()
        .substr(1);
    return !!n && (t.types[n] || !1);
}
function d(e, t) {
    var n = ['nginx', 'apache', void 0, 'iana'];
    Object.keys(i).forEach(function (r) {
        var a = i[r],
            s = a.extensions;
        if (s && s.length) {
            e[r] = s;
            for (var o = 0; o < s.length; o++) {
                var l = s[o];
                if (t[l]) {
                    var u = n.indexOf(i[t[l]].source),
                        c = n.indexOf(a.source);
                    if (('application/octet-stream' !== t[l] && u > c) || (u === c && 'application/' === t[l].substr(0, 12))) continue;
                }
                t[l] = r;
            }
        }
    });
}
(t.charset = o), (t.charsets = { lookup: o }), (t.contentType = l), (t.extension = u), (t.extensions = Object.create(null)), (t.lookup = c), (t.types = Object.create(null)), d(t.extensions, t.types);
