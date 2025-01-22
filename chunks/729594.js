var i = r(890308);
function a() {
    (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
}
var o = /^([a-z0-9.+-]+:)/i,
    s = /:[0-9]*$/,
    l = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    u = ["'"].concat(['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t'])),
    c = ['%', '/', '?', ';', '#'].concat(u),
    d = ['/', '?', '#'],
    f = 255,
    p = /^[+a-z0-9A-Z_-]{0,63}$/,
    h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    _ = {
        javascript: !0,
        'javascript:': !0
    },
    m = {
        javascript: !0,
        'javascript:': !0
    },
    g = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        'http:': !0,
        'https:': !0,
        'ftp:': !0,
        'gopher:': !0,
        'file:': !0
    },
    E = r(684083);
function v(e, n, r) {
    if (e && 'object' == typeof e && e instanceof a) return e;
    var i = new a();
    return i.parse(e, n, r), i;
}
function y(e) {
    return ('string' == typeof e && (e = v(e)), e instanceof a) ? e.format() : a.prototype.format.call(e);
}
function b(e, n) {
    return v(e, !1, !0).resolve(n);
}
function I(e, n) {
    return e ? v(e, !1, !0).resolveObject(n) : n;
}
(a.prototype.parse = function (e, n, r) {
    if ('string' != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var a = e.indexOf('?'),
        s = -1 !== a && a < e.indexOf('#') ? '?' : '#',
        v = e.split(s),
        y = /\\/g;
    v[0] = v[0].replace(y, '/');
    var b = (e = v.join(s));
    if (((b = b.trim()), !r && 1 === e.split('#').length)) {
        var I = l.exec(b);
        if (I) return (this.path = b), (this.href = b), (this.pathname = I[1]), I[2] ? ((this.search = I[2]), n ? (this.query = E.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : n && ((this.search = ''), (this.query = {})), this;
    }
    var T = o.exec(b);
    if (T) {
        var S = (T = T[0]).toLowerCase();
        (this.protocol = S), (b = b.substr(T.length));
    }
    if (r || T || b.match(/^\/\/[^@/]+@[^@/]+/)) {
        var A = '//' === b.substr(0, 2);
        A && !(T && m[T]) && ((b = b.substr(2)), (this.slashes = !0));
    }
    if (!m[T] && (A || (T && !g[T]))) {
        for (var C, N, R = -1, O = 0; O < d.length; O++) {
            var D = b.indexOf(d[O]);
            -1 !== D && (-1 === R || D < R) && (R = D);
        }
        -1 !== (N = -1 === R ? b.lastIndexOf('@') : b.lastIndexOf('@', R)) && ((C = b.slice(0, N)), (b = b.slice(N + 1)), (this.auth = decodeURIComponent(C))), (R = -1);
        for (var O = 0; O < c.length; O++) {
            var D = b.indexOf(c[O]);
            -1 !== D && (-1 === R || D < R) && (R = D);
        }
        -1 === R && (R = b.length), (this.host = b.slice(0, R)), (b = b.slice(R)), this.parseHost(), (this.hostname = this.hostname || '');
        var x = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!x) {
            for (var L = this.hostname.split(/\./), O = 0, w = L.length; O < w; O++) {
                var P = L[O];
                if (!!P) {
                    if (!P.match(p)) {
                        for (var M = '', k = 0, U = P.length; k < U; k++) P.charCodeAt(k) > 127 ? (M += 'x') : (M += P[k]);
                        if (!M.match(p)) {
                            var B = L.slice(0, O),
                                G = L.slice(O + 1),
                                Z = P.match(h);
                            Z && (B.push(Z[1]), G.unshift(Z[2])), G.length && (b = '/' + G.join('.') + b), (this.hostname = B.join('.'));
                            break;
                        }
                    }
                }
            }
        }
        this.hostname.length > f ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()), !x && (this.hostname = i.toASCII(this.hostname));
        var F = this.port ? ':' + this.port : '',
            V = this.hostname || '';
        (this.host = V + F), (this.href += this.host), x && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== b[0] && (b = '/' + b));
    }
    if (!_[S])
        for (var O = 0, w = u.length; O < w; O++) {
            var j = u[O];
            if (-1 !== b.indexOf(j)) {
                var H = encodeURIComponent(j);
                H === j && (H = escape(j)), (b = b.split(j).join(H));
            }
        }
    var Y = b.indexOf('#');
    -1 !== Y && ((this.hash = b.substr(Y)), (b = b.slice(0, Y)));
    var W = b.indexOf('?');
    if ((-1 !== W ? ((this.search = b.substr(W)), (this.query = b.substr(W + 1)), n && (this.query = E.parse(this.query)), (b = b.slice(0, W))) : n && ((this.search = ''), (this.query = {})), b && (this.pathname = b), g[S] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search)) {
        var F = this.pathname || '',
            K = this.search || '';
        this.path = F + K;
    }
    return (this.href = this.format()), this;
}),
    (a.prototype.format = function () {
        var e = this.auth || '';
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ':') + '@');
        var n = this.protocol || '',
            r = this.pathname || '',
            i = this.hash || '',
            a = !1,
            o = '';
        this.host ? (a = e + this.host) : this.hostname && ((a = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')), this.port && (a += ':' + this.port)),
            this.query &&
                'object' == typeof this.query &&
                Object.keys(this.query).length &&
                (o = E.stringify(this.query, {
                    arrayFormat: 'repeat',
                    addQueryPrefix: !1
                }));
        var s = this.search || (o && '?' + o) || '';
        return (
            n && ':' !== n.substr(-1) && (n += ':'),
            this.slashes || ((!n || g[n]) && !1 !== a) ? ((a = '//' + (a || '')), r && '/' !== r.charAt(0) && (r = '/' + r)) : !a && (a = ''),
            i && '#' !== i.charAt(0) && (i = '#' + i),
            s && '?' !== s.charAt(0) && (s = '?' + s),
            (r = r.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e);
            })),
            n + a + r + (s = s.replace('#', '%23')) + i
        );
    }),
    (a.prototype.resolve = function (e) {
        return this.resolveObject(v(e, !1, !0)).format();
    }),
    (a.prototype.resolveObject = function (e) {
        if ('string' == typeof e) {
            var n = new a();
            n.parse(e, !1, !0), (e = n);
        }
        for (var r = new a(), i = Object.keys(this), o = 0; o < i.length; o++) {
            var s = i[o];
            r[s] = this[s];
        }
        if (((r.hash = e.hash), '' === e.href)) return (r.href = r.format()), r;
        if (e.slashes && !e.protocol) {
            for (var l = Object.keys(e), u = 0; u < l.length; u++) {
                var c = l[u];
                'protocol' !== c && (r[c] = e[c]);
            }
            return g[r.protocol] && r.hostname && !r.pathname && ((r.pathname = '/'), (r.path = r.pathname)), (r.href = r.format()), r;
        }
        if (e.protocol && e.protocol !== r.protocol) {
            if (!g[e.protocol]) {
                for (var d = Object.keys(e), f = 0; f < d.length; f++) {
                    var p = d[f];
                    r[p] = e[p];
                }
                return (r.href = r.format()), r;
            }
            if (((r.protocol = e.protocol), e.host || m[e.protocol])) r.pathname = e.pathname;
            else {
                for (var h = (e.pathname || '').split('/'); h.length && !(e.host = h.shift()); );
                !e.host && (e.host = ''), !e.hostname && (e.hostname = ''), '' !== h[0] && h.unshift(''), h.length < 2 && h.unshift(''), (r.pathname = h.join('/'));
            }
            if (((r.search = e.search), (r.query = e.query), (r.host = e.host || ''), (r.auth = e.auth), (r.hostname = e.hostname || e.host), (r.port = e.port), r.pathname || r.search)) {
                var _ = r.pathname || '',
                    E = r.search || '';
                r.path = _ + E;
            }
            return (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r;
        }
        var v = r.pathname && '/' === r.pathname.charAt(0),
            y = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
            b = y || v || (r.host && e.pathname),
            I = b,
            T = (r.pathname && r.pathname.split('/')) || [],
            h = (e.pathname && e.pathname.split('/')) || [],
            S = r.protocol && !g[r.protocol];
        if ((S && ((r.hostname = ''), (r.port = null), r.host && ('' === T[0] ? (T[0] = r.host) : T.unshift(r.host)), (r.host = ''), e.protocol && ((e.hostname = null), (e.port = null), e.host && ('' === h[0] ? (h[0] = e.host) : h.unshift(e.host)), (e.host = null)), (b = b && ('' === h[0] || '' === T[0]))), y)) (r.host = e.host || '' === e.host ? e.host : r.host), (r.hostname = e.hostname || '' === e.hostname ? e.hostname : r.hostname), (r.search = e.search), (r.query = e.query), (T = h);
        else if (h.length) !T && (T = []), T.pop(), (T = T.concat(h)), (r.search = e.search), (r.query = e.query);
        else if (null != e.search) {
            if (S) {
                (r.host = T.shift()), (r.hostname = r.host);
                var A = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
                A && ((r.auth = A.shift()), (r.hostname = A.shift()), (r.host = r.hostname));
            }
            return (r.search = e.search), (r.query = e.query), (null !== r.pathname || null !== r.search) && (r.path = (r.pathname ? r.pathname : '') + (r.search ? r.search : '')), (r.href = r.format()), r;
        }
        if (!T.length) return (r.pathname = null), r.search ? (r.path = '/' + r.search) : (r.path = null), (r.href = r.format()), r;
        for (var C = T.slice(-1)[0], N = ((r.host || e.host || T.length > 1) && ('.' === C || '..' === C)) || '' === C, R = 0, O = T.length; O >= 0; O--) '.' === (C = T[O]) ? T.splice(O, 1) : '..' === C ? (T.splice(O, 1), R++) : R && (T.splice(O, 1), R--);
        if (!b && !I) for (; R--; R) T.unshift('..');
        b && '' !== T[0] && (!T[0] || '/' !== T[0].charAt(0)) && T.unshift(''), N && '/' !== T.join('/').substr(-1) && T.push('');
        var D = '' === T[0] || (T[0] && '/' === T[0].charAt(0));
        if (S) {
            (r.hostname = D ? '' : T.length ? T.shift() : ''), (r.host = r.hostname);
            var A = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
            A && ((r.auth = A.shift()), (r.hostname = A.shift()), (r.host = r.hostname));
        }
        return (b = b || (r.host && T.length)) && !D && T.unshift(''), T.length > 0 ? (r.pathname = T.join('/')) : ((r.pathname = null), (r.path = null)), (null !== r.pathname || null !== r.search) && (r.path = (r.pathname ? r.pathname : '') + (r.search ? r.search : '')), (r.auth = e.auth || r.auth), (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r;
    }),
    (a.prototype.parseHost = function () {
        var e = this.host,
            n = s.exec(e);
        n && (':' !== (n = n[0]) && (this.port = n.substr(1)), (e = e.substr(0, e.length - n.length))), e && (this.hostname = e);
    }),
    (n.parse = v),
    (n.resolve = b),
    (n.resolveObject = I),
    (n.format = y),
    (n.Url = a);
