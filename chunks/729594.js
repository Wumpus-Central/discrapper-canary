var r = n(890308);
function i() {
    (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
}
var a = /^([a-z0-9.+-]+:)/i,
    o = /:[0-9]*$/,
    s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    l = ["'"].concat(['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t'])),
    c = ['%', '/', '?', ';', '#'].concat(l),
    u = ['/', '?', '#'],
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
    g = n(699901);
function E(e, t, n) {
    if (e && 'object' == typeof e && e instanceof i) return e;
    var r = new i();
    return r.parse(e, t, n), r;
}
function b(e) {
    return ('string' == typeof e && (e = E(e)), e instanceof i) ? e.format() : i.prototype.format.call(e);
}
function y(e, t) {
    return E(e, !1, !0).resolve(t);
}
function v(e, t) {
    return e ? E(e, !1, !0).resolveObject(t) : t;
}
(i.prototype.parse = function (e, t, n) {
    if ('string' != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var i = e.indexOf('?'),
        o = -1 !== i && i < e.indexOf('#') ? '?' : '#',
        E = e.split(o),
        b = /\\/g;
    E[0] = E[0].replace(b, '/');
    var y = (e = E.join(o));
    if (((y = y.trim()), !n && 1 === e.split('#').length)) {
        var v = s.exec(y);
        if (v) return (this.path = y), (this.href = y), (this.pathname = v[1]), v[2] ? ((this.search = v[2]), t ? (this.query = g.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : t && ((this.search = ''), (this.query = {})), this;
    }
    var O = a.exec(y);
    if (O) {
        var I = (O = O[0]).toLowerCase();
        (this.protocol = I), (y = y.substr(O.length));
    }
    if (n || O || y.match(/^\/\/[^@/]+@[^@/]+/)) {
        var S = '//' === y.substr(0, 2);
        S && !(O && h[O]) && ((y = y.substr(2)), (this.slashes = !0));
    }
    if (!h[O] && (S || (O && !m[O]))) {
        for (var T, A, N = -1, C = 0; C < u.length; C++) {
            var R = y.indexOf(u[C]);
            -1 !== R && (-1 === N || R < N) && (N = R);
        }
        -1 !== (A = -1 === N ? y.lastIndexOf('@') : y.lastIndexOf('@', N)) && ((T = y.slice(0, A)), (y = y.slice(A + 1)), (this.auth = decodeURIComponent(T))), (N = -1);
        for (var C = 0; C < c.length; C++) {
            var R = y.indexOf(c[C]);
            -1 !== R && (-1 === N || R < N) && (N = R);
        }
        -1 === N && (N = y.length), (this.host = y.slice(0, N)), (y = y.slice(N)), this.parseHost(), (this.hostname = this.hostname || '');
        var P = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!P)
            for (var w = this.hostname.split(/\./), C = 0, D = w.length; C < D; C++) {
                var L = w[C];
                if (L && !L.match(f)) {
                    for (var x = '', M = 0, k = L.length; M < k; M++) L.charCodeAt(M) > 127 ? (x += 'x') : (x += L[M]);
                    if (!x.match(f)) {
                        var j = w.slice(0, C),
                            U = w.slice(C + 1),
                            G = L.match(_);
                        G && (j.push(G[1]), U.unshift(G[2])), U.length && (y = '/' + U.join('.') + y), (this.hostname = j.join('.'));
                        break;
                    }
                }
            }
        this.hostname.length > d ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()), P || (this.hostname = r.toASCII(this.hostname));
        var B = this.port ? ':' + this.port : '',
            V = this.hostname || '';
        (this.host = V + B), (this.href += this.host), P && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== y[0] && (y = '/' + y));
    }
    if (!p[I])
        for (var C = 0, D = l.length; C < D; C++) {
            var F = l[C];
            if (-1 !== y.indexOf(F)) {
                var Z = encodeURIComponent(F);
                Z === F && (Z = escape(F)), (y = y.split(F).join(Z));
            }
        }
    var H = y.indexOf('#');
    -1 !== H && ((this.hash = y.substr(H)), (y = y.slice(0, H)));
    var Y = y.indexOf('?');
    if ((-1 !== Y ? ((this.search = y.substr(Y)), (this.query = y.substr(Y + 1)), t && (this.query = g.parse(this.query)), (y = y.slice(0, Y))) : t && ((this.search = ''), (this.query = {})), y && (this.pathname = y), m[I] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search)) {
        var B = this.pathname || '',
            W = this.search || '';
        this.path = B + W;
    }
    return (this.href = this.format()), this;
}),
    (i.prototype.format = function () {
        var e = this.auth || '';
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ':') + '@');
        var t = this.protocol || '',
            n = this.pathname || '',
            r = this.hash || '',
            i = !1,
            a = '';
        this.host ? (i = e + this.host) : this.hostname && ((i = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')), this.port && (i += ':' + this.port)),
            this.query &&
                'object' == typeof this.query &&
                Object.keys(this.query).length &&
                (a = g.stringify(this.query, {
                    arrayFormat: 'repeat',
                    addQueryPrefix: !1
                }));
        var o = this.search || (a && '?' + a) || '';
        return (
            t && ':' !== t.substr(-1) && (t += ':'),
            this.slashes || ((!t || m[t]) && !1 !== i) ? ((i = '//' + (i || '')), n && '/' !== n.charAt(0) && (n = '/' + n)) : i || (i = ''),
            r && '#' !== r.charAt(0) && (r = '#' + r),
            o && '?' !== o.charAt(0) && (o = '?' + o),
            t +
                i +
                (n = n.replace(/[?#]/g, function (e) {
                    return encodeURIComponent(e);
                })) +
                (o = o.replace('#', '%23')) +
                r
        );
    }),
    (i.prototype.resolve = function (e) {
        return this.resolveObject(E(e, !1, !0)).format();
    }),
    (i.prototype.resolveObject = function (e) {
        if ('string' == typeof e) {
            var t = new i();
            t.parse(e, !1, !0), (e = t);
        }
        for (var n = new i(), r = Object.keys(this), a = 0; a < r.length; a++) {
            var o = r[a];
            n[o] = this[o];
        }
        if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), l = 0; l < s.length; l++) {
                var c = s[l];
                'protocol' !== c && (n[c] = e[c]);
            }
            return m[n.protocol] && n.hostname && !n.pathname && ((n.pathname = '/'), (n.path = n.pathname)), (n.href = n.format()), n;
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!m[e.protocol]) {
                for (var u = Object.keys(e), d = 0; d < u.length; d++) {
                    var f = u[d];
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
            b = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
            y = b || E || (n.host && e.pathname),
            v = y,
            O = (n.pathname && n.pathname.split('/')) || [],
            _ = (e.pathname && e.pathname.split('/')) || [],
            I = n.protocol && !m[n.protocol];
        if ((I && ((n.hostname = ''), (n.port = null), n.host && ('' === O[0] ? (O[0] = n.host) : O.unshift(n.host)), (n.host = ''), e.protocol && ((e.hostname = null), (e.port = null), e.host && ('' === _[0] ? (_[0] = e.host) : _.unshift(e.host)), (e.host = null)), (y = y && ('' === _[0] || '' === O[0]))), b)) (n.host = e.host || '' === e.host ? e.host : n.host), (n.hostname = e.hostname || '' === e.hostname ? e.hostname : n.hostname), (n.search = e.search), (n.query = e.query), (O = _);
        else if (_.length) O || (O = []), O.pop(), (O = O.concat(_)), (n.search = e.search), (n.query = e.query);
        else if (null != e.search) {
            if (I) {
                (n.host = O.shift()), (n.hostname = n.host);
                var S = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
                S && ((n.auth = S.shift()), (n.hostname = S.shift()), (n.host = n.hostname));
            }
            return (n.search = e.search), (n.query = e.query), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.href = n.format()), n;
        }
        if (!O.length) return (n.pathname = null), n.search ? (n.path = '/' + n.search) : (n.path = null), (n.href = n.format()), n;
        for (var T = O.slice(-1)[0], A = ((n.host || e.host || O.length > 1) && ('.' === T || '..' === T)) || '' === T, N = 0, C = O.length; C >= 0; C--) '.' === (T = O[C]) ? O.splice(C, 1) : '..' === T ? (O.splice(C, 1), N++) : N && (O.splice(C, 1), N--);
        if (!y && !v) for (; N--; ) O.unshift('..');
        y && '' !== O[0] && (!O[0] || '/' !== O[0].charAt(0)) && O.unshift(''), A && '/' !== O.join('/').substr(-1) && O.push('');
        var R = '' === O[0] || (O[0] && '/' === O[0].charAt(0));
        if (I) {
            (n.hostname = R ? '' : O.length ? O.shift() : ''), (n.host = n.hostname);
            var S = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
            S && ((n.auth = S.shift()), (n.hostname = S.shift()), (n.host = n.hostname));
        }
        return (y = y || (n.host && O.length)) && !R && O.unshift(''), O.length > 0 ? (n.pathname = O.join('/')) : ((n.pathname = null), (n.path = null)), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.auth = e.auth || n.auth), (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
    }),
    (i.prototype.parseHost = function () {
        var e = this.host,
            t = o.exec(e);
        t && (':' !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
    }),
    (t.parse = E),
    (t.resolve = y),
    (t.resolveObject = v),
    (t.format = b),
    (t.Url = i);
