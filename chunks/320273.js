r(996173);
var i = r(147018),
    a = r(161581),
    o = r(926515),
    s = r(581031),
    l = r(325008),
    u = r(259230),
    c = r(859209),
    d = r(4340),
    f = r(90338),
    p = r(865312),
    h = r(673743),
    _ = r(644659),
    m = r(603528),
    g = r(354848),
    E = r(740362),
    v = r(566885),
    y = r(974971),
    b = r(24033),
    I = r(622281),
    T = r(714050),
    S = r(803938),
    A = r(879),
    C = r(981971),
    N = r(11697),
    R = r(202934),
    O = r(641236),
    D = r(976418),
    L = O('iterator'),
    x = 'URLSearchParams',
    w = x + 'Iterator',
    P = _.set,
    M = _.getterFor(x),
    k = _.getterFor(w),
    U = Object.getOwnPropertyDescriptor,
    B = function (e) {
        if (!l) return a[e];
        var n = U(a, e);
        return n && n.value;
    },
    G = B('fetch'),
    Z = B('Request'),
    F = B('Headers'),
    V = Z && Z.prototype,
    j = F && F.prototype,
    H = a.RegExp,
    Y = a.TypeError,
    W = a.decodeURIComponent,
    K = a.encodeURIComponent,
    z = s(''.charAt),
    q = s([].join),
    Q = s([].push),
    X = s(''.replace),
    J = s([].shift),
    $ = s([].splice),
    ee = s(''.split),
    et = s(''.slice),
    en = /\+/g,
    er = [, , , ,],
    ei = function (e) {
        return er[e - 1] || (er[e - 1] = H('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    ea = function (e) {
        try {
            return W(e);
        } catch (n) {
            return e;
        }
    },
    eo = function (e) {
        var n = X(e, en, ' '),
            r = 4;
        try {
            return W(n);
        } catch (e) {
            for (; r; ) n = X(n, ei(r--), ea);
            return n;
        }
    },
    es = /[!'()~]|%20/g,
    el = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    eu = function (e) {
        return el[e];
    },
    ec = function (e) {
        return X(K(e), es, eu);
    },
    ed = h(
        function (e, n) {
            P(this, {
                type: w,
                iterator: C(M(e).entries),
                kind: n
            });
        },
        'Iterator',
        function () {
            var e = k(this),
                n = e.kind,
                r = e.iterator.next(),
                i = r.value;
            return !r.done && (r.value = 'keys' === n ? i.key : 'values' === n ? i.value : [i.key, i.value]), r;
        },
        !0
    ),
    ef = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (I(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === z(e, 0) ? et(e, 1) : e) : T(e)));
    };
ef.prototype = {
    type: x,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var n,
            r,
            i,
            a,
            s,
            l,
            u,
            c = N(e);
        if (c)
            for (r = (n = C(e, c)).next; !(i = o(r, n)).done; ) {
                if ((l = o((s = (a = C(b(i.value))).next), a)).done || (u = o(s, a)).done || !o(s, a).done) throw Y('Expected sequence with length 2');
                Q(this.entries, {
                    key: T(l.value),
                    value: T(u.value)
                });
            }
        else
            for (var d in e)
                E(e, d) &&
                    Q(this.entries, {
                        key: d,
                        value: T(e[d])
                    });
    },
    parseQuery: function (e) {
        if (e) {
            for (var n, r, i = ee(e, '&'), a = 0; a < i.length; )
                (n = i[a++]).length &&
                    ((r = ee(n, '=')),
                    Q(this.entries, {
                        key: eo(J(r)),
                        value: eo(q(r, '='))
                    }));
        }
    },
    serialize: function () {
        for (var e, n = this.entries, r = [], i = 0; i < n.length; ) Q(r, ec((e = n[i++]).key) + '=' + ec(e.value));
        return q(r, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var ep = function () {
        m(this, eh);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            n = P(this, new ef(e));
        !l && (this.size = n.entries.length);
    },
    eh = ep.prototype;
if (
    (f(
        eh,
        {
            append: function (e, n) {
                var r = M(this);
                R(arguments.length, 2),
                    Q(r.entries, {
                        key: T(e),
                        value: T(n)
                    }),
                    !l && this.length++,
                    r.updateURL();
            },
            delete: function (e) {
                for (var n = M(this), r = R(arguments.length, 1), i = n.entries, a = T(e), o = r < 2 ? void 0 : arguments[1], s = void 0 === o ? o : T(o), u = 0; u < i.length; ) {
                    var c = i[u];
                    if (c.key === a && (void 0 === s || c.value === s)) {
                        if (($(i, u, 1), void 0 !== s)) break;
                    } else u++;
                }
                !l && (this.size = i.length), n.updateURL();
            },
            get: function (e) {
                var n = M(this).entries;
                R(arguments.length, 1);
                for (var r = T(e), i = 0; i < n.length; i++) if (n[i].key === r) return n[i].value;
                return null;
            },
            getAll: function (e) {
                var n = M(this).entries;
                R(arguments.length, 1);
                for (var r = T(e), i = [], a = 0; a < n.length; a++) n[a].key === r && Q(i, n[a].value);
                return i;
            },
            has: function (e) {
                for (var n = M(this).entries, r = R(arguments.length, 1), i = T(e), a = r < 2 ? void 0 : arguments[1], o = void 0 === a ? a : T(a), s = 0; s < n.length; ) {
                    var l = n[s++];
                    if (l.key === i && (void 0 === o || l.value === o)) return !0;
                }
                return !1;
            },
            set: function (e, n) {
                var r,
                    i = M(this);
                R(arguments.length, 1);
                for (var a = i.entries, o = !1, s = T(e), u = T(n), c = 0; c < a.length; c++) (r = a[c]).key === s && (o ? $(a, c--, 1) : ((o = !0), (r.value = u)));
                !o &&
                    Q(a, {
                        key: s,
                        value: u
                    }),
                    !l && (this.size = a.length),
                    i.updateURL();
            },
            sort: function () {
                var e = M(this);
                D(e.entries, function (e, n) {
                    return e.key > n.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var n, r = M(this).entries, i = v(e, arguments.length > 1 ? arguments[1] : void 0), a = 0; a < r.length; ) i((n = r[a++]).value, n.key, this);
            },
            keys: function () {
                return new ed(this, 'keys');
            },
            values: function () {
                return new ed(this, 'values');
            },
            entries: function () {
                return new ed(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    c(eh, L, eh.entries, { name: 'entries' }),
    c(
        eh,
        'toString',
        function () {
            return M(this).serialize();
        },
        { enumerable: !0 }
    ),
    l &&
        d(eh, 'size', {
            get: function () {
                return M(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    p(ep, x),
    i(
        {
            global: !0,
            constructor: !0,
            forced: !u
        },
        { URLSearchParams: ep }
    ),
    !u && g(F))
) {
    var e_ = s(j.has),
        em = s(j.set),
        eg = function (e) {
            if (I(e)) {
                var n,
                    r = e.body;
                if (y(r) === x)
                    return (
                        !e_((n = e.headers ? new F(e.headers) : new F()), 'content-type') && em(n, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        S(e, {
                            body: A(0, T(r)),
                            headers: A(0, n)
                        })
                    );
            }
            return e;
        };
    if (
        (g(G) &&
            i(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return G(e, arguments.length > 1 ? eg(arguments[1]) : {});
                    }
                }
            ),
        g(Z))
    ) {
        var eE = function (e) {
            return m(this, V), new Z(e, arguments.length > 1 ? eg(arguments[1]) : {});
        };
        (V.constructor = eE),
            (eE.prototype = V),
            i(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: eE }
            );
    }
}
e.exports = {
    URLSearchParams: ep,
    getState: M
};
