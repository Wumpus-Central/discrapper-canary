"use strict";
var r = n(89738);
function i() {
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
    d = ["/", "?", "#"],
    c = /^[+a-z0-9A-Z_-]{0,63}$/,
    _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    f = { javascript: !0, "javascript:": !0 },
    E = { javascript: !0, "javascript:": !0 },
    h = {
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
    p = n(591560);
function m(e, t, n) {
    if (e && "object" == typeof e && e instanceof i) return e;
    var r = new i();
    return r.parse(e, t, n), r;
}
(i.prototype.parse = function (e, t, n) {
    if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var i = e.indexOf("?"),
        a = -1 !== i && i < e.indexOf("#") ? "?" : "#",
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
                      t ? (this.query = p.parse(this.search.substr(1))) : (this.query = this.search.substr(1)))
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
        S && !(I && E[I]) && ((g = g.substr(2)), (this.slashes = !0));
    }
    if (!E[I] && (S || (I && !h[I]))) {
        for (var y, N, O = -1, R = 0; R < d.length; R++) {
            var v = g.indexOf(d[R]);
            -1 !== v && (-1 === O || v < O) && (O = v);
        }
        -1 !== (N = -1 === O ? g.lastIndexOf("@") : g.lastIndexOf("@", O)) &&
            ((y = g.slice(0, N)), (g = g.slice(N + 1)), (this.auth = decodeURIComponent(y))),
            (O = -1);
        for (var R = 0; R < u.length; R++) {
            var v = g.indexOf(u[R]);
            -1 !== v && (-1 === O || v < O) && (O = v);
        }
        -1 === O && (O = g.length),
            (this.host = g.slice(0, O)),
            (g = g.slice(O)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
        var C = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!C)
            for (var b = this.hostname.split(/\./), R = 0, D = b.length; R < D; R++) {
                var L = b[R];
                if (L && !L.match(c)) {
                    for (var w = "", M = 0, P = L.length; M < P; M++) L.charCodeAt(M) > 127 ? (w += "x") : (w += L[M]);
                    if (!w.match(c)) {
                        var U = b.slice(0, R),
                            k = b.slice(R + 1),
                            x = L.match(_);
                        x && (U.push(x[1]), k.unshift(x[2])),
                            k.length && (g = "/" + k.join(".") + g),
                            (this.hostname = U.join("."));
                        break;
                    }
                }
            }
        this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
            C || (this.hostname = r.toASCII(this.hostname));
        var G = this.port ? ":" + this.port : "",
            V = this.hostname || "";
        (this.host = V + G),
            (this.href += this.host),
            C && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== g[0] && (g = "/" + g));
    }
    if (!f[T])
        for (var R = 0, D = l.length; R < D; R++) {
            var F = l[R];
            if (-1 !== g.indexOf(F)) {
                var B = encodeURIComponent(F);
                B === F && (B = escape(F)), (g = g.split(F).join(B));
            }
        }
    var H = g.indexOf("#");
    -1 !== H && ((this.hash = g.substr(H)), (g = g.slice(0, H)));
    var Y = g.indexOf("?");
    if (
        (-1 !== Y
            ? ((this.search = g.substr(Y)),
              (this.query = g.substr(Y + 1)),
              t && (this.query = p.parse(this.query)),
              (g = g.slice(0, Y)))
            : t && ((this.search = ""), (this.query = {})),
        g && (this.pathname = g),
        h[T] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
    ) {
        var G = this.pathname || "",
            W = this.search || "";
        this.path = G + W;
    }
    return (this.href = this.format()), this;
}),
    (i.prototype.format = function () {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            i = !1,
            s = "";
        this.host
            ? (i = e + this.host)
            : this.hostname &&
              ((i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
              this.port && (i += ":" + this.port)),
            this.query &&
                "object" == typeof this.query &&
                Object.keys(this.query).length &&
                (s = p.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: !1 }));
        var a = this.search || (s && "?" + s) || "";
        return (
            t && ":" !== t.substr(-1) && (t += ":"),
            this.slashes || ((!t || h[t]) && !1 !== i)
                ? ((i = "//" + (i || "")), n && "/" !== n.charAt(0) && (n = "/" + n))
                : i || (i = ""),
            r && "#" !== r.charAt(0) && (r = "#" + r),
            a && "?" !== a.charAt(0) && (a = "?" + a),
            t +
                i +
                (n = n.replace(/[?#]/g, function (e) {
                    return encodeURIComponent(e);
                })) +
                (a = a.replace("#", "%23")) +
                r
        );
    }),
    (i.prototype.resolve = function (e) {
        return this.resolveObject(m(e, !1, !0)).format();
    }),
    (i.prototype.resolveObject = function (e) {
        if ("string" == typeof e) {
            var t = new i();
            t.parse(e, !1, !0), (e = t);
        }
        for (var n = new i(), r = Object.keys(this), s = 0; s < r.length; s++) {
            var a = r[s];
            n[a] = this[a];
        }
        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
            for (var o = Object.keys(e), l = 0; l < o.length; l++) {
                var u = o[l];
                "protocol" !== u && (n[u] = e[u]);
            }
            return (
                h[n.protocol] && n.hostname && !n.pathname && ((n.pathname = "/"), (n.path = n.pathname)),
                (n.href = n.format()),
                n
            );
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!h[e.protocol]) {
                for (var d = Object.keys(e), c = 0; c < d.length; c++) {
                    var _ = d[c];
                    n[_] = e[_];
                }
                return (n.href = n.format()), n;
            }
            if (((n.protocol = e.protocol), e.host || E[e.protocol])) n.pathname = e.pathname;
            else {
                for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()); );
                e.host || (e.host = ""),
                    e.hostname || (e.hostname = ""),
                    "" !== f[0] && f.unshift(""),
                    f.length < 2 && f.unshift(""),
                    (n.pathname = f.join("/"));
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
                var p = n.pathname || "",
                    m = n.search || "";
                n.path = p + m;
            }
            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var g = n.pathname && "/" === n.pathname.charAt(0),
            A = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
            I = A || g || (n.host && e.pathname),
            T = I,
            S = (n.pathname && n.pathname.split("/")) || [],
            f = (e.pathname && e.pathname.split("/")) || [],
            y = n.protocol && !h[n.protocol];
        if (
            (y &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === S[0] ? (S[0] = n.host) : S.unshift(n.host)),
                (n.host = ""),
                e.protocol &&
                    ((e.hostname = null),
                    (e.port = null),
                    e.host && ("" === f[0] ? (f[0] = e.host) : f.unshift(e.host)),
                    (e.host = null)),
                (I = I && ("" === f[0] || "" === S[0]))),
            A)
        )
            (n.host = e.host || "" === e.host ? e.host : n.host),
                (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (S = f);
        else if (f.length) S || (S = []), S.pop(), (S = S.concat(f)), (n.search = e.search), (n.query = e.query);
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
            var O = S.slice(-1)[0],
                R = ((n.host || e.host || S.length > 1) && ("." === O || ".." === O)) || "" === O,
                v = 0,
                C = S.length;
            C >= 0;
            C--
        )
            "." === (O = S[C]) ? S.splice(C, 1) : ".." === O ? (S.splice(C, 1), v++) : v && (S.splice(C, 1), v--);
        if (!I && !T) for (; v--; ) S.unshift("..");
        I && "" !== S[0] && (!S[0] || "/" !== S[0].charAt(0)) && S.unshift(""),
            R && "/" !== S.join("/").substr(-1) && S.push("");
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
    (i.prototype.parseHost = function () {
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
        return ("string" == typeof e && (e = m(e)), e instanceof i) ? e.format() : i.prototype.format.call(e);
    }),
    (t.Url = i);
