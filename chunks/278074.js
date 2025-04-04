n.d(t, {
    EQ: () => $,
    P: () => X
});
let r = Symbol.for('@ts-pattern/matcher'),
    i = Symbol.for('@ts-pattern/isVariadic'),
    o = '@ts-pattern/anonymous-select-key',
    a = (e) => !!(e && 'object' == typeof e),
    s = (e) => e && !!e[r],
    l = (e, t, n) => {
        if (s(e)) {
            let { matched: i, selections: o } = e[r]().match(t);
            return i && o && Object.keys(o).forEach((e) => n(e, o[e])), i;
        }
        if (a(e)) {
            if (!a(t)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                let r = [],
                    o = [],
                    a = [];
                for (let t of e.keys()) {
                    let n = e[t];
                    s(n) && n[i] ? a.push(n) : a.length ? o.push(n) : r.push(n);
                }
                if (a.length) {
                    if (a.length > 1) throw Error('Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.');
                    if (t.length < r.length + o.length) return !1;
                    let e = t.slice(0, r.length),
                        i = 0 === o.length ? [] : t.slice(-o.length),
                        s = t.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                    return r.every((t, r) => l(t, e[r], n)) && o.every((e, t) => l(e, i[t], n)) && (0 === a.length || l(a[0], s, n));
                }
                return e.length === t.length && e.every((e, r) => l(e, t[r], n));
            }
            return Object.keys(e).every((i) => {
                var o;
                let a = e[i];
                return (i in t || (s((o = a)) && 'optional' === o[r]().matcherType)) && l(a, t[i], n);
            });
        }
        return Object.is(t, e);
    },
    c = (e) => {
        var t, n, i;
        return a(e) ? (s(e) ? (null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : []) : Array.isArray(e) ? u(e, c) : u(Object.values(e), c)) : [];
    },
    u = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function d(...e) {
    if (1 === e.length) {
        let [t] = e;
        return (e) => l(t, e, () => {});
    }
    if (2 === e.length) {
        let [t, n] = e;
        return l(t, n, () => {});
    }
    throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function f(e) {
    return Object.assign(e, {
        optional: () => p(e),
        and: (t) => g(e, t),
        or: (t) => E(e, t),
        select: (t) => (void 0 === t ? y(e) : y(t, e))
    });
}
function _(e) {
    let t;
    return Object.assign(
        Object.assign((t = e), {
            *[Symbol.iterator]() {
                yield Object.assign(t, { [i]: !0 });
            }
        }),
        {
            optional: () => _(p(e)),
            select: (t) => _(void 0 === t ? y(e) : y(t, e))
        }
    );
}
function p(e) {
    return f({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return void 0 === t
                    ? (c(e).forEach((e) => r(e, void 0)),
                      {
                          matched: !0,
                          selections: n
                      })
                    : {
                          matched: l(e, t, r),
                          selections: n
                      };
            },
            getSelectionKeys: () => c(e),
            matcherType: 'optional'
        })
    });
}
let h = (e, t) => {
        for (let n of e) if (!t(n)) return !1;
        return !0;
    },
    m = (e, t) => {
        for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
        return !0;
    };
function g(...e) {
    return f({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return {
                    matched: e.every((e) => l(e, t, r)),
                    selections: n
                };
            },
            getSelectionKeys: () => u(e, c),
            matcherType: 'and'
        })
    });
}
function E(...e) {
    return f({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return (
                    u(e, c).forEach((e) => r(e, void 0)),
                    {
                        matched: e.some((e) => l(e, t, r)),
                        selections: n
                    }
                );
            },
            getSelectionKeys: () => u(e, c),
            matcherType: 'or'
        })
    });
}
function b(e) {
    return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function y(...e) {
    let t = 'string' == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : 'string' == typeof e[0] ? void 0 : e[0];
    return f({
        [r]: () => ({
            match: (e) => {
                let r = { [null != t ? t : o]: e };
                return {
                    matched:
                        void 0 === n ||
                        l(n, e, (e, t) => {
                            r[e] = t;
                        }),
                    selections: r
                };
            },
            getSelectionKeys: () => [null != t ? t : o].concat(void 0 === n ? [] : c(n))
        })
    });
}
function v(e) {
    return 'number' == typeof e;
}
function O(e) {
    return 'string' == typeof e;
}
function I(e) {
    return 'bigint' == typeof e;
}
let S = f(
        b(function (e) {
            return !0;
        })
    ),
    T = S,
    N = (e) =>
        Object.assign(f(e), {
            startsWith: (t) => {
                var n;
                return N(g(e, ((n = t), b((e) => O(e) && e.startsWith(n)))));
            },
            endsWith: (t) => {
                var n;
                return N(g(e, ((n = t), b((e) => O(e) && e.endsWith(n)))));
            },
            minLength: (t) => {
                let n;
                return N(g(e, ((n = t), b((e) => O(e) && e.length >= n))));
            },
            maxLength: (t) => {
                let n;
                return N(g(e, ((n = t), b((e) => O(e) && e.length <= n))));
            },
            includes: (t) => {
                var n;
                return N(g(e, ((n = t), b((e) => O(e) && e.includes(n)))));
            },
            regex: (t) => {
                var n;
                return N(g(e, ((n = t), b((e) => O(e) && !!e.match(n)))));
            }
        }),
    A = N(b(O)),
    C = (e, t) => b((n) => v(n) && e <= n && t >= n),
    R = (e) => b((t) => v(t) && t < e),
    P = (e) => b((t) => v(t) && t > e),
    w = (e) => b((t) => v(t) && t <= e),
    D = (e) => b((t) => v(t) && t >= e),
    L = () => b((e) => v(e) && Number.isInteger(e)),
    x = () => b((e) => v(e) && Number.isFinite(e)),
    M = () => b((e) => v(e) && e > 0),
    k = () => b((e) => v(e) && e < 0),
    j = (e) =>
        Object.assign(f(e), {
            between: (t, n) => j(g(e, C(t, n))),
            lt: (t) => j(g(e, R(t))),
            gt: (t) => j(g(e, P(t))),
            lte: (t) => j(g(e, w(t))),
            gte: (t) => j(g(e, D(t))),
            int: () => j(g(e, L())),
            finite: () => j(g(e, x())),
            positive: () => j(g(e, M())),
            negative: () => j(g(e, k()))
        }),
    U = j(b(v)),
    G = (e, t) => b((n) => I(n) && e <= n && t >= n),
    B = (e) => b((t) => I(t) && t < e),
    F = (e) => b((t) => I(t) && t > e),
    V = (e) => b((t) => I(t) && t <= e),
    Z = (e) => b((t) => I(t) && t >= e),
    H = () => b((e) => I(e) && e > 0),
    W = () => b((e) => I(e) && e < 0),
    Y = (e) =>
        Object.assign(f(e), {
            between: (t, n) => Y(g(e, G(t, n))),
            lt: (t) => Y(g(e, B(t))),
            gt: (t) => Y(g(e, F(t))),
            lte: (t) => Y(g(e, V(t))),
            gte: (t) => Y(g(e, Z(t))),
            positive: () => Y(g(e, H())),
            negative: () => Y(g(e, W()))
        }),
    K = Y(b(I)),
    z = f(
        b(function (e) {
            return 'boolean' == typeof e;
        })
    ),
    q = f(
        b(function (e) {
            return 'symbol' == typeof e;
        })
    ),
    Q = f(
        b(function (e) {
            return null == e;
        })
    );
var X = {
    __proto__: null,
    matcher: r,
    optional: p,
    array: function (...e) {
        return _({
            [r]: () => ({
                match: (t) => {
                    if (!Array.isArray(t)) return { matched: !1 };
                    if (0 === e.length) return { matched: !0 };
                    let n = e[0],
                        r = {};
                    if (0 === t.length)
                        return (
                            c(n).forEach((e) => {
                                r[e] = [];
                            }),
                            {
                                matched: !0,
                                selections: r
                            }
                        );
                    let i = (e, t) => {
                        r[e] = (r[e] || []).concat([t]);
                    };
                    return {
                        matched: t.every((e) => l(n, e, i)),
                        selections: r
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : c(e[0]))
            })
        });
    },
    set: function (...e) {
        return f({
            [r]: () => ({
                match: (t) => {
                    if (!(t instanceof Set)) return { matched: !1 };
                    let n = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: n
                        };
                    if (0 === e.length) return { matched: !0 };
                    let r = (e, t) => {
                            n[e] = (n[e] || []).concat([t]);
                        },
                        i = e[0];
                    return {
                        matched: h(t, (e) => l(i, e, r)),
                        selections: n
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : c(e[0]))
            })
        });
    },
    map: function (...e) {
        return f({
            [r]: () => ({
                match: (t) => {
                    var n;
                    if (!(t instanceof Map)) return { matched: !1 };
                    let r = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: r
                        };
                    let i = (e, t) => {
                        r[e] = (r[e] || []).concat([t]);
                    };
                    if (0 === e.length) return { matched: !0 };
                    if (1 === e.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == (n = e[0]) ? void 0 : n.toString()}`);
                    let [o, a] = e;
                    return {
                        matched: m(t, (e, t) => {
                            let n = l(o, t, i),
                                r = l(a, e, i);
                            return n && r;
                        }),
                        selections: r
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...c(e[0]), ...c(e[1])])
            })
        });
    },
    intersection: g,
    union: E,
    not: function (e) {
        return f({
            [r]: () => ({
                match: (t) => ({
                    matched: !l(e, t, () => {})
                }),
                getSelectionKeys: () => [],
                matcherType: 'not'
            })
        });
    },
    when: b,
    select: y,
    any: S,
    _: T,
    string: A,
    between: C,
    lt: R,
    gt: P,
    lte: w,
    gte: D,
    int: L,
    finite: x,
    positive: M,
    negative: k,
    number: U,
    betweenBigInt: G,
    ltBigInt: B,
    gtBigInt: F,
    lteBigInt: V,
    gteBigInt: Z,
    positiveBigInt: H,
    negativeBigInt: W,
    bigint: K,
    boolean: z,
    symbol: q,
    nullish: Q,
    instanceOf: function (e) {
        return f(
            b(
                (function (e) {
                    return (t) => t instanceof e;
                })(e)
            )
        );
    },
    shape: function (e) {
        return f(b(d(e)));
    }
};
let J = {
    matched: !1,
    value: void 0
};
function $(e) {
    return new ee(e, J);
}
class ee {
    constructor(e, t) {
        (this.input = void 0), (this.state = void 0), (this.input = e), (this.state = t);
    }
    with(...e) {
        let t;
        if (this.state.matched) return this;
        let n = e[e.length - 1],
            r = [e[0]];
        3 === e.length && 'function' == typeof e[1] ? (r.push(e[0]), (t = e[1])) : e.length > 2 && r.push(...e.slice(1, e.length - 1));
        let i = !1,
            a = {},
            s = (e, t) => {
                (i = !0), (a[e] = t);
            },
            c =
                r.some((e) => l(e, this.input, s)) && (!t || t(this.input))
                    ? {
                          matched: !0,
                          value: n(i ? (o in a ? a[o] : a) : this.input, this.input)
                      }
                    : J;
        return new ee(this.input, c);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let n = !!e(this.input);
        return new ee(
            this.input,
            n
                ? {
                      matched: !0,
                      value: t(this.input, this.input)
                  }
                : J
        );
    }
    otherwise(e) {
        return this.state.matched ? this.state.value : e(this.input);
    }
    exhaustive() {
        return this.run();
    }
    run() {
        let e;
        if (this.state.matched) return this.state.value;
        try {
            e = JSON.stringify(this.input);
        } catch (t) {
            e = this.input;
        }
        throw Error(`Pattern matching error: no pattern matches value ${e}`);
    }
    returnType() {
        return this;
    }
}
