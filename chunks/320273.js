n(996173);
var i = n(147018),
    r = n(161581),
    a = n(926515),
    s = n(581031),
    o = n(325008),
    l = n(259230),
    u = n(859209),
    c = n(4340),
    d = n(90338),
    f = n(865312),
    _ = n(673743),
    p = n(644659),
    h = n(603528),
    m = n(354848),
    g = n(740362),
    E = n(566885),
    v = n(974971),
    y = n(24033),
    I = n(622281),
    T = n(714050),
    b = n(803938),
    S = n(879),
    A = n(981971),
    N = n(11697),
    C = n(202934),
    R = n(641236),
    O = n(976418),
    D = R('iterator'),
    x = 'URLSearchParams',
    L = x + 'Iterator',
    P = p.set,
    w = p.getterFor(x),
    M = p.getterFor(L),
    k = Object.getOwnPropertyDescriptor,
    U = function (e) {
        if (!o) return r[e];
        var t = k(r, e);
        return t && t.value;
    },
    G = U('fetch'),
    B = U('Request'),
    Z = U('Headers'),
    F = B && B.prototype,
    V = Z && Z.prototype,
    j = r.RegExp,
    H = r.TypeError,
    Y = r.decodeURIComponent,
    W = r.encodeURIComponent,
    K = s(''.charAt),
    z = s([].join),
    q = s([].push),
    Q = s(''.replace),
    X = s([].shift),
    J = s([].splice),
    $ = s(''.split),
    ee = s(''.slice),
    et = /\+/g,
    en = [, , , ,],
    ei = function (e) {
        return en[e - 1] || (en[e - 1] = j('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    er = function (e) {
        try {
            return Y(e);
        } catch (t) {
            return e;
        }
    },
    ea = function (e) {
        var t = Q(e, et, ' '),
            n = 4;
        try {
            return Y(t);
        } catch (e) {
            for (; n; ) t = Q(t, ei(n--), er);
            return t;
        }
    },
    es = /[!'()~]|%20/g,
    eo = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    el = function (e) {
        return eo[e];
    },
    eu = function (e) {
        return Q(W(e), es, el);
    },
    ec = _(
        function (e, t) {
            P(this, {
                type: L,
                iterator: A(w(e).entries),
                kind: t
            });
        },
        'Iterator',
        function () {
            var e = M(this),
                t = e.kind,
                n = e.iterator.next(),
                i = n.value;
            return n.done || (n.value = 'keys' === t ? i.key : 'values' === t ? i.value : [i.key, i.value]), n;
        },
        !0
    ),
    ed = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (I(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === K(e, 0) ? ee(e, 1) : e) : T(e)));
    };
ed.prototype = {
    type: x,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            i,
            r,
            s,
            o,
            l,
            u = N(e);
        if (u)
            for (n = (t = A(e, u)).next; !(i = a(n, t)).done; ) {
                if ((o = a((s = (r = A(y(i.value))).next), r)).done || (l = a(s, r)).done || !a(s, r).done) throw H('Expected sequence with length 2');
                q(this.entries, {
                    key: T(o.value),
                    value: T(l.value)
                });
            }
        else
            for (var c in e)
                g(e, c) &&
                    q(this.entries, {
                        key: c,
                        value: T(e[c])
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, i = $(e, '&'), r = 0; r < i.length; )
                (t = i[r++]).length &&
                    ((n = $(t, '=')),
                    q(this.entries, {
                        key: ea(X(n)),
                        value: ea(z(n, '='))
                    }));
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], i = 0; i < t.length; ) q(n, eu((e = t[i++]).key) + '=' + eu(e.value));
        return z(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var ef = function () {
        h(this, e_);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = P(this, new ed(e));
        o || (this.size = t.entries.length);
    },
    e_ = ef.prototype;
if (
    (d(
        e_,
        {
            append: function (e, t) {
                var n = w(this);
                C(arguments.length, 2),
                    q(n.entries, {
                        key: T(e),
                        value: T(t)
                    }),
                    !o && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = w(this), n = C(arguments.length, 1), i = t.entries, r = T(e), a = n < 2 ? void 0 : arguments[1], s = void 0 === a ? a : T(a), l = 0; l < i.length; ) {
                    var u = i[l];
                    if (u.key === r && (void 0 === s || u.value === s)) {
                        if ((J(i, l, 1), void 0 !== s)) break;
                    } else l++;
                }
                o || (this.size = i.length), t.updateURL();
            },
            get: function (e) {
                var t = w(this).entries;
                C(arguments.length, 1);
                for (var n = T(e), i = 0; i < t.length; i++) if (t[i].key === n) return t[i].value;
                return null;
            },
            getAll: function (e) {
                var t = w(this).entries;
                C(arguments.length, 1);
                for (var n = T(e), i = [], r = 0; r < t.length; r++) t[r].key === n && q(i, t[r].value);
                return i;
            },
            has: function (e) {
                for (var t = w(this).entries, n = C(arguments.length, 1), i = T(e), r = n < 2 ? void 0 : arguments[1], a = void 0 === r ? r : T(r), s = 0; s < t.length; ) {
                    var o = t[s++];
                    if (o.key === i && (void 0 === a || o.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    i = w(this);
                C(arguments.length, 1);
                for (var r = i.entries, a = !1, s = T(e), l = T(t), u = 0; u < r.length; u++) (n = r[u]).key === s && (a ? J(r, u--, 1) : ((a = !0), (n.value = l)));
                a ||
                    q(r, {
                        key: s,
                        value: l
                    }),
                    o || (this.size = r.length),
                    i.updateURL();
            },
            sort: function () {
                var e = w(this);
                O(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = w(this).entries, i = E(e, arguments.length > 1 ? arguments[1] : void 0), r = 0; r < n.length; ) i((t = n[r++]).value, t.key, this);
            },
            keys: function () {
                return new ec(this, 'keys');
            },
            values: function () {
                return new ec(this, 'values');
            },
            entries: function () {
                return new ec(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    u(e_, D, e_.entries, { name: 'entries' }),
    u(
        e_,
        'toString',
        function () {
            return w(this).serialize();
        },
        { enumerable: !0 }
    ),
    o &&
        c(e_, 'size', {
            get: function () {
                return w(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    f(ef, x),
    i(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: ef }
    ),
    !l && m(Z))
) {
    var ep = s(V.has),
        eh = s(V.set),
        em = function (e) {
            if (I(e)) {
                var t,
                    n = e.body;
                if (v(n) === x)
                    return (
                        ep((t = e.headers ? new Z(e.headers) : new Z()), 'content-type') || eh(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        b(e, {
                            body: S(0, T(n)),
                            headers: S(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (m(G) &&
            i(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return G(e, arguments.length > 1 ? em(arguments[1]) : {});
                    }
                }
            ),
        m(B))
    ) {
        var eg = function (e) {
            return h(this, F), new B(e, arguments.length > 1 ? em(arguments[1]) : {});
        };
        (F.constructor = eg),
            (eg.prototype = F),
            i(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: eg }
            );
    }
}
e.exports = {
    URLSearchParams: ef,
    getState: w
};
