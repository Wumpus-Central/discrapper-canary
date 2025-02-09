var i = n(890308);
function r() {
    (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
}
var a = /^([a-z0-9.+-]+:)/i,
    s = /:[0-9]*$/,
    o = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    l = ["'"].concat(['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t'])),
    u = ['%', '/', '?', ';', '#'].concat(l),
    c = ['/', '?', '#'],
    d = 255,
    f = /^[+a-z0-9A-Z_-]{0,63}$/,
    _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    p = {
        javascript: !0,
        'javascript:': !0
    },
    h = {
        javascript: !0,
        'javascript:': !0
    },
    m = {
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
    g = n(684083);
function E(e, t, n) {
    if (e && 'object' == typeof e && e instanceof r) return e;
    var i = new r();
    return i.parse(e, t, n), i;
}
function v(e) {
    return ('string' == typeof e && (e = E(e)), e instanceof r) ? e.format() : r.prototype.format.call(e);
}
function y(e, t) {
    return E(e, !1, !0).resolve(t);
}
function I(e, t) {
    return e ? E(e, !1, !0).resolveObject(t) : t;
}
(r.prototype.parse = function (e, t, n) {
    if ('string' != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var r = e.indexOf('?'),
        s = -1 !== r && r < e.indexOf('#') ? '?' : '#',
        E = e.split(s),
        v = /\\/g;
    E[0] = E[0].replace(v, '/');
    var y = (e = E.join(s));
    if (((y = y.trim()), !n && 1 === e.split('#').length)) {
        var I = o.exec(y);
        if (I) return (this.path = y), (this.href = y), (this.pathname = I[1]), I[2] ? ((this.search = I[2]), t ? (this.query = g.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : t && ((this.search = ''), (this.query = {})), this;
    }
    var T = a.exec(y);
    if (T) {
        var b = (T = T[0]).toLowerCase();
        (this.protocol = b), (y = y.substr(T.length));
    }
    if (n || T || y.match(/^\/\/[^@/]+@[^@/]+/)) {
        var S = '//' === y.substr(0, 2);
        S && !(T && h[T]) && ((y = y.substr(2)), (this.slashes = !0));
    }
    if (!h[T] && (S || (T && !m[T]))) {
        for (var A, N, C = -1, R = 0; R < c.length; R++) {
            var O = y.indexOf(c[R]);
            -1 !== O && (-1 === C || O < C) && (C = O);
        }
        -1 !== (N = -1 === C ? y.lastIndexOf('@') : y.lastIndexOf('@', C)) && ((A = y.slice(0, N)), (y = y.slice(N + 1)), (this.auth = decodeURIComponent(A))), (C = -1);
        for (var R = 0; R < u.length; R++) {
            var O = y.indexOf(u[R]);
            -1 !== O && (-1 === C || O < C) && (C = O);
        }
        -1 === C && (C = y.length), (this.host = y.slice(0, C)), (y = y.slice(C)), this.parseHost(), (this.hostname = this.hostname || '');
        var D = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!D)
            for (var L = this.hostname.split(/\./), R = 0, x = L.length; R < x; R++) {
                var w = L[R];
                if (w && !w.match(f)) {
                    for (var P = '', M = 0, k = w.length; M < k; M++) w.charCodeAt(M) > 127 ? (P += 'x') : (P += w[M]);
                    if (!P.match(f)) {
                        var U = L.slice(0, R),
                            G = L.slice(R + 1),
                            B = w.match(_);
                        B && (U.push(B[1]), G.unshift(B[2])), G.length && (y = '/' + G.join('.') + y), (this.hostname = U.join('.'));
                        break;
                    }
                }
            }
        this.hostname.length > d ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()), D || (this.hostname = i.toASCII(this.hostname));
        var Z = this.port ? ':' + this.port : '',
            F = this.hostname || '';
        (this.host = F + Z), (this.href += this.host), D && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== y[0] && (y = '/' + y));
    }
    if (!p[b])
        for (var R = 0, x = l.length; R < x; R++) {
            var V = l[R];
            if (-1 !== y.indexOf(V)) {
                var j = encodeURIComponent(V);
                j === V && (j = escape(V)), (y = y.split(V).join(j));
            }
        }
    var H = y.indexOf('#');
    -1 !== H && ((this.hash = y.substr(H)), (y = y.slice(0, H)));
    var Y = y.indexOf('?');
    if ((-1 !== Y ? ((this.search = y.substr(Y)), (this.query = y.substr(Y + 1)), t && (this.query = g.parse(this.query)), (y = y.slice(0, Y))) : t && ((this.search = ''), (this.query = {})), y && (this.pathname = y), m[b] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search)) {
        var Z = this.pathname || '',
            W = this.search || '';
        this.path = Z + W;
    }
    return (this.href = this.format()), this;
}),
    (r.prototype.format = function () {
        var e = this.auth || '';
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ':') + '@');
        var t = this.protocol || '',
            n = this.pathname || '',
            i = this.hash || '',
            r = !1,
            a = '';
        this.host ? (r = e + this.host) : this.hostname && ((r = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')), this.port && (r += ':' + this.port)),
            this.query &&
                'object' == typeof this.query &&
                Object.keys(this.query).length &&
                (a = g.stringify(this.query, {
                    arrayFormat: 'repeat',
                    addQueryPrefix: !1
                }));
        var s = this.search || (a && '?' + a) || '';
        return (
            t && ':' !== t.substr(-1) && (t += ':'),
            this.slashes || ((!t || m[t]) && !1 !== r) ? ((r = '//' + (r || '')), n && '/' !== n.charAt(0) && (n = '/' + n)) : r || (r = ''),
            i && '#' !== i.charAt(0) && (i = '#' + i),
            s && '?' !== s.charAt(0) && (s = '?' + s),
            t +
                r +
                (n = n.replace(/[?#]/g, function (e) {
                    return encodeURIComponent(e);
                })) +
                (s = s.replace('#', '%23')) +
                i
        );
    }),
    (r.prototype.resolve = function (e) {
        return this.resolveObject(E(e, !1, !0)).format();
    }),
    (r.prototype.resolveObject = function (e) {
        if ('string' == typeof e) {
            var t = new r();
            t.parse(e, !1, !0), (e = t);
        }
        for (var n = new r(), i = Object.keys(this), a = 0; a < i.length; a++) {
            var s = i[a];
            n[s] = this[s];
        }
        if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
            for (var o = Object.keys(e), l = 0; l < o.length; l++) {
                var u = o[l];
                'protocol' !== u && (n[u] = e[u]);
            }
            return m[n.protocol] && n.hostname && !n.pathname && ((n.pathname = '/'), (n.path = n.pathname)), (n.href = n.format()), n;
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!m[e.protocol]) {
                for (var c = Object.keys(e), d = 0; d < c.length; d++) {
                    var f = c[d];
                    n[f] = e[f];
                }
                return (n.href = n.format()), n;
            }
            if (((n.protocol = e.protocol), e.host || h[e.protocol])) n.pathname = e.pathname;
            else {
                for (var _ = (e.pathname || '').split('/'); _.length && !(e.host = _.shift()); );
                e.host || (e.host = ''), e.hostname || (e.hostname = ''), '' !== _[0] && _.unshift(''), _.length < 2 && _.unshift(''), (n.pathname = _.join('/'));
            }
            if (((n.search = e.search), (n.query = e.query), (n.host = e.host || ''), (n.auth = e.auth), (n.hostname = e.hostname || e.host), (n.port = e.port), n.pathname || n.search)) {
                var p = n.pathname || '',
                    g = n.search || '';
                n.path = p + g;
            }
            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var E = n.pathname && '/' === n.pathname.charAt(0),
            v = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
            y = v || E || (n.host && e.pathname),
            I = y,
            T = (n.pathname && n.pathname.split('/')) || [],
            _ = (e.pathname && e.pathname.split('/')) || [],
            b = n.protocol && !m[n.protocol];
        if ((b && ((n.hostname = ''), (n.port = null), n.host && ('' === T[0] ? (T[0] = n.host) : T.unshift(n.host)), (n.host = ''), e.protocol && ((e.hostname = null), (e.port = null), e.host && ('' === _[0] ? (_[0] = e.host) : _.unshift(e.host)), (e.host = null)), (y = y && ('' === _[0] || '' === T[0]))), v)) (n.host = e.host || '' === e.host ? e.host : n.host), (n.hostname = e.hostname || '' === e.hostname ? e.hostname : n.hostname), (n.search = e.search), (n.query = e.query), (T = _);
        else if (_.length) T || (T = []), T.pop(), (T = T.concat(_)), (n.search = e.search), (n.query = e.query);
        else if (null != e.search) {
            if (b) {
                (n.host = T.shift()), (n.hostname = n.host);
                var S = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
                S && ((n.auth = S.shift()), (n.hostname = S.shift()), (n.host = n.hostname));
            }
            return (n.search = e.search), (n.query = e.query), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.href = n.format()), n;
        }
        if (!T.length) return (n.pathname = null), n.search ? (n.path = '/' + n.search) : (n.path = null), (n.href = n.format()), n;
        for (var A = T.slice(-1)[0], N = ((n.host || e.host || T.length > 1) && ('.' === A || '..' === A)) || '' === A, C = 0, R = T.length; R >= 0; R--) '.' === (A = T[R]) ? T.splice(R, 1) : '..' === A ? (T.splice(R, 1), C++) : C && (T.splice(R, 1), C--);
        if (!y && !I) for (; C--; C) T.unshift('..');
        y && '' !== T[0] && (!T[0] || '/' !== T[0].charAt(0)) && T.unshift(''), N && '/' !== T.join('/').substr(-1) && T.push('');
        var O = '' === T[0] || (T[0] && '/' === T[0].charAt(0));
        if (b) {
            (n.hostname = O ? '' : T.length ? T.shift() : ''), (n.host = n.hostname);
            var S = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
            S && ((n.auth = S.shift()), (n.hostname = S.shift()), (n.host = n.hostname));
        }
        return (y = y || (n.host && T.length)) && !O && T.unshift(''), T.length > 0 ? (n.pathname = T.join('/')) : ((n.pathname = null), (n.path = null)), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.auth = e.auth || n.auth), (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
    }),
    (r.prototype.parseHost = function () {
        var e = this.host,
            t = s.exec(e);
        t && (':' !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
    }),
    (t.parse = E),
    (t.resolve = y),
    (t.resolveObject = I),
    (t.format = v),
    (t.Url = r);
