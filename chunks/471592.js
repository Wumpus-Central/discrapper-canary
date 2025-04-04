n(267047), n(515152);
var r = n(220159),
    o = n(424353),
    a = n(236264),
    i = n(178476),
    s = n(517522),
    c = n(764908),
    l = n(181794),
    u = n(91345),
    d = n(342930),
    p = n(459341),
    h = n(513270),
    f = n(770050),
    m = n(975450),
    y = n(89416),
    v = n(588383),
    g = n(971428),
    b = n(185698),
    _ = n(324474),
    k = n(872715),
    C = n(921413),
    Z = n(829575),
    w = n(565130),
    S = n(425184),
    N = n(132812),
    x = n(318341),
    P = n(242958),
    A = n(787899),
    R = n(592802),
    F = n(394370),
    O = n(862097),
    E = F('iterator'),
    I = 'URLSearchParams',
    M = I + 'Iterator',
    B = y.set,
    T = y.getterFor(I),
    D = y.getterFor(M),
    L = a('fetch'),
    V = a('Request'),
    j = a('Headers'),
    U = V && V.prototype,
    q = j && j.prototype,
    H = o.TypeError,
    K = o.encodeURIComponent,
    z = String.fromCharCode,
    W = i('String', 'fromCodePoint'),
    Y = parseInt,
    G = c(''.charAt),
    $ = c([].join),
    Q = c([].push),
    J = c(''.replace),
    X = c([].shift),
    ee = c([].splice),
    et = c(''.split),
    en = c(''.slice),
    er = c(/./.exec),
    eo = /\+/g,
    ea = /^[0-9a-f]+$/i,
    ei = function (e, t) {
        var n = en(e, t, t + 2);
        return er(ea, n) ? Y(n, 16) : NaN;
    },
    es = function (e) {
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
    el = function (e) {
        for (var t = (e = J(e, eo, ' ')).length, n = '', r = 0; r < t; ) {
            var o = G(e, r);
            if ('%' === o) {
                if ('%' === G(e, r + 1) || r + 3 > t) {
                    (n += '%'), r++;
                    continue;
                }
                var a = ei(e, r + 1);
                if (a != a) {
                    (n += o), r++;
                    continue;
                }
                r += 2;
                var i = es(a);
                if (0 === i) o = z(a);
                else {
                    if (1 === i || i > 4) {
                        (n += '\uFFFD'), r++;
                        continue;
                    }
                    for (var s = [a], c = 1; c < i && !(++r + 3 > t) && '%' === G(e, r); ) {
                        var l = ei(e, r + 1);
                        if (l != l) {
                            r += 3;
                            break;
                        }
                        if (l > 191 || l < 128) break;
                        Q(s, l), (r += 2), c++;
                    }
                    if (s.length !== i) {
                        n += '\uFFFD';
                        continue;
                    }
                    var u = ec(s);
                    null === u ? (n += '\uFFFD') : (o = W(u));
                }
            }
            (n += o), r++;
        }
        return n;
    },
    eu = /[!'()~]|%20/g,
    ed = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    ep = function (e) {
        return ed[e];
    },
    eh = function (e) {
        return J(K(e), eu, ep);
    },
    ef = m(
        function (e, t) {
            B(this, {
                type: M,
                target: T(e).entries,
                index: 0,
                kind: t
            });
        },
        I,
        function () {
            var e = D(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = null), A(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case 'keys':
                    return A(r.key, !1);
                case 'values':
                    return A(r.value, !1);
            }
            return A([r.key, r.value], !1);
        },
        !0
    ),
    em = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (Z(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === G(e, 0) ? en(e, 1) : e) : w(e)));
    };
em.prototype = {
    type: I,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            o,
            a,
            i,
            c,
            l = this.entries,
            u = P(e);
        if (u)
            for (n = (t = x(e, u)).next; !(r = s(n, t)).done; ) {
                if ((i = s((a = (o = x(C(r.value))).next), o)).done || (c = s(a, o)).done || !s(a, o).done) throw new H('Expected sequence with length 2');
                Q(l, {
                    key: w(i.value),
                    value: w(c.value)
                });
            }
        else
            for (var d in e)
                b(e, d) &&
                    Q(l, {
                        key: d,
                        value: w(e[d])
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = this.entries, o = et(e, '&'), a = 0; a < o.length; )
                (t = o[a++]).length &&
                    Q(r, {
                        key: el(X((n = et(t, '=')))),
                        value: el($(n, '='))
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) Q(n, eh((e = t[r++]).key) + '=' + eh(e.value));
        return $(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var ey = function () {
        v(this, ev);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = B(this, new em(e));
        l || (this.size = t.entries.length);
    },
    ev = ey.prototype;
if (
    (h(
        ev,
        {
            append: function (e, t) {
                var n = T(this);
                R(arguments.length, 2),
                    Q(n.entries, {
                        key: w(e),
                        value: w(t)
                    }),
                    !l && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = T(this), n = R(arguments.length, 1), r = t.entries, o = w(e), a = n < 2 ? void 0 : arguments[1], i = void 0 === a ? a : w(a), s = 0; s < r.length; ) {
                    var c = r[s];
                    if (c.key === o && (void 0 === i || c.value === i)) {
                        if ((ee(r, s, 1), void 0 !== i)) break;
                    } else s++;
                }
                l || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = T(this).entries;
                R(arguments.length, 1);
                for (var n = w(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = T(this).entries;
                R(arguments.length, 1);
                for (var n = w(e), r = [], o = 0; o < t.length; o++) t[o].key === n && Q(r, t[o].value);
                return r;
            },
            has: function (e) {
                for (var t = T(this).entries, n = R(arguments.length, 1), r = w(e), o = n < 2 ? void 0 : arguments[1], a = void 0 === o ? o : w(o), i = 0; i < t.length; ) {
                    var s = t[i++];
                    if (s.key === r && (void 0 === a || s.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = T(this);
                R(arguments.length, 1);
                for (var o = r.entries, a = !1, i = w(e), s = w(t), c = 0; c < o.length; c++) (n = o[c]).key === i && (a ? ee(o, c--, 1) : ((a = !0), (n.value = s)));
                a ||
                    Q(o, {
                        key: i,
                        value: s
                    }),
                    l || (this.size = o.length),
                    r.updateURL();
            },
            sort: function () {
                var e = T(this);
                O(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = T(this).entries, r = _(e, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < n.length; ) r((t = n[o++]).value, t.key, this);
            },
            keys: function () {
                return new ef(this, 'keys');
            },
            values: function () {
                return new ef(this, 'values');
            },
            entries: function () {
                return new ef(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    d(ev, E, ev.entries, { name: 'entries' }),
    d(
        ev,
        'toString',
        function () {
            return T(this).serialize();
        },
        { enumerable: !0 }
    ),
    l &&
        p(ev, 'size', {
            get: function () {
                return T(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    f(ey, I),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !u
        },
        { URLSearchParams: ey }
    ),
    !u && g(j))
) {
    var eg = c(q.has),
        eb = c(q.set),
        e_ = function (e) {
            if (Z(e)) {
                var t,
                    n = e.body;
                if (k(n) === I)
                    return (
                        eg((t = e.headers ? new j(e.headers) : new j()), 'content-type') || eb(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        S(e, {
                            body: N(0, w(n)),
                            headers: N(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (g(L) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return L(e, arguments.length > 1 ? e_(arguments[1]) : {});
                    }
                }
            ),
        g(V))
    ) {
        var ek = function (e) {
            return v(this, U), new V(e, arguments.length > 1 ? e_(arguments[1]) : {});
        };
        (U.constructor = ek),
            (ek.prototype = U),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: ek }
            );
    }
}
e.exports = {
    URLSearchParams: ey,
    getState: T
};
