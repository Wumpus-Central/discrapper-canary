r(366843), r(458631);
var n = r(98405),
    i = r(127849),
    s = r(242606),
    a = r(154028),
    h = r(580983),
    o = r(46015),
    u = r(507604),
    f = r(394227),
    c = r(556585),
    l = r(573078),
    p = r(477732),
    g = r(25124),
    v = r(280481),
    d = r(199838),
    m = r(170322),
    w = r(880181),
    b = r(77025),
    y = r(48657),
    k = r(214027),
    S = r(179122),
    P = r(434431),
    U = r(382698),
    R = r(713411),
    L = r(530575),
    x = r(533610),
    q = r(800054),
    H = r(682564),
    A = r(338045),
    B = r(751736),
    C = r(992914),
    z = B("iterator"),
    O = "URLSearchParams",
    j = O + "Iterator",
    E = d.set,
    I = d.getterFor(O),
    F = d.getterFor(j),
    N = s("fetch"),
    $ = s("Request"),
    T = s("Headers"),
    J = $ && $.prototype,
    M = T && T.prototype,
    Q = i.TypeError,
    D = i.encodeURIComponent,
    G = String.fromCharCode,
    _ = a("String", "fromCodePoint"),
    K = parseInt,
    V = o("".charAt),
    W = o([].join),
    X = o([].push),
    Y = o("".replace),
    Z = o([].shift),
    ee = o([].splice),
    et = o("".split),
    er = o("".slice),
    en = o(/./.exec),
    ei = /\+/g,
    es = /^[0-9a-f]+$/i,
    ea = function (e, t) {
        var r = er(e, t, t + 2);
        return en(es, r) ? K(r, 16) : NaN;
    },
    eh = function (e) {
        for (var t = 0, r = 128; r > 0 && (e & r) != 0; r >>= 1) t++;
        return t;
    },
    eo = function (e) {
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
    eu = function (e) {
        for (var t = (e = Y(e, ei, " ")).length, r = "", n = 0; n < t; ) {
            var i = V(e, n);
            if ("%" === i) {
                if ("%" === V(e, n + 1) || n + 3 > t) {
                    (r += "%"), n++;
                    continue;
                }
                var s = ea(e, n + 1);
                if (s != s) {
                    (r += i), n++;
                    continue;
                }
                n += 2;
                var a = eh(s);
                if (0 === a) i = G(s);
                else {
                    if (1 === a || a > 4) {
                        (r += "\uFFFD"), n++;
                        continue;
                    }
                    for (var h = [s], o = 1; o < a && !(++n + 3 > t) && "%" === V(e, n); ) {
                        var u = ea(e, n + 1);
                        if (u != u) {
                            n += 3;
                            break;
                        }
                        if (u > 191 || u < 128) break;
                        X(h, u), (n += 2), o++;
                    }
                    if (h.length !== a) {
                        r += "\uFFFD";
                        continue;
                    }
                    var f = eo(h);
                    null === f ? (r += "\uFFFD") : (i = _(f));
                }
            }
            (r += i), n++;
        }
        return r;
    },
    ef = /[!'()~]|%20/g,
    ec = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
    },
    el = function (e) {
        return ec[e];
    },
    ep = function (e) {
        return Y(D(e), ef, el);
    },
    eg = v(
        function (e, t) {
            E(this, {
                type: j,
                target: I(e).entries,
                index: 0,
                kind: t,
            });
        },
        O,
        function () {
            var e = F(this),
                t = e.target,
                r = e.index++;
            if (!t || r >= t.length) return (e.target = null), H(void 0, !0);
            var n = t[r];
            switch (e.kind) {
                case "keys":
                    return H(n.key, !1);
                case "values":
                    return H(n.value, !1);
            }
            return H([n.key, n.value], !1);
        },
        !0,
    ),
    ev = function (e) {
        (this.entries = []),
            (this.url = null),
            void 0 !== e &&
                (P(e)
                    ? this.parseObject(e)
                    : this.parseQuery("string" == typeof e ? ("?" === V(e, 0) ? er(e, 1) : e) : U(e)));
    };
ev.prototype = {
    type: O,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            r,
            n,
            i,
            s,
            a,
            o,
            u = this.entries,
            f = q(e);
        if (f)
            for (r = (t = x(e, f)).next; !(n = h(r, t)).done; ) {
                if ((a = h((s = (i = x(S(n.value))).next), i)).done || (o = h(s, i)).done || !h(s, i).done)
                    throw new Q("Expected sequence with length 2");
                X(u, {
                    key: U(a.value),
                    value: U(o.value),
                });
            }
        else
            for (var c in e)
                b(e, c) &&
                    X(u, {
                        key: c,
                        value: U(e[c]),
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, r, n = this.entries, i = et(e, "&"), s = 0; s < i.length; )
                (t = i[s++]).length &&
                    X(n, {
                        key: eu(Z((r = et(t, "=")))),
                        value: eu(W(r, "=")),
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, r = [], n = 0; n < t.length; ) X(r, ep((e = t[n++]).key) + "=" + ep(e.value));
        return W(r, "&");
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    },
};
var ed = function () {
        m(this, em);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = E(this, new ev(e));
        u || (this.size = t.entries.length);
    },
    em = ed.prototype;
if (
    (p(
        em,
        {
            append: function (e, t) {
                var r = I(this);
                A(arguments.length, 2),
                    X(r.entries, {
                        key: U(e),
                        value: U(t),
                    }),
                    !u && this.length++,
                    r.updateURL();
            },
            delete: function (e) {
                for (
                    var t = I(this),
                        r = A(arguments.length, 1),
                        n = t.entries,
                        i = U(e),
                        s = r < 2 ? void 0 : arguments[1],
                        a = void 0 === s ? s : U(s),
                        h = 0;
                    h < n.length;
                ) {
                    var o = n[h];
                    if (o.key === i && (void 0 === a || o.value === a)) {
                        if ((ee(n, h, 1), void 0 !== a)) break;
                    } else h++;
                }
                u || (this.size = n.length), t.updateURL();
            },
            get: function (e) {
                var t = I(this).entries;
                A(arguments.length, 1);
                for (var r = U(e), n = 0; n < t.length; n++) if (t[n].key === r) return t[n].value;
                return null;
            },
            getAll: function (e) {
                var t = I(this).entries;
                A(arguments.length, 1);
                for (var r = U(e), n = [], i = 0; i < t.length; i++) t[i].key === r && X(n, t[i].value);
                return n;
            },
            has: function (e) {
                for (
                    var t = I(this).entries,
                        r = A(arguments.length, 1),
                        n = U(e),
                        i = r < 2 ? void 0 : arguments[1],
                        s = void 0 === i ? i : U(i),
                        a = 0;
                    a < t.length;
                ) {
                    var h = t[a++];
                    if (h.key === n && (void 0 === s || h.value === s)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var r,
                    n = I(this);
                A(arguments.length, 1);
                for (var i = n.entries, s = !1, a = U(e), h = U(t), o = 0; o < i.length; o++)
                    (r = i[o]).key === a && (s ? ee(i, o--, 1) : ((s = !0), (r.value = h)));
                s ||
                    X(i, {
                        key: a,
                        value: h,
                    }),
                    u || (this.size = i.length),
                    n.updateURL();
            },
            sort: function () {
                var e = I(this);
                C(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (
                    var t, r = I(this).entries, n = y(e, arguments.length > 1 ? arguments[1] : void 0), i = 0;
                    i < r.length;
                )
                    n((t = r[i++]).value, t.key, this);
            },
            keys: function () {
                return new eg(this, "keys");
            },
            values: function () {
                return new eg(this, "values");
            },
            entries: function () {
                return new eg(this, "entries");
            },
        },
        { enumerable: !0 },
    ),
    c(em, z, em.entries, { name: "entries" }),
    c(
        em,
        "toString",
        function () {
            return I(this).serialize();
        },
        { enumerable: !0 },
    ),
    u &&
        l(em, "size", {
            get: function () {
                return I(this).entries.length;
            },
            configurable: !0,
            enumerable: !0,
        }),
    g(ed, O),
    n(
        {
            global: !0,
            constructor: !0,
            forced: !f,
        },
        { URLSearchParams: ed },
    ),
    !f && w(T))
) {
    var ew = o(M.has),
        eb = o(M.set),
        ey = function (e) {
            if (P(e)) {
                var t,
                    r = e.body;
                if (k(r) === O)
                    return (
                        ew((t = e.headers ? new T(e.headers) : new T()), "content-type") ||
                            eb(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                        R(e, {
                            body: L(0, U(r)),
                            headers: L(0, t),
                        })
                    );
            }
            return e;
        };
    if (
        (w(N) &&
            n(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                {
                    fetch: function (e) {
                        return N(e, arguments.length > 1 ? ey(arguments[1]) : {});
                    },
                },
            ),
        w($))
    ) {
        var ek = function (e) {
            return m(this, J), new $(e, arguments.length > 1 ? ey(arguments[1]) : {});
        };
        (J.constructor = ek),
            (ek.prototype = J),
            n(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                { Request: ek },
            );
    }
}
e.exports = {
    URLSearchParams: ed,
    getState: I,
};
