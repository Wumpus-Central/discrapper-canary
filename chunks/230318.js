var r = n(948437);
let i = function (e) {
    return e && -1 !== e.indexOf('.') ? ((e = '.' + e.split('.').pop().toLowerCase()), /.*(\..*)/g.exec(e)[1] || '') : '';
};
var o = /^\s*([^;\s]*)(?:;|\s|$)/,
    a = /^text\//i;
function s(e) {
    if (!e || 'string' != typeof e) return !1;
    var t = o.exec(e),
        n = t && r[t[1].toLowerCase()];
    return n && n.charset ? n.charset : !!(t && a.test(t[1])) && 'UTF-8';
}
function l(e) {
    if (!e || 'string' != typeof e) return !1;
    var n = -1 === e.indexOf('/') ? t.lookup(e) : e;
    if (!n) return !1;
    if (-1 === n.indexOf('charset')) {
        var r = t.charset(n);
        r && (n += '; charset=' + r.toLowerCase());
    }
    return n;
}
function c(e) {
    if (!e || 'string' != typeof e) return !1;
    var n = o.exec(e),
        r = n && t.extensions[n[1].toLowerCase()];
    return !!r && !!r.length && r[0];
}
function u(e) {
    if (!e || 'string' != typeof e) return !1;
    var n = i('x.' + e)
        .toLowerCase()
        .substr(1);
    return !!n && (t.types[n] || !1);
}
function d(e, t) {
    var n = ['nginx', 'apache', void 0, 'iana'];
    Object.keys(r).forEach(function (i) {
        var o = r[i],
            a = o.extensions;
        if (a && a.length) {
            e[i] = a;
            for (var s = 0; s < a.length; s++) {
                var l = a[s];
                if (t[l]) {
                    var c = n.indexOf(r[t[l]].source),
                        u = n.indexOf(o.source);
                    if (('application/octet-stream' !== t[l] && c > u) || (c === u && 'application/' === t[l].substr(0, 12))) continue;
                }
                t[l] = i;
            }
        }
    });
}
(t.charset = s), (t.charsets = { lookup: s }), (t.contentType = l), (t.extension = c), (t.extensions = Object.create(null)), (t.lookup = u), (t.types = Object.create(null)), d(t.extensions, t.types);
