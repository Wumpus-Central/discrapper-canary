"use strict";
var i = n(89738);
function r() {
    (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
}
var s = /^([a-z0-9.+-]+:)/i,
    a = /:[0-9]*$/,
    o = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    l = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
    u = ["%", "/", "?", ";", "#"].concat(l),
    c = ["/", "?", "#"],
    d = /^[+a-z0-9A-Z_-]{0,63}$/,
    _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    h = { javascript: !0, "javascript:": !0 },
    f = { javascript: !0, "javascript:": !0 },
    p = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
    },
    E = n(591560);
function m(e, t, n) {
    if (e && "object" == typeof e && e instanceof r) return e;
    var i = new r();
    return i.parse(e, t, n), i;
}
(r.prototype.parse = function (e, t, n) {
    if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var r = e.indexOf("?"),
        a = -1 !== r && r < e.indexOf("#") ? "?" : "#",
        m = e.split(a);
    m[0] = m[0].replace(/\\/g, "/");
    var g = (e = m.join(a));
    if (((g = g.trim()), !n && 1 === e.split("#").length)) {
        var A = o.exec(g);
        if (A)
            return (
                (this.path = g),
                (this.href = g),
                (this.pathname = A[1]),
                A[2]
                    ? ((this.search = A[2]),
                      t ? (this.query = E.parse(this.search.substr(1))) : (this.query = this.search.substr(1)))
                    : t && ((this.search = ""), (this.query = {})),
                this
            );
    }
    var I = s.exec(g);
    if (I) {
        var T = (I = I[0]).toLowerCase();
        (this.protocol = T), (g = g.substr(I.length));
    }
    if (n || I || g.match(/^\/\/[^@/]+@[^@/]+/)) {
        var S = "//" === g.substr(0, 2);
        S && !(I && f[I]) && ((g = g.substr(2)), (this.slashes = !0));
    }
    if (!f[I] && (S || (I && !p[I]))) {
        for (var y, N, v = -1, C = 0; C < c.length; C++) {
            var R = g.indexOf(c[C]);
            -1 !== R && (-1 === v || R < v) && (v = R);
        }
        -1 !== (N = -1 === v ? g.lastIndexOf("@") : g.lastIndexOf("@", v)) &&
            ((y = g.slice(0, N)), (g = g.slice(N + 1)), (this.auth = decodeURIComponent(y))),
            (v = -1);
        for (var C = 0; C < u.length; C++) {
            var R = g.indexOf(u[C]);
            -1 !== R && (-1 === v || R < v) && (v = R);
        }
        -1 === v && (v = g.length),
            (this.host = g.slice(0, v)),
            (g = g.slice(v)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
        var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!O)
            for (var b = this.hostname.split(/\./), C = 0, D = b.length; C < D; C++) {
                var L = b[C];
                if (L && !L.match(d)) {
                    for (var w = "", M = 0, P = L.length; M < P; M++) L.charCodeAt(M) > 127 ? (w += "x") : (w += L[M]);
                    if (!w.match(d)) {
                        var x = b.slice(0, C),
                            k = b.slice(C + 1),
                            U = L.match(_);
                        U && (x.push(U[1]), k.unshift(U[2])),
                            k.length && (g = "/" + k.join(".") + g),
                            (this.hostname = x.join("."));
                        break;
                    }
                }
            }
        this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
            O || (this.hostname = i.toASCII(this.hostname));
        var G = this.port ? ":" + this.port : "",
            F = this.hostname || "";
        (this.host = F + G),
            (this.href += this.host),
            O && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== g[0] && (g = "/" + g));
    }
    if (!h[T])
        for (var C = 0, D = l.length; C < D; C++) {
            var V = l[C];
            if (-1 !== g.indexOf(V)) {
                var B = encodeURIComponent(V);
                B === V && (B = escape(V)), (g = g.split(V).join(B));
            }
        }
    var H = g.indexOf("#");
    -1 !== H && ((this.hash = g.substr(H)), (g = g.slice(0, H)));
    var j = g.indexOf("?");
    if (
        (-1 !== j
            ? ((this.search = g.substr(j)),
              (this.query = g.substr(j + 1)),
              t && (this.query = E.parse(this.query)),
              (g = g.slice(0, j)))
            : t && ((this.search = ""), (this.query = {})),
        g && (this.pathname = g),
        p[T] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
    ) {
        var G = this.pathname || "",
            Y = this.search || "";
        this.path = G + Y;
    }
    return (this.href = this.format()), this;
}),
    (r.prototype.format = function () {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            i = this.hash || "",
            r = !1,
            s = "";
        this.host
            ? (r = e + this.host)
            : this.hostname &&
              ((r = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
              this.port && (r += ":" + this.port)),
            this.query &&
                "object" == typeof this.query &&
                Object.keys(this.query).length &&
                (s = E.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: !1 }));
        var a = this.search || (s && "?" + s) || "";
        return (
            t && ":" !== t.substr(-1) && (t += ":"),
            this.slashes || ((!t || p[t]) && !1 !== r)
                ? ((r = "//" + (r || "")), n && "/" !== n.charAt(0) && (n = "/" + n))
                : r || (r = ""),
            i && "#" !== i.charAt(0) && (i = "#" + i),
            a && "?" !== a.charAt(0) && (a = "?" + a),
            t +
                r +
                (n = n.replace(/[?#]/g, function (e) {
                    return encodeURIComponent(e);
                })) +
                (a = a.replace("#", "%23")) +
                i
        );
    }),
    (r.prototype.resolve = function (e) {
        return this.resolveObject(m(e, !1, !0)).format();
    }),
    (r.prototype.resolveObject = function (e) {
        if ("string" == typeof e) {
            var t = new r();
            t.parse(e, !1, !0), (e = t);
        }
        for (var n = new r(), i = Object.keys(this), s = 0; s < i.length; s++) {
            var a = i[s];
            n[a] = this[a];
        }
        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
            for (var o = Object.keys(e), l = 0; l < o.length; l++) {
                var u = o[l];
                "protocol" !== u && (n[u] = e[u]);
            }
            return (
                p[n.protocol] && n.hostname && !n.pathname && ((n.pathname = "/"), (n.path = n.pathname)),
                (n.href = n.format()),
                n
            );
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!p[e.protocol]) {
                for (var c = Object.keys(e), d = 0; d < c.length; d++) {
                    var _ = c[d];
                    n[_] = e[_];
                }
                return (n.href = n.format()), n;
            }
            if (((n.protocol = e.protocol), e.host || f[e.protocol])) n.pathname = e.pathname;
            else {
                for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()); );
                e.host || (e.host = ""),
                    e.hostname || (e.hostname = ""),
                    "" !== h[0] && h.unshift(""),
                    h.length < 2 && h.unshift(""),
                    (n.pathname = h.join("/"));
            }
            if (
                ((n.search = e.search),
                (n.query = e.query),
                (n.host = e.host || ""),
                (n.auth = e.auth),
                (n.hostname = e.hostname || e.host),
                (n.port = e.port),
                n.pathname || n.search)
            ) {
                var E = n.pathname || "",
                    m = n.search || "";
                n.path = E + m;
            }
            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var g = n.pathname && "/" === n.pathname.charAt(0),
            A = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
            I = A || g || (n.host && e.pathname),
            T = I,
            S = (n.pathname && n.pathname.split("/")) || [],
            h = (e.pathname && e.pathname.split("/")) || [],
            y = n.protocol && !p[n.protocol];
        if (
            (y &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === S[0] ? (S[0] = n.host) : S.unshift(n.host)),
                (n.host = ""),
                e.protocol &&
                    ((e.hostname = null),
                    (e.port = null),
                    e.host && ("" === h[0] ? (h[0] = e.host) : h.unshift(e.host)),
                    (e.host = null)),
                (I = I && ("" === h[0] || "" === S[0]))),
            A)
        )
            (n.host = e.host || "" === e.host ? e.host : n.host),
                (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (S = h);
        else if (h.length) S || (S = []), S.pop(), (S = S.concat(h)), (n.search = e.search), (n.query = e.query);
        else if (null != e.search) {
            if (y) {
                (n.host = S.shift()), (n.hostname = n.host);
                var N = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                N && ((n.auth = N.shift()), (n.hostname = N.shift()), (n.host = n.hostname));
            }
            return (
                (n.search = e.search),
                (n.query = e.query),
                (null !== n.pathname || null !== n.search) &&
                    (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                (n.href = n.format()),
                n
            );
        }
        if (!S.length)
            return (
                (n.pathname = null), n.search ? (n.path = "/" + n.search) : (n.path = null), (n.href = n.format()), n
            );
        for (
            var v = S.slice(-1)[0],
                C = ((n.host || e.host || S.length > 1) && ("." === v || ".." === v)) || "" === v,
                R = 0,
                O = S.length;
            O >= 0;
            O--
        )
            "." === (v = S[O]) ? S.splice(O, 1) : ".." === v ? (S.splice(O, 1), R++) : R && (S.splice(O, 1), R--);
        if (!I && !T) for (; R--; ) S.unshift("..");
        I && "" !== S[0] && (!S[0] || "/" !== S[0].charAt(0)) && S.unshift(""),
            C && "/" !== S.join("/").substr(-1) && S.push("");
        var b = "" === S[0] || (S[0] && "/" === S[0].charAt(0));
        if (y) {
            (n.hostname = b ? "" : S.length ? S.shift() : ""), (n.host = n.hostname);
            var N = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            N && ((n.auth = N.shift()), (n.hostname = N.shift()), (n.host = n.hostname));
        }
        return (
            (I = I || (n.host && S.length)) && !b && S.unshift(""),
            S.length > 0 ? (n.pathname = S.join("/")) : ((n.pathname = null), (n.path = null)),
            (null !== n.pathname || null !== n.search) &&
                (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.auth = e.auth || n.auth),
            (n.slashes = n.slashes || e.slashes),
            (n.href = n.format()),
            n
        );
    }),
    (r.prototype.parseHost = function () {
        var e = this.host,
            t = a.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e);
    }),
    (t.parse = m),
    (t.resolve = function (e, t) {
        return m(e, !1, !0).resolve(t);
    }),
    (t.resolveObject = function (e, t) {
        return e ? m(e, !1, !0).resolveObject(t) : t;
    }),
    (t.format = function (e) {
        return ("string" == typeof e && (e = m(e)), e instanceof r) ? e.format() : r.prototype.format.call(e);
    }),
    (t.Url = r);
