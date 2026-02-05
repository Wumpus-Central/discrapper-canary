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
var a = /^([a-z0-9.+-]+:)/i,
    s = /:[0-9]*$/,
    o = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    l = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
    u = ["%", "/", "?", ";", "#"].concat(l),
    c = ["/", "?", "#"],
    d = 255,
    _ = /^[+a-z0-9A-Z_-]{0,63}$/,
    f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    p = { javascript: !0, "javascript:": !0 },
    h = { javascript: !0, "javascript:": !0 },
    m = {
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
    g = n(591560);
function E(e, t, n) {
    if (e && "object" == typeof e && e instanceof i) return e;
    var r = new i();
    return r.parse(e, t, n), r;
}
function A(e) {
    return ("string" == typeof e && (e = E(e)), e instanceof i) ? e.format() : i.prototype.format.call(e);
}
function I(e, t) {
    return E(e, !1, !0).resolve(t);
}
function T(e, t) {
    return e ? E(e, !1, !0).resolveObject(t) : t;
}
(i.prototype.parse = function (e, t, n) {
    if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var i = e.indexOf("?"),
        s = -1 !== i && i < e.indexOf("#") ? "?" : "#",
        E = e.split(s),
        A = /\\/g;
    E[0] = E[0].replace(A, "/");
    var I = (e = E.join(s));
    if (((I = I.trim()), !n && 1 === e.split("#").length)) {
        var T = o.exec(I);
        if (T)
            return (
                (this.path = I),
                (this.href = I),
                (this.pathname = T[1]),
                T[2]
                    ? ((this.search = T[2]),
                      t ? (this.query = g.parse(this.search.substr(1))) : (this.query = this.search.substr(1)))
                    : t && ((this.search = ""), (this.query = {})),
                this
            );
    }
    var y = a.exec(I);
    if (y) {
        var S = (y = y[0]).toLowerCase();
        (this.protocol = S), (I = I.substr(y.length));
    }
    if (n || y || I.match(/^\/\/[^@/]+@[^@/]+/)) {
        var v = "//" === I.substr(0, 2);
        v && !(y && h[y]) && ((I = I.substr(2)), (this.slashes = !0));
    }
    if (!h[y] && (v || (y && !m[y]))) {
        for (var C, b, N = -1, R = 0; R < c.length; R++) {
            var O = I.indexOf(c[R]);
            -1 !== O && (-1 === N || O < N) && (N = O);
        }
        -1 !== (b = -1 === N ? I.lastIndexOf("@") : I.lastIndexOf("@", N)) &&
            ((C = I.slice(0, b)), (I = I.slice(b + 1)), (this.auth = decodeURIComponent(C))),
            (N = -1);
        for (var R = 0; R < u.length; R++) {
            var O = I.indexOf(u[R]);
            -1 !== O && (-1 === N || O < N) && (N = O);
        }
        -1 === N && (N = I.length),
            (this.host = I.slice(0, N)),
            (I = I.slice(N)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
        var D = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!D)
            for (var L = this.hostname.split(/\./), R = 0, w = L.length; R < w; R++) {
                var x = L[R];
                if (x && !x.match(_)) {
                    for (var P = "", M = 0, k = x.length; M < k; M++) x.charCodeAt(M) > 127 ? (P += "x") : (P += x[M]);
                    if (!P.match(_)) {
                        var U = L.slice(0, R),
                            G = L.slice(R + 1),
                            V = x.match(f);
                        V && (U.push(V[1]), G.unshift(V[2])),
                            G.length && (I = "/" + G.join(".") + I),
                            (this.hostname = U.join("."));
                        break;
                    }
                }
            }
        this.hostname.length > d ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
            D || (this.hostname = r.toASCII(this.hostname));
        var F = this.port ? ":" + this.port : "",
            B = this.hostname || "";
        (this.host = B + F),
            (this.href += this.host),
            D && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== I[0] && (I = "/" + I));
    }
    if (!p[S])
        for (var R = 0, w = l.length; R < w; R++) {
            var j = l[R];
            if (-1 !== I.indexOf(j)) {
                var H = encodeURIComponent(j);
                H === j && (H = escape(j)), (I = I.split(j).join(H));
            }
        }
    var Y = I.indexOf("#");
    -1 !== Y && ((this.hash = I.substr(Y)), (I = I.slice(0, Y)));
    var W = I.indexOf("?");
    if (
        (-1 !== W
            ? ((this.search = I.substr(W)),
              (this.query = I.substr(W + 1)),
              t && (this.query = g.parse(this.query)),
              (I = I.slice(0, W)))
            : t && ((this.search = ""), (this.query = {})),
        I && (this.pathname = I),
        m[S] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
    ) {
        var F = this.pathname || "",
            K = this.search || "";
        this.path = F + K;
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
            a = "";
        this.host
            ? (i = e + this.host)
            : this.hostname &&
              ((i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
              this.port && (i += ":" + this.port)),
            this.query &&
                "object" == typeof this.query &&
                Object.keys(this.query).length &&
                (a = g.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: !1 }));
        var s = this.search || (a && "?" + a) || "";
        return (
            t && ":" !== t.substr(-1) && (t += ":"),
            this.slashes || ((!t || m[t]) && !1 !== i)
                ? ((i = "//" + (i || "")), n && "/" !== n.charAt(0) && (n = "/" + n))
                : i || (i = ""),
            r && "#" !== r.charAt(0) && (r = "#" + r),
            s && "?" !== s.charAt(0) && (s = "?" + s),
            t +
                i +
                (n = n.replace(/[?#]/g, function (e) {
                    return encodeURIComponent(e);
                })) +
                (s = s.replace("#", "%23")) +
                r
        );
    }),
    (i.prototype.resolve = function (e) {
        return this.resolveObject(E(e, !1, !0)).format();
    }),
    (i.prototype.resolveObject = function (e) {
        if ("string" == typeof e) {
            var t = new i();
            t.parse(e, !1, !0), (e = t);
        }
        for (var n = new i(), r = Object.keys(this), a = 0; a < r.length; a++) {
            var s = r[a];
            n[s] = this[s];
        }
        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
            for (var o = Object.keys(e), l = 0; l < o.length; l++) {
                var u = o[l];
                "protocol" !== u && (n[u] = e[u]);
            }
            return (
                m[n.protocol] && n.hostname && !n.pathname && ((n.pathname = "/"), (n.path = n.pathname)),
                (n.href = n.format()),
                n
            );
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!m[e.protocol]) {
                for (var c = Object.keys(e), d = 0; d < c.length; d++) {
                    var _ = c[d];
                    n[_] = e[_];
                }
                return (n.href = n.format()), n;
            }
            if (((n.protocol = e.protocol), e.host || h[e.protocol])) n.pathname = e.pathname;
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
                    g = n.search || "";
                n.path = p + g;
            }
            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var E = n.pathname && "/" === n.pathname.charAt(0),
            A = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
            I = A || E || (n.host && e.pathname),
            T = I,
            y = (n.pathname && n.pathname.split("/")) || [],
            f = (e.pathname && e.pathname.split("/")) || [],
            S = n.protocol && !m[n.protocol];
        if (
            (S &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === y[0] ? (y[0] = n.host) : y.unshift(n.host)),
                (n.host = ""),
                e.protocol &&
                    ((e.hostname = null),
                    (e.port = null),
                    e.host && ("" === f[0] ? (f[0] = e.host) : f.unshift(e.host)),
                    (e.host = null)),
                (I = I && ("" === f[0] || "" === y[0]))),
            A)
        )
            (n.host = e.host || "" === e.host ? e.host : n.host),
                (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (y = f);
        else if (f.length) y || (y = []), y.pop(), (y = y.concat(f)), (n.search = e.search), (n.query = e.query);
        else if (null != e.search) {
            if (S) {
                (n.host = y.shift()), (n.hostname = n.host);
                var v = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                v && ((n.auth = v.shift()), (n.hostname = v.shift()), (n.host = n.hostname));
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
        if (!y.length)
            return (
                (n.pathname = null), n.search ? (n.path = "/" + n.search) : (n.path = null), (n.href = n.format()), n
            );
        for (
            var C = y.slice(-1)[0],
                b = ((n.host || e.host || y.length > 1) && ("." === C || ".." === C)) || "" === C,
                N = 0,
                R = y.length;
            R >= 0;
            R--
        )
            "." === (C = y[R]) ? y.splice(R, 1) : ".." === C ? (y.splice(R, 1), N++) : N && (y.splice(R, 1), N--);
        if (!I && !T) for (; N--; ) y.unshift("..");
        I && "" !== y[0] && (!y[0] || "/" !== y[0].charAt(0)) && y.unshift(""),
            b && "/" !== y.join("/").substr(-1) && y.push("");
        var O = "" === y[0] || (y[0] && "/" === y[0].charAt(0));
        if (S) {
            (n.hostname = O ? "" : y.length ? y.shift() : ""), (n.host = n.hostname);
            var v = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            v && ((n.auth = v.shift()), (n.hostname = v.shift()), (n.host = n.hostname));
        }
        return (
            (I = I || (n.host && y.length)) && !O && y.unshift(""),
            y.length > 0 ? (n.pathname = y.join("/")) : ((n.pathname = null), (n.path = null)),
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
            t = s.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e);
    }),
    (t.parse = E),
    (t.resolve = I),
    (t.resolveObject = T),
    (t.format = A),
    (t.Url = i);
