!(function (t, n) {
    e.exports = n();
})(self, () =>
    (() => {
        var e = {
                7802: (e, t, n) => {
                    "use strict";
                    var r = n(5049),
                        i = n(3036),
                        s = n(78);
                    e.exports = n(1909) || r.call(s, i);
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
                        s = n(78),
                        a = n(7802);
                    e.exports = function (e) {
                        if (e.length < 1 || "function" != typeof e[0]) throw new i("a function is required");
                        return a(r, s, e);
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
                        s = i([r("%String.prototype.indexOf%")]);
                    e.exports = function (e, t) {
                        var n = r(e, !!t);
                        return "function" == typeof n && s(e, ".prototype.") > -1 ? i([n]) : n;
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
                        s = n(5293),
                        a = n(9055),
                        o = n(8888),
                        l = n(7900),
                        u = n(5389),
                        c = n(6785),
                        d = n(4055),
                        _ = n(716),
                        f = n(7450),
                        p = n(3774),
                        h = n(7552),
                        m = n(5874),
                        E = n(9292),
                        g = n(6071),
                        A = Function,
                        I = function (e) {
                            try {
                                return A('"use strict"; return (' + e + ").constructor;")();
                            } catch (e) {}
                        },
                        T = n(6692),
                        S = n(7848),
                        y = function () {
                            throw new c();
                        },
                        v = T
                            ? (function () {
                                  try {
                                      return y;
                                  } catch (e) {
                                      try {
                                          return T(arguments, "callee").get;
                                      } catch (e) {
                                          return y;
                                      }
                                  }
                              })()
                            : y,
                        N = n(5634)(),
                        C = n(7106),
                        b = n(3766),
                        R = n(6822),
                        O = n(3036),
                        D = n(78),
                        L = {},
                        w = "u" > typeof Uint8Array && C ? C(Uint8Array) : r,
                        x = {
                            __proto__: null,
                            "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": N && C ? C([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": L,
                            "%AsyncGenerator%": L,
                            "%AsyncGeneratorFunction%": L,
                            "%AsyncIteratorPrototype%": L,
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
                            "%Error%": s,
                            "%eval%": eval,
                            "%EvalError%": a,
                            "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": A,
                            "%GeneratorFunction%": L,
                            "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": N && C ? C(C([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "u" < typeof Map ? r : Map,
                            "%MapIteratorPrototype%": "u" > typeof Map && N && C ? C(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": T,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "u" < typeof Promise ? r : Promise,
                            "%Proxy%": "u" < typeof Proxy ? r : Proxy,
                            "%RangeError%": o,
                            "%ReferenceError%": l,
                            "%Reflect%": "u" < typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "u" < typeof Set ? r : Set,
                            "%SetIteratorPrototype%": "u" > typeof Set && N && C ? C(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": N && C ? C(""[Symbol.iterator]()) : r,
                            "%Symbol%": N ? Symbol : r,
                            "%SyntaxError%": u,
                            "%ThrowTypeError%": v,
                            "%TypedArray%": w,
                            "%TypeError%": c,
                            "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": D,
                            "%Function.prototype.apply%": O,
                            "%Object.defineProperty%": S,
                            "%Object.getPrototypeOf%": b,
                            "%Math.abs%": _,
                            "%Math.floor%": f,
                            "%Math.max%": p,
                            "%Math.min%": h,
                            "%Math.pow%": m,
                            "%Math.round%": E,
                            "%Math.sign%": g,
                            "%Reflect.getPrototypeOf%": R,
                        };
                    if (C)
                        try {
                            null.error;
                        } catch (e) {
                            var M = C(C(e));
                            x["%Error.prototype%"] = M;
                        }
                    var P = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = I("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = I("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = I("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && C && (n = C(i.prototype));
                            }
                            return (x[t] = n), n;
                        },
                        k = {
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
                        U = n(5049),
                        G = n(5215),
                        F = U.call(D, Array.prototype.concat),
                        V = U.call(O, Array.prototype.splice),
                        B = U.call(D, String.prototype.replace),
                        H = U.call(D, String.prototype.slice),
                        j = U.call(D, RegExp.prototype.exec),
                        Y =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        W = /\\(\\)?/g,
                        K = function (e, t) {
                            var n,
                                r = e;
                            if ((G(k, r) && (r = "%" + (n = k[r])[0] + "%"), G(x, r))) {
                                var i = x[r];
                                if ((i === L && (i = P(r)), void 0 === i && !t))
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
                        if (null === j(/^%?[^%]*%?$/, e))
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
                                    B(e, Y, function (e, t, n, i) {
                                        r[r.length] = n ? B(i, W, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = K("%" + r + "%", t),
                            s = i.name,
                            a = i.value,
                            o = !1,
                            l = i.alias;
                        l && ((r = l[0]), V(n, F([0, 1], l)));
                        for (var d = 1, _ = !0; d < n.length; d += 1) {
                            var f = n[d],
                                p = H(f, 0, 1),
                                h = H(f, -1);
                            if (('"' === p || "'" === p || "`" === p || '"' === h || "'" === h || "`" === h) && p !== h)
                                throw new u("property names with quotes must have matching quotes");
                            if ((("constructor" !== f && _) || (o = !0), G(x, (s = "%" + (r += "." + f) + "%"))))
                                a = x[s];
                            else if (null != a) {
                                if (!(f in a)) {
                                    if (!t)
                                        throw new c(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (T && d + 1 >= n.length) {
                                    var m = T(a, f);
                                    a = (_ = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : a[f];
                                } else (_ = G(a, f)), (a = a[f]);
                                _ && !o && (x[s] = a);
                            }
                        }
                        return a;
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
                            var s = Object.getOwnPropertyDescriptor(e, t);
                            if (42 !== s.value || !0 !== s.enumerable) return !1;
                        }
                        return !0;
                    };
                },
                9302: (e, t, n) => {
                    "use strict";
                    var r,
                        i = n(6688),
                        s = n(8952);
                    try {
                        r = [].__proto__ === Array.prototype;
                    } catch (e) {
                        if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
                    }
                    var a = !!r && s && s(Object.prototype, "__proto__"),
                        o = Object,
                        l = o.getPrototypeOf;
                    e.exports =
                        a && "function" == typeof a.get
                            ? i([a.get])
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
                            var s,
                                a = (function (e, t) {
                                    for (var n = [], r = 1, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
                                    return n;
                                })(arguments),
                                o = n(0, i.length - a.length),
                                l = [],
                                u = 0;
                            u < o;
                            u++
                        )
                            l[u] = "$" + u;
                        if (
                            ((s = Function(
                                "binder",
                                "return function (" +
                                    (function (e, t) {
                                        for (var n = "", r = 0; r < e.length; r += 1)
                                            (n += e[r]), r + 1 < e.length && (n += ",");
                                        return n;
                                    })(l) +
                                    "){ return binder.apply(this,arguments); }",
                            )(function () {
                                if (this instanceof s) {
                                    var t = i.apply(this, r(a, arguments));
                                    return Object(t) === t ? t : this;
                                }
                                return i.apply(e, r(a, arguments));
                            })),
                            i.prototype)
                        ) {
                            var c = function () {};
                            (c.prototype = i.prototype), (s.prototype = new c()), (c.prototype = null);
                        }
                        return s;
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
                        s = n(9302);
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
                          : s
                            ? function (e) {
                                  return s(e);
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
                        s = 1 / 0,
                        a = "[object Symbol]",
                        o = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        l = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        u = "\\ud800-\\udfff",
                        c = "\\u2700-\\u27bf",
                        d = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        _ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        f =
                            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        p = "[" + f + "]",
                        h = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
                        m = "\\d+",
                        E = "[" + c + "]",
                        g = "[" + d + "]",
                        A = "[^" + u + f + m + c + d + _ + "]",
                        I = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        T = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        S = "[" + _ + "]",
                        y = "(?:" + g + "|" + A + ")",
                        v = "(?:" + S + "|" + A + ")",
                        N = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                        C = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                        b = "(?:" + h + "|\\ud83c[\\udffb-\\udfff])?",
                        R = "[\\ufe0e\\ufe0f]?",
                        O = R + b + "(?:\\u200d(?:" + ["[^" + u + "]", I, T].join("|") + ")" + R + b + ")*",
                        D = "(?:" + [E, I, T].join("|") + ")" + O,
                        L = RegExp("['’]", "g"),
                        w = RegExp(h, "g"),
                        x = RegExp(
                            [
                                S + "?" + g + "+" + N + "(?=" + [p, S, "$"].join("|") + ")",
                                v + "+" + C + "(?=" + [p, S + y, "$"].join("|") + ")",
                                S + "?" + y + "+" + N,
                                S + "+" + C,
                                m,
                                D,
                            ].join("|"),
                            "g",
                        ),
                        M = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        P = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                        k = "object" == typeof self && self && self.Object === Object && self,
                        U = P || k || Function("return this")(),
                        G =
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
                        F = Object.prototype.toString,
                        V = U.Symbol,
                        B = V ? V.prototype : void 0,
                        H = B ? B.toString : void 0;
                    function j(e) {
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
                                                  F.call(e) == a)
                                          );
                                      })(e)
                                  )
                                      return H ? H.call(e) : "";
                                  var t = e + "";
                                  return "0" == t && 1 / e == -s ? "-0" : t;
                              })(e);
                    }
                    (r = function (e, t, n) {
                        return e + (n ? "-" : "") + t.toLowerCase();
                    }),
                        (e.exports = function (e) {
                            return (function (e, t, n, r) {
                                for (var i = -1, s = e ? e.length : 0; ++i < s; ) n = t(n, e[i], i, e);
                                return n;
                            })(
                                (function (e, t, n) {
                                    return !(function (e) {
                                        return M.test(e);
                                    })((e = j(e)))
                                        ? (function (e) {
                                              return e.match(o) || [];
                                          })(e)
                                        : (function (e) {
                                              return e.match(x) || [];
                                          })(e);
                                })(
                                    (function (e) {
                                        return (e = j(e)) && e.replace(l, G).replace(w, "");
                                    })(e).replace(L, ""),
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
                        s = r && i && "function" == typeof i.get ? i.get : null,
                        a = r && Map.prototype.forEach,
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
                        p = Boolean.prototype.valueOf,
                        h = Object.prototype.toString,
                        m = Function.prototype.toString,
                        E = String.prototype.match,
                        g = String.prototype.slice,
                        A = String.prototype.replace,
                        I = String.prototype.toUpperCase,
                        T = String.prototype.toLowerCase,
                        S = RegExp.prototype.test,
                        y = Array.prototype.concat,
                        v = Array.prototype.join,
                        N = Array.prototype.slice,
                        C = Math.floor,
                        b = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                        R = Object.getOwnPropertySymbols,
                        O =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? Symbol.prototype.toString
                                : null,
                        D = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                        L =
                            "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1)
                                ? Symbol.toStringTag
                                : null,
                        w = Object.prototype.propertyIsEnumerable,
                        x =
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
                            var r = e < 0 ? -C(-e) : C(e);
                            if (r !== e) {
                                var i = String(r),
                                    s = g.call(t, i.length + 1);
                                return A.call(i, n, "$&_") + "." + A.call(A.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
                            }
                        }
                        return A.call(t, n, "$&_");
                    }
                    var P = n(2634),
                        k = P.custom,
                        U = W(k) ? k : null,
                        G = { __proto__: null, double: '"', single: "'" },
                        F = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
                    function V(e, t, n) {
                        var r = G[n.quoteStyle || t];
                        return r + e + r;
                    }
                    function B(e) {
                        return A.call(String(e), /"/g, "&quot;");
                    }
                    function H(e) {
                        return !L || !("object" == typeof e && (L in e || void 0 !== e[L]));
                    }
                    function j(e) {
                        return "[object Array]" === $(e) && H(e);
                    }
                    function Y(e) {
                        return "[object RegExp]" === $(e) && H(e);
                    }
                    function W(e) {
                        if (D) return e && "object" == typeof e && e instanceof Symbol;
                        if ("symbol" == typeof e) return !0;
                        if (!e || "object" != typeof e || !O) return !1;
                        try {
                            return O.call(e), !0;
                        } catch (e) {}
                        return !1;
                    }
                    e.exports = function e(t, r, i, o) {
                        var l = r || {};
                        if (z(l, "quoteStyle") && !z(G, l.quoteStyle))
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
                        var h = !z(l, "customInspect") || l.customInspect;
                        if ("boolean" != typeof h && "symbol" !== h)
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
                        var I = l.numericSeparator;
                        if (void 0 === t) return "undefined";
                        if (null === t) return "null";
                        if ("boolean" == typeof t) return t ? "true" : "false";
                        if ("string" == typeof t) return Z(t, l);
                        if ("number" == typeof t) {
                            if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                            var S = String(t);
                            return I ? M(t, S) : S;
                        }
                        if ("bigint" == typeof t) {
                            var C = String(t) + "n";
                            return I ? M(t, C) : C;
                        }
                        var R = void 0 === l.depth ? 5 : l.depth;
                        if ((void 0 === i && (i = 0), i >= R && R > 0 && "object" == typeof t))
                            return j(t) ? "[Array]" : "[Object]";
                        var k,
                            F = (function (e, t) {
                                var n;
                                if ("	" === e.indent) n = "	";
                                else {
                                    if (!("number" == typeof e.indent && e.indent > 0)) return null;
                                    n = v.call(Array(e.indent + 1), " ");
                                }
                                return { base: n, prev: v.call(Array(t + 1), n) };
                            })(l, i);
                        if (void 0 === o) o = [];
                        else if (q(o, t) >= 0) return "[Circular]";
                        function K(t, n, r) {
                            if ((n && (o = N.call(o)).push(n), r)) {
                                var s = { depth: l.depth };
                                return z(l, "quoteStyle") && (s.quoteStyle = l.quoteStyle), e(t, s, i + 1, o);
                            }
                            return e(t, l, i + 1, o);
                        }
                        if ("function" == typeof t && !Y(t)) {
                            var X = (function (e) {
                                    if (e.name) return e.name;
                                    var t = E.call(m.call(e), /^function\s*([\w$]+)/);
                                    return t ? t[1] : null;
                                })(t),
                                er = en(t, K);
                            return (
                                "[Function" +
                                (X ? ": " + X : " (anonymous)") +
                                "]" +
                                (er.length > 0 ? " { " + v.call(er, ", ") + " }" : "")
                            );
                        }
                        if (W(t)) {
                            var ei = D ? A.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : O.call(t);
                            return "object" != typeof t || D ? ei : Q(ei);
                        }
                        if (
                            (k = t) &&
                            "object" == typeof k &&
                            (("u" > typeof HTMLElement && k instanceof HTMLElement) ||
                                ("string" == typeof k.nodeName && "function" == typeof k.getAttribute))
                        ) {
                            for (
                                var es = "<" + T.call(String(t.nodeName)), ea = t.attributes || [], eo = 0;
                                eo < ea.length;
                                eo++
                            )
                                es += " " + ea[eo].name + "=" + V(B(ea[eo].value), "double", l);
                            return (
                                (es += ">"),
                                t.childNodes && t.childNodes.length && (es += "..."),
                                es + "</" + T.call(String(t.nodeName)) + ">"
                            );
                        }
                        if (j(t)) {
                            if (0 === t.length) return "[]";
                            var el = en(t, K);
                            return F &&
                                !(function (e) {
                                    for (var t = 0; t < e.length; t++) if (q(e[t], "\n") >= 0) return !1;
                                    return !0;
                                })(el)
                                ? "[" + et(el, F) + "]"
                                : "[ " + v.call(el, ", ") + " ]";
                        }
                        if (
                            (function (e) {
                                return "[object Error]" === $(e) && H(e);
                            })(t)
                        ) {
                            var eu = en(t, K);
                            return "cause" in Error.prototype || !("cause" in t) || w.call(t, "cause")
                                ? 0 === eu.length
                                    ? "[" + String(t) + "]"
                                    : "{ [" + String(t) + "] " + v.call(eu, ", ") + " }"
                                : "{ [" + String(t) + "] " + v.call(y.call("[cause]: " + K(t.cause), eu), ", ") + " }";
                        }
                        if ("object" == typeof t && h) {
                            if (U && "function" == typeof t[U] && P) return P(t, { depth: R - i });
                            if ("symbol" !== h && "function" == typeof t.inspect) return t.inspect();
                        }
                        if (
                            (function (e) {
                                if (!s || !e || "object" != typeof e) return !1;
                                try {
                                    s.call(e);
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
                            var ec = [];
                            return (
                                a &&
                                    a.call(t, function (e, n) {
                                        ec.push(K(n, t, !0) + " => " + K(e, t));
                                    }),
                                ee("Map", s.call(t), ec, F)
                            );
                        }
                        if (
                            (function (e) {
                                if (!u || !e || "object" != typeof e) return !1;
                                try {
                                    u.call(e);
                                    try {
                                        s.call(e);
                                    } catch (e) {
                                        return !0;
                                    }
                                    return e instanceof Set;
                                } catch (e) {}
                                return !1;
                            })(t)
                        ) {
                            var ed = [];
                            return (
                                c &&
                                    c.call(t, function (e) {
                                        ed.push(K(e, t));
                                    }),
                                ee("Set", u.call(t), ed, F)
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
                            return J("WeakMap");
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
                            return J("WeakSet");
                        if (
                            (function (e) {
                                if (!f || !e || "object" != typeof e) return !1;
                                try {
                                    return f.call(e), !0;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return J("WeakRef");
                        if (
                            (function (e) {
                                return "[object Number]" === $(e) && H(e);
                            })(t)
                        )
                            return Q(K(Number(t)));
                        if (
                            (function (e) {
                                if (!e || "object" != typeof e || !b) return !1;
                                try {
                                    return b.call(e), !0;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return Q(K(b.call(t)));
                        if (
                            (function (e) {
                                return "[object Boolean]" === $(e) && H(e);
                            })(t)
                        )
                            return Q(p.call(t));
                        if (
                            (function (e) {
                                return "[object String]" === $(e) && H(e);
                            })(t)
                        )
                            return Q(K(String(t)));
                        if ("u" > typeof window && t === window) return "{ [object Window] }";
                        if (("u" > typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
                            return "{ [object globalThis] }";
                        if (
                            !(function (e) {
                                return "[object Date]" === $(e) && H(e);
                            })(t) &&
                            !Y(t)
                        ) {
                            var e_ = en(t, K),
                                ef = x ? x(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                                ep = t instanceof Object ? "" : "null prototype",
                                eh = !ef && L && Object(t) === t && L in t ? g.call($(t), 8, -1) : ep ? "Object" : "",
                                em =
                                    (ef || "function" != typeof t.constructor
                                        ? ""
                                        : t.constructor.name
                                          ? t.constructor.name + " "
                                          : "") +
                                    (eh || ep ? "[" + v.call(y.call([], eh || [], ep || []), ": ") + "] " : "");
                            return 0 === e_.length
                                ? em + "{}"
                                : F
                                  ? em + "{" + et(e_, F) + "}"
                                  : em + "{ " + v.call(e_, ", ") + " }";
                        }
                        return String(t);
                    };
                    var K =
                        Object.prototype.hasOwnProperty ||
                        function (e) {
                            return e in this;
                        };
                    function z(e, t) {
                        return K.call(e, t);
                    }
                    function $(e) {
                        return h.call(e);
                    }
                    function q(e, t) {
                        if (e.indexOf) return e.indexOf(t);
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                        return -1;
                    }
                    function Z(e, t) {
                        if (e.length > t.maxStringLength) {
                            var n = e.length - t.maxStringLength,
                                r = "... " + n + " more character" + (n > 1 ? "s" : "");
                            return Z(g.call(e, 0, t.maxStringLength), t) + r;
                        }
                        var i = F[t.quoteStyle || "single"];
                        return (i.lastIndex = 0), V(A.call(A.call(e, i, "\\$1"), /[\x00-\x1f]/g, X), "single", t);
                    }
                    function X(e) {
                        var t = e.charCodeAt(0),
                            n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
                        return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + I.call(t.toString(16));
                    }
                    function Q(e) {
                        return "Object(" + e + ")";
                    }
                    function J(e) {
                        return e + " { ? }";
                    }
                    function ee(e, t, n, r) {
                        return e + " (" + t + ") {" + (r ? et(n, r) : v.call(n, ", ")) + "}";
                    }
                    function et(e, t) {
                        if (0 === e.length) return "";
                        var n = "\n" + t.prev + t.base;
                        return n + v.call(e, "," + n) + "\n" + t.prev;
                    }
                    function en(e, t) {
                        var n = j(e),
                            r = [];
                        if (n) {
                            r.length = e.length;
                            for (var i = 0; i < e.length; i++) r[i] = z(e, i) ? t(e[i], e) : "";
                        }
                        var s,
                            a = "function" == typeof R ? R(e) : [];
                        if (D) {
                            s = {};
                            for (var o = 0; o < a.length; o++) s["$" + a[o]] = a[o];
                        }
                        for (var l in e)
                            z(e, l) &&
                                ((n && String(Number(l)) === l && l < e.length) ||
                                    (D && s["$" + l] instanceof Symbol) ||
                                    (S.call(/[^\w$]/, l)
                                        ? r.push(t(l, e) + ": " + t(e[l], e))
                                        : r.push(l + ": " + t(e[l], e))));
                        if ("function" == typeof R)
                            for (var u = 0; u < a.length; u++)
                                w.call(e, a[u]) && r.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
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
                        s = n(9647),
                        a = Object.prototype.hasOwnProperty,
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
                        _ = s.default,
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
                            formatter: s.formatters[_],
                            indices: !1,
                            serializeDate: function (e) {
                                return d.call(e);
                            },
                            skipNulls: !1,
                            strictNullHandling: !1,
                        },
                        p = {},
                        h = function e(t, n, s, a, o, u, d, _, h, m, E, g, A, I, T, S, y, v) {
                            for (var N, C = t, b = v, R = 0, O = !1; void 0 !== (b = b.get(p)) && !O; ) {
                                var D = b.get(t);
                                if (((R += 1), void 0 !== D)) {
                                    if (D === R) throw RangeError("Cyclic object value");
                                    O = !0;
                                }
                                void 0 === b.get(p) && (R = 0);
                            }
                            if (
                                ("function" == typeof m
                                    ? (C = m(n, C))
                                    : C instanceof Date
                                      ? (C = A(C))
                                      : "comma" === s &&
                                        l(C) &&
                                        (C = i.maybeMap(C, function (e) {
                                            return e instanceof Date ? A(e) : e;
                                        })),
                                null === C)
                            ) {
                                if (u) return h && !S ? h(n, f.encoder, y, "key", I) : n;
                                C = "";
                            }
                            if (
                                "string" == typeof (N = C) ||
                                "number" == typeof N ||
                                "boolean" == typeof N ||
                                "symbol" == typeof N ||
                                "bigint" == typeof N ||
                                i.isBuffer(C)
                            )
                                return h
                                    ? [
                                          T(S ? n : h(n, f.encoder, y, "key", I)) +
                                              "=" +
                                              T(h(C, f.encoder, y, "value", I)),
                                      ]
                                    : [T(n) + "=" + T(String(C))];
                            var L,
                                w = [];
                            if (void 0 === C) return w;
                            if ("comma" === s && l(C))
                                S && h && (C = i.maybeMap(C, h)),
                                    (L = [{ value: C.length > 0 ? C.join(",") || null : void 0 }]);
                            else if (l(m)) L = m;
                            else {
                                var x = Object.keys(C);
                                L = E ? x.sort(E) : x;
                            }
                            var M = _ ? String(n).replace(/\./g, "%2E") : String(n),
                                P = a && l(C) && 1 === C.length ? M + "[]" : M;
                            if (o && l(C) && 0 === C.length) return P + "[]";
                            for (var k = 0; k < L.length; ++k) {
                                var U = L[k],
                                    G = "object" == typeof U && U && void 0 !== U.value ? U.value : C[U];
                                if (!d || null !== G) {
                                    var F = g && _ ? String(U).replace(/\./g, "%2E") : String(U),
                                        V = l(C)
                                            ? "function" == typeof s
                                                ? s(P, F)
                                                : P
                                            : P + (g ? "." + F : "[" + F + "]");
                                    v.set(t, R);
                                    var B = r();
                                    B.set(p, v),
                                        c(
                                            w,
                                            e(
                                                G,
                                                V,
                                                s,
                                                a,
                                                o,
                                                u,
                                                d,
                                                _,
                                                "comma" === s && S && l(C) ? null : h,
                                                m,
                                                E,
                                                g,
                                                A,
                                                I,
                                                T,
                                                S,
                                                y,
                                                B,
                                            ),
                                        );
                                }
                            }
                            return w;
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
                                var n = s.default;
                                if (void 0 !== e.format) {
                                    if (!a.call(s.formatters, e.format))
                                        throw TypeError("Unknown format option provided.");
                                    n = e.format;
                                }
                                var r,
                                    i = s.formatters[n],
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
                            p = "comma" === _ && u.commaRoundTrip;
                        n || (n = Object.keys(i)), u.sort && n.sort(u.sort);
                        for (var m = r(), E = 0; E < n.length; ++E) {
                            var g = n[E],
                                A = i[g];
                            (u.skipNulls && null === A) ||
                                c(
                                    d,
                                    h(
                                        A,
                                        g,
                                        _,
                                        p,
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
                                        m,
                                    ),
                                );
                        }
                        var I = d.join(u.delimiter),
                            T = !0 === u.addQueryPrefix ? "?" : "";
                        return (
                            u.charsetSentinel &&
                                ("iso-8859-1" === u.charset ? (T += "utf8=%26%2310003%3B&") : (T += "utf8=%E2%9C%93&")),
                            I.length > 0 ? T + I : ""
                        );
                    };
                },
                4662: (e, t, n) => {
                    "use strict";
                    var r = n(9647),
                        i = Object.prototype.hasOwnProperty,
                        s = Array.isArray,
                        a = (function () {
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
                                for (var i = t[r], a = i.obj[i.prop], o = Object.keys(a), l = 0; l < o.length; ++l) {
                                    var u = o[l],
                                        c = a[u];
                                    "object" == typeof c &&
                                        null !== c &&
                                        -1 === n.indexOf(c) &&
                                        (t.push({ obj: a, prop: u }), n.push(c));
                                }
                            return (
                                (function (e) {
                                    for (; e.length > 1; ) {
                                        var t = e.pop(),
                                            n = t.obj[t.prop];
                                        if (s(n)) {
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
                        encode: function (e, t, n, i, s) {
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
                                    var p = d.charCodeAt(f);
                                    45 === p ||
                                    46 === p ||
                                    95 === p ||
                                    126 === p ||
                                    (p >= 48 && p <= 57) ||
                                    (p >= 65 && p <= 90) ||
                                    (p >= 97 && p <= 122) ||
                                    (s === r.RFC1738 && (40 === p || 41 === p))
                                        ? (_[_.length] = d.charAt(f))
                                        : p < 128
                                          ? (_[_.length] = a[p])
                                          : p < 2048
                                            ? (_[_.length] = a[192 | (p >> 6)] + a[128 | (63 & p)])
                                            : p < 55296 || p >= 57344
                                              ? (_[_.length] =
                                                    a[224 | (p >> 12)] + a[128 | ((p >> 6) & 63)] + a[128 | (63 & p)])
                                              : ((f += 1),
                                                (p = 65536 + (((1023 & p) << 10) | (1023 & d.charCodeAt(f)))),
                                                (_[_.length] =
                                                    a[240 | (p >> 18)] +
                                                    a[128 | ((p >> 12) & 63)] +
                                                    a[128 | ((p >> 6) & 63)] +
                                                    a[128 | (63 & p)]));
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
                            if (s(e)) {
                                for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                return n;
                            }
                            return t(e);
                        },
                        merge: function e(t, n, r) {
                            if (!n) return t;
                            if ("object" != typeof n && "function" != typeof n) {
                                if (s(t)) t.push(n);
                                else {
                                    if (!t || "object" != typeof t) return [t, n];
                                    ((r && (r.plainObjects || r.allowPrototypes)) || !i.call(Object.prototype, n)) &&
                                        (t[n] = !0);
                                }
                                return t;
                            }
                            if (!t || "object" != typeof t) return [t].concat(n);
                            var a = t;
                            return (
                                s(t) && !s(n) && (a = o(t, r)),
                                s(t) && s(n)
                                    ? (n.forEach(function (n, s) {
                                          if (i.call(t, s)) {
                                              var a = t[s];
                                              a && "object" == typeof a && n && "object" == typeof n
                                                  ? (t[s] = e(a, n, r))
                                                  : t.push(n);
                                          } else t[s] = n;
                                      }),
                                      t)
                                    : Object.keys(n).reduce(function (t, s) {
                                          var a = n[s];
                                          return i.call(t, s) ? (t[s] = e(t[s], a, r)) : (t[s] = a), t;
                                      }, a)
                            );
                        },
                    };
                },
                6738: (e, t, n) => {
                    "use strict";
                    var r = n(6785),
                        i = n(5937),
                        s = n(8709),
                        a = n(885),
                        o = n(8977) || a || s;
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
                        s = function (e, t, n) {
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
                                            if (e) return s(e, t, !0);
                                        })(e, t);
                                    return r && n && n === r && (e = void 0), !!r;
                                },
                                get: function (t) {
                                    return (function (e, t) {
                                        if (e) {
                                            var n = s(e, t);
                                            return n && n.value;
                                        }
                                    })(e, t);
                                },
                                has: function (t) {
                                    return (function (e, t) {
                                        return !!e && !!s(e, t);
                                    })(e, t);
                                },
                                set: function (t, n) {
                                    e || (e = { next: void 0 }),
                                        (function (e, t, n) {
                                            var r = s(e, t);
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
                        s = n(5937),
                        a = n(6785),
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
                                        if (!t.has(e)) throw new a("Side channel does not contain " + s(e));
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
                        s = n(5293),
                        a = n(9055),
                        o = n(8888),
                        l = n(7900),
                        u = n(5389),
                        c = n(6785),
                        d = n(4055),
                        _ = n(716),
                        f = n(7450),
                        p = n(3774),
                        h = n(7552),
                        m = n(5874),
                        E = n(9292),
                        g = n(6071),
                        A = Function,
                        I = function (e) {
                            try {
                                return A('"use strict"; return (' + e + ").constructor;")();
                            } catch (e) {}
                        },
                        T = n(5875),
                        S = n(1823),
                        y = function () {
                            throw new c();
                        },
                        v = T
                            ? (function () {
                                  try {
                                      return y;
                                  } catch (e) {
                                      try {
                                          return T(arguments, "callee").get;
                                      } catch (e) {
                                          return y;
                                      }
                                  }
                              })()
                            : y,
                        N = n(5639)(),
                        C = n(7106),
                        b = n(3766),
                        R = n(6822),
                        O = n(3036),
                        D = n(78),
                        L = {},
                        w = "u" > typeof Uint8Array && C ? C(Uint8Array) : r,
                        x = {
                            __proto__: null,
                            "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": N && C ? C([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": L,
                            "%AsyncGenerator%": L,
                            "%AsyncGeneratorFunction%": L,
                            "%AsyncIteratorPrototype%": L,
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
                            "%Error%": s,
                            "%eval%": eval,
                            "%EvalError%": a,
                            "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": A,
                            "%GeneratorFunction%": L,
                            "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": N && C ? C(C([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "u" < typeof Map ? r : Map,
                            "%MapIteratorPrototype%": "u" > typeof Map && N && C ? C(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": T,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "u" < typeof Promise ? r : Promise,
                            "%Proxy%": "u" < typeof Proxy ? r : Proxy,
                            "%RangeError%": o,
                            "%ReferenceError%": l,
                            "%Reflect%": "u" < typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "u" < typeof Set ? r : Set,
                            "%SetIteratorPrototype%": "u" > typeof Set && N && C ? C(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": N && C ? C(""[Symbol.iterator]()) : r,
                            "%Symbol%": N ? Symbol : r,
                            "%SyntaxError%": u,
                            "%ThrowTypeError%": v,
                            "%TypedArray%": w,
                            "%TypeError%": c,
                            "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": D,
                            "%Function.prototype.apply%": O,
                            "%Object.defineProperty%": S,
                            "%Object.getPrototypeOf%": b,
                            "%Math.abs%": _,
                            "%Math.floor%": f,
                            "%Math.max%": p,
                            "%Math.min%": h,
                            "%Math.pow%": m,
                            "%Math.round%": E,
                            "%Math.sign%": g,
                            "%Reflect.getPrototypeOf%": R,
                        };
                    if (C)
                        try {
                            null.error;
                        } catch (e) {
                            var M = C(C(e));
                            x["%Error.prototype%"] = M;
                        }
                    var P = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = I("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = I("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = I("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && C && (n = C(i.prototype));
                            }
                            return (x[t] = n), n;
                        },
                        k = {
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
                        U = n(5049),
                        G = n(5215),
                        F = U.call(D, Array.prototype.concat),
                        V = U.call(O, Array.prototype.splice),
                        B = U.call(D, String.prototype.replace),
                        H = U.call(D, String.prototype.slice),
                        j = U.call(D, RegExp.prototype.exec),
                        Y =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        W = /\\(\\)?/g,
                        K = function (e, t) {
                            var n,
                                r = e;
                            if ((G(k, r) && (r = "%" + (n = k[r])[0] + "%"), G(x, r))) {
                                var i = x[r];
                                if ((i === L && (i = P(r)), void 0 === i && !t))
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
                        if (null === j(/^%?[^%]*%?$/, e))
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
                                    B(e, Y, function (e, t, n, i) {
                                        r[r.length] = n ? B(i, W, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = K("%" + r + "%", t),
                            s = i.name,
                            a = i.value,
                            o = !1,
                            l = i.alias;
                        l && ((r = l[0]), V(n, F([0, 1], l)));
                        for (var d = 1, _ = !0; d < n.length; d += 1) {
                            var f = n[d],
                                p = H(f, 0, 1),
                                h = H(f, -1);
                            if (('"' === p || "'" === p || "`" === p || '"' === h || "'" === h || "`" === h) && p !== h)
                                throw new u("property names with quotes must have matching quotes");
                            if ((("constructor" !== f && _) || (o = !0), G(x, (s = "%" + (r += "." + f) + "%"))))
                                a = x[s];
                            else if (null != a) {
                                if (!(f in a)) {
                                    if (!t)
                                        throw new c(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (T && d + 1 >= n.length) {
                                    var m = T(a, f);
                                    a = (_ = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : a[f];
                                } else (_ = G(a, f)), (a = a[f]);
                                _ && !o && (x[s] = a);
                            }
                        }
                        return a;
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
                            var s = Object.getOwnPropertyDescriptor(e, t);
                            if (42 !== s.value || !0 !== s.enumerable) return !1;
                        }
                        return !0;
                    };
                },
                8977: (e, t, n) => {
                    "use strict";
                    var r = n(8297),
                        i = n(2774),
                        s = n(5937),
                        a = n(885),
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
                                          if (!n.has(e)) throw new o("Side channel does not contain " + s(e));
                                      },
                                      delete: function (n) {
                                          if (l && n && ("object" == typeof n || "function" == typeof n)) {
                                              if (e) return _(e, n);
                                          } else if (a && t) return t.delete(n);
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
                                              : a && (t || (t = a()), t.set(n, r));
                                      },
                                  };
                              return n;
                          }
                        : a;
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
                        s = n(5293),
                        a = n(9055),
                        o = n(8888),
                        l = n(7900),
                        u = n(5389),
                        c = n(6785),
                        d = n(4055),
                        _ = n(716),
                        f = n(7450),
                        p = n(3774),
                        h = n(7552),
                        m = n(5874),
                        E = n(9292),
                        g = n(6071),
                        A = Function,
                        I = function (e) {
                            try {
                                return A('"use strict"; return (' + e + ").constructor;")();
                            } catch (e) {}
                        },
                        T = n(4415),
                        S = n(315),
                        y = function () {
                            throw new c();
                        },
                        v = T
                            ? (function () {
                                  try {
                                      return y;
                                  } catch (e) {
                                      try {
                                          return T(arguments, "callee").get;
                                      } catch (e) {
                                          return y;
                                      }
                                  }
                              })()
                            : y,
                        N = n(9715)(),
                        C = n(7106),
                        b = n(3766),
                        R = n(6822),
                        O = n(3036),
                        D = n(78),
                        L = {},
                        w = "u" > typeof Uint8Array && C ? C(Uint8Array) : r,
                        x = {
                            __proto__: null,
                            "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": N && C ? C([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": L,
                            "%AsyncGenerator%": L,
                            "%AsyncGeneratorFunction%": L,
                            "%AsyncIteratorPrototype%": L,
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
                            "%Error%": s,
                            "%eval%": eval,
                            "%EvalError%": a,
                            "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": A,
                            "%GeneratorFunction%": L,
                            "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": N && C ? C(C([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "u" < typeof Map ? r : Map,
                            "%MapIteratorPrototype%": "u" > typeof Map && N && C ? C(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": T,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "u" < typeof Promise ? r : Promise,
                            "%Proxy%": "u" < typeof Proxy ? r : Proxy,
                            "%RangeError%": o,
                            "%ReferenceError%": l,
                            "%Reflect%": "u" < typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "u" < typeof Set ? r : Set,
                            "%SetIteratorPrototype%": "u" > typeof Set && N && C ? C(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": N && C ? C(""[Symbol.iterator]()) : r,
                            "%Symbol%": N ? Symbol : r,
                            "%SyntaxError%": u,
                            "%ThrowTypeError%": v,
                            "%TypedArray%": w,
                            "%TypeError%": c,
                            "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": D,
                            "%Function.prototype.apply%": O,
                            "%Object.defineProperty%": S,
                            "%Object.getPrototypeOf%": b,
                            "%Math.abs%": _,
                            "%Math.floor%": f,
                            "%Math.max%": p,
                            "%Math.min%": h,
                            "%Math.pow%": m,
                            "%Math.round%": E,
                            "%Math.sign%": g,
                            "%Reflect.getPrototypeOf%": R,
                        };
                    if (C)
                        try {
                            null.error;
                        } catch (e) {
                            var M = C(C(e));
                            x["%Error.prototype%"] = M;
                        }
                    var P = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = I("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = I("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = I("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && C && (n = C(i.prototype));
                            }
                            return (x[t] = n), n;
                        },
                        k = {
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
                        U = n(5049),
                        G = n(5215),
                        F = U.call(D, Array.prototype.concat),
                        V = U.call(O, Array.prototype.splice),
                        B = U.call(D, String.prototype.replace),
                        H = U.call(D, String.prototype.slice),
                        j = U.call(D, RegExp.prototype.exec),
                        Y =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        W = /\\(\\)?/g,
                        K = function (e, t) {
                            var n,
                                r = e;
                            if ((G(k, r) && (r = "%" + (n = k[r])[0] + "%"), G(x, r))) {
                                var i = x[r];
                                if ((i === L && (i = P(r)), void 0 === i && !t))
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
                        if (null === j(/^%?[^%]*%?$/, e))
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
                                    B(e, Y, function (e, t, n, i) {
                                        r[r.length] = n ? B(i, W, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = K("%" + r + "%", t),
                            s = i.name,
                            a = i.value,
                            o = !1,
                            l = i.alias;
                        l && ((r = l[0]), V(n, F([0, 1], l)));
                        for (var d = 1, _ = !0; d < n.length; d += 1) {
                            var f = n[d],
                                p = H(f, 0, 1),
                                h = H(f, -1);
                            if (('"' === p || "'" === p || "`" === p || '"' === h || "'" === h || "`" === h) && p !== h)
                                throw new u("property names with quotes must have matching quotes");
                            if ((("constructor" !== f && _) || (o = !0), G(x, (s = "%" + (r += "." + f) + "%"))))
                                a = x[s];
                            else if (null != a) {
                                if (!(f in a)) {
                                    if (!t)
                                        throw new c(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (T && d + 1 >= n.length) {
                                    var m = T(a, f);
                                    a = (_ = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : a[f];
                                } else (_ = G(a, f)), (a = a[f]);
                                _ && !o && (x[s] = a);
                            }
                        }
                        return a;
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
                            var s = Object.getOwnPropertyDescriptor(e, t);
                            if (42 !== s.value || !0 !== s.enumerable) return !1;
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
            var s = (t[r] = { exports: {} });
            return e[r](s, s.exports, n), s.exports;
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
                n.d(r, { default: () => v });
                var e,
                    t,
                    i,
                    s = n(5882),
                    a = n.n(s);
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
                    p = function (e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r,
                            i,
                            s = n.call(e),
                            a = [];
                        try {
                            for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; ) a.push(r.value);
                        } catch (e) {
                            i = { error: e };
                        } finally {
                            try {
                                r && !r.done && (n = s.return) && n.call(s);
                            } finally {
                                if (i) throw i.error;
                            }
                        }
                        return a;
                    },
                    h = (function () {
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
                function m(e, t, n) {
                    void 0 === n && (n = []);
                    var r,
                        i,
                        s,
                        a,
                        o = document.createElementNS("http://www.w3.org/2000/svg", e);
                    try {
                        for (var l = f(Object.entries(t)), u = l.next(); !u.done; u = l.next()) {
                            var c = p(u.value, 2),
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
                        for (var h = f(n), m = h.next(); !m.done; m = h.next()) {
                            var E = m.value;
                            !1 !== E && o.appendChild(E);
                        }
                    } catch (e) {
                        s = { error: e };
                    } finally {
                        try {
                            m && !m.done && (a = h.return) && a.call(h);
                        } finally {
                            if (s) throw s.error;
                        }
                    }
                    return o;
                }
                function E(e, t, n) {
                    void 0 === n && (n = []);
                    var r,
                        i,
                        s,
                        a,
                        o = document.createElement(e);
                    try {
                        for (var l = f(Object.entries(t)), u = l.next(); !u.done; u = l.next()) {
                            var c = p(u.value, 2),
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
                        for (var h = f(n), m = h.next(); !m.done; m = h.next()) {
                            var E = m.value;
                            !1 !== E &&
                                ("string" == typeof E ? o.appendChild(document.createTextNode(E)) : o.appendChild(E));
                        }
                    } catch (e) {
                        s = { error: e };
                    } finally {
                        try {
                            m && !m.done && (a = h.return) && a.call(h);
                        } finally {
                            if (s) throw s.error;
                        }
                    }
                    return o;
                }
                function g(e) {
                    return "string" == typeof e ? e : "number" == typeof e ? "".concat(e, "px") : "";
                }
                var A = ["allow-scripts", "allow-same-origin", "allow-popups"],
                    I = ["allow-forms", "allow-modals", "allow-top-navigation-by-user-activation"];
                function T(e, t, n, r) {
                    var i = r.accountId,
                        s = r.accountTypeId,
                        o = r.environment,
                        u = r.environmentId,
                        c = r.fields,
                        d = r.frameAncestors,
                        f = r.frameHeight,
                        p = r.frameWidth,
                        h = r.host,
                        m = r.iframeTitle,
                        E = r.inquiryId,
                        T = r.language,
                        S = r.messageTargetOrigin,
                        y = r.referenceId,
                        v = r.routingCountry,
                        N = r.sandboxAttributes,
                        C = void 0 === N ? I : N,
                        b = r.sessionToken,
                        R = r.styleVariant,
                        O = r.templateId,
                        D = r.templateVersionId,
                        L = r.themeSetId,
                        w = r.widgetPadding,
                        x = !(!O && !D),
                        M = null == O ? void 0 : O.startsWith("itmpl_");
                    if (!x && !E)
                        throw Error(
                            "Either templateId/templateVersionId or inquiryId must be specified to start a flow",
                        );
                    if (x && E)
                        throw Error(
                            "Only one of templateId/templateVersionId or inquiryId should be specified to start a flow",
                        );
                    if (i) {
                        if (y) throw Error("Cannot pass both accountId and referenceId");
                        if (s) throw Error("Cannot pass both accountId and accountTypeId");
                    }
                    var P = l(h),
                        k = a()(
                            {
                                "client-version": "5.3.1",
                                "container-id": t,
                                "flow-type": n,
                                "routing-country": v,
                                "template-id": (M ? null : O) || null,
                                "inquiry-template-id": (M ? O : null) || null,
                                "inquiry-template-version-id": D || null,
                                environment: o,
                                "environment-id": u,
                                "iframe-origin": window.location.origin,
                                "frame-ancestors": null != d ? d : null,
                                "message-target-origin": S || null,
                                "inquiry-id": E || null,
                                language: T,
                                "session-token": b,
                                "reference-id": y,
                                "account-id": i,
                                "account-type-id": s,
                                fields: _(null != c ? c : {}),
                                "style-variant": R || null,
                                "theme-set-id": L,
                                "widget-padding": w,
                            },
                            { addQueryPrefix: !0, skipNulls: !0 },
                        );
                    return (
                        (e.style.maxHeight = g(f)),
                        (e.style.maxWidth = g(p)),
                        e.setAttribute("data-testid", "persona-widget__iframe"),
                        "embedded" === n && e.setAttribute("aria-modal", "true"),
                        (e.title = null != m ? m : "Verify your identity"),
                        (e.className = "persona-widget__iframe"),
                        (e.allow = "camera;microphone;clipboard-write"),
                        e.setAttribute("sandbox", A.concat(C).join(" ")),
                        (e.frameBorder = "0"),
                        (e.src = P + "/widget" + k),
                        (e.onload = function () {}),
                        e
                    );
                }
                var S = function (e) {
                    if ("localhost" === e || /^\d+\.\d+\.\d+\.\d+$/.test(e)) return e;
                    var t = e.split(".");
                    return t.length <= 1 ? e : t.slice(-2).join(".");
                };
                function y(t, n) {
                    var r = n.onLoad,
                        i = n.onReady,
                        s = n.onComplete,
                        a = n.onEvent,
                        o = n.onCancel,
                        u = n.onError,
                        c = n.templateId,
                        d = n.templateVersionId,
                        _ = n.host,
                        f = function (n) {
                            var f,
                                p,
                                h = l(null != _ ? _ : "production");
                            if ("" !== n.origin)
                                try {
                                    if (S(new URL(n.origin).host) !== S(new URL(h).host)) return;
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
                                switch ((null == a || a(n.data.name, n.data.metadata), n.data.name)) {
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
                                        null == s ||
                                            s({
                                                inquiryId: n.data.metadata.inquiryId,
                                                status: n.data.metadata.status,
                                                fields:
                                                    null != (p = n.data.metadata.fields) ? p : n.data.metadata.scopes,
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
                let v = {
                    Client: (function () {
                        function e(e) {
                            var t,
                                n,
                                r,
                                i,
                                s,
                                a,
                                o,
                                l,
                                u,
                                c,
                                d,
                                _ = this;
                            (this._isLoading = !0),
                                (this._isOpen = !1),
                                (this.personaCSS = new h("persona-widget-styles")),
                                (this.globalCSS = new h("persona-global-styles")),
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
                                        s = e.fields;
                                    (_._isOpen = !1),
                                        _.render(),
                                        null == (n = (t = _.options).onComplete) ||
                                            n.call(t, { inquiryId: r, status: i, fields: s });
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
                                        s = t.maximumHeight;
                                    window.matchMedia(
                                        "only screen and (min-width: 600.02px) and (min-height: 600.02px)",
                                    ).matches
                                        ? (n && (_.iframeElement.style.minWidth = n),
                                          r && (_.iframeElement.style.maxWidth = r),
                                          i && (_.iframeElement.style.minHeight = i),
                                          s && (_.iframeElement.style.maxHeight = s))
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
                                    m(
                                        "svg",
                                        {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "114",
                                            height: "114",
                                            class: "persona-widget__loading-spinner",
                                        },
                                        [
                                            m("path", {
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
                                (this.unsubscribeFromEvents = y(this.containerId, {
                                    onLoad: null != (r = this.onLoad) ? r : null,
                                    onReady: null != (i = this.onReady) ? i : null,
                                    onComplete: null != (s = this.onComplete) ? s : null,
                                    onCancel: null != (a = this.onCancel) ? a : null,
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
                                this.iframeElement = T(this.iframeElement, this.containerId, "embedded", this.options);
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
                    setupIframe: T,
                    setupEvents: y,
                };
            })(),
            r.default
        );
    })(),
);
