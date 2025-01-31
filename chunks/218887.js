var i = n(444675);
function r(e) {
    if ('string' != typeof e) throw TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
function a(e, t) {
    for (var n, i = '', r = 0, a = -1, s = 0, o = 0; o <= e.length; ++o) {
        if (o < e.length) n = e.charCodeAt(o);
        else if (47 === n) break;
        else n = 47;
        if (47 === n) {
            if (a === o - 1 || 1 === s);
            else if (a !== o - 1 && 2 === s) {
                if (i.length < 2 || 2 !== r || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                    if (i.length > 2) {
                        var l = i.lastIndexOf('/');
                        if (l !== i.length - 1) {
                            -1 === l ? ((i = ''), (r = 0)) : (r = (i = i.slice(0, l)).length - 1 - i.lastIndexOf('/')), (a = o), (s = 0);
                            continue;
                        }
                    } else if (2 === i.length || 1 === i.length) {
                        (i = ''), (r = 0), (a = o), (s = 0);
                        continue;
                    }
                }
                t && (i.length > 0 ? (i += '/..') : (i = '..'), (r = 2));
            } else i.length > 0 ? (i += '/' + e.slice(a + 1, o)) : (i = e.slice(a + 1, o)), (r = o - a - 1);
            (a = o), (s = 0);
        } else 46 === n && -1 !== s ? ++s : (s = -1);
    }
    return i;
}
function s(e, t) {
    var n = t.dir || t.root,
        i = t.base || (t.name || '') + (t.ext || '');
    return n ? (n === t.root ? n + i : n + e + i) : i;
}
var o = {
    resolve: function () {
        for (var e, t, n = '', s = !1, o = arguments.length - 1; o >= -1 && !s; o--) o >= 0 ? (t = arguments[o]) : (void 0 === e && (e = i.cwd()), (t = e)), r(t), 0 !== t.length && ((n = t + '/' + n), (s = 47 === t.charCodeAt(0)));
        return ((n = a(n, !s)), s) ? (n.length > 0 ? '/' + n : '/') : n.length > 0 ? n : '.';
    },
    normalize: function (e) {
        if ((r(e), 0 === e.length)) return '.';
        var t = 47 === e.charCodeAt(0),
            n = 47 === e.charCodeAt(e.length - 1);
        return (0 !== (e = a(e, !t)).length || t || (e = '.'), e.length > 0 && n && (e += '/'), t) ? '/' + e : e;
    },
    isAbsolute: function (e) {
        return r(e), e.length > 0 && 47 === e.charCodeAt(0);
    },
    join: function () {
        if (0 == arguments.length) return '.';
        for (var e, t = 0; t < arguments.length; ++t) {
            var n = arguments[t];
            r(n), n.length > 0 && (void 0 === e ? (e = n) : (e += '/' + n));
        }
        return void 0 === e ? '.' : o.normalize(e);
    },
    relative: function (e, t) {
        if ((r(e), r(t), e === t || (e = o.resolve(e)) === (t = o.resolve(t)))) return '';
        for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
        for (var i = e.length, a = i - n, s = 1; s < t.length && 47 === t.charCodeAt(s); ++s);
        for (var l = t.length - s, u = a < l ? a : l, c = -1, d = 0; d <= u; ++d) {
            if (d === u) {
                if (l > u) {
                    if (47 === t.charCodeAt(s + d)) return t.slice(s + d + 1);
                    if (0 === d) return t.slice(s + d);
                } else a > u && (47 === e.charCodeAt(n + d) ? (c = d) : 0 === d && (c = 0));
                break;
            }
            var f = e.charCodeAt(n + d);
            if (f !== t.charCodeAt(s + d)) break;
            47 === f && (c = d);
        }
        var _ = '';
        for (d = n + c + 1; d <= i; ++d) (d === i || 47 === e.charCodeAt(d)) && (0 === _.length ? (_ += '..') : (_ += '/..'));
        return _.length > 0 ? _ + t.slice(s + c) : ((s += c), 47 === t.charCodeAt(s) && ++s, t.slice(s));
    },
    _makeLong: function (e) {
        return e;
    },
    dirname: function (e) {
        if ((r(e), 0 === e.length)) return '.';
        for (var t = e.charCodeAt(0), n = 47 === t, i = -1, a = !0, s = e.length - 1; s >= 1; --s)
            if (47 === (t = e.charCodeAt(s))) {
                if (!a) {
                    i = s;
                    break;
                }
            } else a = !1;
        return -1 === i ? (n ? '/' : '.') : n && 1 === i ? '//' : e.slice(0, i);
    },
    basename: function (e, t) {
        if (void 0 !== t && 'string' != typeof t) throw TypeError('"ext" argument must be a string');
        r(e);
        var n,
            i = 0,
            a = -1,
            s = !0;
        if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t.length === e.length && t === e) return '';
            var o = t.length - 1,
                l = -1;
            for (n = e.length - 1; n >= 0; --n) {
                var u = e.charCodeAt(n);
                if (47 === u) {
                    if (!s) {
                        i = n + 1;
                        break;
                    }
                } else -1 === l && ((s = !1), (l = n + 1)), o >= 0 && (u === t.charCodeAt(o) ? -1 == --o && (a = n) : ((o = -1), (a = l)));
            }
            return i === a ? (a = l) : -1 === a && (a = e.length), e.slice(i, a);
        }
        for (n = e.length - 1; n >= 0; --n)
            if (47 === e.charCodeAt(n)) {
                if (!s) {
                    i = n + 1;
                    break;
                }
            } else -1 === a && ((s = !1), (a = n + 1));
        return -1 === a ? '' : e.slice(i, a);
    },
    extname: function (e) {
        r(e);
        for (var t = -1, n = 0, i = -1, a = !0, s = 0, o = e.length - 1; o >= 0; --o) {
            var l = e.charCodeAt(o);
            if (47 === l) {
                if (!a) {
                    n = o + 1;
                    break;
                }
                continue;
            }
            -1 === i && ((a = !1), (i = o + 1)), 46 === l ? (-1 === t ? (t = o) : 1 !== s && (s = 1)) : -1 !== t && (s = -1);
        }
        return -1 === t || -1 === i || 0 === s || (1 === s && t === i - 1 && t === n + 1) ? '' : e.slice(t, i);
    },
    format: function (e) {
        if (null === e || 'object' != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
        return s('/', e);
    },
    parse: function (e) {
        r(e);
        var t,
            n = {
                root: '',
                dir: '',
                base: '',
                ext: '',
                name: ''
            };
        if (0 === e.length) return n;
        var i = e.charCodeAt(0),
            a = 47 === i;
        a ? ((n.root = '/'), (t = 1)) : (t = 0);
        for (var s = -1, o = 0, l = -1, u = !0, c = e.length - 1, d = 0; c >= t; --c) {
            if (47 === (i = e.charCodeAt(c))) {
                if (!u) {
                    o = c + 1;
                    break;
                }
                continue;
            }
            -1 === l && ((u = !1), (l = c + 1)), 46 === i ? (-1 === s ? (s = c) : 1 !== d && (d = 1)) : -1 !== s && (d = -1);
        }
        return -1 === s || -1 === l || 0 === d || (1 === d && s === l - 1 && s === o + 1) ? -1 !== l && (0 === o && a ? (n.base = n.name = e.slice(1, l)) : (n.base = n.name = e.slice(o, l))) : (0 === o && a ? ((n.name = e.slice(1, s)), (n.base = e.slice(1, l))) : ((n.name = e.slice(o, s)), (n.base = e.slice(o, l))), (n.ext = e.slice(s, l))), o > 0 ? (n.dir = e.slice(0, o - 1)) : a && (n.dir = '/'), n;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
(o.posix = o), (e.exports = o);
