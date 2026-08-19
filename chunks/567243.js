"use strict";
var n = r(89738);
function o() {
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
var i = /^([a-z0-9.+-]+:)/i,
    a = /:[0-9]*$/,
    s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    l = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
    u = ["%", "/", "?", ";", "#"].concat(l),
    c = ["/", "?", "#"],
    f = /^[+a-z0-9A-Z_-]{0,63}$/,
    p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    d = { javascript: !0, "javascript:": !0 },
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
    v = r(591560);
function y(e, t, r) {
    if (e && "object" == typeof e && e instanceof o) return e;
    var n = new o();
    return n.parse(e, t, r), n;
}
(o.prototype.parse = function (e, t, r) {
    if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var o = e.indexOf("?"),
        a = -1 !== o && o < e.indexOf("#") ? "?" : "#",
        y = e.split(a);
    y[0] = y[0].replace(/\\/g, "/");
    var g = (e = y.join(a));
    if (((g = g.trim()), !r && 1 === e.split("#").length)) {
        var b = s.exec(g);
        if (b)
            return (
                (this.path = g),
                (this.href = g),
                (this.pathname = b[1]),
                b[2]
                    ? ((this.search = b[2]),
                      t ? (this.query = v.parse(this.search.substr(1))) : (this.query = this.search.substr(1)))
                    : t && ((this.search = ""), (this.query = {})),
                this
            );
    }
    var w = i.exec(g);
    if (w) {
        var _ = (w = w[0]).toLowerCase();
        (this.protocol = _), (g = g.substr(w.length));
    }
    if (r || w || g.match(/^\/\/[^@/]+@[^@/]+/)) {
        var S = "//" === g.substr(0, 2);
        S && !(w && h[w]) && ((g = g.substr(2)), (this.slashes = !0));
    }
    if (!h[w] && (S || (w && !m[w]))) {
        for (var E, x, k = -1, C = 0; C < c.length; C++) {
            var T = g.indexOf(c[C]);
            -1 !== T && (-1 === k || T < k) && (k = T);
        }
        -1 !== (x = -1 === k ? g.lastIndexOf("@") : g.lastIndexOf("@", k)) &&
            ((E = g.slice(0, x)), (g = g.slice(x + 1)), (this.auth = decodeURIComponent(E))),
            (k = -1);
        for (var C = 0; C < u.length; C++) {
            var T = g.indexOf(u[C]);
            -1 !== T && (-1 === k || T < k) && (k = T);
        }
        -1 === k && (k = g.length),
            (this.host = g.slice(0, k)),
            (g = g.slice(k)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
        var M = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!M)
            for (var P = this.hostname.split(/\./), C = 0, A = P.length; C < A; C++) {
                var O = P[C];
                if (O && !O.match(f)) {
                    for (var I = "", D = 0, L = O.length; D < L; D++) O.charCodeAt(D) > 127 ? (I += "x") : (I += O[D]);
                    if (!I.match(f)) {
                        var R = P.slice(0, C),
                            F = P.slice(C + 1),
                            N = O.match(p);
                        N && (R.push(N[1]), F.unshift(N[2])),
                            F.length && (g = "/" + F.join(".") + g),
                            (this.hostname = R.join("."));
                        break;
                    }
                }
            }
        this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
            M || (this.hostname = n.toASCII(this.hostname));
        var j = this.port ? ":" + this.port : "",
            B = this.hostname || "";
        (this.host = B + j),
            (this.href += this.host),
            M && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== g[0] && (g = "/" + g));
    }
    if (!d[_])
        for (var C = 0, A = l.length; C < A; C++) {
            var $ = l[C];
            if (-1 !== g.indexOf($)) {
                var K = encodeURIComponent($);
                K === $ && (K = escape($)), (g = g.split($).join(K));
            }
        }
    var V = g.indexOf("#");
    -1 !== V && ((this.hash = g.substr(V)), (g = g.slice(0, V)));
    var U = g.indexOf("?");
    if (
        (-1 !== U
            ? ((this.search = g.substr(U)),
              (this.query = g.substr(U + 1)),
              t && (this.query = v.parse(this.query)),
              (g = g.slice(0, U)))
            : t && ((this.search = ""), (this.query = {})),
        g && (this.pathname = g),
        m[_] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
    ) {
        var j = this.pathname || "",
            z = this.search || "";
        this.path = j + z;
    }
    return (this.href = this.format()), this;
}),
    (o.prototype.format = function () {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
        var t = this.protocol || "",
            r = this.pathname || "",
            n = this.hash || "",
            o = !1,
            i = "";
        this.host
            ? (o = e + this.host)
            : this.hostname &&
              ((o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
              this.port && (o += ":" + this.port)),
            this.query &&
                "object" == typeof this.query &&
                Object.keys(this.query).length &&
                (i = v.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: !1 }));
        var a = this.search || (i && "?" + i) || "";
        return (
            t && ":" !== t.substr(-1) && (t += ":"),
            this.slashes || ((!t || m[t]) && !1 !== o)
                ? ((o = "//" + (o || "")), r && "/" !== r.charAt(0) && (r = "/" + r))
                : o || (o = ""),
            n && "#" !== n.charAt(0) && (n = "#" + n),
            a && "?" !== a.charAt(0) && (a = "?" + a),
            t +
                o +
                (r = r.replace(/[?#]/g, function (e) {
                    return encodeURIComponent(e);
                })) +
                (a = a.replace("#", "%23")) +
                n
        );
    }),
    (o.prototype.resolve = function (e) {
        return this.resolveObject(y(e, !1, !0)).format();
    }),
    (o.prototype.resolveObject = function (e) {
        if ("string" == typeof e) {
            var t = new o();
            t.parse(e, !1, !0), (e = t);
        }
        for (var r = new o(), n = Object.keys(this), i = 0; i < n.length; i++) {
            var a = n[i];
            r[a] = this[a];
        }
        if (((r.hash = e.hash), "" === e.href)) return (r.href = r.format()), r;
        if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), l = 0; l < s.length; l++) {
                var u = s[l];
                "protocol" !== u && (r[u] = e[u]);
            }
            return (
                m[r.protocol] && r.hostname && !r.pathname && ((r.pathname = "/"), (r.path = r.pathname)),
                (r.href = r.format()),
                r
            );
        }
        if (e.protocol && e.protocol !== r.protocol) {
            if (!m[e.protocol]) {
                for (var c = Object.keys(e), f = 0; f < c.length; f++) {
                    var p = c[f];
                    r[p] = e[p];
                }
                return (r.href = r.format()), r;
            }
            if (((r.protocol = e.protocol), e.host || h[e.protocol])) r.pathname = e.pathname;
            else {
                for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()); );
                e.host || (e.host = ""),
                    e.hostname || (e.hostname = ""),
                    "" !== d[0] && d.unshift(""),
                    d.length < 2 && d.unshift(""),
                    (r.pathname = d.join("/"));
            }
            if (
                ((r.search = e.search),
                (r.query = e.query),
                (r.host = e.host || ""),
                (r.auth = e.auth),
                (r.hostname = e.hostname || e.host),
                (r.port = e.port),
                r.pathname || r.search)
            ) {
                var v = r.pathname || "",
                    y = r.search || "";
                r.path = v + y;
            }
            return (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r;
        }
        var g = r.pathname && "/" === r.pathname.charAt(0),
            b = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
            w = b || g || (r.host && e.pathname),
            _ = w,
            S = (r.pathname && r.pathname.split("/")) || [],
            d = (e.pathname && e.pathname.split("/")) || [],
            E = r.protocol && !m[r.protocol];
        if (
            (E &&
                ((r.hostname = ""),
                (r.port = null),
                r.host && ("" === S[0] ? (S[0] = r.host) : S.unshift(r.host)),
                (r.host = ""),
                e.protocol &&
                    ((e.hostname = null),
                    (e.port = null),
                    e.host && ("" === d[0] ? (d[0] = e.host) : d.unshift(e.host)),
                    (e.host = null)),
                (w = w && ("" === d[0] || "" === S[0]))),
            b)
        )
            (r.host = e.host || "" === e.host ? e.host : r.host),
                (r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname),
                (r.search = e.search),
                (r.query = e.query),
                (S = d);
        else if (d.length) S || (S = []), S.pop(), (S = S.concat(d)), (r.search = e.search), (r.query = e.query);
        else if (null != e.search) {
            if (E) {
                (r.host = S.shift()), (r.hostname = r.host);
                var x = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                x && ((r.auth = x.shift()), (r.hostname = x.shift()), (r.host = r.hostname));
            }
            return (
                (r.search = e.search),
                (r.query = e.query),
                (null !== r.pathname || null !== r.search) &&
                    (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
                (r.href = r.format()),
                r
            );
        }
        if (!S.length)
            return (
                (r.pathname = null), r.search ? (r.path = "/" + r.search) : (r.path = null), (r.href = r.format()), r
            );
        for (
            var k = S.slice(-1)[0],
                C = ((r.host || e.host || S.length > 1) && ("." === k || ".." === k)) || "" === k,
                T = 0,
                M = S.length;
            M >= 0;
            M--
        )
            "." === (k = S[M]) ? S.splice(M, 1) : ".." === k ? (S.splice(M, 1), T++) : T && (S.splice(M, 1), T--);
        if (!w && !_) for (; T--; ) S.unshift("..");
        w && "" !== S[0] && (!S[0] || "/" !== S[0].charAt(0)) && S.unshift(""),
            C && "/" !== S.join("/").substr(-1) && S.push("");
        var P = "" === S[0] || (S[0] && "/" === S[0].charAt(0));
        if (E) {
            (r.hostname = P ? "" : S.length ? S.shift() : ""), (r.host = r.hostname);
            var x = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
            x && ((r.auth = x.shift()), (r.hostname = x.shift()), (r.host = r.hostname));
        }
        return (
            (w = w || (r.host && S.length)) && !P && S.unshift(""),
            S.length > 0 ? (r.pathname = S.join("/")) : ((r.pathname = null), (r.path = null)),
            (null !== r.pathname || null !== r.search) &&
                (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
            (r.auth = e.auth || r.auth),
            (r.slashes = r.slashes || e.slashes),
            (r.href = r.format()),
            r
        );
    }),
    (o.prototype.parseHost = function () {
        var e = this.host,
            t = a.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e);
    }),
    (t.parse = y),
    (t.resolve = function (e, t) {
        return y(e, !1, !0).resolve(t);
    }),
    (t.resolveObject = function (e, t) {
        return e ? y(e, !1, !0).resolveObject(t) : t;
    }),
    (t.format = function (e) {
        return ("string" == typeof e && (e = y(e)), e instanceof o) ? e.format() : o.prototype.format.call(e);
    }),
    (t.Url = o);
