r(366843), r(458631);
var n = r(98405),
    i = r(127849),
    s = r(242606),
    a = r(154028),
    o = r(580983),
    u = r(46015),
    h = r(507604),
    c = r(394227),
    f = r(556585),
    l = r(573078),
    p = r(477732),
    v = r(25124),
    g = r(280481),
    d = r(199838),
    m = r(170322),
    y = r(880181),
    b = r(77025),
    w = r(48657),
    x = r(214027),
    S = r(179122),
    R = r(434431),
    k = r(382698),
    P = r(713411),
    U = r(530575),
    L = r(533610),
    E = r(800054),
    I = r(682564),
    A = r(338045),
    q = r(751736),
    C = r(992914),
    O = q("iterator"),
    H = "URLSearchParams",
    B = H + "Iterator",
    $ = d.set,
    j = d.getterFor(H),
    z = d.getterFor(B),
    F = s("fetch"),
    T = s("Request"),
    N = s("Headers"),
    M = T && T.prototype,
    _ = N && N.prototype,
    D = i.TypeError,
    J = i.encodeURIComponent,
    K = String.fromCharCode,
    Q = a("String", "fromCodePoint"),
    G = parseInt,
    Y = u("".charAt),
    V = u([].join),
    W = u([].push),
    X = u("".replace),
    Z = u([].shift),
    tt = u([].splice),
    te = u("".split),
    tr = u("".slice),
    tn = u(/./.exec),
    ti = /\+/g,
    ts = /^[0-9a-f]+$/i,
    ta = function (t, e) {
        var r = tr(t, e, e + 2);
        return tn(ts, r) ? G(r, 16) : NaN;
    },
    to = function (t) {
        for (var e = 0, r = 128; r > 0 && (t & r) != 0; r >>= 1) e++;
        return e;
    },
    tu = function (t) {
        var e = null;
        switch (t.length) {
            case 1:
                e = t[0];
                break;
            case 2:
                e = ((31 & t[0]) << 6) | (63 & t[1]);
                break;
            case 3:
                e = ((15 & t[0]) << 12) | ((63 & t[1]) << 6) | (63 & t[2]);
                break;
            case 4:
                e = ((7 & t[0]) << 18) | ((63 & t[1]) << 12) | ((63 & t[2]) << 6) | (63 & t[3]);
        }
        return e > 1114111 ? null : e;
    },
    th = function (t) {
        for (var e = (t = X(t, ti, " ")).length, r = "", n = 0; n < e; ) {
            var i = Y(t, n);
            if ("%" === i) {
                if ("%" === Y(t, n + 1) || n + 3 > e) {
                    (r += "%"), n++;
                    continue;
                }
                var s = ta(t, n + 1);
                if (s != s) {
                    (r += i), n++;
                    continue;
                }
                n += 2;
                var a = to(s);
                if (0 === a) i = K(s);
                else {
                    if (1 === a || a > 4) {
                        (r += "\uFFFD"), n++;
                        continue;
                    }
                    for (var o = [s], u = 1; u < a && !(++n + 3 > e) && "%" === Y(t, n); ) {
                        var h = ta(t, n + 1);
                        if (h != h) {
                            n += 3;
                            break;
                        }
                        if (h > 191 || h < 128) break;
                        W(o, h), (n += 2), u++;
                    }
                    if (o.length !== a) {
                        r += "\uFFFD";
                        continue;
                    }
                    var c = tu(o);
                    null === c ? (r += "\uFFFD") : (i = Q(c));
                }
            }
            (r += i), n++;
        }
        return r;
    },
    tc = /[!'()~]|%20/g,
    tf = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
    },
    tl = function (t) {
        return tf[t];
    },
    tp = function (t) {
        return X(J(t), tc, tl);
    },
    tv = g(
        function (t, e) {
            $(this, {
                type: B,
                target: j(t).entries,
                index: 0,
                kind: e,
            });
        },
        H,
        function () {
            var t = z(this),
                e = t.target,
                r = t.index++;
            if (!e || r >= e.length) return (t.target = null), I(void 0, !0);
            var n = e[r];
            switch (t.kind) {
                case "keys":
                    return I(n.key, !1);
                case "values":
                    return I(n.value, !1);
            }
            return I([n.key, n.value], !1);
        },
        !0,
    ),
    tg = function (t) {
        (this.entries = []),
            (this.url = null),
            void 0 !== t &&
                (R(t)
                    ? this.parseObject(t)
                    : this.parseQuery("string" == typeof t ? ("?" === Y(t, 0) ? tr(t, 1) : t) : k(t)));
    };
tg.prototype = {
    type: H,
    bindURL: function (t) {
        (this.url = t), this.update();
    },
    parseObject: function (t) {
        var e,
            r,
            n,
            i,
            s,
            a,
            u,
            h = this.entries,
            c = E(t);
        if (c)
            for (r = (e = L(t, c)).next; !(n = o(r, e)).done; ) {
                if ((a = o((s = (i = L(S(n.value))).next), i)).done || (u = o(s, i)).done || !o(s, i).done)
                    throw new D("Expected sequence with length 2");
                W(h, {
                    key: k(a.value),
                    value: k(u.value),
                });
            }
        else
            for (var f in t)
                b(t, f) &&
                    W(h, {
                        key: f,
                        value: k(t[f]),
                    });
    },
    parseQuery: function (t) {
        if (t)
            for (var e, r, n = this.entries, i = te(t, "&"), s = 0; s < i.length; )
                (e = i[s++]).length &&
                    W(n, {
                        key: th(Z((r = te(e, "=")))),
                        value: th(V(r, "=")),
                    });
    },
    serialize: function () {
        for (var t, e = this.entries, r = [], n = 0; n < e.length; ) W(r, tp((t = e[n++]).key) + "=" + tp(t.value));
        return V(r, "&");
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    },
};
var td = function () {
        m(this, tm);
        var t = arguments.length > 0 ? arguments[0] : void 0,
            e = $(this, new tg(t));
        h || (this.size = e.entries.length);
    },
    tm = td.prototype;
if (
    (p(
        tm,
        {
            append: function (t, e) {
                var r = j(this);
                A(arguments.length, 2),
                    W(r.entries, {
                        key: k(t),
                        value: k(e),
                    }),
                    !h && this.length++,
                    r.updateURL();
            },
            delete: function (t) {
                for (
                    var e = j(this),
                        r = A(arguments.length, 1),
                        n = e.entries,
                        i = k(t),
                        s = r < 2 ? void 0 : arguments[1],
                        a = void 0 === s ? s : k(s),
                        o = 0;
                    o < n.length;
                ) {
                    var u = n[o];
                    if (u.key === i && (void 0 === a || u.value === a)) {
                        if ((tt(n, o, 1), void 0 !== a)) break;
                    } else o++;
                }
                h || (this.size = n.length), e.updateURL();
            },
            get: function (t) {
                var e = j(this).entries;
                A(arguments.length, 1);
                for (var r = k(t), n = 0; n < e.length; n++) if (e[n].key === r) return e[n].value;
                return null;
            },
            getAll: function (t) {
                var e = j(this).entries;
                A(arguments.length, 1);
                for (var r = k(t), n = [], i = 0; i < e.length; i++) e[i].key === r && W(n, e[i].value);
                return n;
            },
            has: function (t) {
                for (
                    var e = j(this).entries,
                        r = A(arguments.length, 1),
                        n = k(t),
                        i = r < 2 ? void 0 : arguments[1],
                        s = void 0 === i ? i : k(i),
                        a = 0;
                    a < e.length;
                ) {
                    var o = e[a++];
                    if (o.key === n && (void 0 === s || o.value === s)) return !0;
                }
                return !1;
            },
            set: function (t, e) {
                var r,
                    n = j(this);
                A(arguments.length, 1);
                for (var i = n.entries, s = !1, a = k(t), o = k(e), u = 0; u < i.length; u++)
                    (r = i[u]).key === a && (s ? tt(i, u--, 1) : ((s = !0), (r.value = o)));
                s ||
                    W(i, {
                        key: a,
                        value: o,
                    }),
                    h || (this.size = i.length),
                    n.updateURL();
            },
            sort: function () {
                var t = j(this);
                C(t.entries, function (t, e) {
                    return t.key > e.key ? 1 : -1;
                }),
                    t.updateURL();
            },
            forEach: function (t) {
                for (
                    var e, r = j(this).entries, n = w(t, arguments.length > 1 ? arguments[1] : void 0), i = 0;
                    i < r.length;
                )
                    n((e = r[i++]).value, e.key, this);
            },
            keys: function () {
                return new tv(this, "keys");
            },
            values: function () {
                return new tv(this, "values");
            },
            entries: function () {
                return new tv(this, "entries");
            },
        },
        { enumerable: !0 },
    ),
    f(tm, O, tm.entries, { name: "entries" }),
    f(
        tm,
        "toString",
        function () {
            return j(this).serialize();
        },
        { enumerable: !0 },
    ),
    h &&
        l(tm, "size", {
            get: function () {
                return j(this).entries.length;
            },
            configurable: !0,
            enumerable: !0,
        }),
    v(td, H),
    n(
        {
            global: !0,
            constructor: !0,
            forced: !c,
        },
        { URLSearchParams: td },
    ),
    !c && y(N))
) {
    var ty = u(_.has),
        tb = u(_.set),
        tw = function (t) {
            if (R(t)) {
                var e,
                    r = t.body;
                if (x(r) === H)
                    return (
                        ty((e = t.headers ? new N(t.headers) : new N()), "content-type") ||
                            tb(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                        P(t, {
                            body: U(0, k(r)),
                            headers: U(0, e),
                        })
                    );
            }
            return t;
        };
    if (
        (y(F) &&
            n(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                {
                    fetch: function (t) {
                        return F(t, arguments.length > 1 ? tw(arguments[1]) : {});
                    },
                },
            ),
        y(T))
    ) {
        var tx = function (t) {
            return m(this, M), new T(t, arguments.length > 1 ? tw(arguments[1]) : {});
        };
        (M.constructor = tx),
            (tx.prototype = M),
            n(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                { Request: tx },
            );
    }
}
t.exports = {
    URLSearchParams: td,
    getState: j,
};
