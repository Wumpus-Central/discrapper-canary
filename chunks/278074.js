n.d(t, {
    EQ: () => $,
    P: () => X
});
let i = Symbol.for('@ts-pattern/matcher'),
    r = Symbol.for('@ts-pattern/isVariadic'),
    a = '@ts-pattern/anonymous-select-key',
    s = (e) => !!(e && 'object' == typeof e),
    o = (e) => e && !!e[i],
    l = (e, t, n) => {
        if (o(e)) {
            let { matched: r, selections: a } = e[i]().match(t);
            return r && a && Object.keys(a).forEach((e) => n(e, a[e])), r;
        }
        if (s(e)) {
            if (!s(t)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                let i = [],
                    a = [],
                    s = [];
                for (let t of e.keys()) {
                    let n = e[t];
                    o(n) && n[r] ? s.push(n) : s.length ? a.push(n) : i.push(n);
                }
                if (s.length) {
                    if (s.length > 1) throw Error('Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.');
                    if (t.length < i.length + a.length) return !1;
                    let e = t.slice(0, i.length),
                        r = 0 === a.length ? [] : t.slice(-a.length),
                        o = t.slice(i.length, 0 === a.length ? 1 / 0 : -a.length);
                    return i.every((t, i) => l(t, e[i], n)) && a.every((e, t) => l(e, r[t], n)) && (0 === s.length || l(s[0], o, n));
                }
                return e.length === t.length && e.every((e, i) => l(e, t[i], n));
            }
            return Object.keys(e).every((r) => {
                var a;
                let s = e[r];
                return (r in t || (o((a = s)) && 'optional' === a[i]().matcherType)) && l(s, t[r], n);
            });
        }
        return Object.is(t, e);
    },
    u = (e) => {
        var t, n, r;
        return s(e) ? (o(e) ? (null != (t = null == (n = (r = e[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? t : []) : Array.isArray(e) ? c(e, u) : c(Object.values(e), u)) : [];
    },
    c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
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
                yield Object.assign(t, { [r]: !0 });
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
        [i]: () => ({
            match: (t) => {
                let n = {},
                    i = (e, t) => {
                        n[e] = t;
                    };
                return void 0 === t
                    ? (u(e).forEach((e) => i(e, void 0)),
                      {
                          matched: !0,
                          selections: n
                      })
                    : {
                          matched: l(e, t, i),
                          selections: n
                      };
            },
            getSelectionKeys: () => u(e),
            matcherType: 'optional'
        })
    });
}
let h = (e, t) => {
        for (let n of e) if (!t(n)) return !1;
        return !0;
    },
    m = (e, t) => {
        for (let [n, i] of e.entries()) if (!t(i, n)) return !1;
        return !0;
    };
function g(...e) {
    return f({
        [i]: () => ({
            match: (t) => {
                let n = {},
                    i = (e, t) => {
                        n[e] = t;
                    };
                return {
                    matched: e.every((e) => l(e, t, i)),
                    selections: n
                };
            },
            getSelectionKeys: () => c(e, u),
            matcherType: 'and'
        })
    });
}
function E(...e) {
    return f({
        [i]: () => ({
            match: (t) => {
                let n = {},
                    i = (e, t) => {
                        n[e] = t;
                    };
                return (
                    c(e, u).forEach((e) => i(e, void 0)),
                    {
                        matched: e.some((e) => l(e, t, i)),
                        selections: n
                    }
                );
            },
            getSelectionKeys: () => c(e, u),
            matcherType: 'or'
        })
    });
}
function v(e) {
    return { [i]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function y(...e) {
    let t = 'string' == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : 'string' == typeof e[0] ? void 0 : e[0];
    return f({
        [i]: () => ({
            match: (e) => {
                let i = { [null != t ? t : a]: e };
                return {
                    matched:
                        void 0 === n ||
                        l(n, e, (e, t) => {
                            i[e] = t;
                        }),
                    selections: i
                };
            },
            getSelectionKeys: () => [null != t ? t : a].concat(void 0 === n ? [] : u(n))
        })
    });
}
function I(e) {
    return 'number' == typeof e;
}
function T(e) {
    return 'string' == typeof e;
}
function b(e) {
    return 'bigint' == typeof e;
}
let S = f(
        v(function (e) {
            return !0;
        })
    ),
    A = S,
    N = (e) =>
        Object.assign(f(e), {
            startsWith: (t) => {
                var n;
                return N(g(e, ((n = t), v((e) => T(e) && e.startsWith(n)))));
            },
            endsWith: (t) => {
                var n;
                return N(g(e, ((n = t), v((e) => T(e) && e.endsWith(n)))));
            },
            minLength: (t) => {
                let n;
                return N(g(e, ((n = t), v((e) => T(e) && e.length >= n))));
            },
            maxLength: (t) => {
                let n;
                return N(g(e, ((n = t), v((e) => T(e) && e.length <= n))));
            },
            includes: (t) => {
                var n;
                return N(g(e, ((n = t), v((e) => T(e) && e.includes(n)))));
            },
            regex: (t) => {
                var n;
                return N(g(e, ((n = t), v((e) => T(e) && !!e.match(n)))));
            }
        }),
    C = N(v(T)),
    R = (e, t) => v((n) => I(n) && e <= n && t >= n),
    O = (e) => v((t) => I(t) && t < e),
    D = (e) => v((t) => I(t) && t > e),
    L = (e) => v((t) => I(t) && t <= e),
    x = (e) => v((t) => I(t) && t >= e),
    w = () => v((e) => I(e) && Number.isInteger(e)),
    P = () => v((e) => I(e) && Number.isFinite(e)),
    M = () => v((e) => I(e) && e > 0),
    k = () => v((e) => I(e) && e < 0),
    U = (e) =>
        Object.assign(f(e), {
            between: (t, n) => U(g(e, R(t, n))),
            lt: (t) => U(g(e, O(t))),
            gt: (t) => U(g(e, D(t))),
            lte: (t) => U(g(e, L(t))),
            gte: (t) => U(g(e, x(t))),
            int: () => U(g(e, w())),
            finite: () => U(g(e, P())),
            positive: () => U(g(e, M())),
            negative: () => U(g(e, k()))
        }),
    G = U(v(I)),
    B = (e, t) => v((n) => b(n) && e <= n && t >= n),
    Z = (e) => v((t) => b(t) && t < e),
    F = (e) => v((t) => b(t) && t > e),
    V = (e) => v((t) => b(t) && t <= e),
    j = (e) => v((t) => b(t) && t >= e),
    H = () => v((e) => b(e) && e > 0),
    Y = () => v((e) => b(e) && e < 0),
    W = (e) =>
        Object.assign(f(e), {
            between: (t, n) => W(g(e, B(t, n))),
            lt: (t) => W(g(e, Z(t))),
            gt: (t) => W(g(e, F(t))),
            lte: (t) => W(g(e, V(t))),
            gte: (t) => W(g(e, j(t))),
            positive: () => W(g(e, H())),
            negative: () => W(g(e, Y()))
        }),
    K = W(v(b)),
    z = f(
        v(function (e) {
            return 'boolean' == typeof e;
        })
    ),
    q = f(
        v(function (e) {
            return 'symbol' == typeof e;
        })
    ),
    Q = f(
        v(function (e) {
            return null == e;
        })
    );
var X = {
    __proto__: null,
    matcher: i,
    optional: p,
    array: function (...e) {
        return _({
            [i]: () => ({
                match: (t) => {
                    if (!Array.isArray(t)) return { matched: !1 };
                    if (0 === e.length) return { matched: !0 };
                    let n = e[0],
                        i = {};
                    if (0 === t.length)
                        return (
                            u(n).forEach((e) => {
                                i[e] = [];
                            }),
                            {
                                matched: !0,
                                selections: i
                            }
                        );
                    let r = (e, t) => {
                        i[e] = (i[e] || []).concat([t]);
                    };
                    return {
                        matched: t.every((e) => l(n, e, r)),
                        selections: i
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0]))
            })
        });
    },
    set: function (...e) {
        return f({
            [i]: () => ({
                match: (t) => {
                    if (!(t instanceof Set)) return { matched: !1 };
                    let n = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: n
                        };
                    if (0 === e.length) return { matched: !0 };
                    let i = (e, t) => {
                            n[e] = (n[e] || []).concat([t]);
                        },
                        r = e[0];
                    return {
                        matched: h(t, (e) => l(r, e, i)),
                        selections: n
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0]))
            })
        });
    },
    map: function (...e) {
        return f({
            [i]: () => ({
                match: (t) => {
                    var n;
                    if (!(t instanceof Map)) return { matched: !1 };
                    let i = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: i
                        };
                    let r = (e, t) => {
                        i[e] = (i[e] || []).concat([t]);
                    };
                    if (0 === e.length) return { matched: !0 };
                    if (1 === e.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == (n = e[0]) ? void 0 : n.toString()}`);
                    let [a, s] = e;
                    return {
                        matched: m(t, (e, t) => {
                            let n = l(a, t, r),
                                i = l(s, e, r);
                            return n && i;
                        }),
                        selections: i
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...u(e[0]), ...u(e[1])])
            })
        });
    },
    intersection: g,
    union: E,
    not: function (e) {
        return f({
            [i]: () => ({
                match: (t) => ({
                    matched: !l(e, t, () => {})
                }),
                getSelectionKeys: () => [],
                matcherType: 'not'
            })
        });
    },
    when: v,
    select: y,
    any: S,
    _: A,
    string: C,
    between: R,
    lt: O,
    gt: D,
    lte: L,
    gte: x,
    int: w,
    finite: P,
    positive: M,
    negative: k,
    number: G,
    betweenBigInt: B,
    ltBigInt: Z,
    gtBigInt: F,
    lteBigInt: V,
    gteBigInt: j,
    positiveBigInt: H,
    negativeBigInt: Y,
    bigint: K,
    boolean: z,
    symbol: q,
    nullish: Q,
    instanceOf: function (e) {
        return f(
            v(
                (function (e) {
                    return (t) => t instanceof e;
                })(e)
            )
        );
    },
    shape: function (e) {
        return f(v(d(e)));
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
            i = [e[0]];
        3 === e.length && 'function' == typeof e[1] ? (i.push(e[0]), (t = e[1])) : e.length > 2 && i.push(...e.slice(1, e.length - 1));
        let r = !1,
            s = {},
            o = (e, t) => {
                (r = !0), (s[e] = t);
            },
            u =
                i.some((e) => l(e, this.input, o)) && (!t || t(this.input))
                    ? {
                          matched: !0,
                          value: n(r ? (a in s ? s[a] : s) : this.input, this.input)
                      }
                    : J;
        return new ee(this.input, u);
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
