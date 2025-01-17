r.d(n, {
    EQ: function () {
        return ee;
    },
    P: function () {
        return J;
    }
});
let i = Symbol.for('@ts-pattern/matcher'),
    a = Symbol.for('@ts-pattern/isVariadic'),
    s = '@ts-pattern/anonymous-select-key',
    o = (e) => !!(e && 'object' == typeof e),
    l = (e) => e && !!e[i],
    u = (e, n, r) => {
        if (l(e)) {
            let { matched: a, selections: s } = e[i]().match(n);
            return a && s && Object.keys(s).forEach((e) => r(e, s[e])), a;
        }
        if (o(e)) {
            if (!o(n)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(n)) return !1;
                let i = [],
                    s = [],
                    o = [];
                for (let n of e.keys()) {
                    let r = e[n];
                    l(r) && r[a] ? o.push(r) : o.length ? s.push(r) : i.push(r);
                }
                if (o.length) {
                    if (o.length > 1) throw Error('Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.');
                    if (n.length < i.length + s.length) return !1;
                    let e = n.slice(0, i.length),
                        a = 0 === s.length ? [] : n.slice(-s.length),
                        l = n.slice(i.length, 0 === s.length ? 1 / 0 : -s.length);
                    return i.every((n, i) => u(n, e[i], r)) && s.every((e, n) => u(e, a[n], r)) && (0 === o.length || u(o[0], l, r));
                }
                return e.length === n.length && e.every((e, i) => u(e, n[i], r));
            }
            return Object.keys(e).every((a) => {
                var s;
                let o = e[a];
                return (a in n || (l((s = o)) && 'optional' === s[i]().matcherType)) && u(o, n[a], r);
            });
        }
        return Object.is(n, e);
    },
    c = (e) => {
        var n, r, a;
        return o(e) ? (l(e) ? (null != (n = null == (r = (a = e[i]()).getSelectionKeys) ? void 0 : r.call(a)) ? n : []) : Array.isArray(e) ? d(e, c) : d(Object.values(e), c)) : [];
    },
    d = (e, n) => e.reduce((e, r) => e.concat(n(r)), []);
function f(...e) {
    if (1 === e.length) {
        let [n] = e;
        return (e) => u(n, e, () => {});
    }
    if (2 === e.length) {
        let [n, r] = e;
        return u(n, r, () => {});
    }
    throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function _(e) {
    return Object.assign(e, {
        optional: () => p(e),
        and: (n) => E(e, n),
        or: (n) => v(e, n),
        select: (n) => (void 0 === n ? T(e) : T(n, e))
    });
}
function h(e) {
    let n;
    return Object.assign(
        Object.assign((n = e), {
            *[Symbol.iterator]() {
                yield Object.assign(n, { [a]: !0 });
            }
        }),
        {
            optional: () => h(p(e)),
            select: (n) => h(void 0 === n ? T(e) : T(n, e))
        }
    );
}
function p(e) {
    return _({
        [i]: () => ({
            match: (n) => {
                let r = {},
                    i = (e, n) => {
                        r[e] = n;
                    };
                return void 0 === n
                    ? (c(e).forEach((e) => i(e, void 0)),
                      {
                          matched: !0,
                          selections: r
                      })
                    : {
                          matched: u(e, n, i),
                          selections: r
                      };
            },
            getSelectionKeys: () => c(e),
            matcherType: 'optional'
        })
    });
}
let m = (e, n) => {
        for (let r of e) if (!n(r)) return !1;
        return !0;
    },
    g = (e, n) => {
        for (let [r, i] of e.entries()) if (!n(i, r)) return !1;
        return !0;
    };
function E(...e) {
    return _({
        [i]: () => ({
            match: (n) => {
                let r = {},
                    i = (e, n) => {
                        r[e] = n;
                    };
                return {
                    matched: e.every((e) => u(e, n, i)),
                    selections: r
                };
            },
            getSelectionKeys: () => d(e, c),
            matcherType: 'and'
        })
    });
}
function v(...e) {
    return _({
        [i]: () => ({
            match: (n) => {
                let r = {},
                    i = (e, n) => {
                        r[e] = n;
                    };
                return (
                    d(e, c).forEach((e) => i(e, void 0)),
                    {
                        matched: e.some((e) => u(e, n, i)),
                        selections: r
                    }
                );
            },
            getSelectionKeys: () => d(e, c),
            matcherType: 'or'
        })
    });
}
function I(e) {
    return { [i]: () => ({ match: (n) => ({ matched: !!e(n) }) }) };
}
function T(...e) {
    let n = 'string' == typeof e[0] ? e[0] : void 0,
        r = 2 === e.length ? e[1] : 'string' == typeof e[0] ? void 0 : e[0];
    return _({
        [i]: () => ({
            match: (e) => {
                let i = { [null != n ? n : s]: e };
                return {
                    matched:
                        void 0 === r ||
                        u(r, e, (e, n) => {
                            i[e] = n;
                        }),
                    selections: i
                };
            },
            getSelectionKeys: () => [null != n ? n : s].concat(void 0 === r ? [] : c(r))
        })
    });
}
function b(e) {
    return 'number' == typeof e;
}
function y(e) {
    return 'string' == typeof e;
}
function S(e) {
    return 'bigint' == typeof e;
}
let A = _(
        I(function (e) {
            return !0;
        })
    ),
    N = A,
    C = (e) =>
        Object.assign(_(e), {
            startsWith: (n) => {
                var r;
                return C(E(e, ((r = n), I((e) => y(e) && e.startsWith(r)))));
            },
            endsWith: (n) => {
                var r;
                return C(E(e, ((r = n), I((e) => y(e) && e.endsWith(r)))));
            },
            minLength: (n) => {
                let r;
                return C(E(e, ((r = n), I((e) => y(e) && e.length >= r))));
            },
            maxLength: (n) => {
                let r;
                return C(E(e, ((r = n), I((e) => y(e) && e.length <= r))));
            },
            includes: (n) => {
                var r;
                return C(E(e, ((r = n), I((e) => y(e) && e.includes(r)))));
            },
            regex: (n) => {
                var r;
                return C(E(e, ((r = n), I((e) => y(e) && !!e.match(r)))));
            }
        }),
    R = C(I(y)),
    O = (e, n) => I((r) => b(r) && e <= r && n >= r),
    D = (e) => I((n) => b(n) && n < e),
    L = (e) => I((n) => b(n) && n > e),
    x = (e) => I((n) => b(n) && n <= e),
    w = (e) => I((n) => b(n) && n >= e),
    P = () => I((e) => b(e) && Number.isInteger(e)),
    M = () => I((e) => b(e) && Number.isFinite(e)),
    k = () => I((e) => b(e) && e > 0),
    U = () => I((e) => b(e) && e < 0),
    B = (e) =>
        Object.assign(_(e), {
            between: (n, r) => B(E(e, O(n, r))),
            lt: (n) => B(E(e, D(n))),
            gt: (n) => B(E(e, L(n))),
            lte: (n) => B(E(e, x(n))),
            gte: (n) => B(E(e, w(n))),
            int: () => B(E(e, P())),
            finite: () => B(E(e, M())),
            positive: () => B(E(e, k())),
            negative: () => B(E(e, U()))
        }),
    G = B(I(b)),
    Z = (e, n) => I((r) => S(r) && e <= r && n >= r),
    F = (e) => I((n) => S(n) && n < e),
    V = (e) => I((n) => S(n) && n > e),
    j = (e) => I((n) => S(n) && n <= e),
    H = (e) => I((n) => S(n) && n >= e),
    Y = () => I((e) => S(e) && e > 0),
    W = () => I((e) => S(e) && e < 0),
    K = (e) =>
        Object.assign(_(e), {
            between: (n, r) => K(E(e, Z(n, r))),
            lt: (n) => K(E(e, F(n))),
            gt: (n) => K(E(e, V(n))),
            lte: (n) => K(E(e, j(n))),
            gte: (n) => K(E(e, H(n))),
            positive: () => K(E(e, Y())),
            negative: () => K(E(e, W()))
        }),
    z = K(I(S)),
    q = _(
        I(function (e) {
            return 'boolean' == typeof e;
        })
    ),
    Q = _(
        I(function (e) {
            return 'symbol' == typeof e;
        })
    ),
    X = _(
        I(function (e) {
            return null == e;
        })
    );
var J = {
    __proto__: null,
    matcher: i,
    optional: p,
    array: function (...e) {
        return h({
            [i]: () => ({
                match: (n) => {
                    if (!Array.isArray(n)) return { matched: !1 };
                    if (0 === e.length) return { matched: !0 };
                    let r = e[0],
                        i = {};
                    if (0 === n.length)
                        return (
                            c(r).forEach((e) => {
                                i[e] = [];
                            }),
                            {
                                matched: !0,
                                selections: i
                            }
                        );
                    let a = (e, n) => {
                        i[e] = (i[e] || []).concat([n]);
                    };
                    return {
                        matched: n.every((e) => u(r, e, a)),
                        selections: i
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : c(e[0]))
            })
        });
    },
    set: function (...e) {
        return _({
            [i]: () => ({
                match: (n) => {
                    if (!(n instanceof Set)) return { matched: !1 };
                    let r = {};
                    if (0 === n.size)
                        return {
                            matched: !0,
                            selections: r
                        };
                    if (0 === e.length) return { matched: !0 };
                    let i = (e, n) => {
                            r[e] = (r[e] || []).concat([n]);
                        },
                        a = e[0];
                    return {
                        matched: m(n, (e) => u(a, e, i)),
                        selections: r
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : c(e[0]))
            })
        });
    },
    map: function (...e) {
        return _({
            [i]: () => ({
                match: (n) => {
                    var r;
                    if (!(n instanceof Map)) return { matched: !1 };
                    let i = {};
                    if (0 === n.size)
                        return {
                            matched: !0,
                            selections: i
                        };
                    let a = (e, n) => {
                        i[e] = (i[e] || []).concat([n]);
                    };
                    if (0 === e.length) return { matched: !0 };
                    if (1 === e.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == (r = e[0]) ? void 0 : r.toString()}`);
                    let [s, o] = e;
                    return {
                        matched: g(n, (e, n) => {
                            let r = u(s, n, a),
                                i = u(o, e, a);
                            return r && i;
                        }),
                        selections: i
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...c(e[0]), ...c(e[1])])
            })
        });
    },
    intersection: E,
    union: v,
    not: function (e) {
        return _({
            [i]: () => ({
                match: (n) => ({
                    matched: !u(e, n, () => {})
                }),
                getSelectionKeys: () => [],
                matcherType: 'not'
            })
        });
    },
    when: I,
    select: T,
    any: A,
    _: N,
    string: R,
    between: O,
    lt: D,
    gt: L,
    lte: x,
    gte: w,
    int: P,
    finite: M,
    positive: k,
    negative: U,
    number: G,
    betweenBigInt: Z,
    ltBigInt: F,
    gtBigInt: V,
    lteBigInt: j,
    gteBigInt: H,
    positiveBigInt: Y,
    negativeBigInt: W,
    bigint: z,
    boolean: q,
    symbol: Q,
    nullish: X,
    instanceOf: function (e) {
        return _(
            I(
                (function (e) {
                    return (n) => n instanceof e;
                })(e)
            )
        );
    },
    shape: function (e) {
        return _(I(f(e)));
    }
};
let $ = {
    matched: !1,
    value: void 0
};
function ee(e) {
    return new et(e, $);
}
class et {
    constructor(e, n) {
        (this.input = void 0), (this.state = void 0), (this.input = e), (this.state = n);
    }
    with(...e) {
        let n;
        if (this.state.matched) return this;
        let r = e[e.length - 1],
            i = [e[0]];
        3 === e.length && 'function' == typeof e[1] ? (i.push(e[0]), (n = e[1])) : e.length > 2 && i.push(...e.slice(1, e.length - 1));
        let a = !1,
            o = {},
            l = (e, n) => {
                (a = !0), (o[e] = n);
            },
            c =
                i.some((e) => u(e, this.input, l)) && (!n || n(this.input))
                    ? {
                          matched: !0,
                          value: r(a ? (s in o ? o[s] : o) : this.input, this.input)
                      }
                    : $;
        return new et(this.input, c);
    }
    when(e, n) {
        if (this.state.matched) return this;
        let r = !!e(this.input);
        return new et(
            this.input,
            r
                ? {
                      matched: !0,
                      value: n(this.input, this.input)
                  }
                : $
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
        } catch (n) {
            e = this.input;
        }
        throw Error(`Pattern matching error: no pattern matches value ${e}`);
    }
    returnType() {
        return this;
    }
}
