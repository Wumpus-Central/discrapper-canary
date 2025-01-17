var i = r(890308);
function a() {
    (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
}
var s = /^([a-z0-9.+-]+:)/i,
    o = /:[0-9]*$/,
    l = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    u = ["'"].concat(['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t'])),
    c = ['%', '/', '?', ';', '#'].concat(u),
    d = ['/', '?', '#'],
    f = 255,
    _ = /^[+a-z0-9A-Z_-]{0,63}$/,
    h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    p = {
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
function I(e) {
    return ('string' == typeof e && (e = v(e)), e instanceof a) ? e.format() : a.prototype.format.call(e);
}
function T(e, n) {
    return v(e, !1, !0).resolve(n);
}
function b(e, n) {
    return e ? v(e, !1, !0).resolveObject(n) : n;
}
(a.prototype.parse = function (e, n, r) {
    if ('string' != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var a = e.indexOf('?'),
        o = -1 !== a && a < e.indexOf('#') ? '?' : '#',
        v = e.split(o),
        I = /\\/g;
    v[0] = v[0].replace(I, '/');
    var T = (e = v.join(o));
    if (((T = T.trim()), !r && 1 === e.split('#').length)) {
        var b = l.exec(T);
        if (b) return (this.path = T), (this.href = T), (this.pathname = b[1]), b[2] ? ((this.search = b[2]), n ? (this.query = E.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : n && ((this.search = ''), (this.query = {})), this;
    }
    var y = s.exec(T);
    if (y) {
        var S = (y = y[0]).toLowerCase();
        (this.protocol = S), (T = T.substr(y.length));
    }
    if (r || y || T.match(/^\/\/[^@/]+@[^@/]+/)) {
        var A = '//' === T.substr(0, 2);
        A && !(y && m[y]) && ((T = T.substr(2)), (this.slashes = !0));
    }
    if (!m[y] && (A || (y && !g[y]))) {
        for (var N, C, R = -1, O = 0; O < d.length; O++) {
            var D = T.indexOf(d[O]);
            -1 !== D && (-1 === R || D < R) && (R = D);
        }
        -1 !== (C = -1 === R ? T.lastIndexOf('@') : T.lastIndexOf('@', R)) && ((N = T.slice(0, C)), (T = T.slice(C + 1)), (this.auth = decodeURIComponent(N))), (R = -1);
        for (var O = 0; O < c.length; O++) {
            var D = T.indexOf(c[O]);
            -1 !== D && (-1 === R || D < R) && (R = D);
        }
        -1 === R && (R = T.length), (this.host = T.slice(0, R)), (T = T.slice(R)), this.parseHost(), (this.hostname = this.hostname || '');
        var L = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!L) {
            for (var x = this.hostname.split(/\./), O = 0, w = x.length; O < w; O++) {
                var P = x[O];
                if (!!P) {
                    if (!P.match(_)) {
                        for (var M = '', k = 0, U = P.length; k < U; k++) P.charCodeAt(k) > 127 ? (M += 'x') : (M += P[k]);
                        if (!M.match(_)) {
                            var B = x.slice(0, O),
                                G = x.slice(O + 1),
                                Z = P.match(h);
                            Z && (B.push(Z[1]), G.unshift(Z[2])), G.length && (T = '/' + G.join('.') + T), (this.hostname = B.join('.'));
                            break;
                        }
                    }
                }
            }
        }
        this.hostname.length > f ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()), !L && (this.hostname = i.toASCII(this.hostname));
        var F = this.port ? ':' + this.port : '',
            V = this.hostname || '';
        (this.host = V + F), (this.href += this.host), L && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== T[0] && (T = '/' + T));
    }
    if (!p[S])
        for (var O = 0, w = u.length; O < w; O++) {
            var j = u[O];
            if (-1 !== T.indexOf(j)) {
                var H = encodeURIComponent(j);
                H === j && (H = escape(j)), (T = T.split(j).join(H));
            }
        }
    var Y = T.indexOf('#');
    -1 !== Y && ((this.hash = T.substr(Y)), (T = T.slice(0, Y)));
    var W = T.indexOf('?');
    if ((-1 !== W ? ((this.search = T.substr(W)), (this.query = T.substr(W + 1)), n && (this.query = E.parse(this.query)), (T = T.slice(0, W))) : n && ((this.search = ''), (this.query = {})), T && (this.pathname = T), g[S] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search)) {
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
            s = '';
        this.host ? (a = e + this.host) : this.hostname && ((a = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')), this.port && (a += ':' + this.port)),
            this.query &&
                'object' == typeof this.query &&
                Object.keys(this.query).length &&
                (s = E.stringify(this.query, {
                    arrayFormat: 'repeat',
                    addQueryPrefix: !1
                }));
        var o = this.search || (s && '?' + s) || '';
        return (
            n && ':' !== n.substr(-1) && (n += ':'),
            this.slashes || ((!n || g[n]) && !1 !== a) ? ((a = '//' + (a || '')), r && '/' !== r.charAt(0) && (r = '/' + r)) : !a && (a = ''),
            i && '#' !== i.charAt(0) && (i = '#' + i),
            o && '?' !== o.charAt(0) && (o = '?' + o),
            (r = r.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e);
            })),
            n + a + r + (o = o.replace('#', '%23')) + i
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
        for (var r = new a(), i = Object.keys(this), s = 0; s < i.length; s++) {
            var o = i[s];
            r[o] = this[o];
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
                    var _ = d[f];
                    r[_] = e[_];
                }
                return (r.href = r.format()), r;
            }
            if (((r.protocol = e.protocol), e.host || m[e.protocol])) r.pathname = e.pathname;
            else {
                for (var h = (e.pathname || '').split('/'); h.length && !(e.host = h.shift()); );
                !e.host && (e.host = ''), !e.hostname && (e.hostname = ''), '' !== h[0] && h.unshift(''), h.length < 2 && h.unshift(''), (r.pathname = h.join('/'));
            }
            if (((r.search = e.search), (r.query = e.query), (r.host = e.host || ''), (r.auth = e.auth), (r.hostname = e.hostname || e.host), (r.port = e.port), r.pathname || r.search)) {
                var p = r.pathname || '',
                    E = r.search || '';
                r.path = p + E;
            }
            return (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r;
        }
        var v = r.pathname && '/' === r.pathname.charAt(0),
            I = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
            T = I || v || (r.host && e.pathname),
            b = T,
            y = (r.pathname && r.pathname.split('/')) || [],
            h = (e.pathname && e.pathname.split('/')) || [],
            S = r.protocol && !g[r.protocol];
        if ((S && ((r.hostname = ''), (r.port = null), r.host && ('' === y[0] ? (y[0] = r.host) : y.unshift(r.host)), (r.host = ''), e.protocol && ((e.hostname = null), (e.port = null), e.host && ('' === h[0] ? (h[0] = e.host) : h.unshift(e.host)), (e.host = null)), (T = T && ('' === h[0] || '' === y[0]))), I)) (r.host = e.host || '' === e.host ? e.host : r.host), (r.hostname = e.hostname || '' === e.hostname ? e.hostname : r.hostname), (r.search = e.search), (r.query = e.query), (y = h);
        else if (h.length) !y && (y = []), y.pop(), (y = y.concat(h)), (r.search = e.search), (r.query = e.query);
        else if (null != e.search) {
            if (S) {
                (r.host = y.shift()), (r.hostname = r.host);
                var A = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
                A && ((r.auth = A.shift()), (r.hostname = A.shift()), (r.host = r.hostname));
            }
            return (r.search = e.search), (r.query = e.query), (null !== r.pathname || null !== r.search) && (r.path = (r.pathname ? r.pathname : '') + (r.search ? r.search : '')), (r.href = r.format()), r;
        }
        if (!y.length) return (r.pathname = null), r.search ? (r.path = '/' + r.search) : (r.path = null), (r.href = r.format()), r;
        for (var N = y.slice(-1)[0], C = ((r.host || e.host || y.length > 1) && ('.' === N || '..' === N)) || '' === N, R = 0, O = y.length; O >= 0; O--) '.' === (N = y[O]) ? y.splice(O, 1) : '..' === N ? (y.splice(O, 1), R++) : R && (y.splice(O, 1), R--);
        if (!T && !b) for (; R--; R) y.unshift('..');
        T && '' !== y[0] && (!y[0] || '/' !== y[0].charAt(0)) && y.unshift(''), C && '/' !== y.join('/').substr(-1) && y.push('');
        var D = '' === y[0] || (y[0] && '/' === y[0].charAt(0));
        if (S) {
            (r.hostname = D ? '' : y.length ? y.shift() : ''), (r.host = r.hostname);
            var A = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
            A && ((r.auth = A.shift()), (r.hostname = A.shift()), (r.host = r.hostname));
        }
        return (T = T || (r.host && y.length)) && !D && y.unshift(''), y.length > 0 ? (r.pathname = y.join('/')) : ((r.pathname = null), (r.path = null)), (null !== r.pathname || null !== r.search) && (r.path = (r.pathname ? r.pathname : '') + (r.search ? r.search : '')), (r.auth = e.auth || r.auth), (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r;
    }),
    (a.prototype.parseHost = function () {
        var e = this.host,
            n = o.exec(e);
        n && (':' !== (n = n[0]) && (this.port = n.substr(1)), (e = e.substr(0, e.length - n.length))), e && (this.hostname = e);
    }),
    (n.parse = v),
    (n.resolve = T),
    (n.resolveObject = b),
    (n.format = I),
    (n.Url = a);
