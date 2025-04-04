n(366843), n(458631);
var r = n(98405),
    i = n(127849),
    o = n(242606),
    a = n(154028),
    s = n(580983),
    l = n(46015),
    c = n(507604),
    u = n(394227),
    d = n(556585),
    f = n(573078),
    _ = n(477732),
    p = n(25124),
    h = n(280481),
    m = n(199838),
    g = n(170322),
    E = n(880181),
    b = n(77025),
    y = n(48657),
    v = n(214027),
    O = n(179122),
    I = n(434431),
    S = n(382698),
    T = n(713411),
    N = n(530575),
    A = n(533610),
    C = n(800054),
    R = n(682564),
    P = n(338045),
    w = n(751736),
    D = n(992914),
    L = w('iterator'),
    x = 'URLSearchParams',
    M = x + 'Iterator',
    k = m.set,
    j = m.getterFor(x),
    U = m.getterFor(M),
    G = o('fetch'),
    B = o('Request'),
    V = o('Headers'),
    F = B && B.prototype,
    Z = V && V.prototype,
    H = i.TypeError,
    W = i.encodeURIComponent,
    Y = String.fromCharCode,
    K = a('String', 'fromCodePoint'),
    z = parseInt,
    q = l(''.charAt),
    Q = l([].join),
    X = l([].push),
    J = l(''.replace),
    $ = l([].shift),
    ee = l([].splice),
    et = l(''.split),
    en = l(''.slice),
    er = l(/./.exec),
    ei = /\+/g,
    eo = '\uFFFD',
    ea = /^[0-9a-f]+$/i,
    es = function (e, t) {
        var n = en(e, t, t + 2);
        return er(ea, n) ? z(n, 16) : NaN;
    },
    el = function (e) {
        for (var t = 0, n = 128; n > 0 && (e & n) != 0; n >>= 1) t++;
        return t;
    },
    ec = function (e) {
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
        for (var t = (e = J(e, ei, ' ')).length, n = '', r = 0; r < t; ) {
            var i = q(e, r);
            if ('%' === i) {
                if ('%' === q(e, r + 1) || r + 3 > t) {
                    (n += '%'), r++;
                    continue;
                }
                var o = es(e, r + 1);
                if (o != o) {
                    (n += i), r++;
                    continue;
                }
                r += 2;
                var a = el(o);
                if (0 === a) i = Y(o);
                else {
                    if (1 === a || a > 4) {
                        (n += eo), r++;
                        continue;
                    }
                    for (var s = [o], l = 1; l < a && !(++r + 3 > t) && '%' === q(e, r); ) {
                        var c = es(e, r + 1);
                        if (c != c) {
                            r += 3;
                            break;
                        }
                        if (c > 191 || c < 128) break;
                        X(s, c), (r += 2), l++;
                    }
                    if (s.length !== a) {
                        n += eo;
                        continue;
                    }
                    var u = ec(s);
                    null === u ? (n += eo) : (i = K(u));
                }
            }
            (n += i), r++;
        }
        return n;
    },
    ed = /[!'()~]|%20/g,
    ef = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    e_ = function (e) {
        return ef[e];
    },
    ep = function (e) {
        return J(W(e), ed, e_);
    },
    eh = h(
        function (e, t) {
            k(this, {
                type: M,
                target: j(e).entries,
                index: 0,
                kind: t
            });
        },
        x,
        function () {
            var e = U(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = null), R(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case 'keys':
                    return R(r.key, !1);
                case 'values':
                    return R(r.value, !1);
            }
            return R([r.key, r.value], !1);
        },
        !0
    ),
    em = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (I(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === q(e, 0) ? en(e, 1) : e) : S(e)));
    };
em.prototype = {
    type: x,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            l,
            c = this.entries,
            u = C(e);
        if (u)
            for (n = (t = A(e, u)).next; !(r = s(n, t)).done; ) {
                if ((a = s((o = (i = A(O(r.value))).next), i)).done || (l = s(o, i)).done || !s(o, i).done) throw new H('Expected sequence with length 2');
                X(c, {
                    key: S(a.value),
                    value: S(l.value)
                });
            }
        else
            for (var d in e)
                b(e, d) &&
                    X(c, {
                        key: d,
                        value: S(e[d])
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = this.entries, i = et(e, '&'), o = 0; o < i.length; )
                (t = i[o++]).length &&
                    X(r, {
                        key: eu($((n = et(t, '=')))),
                        value: eu(Q(n, '='))
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) X(n, ep((e = t[r++]).key) + '=' + ep(e.value));
        return Q(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var eg = function () {
        g(this, eE);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = k(this, new em(e));
        c || (this.size = t.entries.length);
    },
    eE = eg.prototype;
if (
    (_(
        eE,
        {
            append: function (e, t) {
                var n = j(this);
                P(arguments.length, 2),
                    X(n.entries, {
                        key: S(e),
                        value: S(t)
                    }),
                    !c && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = j(this), n = P(arguments.length, 1), r = t.entries, i = S(e), o = n < 2 ? void 0 : arguments[1], a = void 0 === o ? o : S(o), s = 0; s < r.length; ) {
                    var l = r[s];
                    if (l.key === i && (void 0 === a || l.value === a)) {
                        if ((ee(r, s, 1), void 0 !== a)) break;
                    } else s++;
                }
                c || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = j(this).entries;
                P(arguments.length, 1);
                for (var n = S(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = j(this).entries;
                P(arguments.length, 1);
                for (var n = S(e), r = [], i = 0; i < t.length; i++) t[i].key === n && X(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (var t = j(this).entries, n = P(arguments.length, 1), r = S(e), i = n < 2 ? void 0 : arguments[1], o = void 0 === i ? i : S(i), a = 0; a < t.length; ) {
                    var s = t[a++];
                    if (s.key === r && (void 0 === o || s.value === o)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = j(this);
                P(arguments.length, 1);
                for (var i = r.entries, o = !1, a = S(e), s = S(t), l = 0; l < i.length; l++) (n = i[l]).key === a && (o ? ee(i, l--, 1) : ((o = !0), (n.value = s)));
                o ||
                    X(i, {
                        key: a,
                        value: s
                    }),
                    c || (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = j(this);
                D(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = j(this).entries, r = y(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
            },
            keys: function () {
                return new eh(this, 'keys');
            },
            values: function () {
                return new eh(this, 'values');
            },
            entries: function () {
                return new eh(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    d(eE, L, eE.entries, { name: 'entries' }),
    d(
        eE,
        'toString',
        function () {
            return j(this).serialize();
        },
        { enumerable: !0 }
    ),
    c &&
        f(eE, 'size', {
            get: function () {
                return j(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    p(eg, x),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !u
        },
        { URLSearchParams: eg }
    ),
    !u && E(V))
) {
    var eb = l(Z.has),
        ey = l(Z.set),
        ev = function (e) {
            if (I(e)) {
                var t,
                    n = e.body;
                if (v(n) === x)
                    return (
                        eb((t = e.headers ? new V(e.headers) : new V()), 'content-type') || ey(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        T(e, {
                            body: N(0, S(n)),
                            headers: N(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (E(G) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return G(e, arguments.length > 1 ? ev(arguments[1]) : {});
                    }
                }
            ),
        E(B))
    ) {
        var eO = function (e) {
            return g(this, F), new B(e, arguments.length > 1 ? ev(arguments[1]) : {});
        };
        (F.constructor = eO),
            (eO.prototype = F),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: eO }
            );
    }
}
e.exports = {
    URLSearchParams: eg,
    getState: j
};
