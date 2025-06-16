var r = n(444675);
function i(e) {
    if ('string' != typeof e) throw TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
function a(e, t) {
    for (var n, r = '', i = 0, a = -1, o = 0, s = 0; s <= e.length; ++s) {
        if (s < e.length) n = e.charCodeAt(s);
        else if (47 === n) break;
        else n = 47;
        if (47 === n) {
            if (a === s - 1 || 1 === o);
            else if (a !== s - 1 && 2 === o) {
                if (r.length < 2 || 2 !== i || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) {
                    if (r.length > 2) {
                        var l = r.lastIndexOf('/');
                        if (l !== r.length - 1) {
                            -1 === l ? ((r = ''), (i = 0)) : (i = (r = r.slice(0, l)).length - 1 - r.lastIndexOf('/')), (a = s), (o = 0);
                            continue;
                        }
                    } else if (2 === r.length || 1 === r.length) {
                        (r = ''), (i = 0), (a = s), (o = 0);
                        continue;
                    }
                }
                t && (r.length > 0 ? (r += '/..') : (r = '..'), (i = 2));
            } else r.length > 0 ? (r += '/' + e.slice(a + 1, s)) : (r = e.slice(a + 1, s)), (i = s - a - 1);
            (a = s), (o = 0);
        } else 46 === n && -1 !== o ? ++o : (o = -1);
    }
    return r;
}
function o(e, t) {
    var n = t.dir || t.root,
        r = t.base || (t.name || '') + (t.ext || '');
    return n ? (n === t.root ? n + r : n + e + r) : r;
}
var s = {
    resolve: function () {
        for (var e, t, n = '', o = !1, s = arguments.length - 1; s >= -1 && !o; s--) s >= 0 ? (t = arguments[s]) : (void 0 === e && (e = r.cwd()), (t = e)), i(t), 0 !== t.length && ((n = t + '/' + n), (o = 47 === t.charCodeAt(0)));
        if (((n = a(n, !o)), o))
            if (n.length > 0) return '/' + n;
            else return '/';
        return n.length > 0 ? n : '.';
    },
    normalize: function (e) {
        if ((i(e), 0 === e.length)) return '.';
        var t = 47 === e.charCodeAt(0),
            n = 47 === e.charCodeAt(e.length - 1);
        return (0 !== (e = a(e, !t)).length || t || (e = '.'), e.length > 0 && n && (e += '/'), t) ? '/' + e : e;
    },
    isAbsolute: function (e) {
        return i(e), e.length > 0 && 47 === e.charCodeAt(0);
    },
    join: function () {
        if (0 == arguments.length) return '.';
        for (var e, t = 0; t < arguments.length; ++t) {
            var n = arguments[t];
            i(n), n.length > 0 && (void 0 === e ? (e = n) : (e += '/' + n));
        }
        return void 0 === e ? '.' : s.normalize(e);
    },
    relative: function (e, t) {
        if ((i(e), i(t), e === t || (e = s.resolve(e)) === (t = s.resolve(t)))) return '';
        for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
        for (var r = e.length, a = r - n, o = 1; o < t.length && 47 === t.charCodeAt(o); ++o);
        for (var l = t.length - o, c = a < l ? a : l, u = -1, d = 0; d <= c; ++d) {
            if (d === c) {
                if (l > c) {
                    if (47 === t.charCodeAt(o + d)) return t.slice(o + d + 1);
                    else if (0 === d) return t.slice(o + d);
                } else a > c && (47 === e.charCodeAt(n + d) ? (u = d) : 0 === d && (u = 0));
                break;
            }
            var f = e.charCodeAt(n + d);
            if (f !== t.charCodeAt(o + d)) break;
            47 === f && (u = d);
        }
        var _ = '';
        for (d = n + u + 1; d <= r; ++d) (d === r || 47 === e.charCodeAt(d)) && (0 === _.length ? (_ += '..') : (_ += '/..'));
        return _.length > 0 ? _ + t.slice(o + u) : ((o += u), 47 === t.charCodeAt(o) && ++o, t.slice(o));
    },
    _makeLong: function (e) {
        return e;
    },
    dirname: function (e) {
        if ((i(e), 0 === e.length)) return '.';
        for (var t = e.charCodeAt(0), n = 47 === t, r = -1, a = !0, o = e.length - 1; o >= 1; --o)
            if (47 === (t = e.charCodeAt(o))) {
                if (!a) {
                    r = o;
                    break;
                }
            } else a = !1;
        return -1 === r ? (n ? '/' : '.') : n && 1 === r ? '//' : e.slice(0, r);
    },
    basename: function (e, t) {
        if (void 0 !== t && 'string' != typeof t) throw TypeError('"ext" argument must be a string');
        i(e);
        var n,
            r = 0,
            a = -1,
            o = !0;
        if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t.length === e.length && t === e) return '';
            var s = t.length - 1,
                l = -1;
            for (n = e.length - 1; n >= 0; --n) {
                var c = e.charCodeAt(n);
                if (47 === c) {
                    if (!o) {
                        r = n + 1;
                        break;
                    }
                } else -1 === l && ((o = !1), (l = n + 1)), s >= 0 && (c === t.charCodeAt(s) ? -1 == --s && (a = n) : ((s = -1), (a = l)));
            }
            return r === a ? (a = l) : -1 === a && (a = e.length), e.slice(r, a);
        }
        for (n = e.length - 1; n >= 0; --n)
            if (47 === e.charCodeAt(n)) {
                if (!o) {
                    r = n + 1;
                    break;
                }
            } else -1 === a && ((o = !1), (a = n + 1));
        return -1 === a ? '' : e.slice(r, a);
    },
    extname: function (e) {
        i(e);
        for (var t = -1, n = 0, r = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
            var l = e.charCodeAt(s);
            if (47 === l) {
                if (!a) {
                    n = s + 1;
                    break;
                }
                continue;
            }
            -1 === r && ((a = !1), (r = s + 1)), 46 === l ? (-1 === t ? (t = s) : 1 !== o && (o = 1)) : -1 !== t && (o = -1);
        }
        return -1 === t || -1 === r || 0 === o || (1 === o && t === r - 1 && t === n + 1) ? '' : e.slice(t, r);
    },
    format: function (e) {
        if (null === e || 'object' != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
        return o('/', e);
    },
    parse: function (e) {
        i(e);
        var t,
            n = {
                root: '',
                dir: '',
                base: '',
                ext: '',
                name: ''
            };
        if (0 === e.length) return n;
        var r = e.charCodeAt(0),
            a = 47 === r;
        a ? ((n.root = '/'), (t = 1)) : (t = 0);
        for (var o = -1, s = 0, l = -1, c = !0, u = e.length - 1, d = 0; u >= t; --u) {
            if (47 === (r = e.charCodeAt(u))) {
                if (!c) {
                    s = u + 1;
                    break;
                }
                continue;
            }
            -1 === l && ((c = !1), (l = u + 1)), 46 === r ? (-1 === o ? (o = u) : 1 !== d && (d = 1)) : -1 !== o && (d = -1);
        }
        return -1 === o || -1 === l || 0 === d || (1 === d && o === l - 1 && o === s + 1) ? -1 !== l && (0 === s && a ? (n.base = n.name = e.slice(1, l)) : (n.base = n.name = e.slice(s, l))) : (0 === s && a ? ((n.name = e.slice(1, o)), (n.base = e.slice(1, l))) : ((n.name = e.slice(s, o)), (n.base = e.slice(s, l))), (n.ext = e.slice(o, l))), s > 0 ? (n.dir = e.slice(0, s - 1)) : a && (n.dir = '/'), n;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
(s.posix = s), (e.exports = s);
