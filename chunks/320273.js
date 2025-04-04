n(996173);
var r = n(147018),
    i = n(161581),
    o = n(926515),
    a = n(581031),
    s = n(325008),
    l = n(259230),
    c = n(859209),
    u = n(4340),
    d = n(90338),
    f = n(865312),
    _ = n(673743),
    p = n(644659),
    h = n(603528),
    m = n(354848),
    g = n(740362),
    E = n(566885),
    b = n(974971),
    y = n(24033),
    v = n(622281),
    O = n(714050),
    I = n(803938),
    S = n(879),
    T = n(981971),
    N = n(11697),
    A = n(202934),
    C = n(641236),
    R = n(976418),
    P = C('iterator'),
    w = 'URLSearchParams',
    D = w + 'Iterator',
    L = p.set,
    x = p.getterFor(w),
    M = p.getterFor(D),
    k = Object.getOwnPropertyDescriptor,
    j = function (e) {
        if (!s) return i[e];
        var t = k(i, e);
        return t && t.value;
    },
    U = j('fetch'),
    G = j('Request'),
    B = j('Headers'),
    F = G && G.prototype,
    V = B && B.prototype,
    Z = i.RegExp,
    H = i.TypeError,
    W = i.decodeURIComponent,
    Y = i.encodeURIComponent,
    K = a(''.charAt),
    z = a([].join),
    q = a([].push),
    Q = a(''.replace),
    X = a([].shift),
    J = a([].splice),
    $ = a(''.split),
    ee = a(''.slice),
    et = /\+/g,
    en = [, , , ,],
    er = function (e) {
        return en[e - 1] || (en[e - 1] = Z('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    ei = function (e) {
        try {
            return W(e);
        } catch (t) {
            return e;
        }
    },
    eo = function (e) {
        var t = Q(e, et, ' '),
            n = 4;
        try {
            return W(t);
        } catch (e) {
            for (; n; ) t = Q(t, er(n--), ei);
            return t;
        }
    },
    ea = /[!'()~]|%20/g,
    es = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    el = function (e) {
        return es[e];
    },
    ec = function (e) {
        return Q(Y(e), ea, el);
    },
    eu = _(
        function (e, t) {
            L(this, {
                type: D,
                iterator: T(x(e).entries),
                kind: t
            });
        },
        'Iterator',
        function () {
            var e = M(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return n.done || (n.value = 'keys' === t ? r.key : 'values' === t ? r.value : [r.key, r.value]), n;
        },
        !0
    ),
    ed = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (v(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === K(e, 0) ? ee(e, 1) : e) : O(e)));
    };
ed.prototype = {
    type: w,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            i,
            a,
            s,
            l,
            c = N(e);
        if (c)
            for (n = (t = T(e, c)).next; !(r = o(n, t)).done; ) {
                if ((s = o((a = (i = T(y(r.value))).next), i)).done || (l = o(a, i)).done || !o(a, i).done) throw H('Expected sequence with length 2');
                q(this.entries, {
                    key: O(s.value),
                    value: O(l.value)
                });
            }
        else
            for (var u in e)
                g(e, u) &&
                    q(this.entries, {
                        key: u,
                        value: O(e[u])
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = $(e, '&'), i = 0; i < r.length; )
                (t = r[i++]).length &&
                    ((n = $(t, '=')),
                    q(this.entries, {
                        key: eo(X(n)),
                        value: eo(z(n, '='))
                    }));
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) q(n, ec((e = t[r++]).key) + '=' + ec(e.value));
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
            t = L(this, new ed(e));
        s || (this.size = t.entries.length);
    },
    e_ = ef.prototype;
if (
    (d(
        e_,
        {
            append: function (e, t) {
                var n = x(this);
                A(arguments.length, 2),
                    q(n.entries, {
                        key: O(e),
                        value: O(t)
                    }),
                    !s && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = x(this), n = A(arguments.length, 1), r = t.entries, i = O(e), o = n < 2 ? void 0 : arguments[1], a = void 0 === o ? o : O(o), l = 0; l < r.length; ) {
                    var c = r[l];
                    if (c.key === i && (void 0 === a || c.value === a)) {
                        if ((J(r, l, 1), void 0 !== a)) break;
                    } else l++;
                }
                s || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = x(this).entries;
                A(arguments.length, 1);
                for (var n = O(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = x(this).entries;
                A(arguments.length, 1);
                for (var n = O(e), r = [], i = 0; i < t.length; i++) t[i].key === n && q(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (var t = x(this).entries, n = A(arguments.length, 1), r = O(e), i = n < 2 ? void 0 : arguments[1], o = void 0 === i ? i : O(i), a = 0; a < t.length; ) {
                    var s = t[a++];
                    if (s.key === r && (void 0 === o || s.value === o)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = x(this);
                A(arguments.length, 1);
                for (var i = r.entries, o = !1, a = O(e), l = O(t), c = 0; c < i.length; c++) (n = i[c]).key === a && (o ? J(i, c--, 1) : ((o = !0), (n.value = l)));
                o ||
                    q(i, {
                        key: a,
                        value: l
                    }),
                    s || (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = x(this);
                R(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = x(this).entries, r = E(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
            },
            keys: function () {
                return new eu(this, 'keys');
            },
            values: function () {
                return new eu(this, 'values');
            },
            entries: function () {
                return new eu(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    c(e_, P, e_.entries, { name: 'entries' }),
    c(
        e_,
        'toString',
        function () {
            return x(this).serialize();
        },
        { enumerable: !0 }
    ),
    s &&
        u(e_, 'size', {
            get: function () {
                return x(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    f(ef, w),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: ef }
    ),
    !l && m(B))
) {
    var ep = a(V.has),
        eh = a(V.set),
        em = function (e) {
            if (v(e)) {
                var t,
                    n = e.body;
                if (b(n) === w)
                    return (
                        ep((t = e.headers ? new B(e.headers) : new B()), 'content-type') || eh(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        I(e, {
                            body: S(0, O(n)),
                            headers: S(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (m(U) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return U(e, arguments.length > 1 ? em(arguments[1]) : {});
                    }
                }
            ),
        m(G))
    ) {
        var eg = function (e) {
            return h(this, F), new G(e, arguments.length > 1 ? em(arguments[1]) : {});
        };
        (F.constructor = eg),
            (eg.prototype = F),
            r(
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
    getState: x
};
