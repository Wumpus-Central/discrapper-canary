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
    l = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"])),
    c = ["%", "/", "?", ";", "#"].concat(l),
    u = ["/", "?", "#"],
    d = 255,
    f = /^[+a-z0-9A-Z_-]{0,63}$/,
    p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    _ = {
        javascript: !0,
        "javascript:": !0,
    },
    h = {
        javascript: !0,
        "javascript:": !0,
    },
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
function b(e) {
    return ("string" == typeof e && (e = E(e)), e instanceof i) ? e.format() : i.prototype.format.call(e);
}
function y(e, t) {
    return E(e, !1, !0).resolve(t);
}
function O(e, t) {
    return e ? E(e, !1, !0).resolveObject(t) : t;
}
(i.prototype.parse = function (e, t, n) {
    if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var i = e.indexOf("?"),
        s = -1 !== i && i < e.indexOf("#") ? "?" : "#",
        E = e.split(s),
        b = /\\/g;
    E[0] = E[0].replace(b, "/");
    var y = (e = E.join(s));
    if (((y = y.trim()), !n && 1 === e.split("#").length)) {
        var O = o.exec(y);
        if (O)
            return (
                (this.path = y),
                (this.href = y),
                (this.pathname = O[1]),
                O[2]
                    ? ((this.search = O[2]),
                      t ? (this.query = g.parse(this.search.substr(1))) : (this.query = this.search.substr(1)))
                    : t && ((this.search = ""), (this.query = {})),
                this
            );
    }
    var A = a.exec(y);
    if (A) {
        var v = (A = A[0]).toLowerCase();
        (this.protocol = v), (y = y.substr(A.length));
    }
    if (n || A || y.match(/^\/\/[^@/]+@[^@/]+/)) {
        var S = "//" === y.substr(0, 2);
        S && !(A && h[A]) && ((y = y.substr(2)), (this.slashes = !0));
    }
    if (!h[A] && (S || (A && !m[A]))) {
        for (var I, T, C = -1, N = 0; N < u.length; N++) {
            var R = y.indexOf(u[N]);
            -1 !== R && (-1 === C || R < C) && (C = R);
        }
        -1 !== (T = -1 === C ? y.lastIndexOf("@") : y.lastIndexOf("@", C)) &&
            ((I = y.slice(0, T)), (y = y.slice(T + 1)), (this.auth = decodeURIComponent(I))),
            (C = -1);
        for (var N = 0; N < c.length; N++) {
            var R = y.indexOf(c[N]);
            -1 !== R && (-1 === C || R < C) && (C = R);
        }
        -1 === C && (C = y.length),
            (this.host = y.slice(0, C)),
            (y = y.slice(C)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
        var w = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!w)
            for (var P = this.hostname.split(/\./), N = 0, D = P.length; N < D; N++) {
                var x = P[N];
                if (x && !x.match(f)) {
                    for (var L = "", j = 0, M = x.length; j < M; j++) x.charCodeAt(j) > 127 ? (L += "x") : (L += x[j]);
                    if (!L.match(f)) {
                        var k = P.slice(0, N),
                            U = P.slice(N + 1),
                            G = x.match(p);
                        G && (k.push(G[1]), U.unshift(G[2])),
                            U.length && (y = "/" + U.join(".") + y),
                            (this.hostname = k.join("."));
                        break;
                    }
                }
            }
        this.hostname.length > d ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
            w || (this.hostname = r.toASCII(this.hostname));
        var V = this.port ? ":" + this.port : "",
            F = this.hostname || "";
        (this.host = F + V),
            (this.href += this.host),
            w && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== y[0] && (y = "/" + y));
    }
    if (!_[v])
        for (var N = 0, D = l.length; N < D; N++) {
            var B = l[N];
            if (-1 !== y.indexOf(B)) {
                var H = encodeURIComponent(B);
                H === B && (H = escape(B)), (y = y.split(B).join(H));
            }
        }
    var Y = y.indexOf("#");
    -1 !== Y && ((this.hash = y.substr(Y)), (y = y.slice(0, Y)));
    var W = y.indexOf("?");
    if (
        (-1 !== W
            ? ((this.search = y.substr(W)),
              (this.query = y.substr(W + 1)),
              t && (this.query = g.parse(this.query)),
              (y = y.slice(0, W)))
            : t && ((this.search = ""), (this.query = {})),
        y && (this.pathname = y),
        m[v] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
    ) {
        var V = this.pathname || "",
            K = this.search || "";
        this.path = V + K;
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
                (a = g.stringify(this.query, {
                    arrayFormat: "repeat",
                    addQueryPrefix: !1,
                }));
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
                var c = o[l];
                "protocol" !== c && (n[c] = e[c]);
            }
            return (
                m[n.protocol] && n.hostname && !n.pathname && ((n.pathname = "/"), (n.path = n.pathname)),
                (n.href = n.format()),
                n
            );
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
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()); );
                e.host || (e.host = ""),
                    e.hostname || (e.hostname = ""),
                    "" !== p[0] && p.unshift(""),
                    p.length < 2 && p.unshift(""),
                    (n.pathname = p.join("/"));
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
                var _ = n.pathname || "",
                    g = n.search || "";
                n.path = _ + g;
            }
            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var E = n.pathname && "/" === n.pathname.charAt(0),
            b = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
            y = b || E || (n.host && e.pathname),
            O = y,
            A = (n.pathname && n.pathname.split("/")) || [],
            p = (e.pathname && e.pathname.split("/")) || [],
            v = n.protocol && !m[n.protocol];
        if (
            (v &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === A[0] ? (A[0] = n.host) : A.unshift(n.host)),
                (n.host = ""),
                e.protocol &&
                    ((e.hostname = null),
                    (e.port = null),
                    e.host && ("" === p[0] ? (p[0] = e.host) : p.unshift(e.host)),
                    (e.host = null)),
                (y = y && ("" === p[0] || "" === A[0]))),
            b)
        )
            (n.host = e.host || "" === e.host ? e.host : n.host),
                (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (A = p);
        else if (p.length) A || (A = []), A.pop(), (A = A.concat(p)), (n.search = e.search), (n.query = e.query);
        else if (null != e.search) {
            if (v) {
                (n.host = A.shift()), (n.hostname = n.host);
                var S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                S && ((n.auth = S.shift()), (n.hostname = S.shift()), (n.host = n.hostname));
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
        if (!A.length)
            return (
                (n.pathname = null), n.search ? (n.path = "/" + n.search) : (n.path = null), (n.href = n.format()), n
            );
        for (
            var I = A.slice(-1)[0],
                T = ((n.host || e.host || A.length > 1) && ("." === I || ".." === I)) || "" === I,
                C = 0,
                N = A.length;
            N >= 0;
            N--
        )
            "." === (I = A[N]) ? A.splice(N, 1) : ".." === I ? (A.splice(N, 1), C++) : C && (A.splice(N, 1), C--);
        if (!y && !O) for (; C--; ) A.unshift("..");
        y && "" !== A[0] && (!A[0] || "/" !== A[0].charAt(0)) && A.unshift(""),
            T && "/" !== A.join("/").substr(-1) && A.push("");
        var R = "" === A[0] || (A[0] && "/" === A[0].charAt(0));
        if (v) {
            (n.hostname = R ? "" : A.length ? A.shift() : ""), (n.host = n.hostname);
            var S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            S && ((n.auth = S.shift()), (n.hostname = S.shift()), (n.host = n.hostname));
        }
        return (
            (y = y || (n.host && A.length)) && !R && A.unshift(""),
            A.length > 0 ? (n.pathname = A.join("/")) : ((n.pathname = null), (n.path = null)),
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
    (t.resolve = y),
    (t.resolveObject = O),
    (t.format = b),
    (t.Url = i);
