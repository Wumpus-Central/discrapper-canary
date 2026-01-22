r(861169);
var n,
    s = r(557939),
    i = r(257943),
    a = r(39911),
    h = r(860511),
    o = r(221015),
    u = r(410323),
    f = r(693655),
    l = r(485155),
    c = r(61132),
    p = r(210140),
    g = r(783842),
    v = r(500829),
    d = r(192819),
    m = r(992366).codeAt,
    w = r(766260),
    b = r(304880),
    y = r(174168),
    k = r(627),
    S = r(985729),
    P = r(883972),
    U = P.set,
    R = P.getterFor("URL"),
    L = S.URLSearchParams,
    x = S.getState,
    q = h.URL,
    H = h.TypeError,
    A = h.parseInt,
    B = Math.floor,
    C = Math.pow,
    z = u("".charAt),
    O = u(/./.exec),
    j = u([].join),
    E = u((1).toString),
    I = u([].pop),
    F = u([].push),
    N = u("".replace),
    $ = u([].shift),
    T = u("".split),
    J = u("".slice),
    M = u("".toLowerCase),
    Q = u([].unshift),
    D = "Invalid scheme",
    G = "Invalid host",
    _ = "Invalid port",
    K = /[a-z]/i,
    V = /[\d+-.a-z]/i,
    W = /\d/,
    X = /^0x/i,
    Y = /^[0-7]+$/,
    Z = /^\d+$/,
    ee = /^[\da-f]+$/i,
    et = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
    er = /[\0\t\n\r #/:<>?@[\\\]^|]/,
    en = /^[\u0000-\u0020]+/,
    es = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
    ei = /[\t\n\r]/g,
    ea = function (e) {
        var t,
            r,
            n,
            s,
            i,
            a,
            h,
            o = T(e, ".");
        if ((o.length && "" === o[o.length - 1] && o.length--, (t = o.length) > 4)) return e;
        for (n = 0, r = []; n < t; n++) {
            if ("" === (s = o[n])) return e;
            if (
                ((i = 10),
                s.length > 1 && "0" === z(s, 0) && ((i = O(X, s) ? 16 : 8), (s = J(s, 8 === i ? 1 : 2))),
                "" === s)
            )
                a = 0;
            else {
                if (!O(10 === i ? Z : 8 === i ? Y : ee, s)) return e;
                a = A(s, i);
            }
            F(r, a);
        }
        for (n = 0; n < t; n++)
            if (((a = r[n]), n === t - 1)) {
                if (a >= C(256, 5 - t)) return null;
            } else if (a > 255) return null;
        for (n = 0, h = I(r); n < r.length; n++) h += r[n] * C(256, 3 - n);
        return h;
    },
    eh = function (e) {
        var t,
            r,
            n,
            s,
            i,
            a,
            h,
            o = [0, 0, 0, 0, 0, 0, 0, 0],
            u = 0,
            f = null,
            l = 0,
            c = function () {
                return z(e, l);
            };
        if (":" === c()) {
            if (":" !== z(e, 1)) return;
            (l += 2), (f = ++u);
        }
        for (; c(); ) {
            if (8 === u) return;
            if (":" === c()) {
                if (null !== f) return;
                l++, (f = ++u);
                continue;
            }
            for (t = r = 0; r < 4 && O(ee, c()); ) (t = 16 * t + A(c(), 16)), l++, r++;
            if ("." === c()) {
                if (0 === r || ((l -= r), u > 6)) return;
                for (n = 0; c(); ) {
                    if (((s = null), n > 0))
                        if ("." !== c() || !(n < 4)) return;
                        else l++;
                    if (!O(W, c())) return;
                    for (; O(W, c()); ) {
                        if (((i = A(c(), 10)), null === s)) s = i;
                        else {
                            if (0 === s) return;
                            s = 10 * s + i;
                        }
                        if (s > 255) return;
                        l++;
                    }
                    (o[u] = 256 * o[u] + s), (2 == ++n || 4 === n) && u++;
                }
                if (4 !== n) return;
                break;
            }
            if (":" === c()) {
                if ((l++, !c())) return;
            } else if (c()) return;
            o[u++] = t;
        }
        if (null !== f)
            for (a = u - f, u = 7; 0 !== u && a > 0; ) (h = o[u]), (o[u--] = o[f + a - 1]), (o[f + --a] = h);
        else if (8 !== u) return;
        return o;
    },
    eo = function (e) {
        for (var t = null, r = 1, n = null, s = 0, i = 0; i < 8; i++)
            0 !== e[i] ? (s > r && ((t = n), (r = s)), (n = null), (s = 0)) : (null === n && (n = i), ++s);
        return s > r ? n : t;
    },
    eu = function (e) {
        var t, r, n, s;
        if ("number" == typeof e) {
            for (r = 0, t = []; r < 4; r++) Q(t, e % 256), (e = B(e / 256));
            return j(t, ".");
        }
        if ("object" == typeof e) {
            for (r = 0, t = "", n = eo(e); r < 8; r++)
                (!s || 0 !== e[r]) &&
                    (s && (s = !1),
                    n === r ? ((t += r ? ":" : "::"), (s = !0)) : ((t += E(e[r], 16)), r < 7 && (t += ":")));
            return "[" + t + "]";
        }
        return e;
    },
    ef = {},
    el = g({}, ef, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1,
    }),
    ec = g({}, el, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1,
    }),
    ep = g({}, ec, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
    }),
    eg = function (e, t) {
        var r = m(e, 0);
        return r > 32 && r < 127 && !p(t, e) ? e : encodeURIComponent(e);
    },
    ev = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443,
    },
    ed = function (e, t) {
        var r;
        return 2 === e.length && O(K, z(e, 0)) && (":" === (r = z(e, 1)) || (!t && "|" === r));
    },
    em = function (e) {
        var t;
        return (
            e.length > 1 &&
            ed(J(e, 0, 2)) &&
            (2 === e.length || "/" === (t = z(e, 2)) || "\\" === t || "?" === t || "#" === t)
        );
    },
    ew = {},
    eb = {},
    ey = {},
    ek = {},
    eS = {},
    eP = {},
    eU = {},
    eR = {},
    eL = {},
    ex = {},
    eq = {},
    eH = {},
    eA = {},
    eB = {},
    eC = {},
    ez = {},
    eO = {},
    ej = {},
    eE = {},
    eI = {},
    eF = {},
    eN = function (e, t, r) {
        var n,
            s,
            i,
            a = b(e);
        if (t) {
            if ((s = this.parse(a))) throw new H(s);
            this.searchParams = null;
        } else {
            if ((void 0 !== r && (n = new eN(r, !0)), (s = this.parse(a, null, n)))) throw new H(s);
            (i = x(new L())).bindURL(this), (this.searchParams = i);
        }
    };
eN.prototype = {
    type: "URL",
    parse: function (e, t, r) {
        var s = t || ew,
            i = 0,
            a = "",
            h = !1,
            o = !1,
            u = !1;
        for (
            e = b(e),
                t ||
                    ((this.scheme = ""),
                    (this.username = ""),
                    (this.password = ""),
                    (this.host = null),
                    (this.port = null),
                    (this.path = []),
                    (this.query = null),
                    (this.fragment = null),
                    (this.cannotBeABaseURL = !1),
                    (e = N(e, en, "")),
                    (e = N(e, es, "$1"))),
                f = v((e = N(e, ei, "")));
            i <= f.length;
        ) {
            switch (((l = f[i]), s)) {
                case ew:
                    if (l && O(K, l)) (a += M(l)), (s = eb);
                    else {
                        if (t) return D;
                        s = ey;
                        continue;
                    }
                    break;
                case eb:
                    if (l && (O(V, l) || "+" === l || "-" === l || "." === l)) a += M(l);
                    else if (":" === l) {
                        if (
                            t &&
                            (this.isSpecial() !== p(ev, a) ||
                                ("file" === a && (this.includesCredentials() || null !== this.port)) ||
                                ("file" === this.scheme && !this.host))
                        )
                            return;
                        if (((this.scheme = a), t)) {
                            this.isSpecial() && ev[this.scheme] === this.port && (this.port = null);
                            return;
                        }
                        (a = ""),
                            "file" === this.scheme
                                ? (s = eB)
                                : this.isSpecial() && r && r.scheme === this.scheme
                                  ? (s = ek)
                                  : this.isSpecial()
                                    ? (s = eR)
                                    : "/" === f[i + 1]
                                      ? ((s = eS), i++)
                                      : ((this.cannotBeABaseURL = !0), F(this.path, ""), (s = eE));
                    } else {
                        if (t) return D;
                        (a = ""), (s = ey), (i = 0);
                        continue;
                    }
                    break;
                case ey:
                    if (!r || (r.cannotBeABaseURL && "#" !== l)) return D;
                    if (r.cannotBeABaseURL && "#" === l) {
                        (this.scheme = r.scheme),
                            (this.path = d(r.path)),
                            (this.query = r.query),
                            (this.fragment = ""),
                            (this.cannotBeABaseURL = !0),
                            (s = eF);
                        break;
                    }
                    s = "file" === r.scheme ? eB : eP;
                    continue;
                case ek:
                    if ("/" === l && "/" === f[i + 1]) (s = eL), i++;
                    else {
                        s = eP;
                        continue;
                    }
                    break;
                case eS:
                    if ("/" === l) {
                        s = ex;
                        break;
                    }
                    s = ej;
                    continue;
                case eP:
                    if (((this.scheme = r.scheme), l === n))
                        (this.username = r.username),
                            (this.password = r.password),
                            (this.host = r.host),
                            (this.port = r.port),
                            (this.path = d(r.path)),
                            (this.query = r.query);
                    else if ("/" === l || ("\\" === l && this.isSpecial())) s = eU;
                    else if ("?" === l)
                        (this.username = r.username),
                            (this.password = r.password),
                            (this.host = r.host),
                            (this.port = r.port),
                            (this.path = d(r.path)),
                            (this.query = ""),
                            (s = eI);
                    else if ("#" === l)
                        (this.username = r.username),
                            (this.password = r.password),
                            (this.host = r.host),
                            (this.port = r.port),
                            (this.path = d(r.path)),
                            (this.query = r.query),
                            (this.fragment = ""),
                            (s = eF);
                    else {
                        (this.username = r.username),
                            (this.password = r.password),
                            (this.host = r.host),
                            (this.port = r.port),
                            (this.path = d(r.path)),
                            this.path.length--,
                            (s = ej);
                        continue;
                    }
                    break;
                case eU:
                    if (this.isSpecial() && ("/" === l || "\\" === l)) s = eL;
                    else if ("/" === l) s = ex;
                    else {
                        (this.username = r.username),
                            (this.password = r.password),
                            (this.host = r.host),
                            (this.port = r.port),
                            (s = ej);
                        continue;
                    }
                    break;
                case eR:
                    if (((s = eL), "/" !== l || "/" !== z(a, i + 1))) continue;
                    i++;
                    break;
                case eL:
                    if ("/" !== l && "\\" !== l) {
                        s = ex;
                        continue;
                    }
                    break;
                case ex:
                    if ("@" === l) {
                        h && (a = "%40" + a), (h = !0), (c = v(a));
                        for (var f, l, c, g, m, w, y = 0; y < c.length; y++) {
                            var k = c[y];
                            if (":" === k && !u) {
                                u = !0;
                                continue;
                            }
                            var S = eg(k, ep);
                            u ? (this.password += S) : (this.username += S);
                        }
                        a = "";
                    } else if (l === n || "/" === l || "?" === l || "#" === l || ("\\" === l && this.isSpecial())) {
                        if (h && "" === a) return "Invalid authority";
                        (i -= v(a).length + 1), (a = ""), (s = eq);
                    } else a += l;
                    break;
                case eq:
                case eH:
                    if (t && "file" === this.scheme) {
                        s = ez;
                        continue;
                    }
                    if (":" !== l || o)
                        if (l === n || "/" === l || "?" === l || "#" === l || ("\\" === l && this.isSpecial())) {
                            if (this.isSpecial() && "" === a) return G;
                            if (t && "" === a && (this.includesCredentials() || null !== this.port)) return;
                            if ((g = this.parseHost(a))) return g;
                            if (((a = ""), (s = eO), t)) return;
                            continue;
                        } else "[" === l ? (o = !0) : "]" === l && (o = !1), (a += l);
                    else {
                        if ("" === a) return G;
                        if ((g = this.parseHost(a))) return g;
                        if (((a = ""), (s = eA), t === eH)) return;
                    }
                    break;
                case eA:
                    if (O(W, l)) a += l;
                    else {
                        if (!(l === n || "/" === l || "?" === l || "#" === l || ("\\" === l && this.isSpecial())) && !t)
                            return _;
                        if ("" !== a) {
                            var P = A(a, 10);
                            if (P > 65535) return _;
                            (this.port = this.isSpecial() && P === ev[this.scheme] ? null : P), (a = "");
                        }
                        if (t) return;
                        s = eO;
                        continue;
                    }
                    break;
                case eB:
                    if (((this.scheme = "file"), "/" === l || "\\" === l)) s = eC;
                    else if (r && "file" === r.scheme)
                        switch (l) {
                            case n:
                                (this.host = r.host), (this.path = d(r.path)), (this.query = r.query);
                                break;
                            case "?":
                                (this.host = r.host), (this.path = d(r.path)), (this.query = ""), (s = eI);
                                break;
                            case "#":
                                (this.host = r.host),
                                    (this.path = d(r.path)),
                                    (this.query = r.query),
                                    (this.fragment = ""),
                                    (s = eF);
                                break;
                            default:
                                em(j(d(f, i), "")) ||
                                    ((this.host = r.host), (this.path = d(r.path)), this.shortenPath()),
                                    (s = ej);
                                continue;
                        }
                    else {
                        s = ej;
                        continue;
                    }
                    break;
                case eC:
                    if ("/" === l || "\\" === l) {
                        s = ez;
                        break;
                    }
                    r &&
                        "file" === r.scheme &&
                        !em(j(d(f, i), "")) &&
                        (ed(r.path[0], !0) ? F(this.path, r.path[0]) : (this.host = r.host)),
                        (s = ej);
                    continue;
                case ez:
                    if (l === n || "/" === l || "\\" === l || "?" === l || "#" === l) {
                        if (!t && ed(a)) s = ej;
                        else if ("" === a) {
                            if (((this.host = ""), t)) return;
                            s = eO;
                        } else {
                            if ((g = this.parseHost(a))) return g;
                            if (("localhost" === this.host && (this.host = ""), t)) return;
                            (a = ""), (s = eO);
                        }
                        continue;
                    }
                    a += l;
                    break;
                case eO:
                    if (this.isSpecial()) {
                        if (((s = ej), "/" !== l && "\\" !== l)) continue;
                    } else if (t || "?" !== l)
                        if (t || "#" !== l) {
                            if (l !== n && ((s = ej), "/" !== l)) continue;
                        } else (this.fragment = ""), (s = eF);
                    else (this.query = ""), (s = eI);
                    break;
                case ej:
                    if (l === n || "/" === l || ("\\" === l && this.isSpecial()) || (!t && ("?" === l || "#" === l))) {
                        if (
                            (".." === (m = M((m = a))) || "%2e." === m || ".%2e" === m || "%2e%2e" === m
                                ? (this.shortenPath(),
                                  "/" === l || ("\\" === l && this.isSpecial()) || F(this.path, ""))
                                : "." === (w = a) || "%2e" === M(w)
                                  ? "/" === l || ("\\" === l && this.isSpecial()) || F(this.path, "")
                                  : ("file" === this.scheme &&
                                        !this.path.length &&
                                        ed(a) &&
                                        (this.host && (this.host = ""), (a = z(a, 0) + ":")),
                                    F(this.path, a)),
                            (a = ""),
                            "file" === this.scheme && (l === n || "?" === l || "#" === l))
                        )
                            for (; this.path.length > 1 && "" === this.path[0]; ) $(this.path);
                        "?" === l ? ((this.query = ""), (s = eI)) : "#" === l && ((this.fragment = ""), (s = eF));
                    } else a += eg(l, ec);
                    break;
                case eE:
                    "?" === l
                        ? ((this.query = ""), (s = eI))
                        : "#" === l
                          ? ((this.fragment = ""), (s = eF))
                          : l !== n && (this.path[0] += eg(l, ef));
                    break;
                case eI:
                    t || "#" !== l
                        ? l !== n &&
                          ("'" === l && this.isSpecial()
                              ? (this.query += "%27")
                              : "#" === l
                                ? (this.query += "%23")
                                : (this.query += eg(l, ef)))
                        : ((this.fragment = ""), (s = eF));
                    break;
                case eF:
                    l !== n && (this.fragment += eg(l, el));
            }
            i++;
        }
    },
    parseHost: function (e) {
        var t, r, n;
        if ("[" === z(e, 0)) {
            if ("]" !== z(e, e.length - 1) || !(t = eh(J(e, 1, -1)))) return G;
            this.host = t;
        } else if (this.isSpecial()) {
            if (O(et, (e = w(e))) || null === (t = ea(e))) return G;
            this.host = t;
        } else {
            if (O(er, e)) return G;
            for (n = 0, t = "", r = v(e); n < r.length; n++) t += eg(r[n], ef);
            this.host = t;
        }
    },
    cannotHaveUsernamePasswordPort: function () {
        return !this.host || this.cannotBeABaseURL || "file" === this.scheme;
    },
    includesCredentials: function () {
        return "" !== this.username || "" !== this.password;
    },
    isSpecial: function () {
        return p(ev, this.scheme);
    },
    shortenPath: function () {
        var e = this.path,
            t = e.length;
        t && ("file" !== this.scheme || 1 !== t || !ed(e[0], !0)) && e.length--;
    },
    serialize: function () {
        var e = this.scheme,
            t = this.username,
            r = this.password,
            n = this.host,
            s = this.port,
            i = this.path,
            a = this.query,
            h = this.fragment,
            o = e + ":";
        return (
            null !== n
                ? ((o += "//"),
                  this.includesCredentials() && (o += t + (r ? ":" + r : "") + "@"),
                  (o += eu(n)),
                  null !== s && (o += ":" + s))
                : "file" === e && (o += "//"),
            (o += this.cannotBeABaseURL ? i[0] : i.length ? "/" + j(i, "/") : ""),
            null !== a && (o += "?" + a),
            null !== h && (o += "#" + h),
            o
        );
    },
    setHref: function (e) {
        var t = this.parse(e);
        if (t) throw new H(t);
        this.searchParams.update();
    },
    getOrigin: function () {
        var e = this.scheme,
            t = this.port;
        if ("blob" === e)
            try {
                return new e$(e.path[0]).origin;
            } catch (e) {
                return "null";
            }
        return "file" !== e && this.isSpecial() ? e + "://" + eu(this.host) + (null !== t ? ":" + t : "") : "null";
    },
    getProtocol: function () {
        return this.scheme + ":";
    },
    setProtocol: function (e) {
        this.parse(b(e) + ":", ew);
    },
    getUsername: function () {
        return this.username;
    },
    setUsername: function (e) {
        var t = v(b(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for (var r = 0; r < t.length; r++) this.username += eg(t[r], ep);
        }
    },
    getPassword: function () {
        return this.password;
    },
    setPassword: function (e) {
        var t = v(b(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for (var r = 0; r < t.length; r++) this.password += eg(t[r], ep);
        }
    },
    getHost: function () {
        var e = this.host,
            t = this.port;
        return null === e ? "" : null === t ? eu(e) : eu(e) + ":" + t;
    },
    setHost: function (e) {
        this.cannotBeABaseURL || this.parse(e, eq);
    },
    getHostname: function () {
        var e = this.host;
        return null === e ? "" : eu(e);
    },
    setHostname: function (e) {
        this.cannotBeABaseURL || this.parse(e, eH);
    },
    getPort: function () {
        var e = this.port;
        return null === e ? "" : b(e);
    },
    setPort: function (e) {
        this.cannotHaveUsernamePasswordPort() || ("" === (e = b(e)) ? (this.port = null) : this.parse(e, eA));
    },
    getPathname: function () {
        var e = this.path;
        return this.cannotBeABaseURL ? e[0] : e.length ? "/" + j(e, "/") : "";
    },
    setPathname: function (e) {
        this.cannotBeABaseURL || ((this.path = []), this.parse(e, eO));
    },
    getSearch: function () {
        var e = this.query;
        return e ? "?" + e : "";
    },
    setSearch: function (e) {
        "" === (e = b(e))
            ? (this.query = null)
            : ("?" === z(e, 0) && (e = J(e, 1)), (this.query = ""), this.parse(e, eI)),
            this.searchParams.update();
    },
    getSearchParams: function () {
        return this.searchParams.facade;
    },
    getHash: function () {
        var e = this.fragment;
        return e ? "#" + e : "";
    },
    setHash: function (e) {
        if ("" === (e = b(e))) {
            this.fragment = null;
            return;
        }
        "#" === z(e, 0) && (e = J(e, 1)), (this.fragment = ""), this.parse(e, eF);
    },
    update: function () {
        this.query = this.searchParams.serialize() || null;
    },
};
var e$ = function (e) {
        var t = c(this, eT),
            r = k(arguments.length, 1) > 1 ? arguments[1] : void 0,
            n = U(t, new eN(e, !1, r));
        i ||
            ((t.href = n.serialize()),
            (t.origin = n.getOrigin()),
            (t.protocol = n.getProtocol()),
            (t.username = n.getUsername()),
            (t.password = n.getPassword()),
            (t.host = n.getHost()),
            (t.hostname = n.getHostname()),
            (t.port = n.getPort()),
            (t.pathname = n.getPathname()),
            (t.search = n.getSearch()),
            (t.searchParams = n.getSearchParams()),
            (t.hash = n.getHash()));
    },
    eT = e$.prototype,
    eJ = function (e, t) {
        return {
            get: function () {
                return R(this)[e]();
            },
            set:
                t &&
                function (e) {
                    return R(this)[t](e);
                },
            configurable: !0,
            enumerable: !0,
        };
    };
if (
    (i &&
        (l(eT, "href", eJ("serialize", "setHref")),
        l(eT, "origin", eJ("getOrigin")),
        l(eT, "protocol", eJ("getProtocol", "setProtocol")),
        l(eT, "username", eJ("getUsername", "setUsername")),
        l(eT, "password", eJ("getPassword", "setPassword")),
        l(eT, "host", eJ("getHost", "setHost")),
        l(eT, "hostname", eJ("getHostname", "setHostname")),
        l(eT, "port", eJ("getPort", "setPort")),
        l(eT, "pathname", eJ("getPathname", "setPathname")),
        l(eT, "search", eJ("getSearch", "setSearch")),
        l(eT, "searchParams", eJ("getSearchParams")),
        l(eT, "hash", eJ("getHash", "setHash"))),
    f(
        eT,
        "toJSON",
        function () {
            return R(this).serialize();
        },
        { enumerable: !0 },
    ),
    f(
        eT,
        "toString",
        function () {
            return R(this).serialize();
        },
        { enumerable: !0 },
    ),
    q)
) {
    var eM = q.createObjectURL,
        eQ = q.revokeObjectURL;
    eM && f(e$, "createObjectURL", o(eM, q)), eQ && f(e$, "revokeObjectURL", o(eQ, q));
}
y(e$, "URL"),
    s(
        {
            global: !0,
            constructor: !0,
            forced: !a,
            sham: !i,
        },
        { URL: e$ },
    );
