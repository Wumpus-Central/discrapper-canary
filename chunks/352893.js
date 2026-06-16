"use strict";
n(682071), n(650774);
var r = n(834647),
    a = n(308227),
    o = n(126726),
    i = n(683570),
    s = n(664886),
    l = n(675879),
    c = n(414123),
    u = n(633555),
    d = n(735811),
    p = n(530383),
    h = n(831718),
    f = n(469516),
    m = n(265033),
    y = n(605944),
    v = n(443216),
    g = n(309270),
    b = n(512008),
    _ = n(241091),
    k = n(781544),
    C = n(155084),
    w = n(407057),
    S = n(57284),
    N = n(991207),
    x = n(426261),
    P = n(159384),
    A = n(379180),
    R = n(739146),
    F = n(978887),
    E = n(61748),
    O = n(709605),
    I = E("iterator"),
    M = "URLSearchParams",
    T = M + "Iterator",
    B = y.set,
    D = y.getterFor(M),
    L = y.getterFor(T),
    V = o("fetch"),
    j = o("Request"),
    U = o("Headers"),
    q = j && j.prototype,
    K = U && U.prototype,
    H = a.TypeError,
    z = a.encodeURIComponent,
    W = String.fromCharCode,
    G = i("String", "fromCodePoint"),
    $ = parseInt,
    Y = l("".charAt),
    Q = l([].join),
    Z = l([].push),
    J = l("".replace),
    X = l([].shift),
    ee = l([].splice),
    et = l("".split),
    en = l("".slice),
    er = l(/./.exec),
    ea = /\+/g,
    eo = /^[0-9a-f]+$/i,
    ei = function (e, t) {
        var n = en(e, t, t + 2);
        return er(eo, n) ? $(n, 16) : NaN;
    },
    es = function (e) {
        for (var t = 0, n = 128; n > 0 && (e & n) != 0; n >>= 1) t++;
        return t;
    },
    el = function (e) {
        var t = null;
        switch (e.length) {
            case 1:
                t = e[0];
                break;
            case 2:
                t = ((31 & e[0]) << 6) | (63 & e[1]);
                break;
            case 3:
                t = ((15 & e[0]) << 12) | ((63 & e[1]) << 6) | (63 & e[2]);
                break;
            case 4:
                t = ((7 & e[0]) << 18) | ((63 & e[1]) << 12) | ((63 & e[2]) << 6) | (63 & e[3]);
        }
        return t > 1114111 ? null : t;
    },
    ec = function (e) {
        for (var t = (e = J(e, ea, " ")).length, n = "", r = 0; r < t; ) {
            var a = Y(e, r);
            if ("%" === a) {
                if ("%" === Y(e, r + 1) || r + 3 > t) {
                    (n += "%"), r++;
                    continue;
                }
                var o = ei(e, r + 1);
                if (o != o) {
                    (n += a), r++;
                    continue;
                }
                r += 2;
                var i = es(o);
                if (0 === i) a = W(o);
                else {
                    if (1 === i || i > 4) {
                        (n += "\uFFFD"), r++;
                        continue;
                    }
                    for (var s = [o], l = 1; l < i && !(++r + 3 > t) && "%" === Y(e, r); ) {
                        var c = ei(e, r + 1);
                        if (c != c) {
                            r += 3;
                            break;
                        }
                        if (c > 191 || c < 128) break;
                        Z(s, c), (r += 2), l++;
                    }
                    if (s.length !== i) {
                        n += "\uFFFD";
                        continue;
                    }
                    var u = el(s);
                    null === u ? (n += "\uFFFD") : (a = G(u));
                }
            }
            (n += a), r++;
        }
        return n;
    },
    eu = /[!'()~]|%20/g,
    ed = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" },
    ep = function (e) {
        return ed[e];
    },
    eh = function (e) {
        return J(z(e), eu, ep);
    },
    ef = m(
        function (e, t) {
            B(this, { type: T, target: D(e).entries, index: 0, kind: t });
        },
        M,
        function () {
            var e = L(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = null), R(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case "keys":
                    return R(r.key, !1);
                case "values":
                    return R(r.value, !1);
            }
            return R([r.key, r.value], !1);
        },
        !0,
    ),
    em = function (e) {
        (this.entries = []),
            (this.url = null),
            void 0 !== e &&
                (w(e)
                    ? this.parseObject(e)
                    : this.parseQuery("string" == typeof e ? ("?" === Y(e, 0) ? en(e, 1) : e) : S(e)));
    };
em.prototype = {
    type: M,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            a,
            o,
            i,
            l,
            c = this.entries,
            u = A(e);
        if (u)
            for (n = (t = P(e, u)).next; !(r = s(n, t)).done; ) {
                if ((i = s((o = (a = P(C(r.value))).next), a)).done || (l = s(o, a)).done || !s(o, a).done)
                    throw new H("Expected sequence with length 2");
                Z(c, { key: S(i.value), value: S(l.value) });
            }
        else for (var d in e) b(e, d) && Z(c, { key: d, value: S(e[d]) });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = this.entries, a = et(e, "&"), o = 0; o < a.length; )
                (t = a[o++]).length && Z(r, { key: ec(X((n = et(t, "=")))), value: ec(Q(n, "=")) });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) Z(n, eh((e = t[r++]).key) + "=" + eh(e.value));
        return Q(n, "&");
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    },
};
var ey = function () {
        v(this, ev);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = B(this, new em(e));
        c || (this.size = t.entries.length);
    },
    ev = ey.prototype;
if (
    (h(
        ev,
        {
            append: function (e, t) {
                var n = D(this);
                F(arguments.length, 2), Z(n.entries, { key: S(e), value: S(t) }), !c && this.length++, n.updateURL();
            },
            delete: function (e) {
                for (
                    var t = D(this),
                        n = F(arguments.length, 1),
                        r = t.entries,
                        a = S(e),
                        o = n < 2 ? void 0 : arguments[1],
                        i = void 0 === o ? o : S(o),
                        s = 0;
                    s < r.length;
                ) {
                    var l = r[s];
                    if (l.key === a && (void 0 === i || l.value === i)) {
                        if ((ee(r, s, 1), void 0 !== i)) break;
                    } else s++;
                }
                c || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = D(this).entries;
                F(arguments.length, 1);
                for (var n = S(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = D(this).entries;
                F(arguments.length, 1);
                for (var n = S(e), r = [], a = 0; a < t.length; a++) t[a].key === n && Z(r, t[a].value);
                return r;
            },
            has: function (e) {
                for (
                    var t = D(this).entries,
                        n = F(arguments.length, 1),
                        r = S(e),
                        a = n < 2 ? void 0 : arguments[1],
                        o = void 0 === a ? a : S(a),
                        i = 0;
                    i < t.length;
                ) {
                    var s = t[i++];
                    if (s.key === r && (void 0 === o || s.value === o)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = D(this);
                F(arguments.length, 1);
                for (var a = r.entries, o = !1, i = S(e), s = S(t), l = 0; l < a.length; l++)
                    (n = a[l]).key === i && (o ? ee(a, l--, 1) : ((o = !0), (n.value = s)));
                o || Z(a, { key: i, value: s }), c || (this.size = a.length), r.updateURL();
            },
            sort: function () {
                var e = D(this);
                O(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (
                    var t, n = D(this).entries, r = _(e, arguments.length > 1 ? arguments[1] : void 0), a = 0;
                    a < n.length;
                )
                    r((t = n[a++]).value, t.key, this);
            },
            keys: function () {
                return new ef(this, "keys");
            },
            values: function () {
                return new ef(this, "values");
            },
            entries: function () {
                return new ef(this, "entries");
            },
        },
        { enumerable: !0 },
    ),
    d(ev, I, ev.entries, { name: "entries" }),
    d(
        ev,
        "toString",
        function () {
            return D(this).serialize();
        },
        { enumerable: !0 },
    ),
    c &&
        p(ev, "size", {
            get: function () {
                return D(this).entries.length;
            },
            configurable: !0,
            enumerable: !0,
        }),
    f(ey, M),
    r({ global: !0, constructor: !0, forced: !u }, { URLSearchParams: ey }),
    !u && g(U))
) {
    var eg = l(K.has),
        eb = l(K.set),
        e_ = function (e) {
            if (w(e)) {
                var t,
                    n = e.body;
                if (k(n) === M)
                    return (
                        eg((t = e.headers ? new U(e.headers) : new U()), "content-type") ||
                            eb(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                        N(e, { body: x(0, S(n)), headers: x(0, t) })
                    );
            }
            return e;
        };
    if (
        (g(V) &&
            r(
                { global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
                {
                    fetch: function (e) {
                        return V(e, arguments.length > 1 ? e_(arguments[1]) : {});
                    },
                },
            ),
        g(j))
    ) {
        var ek = function (e) {
            return v(this, q), new j(e, arguments.length > 1 ? e_(arguments[1]) : {});
        };
        (q.constructor = ek),
            (ek.prototype = q),
            r({ global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 }, { Request: ek });
    }
}
e.exports = { URLSearchParams: ey, getState: D };
