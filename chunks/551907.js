!(function (t, n) {
    e.exports = n();
})(self, () =>
    (() => {
        var e = {
                7802: (e, t, n) => {
                    "use strict";
                    var r = n(5049),
                        i = n(3036),
                        a = n(78);
                    e.exports = n(1909) || r.call(a, i);
                },
                3036: (e) => {
                    "use strict";
                    e.exports = Function.prototype.apply;
                },
                78: (e) => {
                    "use strict";
                    e.exports = Function.prototype.call;
                },
                6688: (e, t, n) => {
                    "use strict";
                    var r = n(5049),
                        i = n(6785),
                        a = n(78),
                        s = n(7802);
                    e.exports = function (e) {
                        if (e.length < 1 || "function" != typeof e[0]) throw new i("a function is required");
                        return s(r, a, e);
                    };
                },
                1909: (e) => {
                    "use strict";
                    e.exports = "u" > typeof Reflect && Reflect && Reflect.apply;
                },
                2774: (e, t, n) => {
                    "use strict";
                    var r = n(8372),
                        i = n(6688),
                        a = i([r("%String.prototype.indexOf%")]);
                    e.exports = function (e, t) {
                        var n = r(e, !!t);
                        return "function" == typeof n && a(e, ".prototype.") > -1 ? i([n]) : n;
                    };
                },
                7848: (e) => {
                    "use strict";
                    var t = Object.defineProperty || !1;
                    if (t)
                        try {
                            t({}, "a", { value: 1 });
                        } catch (e) {
                            t = !1;
                        }
                    e.exports = t;
                },
                8372: (e, t, n) => {
                    "use strict";
                    var r,
                        i = n(5846),
                        a = n(5293),
                        s = n(9055),
                        o = n(8888),
                        l = n(7900),
                        u = n(5389),
                        c = n(6785),
                        d = n(4055),
                        _ = n(716),
                        f = n(7450),
                        h = n(3774),
                        p = n(7552),
                        g = n(5874),
                        E = n(9292),
                        A = n(6071),
                        I = Function,
                        T = function (e) {
                            try {
                                return I('"use strict"; return (' + e + ").constructor;")();
                            } catch (e) {}
                        },
                        y = n(6692),
                        S = n(7848),
                        v = function () {
                            throw new c();
                        },
                        C = y
                            ? (function () {
                                  try {
                                      return v;
                                  } catch (e) {
                                      try {
                                          return y(arguments, "callee").get;
                                      } catch (e) {
                                          return v;
                                      }
                                  }
                              })()
                            : v,
                        b = n(5634)(),
                        N = n(7106),
                        R = n(3766),
                        O = n(6822),
                        D = n(3036),
                        L = n(78),
                        w = {},
                        x = "u" > typeof Uint8Array && N ? N(Uint8Array) : r,
                        P = {
                            __proto__: null,
                            "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": b && N ? N([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": w,
                            "%AsyncGenerator%": w,
                            "%AsyncGeneratorFunction%": w,
                            "%AsyncIteratorPrototype%": w,
                            "%Atomics%": "u" < typeof Atomics ? r : Atomics,
                            "%BigInt%": "u" < typeof BigInt ? r : BigInt,
                            "%BigInt64Array%": "u" < typeof BigInt64Array ? r : BigInt64Array,
                            "%BigUint64Array%": "u" < typeof BigUint64Array ? r : BigUint64Array,
                            "%Boolean%": Boolean,
                            "%DataView%": "u" < typeof DataView ? r : DataView,
                            "%Date%": Date,
                            "%decodeURI%": decodeURI,
                            "%decodeURIComponent%": decodeURIComponent,
                            "%encodeURI%": encodeURI,
                            "%encodeURIComponent%": encodeURIComponent,
                            "%Error%": a,
                            "%eval%": eval,
                            "%EvalError%": s,
                            "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": I,
                            "%GeneratorFunction%": w,
                            "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": b && N ? N(N([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "u" < typeof Map ? r : Map,
                            "%MapIteratorPrototype%": "u" > typeof Map && b && N ? N(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": y,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "u" < typeof Promise ? r : Promise,
                            "%Proxy%": "u" < typeof Proxy ? r : Proxy,
                            "%RangeError%": o,
                            "%ReferenceError%": l,
                            "%Reflect%": "u" < typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "u" < typeof Set ? r : Set,
                            "%SetIteratorPrototype%": "u" > typeof Set && b && N ? N(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": b && N ? N(""[Symbol.iterator]()) : r,
                            "%Symbol%": b ? Symbol : r,
                            "%SyntaxError%": u,
                            "%ThrowTypeError%": C,
                            "%TypedArray%": x,
                            "%TypeError%": c,
                            "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": L,
                            "%Function.prototype.apply%": D,
                            "%Object.defineProperty%": S,
                            "%Object.getPrototypeOf%": R,
                            "%Math.abs%": _,
                            "%Math.floor%": f,
                            "%Math.max%": h,
                            "%Math.min%": p,
                            "%Math.pow%": g,
                            "%Math.round%": E,
                            "%Math.sign%": A,
                            "%Reflect.getPrototypeOf%": O,
                        };
                    if (N)
                        try {
                            null.error;
                        } catch (e) {
                            var M = N(N(e));
                            P["%Error.prototype%"] = M;
                        }
                    var k = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = T("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = T("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = T("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && N && (n = N(i.prototype));
                            }
                            return (P[t] = n), n;
                        },
                        U = {
                            __proto__: null,
                            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                            "%ArrayPrototype%": ["Array", "prototype"],
                            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                            "%ArrayProto_values%": ["Array", "prototype", "values"],
                            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                            "%BooleanPrototype%": ["Boolean", "prototype"],
                            "%DataViewPrototype%": ["DataView", "prototype"],
                            "%DatePrototype%": ["Date", "prototype"],
                            "%ErrorPrototype%": ["Error", "prototype"],
                            "%EvalErrorPrototype%": ["EvalError", "prototype"],
                            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                            "%FunctionPrototype%": ["Function", "prototype"],
                            "%Generator%": ["GeneratorFunction", "prototype"],
                            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                            "%JSONParse%": ["JSON", "parse"],
                            "%JSONStringify%": ["JSON", "stringify"],
                            "%MapPrototype%": ["Map", "prototype"],
                            "%NumberPrototype%": ["Number", "prototype"],
                            "%ObjectPrototype%": ["Object", "prototype"],
                            "%ObjProto_toString%": ["Object", "prototype", "toString"],
                            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                            "%PromisePrototype%": ["Promise", "prototype"],
                            "%PromiseProto_then%": ["Promise", "prototype", "then"],
                            "%Promise_all%": ["Promise", "all"],
                            "%Promise_reject%": ["Promise", "reject"],
                            "%Promise_resolve%": ["Promise", "resolve"],
                            "%RangeErrorPrototype%": ["RangeError", "prototype"],
                            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                            "%RegExpPrototype%": ["RegExp", "prototype"],
                            "%SetPrototype%": ["Set", "prototype"],
                            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                            "%StringPrototype%": ["String", "prototype"],
                            "%SymbolPrototype%": ["Symbol", "prototype"],
                            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                            "%TypeErrorPrototype%": ["TypeError", "prototype"],
                            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                            "%URIErrorPrototype%": ["URIError", "prototype"],
                            "%WeakMapPrototype%": ["WeakMap", "prototype"],
                            "%WeakSetPrototype%": ["WeakSet", "prototype"],
                        },
                        G = n(5049),
                        F = n(5215),
                        V = G.call(L, Array.prototype.concat),
                        B = G.call(D, Array.prototype.splice),
                        j = G.call(L, String.prototype.replace),
                        H = G.call(L, String.prototype.slice),
                        Y = G.call(L, RegExp.prototype.exec),
                        W =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        K = /\\(\\)?/g,
                        $ = function (e, t) {
                            var n,
                                r = e;
                            if ((F(U, r) && (r = "%" + (n = U[r])[0] + "%"), F(P, r))) {
                                var i = P[r];
                                if ((i === w && (i = k(r)), void 0 === i && !t))
                                    throw new c(
                                        "intrinsic " + e + " exists, but is not available. Please file an issue!",
                                    );
                                return { alias: n, name: r, value: i };
                            }
                            throw new u("intrinsic " + e + " does not exist!");
                        };
                    e.exports = function (e, t) {
                        if ("string" != typeof e || 0 === e.length)
                            throw new c("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof t)
                            throw new c('"allowMissing" argument must be a boolean');
                        if (null === Y(/^%?[^%]*%?$/, e))
                            throw new u(
                                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
                            );
                        var n = (function (e) {
                                var t = H(e, 0, 1),
                                    n = H(e, -1);
                                if ("%" === t && "%" !== n)
                                    throw new u("invalid intrinsic syntax, expected closing `%`");
                                if ("%" === n && "%" !== t)
                                    throw new u("invalid intrinsic syntax, expected opening `%`");
                                var r = [];
                                return (
                                    j(e, W, function (e, t, n, i) {
                                        r[r.length] = n ? j(i, K, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = $("%" + r + "%", t),
                            a = i.name,
                            s = i.value,
                            o = !1,
                            l = i.alias;
                        l && ((r = l[0]), B(n, V([0, 1], l)));
                        for (var d = 1, _ = !0; d < n.length; d += 1) {
                            var f = n[d],
                                h = H(f, 0, 1),
                                p = H(f, -1);
                            if (('"' === h || "'" === h || "`" === h || '"' === p || "'" === p || "`" === p) && h !== p)
                                throw new u("property names with quotes must have matching quotes");
                            if ((("constructor" !== f && _) || (o = !0), F(P, (a = "%" + (r += "." + f) + "%"))))
                                s = P[a];
                            else if (null != s) {
                                if (!(f in s)) {
                                    if (!t)
                                        throw new c(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (y && d + 1 >= n.length) {
                                    var g = y(s, f);
                                    s = (_ = !!g) && "get" in g && !("originalValue" in g.get) ? g.get : s[f];
                                } else (_ = F(s, f)), (s = s[f]);
                                _ && !o && (P[a] = s);
                            }
                        }
                        return s;
                    };
                },
                8160: (e) => {
                    "use strict";
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                6692: (e, t, n) => {
                    "use strict";
                    var r = n(8160);
                    if (r)
                        try {
                            r([], "length");
                        } catch (e) {
                            r = null;
                        }
                    e.exports = r;
                },
                5634: (e, t, n) => {
                    "use strict";
                    var r = "u" > typeof Symbol && Symbol,
                        i = n(9576);
                    e.exports = function () {
                        return (
                            "function" == typeof r &&
                            "function" == typeof Symbol &&
                            "symbol" == typeof r("foo") &&
                            "symbol" == typeof Symbol("bar") &&
                            i()
                        );
                    };
                },
                9576: (e) => {
                    "use strict";
                    e.exports = function () {
                        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                        if ("symbol" == typeof Symbol.iterator) return !0;
                        var e = {},
                            t = Symbol("test"),
                            n = Object(t);
                        if (
                            "string" == typeof t ||
                            "[object Symbol]" !== Object.prototype.toString.call(t) ||
                            "[object Symbol]" !== Object.prototype.toString.call(n)
                        )
                            return !1;
                        for (var r in ((e[t] = 42), e)) return !1;
                        if (
                            ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
                            ("function" == typeof Object.getOwnPropertyNames &&
                                0 !== Object.getOwnPropertyNames(e).length)
                        )
                            return !1;
                        var i = Object.getOwnPropertySymbols(e);
                        if (1 !== i.length || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
                            return !1;
                        if ("function" == typeof Object.getOwnPropertyDescriptor) {
                            var a = Object.getOwnPropertyDescriptor(e, t);
                            if (42 !== a.value || !0 !== a.enumerable) return !1;
                        }
                        return !0;
                    };
                },
                9302: (e, t, n) => {
                    "use strict";
                    var r,
                        i = n(6688),
                        a = n(8952);
                    try {
                        r = [].__proto__ === Array.prototype;
                    } catch (e) {
                        if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
                    }
                    var s = !!r && a && a(Object.prototype, "__proto__"),
                        o = Object,
                        l = o.getPrototypeOf;
                    e.exports =
                        s && "function" == typeof s.get
                            ? i([s.get])
                            : "function" == typeof l &&
                              function (e) {
                                  return l(null == e ? e : o(e));
                              };
                },
                6332: (e) => {
                    "use strict";
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                8952: (e, t, n) => {
                    "use strict";
                    var r = n(6332);
                    if (r)
                        try {
                            r([], "length");
                        } catch (e) {
                            r = null;
                        }
                    e.exports = r;
                },
                9055: (e) => {
                    "use strict";
                    e.exports = EvalError;
                },
                5293: (e) => {
                    "use strict";
                    e.exports = Error;
                },
                8888: (e) => {
                    "use strict";
                    e.exports = RangeError;
                },
                7900: (e) => {
                    "use strict";
                    e.exports = ReferenceError;
                },
                5389: (e) => {
                    "use strict";
                    e.exports = SyntaxError;
                },
                6785: (e) => {
                    "use strict";
                    e.exports = TypeError;
                },
                4055: (e) => {
                    "use strict";
                    e.exports = URIError;
                },
                5846: (e) => {
                    "use strict";
                    e.exports = Object;
                },
                2719: (e) => {
                    "use strict";
                    var t = Object.prototype.toString,
                        n = Math.max,
                        r = function (e, t) {
                            for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
                            for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
                            return n;
                        };
                    e.exports = function (e) {
                        var i = this;
                        if ("function" != typeof i || "[object Function]" !== t.apply(i))
                            throw TypeError("Function.prototype.bind called on incompatible " + i);
                        for (
                            var a,
                                s = (function (e, t) {
                                    for (var n = [], r = 1, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
                                    return n;
                                })(arguments),
                                o = n(0, i.length - s.length),
                                l = [],
                                u = 0;
                            u < o;
                            u++
                        )
                            l[u] = "$" + u;
                        if (
                            ((a = Function(
                                "binder",
                                "return function (" +
                                    (function (e, t) {
                                        for (var n = "", r = 0; r < e.length; r += 1)
                                            (n += e[r]), r + 1 < e.length && (n += ",");
                                        return n;
                                    })(l) +
                                    "){ return binder.apply(this,arguments); }",
                            )(function () {
                                if (this instanceof a) {
                                    var t = i.apply(this, r(s, arguments));
                                    return Object(t) === t ? t : this;
                                }
                                return i.apply(e, r(s, arguments));
                            })),
                            i.prototype)
                        ) {
                            var c = function () {};
                            (c.prototype = i.prototype), (a.prototype = new c()), (c.prototype = null);
                        }
                        return a;
                    };
                },
                5049: (e, t, n) => {
                    "use strict";
                    var r = n(2719);
                    e.exports = Function.prototype.bind || r;
                },
                3766: (e, t, n) => {
                    "use strict";
                    e.exports = n(5846).getPrototypeOf || null;
                },
                6822: (e) => {
                    "use strict";
                    e.exports = ("u" > typeof Reflect && Reflect.getPrototypeOf) || null;
                },
                7106: (e, t, n) => {
                    "use strict";
                    var r = n(6822),
                        i = n(3766),
                        a = n(9302);
                    e.exports = r
                        ? function (e) {
                              return r(e);
                          }
                        : i
                          ? function (e) {
                                if (!e || ("object" != typeof e && "function" != typeof e))
                                    throw TypeError("getProto: not an object");
                                return i(e);
                            }
                          : a
                            ? function (e) {
                                  return a(e);
                              }
                            : null;
                },
                5215: (e, t, n) => {
                    "use strict";
                    var r = Function.prototype.call,
                        i = Object.prototype.hasOwnProperty;
                    e.exports = n(5049).call(r, i);
                },
                2709: (e, t, n) => {
                    var r,
                        i,
                        a = 1 / 0,
                        s = "[object Symbol]",
                        o = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        l = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        u = "\\ud800-\\udfff",
                        c = "\\u2700-\\u27bf",
                        d = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        _ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        f =
                            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        h = "[" + f + "]",
                        p = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
                        g = "\\d+",
                        E = "[" + c + "]",
                        A = "[" + d + "]",
                        I = "[^" + u + f + g + c + d + _ + "]",
                        T = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        y = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        S = "[" + _ + "]",
                        v = "(?:" + A + "|" + I + ")",
                        C = "(?:" + S + "|" + I + ")",
                        b = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                        N = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                        R = "(?:" + p + "|\\ud83c[\\udffb-\\udfff])?",
                        O = "[\\ufe0e\\ufe0f]?",
                        D = O + R + "(?:\\u200d(?:" + ["[^" + u + "]", T, y].join("|") + ")" + O + R + ")*",
                        L = "(?:" + [E, T, y].join("|") + ")" + D,
                        w = RegExp("['’]", "g"),
                        x = RegExp(p, "g"),
                        P = RegExp(
                            [
                                S + "?" + A + "+" + b + "(?=" + [h, S, "$"].join("|") + ")",
                                C + "+" + N + "(?=" + [h, S + v, "$"].join("|") + ")",
                                S + "?" + v + "+" + b,
                                S + "+" + N,
                                g,
                                L,
                            ].join("|"),
                            "g",
                        ),
                        M = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        k = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                        U = "object" == typeof self && self && self.Object === Object && self,
                        G = k || U || Function("return this")(),
                        F =
                            ((i = {
                                À: "A",
                                Á: "A",
                                Â: "A",
                                Ã: "A",
                                Ä: "A",
                                Å: "A",
                                à: "a",
                                á: "a",
                                â: "a",
                                ã: "a",
                                ä: "a",
                                å: "a",
                                Ç: "C",
                                ç: "c",
                                Ð: "D",
                                ð: "d",
                                È: "E",
                                É: "E",
                                Ê: "E",
                                Ë: "E",
                                è: "e",
                                é: "e",
                                ê: "e",
                                ë: "e",
                                Ì: "I",
                                Í: "I",
                                Î: "I",
                                Ï: "I",
                                ì: "i",
                                í: "i",
                                î: "i",
                                ï: "i",
                                Ñ: "N",
                                ñ: "n",
                                Ò: "O",
                                Ó: "O",
                                Ô: "O",
                                Õ: "O",
                                Ö: "O",
                                Ø: "O",
                                ò: "o",
                                ó: "o",
                                ô: "o",
                                õ: "o",
                                ö: "o",
                                ø: "o",
                                Ù: "U",
                                Ú: "U",
                                Û: "U",
                                Ü: "U",
                                ù: "u",
                                ú: "u",
                                û: "u",
                                ü: "u",
                                Ý: "Y",
                                ý: "y",
                                ÿ: "y",
                                Æ: "Ae",
                                æ: "ae",
                                Þ: "Th",
                                þ: "th",
                                ß: "ss",
                                Ā: "A",
                                Ă: "A",
                                Ą: "A",
                                ā: "a",
                                ă: "a",
                                ą: "a",
                                Ć: "C",
                                Ĉ: "C",
                                Ċ: "C",
                                Č: "C",
                                ć: "c",
                                ĉ: "c",
                                ċ: "c",
                                č: "c",
                                Ď: "D",
                                Đ: "D",
                                ď: "d",
                                đ: "d",
                                Ē: "E",
                                Ĕ: "E",
                                Ė: "E",
                                Ę: "E",
                                Ě: "E",
                                ē: "e",
                                ĕ: "e",
                                ė: "e",
                                ę: "e",
                                ě: "e",
                                Ĝ: "G",
                                Ğ: "G",
                                Ġ: "G",
                                Ģ: "G",
                                ĝ: "g",
                                ğ: "g",
                                ġ: "g",
                                ģ: "g",
                                Ĥ: "H",
                                Ħ: "H",
                                ĥ: "h",
                                ħ: "h",
                                Ĩ: "I",
                                Ī: "I",
                                Ĭ: "I",
                                Į: "I",
                                İ: "I",
                                ĩ: "i",
                                ī: "i",
                                ĭ: "i",
                                į: "i",
                                ı: "i",
                                Ĵ: "J",
                                ĵ: "j",
                                Ķ: "K",
                                ķ: "k",
                                ĸ: "k",
                                Ĺ: "L",
                                Ļ: "L",
                                Ľ: "L",
                                Ŀ: "L",
                                Ł: "L",
                                ĺ: "l",
                                ļ: "l",
                                ľ: "l",
                                ŀ: "l",
                                ł: "l",
                                Ń: "N",
                                Ņ: "N",
                                Ň: "N",
                                Ŋ: "N",
                                ń: "n",
                                ņ: "n",
                                ň: "n",
                                ŋ: "n",
                                Ō: "O",
                                Ŏ: "O",
                                Ő: "O",
                                ō: "o",
                                ŏ: "o",
                                ő: "o",
                                Ŕ: "R",
                                Ŗ: "R",
                                Ř: "R",
                                ŕ: "r",
                                ŗ: "r",
                                ř: "r",
                                Ś: "S",
                                Ŝ: "S",
                                Ş: "S",
                                Š: "S",
                                ś: "s",
                                ŝ: "s",
                                ş: "s",
                                š: "s",
                                Ţ: "T",
                                Ť: "T",
                                Ŧ: "T",
                                ţ: "t",
                                ť: "t",
                                ŧ: "t",
                                Ũ: "U",
                                Ū: "U",
                                Ŭ: "U",
                                Ů: "U",
                                Ű: "U",
                                Ų: "U",
                                ũ: "u",
                                ū: "u",
                                ŭ: "u",
                                ů: "u",
                                ű: "u",
                                ų: "u",
                                Ŵ: "W",
                                ŵ: "w",
                                Ŷ: "Y",
                                ŷ: "y",
                                Ÿ: "Y",
                                Ź: "Z",
                                Ż: "Z",
                                Ž: "Z",
                                ź: "z",
                                ż: "z",
                                ž: "z",
                                Ĳ: "IJ",
                                ĳ: "ij",
                                Œ: "Oe",
                                œ: "oe",
                                ŉ: "'n",
                                ſ: "ss",
                            }),
                            function (e) {
                                return null == i ? void 0 : i[e];
                            }),
                        V = Object.prototype.toString,
                        B = G.Symbol,
                        j = B ? B.prototype : void 0,
                        H = j ? j.toString : void 0;
                    function Y(e) {
                        return null == e
                            ? ""
                            : (function (e) {
                                  if ("string" == typeof e) return e;
                                  if (
                                      (function (e) {
                                          return (
                                              "symbol" == typeof e ||
                                              ((function (e) {
                                                  return !!e && "object" == typeof e;
                                              })(e) &&
                                                  V.call(e) == s)
                                          );
                                      })(e)
                                  )
                                      return H ? H.call(e) : "";
                                  var t = e + "";
                                  return "0" == t && 1 / e == -a ? "-0" : t;
                              })(e);
                    }
                    (r = function (e, t, n) {
                        return e + (n ? "-" : "") + t.toLowerCase();
                    }),
                        (e.exports = function (e) {
                            return (function (e, t, n, r) {
                                for (var i = -1, a = e ? e.length : 0; ++i < a; ) n = t(n, e[i], i, e);
                                return n;
                            })(
                                (function (e, t, n) {
                                    return !(function (e) {
                                        return M.test(e);
                                    })((e = Y(e)))
                                        ? (function (e) {
                                              return e.match(o) || [];
                                          })(e)
                                        : (function (e) {
                                              return e.match(P) || [];
                                          })(e);
                                })(
                                    (function (e) {
                                        return (e = Y(e)) && e.replace(l, F).replace(x, "");
                                    })(e).replace(w, ""),
                                ),
                                r,
                                "",
                            );
                        });
                },
                716: (e) => {
                    "use strict";
                    e.exports = Math.abs;
                },
                7450: (e) => {
                    "use strict";
                    e.exports = Math.floor;
                },
                713: (e) => {
                    "use strict";
                    e.exports =
                        Number.isNaN ||
                        function (e) {
                            return e != e;
                        };
                },
                3774: (e) => {
                    "use strict";
                    e.exports = Math.max;
                },
                7552: (e) => {
                    "use strict";
                    e.exports = Math.min;
                },
                5874: (e) => {
                    "use strict";
                    e.exports = Math.pow;
                },
                9292: (e) => {
                    "use strict";
                    e.exports = Math.round;
                },
                6071: (e, t, n) => {
                    "use strict";
                    var r = n(713);
                    e.exports = function (e) {
                        return r(e) || 0 === e ? e : e < 0 ? -1 : 1;
                    };
                },
                5937: (e, t, n) => {
                    var r = "function" == typeof Map && Map.prototype,
                        i =
                            Object.getOwnPropertyDescriptor && r
                                ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
                                : null,
                        a = r && i && "function" == typeof i.get ? i.get : null,
                        s = r && Map.prototype.forEach,
                        o = "function" == typeof Set && Set.prototype,
                        l =
                            Object.getOwnPropertyDescriptor && o
                                ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
                                : null,
                        u = o && l && "function" == typeof l.get ? l.get : null,
                        c = o && Set.prototype.forEach,
                        d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                        _ = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                        f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                        h = Boolean.prototype.valueOf,
                        p = Object.prototype.toString,
                        g = Function.prototype.toString,
                        E = String.prototype.match,
                        A = String.prototype.slice,
                        I = String.prototype.replace,
                        T = String.prototype.toUpperCase,
                        y = String.prototype.toLowerCase,
                        S = RegExp.prototype.test,
                        v = Array.prototype.concat,
                        C = Array.prototype.join,
                        b = Array.prototype.slice,
                        N = Math.floor,
                        R = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                        O = Object.getOwnPropertySymbols,
                        D =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? Symbol.prototype.toString
                                : null,
                        L = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                        w =
                            "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1)
                                ? Symbol.toStringTag
                                : null,
                        x = Object.prototype.propertyIsEnumerable,
                        P =
                            ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
                            ([].__proto__ === Array.prototype
                                ? function (e) {
                                      return e.__proto__;
                                  }
                                : null);
                    function M(e, t) {
                        if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || S.call(/e/, t))
                            return t;
                        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                        if ("number" == typeof e) {
                            var r = e < 0 ? -N(-e) : N(e);
                            if (r !== e) {
                                var i = String(r),
                                    a = A.call(t, i.length + 1);
                                return I.call(i, n, "$&_") + "." + I.call(I.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
                            }
                        }
                        return I.call(t, n, "$&_");
                    }
                    var k = n(2634),
                        U = k.custom,
                        G = K(U) ? U : null,
                        F = { __proto__: null, double: '"', single: "'" },
                        V = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
                    function B(e, t, n) {
                        var r = F[n.quoteStyle || t];
                        return r + e + r;
                    }
                    function j(e) {
                        return I.call(String(e), /"/g, "&quot;");
                    }
                    function H(e) {
                        return !w || !("object" == typeof e && (w in e || void 0 !== e[w]));
                    }
                    function Y(e) {
                        return "[object Array]" === q(e) && H(e);
                    }
                    function W(e) {
                        return "[object RegExp]" === q(e) && H(e);
                    }
                    function K(e) {
                        if (L) return e && "object" == typeof e && e instanceof Symbol;
                        if ("symbol" == typeof e) return !0;
                        if (!e || "object" != typeof e || !D) return !1;
                        try {
                            return D.call(e), !0;
                        } catch (e) {}
                        return !1;
                    }
                    e.exports = function e(t, r, i, o) {
                        var l = r || {};
                        if (z(l, "quoteStyle") && !z(F, l.quoteStyle))
                            throw TypeError('option "quoteStyle" must be "single" or "double"');
                        if (
                            z(l, "maxStringLength") &&
                            ("number" == typeof l.maxStringLength
                                ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0
                                : null !== l.maxStringLength)
                        )
                            throw TypeError(
                                'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
                            );
                        var p = !z(l, "customInspect") || l.customInspect;
                        if ("boolean" != typeof p && "symbol" !== p)
                            throw TypeError(
                                "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`",
                            );
                        if (
                            z(l, "indent") &&
                            null !== l.indent &&
                            "	" !== l.indent &&
                            !(parseInt(l.indent, 10) === l.indent && l.indent > 0)
                        )
                            throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                        if (z(l, "numericSeparator") && "boolean" != typeof l.numericSeparator)
                            throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                        var T = l.numericSeparator;
                        if (void 0 === t) return "undefined";
                        if (null === t) return "null";
                        if ("boolean" == typeof t) return t ? "true" : "false";
                        if ("string" == typeof t) return Z(t, l);
                        if ("number" == typeof t) {
                            if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                            var S = String(t);
                            return T ? M(t, S) : S;
                        }
                        if ("bigint" == typeof t) {
                            var N = String(t) + "n";
                            return T ? M(t, N) : N;
                        }
                        var O = void 0 === l.depth ? 5 : l.depth;
                        if ((void 0 === i && (i = 0), i >= O && O > 0 && "object" == typeof t))
                            return Y(t) ? "[Array]" : "[Object]";
                        var U,
                            V = (function (e, t) {
                                var n;
                                if ("	" === e.indent) n = "	";
                                else {
                                    if (!("number" == typeof e.indent && e.indent > 0)) return null;
                                    n = C.call(Array(e.indent + 1), " ");
                                }
                                return { base: n, prev: C.call(Array(t + 1), n) };
                            })(l, i);
                        if (void 0 === o) o = [];
                        else if (X(o, t) >= 0) return "[Circular]";
                        function $(t, n, r) {
                            if ((n && (o = b.call(o)).push(n), r)) {
                                var a = { depth: l.depth };
                                return z(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, o);
                            }
                            return e(t, l, i + 1, o);
                        }
                        if ("function" == typeof t && !W(t)) {
                            var Q = (function (e) {
                                    if (e.name) return e.name;
                                    var t = E.call(g.call(e), /^function\s*([\w$]+)/);
                                    return t ? t[1] : null;
                                })(t),
                                ei = er(t, $);
                            return (
                                "[Function" +
                                (Q ? ": " + Q : " (anonymous)") +
                                "]" +
                                (ei.length > 0 ? " { " + C.call(ei, ", ") + " }" : "")
                            );
                        }
                        if (K(t)) {
                            var ea = L ? I.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : D.call(t);
                            return "object" != typeof t || L ? ea : J(ea);
                        }
                        if (
                            (U = t) &&
                            "object" == typeof U &&
                            (("u" > typeof HTMLElement && U instanceof HTMLElement) ||
                                ("string" == typeof U.nodeName && "function" == typeof U.getAttribute))
                        ) {
                            for (
                                var es = "<" + y.call(String(t.nodeName)), eo = t.attributes || [], el = 0;
                                el < eo.length;
                                el++
                            )
                                es += " " + eo[el].name + "=" + B(j(eo[el].value), "double", l);
                            return (
                                (es += ">"),
                                t.childNodes && t.childNodes.length && (es += "..."),
                                es + "</" + y.call(String(t.nodeName)) + ">"
                            );
                        }
                        if (Y(t)) {
                            if (0 === t.length) return "[]";
                            var eu = er(t, $);
                            return V &&
                                !(function (e) {
                                    for (var t = 0; t < e.length; t++) if (X(e[t], "\n") >= 0) return !1;
                                    return !0;
                                })(eu)
                                ? "[" + en(eu, V) + "]"
                                : "[ " + C.call(eu, ", ") + " ]";
                        }
                        if (
                            (function (e) {
                                return "[object Error]" === q(e) && H(e);
                            })(t)
                        ) {
                            var ec = er(t, $);
                            return "cause" in Error.prototype || !("cause" in t) || x.call(t, "cause")
                                ? 0 === ec.length
                                    ? "[" + String(t) + "]"
                                    : "{ [" + String(t) + "] " + C.call(ec, ", ") + " }"
                                : "{ [" + String(t) + "] " + C.call(v.call("[cause]: " + $(t.cause), ec), ", ") + " }";
                        }
                        if ("object" == typeof t && p) {
                            if (G && "function" == typeof t[G] && k) return k(t, { depth: O - i });
                            if ("symbol" !== p && "function" == typeof t.inspect) return t.inspect();
                        }
                        if (
                            (function (e) {
                                if (!a || !e || "object" != typeof e) return !1;
                                try {
                                    a.call(e);
                                    try {
                                        u.call(e);
                                    } catch (e) {
                                        return !0;
                                    }
                                    return e instanceof Map;
                                } catch (e) {}
                                return !1;
                            })(t)
                        ) {
                            var ed = [];
                            return (
                                s &&
                                    s.call(t, function (e, n) {
                                        ed.push($(n, t, !0) + " => " + $(e, t));
                                    }),
                                et("Map", a.call(t), ed, V)
                            );
                        }
                        if (
                            (function (e) {
                                if (!u || !e || "object" != typeof e) return !1;
                                try {
                                    u.call(e);
                                    try {
                                        a.call(e);
                                    } catch (e) {
                                        return !0;
                                    }
                                    return e instanceof Set;
                                } catch (e) {}
                                return !1;
                            })(t)
                        ) {
                            var e_ = [];
                            return (
                                c &&
                                    c.call(t, function (e) {
                                        e_.push($(e, t));
                                    }),
                                et("Set", u.call(t), e_, V)
                            );
                        }
                        if (
                            (function (e) {
                                if (!d || !e || "object" != typeof e) return !1;
                                try {
                                    d.call(e, d);
                                    try {
                                        _.call(e, _);
                                    } catch (e) {
                                        return !0;
                                    }
                                    return e instanceof WeakMap;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return ee("WeakMap");
                        if (
                            (function (e) {
                                if (!_ || !e || "object" != typeof e) return !1;
                                try {
                                    _.call(e, _);
                                    try {
                                        d.call(e, d);
                                    } catch (e) {
                                        return !0;
                                    }
                                    return e instanceof WeakSet;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return ee("WeakSet");
                        if (
                            (function (e) {
                                if (!f || !e || "object" != typeof e) return !1;
                                try {
                                    return f.call(e), !0;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return ee("WeakRef");
                        if (
                            (function (e) {
                                return "[object Number]" === q(e) && H(e);
                            })(t)
                        )
                            return J($(Number(t)));
                        if (
                            (function (e) {
                                if (!e || "object" != typeof e || !R) return !1;
                                try {
                                    return R.call(e), !0;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return J($(R.call(t)));
                        if (
                            (function (e) {
                                return "[object Boolean]" === q(e) && H(e);
                            })(t)
                        )
                            return J(h.call(t));
                        if (
                            (function (e) {
                                return "[object String]" === q(e) && H(e);
                            })(t)
                        )
                            return J($(String(t)));
                        if ("u" > typeof window && t === window) return "{ [object Window] }";
                        if (("u" > typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
                            return "{ [object globalThis] }";
                        if (
                            !(function (e) {
                                return "[object Date]" === q(e) && H(e);
                            })(t) &&
                            !W(t)
                        ) {
                            var ef = er(t, $),
                                eh = P ? P(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                                ep = t instanceof Object ? "" : "null prototype",
                                em = !eh && w && Object(t) === t && w in t ? A.call(q(t), 8, -1) : ep ? "Object" : "",
                                eg =
                                    (eh || "function" != typeof t.constructor
                                        ? ""
                                        : t.constructor.name
                                          ? t.constructor.name + " "
                                          : "") +
                                    (em || ep ? "[" + C.call(v.call([], em || [], ep || []), ": ") + "] " : "");
                            return 0 === ef.length
                                ? eg + "{}"
                                : V
                                  ? eg + "{" + en(ef, V) + "}"
                                  : eg + "{ " + C.call(ef, ", ") + " }";
                        }
                        return String(t);
                    };
                    var $ =
                        Object.prototype.hasOwnProperty ||
                        function (e) {
                            return e in this;
                        };
                    function z(e, t) {
                        return $.call(e, t);
                    }
                    function q(e) {
                        return p.call(e);
                    }
                    function X(e, t) {
                        if (e.indexOf) return e.indexOf(t);
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                        return -1;
                    }
                    function Z(e, t) {
                        if (e.length > t.maxStringLength) {
                            var n = e.length - t.maxStringLength,
                                r = "... " + n + " more character" + (n > 1 ? "s" : "");
                            return Z(A.call(e, 0, t.maxStringLength), t) + r;
                        }
                        var i = V[t.quoteStyle || "single"];
                        return (i.lastIndex = 0), B(I.call(I.call(e, i, "\\$1"), /[\x00-\x1f]/g, Q), "single", t);
                    }
                    function Q(e) {
                        var t = e.charCodeAt(0),
                            n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
                        return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + T.call(t.toString(16));
                    }
                    function J(e) {
                        return "Object(" + e + ")";
                    }
                    function ee(e) {
                        return e + " { ? }";
                    }
                    function et(e, t, n, r) {
                        return e + " (" + t + ") {" + (r ? en(n, r) : C.call(n, ", ")) + "}";
                    }
                    function en(e, t) {
                        if (0 === e.length) return "";
                        var n = "\n" + t.prev + t.base;
                        return n + C.call(e, "," + n) + "\n" + t.prev;
                    }
                    function er(e, t) {
                        var n = Y(e),
                            r = [];
                        if (n) {
                            r.length = e.length;
                            for (var i = 0; i < e.length; i++) r[i] = z(e, i) ? t(e[i], e) : "";
                        }
                        var a,
                            s = "function" == typeof O ? O(e) : [];
                        if (L) {
                            a = {};
                            for (var o = 0; o < s.length; o++) a["$" + s[o]] = s[o];
                        }
                        for (var l in e)
                            z(e, l) &&
                                ((n && String(Number(l)) === l && l < e.length) ||
                                    (L && a["$" + l] instanceof Symbol) ||
                                    (S.call(/[^\w$]/, l)
                                        ? r.push(t(l, e) + ": " + t(e[l], e))
                                        : r.push(l + ": " + t(e[l], e))));
                        if ("function" == typeof O)
                            for (var u = 0; u < s.length; u++)
                                x.call(e, s[u]) && r.push("[" + t(s[u]) + "]: " + t(e[s[u]], e));
                        return r;
                    }
                },
                9647: (e) => {
                    "use strict";
                    var t = String.prototype.replace,
                        n = /%20/g,
                        r = "RFC3986";
                    e.exports = {
                        default: r,
                        formatters: {
                            RFC1738: function (e) {
                                return t.call(e, n, "+");
                            },
                            RFC3986: function (e) {
                                return String(e);
                            },
                        },
                        RFC1738: "RFC1738",
                        RFC3986: r,
                    };
                },
                5882: (e, t, n) => {
                    "use strict";
                    var r = n(6738),
                        i = n(4662),
                        a = n(9647),
                        s = Object.prototype.hasOwnProperty,
                        o = {
                            brackets: function (e) {
                                return e + "[]";
                            },
                            comma: "comma",
                            indices: function (e, t) {
                                return e + "[" + t + "]";
                            },
                            repeat: function (e) {
                                return e;
                            },
                        },
                        l = Array.isArray,
                        u = Array.prototype.push,
                        c = function (e, t) {
                            u.apply(e, l(t) ? t : [t]);
                        },
                        d = Date.prototype.toISOString,
                        _ = a.default,
                        f = {
                            addQueryPrefix: !1,
                            allowDots: !1,
                            allowEmptyArrays: !1,
                            arrayFormat: "indices",
                            charset: "utf-8",
                            charsetSentinel: !1,
                            commaRoundTrip: !1,
                            delimiter: "&",
                            encode: !0,
                            encodeDotInKeys: !1,
                            encoder: i.encode,
                            encodeValuesOnly: !1,
                            filter: void 0,
                            format: _,
                            formatter: a.formatters[_],
                            indices: !1,
                            serializeDate: function (e) {
                                return d.call(e);
                            },
                            skipNulls: !1,
                            strictNullHandling: !1,
                        },
                        h = {},
                        p = function e(t, n, a, s, o, u, d, _, p, g, E, A, I, T, y, S, v, C) {
                            for (var b, N = t, R = C, O = 0, D = !1; void 0 !== (R = R.get(h)) && !D; ) {
                                var L = R.get(t);
                                if (((O += 1), void 0 !== L)) {
                                    if (L === O) throw RangeError("Cyclic object value");
                                    D = !0;
                                }
                                void 0 === R.get(h) && (O = 0);
                            }
                            if (
                                ("function" == typeof g
                                    ? (N = g(n, N))
                                    : N instanceof Date
                                      ? (N = I(N))
                                      : "comma" === a &&
                                        l(N) &&
                                        (N = i.maybeMap(N, function (e) {
                                            return e instanceof Date ? I(e) : e;
                                        })),
                                null === N)
                            ) {
                                if (u) return p && !S ? p(n, f.encoder, v, "key", T) : n;
                                N = "";
                            }
                            if (
                                "string" == typeof (b = N) ||
                                "number" == typeof b ||
                                "boolean" == typeof b ||
                                "symbol" == typeof b ||
                                "bigint" == typeof b ||
                                i.isBuffer(N)
                            )
                                return p
                                    ? [
                                          y(S ? n : p(n, f.encoder, v, "key", T)) +
                                              "=" +
                                              y(p(N, f.encoder, v, "value", T)),
                                      ]
                                    : [y(n) + "=" + y(String(N))];
                            var w,
                                x = [];
                            if (void 0 === N) return x;
                            if ("comma" === a && l(N))
                                S && p && (N = i.maybeMap(N, p)),
                                    (w = [{ value: N.length > 0 ? N.join(",") || null : void 0 }]);
                            else if (l(g)) w = g;
                            else {
                                var P = Object.keys(N);
                                w = E ? P.sort(E) : P;
                            }
                            var M = _ ? String(n).replace(/\./g, "%2E") : String(n),
                                k = s && l(N) && 1 === N.length ? M + "[]" : M;
                            if (o && l(N) && 0 === N.length) return k + "[]";
                            for (var U = 0; U < w.length; ++U) {
                                var G = w[U],
                                    F = "object" == typeof G && G && void 0 !== G.value ? G.value : N[G];
                                if (!d || null !== F) {
                                    var V = A && _ ? String(G).replace(/\./g, "%2E") : String(G),
                                        B = l(N)
                                            ? "function" == typeof a
                                                ? a(k, V)
                                                : k
                                            : k + (A ? "." + V : "[" + V + "]");
                                    C.set(t, O);
                                    var j = r();
                                    j.set(h, C),
                                        c(
                                            x,
                                            e(
                                                F,
                                                B,
                                                a,
                                                s,
                                                o,
                                                u,
                                                d,
                                                _,
                                                "comma" === a && S && l(N) ? null : p,
                                                g,
                                                E,
                                                A,
                                                I,
                                                T,
                                                y,
                                                S,
                                                v,
                                                j,
                                            ),
                                        );
                                }
                            }
                            return x;
                        };
                    e.exports = function (e, t) {
                        var n,
                            i = e,
                            u = (function (e) {
                                if (!e) return f;
                                if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays)
                                    throw TypeError(
                                        "`allowEmptyArrays` option can only be `true` or `false`, when provided",
                                    );
                                if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys)
                                    throw TypeError(
                                        "`encodeDotInKeys` option can only be `true` or `false`, when provided",
                                    );
                                if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
                                    throw TypeError("Encoder has to be a function.");
                                var t = e.charset || f.charset;
                                if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                                    throw TypeError(
                                        "The charset option must be either utf-8, iso-8859-1, or undefined",
                                    );
                                var n = a.default;
                                if (void 0 !== e.format) {
                                    if (!s.call(a.formatters, e.format))
                                        throw TypeError("Unknown format option provided.");
                                    n = e.format;
                                }
                                var r,
                                    i = a.formatters[n],
                                    u = f.filter;
                                if (
                                    (("function" == typeof e.filter || l(e.filter)) && (u = e.filter),
                                    (r =
                                        e.arrayFormat in o
                                            ? e.arrayFormat
                                            : "indices" in e
                                              ? e.indices
                                                  ? "indices"
                                                  : "repeat"
                                              : f.arrayFormat),
                                    "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
                                )
                                    throw TypeError("`commaRoundTrip` must be a boolean, or absent");
                                var c =
                                    void 0 === e.allowDots ? !0 === e.encodeDotInKeys || f.allowDots : !!e.allowDots;
                                return {
                                    addQueryPrefix:
                                        "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
                                    allowDots: c,
                                    allowEmptyArrays:
                                        "boolean" == typeof e.allowEmptyArrays
                                            ? !!e.allowEmptyArrays
                                            : f.allowEmptyArrays,
                                    arrayFormat: r,
                                    charset: t,
                                    charsetSentinel:
                                        "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
                                    commaRoundTrip: !!e.commaRoundTrip,
                                    delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
                                    encode: "boolean" == typeof e.encode ? e.encode : f.encode,
                                    encodeDotInKeys:
                                        "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : f.encodeDotInKeys,
                                    encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
                                    encodeValuesOnly:
                                        "boolean" == typeof e.encodeValuesOnly
                                            ? e.encodeValuesOnly
                                            : f.encodeValuesOnly,
                                    filter: u,
                                    format: n,
                                    formatter: i,
                                    serializeDate:
                                        "function" == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
                                    skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
                                    sort: "function" == typeof e.sort ? e.sort : null,
                                    strictNullHandling:
                                        "boolean" == typeof e.strictNullHandling
                                            ? e.strictNullHandling
                                            : f.strictNullHandling,
                                };
                            })(t);
                        "function" == typeof u.filter ? (i = (0, u.filter)("", i)) : l(u.filter) && (n = u.filter);
                        var d = [];
                        if ("object" != typeof i || null === i) return "";
                        var _ = o[u.arrayFormat],
                            h = "comma" === _ && u.commaRoundTrip;
                        n || (n = Object.keys(i)), u.sort && n.sort(u.sort);
                        for (var g = r(), E = 0; E < n.length; ++E) {
                            var A = n[E],
                                I = i[A];
                            (u.skipNulls && null === I) ||
                                c(
                                    d,
                                    p(
                                        I,
                                        A,
                                        _,
                                        h,
                                        u.allowEmptyArrays,
                                        u.strictNullHandling,
                                        u.skipNulls,
                                        u.encodeDotInKeys,
                                        u.encode ? u.encoder : null,
                                        u.filter,
                                        u.sort,
                                        u.allowDots,
                                        u.serializeDate,
                                        u.format,
                                        u.formatter,
                                        u.encodeValuesOnly,
                                        u.charset,
                                        g,
                                    ),
                                );
                        }
                        var T = d.join(u.delimiter),
                            y = !0 === u.addQueryPrefix ? "?" : "";
                        return (
                            u.charsetSentinel &&
                                ("iso-8859-1" === u.charset ? (y += "utf8=%26%2310003%3B&") : (y += "utf8=%E2%9C%93&")),
                            T.length > 0 ? y + T : ""
                        );
                    };
                },
                4662: (e, t, n) => {
                    "use strict";
                    var r = n(9647),
                        i = Object.prototype.hasOwnProperty,
                        a = Array.isArray,
                        s = (function () {
                            for (var e = [], t = 0; t < 256; ++t)
                                e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                            return e;
                        })(),
                        o = function (e, t) {
                            for (var n = t && t.plainObjects ? { __proto__: null } : {}, r = 0; r < e.length; ++r)
                                void 0 !== e[r] && (n[r] = e[r]);
                            return n;
                        },
                        l = 1024;
                    e.exports = {
                        arrayToObject: o,
                        assign: function (e, t) {
                            return Object.keys(t).reduce(function (e, n) {
                                return (e[n] = t[n]), e;
                            }, e);
                        },
                        combine: function (e, t) {
                            return [].concat(e, t);
                        },
                        compact: function (e) {
                            for (var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0; r < t.length; ++r)
                                for (var i = t[r], s = i.obj[i.prop], o = Object.keys(s), l = 0; l < o.length; ++l) {
                                    var u = o[l],
                                        c = s[u];
                                    "object" == typeof c &&
                                        null !== c &&
                                        -1 === n.indexOf(c) &&
                                        (t.push({ obj: s, prop: u }), n.push(c));
                                }
                            return (
                                (function (e) {
                                    for (; e.length > 1; ) {
                                        var t = e.pop(),
                                            n = t.obj[t.prop];
                                        if (a(n)) {
                                            for (var r = [], i = 0; i < n.length; ++i) void 0 !== n[i] && r.push(n[i]);
                                            t.obj[t.prop] = r;
                                        }
                                    }
                                })(t),
                                e
                            );
                        },
                        decode: function (e, t, n) {
                            var r = e.replace(/\+/g, " ");
                            if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
                            try {
                                return decodeURIComponent(r);
                            } catch (e) {
                                return r;
                            }
                        },
                        encode: function (e, t, n, i, a) {
                            if (0 === e.length) return e;
                            var o = e;
                            if (
                                ("symbol" == typeof e
                                    ? (o = Symbol.prototype.toString.call(e))
                                    : "string" != typeof e && (o = String(e)),
                                "iso-8859-1" === n)
                            )
                                return escape(o).replace(/%u[0-9a-f]{4}/gi, function (e) {
                                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                                });
                            for (var u = "", c = 0; c < o.length; c += l) {
                                for (var d = o.length >= l ? o.slice(c, c + l) : o, _ = [], f = 0; f < d.length; ++f) {
                                    var h = d.charCodeAt(f);
                                    45 === h ||
                                    46 === h ||
                                    95 === h ||
                                    126 === h ||
                                    (h >= 48 && h <= 57) ||
                                    (h >= 65 && h <= 90) ||
                                    (h >= 97 && h <= 122) ||
                                    (a === r.RFC1738 && (40 === h || 41 === h))
                                        ? (_[_.length] = d.charAt(f))
                                        : h < 128
                                          ? (_[_.length] = s[h])
                                          : h < 2048
                                            ? (_[_.length] = s[192 | (h >> 6)] + s[128 | (63 & h)])
                                            : h < 55296 || h >= 57344
                                              ? (_[_.length] =
                                                    s[224 | (h >> 12)] + s[128 | ((h >> 6) & 63)] + s[128 | (63 & h)])
                                              : ((f += 1),
                                                (h = 65536 + (((1023 & h) << 10) | (1023 & d.charCodeAt(f)))),
                                                (_[_.length] =
                                                    s[240 | (h >> 18)] +
                                                    s[128 | ((h >> 12) & 63)] +
                                                    s[128 | ((h >> 6) & 63)] +
                                                    s[128 | (63 & h)]));
                                }
                                u += _.join("");
                            }
                            return u;
                        },
                        isBuffer: function (e) {
                            return !(
                                !e ||
                                "object" != typeof e ||
                                !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                            );
                        },
                        isRegExp: function (e) {
                            return "[object RegExp]" === Object.prototype.toString.call(e);
                        },
                        maybeMap: function (e, t) {
                            if (a(e)) {
                                for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                return n;
                            }
                            return t(e);
                        },
                        merge: function e(t, n, r) {
                            if (!n) return t;
                            if ("object" != typeof n && "function" != typeof n) {
                                if (a(t)) t.push(n);
                                else {
                                    if (!t || "object" != typeof t) return [t, n];
                                    ((r && (r.plainObjects || r.allowPrototypes)) || !i.call(Object.prototype, n)) &&
                                        (t[n] = !0);
                                }
                                return t;
                            }
                            if (!t || "object" != typeof t) return [t].concat(n);
                            var s = t;
                            return (
                                a(t) && !a(n) && (s = o(t, r)),
                                a(t) && a(n)
                                    ? (n.forEach(function (n, a) {
                                          if (i.call(t, a)) {
                                              var s = t[a];
                                              s && "object" == typeof s && n && "object" == typeof n
                                                  ? (t[a] = e(s, n, r))
                                                  : t.push(n);
                                          } else t[a] = n;
                                      }),
                                      t)
                                    : Object.keys(n).reduce(function (t, a) {
                                          var s = n[a];
                                          return i.call(t, a) ? (t[a] = e(t[a], s, r)) : (t[a] = s), t;
                                      }, s)
                            );
                        },
                    };
                },
                6738: (e, t, n) => {
                    "use strict";
                    var r = n(6785),
                        i = n(5937),
                        a = n(8709),
                        s = n(885),
                        o = n(8977) || s || a;
                    e.exports = function () {
                        var e,
                            t = {
                                assert: function (e) {
                                    if (!t.has(e)) throw new r("Side channel does not contain " + i(e));
                                },
                                delete: function (t) {
                                    return !!e && e.delete(t);
                                },
                                get: function (t) {
                                    return e && e.get(t);
                                },
                                has: function (t) {
                                    return !!e && e.has(t);
                                },
                                set: function (t, n) {
                                    e || (e = o()), e.set(t, n);
                                },
                            };
                        return t;
                    };
                },
                8709: (e, t, n) => {
                    "use strict";
                    var r = n(5937),
                        i = n(6785),
                        a = function (e, t, n) {
                            for (var r, i = e; null != (r = i.next); i = r)
                                if (r.key === t) return (i.next = r.next), n || ((r.next = e.next), (e.next = r)), r;
                        };
                    e.exports = function () {
                        var e,
                            t = {
                                assert: function (e) {
                                    if (!t.has(e)) throw new i("Side channel does not contain " + r(e));
                                },
                                delete: function (t) {
                                    var n = e && e.next,
                                        r = (function (e, t) {
                                            if (e) return a(e, t, !0);
                                        })(e, t);
                                    return r && n && n === r && (e = void 0), !!r;
                                },
                                get: function (t) {
                                    return (function (e, t) {
                                        if (e) {
                                            var n = a(e, t);
                                            return n && n.value;
                                        }
                                    })(e, t);
                                },
                                has: function (t) {
                                    return (function (e, t) {
                                        return !!e && !!a(e, t);
                                    })(e, t);
                                },
                                set: function (t, n) {
                                    e || (e = { next: void 0 }),
                                        (function (e, t, n) {
                                            var r = a(e, t);
                                            r ? (r.value = n) : (e.next = { key: t, next: e.next, value: n });
                                        })(e, t, n);
                                },
                            };
                        return t;
                    };
                },
                885: (e, t, n) => {
                    "use strict";
                    var r = n(4885),
                        i = n(2774),
                        a = n(5937),
                        s = n(6785),
                        o = r("%Map%", !0),
                        l = i("Map.prototype.get", !0),
                        u = i("Map.prototype.set", !0),
                        c = i("Map.prototype.has", !0),
                        d = i("Map.prototype.delete", !0),
                        _ = i("Map.prototype.size", !0);
                    e.exports =
                        !!o &&
                        function () {
                            var e,
                                t = {
                                    assert: function (e) {
                                        if (!t.has(e)) throw new s("Side channel does not contain " + a(e));
                                    },
                                    delete: function (t) {
                                        if (e) {
                                            var n = d(e, t);
                                            return 0 === _(e) && (e = void 0), n;
                                        }
                                        return !1;
                                    },
                                    get: function (t) {
                                        if (e) return l(e, t);
                                    },
                                    has: function (t) {
                                        return !!e && c(e, t);
                                    },
                                    set: function (t, n) {
                                        e || (e = new o()), u(e, t, n);
                                    },
                                };
                            return t;
                        };
                },
                1823: (e) => {
                    "use strict";
                    var t = Object.defineProperty || !1;
                    if (t)
                        try {
                            t({}, "a", { value: 1 });
                        } catch (e) {
                            t = !1;
                        }
                    e.exports = t;
                },
                4885: (e, t, n) => {
                    "use strict";
                    var r,
                        i = n(5846),
                        a = n(5293),
                        s = n(9055),
                        o = n(8888),
                        l = n(7900),
                        u = n(5389),
                        c = n(6785),
                        d = n(4055),
                        _ = n(716),
                        f = n(7450),
                        h = n(3774),
                        p = n(7552),
                        g = n(5874),
                        E = n(9292),
                        A = n(6071),
                        I = Function,
                        T = function (e) {
                            try {
                                return I('"use strict"; return (' + e + ").constructor;")();
                            } catch (e) {}
                        },
                        y = n(5875),
                        S = n(1823),
                        v = function () {
                            throw new c();
                        },
                        C = y
                            ? (function () {
                                  try {
                                      return v;
                                  } catch (e) {
                                      try {
                                          return y(arguments, "callee").get;
                                      } catch (e) {
                                          return v;
                                      }
                                  }
                              })()
                            : v,
                        b = n(5639)(),
                        N = n(7106),
                        R = n(3766),
                        O = n(6822),
                        D = n(3036),
                        L = n(78),
                        w = {},
                        x = "u" > typeof Uint8Array && N ? N(Uint8Array) : r,
                        P = {
                            __proto__: null,
                            "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": b && N ? N([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": w,
                            "%AsyncGenerator%": w,
                            "%AsyncGeneratorFunction%": w,
                            "%AsyncIteratorPrototype%": w,
                            "%Atomics%": "u" < typeof Atomics ? r : Atomics,
                            "%BigInt%": "u" < typeof BigInt ? r : BigInt,
                            "%BigInt64Array%": "u" < typeof BigInt64Array ? r : BigInt64Array,
                            "%BigUint64Array%": "u" < typeof BigUint64Array ? r : BigUint64Array,
                            "%Boolean%": Boolean,
                            "%DataView%": "u" < typeof DataView ? r : DataView,
                            "%Date%": Date,
                            "%decodeURI%": decodeURI,
                            "%decodeURIComponent%": decodeURIComponent,
                            "%encodeURI%": encodeURI,
                            "%encodeURIComponent%": encodeURIComponent,
                            "%Error%": a,
                            "%eval%": eval,
                            "%EvalError%": s,
                            "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": I,
                            "%GeneratorFunction%": w,
                            "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": b && N ? N(N([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "u" < typeof Map ? r : Map,
                            "%MapIteratorPrototype%": "u" > typeof Map && b && N ? N(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": y,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "u" < typeof Promise ? r : Promise,
                            "%Proxy%": "u" < typeof Proxy ? r : Proxy,
                            "%RangeError%": o,
                            "%ReferenceError%": l,
                            "%Reflect%": "u" < typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "u" < typeof Set ? r : Set,
                            "%SetIteratorPrototype%": "u" > typeof Set && b && N ? N(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": b && N ? N(""[Symbol.iterator]()) : r,
                            "%Symbol%": b ? Symbol : r,
                            "%SyntaxError%": u,
                            "%ThrowTypeError%": C,
                            "%TypedArray%": x,
                            "%TypeError%": c,
                            "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": L,
                            "%Function.prototype.apply%": D,
                            "%Object.defineProperty%": S,
                            "%Object.getPrototypeOf%": R,
                            "%Math.abs%": _,
                            "%Math.floor%": f,
                            "%Math.max%": h,
                            "%Math.min%": p,
                            "%Math.pow%": g,
                            "%Math.round%": E,
                            "%Math.sign%": A,
                            "%Reflect.getPrototypeOf%": O,
                        };
                    if (N)
                        try {
                            null.error;
                        } catch (e) {
                            var M = N(N(e));
                            P["%Error.prototype%"] = M;
                        }
                    var k = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = T("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = T("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = T("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && N && (n = N(i.prototype));
                            }
                            return (P[t] = n), n;
                        },
                        U = {
                            __proto__: null,
                            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                            "%ArrayPrototype%": ["Array", "prototype"],
                            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                            "%ArrayProto_values%": ["Array", "prototype", "values"],
                            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                            "%BooleanPrototype%": ["Boolean", "prototype"],
                            "%DataViewPrototype%": ["DataView", "prototype"],
                            "%DatePrototype%": ["Date", "prototype"],
                            "%ErrorPrototype%": ["Error", "prototype"],
                            "%EvalErrorPrototype%": ["EvalError", "prototype"],
                            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                            "%FunctionPrototype%": ["Function", "prototype"],
                            "%Generator%": ["GeneratorFunction", "prototype"],
                            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                            "%JSONParse%": ["JSON", "parse"],
                            "%JSONStringify%": ["JSON", "stringify"],
                            "%MapPrototype%": ["Map", "prototype"],
                            "%NumberPrototype%": ["Number", "prototype"],
                            "%ObjectPrototype%": ["Object", "prototype"],
                            "%ObjProto_toString%": ["Object", "prototype", "toString"],
                            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                            "%PromisePrototype%": ["Promise", "prototype"],
                            "%PromiseProto_then%": ["Promise", "prototype", "then"],
                            "%Promise_all%": ["Promise", "all"],
                            "%Promise_reject%": ["Promise", "reject"],
                            "%Promise_resolve%": ["Promise", "resolve"],
                            "%RangeErrorPrototype%": ["RangeError", "prototype"],
                            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                            "%RegExpPrototype%": ["RegExp", "prototype"],
                            "%SetPrototype%": ["Set", "prototype"],
                            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                            "%StringPrototype%": ["String", "prototype"],
                            "%SymbolPrototype%": ["Symbol", "prototype"],
                            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                            "%TypeErrorPrototype%": ["TypeError", "prototype"],
                            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                            "%URIErrorPrototype%": ["URIError", "prototype"],
                            "%WeakMapPrototype%": ["WeakMap", "prototype"],
                            "%WeakSetPrototype%": ["WeakSet", "prototype"],
                        },
                        G = n(5049),
                        F = n(5215),
                        V = G.call(L, Array.prototype.concat),
                        B = G.call(D, Array.prototype.splice),
                        j = G.call(L, String.prototype.replace),
                        H = G.call(L, String.prototype.slice),
                        Y = G.call(L, RegExp.prototype.exec),
                        W =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        K = /\\(\\)?/g,
                        $ = function (e, t) {
                            var n,
                                r = e;
                            if ((F(U, r) && (r = "%" + (n = U[r])[0] + "%"), F(P, r))) {
                                var i = P[r];
                                if ((i === w && (i = k(r)), void 0 === i && !t))
                                    throw new c(
                                        "intrinsic " + e + " exists, but is not available. Please file an issue!",
                                    );
                                return { alias: n, name: r, value: i };
                            }
                            throw new u("intrinsic " + e + " does not exist!");
                        };
                    e.exports = function (e, t) {
                        if ("string" != typeof e || 0 === e.length)
                            throw new c("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof t)
                            throw new c('"allowMissing" argument must be a boolean');
                        if (null === Y(/^%?[^%]*%?$/, e))
                            throw new u(
                                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
                            );
                        var n = (function (e) {
                                var t = H(e, 0, 1),
                                    n = H(e, -1);
                                if ("%" === t && "%" !== n)
                                    throw new u("invalid intrinsic syntax, expected closing `%`");
                                if ("%" === n && "%" !== t)
                                    throw new u("invalid intrinsic syntax, expected opening `%`");
                                var r = [];
                                return (
                                    j(e, W, function (e, t, n, i) {
                                        r[r.length] = n ? j(i, K, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = $("%" + r + "%", t),
                            a = i.name,
                            s = i.value,
                            o = !1,
                            l = i.alias;
                        l && ((r = l[0]), B(n, V([0, 1], l)));
                        for (var d = 1, _ = !0; d < n.length; d += 1) {
                            var f = n[d],
                                h = H(f, 0, 1),
                                p = H(f, -1);
                            if (('"' === h || "'" === h || "`" === h || '"' === p || "'" === p || "`" === p) && h !== p)
                                throw new u("property names with quotes must have matching quotes");
                            if ((("constructor" !== f && _) || (o = !0), F(P, (a = "%" + (r += "." + f) + "%"))))
                                s = P[a];
                            else if (null != s) {
                                if (!(f in s)) {
                                    if (!t)
                                        throw new c(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (y && d + 1 >= n.length) {
                                    var g = y(s, f);
                                    s = (_ = !!g) && "get" in g && !("originalValue" in g.get) ? g.get : s[f];
                                } else (_ = F(s, f)), (s = s[f]);
                                _ && !o && (P[a] = s);
                            }
                        }
                        return s;
                    };
                },
                7189: (e) => {
                    "use strict";
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                5875: (e, t, n) => {
                    "use strict";
                    var r = n(7189);
                    if (r)
                        try {
                            r([], "length");
                        } catch (e) {
                            r = null;
                        }
                    e.exports = r;
                },
                5639: (e, t, n) => {
                    "use strict";
                    var r = "u" > typeof Symbol && Symbol,
                        i = n(9570);
                    e.exports = function () {
                        return (
                            "function" == typeof r &&
                            "function" == typeof Symbol &&
                            "symbol" == typeof r("foo") &&
                            "symbol" == typeof Symbol("bar") &&
                            i()
                        );
                    };
                },
                9570: (e) => {
                    "use strict";
                    e.exports = function () {
                        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                        if ("symbol" == typeof Symbol.iterator) return !0;
                        var e = {},
                            t = Symbol("test"),
                            n = Object(t);
                        if (
                            "string" == typeof t ||
                            "[object Symbol]" !== Object.prototype.toString.call(t) ||
                            "[object Symbol]" !== Object.prototype.toString.call(n)
                        )
                            return !1;
                        for (var r in ((e[t] = 42), e)) return !1;
                        if (
                            ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
                            ("function" == typeof Object.getOwnPropertyNames &&
                                0 !== Object.getOwnPropertyNames(e).length)
                        )
                            return !1;
                        var i = Object.getOwnPropertySymbols(e);
                        if (1 !== i.length || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
                            return !1;
                        if ("function" == typeof Object.getOwnPropertyDescriptor) {
                            var a = Object.getOwnPropertyDescriptor(e, t);
                            if (42 !== a.value || !0 !== a.enumerable) return !1;
                        }
                        return !0;
                    };
                },
                8977: (e, t, n) => {
                    "use strict";
                    var r = n(8297),
                        i = n(2774),
                        a = n(5937),
                        s = n(885),
                        o = n(6785),
                        l = r("%WeakMap%", !0),
                        u = i("WeakMap.prototype.get", !0),
                        c = i("WeakMap.prototype.set", !0),
                        d = i("WeakMap.prototype.has", !0),
                        _ = i("WeakMap.prototype.delete", !0);
                    e.exports = l
                        ? function () {
                              var e,
                                  t,
                                  n = {
                                      assert: function (e) {
                                          if (!n.has(e)) throw new o("Side channel does not contain " + a(e));
                                      },
                                      delete: function (n) {
                                          if (l && n && ("object" == typeof n || "function" == typeof n)) {
                                              if (e) return _(e, n);
                                          } else if (s && t) return t.delete(n);
                                          return !1;
                                      },
                                      get: function (n) {
                                          return l && n && ("object" == typeof n || "function" == typeof n) && e
                                              ? u(e, n)
                                              : t && t.get(n);
                                      },
                                      has: function (n) {
                                          return l && n && ("object" == typeof n || "function" == typeof n) && e
                                              ? d(e, n)
                                              : !!t && t.has(n);
                                      },
                                      set: function (n, r) {
                                          l && n && ("object" == typeof n || "function" == typeof n)
                                              ? (e || (e = new l()), c(e, n, r))
                                              : s && (t || (t = s()), t.set(n, r));
                                      },
                                  };
                              return n;
                          }
                        : s;
                },
                315: (e) => {
                    "use strict";
                    var t = Object.defineProperty || !1;
                    if (t)
                        try {
                            t({}, "a", { value: 1 });
                        } catch (e) {
                            t = !1;
                        }
                    e.exports = t;
                },
                8297: (e, t, n) => {
                    "use strict";
                    var r,
                        i = n(5846),
                        a = n(5293),
                        s = n(9055),
                        o = n(8888),
                        l = n(7900),
                        u = n(5389),
                        c = n(6785),
                        d = n(4055),
                        _ = n(716),
                        f = n(7450),
                        h = n(3774),
                        p = n(7552),
                        g = n(5874),
                        E = n(9292),
                        A = n(6071),
                        I = Function,
                        T = function (e) {
                            try {
                                return I('"use strict"; return (' + e + ").constructor;")();
                            } catch (e) {}
                        },
                        y = n(4415),
                        S = n(315),
                        v = function () {
                            throw new c();
                        },
                        C = y
                            ? (function () {
                                  try {
                                      return v;
                                  } catch (e) {
                                      try {
                                          return y(arguments, "callee").get;
                                      } catch (e) {
                                          return v;
                                      }
                                  }
                              })()
                            : v,
                        b = n(9715)(),
                        N = n(7106),
                        R = n(3766),
                        O = n(6822),
                        D = n(3036),
                        L = n(78),
                        w = {},
                        x = "u" > typeof Uint8Array && N ? N(Uint8Array) : r,
                        P = {
                            __proto__: null,
                            "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": b && N ? N([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": w,
                            "%AsyncGenerator%": w,
                            "%AsyncGeneratorFunction%": w,
                            "%AsyncIteratorPrototype%": w,
                            "%Atomics%": "u" < typeof Atomics ? r : Atomics,
                            "%BigInt%": "u" < typeof BigInt ? r : BigInt,
                            "%BigInt64Array%": "u" < typeof BigInt64Array ? r : BigInt64Array,
                            "%BigUint64Array%": "u" < typeof BigUint64Array ? r : BigUint64Array,
                            "%Boolean%": Boolean,
                            "%DataView%": "u" < typeof DataView ? r : DataView,
                            "%Date%": Date,
                            "%decodeURI%": decodeURI,
                            "%decodeURIComponent%": decodeURIComponent,
                            "%encodeURI%": encodeURI,
                            "%encodeURIComponent%": encodeURIComponent,
                            "%Error%": a,
                            "%eval%": eval,
                            "%EvalError%": s,
                            "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": I,
                            "%GeneratorFunction%": w,
                            "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": b && N ? N(N([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "u" < typeof Map ? r : Map,
                            "%MapIteratorPrototype%": "u" > typeof Map && b && N ? N(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": y,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "u" < typeof Promise ? r : Promise,
                            "%Proxy%": "u" < typeof Proxy ? r : Proxy,
                            "%RangeError%": o,
                            "%ReferenceError%": l,
                            "%Reflect%": "u" < typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "u" < typeof Set ? r : Set,
                            "%SetIteratorPrototype%": "u" > typeof Set && b && N ? N(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": b && N ? N(""[Symbol.iterator]()) : r,
                            "%Symbol%": b ? Symbol : r,
                            "%SyntaxError%": u,
                            "%ThrowTypeError%": C,
                            "%TypedArray%": x,
                            "%TypeError%": c,
                            "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": L,
                            "%Function.prototype.apply%": D,
                            "%Object.defineProperty%": S,
                            "%Object.getPrototypeOf%": R,
                            "%Math.abs%": _,
                            "%Math.floor%": f,
                            "%Math.max%": h,
                            "%Math.min%": p,
                            "%Math.pow%": g,
                            "%Math.round%": E,
                            "%Math.sign%": A,
                            "%Reflect.getPrototypeOf%": O,
                        };
                    if (N)
                        try {
                            null.error;
                        } catch (e) {
                            var M = N(N(e));
                            P["%Error.prototype%"] = M;
                        }
                    var k = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = T("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = T("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = T("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && N && (n = N(i.prototype));
                            }
                            return (P[t] = n), n;
                        },
                        U = {
                            __proto__: null,
                            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                            "%ArrayPrototype%": ["Array", "prototype"],
                            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                            "%ArrayProto_values%": ["Array", "prototype", "values"],
                            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                            "%BooleanPrototype%": ["Boolean", "prototype"],
                            "%DataViewPrototype%": ["DataView", "prototype"],
                            "%DatePrototype%": ["Date", "prototype"],
                            "%ErrorPrototype%": ["Error", "prototype"],
                            "%EvalErrorPrototype%": ["EvalError", "prototype"],
                            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                            "%FunctionPrototype%": ["Function", "prototype"],
                            "%Generator%": ["GeneratorFunction", "prototype"],
                            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                            "%JSONParse%": ["JSON", "parse"],
                            "%JSONStringify%": ["JSON", "stringify"],
                            "%MapPrototype%": ["Map", "prototype"],
                            "%NumberPrototype%": ["Number", "prototype"],
                            "%ObjectPrototype%": ["Object", "prototype"],
                            "%ObjProto_toString%": ["Object", "prototype", "toString"],
                            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                            "%PromisePrototype%": ["Promise", "prototype"],
                            "%PromiseProto_then%": ["Promise", "prototype", "then"],
                            "%Promise_all%": ["Promise", "all"],
                            "%Promise_reject%": ["Promise", "reject"],
                            "%Promise_resolve%": ["Promise", "resolve"],
                            "%RangeErrorPrototype%": ["RangeError", "prototype"],
                            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                            "%RegExpPrototype%": ["RegExp", "prototype"],
                            "%SetPrototype%": ["Set", "prototype"],
                            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                            "%StringPrototype%": ["String", "prototype"],
                            "%SymbolPrototype%": ["Symbol", "prototype"],
                            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                            "%TypeErrorPrototype%": ["TypeError", "prototype"],
                            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                            "%URIErrorPrototype%": ["URIError", "prototype"],
                            "%WeakMapPrototype%": ["WeakMap", "prototype"],
                            "%WeakSetPrototype%": ["WeakSet", "prototype"],
                        },
                        G = n(5049),
                        F = n(5215),
                        V = G.call(L, Array.prototype.concat),
                        B = G.call(D, Array.prototype.splice),
                        j = G.call(L, String.prototype.replace),
                        H = G.call(L, String.prototype.slice),
                        Y = G.call(L, RegExp.prototype.exec),
                        W =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        K = /\\(\\)?/g,
                        $ = function (e, t) {
                            var n,
                                r = e;
                            if ((F(U, r) && (r = "%" + (n = U[r])[0] + "%"), F(P, r))) {
                                var i = P[r];
                                if ((i === w && (i = k(r)), void 0 === i && !t))
                                    throw new c(
                                        "intrinsic " + e + " exists, but is not available. Please file an issue!",
                                    );
                                return { alias: n, name: r, value: i };
                            }
                            throw new u("intrinsic " + e + " does not exist!");
                        };
                    e.exports = function (e, t) {
                        if ("string" != typeof e || 0 === e.length)
                            throw new c("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof t)
                            throw new c('"allowMissing" argument must be a boolean');
                        if (null === Y(/^%?[^%]*%?$/, e))
                            throw new u(
                                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
                            );
                        var n = (function (e) {
                                var t = H(e, 0, 1),
                                    n = H(e, -1);
                                if ("%" === t && "%" !== n)
                                    throw new u("invalid intrinsic syntax, expected closing `%`");
                                if ("%" === n && "%" !== t)
                                    throw new u("invalid intrinsic syntax, expected opening `%`");
                                var r = [];
                                return (
                                    j(e, W, function (e, t, n, i) {
                                        r[r.length] = n ? j(i, K, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = $("%" + r + "%", t),
                            a = i.name,
                            s = i.value,
                            o = !1,
                            l = i.alias;
                        l && ((r = l[0]), B(n, V([0, 1], l)));
                        for (var d = 1, _ = !0; d < n.length; d += 1) {
                            var f = n[d],
                                h = H(f, 0, 1),
                                p = H(f, -1);
                            if (('"' === h || "'" === h || "`" === h || '"' === p || "'" === p || "`" === p) && h !== p)
                                throw new u("property names with quotes must have matching quotes");
                            if ((("constructor" !== f && _) || (o = !0), F(P, (a = "%" + (r += "." + f) + "%"))))
                                s = P[a];
                            else if (null != s) {
                                if (!(f in s)) {
                                    if (!t)
                                        throw new c(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (y && d + 1 >= n.length) {
                                    var g = y(s, f);
                                    s = (_ = !!g) && "get" in g && !("originalValue" in g.get) ? g.get : s[f];
                                } else (_ = F(s, f)), (s = s[f]);
                                _ && !o && (P[a] = s);
                            }
                        }
                        return s;
                    };
                },
                8153: (e) => {
                    "use strict";
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                4415: (e, t, n) => {
                    "use strict";
                    var r = n(8153);
                    if (r)
                        try {
                            r([], "length");
                        } catch (e) {
                            r = null;
                        }
                    e.exports = r;
                },
                9715: (e, t, n) => {
                    "use strict";
                    var r = "u" > typeof Symbol && Symbol,
                        i = n(3793);
                    e.exports = function () {
                        return (
                            "function" == typeof r &&
                            "function" == typeof Symbol &&
                            "symbol" == typeof r("foo") &&
                            "symbol" == typeof Symbol("bar") &&
                            i()
                        );
                    };
                },
                3793: (e) => {
                    "use strict";
                    e.exports = function () {
                        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                        if ("symbol" == typeof Symbol.iterator) return !0;
                        var e = {},
                            t = Symbol("test"),
                            n = Object(t);
                        if (
                            "string" == typeof t ||
                            "[object Symbol]" !== Object.prototype.toString.call(t) ||
                            "[object Symbol]" !== Object.prototype.toString.call(n)
                        )
                            return !1;
                        for (var r in ((e[t] = 42), e)) return !1;
                        if (
                            ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
                            ("function" == typeof Object.getOwnPropertyNames &&
                                0 !== Object.getOwnPropertyNames(e).length)
                        )
                            return !1;
                        var i = Object.getOwnPropertySymbols(e);
                        if (1 !== i.length || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
                            return !1;
                        if ("function" == typeof Object.getOwnPropertyDescriptor) {
                            var a = Object.getOwnPropertyDescriptor(e, t);
                            if (42 !== a.value || !0 !== a.enumerable) return !1;
                        }
                        return !0;
                    };
                },
                2634: () => {},
            },
            t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var a = (t[r] = { exports: {} });
            return e[r](a, a.exports, n), a.exports;
        }
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
            (n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
            (n.g = (function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || Function("return this")();
                } catch (e) {
                    if ("object" == typeof window) return window;
                }
            })()),
            (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
        var r = {};
        return (
            (() => {
                "use strict";
                n.d(r, { default: () => C });
                var e,
                    t,
                    i,
                    a = n(5882),
                    s = n.n(a);
                !(function (e) {
                    (e.Cancel = "exit"),
                        (e.Complete = "complete"),
                        (e.Error = "error"),
                        (e.Fail = "fail"),
                        (e.Load = "load"),
                        (e.Ready = "ready"),
                        (e.Start = "start"),
                        (e.Success = "success"),
                        (e.DocumentCameraSelect = "document-camera-select"),
                        (e.DocumentCameraCapture = "document-camera-capture"),
                        (e.DocumentUpload = "document-upload"),
                        (e.OneTimeLinkSent = "one-time-link-sent"),
                        (e.OneTimeLinkStart = "one-time-link-start"),
                        (e.OneTimeLinkExit = "one-time-link-exit"),
                        (e.SelfieCameraSelect = "selfie-camera-select"),
                        (e.SelfieCameraCapture = "selfie-camera-capture"),
                        (e.SelfieRecordUpload = "selfie-record-upload"),
                        (e.LoadCameraFailed = "load-camera-failed"),
                        (e.PageChange = "page-change"),
                        (e.InquiryLoad = "inquiry-load"),
                        (e.CountrySelect = "country-select"),
                        (e.VerificationChange = "verification-change");
                })(e || (e = {})),
                    (function (e) {
                        (e.Open = "open"), (e.Exit = "exit"), (e.Destroy = "destroy");
                    })(t || (t = {})),
                    (function (e) {
                        (e.Development = "http://localhost:3000"),
                            (e.Staging = "https://inquiry.withpersona-staging.com"),
                            (e.Canary = "https://canary.withpersona.com"),
                            (e.Production = "https://inquiry.withpersona.com");
                    })(i || (i = {}));
                let o = (function () {
                    function e() {}
                    return (
                        (e.log = function (e, t) {
                            void 0 === t && (t = "info");
                        }),
                        e
                    );
                })();
                function l(e) {
                    switch (e) {
                        case "development":
                            return i.Development;
                        case "staging":
                            return i.Staging;
                        case "canary":
                            return i.Canary;
                        case "production":
                        case void 0:
                        case null:
                            return i.Production;
                        default:
                            if ("string" == typeof e) {
                                var t = e.startsWith("localhost") ? "http://".concat(e) : "https://".concat(e);
                                if (
                                    (function (e) {
                                        try {
                                            var t = new URL(e);
                                            return !(
                                                ("https:" !== t.protocol && "localhost" !== t.hostname) ||
                                                !t.hostname ||
                                                0 === t.hostname.length ||
                                                ("localhost" !== t.hostname && !t.hostname.includes("."))
                                            );
                                        } catch (e) {
                                            return !1;
                                        }
                                    })(t)
                                )
                                    return t.replace(/\/$/, "");
                            }
                            return (
                                o.log(
                                    'Invalid host: "'.concat(
                                        e,
                                        "\". Expected 'development', 'staging', 'canary', 'production', or a valid hostname/URL. Falling back to 'production'.",
                                    ),
                                    "error",
                                ),
                                i.Production
                            );
                    }
                }
                var u = n(2709),
                    c = n.n(u),
                    d = function () {
                        return (d =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }).apply(this, arguments);
                    };
                function _(e) {
                    return Array.isArray(e)
                        ? e.map(_)
                        : !(function (e) {
                                return null != e && e.constructor === Object;
                            })(e)
                          ? e
                          : Object.keys(e).reduce(function (t, n) {
                                var r;
                                return d(d({}, t), (((r = {})[c()(n)] = _(e[n])), r));
                            }, {});
                }
                var f = function (e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length)
                            return {
                                next: function () {
                                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                                },
                            };
                        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                    },
                    h = function (e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r,
                            i,
                            a = n.call(e),
                            s = [];
                        try {
                            for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) s.push(r.value);
                        } catch (e) {
                            i = { error: e };
                        } finally {
                            try {
                                r && !r.done && (n = a.return) && n.call(a);
                            } finally {
                                if (i) throw i.error;
                            }
                        }
                        return s;
                    },
                    p = (function () {
                        function e(e) {
                            this.id = e;
                        }
                        return (
                            (e.prototype.isMounted = function () {
                                return null != document.getElementById(this.id);
                            }),
                            (e.prototype.mount = function (e) {
                                if (document.getElementById(this.id))
                                    console.warn(
                                        "persona: stylesheet ".concat(this.id, " already appended. skipping."),
                                    );
                                else {
                                    var t = E("style", { id: this.id }, [document.createTextNode(e)]);
                                    document.head.appendChild(t);
                                }
                            }),
                            (e.prototype.unmount = function () {
                                var e,
                                    t = document.getElementById(this.id);
                                null != t
                                    ? null == (e = t.parentNode) || e.removeChild(t)
                                    : console.warn("persona: no stylesheet ".concat(this.id, " to remove. skipping."));
                            }),
                            e
                        );
                    })();
                function g(e, t, n) {
                    void 0 === n && (n = []);
                    var r,
                        i,
                        a,
                        s,
                        o = document.createElementNS("http://www.w3.org/2000/svg", e);
                    try {
                        for (var l = f(Object.entries(t)), u = l.next(); !u.done; u = l.next()) {
                            var c = h(u.value, 2),
                                d = c[0],
                                _ = c[1];
                            "className" === d && (d = "class"), o.setAttribute(d, _);
                        }
                    } catch (e) {
                        r = { error: e };
                    } finally {
                        try {
                            u && !u.done && (i = l.return) && i.call(l);
                        } finally {
                            if (r) throw r.error;
                        }
                    }
                    try {
                        for (var p = f(n), g = p.next(); !g.done; g = p.next()) {
                            var E = g.value;
                            !1 !== E && o.appendChild(E);
                        }
                    } catch (e) {
                        a = { error: e };
                    } finally {
                        try {
                            g && !g.done && (s = p.return) && s.call(p);
                        } finally {
                            if (a) throw a.error;
                        }
                    }
                    return o;
                }
                function E(e, t, n) {
                    void 0 === n && (n = []);
                    var r,
                        i,
                        a,
                        s,
                        o = document.createElement(e);
                    try {
                        for (var l = f(Object.entries(t)), u = l.next(); !u.done; u = l.next()) {
                            var c = h(u.value, 2),
                                d = c[0],
                                _ = c[1];
                            "className" === d && (d = "class"), o.setAttribute(d, _);
                        }
                    } catch (e) {
                        r = { error: e };
                    } finally {
                        try {
                            u && !u.done && (i = l.return) && i.call(l);
                        } finally {
                            if (r) throw r.error;
                        }
                    }
                    try {
                        for (var p = f(n), g = p.next(); !g.done; g = p.next()) {
                            var E = g.value;
                            !1 !== E &&
                                ("string" == typeof E ? o.appendChild(document.createTextNode(E)) : o.appendChild(E));
                        }
                    } catch (e) {
                        a = { error: e };
                    } finally {
                        try {
                            g && !g.done && (s = p.return) && s.call(p);
                        } finally {
                            if (a) throw a.error;
                        }
                    }
                    return o;
                }
                function A(e) {
                    return "string" == typeof e ? e : "number" == typeof e ? "".concat(e, "px") : "";
                }
                var I = ["allow-scripts", "allow-same-origin", "allow-popups"],
                    T = ["allow-forms", "allow-modals", "allow-top-navigation-by-user-activation"];
                function y(e, t, n, r) {
                    var i = r.accountId,
                        a = r.accountTypeId,
                        o = r.environment,
                        u = r.environmentId,
                        c = r.fields,
                        d = r.frameAncestors,
                        f = r.frameHeight,
                        h = r.frameWidth,
                        p = r.host,
                        g = r.iframeTitle,
                        E = r.inquiryId,
                        y = r.language,
                        S = r.messageTargetOrigin,
                        v = r.referenceId,
                        C = r.routingCountry,
                        b = r.sandboxAttributes,
                        N = void 0 === b ? T : b,
                        R = r.sessionToken,
                        O = r.styleVariant,
                        D = r.templateId,
                        L = r.templateVersionId,
                        w = r.themeSetId,
                        x = r.widgetPadding,
                        P = !(!D && !L),
                        M = null == D ? void 0 : D.startsWith("itmpl_");
                    if (!P && !E)
                        throw Error(
                            "Either templateId/templateVersionId or inquiryId must be specified to start a flow",
                        );
                    if (P && E)
                        throw Error(
                            "Only one of templateId/templateVersionId or inquiryId should be specified to start a flow",
                        );
                    if (i) {
                        if (v) throw Error("Cannot pass both accountId and referenceId");
                        if (a) throw Error("Cannot pass both accountId and accountTypeId");
                    }
                    var k = l(p),
                        U = s()(
                            {
                                "client-version": "5.3.1",
                                "container-id": t,
                                "flow-type": n,
                                "routing-country": C,
                                "template-id": (M ? null : D) || null,
                                "inquiry-template-id": (M ? D : null) || null,
                                "inquiry-template-version-id": L || null,
                                environment: o,
                                "environment-id": u,
                                "iframe-origin": window.location.origin,
                                "frame-ancestors": null != d ? d : null,
                                "message-target-origin": S || null,
                                "inquiry-id": E || null,
                                language: y,
                                "session-token": R,
                                "reference-id": v,
                                "account-id": i,
                                "account-type-id": a,
                                fields: _(null != c ? c : {}),
                                "style-variant": O || null,
                                "theme-set-id": w,
                                "widget-padding": x,
                            },
                            { addQueryPrefix: !0, skipNulls: !0 },
                        );
                    return (
                        (e.style.maxHeight = A(f)),
                        (e.style.maxWidth = A(h)),
                        e.setAttribute("data-testid", "persona-widget__iframe"),
                        "embedded" === n && e.setAttribute("aria-modal", "true"),
                        (e.title = null != g ? g : "Verify your identity"),
                        (e.className = "persona-widget__iframe"),
                        (e.allow = "camera;microphone;clipboard-write"),
                        e.setAttribute("sandbox", I.concat(N).join(" ")),
                        (e.frameBorder = "0"),
                        (e.src = k + "/widget" + U),
                        (e.onload = function () {}),
                        e
                    );
                }
                var S = function (e) {
                    if ("localhost" === e || /^\d+\.\d+\.\d+\.\d+$/.test(e)) return e;
                    var t = e.split(".");
                    return t.length <= 1 ? e : t.slice(-2).join(".");
                };
                function v(t, n) {
                    var r = n.onLoad,
                        i = n.onReady,
                        a = n.onComplete,
                        s = n.onEvent,
                        o = n.onCancel,
                        u = n.onError,
                        c = n.templateId,
                        d = n.templateVersionId,
                        _ = n.host,
                        f = function (n) {
                            var f,
                                h,
                                p = l(null != _ ? _ : "production");
                            if ("" !== n.origin)
                                try {
                                    if (S(new URL(n.origin).host) !== S(new URL(p).host)) return;
                                } catch (e) {
                                    return;
                                }
                            if (
                                !(
                                    (c && c !== n.data.templateId) ||
                                    (d && d !== n.data.templateVersionId) ||
                                    (n.data.containerId && t !== n.data.containerId)
                                )
                            )
                                switch ((null == s || s(n.data.name, n.data.metadata), n.data.name)) {
                                    case e.Load:
                                        null == r || r();
                                        break;
                                    case e.Ready:
                                        null == i ||
                                            i({
                                                preferredDimensions:
                                                    null == (f = n.data.metadata) ? void 0 : f.preferredDimensions,
                                            });
                                        break;
                                    case e.Complete:
                                    case e.Fail:
                                        null == a ||
                                            a({
                                                inquiryId: n.data.metadata.inquiryId,
                                                status: n.data.metadata.status,
                                                fields:
                                                    null != (h = n.data.metadata.fields) ? h : n.data.metadata.scopes,
                                            });
                                        break;
                                    case e.Cancel:
                                        null == o ||
                                            o({
                                                inquiryId: n.data.metadata.inquiryId,
                                                sessionToken: n.data.metadata.sessionToken,
                                            });
                                        break;
                                    case e.Error:
                                        null == u || u(n.data.error);
                                }
                        };
                    return (
                        window.addEventListener("message", f),
                        function () {
                            window.removeEventListener("message", f);
                        }
                    );
                }
                let C = {
                    Client: (function () {
                        function e(e) {
                            var t,
                                n,
                                r,
                                i,
                                a,
                                s,
                                o,
                                l,
                                u,
                                c,
                                d,
                                _ = this;
                            (this._isLoading = !0),
                                (this._isOpen = !1),
                                (this.personaCSS = new p("persona-widget-styles")),
                                (this.globalCSS = new p("persona-global-styles")),
                                (this.preferredDimensions = null),
                                (this.onLoad = function () {
                                    var e, t;
                                    (_._isLoading = !1), _.render(), null == (t = (e = _.options).onLoad) || t.call(e);
                                }),
                                (this.onReady = function (e) {
                                    var t, n, r;
                                    (_.preferredDimensions =
                                        null != (t = null == e ? void 0 : e.preferredDimensions) ? t : null),
                                        _.handleResize(),
                                        null == (r = (n = _.options).onReady) || r.call(n);
                                }),
                                (this.onComplete = function (e) {
                                    var t,
                                        n,
                                        r = e.inquiryId,
                                        i = e.status,
                                        a = e.fields;
                                    (_._isOpen = !1),
                                        _.render(),
                                        null == (n = (t = _.options).onComplete) ||
                                            n.call(t, { inquiryId: r, status: i, fields: a });
                                }),
                                (this.onCancel = function (e) {
                                    var t,
                                        n,
                                        r = e.inquiryId,
                                        i = e.sessionToken;
                                    (_._isOpen = !1),
                                        _.render(),
                                        null == (n = (t = _.options).onCancel) ||
                                            n.call(t, { inquiryId: r, sessionToken: i });
                                }),
                                (this.handleResize = function () {
                                    var e,
                                        t = null != (e = _.preferredDimensions) ? e : {},
                                        n = t.minimumWidth,
                                        r = t.maximumWidth,
                                        i = t.minimumHeight,
                                        a = t.maximumHeight;
                                    window.matchMedia(
                                        "only screen and (min-width: 600.02px) and (min-height: 600.02px)",
                                    ).matches
                                        ? (n && (_.iframeElement.style.minWidth = n),
                                          r && (_.iframeElement.style.maxWidth = r),
                                          i && (_.iframeElement.style.minHeight = i),
                                          a && (_.iframeElement.style.maxHeight = a))
                                        : ((_.iframeElement.style.minWidth = ""),
                                          (_.iframeElement.style.maxWidth = ""),
                                          (_.iframeElement.style.minHeight = ""),
                                          (_.iframeElement.style.maxHeight = ""));
                                }),
                                (this.options = e),
                                (this.containerParent =
                                    null != (n = null != (t = e.parent) ? t : document.body)
                                        ? n
                                        : document.children[0]),
                                (this.containerElement = E("div", {
                                    class: "persona-widget__overlay",
                                    style: "display: ".concat(this._isOpen ? "block" : "none"),
                                })),
                                (this.containerId =
                                    "persona-widget-" +
                                    Array(16)
                                        .fill(void 0)
                                        .map(function () {
                                            return Math.floor(35 * Math.random()).toString(35);
                                        })
                                        .join("")),
                                this.containerElement.setAttribute("id", this.containerId),
                                (this.loadingElement = E("div", { class: "persona-widget__centered-frame" }, [
                                    g(
                                        "svg",
                                        {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "114",
                                            height: "114",
                                            class: "persona-widget__loading-spinner",
                                        },
                                        [
                                            g("path", {
                                                fill: "none",
                                                stroke: "#0F2B72",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M25.887 10.432a56.275 56.275 0 0 0-15.455 15.455 55.86 55.86 0 0 0-5.183 9.678A55.576 55.576 0 0 0 2.066 46.07m-.8 5.438A56.678 56.678 0 0 0 1 57m4.249 21.435a55.86 55.86 0 0 0 5.183 9.678 56.275 56.275 0 0 0 6.97 8.485m8.485 6.97a55.86 55.86 0 0 0 9.678 5.183 55.576 55.576 0 0 0 10.506 3.183c3.535.7 7.19 1.066 10.929 1.066 3.74 0 7.394-.367 10.929-1.066a55.576 55.576 0 0 0 10.506-3.183 55.86 55.86 0 0 0 9.678-5.183 56.275 56.275 0 0 0 15.455-15.455 55.86 55.86 0 0 0 5.183-9.678 55.576 55.576 0 0 0 3.183-10.506A56.274 56.274 0 0 0 113 57c0-3.74-.367-7.394-1.066-10.929a55.576 55.576 0 0 0-3.183-10.506M96.598 17.402a56.275 56.275 0 0 0-8.485-6.97 55.86 55.86 0 0 0-9.678-5.183A55.576 55.576 0 0 0 67.93 2.066 56.274 56.274 0 0 0 57 1c-3.74 0-7.394.367-10.929 1.066m-34.94 30.418A51.76 51.76 0 0 0 7.225 41.9a51.633 51.633 0 0 0-1.98 10 52.63 52.63 0 0 0 .744 15.247 51.633 51.633 0 0 0 7.768 18.743 52.188 52.188 0 0 0 10.254 11.308 52.188 52.188 0 0 0 8.472 5.67m9.417 3.905a51.633 51.633 0 0 0 10 1.98 52.63 52.63 0 0 0 10.197 0 51.939 51.939 0 0 0 10-1.98 51.61 51.61 0 0 0 9.418-3.904 51.984 51.984 0 0 0 8.472-5.671m3.782-3.43a52.308 52.308 0 0 0 3.429-3.78m9.575-17.89a51.633 51.633 0 0 0 1.98-10 52.63 52.63 0 0 0-.744-15.247 51.633 51.633 0 0 0-7.768-18.743 52.188 52.188 0 0 0-10.254-11.308m-4.097-3.043a51.984 51.984 0 0 0-4.375-2.628M67.148 5.99a51.939 51.939 0 0 0-5.05-.743 52.63 52.63 0 0 0-15.246.743 51.633 51.633 0 0 0-18.743 7.768M24.012 16.8a52.308 52.308 0 0 0-3.782 3.43",
                                            }),
                                        ],
                                    ),
                                ])),
                                this.containerElement.append(this.loadingElement),
                                this.isLoading
                                    ? (this.loadingElement.style.display = "block")
                                    : (this.loadingElement.style.display = "none"),
                                (this.iframeElement = document.createElement("iframe")),
                                (this.unsubscribeFromEvents = v(this.containerId, {
                                    onLoad: null != (r = this.onLoad) ? r : null,
                                    onReady: null != (i = this.onReady) ? i : null,
                                    onComplete: null != (a = this.onComplete) ? a : null,
                                    onCancel: null != (s = this.onCancel) ? s : null,
                                    onEvent: null != (o = this.options.onEvent) ? o : null,
                                    onError: null != (l = this.options.onError) ? l : null,
                                    templateId: null != (u = this.options.templateId) ? u : null,
                                    templateVersionId: null != (c = this.options.templateVersionId) ? c : null,
                                    host: null != (d = this.options.host) ? d : null,
                                })),
                                window.addEventListener("resize", this.handleResize),
                                this.containerElement.appendChild(this.iframeElement),
                                this.containerParent.appendChild(this.containerElement),
                                this.personaCSS.mount(
                                    "@keyframes persona-widget__fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0;\n  }\n  to {\n    /* persona-widget__overlay opacity = 0.7 */\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n  }\n}\n\n@keyframes persona-widget__genieSlideIn {\n  from {\n    transform: translate(-50%, -40%) scale(0.8);\n  }\n  90% {\n    transform: translate(-50%, -51%) scale(1.01);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n@keyframes persona-widget__slideDown {\n  from {\n    transform: translate(-50%, -55%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n.persona-widget__overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  animation: persona-widget__fadeIn 0.3s;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.persona-widget__overlay .persona-widget__centered-frame {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  left: calc(50% - 60px);\n  top: calc(50% - 60px);\n  z-index: 9999;\n}\n\n.persona-widget__overlay .persona-widget__loading-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.persona-widget__overlay .persona-widget__iframe {\n  animation: persona-widget__genieSlideIn 0.3s, persona-widget__slideDown ease-out 0.3s;\n\n  width: 100%;\n  height: 100%;\n\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 12px 40px 2px rgba(0, 0, 0, 0.4);\n\n  @media only screen and (min-width: 600.02px) and (min-height: 600.02px) {\n    max-width: 400px;\n    max-height: 650px;\n  }\n}\n",
                                );
                            try {
                                this.iframeElement = y(this.iframeElement, this.containerId, "embedded", this.options);
                            } catch (e) {
                                throw (console.error("Persona", e), this.destroy(), e);
                            }
                            this.render();
                        }
                        return (
                            (e.preload = function (e) {
                                return (
                                    void 0 === e && (e = "production"),
                                    new Promise(function (t) {
                                        var n = l(e),
                                            r = document.createElement("iframe");
                                        (r.frameBorder = "0"),
                                            (r.style.height = "0px"),
                                            (r.style.width = "0px"),
                                            (r.style.display = "none"),
                                            (r.src = n + "/preload"),
                                            document.body.appendChild(r),
                                            (r.onload = function () {
                                                document.body.removeChild(r), t();
                                            });
                                    })
                                );
                            }),
                            (e.prototype.render = function () {
                                var e;
                                null != this.containerElement
                                    ? ((this.loadingElement.style.display = this.isLoading ? "block" : "none"),
                                      (this.containerElement.style.display = this.isOpen ? "block" : "none"),
                                      this.isOpen && !this.globalCSS.isMounted()
                                          ? this.globalCSS.mount(
                                                ((e = this.containerId),
                                                "\n  /* Don't allow scrolling when widget is open */\n  html body {\n    overflow: hidden !important;\n  }\n\n  /* When the widget takes the full screen, hide everything else to prevent iOS scroll issues. */\n  @media "
                                                    .concat(
                                                        "(max-width: 600px), (max-height: 420px)",
                                                        " {\n    html body > *:not(#",
                                                    )
                                                    .concat(e, ") {\n      display: none !important;\n    }\n  }\n")),
                                            )
                                          : !this.isOpen && this.globalCSS.isMounted() && this.globalCSS.unmount())
                                    : o.log("Cannot render client that has been destroyed", "error");
                            }),
                            (e.prototype.open = function () {
                                var e;
                                null == (e = this.iframeElement.contentWindow) ||
                                    e.postMessage({ action: t.Open, metadata: {} }, this.baseUrl),
                                    (this._isOpen = !0),
                                    this.render();
                            }),
                            (e.prototype.cancel = function (e) {
                                var n;
                                null == (n = this.iframeElement.contentWindow) ||
                                    n.postMessage({ action: t.Exit, metadata: { force: e } }, this.baseUrl),
                                    this.render();
                            }),
                            (e.prototype.destroy = function () {
                                var e;
                                null == (e = this.iframeElement.contentWindow) ||
                                    e.postMessage({ action: t.Destroy, metadata: {} }, this.baseUrl),
                                    this.personaCSS.unmount(),
                                    this.globalCSS.unmount(),
                                    this.containerParent.removeChild(this.containerElement),
                                    this.unsubscribeFromEvents(),
                                    window.removeEventListener("resize", this.handleResize);
                            }),
                            Object.defineProperty(e.prototype, "isLoading", {
                                get: function () {
                                    return this._isLoading;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isOpen", {
                                get: function () {
                                    return this._isOpen;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "baseUrl", {
                                get: function () {
                                    return l(this.options.host);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(),
                    setupIframe: y,
                    setupEvents: v,
                };
            })(),
            r.default
        );
    })(),
);
