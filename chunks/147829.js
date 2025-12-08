!(function (t, n) {
    e.exports = n();
})(self, () =>
    (() => {
        var e = {
                7802: (e, t, n) => {
                    var r = n(5049),
                        i = n(3036),
                        a = n(78);
                    e.exports = n(1909) || r.call(a, i);
                },
                3036: (e) => {
                    e.exports = Function.prototype.apply;
                },
                78: (e) => {
                    e.exports = Function.prototype.call;
                },
                6688: (e, t, n) => {
                    var r = n(5049),
                        i = n(6785),
                        a = n(78),
                        o = n(7802);
                    e.exports = function (e) {
                        if (e.length < 1 || "function" != typeof e[0]) throw new i("a function is required");
                        return o(r, a, e);
                    };
                },
                1909: (e) => {
                    e.exports = "undefined" != typeof Reflect && Reflect && Reflect.apply;
                },
                2774: (e, t, n) => {
                    var r = n(8372),
                        i = n(6688),
                        a = i([r("%String.prototype.indexOf%")]);
                    e.exports = function (e, t) {
                        var n = r(e, !!t);
                        return "function" == typeof n && a(e, ".prototype.") > -1 ? i([n]) : n;
                    };
                },
                7848: (e) => {
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
                    var r,
                        i = n(5846),
                        a = n(5293),
                        o = n(9055),
                        s = n(8888),
                        l = n(7900),
                        c = n(5389),
                        u = n(6785),
                        d = n(4055),
                        f = n(716),
                        p = n(7450),
                        _ = n(3774),
                        m = n(7552),
                        h = n(5874),
                        g = n(9292),
                        E = n(6071),
                        b = Function,
                        y = function (e) {
                            try {
                            } catch (e) {}
                        },
                        O = n(6692),
                        v = n(7848),
                        S = function () {
                            throw new u();
                        },
                        I = O
                            ? (function () {
                                  try {
                                      return S;
                                  } catch (e) {
                                      try {
                                          return O(arguments, "callee").get;
                                      } catch (e) {
                                          return S;
                                      }
                                  }
                              })()
                            : S,
                        T = n(5634)(),
                        A = n(7106),
                        C = n(3766),
                        N = n(6822),
                        P = n(3036),
                        R = n(78),
                        w = {},
                        D = "undefined" != typeof Uint8Array && A ? A(Uint8Array) : r,
                        x = {
                            __proto__: null,
                            "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": T && A ? A([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": w,
                            "%AsyncGenerator%": w,
                            "%AsyncGeneratorFunction%": w,
                            "%AsyncIteratorPrototype%": w,
                            "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                            "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
                            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
                            "%Boolean%": Boolean,
                            "%DataView%": "undefined" == typeof DataView ? r : DataView,
                            "%Date%": Date,
                            "%decodeURI%": decodeURI,
                            "%decodeURIComponent%": decodeURIComponent,
                            "%encodeURI%": encodeURI,
                            "%encodeURIComponent%": encodeURIComponent,
                            "%Error%": a,
                            "%eval%": eval,
                            "%EvalError%": o,
                            "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%":
                                "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": b,
                            "%GeneratorFunction%": w,
                            "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": T && A ? A(A([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "undefined" == typeof Map ? r : Map,
                            "%MapIteratorPrototype%":
                                "undefined" != typeof Map && T && A ? A(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": O,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "undefined" == typeof Promise ? r : Promise,
                            "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                            "%RangeError%": s,
                            "%ReferenceError%": l,
                            "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "undefined" == typeof Set ? r : Set,
                            "%SetIteratorPrototype%":
                                "undefined" != typeof Set && T && A ? A(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": T && A ? A(""[Symbol.iterator]()) : r,
                            "%Symbol%": T ? Symbol : r,
                            "%SyntaxError%": c,
                            "%ThrowTypeError%": I,
                            "%TypedArray%": D,
                            "%TypeError%": u,
                            "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": R,
                            "%Function.prototype.apply%": P,
                            "%Object.defineProperty%": v,
                            "%Object.getPrototypeOf%": C,
                            "%Math.abs%": f,
                            "%Math.floor%": p,
                            "%Math.max%": _,
                            "%Math.min%": m,
                            "%Math.pow%": h,
                            "%Math.round%": g,
                            "%Math.sign%": E,
                            "%Reflect.getPrototypeOf%": N,
                        };
                    if (A)
                        try {
                            null.error;
                        } catch (e) {
                            var L = A(A(e));
                            x["%Error.prototype%"] = L;
                        }
                    var j = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = y("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = y("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = y("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && A && (n = A(i.prototype));
                            }
                            return (x[t] = n), n;
                        },
                        M = {
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
                        k = n(5049),
                        U = n(5215),
                        G = k.call(R, Array.prototype.concat),
                        Z = k.call(P, Array.prototype.splice),
                        B = k.call(R, String.prototype.replace),
                        F = k.call(R, String.prototype.slice),
                        V = k.call(R, RegExp.prototype.exec),
                        H =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        Y = /\\(\\)?/g,
                        W = function (e, t) {
                            var n,
                                r = e;
                            if ((U(M, r) && (r = "%" + (n = M[r])[0] + "%"), U(x, r))) {
                                var i = x[r];
                                if ((i === w && (i = j(r)), void 0 === i && !t))
                                    throw new u(
                                        "intrinsic " + e + " exists, but is not available. Please file an issue!",
                                    );
                                return {
                                    alias: n,
                                    name: r,
                                    value: i,
                                };
                            }
                            throw new c("intrinsic " + e + " does not exist!");
                        };
                    e.exports = function (e, t) {
                        if ("string" != typeof e || 0 === e.length)
                            throw new u("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof t)
                            throw new u('"allowMissing" argument must be a boolean');
                        if (null === V(/^%?[^%]*%?$/, e))
                            throw new c(
                                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
                            );
                        var n = (function (e) {
                                var t = F(e, 0, 1),
                                    n = F(e, -1);
                                if ("%" === t && "%" !== n)
                                    throw new c("invalid intrinsic syntax, expected closing `%`");
                                if ("%" === n && "%" !== t)
                                    throw new c("invalid intrinsic syntax, expected opening `%`");
                                var r = [];
                                return (
                                    B(e, H, function (e, t, n, i) {
                                        r[r.length] = n ? B(i, Y, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = W("%" + r + "%", t),
                            a = i.name,
                            o = i.value,
                            s = !1,
                            l = i.alias;
                        l && ((r = l[0]), Z(n, G([0, 1], l)));
                        for (var d = 1, f = !0; d < n.length; d += 1) {
                            var p = n[d],
                                _ = F(p, 0, 1),
                                m = F(p, -1);
                            if (('"' === _ || "'" === _ || "`" === _ || '"' === m || "'" === m || "`" === m) && _ !== m)
                                throw new c("property names with quotes must have matching quotes");
                            if ((("constructor" !== p && f) || (s = !0), U(x, (a = "%" + (r += "." + p) + "%"))))
                                o = x[a];
                            else if (null != o) {
                                if (!(p in o)) {
                                    if (!t)
                                        throw new u(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (O && d + 1 >= n.length) {
                                    var h = O(o, p);
                                    o = (f = !!h) && "get" in h && !("originalValue" in h.get) ? h.get : o[p];
                                } else (f = U(o, p)), (o = o[p]);
                                f && !s && (x[a] = o);
                            }
                        }
                        return o;
                    };
                },
                8160: (e) => {
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                6692: (e, t, n) => {
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
                    var r = "undefined" != typeof Symbol && Symbol,
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
                    var r,
                        i = n(6688),
                        a = n(8952);
                    try {
                        r = [].__proto__ === Array.prototype;
                    } catch (e) {
                        if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
                    }
                    var o = !!r && a && a(Object.prototype, "__proto__"),
                        s = Object,
                        l = s.getPrototypeOf;
                    e.exports =
                        o && "function" == typeof o.get
                            ? i([o.get])
                            : "function" == typeof l &&
                              function (e) {
                                  return l(null == e ? e : s(e));
                              };
                },
                6332: (e) => {
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                8952: (e, t, n) => {
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
                    e.exports = EvalError;
                },
                5293: (e) => {
                    e.exports = Error;
                },
                8888: (e) => {
                    e.exports = RangeError;
                },
                7900: (e) => {
                    e.exports = ReferenceError;
                },
                5389: (e) => {
                    e.exports = SyntaxError;
                },
                6785: (e) => {
                    e.exports = TypeError;
                },
                4055: (e) => {
                    e.exports = URIError;
                },
                5846: (e) => {
                    e.exports = Object;
                },
                2719: (e) => {
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
                                o = (function (e, t) {
                                    for (var n = [], r = 1, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
                                    return n;
                                })(arguments),
                                s = n(0, i.length - o.length),
                                l = [],
                                c = 0;
                            c < s;
                            c++
                        )
                            l[c] = "$" + c;
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
                                    var t = i.apply(this, r(o, arguments));
                                    return Object(t) === t ? t : this;
                                }
                                return i.apply(e, r(o, arguments));
                            })),
                            i.prototype)
                        ) {
                            var u = function () {};
                            (u.prototype = i.prototype), (a.prototype = new u()), (u.prototype = null);
                        }
                        return a;
                    };
                },
                5049: (e, t, n) => {
                    var r = n(2719);
                    e.exports = Function.prototype.bind || r;
                },
                3766: (e, t, n) => {
                    e.exports = n(5846).getPrototypeOf || null;
                },
                6822: (e) => {
                    e.exports = ("undefined" != typeof Reflect && Reflect.getPrototypeOf) || null;
                },
                7106: (e, t, n) => {
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
                    var r = Function.prototype.call,
                        i = Object.prototype.hasOwnProperty;
                    e.exports = n(5049).call(r, i);
                },
                2709: (e, t, n) => {
                    var r,
                        i,
                        a = 1 / 0,
                        o = "[object Symbol]",
                        s = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        l = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        c = "\uD800-\uDFFF",
                        u = "\\u2700-\\u27bf",
                        d = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        f = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        p =
                            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        _ = "[" + p + "]",
                        m = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
                        h = "\\d+",
                        g = "[" + u + "]",
                        E = "[" + d + "]",
                        b = "[^" + c + p + h + u + d + f + "]",
                        y = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
                        O = "[\uD800-\uDBFF][\uDC00-\uDFFF]",
                        v = "[" + f + "]",
                        S = "(?:" + E + "|" + b + ")",
                        I = "(?:" + v + "|" + b + ")",
                        T = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        A = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        C = "(?:" + m + "|\uD83C[\uDFFB-\uDFFF])?",
                        N = "[\\ufe0e\\ufe0f]?",
                        P = N + C + "(?:\\u200d(?:" + ["[^" + c + "]", y, O].join("|") + ")" + N + C + ")*",
                        R = "(?:" + [g, y, O].join("|") + ")" + P,
                        w = RegExp("['\u2019]", "g"),
                        D = RegExp(m, "g"),
                        x = RegExp(
                            [
                                v + "?" + E + "+" + T + "(?=" + [_, v, "$"].join("|") + ")",
                                I + "+" + A + "(?=" + [_, v + S, "$"].join("|") + ")",
                                v + "?" + S + "+" + T,
                                v + "+" + A,
                                h,
                                R,
                            ].join("|"),
                            "g",
                        ),
                        L = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        j = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                        M = "object" == typeof self && self && self.Object === Object && self,
                        k = j || M || Function("return this")(),
                        U =
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
                        G = Object.prototype.toString,
                        Z = k.Symbol,
                        B = Z ? Z.prototype : void 0,
                        F = B ? B.toString : void 0;
                    function V(e) {
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
                                                  G.call(e) == o)
                                          );
                                      })(e)
                                  )
                                      return F ? F.call(e) : "";
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
                                        return L.test(e);
                                    })((e = V(e)))
                                        ? (function (e) {
                                              return e.match(s) || [];
                                          })(e)
                                        : (function (e) {
                                              return e.match(x) || [];
                                          })(e);
                                })(
                                    (function (e) {
                                        return (e = V(e)) && e.replace(l, U).replace(D, "");
                                    })(e).replace(w, ""),
                                ),
                                r,
                                "",
                            );
                        });
                },
                716: (e) => {
                    e.exports = Math.abs;
                },
                7450: (e) => {
                    e.exports = Math.floor;
                },
                713: (e) => {
                    e.exports =
                        Number.isNaN ||
                        function (e) {
                            return e != e;
                        };
                },
                3774: (e) => {
                    e.exports = Math.max;
                },
                7552: (e) => {
                    e.exports = Math.min;
                },
                5874: (e) => {
                    e.exports = Math.pow;
                },
                9292: (e) => {
                    e.exports = Math.round;
                },
                6071: (e, t, n) => {
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
                        o = r && Map.prototype.forEach,
                        s = "function" == typeof Set && Set.prototype,
                        l =
                            Object.getOwnPropertyDescriptor && s
                                ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
                                : null,
                        c = s && l && "function" == typeof l.get ? l.get : null,
                        u = s && Set.prototype.forEach,
                        d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                        f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                        p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                        _ = Boolean.prototype.valueOf,
                        m = Object.prototype.toString,
                        h = Function.prototype.toString,
                        g = String.prototype.match,
                        E = String.prototype.slice,
                        b = String.prototype.replace,
                        y = String.prototype.toUpperCase,
                        O = String.prototype.toLowerCase,
                        v = RegExp.prototype.test,
                        S = Array.prototype.concat,
                        I = Array.prototype.join,
                        T = Array.prototype.slice,
                        A = Math.floor,
                        C = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                        N = Object.getOwnPropertySymbols,
                        P =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? Symbol.prototype.toString
                                : null,
                        R = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                        w =
                            "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1)
                                ? Symbol.toStringTag
                                : null,
                        D = Object.prototype.propertyIsEnumerable,
                        x =
                            ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
                            ([].__proto__ === Array.prototype
                                ? function (e) {
                                      return e.__proto__;
                                  }
                                : null);
                    function L(e, t) {
                        if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || v.call(/e/, t))
                            return t;
                        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                        if ("number" == typeof e) {
                            var r = e < 0 ? -A(-e) : A(e);
                            if (r !== e) {
                                var i = String(r),
                                    a = E.call(t, i.length + 1);
                                return b.call(i, n, "$&_") + "." + b.call(b.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
                            }
                        }
                        return b.call(t, n, "$&_");
                    }
                    var j = n(2634),
                        M = j.custom,
                        k = Y(M) ? M : null,
                        U = {
                            __proto__: null,
                            double: '"',
                            single: "'",
                        },
                        G = {
                            __proto__: null,
                            double: /(["\\])/g,
                            single: /(['\\])/g,
                        };
                    function Z(e, t, n) {
                        var r = U[n.quoteStyle || t];
                        return r + e + r;
                    }
                    function B(e) {
                        return b.call(String(e), /"/g, "&quot;");
                    }
                    function F(e) {
                        return !w || !("object" == typeof e && (w in e || void 0 !== e[w]));
                    }
                    function V(e) {
                        return "[object Array]" === z(e) && F(e);
                    }
                    function H(e) {
                        return "[object RegExp]" === z(e) && F(e);
                    }
                    function Y(e) {
                        if (R) return e && "object" == typeof e && e instanceof Symbol;
                        if ("symbol" == typeof e) return !0;
                        if (!e || "object" != typeof e || !P) return !1;
                        try {
                            return P.call(e), !0;
                        } catch (e) {}
                        return !1;
                    }
                    e.exports = function e(t, r, i, s) {
                        var l = r || {};
                        if (K(l, "quoteStyle") && !K(U, l.quoteStyle))
                            throw TypeError('option "quoteStyle" must be "single" or "double"');
                        if (
                            K(l, "maxStringLength") &&
                            ("number" == typeof l.maxStringLength
                                ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0
                                : null !== l.maxStringLength)
                        )
                            throw TypeError(
                                'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
                            );
                        var m = !K(l, "customInspect") || l.customInspect;
                        if ("boolean" != typeof m && "symbol" !== m)
                            throw TypeError(
                                "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`",
                            );
                        if (
                            K(l, "indent") &&
                            null !== l.indent &&
                            "\t" !== l.indent &&
                            !(parseInt(l.indent, 10) === l.indent && l.indent > 0)
                        )
                            throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                        if (K(l, "numericSeparator") && "boolean" != typeof l.numericSeparator)
                            throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                        var y = l.numericSeparator;
                        if (void 0 === t) return "undefined";
                        if (null === t) return "null";
                        if ("boolean" == typeof t) return t ? "true" : "false";
                        if ("string" == typeof t) return Q(t, l);
                        if ("number" == typeof t) {
                            if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                            var v = String(t);
                            return y ? L(t, v) : v;
                        }
                        if ("bigint" == typeof t) {
                            var A = String(t) + "n";
                            return y ? L(t, A) : A;
                        }
                        var N = void 0 === l.depth ? 5 : l.depth;
                        if ((void 0 === i && (i = 0), i >= N && N > 0 && "object" == typeof t))
                            return V(t) ? "[Array]" : "[Object]";
                        var M,
                            G = (function (e, t) {
                                var n;
                                if ("\t" === e.indent) n = "\t";
                                else {
                                    if (!("number" == typeof e.indent && e.indent > 0)) return null;
                                    n = I.call(Array(e.indent + 1), " ");
                                }
                                return {
                                    base: n,
                                    prev: I.call(Array(t + 1), n),
                                };
                            })(l, i);
                        if (void 0 === s) s = [];
                        else if (q(s, t) >= 0) return "[Circular]";
                        function W(t, n, r) {
                            if ((n && (s = T.call(s)).push(n), r)) {
                                var a = { depth: l.depth };
                                return K(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, s);
                            }
                            return e(t, l, i + 1, s);
                        }
                        if ("function" == typeof t && !H(t)) {
                            var X = (function (e) {
                                    if (e.name) return e.name;
                                    var t = g.call(h.call(e), /^function\s*([\w$]+)/);
                                    return t ? t[1] : null;
                                })(t),
                                er = en(t, W);
                            return (
                                "[Function" +
                                (X ? ": " + X : " (anonymous)") +
                                "]" +
                                (er.length > 0 ? " { " + I.call(er, ", ") + " }" : "")
                            );
                        }
                        if (Y(t)) {
                            var ei = R ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(t);
                            return "object" != typeof t || R ? ei : J(ei);
                        }
                        if (
                            (M = t) &&
                            "object" == typeof M &&
                            (("undefined" != typeof HTMLElement && M instanceof HTMLElement) ||
                                ("string" == typeof M.nodeName && "function" == typeof M.getAttribute))
                        ) {
                            for (
                                var ea = "<" + O.call(String(t.nodeName)), eo = t.attributes || [], es = 0;
                                es < eo.length;
                                es++
                            )
                                ea += " " + eo[es].name + "=" + Z(B(eo[es].value), "double", l);
                            return (
                                (ea += ">"),
                                t.childNodes && t.childNodes.length && (ea += "..."),
                                ea + "</" + O.call(String(t.nodeName)) + ">"
                            );
                        }
                        if (V(t)) {
                            if (0 === t.length) return "[]";
                            var el = en(t, W);
                            return G &&
                                !(function (e) {
                                    for (var t = 0; t < e.length; t++) if (q(e[t], "\n") >= 0) return !1;
                                    return !0;
                                })(el)
                                ? "[" + et(el, G) + "]"
                                : "[ " + I.call(el, ", ") + " ]";
                        }
                        if (
                            (function (e) {
                                return "[object Error]" === z(e) && F(e);
                            })(t)
                        ) {
                            var ec = en(t, W);
                            return "cause" in Error.prototype || !("cause" in t) || D.call(t, "cause")
                                ? 0 === ec.length
                                    ? "[" + String(t) + "]"
                                    : "{ [" + String(t) + "] " + I.call(ec, ", ") + " }"
                                : "{ [" + String(t) + "] " + I.call(S.call("[cause]: " + W(t.cause), ec), ", ") + " }";
                        }
                        if ("object" == typeof t && m) {
                            if (k && "function" == typeof t[k] && j) return j(t, { depth: N - i });
                            if ("symbol" !== m && "function" == typeof t.inspect) return t.inspect();
                        }
                        if (
                            (function (e) {
                                if (!a || !e || "object" != typeof e) return !1;
                                try {
                                    a.call(e);
                                    try {
                                        c.call(e);
                                    } catch (e) {
                                        return !0;
                                    }
                                    return e instanceof Map;
                                } catch (e) {}
                                return !1;
                            })(t)
                        ) {
                            var eu = [];
                            return (
                                o &&
                                    o.call(t, function (e, n) {
                                        eu.push(W(n, t, !0) + " => " + W(e, t));
                                    }),
                                ee("Map", a.call(t), eu, G)
                            );
                        }
                        if (
                            (function (e) {
                                if (!c || !e || "object" != typeof e) return !1;
                                try {
                                    c.call(e);
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
                            var ed = [];
                            return (
                                u &&
                                    u.call(t, function (e) {
                                        ed.push(W(e, t));
                                    }),
                                ee("Set", c.call(t), ed, G)
                            );
                        }
                        if (
                            (function (e) {
                                if (!d || !e || "object" != typeof e) return !1;
                                try {
                                    d.call(e, d);
                                    try {
                                        f.call(e, f);
                                    } catch (e) {
                                        return !0;
                                    }
                                    return e instanceof WeakMap;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return $("WeakMap");
                        if (
                            (function (e) {
                                if (!f || !e || "object" != typeof e) return !1;
                                try {
                                    f.call(e, f);
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
                            return $("WeakSet");
                        if (
                            (function (e) {
                                if (!p || !e || "object" != typeof e) return !1;
                                try {
                                    return p.call(e), !0;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return $("WeakRef");
                        if (
                            (function (e) {
                                return "[object Number]" === z(e) && F(e);
                            })(t)
                        )
                            return J(W(Number(t)));
                        if (
                            (function (e) {
                                if (!e || "object" != typeof e || !C) return !1;
                                try {
                                    return C.call(e), !0;
                                } catch (e) {}
                                return !1;
                            })(t)
                        )
                            return J(W(C.call(t)));
                        if (
                            (function (e) {
                                return "[object Boolean]" === z(e) && F(e);
                            })(t)
                        )
                            return J(_.call(t));
                        if (
                            (function (e) {
                                return "[object String]" === z(e) && F(e);
                            })(t)
                        )
                            return J(W(String(t)));
                        if ("undefined" != typeof window && t === window) return "{ [object Window] }";
                        if (("undefined" != typeof globalThis && t === globalThis) || (void 0 !== n.g && t === n.g))
                            return "{ [object globalThis] }";
                        if (
                            !(function (e) {
                                return "[object Date]" === z(e) && F(e);
                            })(t) &&
                            !H(t)
                        ) {
                            var ef = en(t, W),
                                ep = x ? x(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                                e_ = t instanceof Object ? "" : "null prototype",
                                em = !ep && w && Object(t) === t && w in t ? E.call(z(t), 8, -1) : e_ ? "Object" : "",
                                eh =
                                    (ep || "function" != typeof t.constructor
                                        ? ""
                                        : t.constructor.name
                                          ? t.constructor.name + " "
                                          : "") +
                                    (em || e_ ? "[" + I.call(S.call([], em || [], e_ || []), ": ") + "] " : "");
                            return 0 === ef.length
                                ? eh + "{}"
                                : G
                                  ? eh + "{" + et(ef, G) + "}"
                                  : eh + "{ " + I.call(ef, ", ") + " }";
                        }
                        return String(t);
                    };
                    var W =
                        Object.prototype.hasOwnProperty ||
                        function (e) {
                            return e in this;
                        };
                    function K(e, t) {
                        return W.call(e, t);
                    }
                    function z(e) {
                        return m.call(e);
                    }
                    function q(e, t) {
                        if (e.indexOf) return e.indexOf(t);
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                        return -1;
                    }
                    function Q(e, t) {
                        if (e.length > t.maxStringLength) {
                            var n = e.length - t.maxStringLength,
                                r = "... " + n + " more character" + (n > 1 ? "s" : "");
                            return Q(E.call(e, 0, t.maxStringLength), t) + r;
                        }
                        var i = G[t.quoteStyle || "single"];
                        return (i.lastIndex = 0), Z(b.call(b.call(e, i, "\\$1"), /[\x00-\x1f]/g, X), "single", t);
                    }
                    function X(e) {
                        var t = e.charCodeAt(0),
                            n = {
                                8: "b",
                                9: "t",
                                10: "n",
                                12: "f",
                                13: "r",
                            }[t];
                        return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + y.call(t.toString(16));
                    }
                    function J(e) {
                        return "Object(" + e + ")";
                    }
                    function $(e) {
                        return e + " { ? }";
                    }
                    function ee(e, t, n, r) {
                        return e + " (" + t + ") {" + (r ? et(n, r) : I.call(n, ", ")) + "}";
                    }
                    function et(e, t) {
                        if (0 === e.length) return "";
                        var n = "\n" + t.prev + t.base;
                        return n + I.call(e, "," + n) + "\n" + t.prev;
                    }
                    function en(e, t) {
                        var n = V(e),
                            r = [];
                        if (n) {
                            r.length = e.length;
                            for (var i = 0; i < e.length; i++) r[i] = K(e, i) ? t(e[i], e) : "";
                        }
                        var a,
                            o = "function" == typeof N ? N(e) : [];
                        if (R) {
                            a = {};
                            for (var s = 0; s < o.length; s++) a["$" + o[s]] = o[s];
                        }
                        for (var l in e)
                            K(e, l) &&
                                ((n && String(Number(l)) === l && l < e.length) ||
                                    (R && a["$" + l] instanceof Symbol) ||
                                    (v.call(/[^\w$]/, l)
                                        ? r.push(t(l, e) + ": " + t(e[l], e))
                                        : r.push(l + ": " + t(e[l], e))));
                        if ("function" == typeof N)
                            for (var c = 0; c < o.length; c++)
                                D.call(e, o[c]) && r.push("[" + t(o[c]) + "]: " + t(e[o[c]], e));
                        return r;
                    }
                },
                9647: (e) => {
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
                    var r = n(6738),
                        i = n(4662),
                        a = n(9647),
                        o = Object.prototype.hasOwnProperty,
                        s = {
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
                        c = Array.prototype.push,
                        u = function (e, t) {
                            c.apply(e, l(t) ? t : [t]);
                        },
                        d = Date.prototype.toISOString,
                        f = a.default,
                        p = {
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
                            format: f,
                            formatter: a.formatters[f],
                            indices: !1,
                            serializeDate: function (e) {
                                return d.call(e);
                            },
                            skipNulls: !1,
                            strictNullHandling: !1,
                        },
                        _ = {},
                        m = function e(t, n, a, o, s, c, d, f, m, h, g, E, b, y, O, v, S, I) {
                            for (var T, A = t, C = I, N = 0, P = !1; void 0 !== (C = C.get(_)) && !P; ) {
                                var R = C.get(t);
                                if (((N += 1), void 0 !== R)) {
                                    if (R === N) throw RangeError("Cyclic object value");
                                    P = !0;
                                }
                                void 0 === C.get(_) && (N = 0);
                            }
                            if (
                                ("function" == typeof h
                                    ? (A = h(n, A))
                                    : A instanceof Date
                                      ? (A = b(A))
                                      : "comma" === a &&
                                        l(A) &&
                                        (A = i.maybeMap(A, function (e) {
                                            return e instanceof Date ? b(e) : e;
                                        })),
                                null === A)
                            ) {
                                if (c) return m && !v ? m(n, p.encoder, S, "key", y) : n;
                                A = "";
                            }
                            if (
                                "string" == typeof (T = A) ||
                                "number" == typeof T ||
                                "boolean" == typeof T ||
                                "symbol" == typeof T ||
                                "bigint" == typeof T ||
                                i.isBuffer(A)
                            )
                                return m
                                    ? [
                                          O(v ? n : m(n, p.encoder, S, "key", y)) +
                                              "=" +
                                              O(m(A, p.encoder, S, "value", y)),
                                      ]
                                    : [O(n) + "=" + O(String(A))];
                            var w,
                                D = [];
                            if (void 0 === A) return D;
                            if ("comma" === a && l(A))
                                v && m && (A = i.maybeMap(A, m)),
                                    (w = [{ value: A.length > 0 ? A.join(",") || null : void 0 }]);
                            else if (l(h)) w = h;
                            else {
                                var x = Object.keys(A);
                                w = g ? x.sort(g) : x;
                            }
                            var L = f ? String(n).replace(/\./g, "%2E") : String(n),
                                j = o && l(A) && 1 === A.length ? L + "[]" : L;
                            if (s && l(A) && 0 === A.length) return j + "[]";
                            for (var M = 0; M < w.length; ++M) {
                                var k = w[M],
                                    U = "object" == typeof k && k && void 0 !== k.value ? k.value : A[k];
                                if (!d || null !== U) {
                                    var G = E && f ? String(k).replace(/\./g, "%2E") : String(k),
                                        Z = l(A)
                                            ? "function" == typeof a
                                                ? a(j, G)
                                                : j
                                            : j + (E ? "." + G : "[" + G + "]");
                                    I.set(t, N);
                                    var B = r();
                                    B.set(_, I),
                                        u(
                                            D,
                                            e(
                                                U,
                                                Z,
                                                a,
                                                o,
                                                s,
                                                c,
                                                d,
                                                f,
                                                "comma" === a && v && l(A) ? null : m,
                                                h,
                                                g,
                                                E,
                                                b,
                                                y,
                                                O,
                                                v,
                                                S,
                                                B,
                                            ),
                                        );
                                }
                            }
                            return D;
                        };
                    e.exports = function (e, t) {
                        var n,
                            i = e,
                            c = (function (e) {
                                if (!e) return p;
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
                                var t = e.charset || p.charset;
                                if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                                    throw TypeError(
                                        "The charset option must be either utf-8, iso-8859-1, or undefined",
                                    );
                                var n = a.default;
                                if (void 0 !== e.format) {
                                    if (!o.call(a.formatters, e.format))
                                        throw TypeError("Unknown format option provided.");
                                    n = e.format;
                                }
                                var r,
                                    i = a.formatters[n],
                                    c = p.filter;
                                if (
                                    (("function" == typeof e.filter || l(e.filter)) && (c = e.filter),
                                    (r =
                                        e.arrayFormat in s
                                            ? e.arrayFormat
                                            : "indices" in e
                                              ? e.indices
                                                  ? "indices"
                                                  : "repeat"
                                              : p.arrayFormat),
                                    "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
                                )
                                    throw TypeError("`commaRoundTrip` must be a boolean, or absent");
                                var u =
                                    void 0 === e.allowDots ? !0 === e.encodeDotInKeys || p.allowDots : !!e.allowDots;
                                return {
                                    addQueryPrefix:
                                        "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                                    allowDots: u,
                                    allowEmptyArrays:
                                        "boolean" == typeof e.allowEmptyArrays
                                            ? !!e.allowEmptyArrays
                                            : p.allowEmptyArrays,
                                    arrayFormat: r,
                                    charset: t,
                                    charsetSentinel:
                                        "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                                    commaRoundTrip: !!e.commaRoundTrip,
                                    delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                                    encode: "boolean" == typeof e.encode ? e.encode : p.encode,
                                    encodeDotInKeys:
                                        "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : p.encodeDotInKeys,
                                    encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
                                    encodeValuesOnly:
                                        "boolean" == typeof e.encodeValuesOnly
                                            ? e.encodeValuesOnly
                                            : p.encodeValuesOnly,
                                    filter: c,
                                    format: n,
                                    formatter: i,
                                    serializeDate:
                                        "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                                    skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                                    sort: "function" == typeof e.sort ? e.sort : null,
                                    strictNullHandling:
                                        "boolean" == typeof e.strictNullHandling
                                            ? e.strictNullHandling
                                            : p.strictNullHandling,
                                };
                            })(t);
                        "function" == typeof c.filter ? (i = (0, c.filter)("", i)) : l(c.filter) && (n = c.filter);
                        var d = [];
                        if ("object" != typeof i || null === i) return "";
                        var f = s[c.arrayFormat],
                            _ = "comma" === f && c.commaRoundTrip;
                        n || (n = Object.keys(i)), c.sort && n.sort(c.sort);
                        for (var h = r(), g = 0; g < n.length; ++g) {
                            var E = n[g],
                                b = i[E];
                            (c.skipNulls && null === b) ||
                                u(
                                    d,
                                    m(
                                        b,
                                        E,
                                        f,
                                        _,
                                        c.allowEmptyArrays,
                                        c.strictNullHandling,
                                        c.skipNulls,
                                        c.encodeDotInKeys,
                                        c.encode ? c.encoder : null,
                                        c.filter,
                                        c.sort,
                                        c.allowDots,
                                        c.serializeDate,
                                        c.format,
                                        c.formatter,
                                        c.encodeValuesOnly,
                                        c.charset,
                                        h,
                                    ),
                                );
                        }
                        var y = d.join(c.delimiter),
                            O = !0 === c.addQueryPrefix ? "?" : "";
                        return (
                            c.charsetSentinel &&
                                ("iso-8859-1" === c.charset ? (O += "utf8=%26%2310003%3B&") : (O += "utf8=%E2%9C%93&")),
                            y.length > 0 ? O + y : ""
                        );
                    };
                },
                4662: (e, t, n) => {
                    var r = n(9647),
                        i = Object.prototype.hasOwnProperty,
                        a = Array.isArray,
                        o = (function () {
                            for (var e = [], t = 0; t < 256; ++t)
                                e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                            return e;
                        })(),
                        s = function (e, t) {
                            for (var n = t && t.plainObjects ? { __proto__: null } : {}, r = 0; r < e.length; ++r)
                                void 0 !== e[r] && (n[r] = e[r]);
                            return n;
                        },
                        l = 1024;
                    e.exports = {
                        arrayToObject: s,
                        assign: function (e, t) {
                            return Object.keys(t).reduce(function (e, n) {
                                return (e[n] = t[n]), e;
                            }, e);
                        },
                        combine: function (e, t) {
                            return [].concat(e, t);
                        },
                        compact: function (e) {
                            for (
                                var t = [
                                        {
                                            obj: { o: e },
                                            prop: "o",
                                        },
                                    ],
                                    n = [],
                                    r = 0;
                                r < t.length;
                                ++r
                            )
                                for (var i = t[r], o = i.obj[i.prop], s = Object.keys(o), l = 0; l < s.length; ++l) {
                                    var c = s[l],
                                        u = o[c];
                                    "object" == typeof u &&
                                        null !== u &&
                                        -1 === n.indexOf(u) &&
                                        (t.push({
                                            obj: o,
                                            prop: c,
                                        }),
                                        n.push(u));
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
                            var s = e;
                            if (
                                ("symbol" == typeof e
                                    ? (s = Symbol.prototype.toString.call(e))
                                    : "string" != typeof e && (s = String(e)),
                                "iso-8859-1" === n)
                            )
                                return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
                                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                                });
                            for (var c = "", u = 0; u < s.length; u += l) {
                                for (var d = s.length >= l ? s.slice(u, u + l) : s, f = [], p = 0; p < d.length; ++p) {
                                    var _ = d.charCodeAt(p);
                                    45 === _ ||
                                    46 === _ ||
                                    95 === _ ||
                                    126 === _ ||
                                    (_ >= 48 && _ <= 57) ||
                                    (_ >= 65 && _ <= 90) ||
                                    (_ >= 97 && _ <= 122) ||
                                    (a === r.RFC1738 && (40 === _ || 41 === _))
                                        ? (f[f.length] = d.charAt(p))
                                        : _ < 128
                                          ? (f[f.length] = o[_])
                                          : _ < 2048
                                            ? (f[f.length] = o[192 | (_ >> 6)] + o[128 | (63 & _)])
                                            : _ < 55296 || _ >= 57344
                                              ? (f[f.length] =
                                                    o[224 | (_ >> 12)] + o[128 | ((_ >> 6) & 63)] + o[128 | (63 & _)])
                                              : ((p += 1),
                                                (_ = 65536 + (((1023 & _) << 10) | (1023 & d.charCodeAt(p)))),
                                                (f[f.length] =
                                                    o[240 | (_ >> 18)] +
                                                    o[128 | ((_ >> 12) & 63)] +
                                                    o[128 | ((_ >> 6) & 63)] +
                                                    o[128 | (63 & _)]));
                                }
                                c += f.join("");
                            }
                            return c;
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
                            var o = t;
                            return (
                                a(t) && !a(n) && (o = s(t, r)),
                                a(t) && a(n)
                                    ? (n.forEach(function (n, a) {
                                          if (i.call(t, a)) {
                                              var o = t[a];
                                              o && "object" == typeof o && n && "object" == typeof n
                                                  ? (t[a] = e(o, n, r))
                                                  : t.push(n);
                                          } else t[a] = n;
                                      }),
                                      t)
                                    : Object.keys(n).reduce(function (t, a) {
                                          var o = n[a];
                                          return i.call(t, a) ? (t[a] = e(t[a], o, r)) : (t[a] = o), t;
                                      }, o)
                            );
                        },
                    };
                },
                6738: (e, t, n) => {
                    var r = n(6785),
                        i = n(5937),
                        a = n(8709),
                        o = n(885),
                        s = n(8977) || o || a;
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
                                    e || (e = s()), e.set(t, n);
                                },
                            };
                        return t;
                    };
                },
                8709: (e, t, n) => {
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
                                            r
                                                ? (r.value = n)
                                                : (e.next = {
                                                      key: t,
                                                      next: e.next,
                                                      value: n,
                                                  });
                                        })(e, t, n);
                                },
                            };
                        return t;
                    };
                },
                885: (e, t, n) => {
                    var r = n(4885),
                        i = n(2774),
                        a = n(5937),
                        o = n(6785),
                        s = r("%Map%", !0),
                        l = i("Map.prototype.get", !0),
                        c = i("Map.prototype.set", !0),
                        u = i("Map.prototype.has", !0),
                        d = i("Map.prototype.delete", !0),
                        f = i("Map.prototype.size", !0);
                    e.exports =
                        !!s &&
                        function () {
                            var e,
                                t = {
                                    assert: function (e) {
                                        if (!t.has(e)) throw new o("Side channel does not contain " + a(e));
                                    },
                                    delete: function (t) {
                                        if (e) {
                                            var n = d(e, t);
                                            return 0 === f(e) && (e = void 0), n;
                                        }
                                        return !1;
                                    },
                                    get: function (t) {
                                        if (e) return l(e, t);
                                    },
                                    has: function (t) {
                                        return !!e && u(e, t);
                                    },
                                    set: function (t, n) {
                                        e || (e = new s()), c(e, t, n);
                                    },
                                };
                            return t;
                        };
                },
                1823: (e) => {
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
                    var r,
                        i = n(5846),
                        a = n(5293),
                        o = n(9055),
                        s = n(8888),
                        l = n(7900),
                        c = n(5389),
                        u = n(6785),
                        d = n(4055),
                        f = n(716),
                        p = n(7450),
                        _ = n(3774),
                        m = n(7552),
                        h = n(5874),
                        g = n(9292),
                        E = n(6071),
                        b = Function,
                        y = function (e) {
                            try {
                            } catch (e) {}
                        },
                        O = n(5875),
                        v = n(1823),
                        S = function () {
                            throw new u();
                        },
                        I = O
                            ? (function () {
                                  try {
                                      return S;
                                  } catch (e) {
                                      try {
                                          return O(arguments, "callee").get;
                                      } catch (e) {
                                          return S;
                                      }
                                  }
                              })()
                            : S,
                        T = n(5639)(),
                        A = n(7106),
                        C = n(3766),
                        N = n(6822),
                        P = n(3036),
                        R = n(78),
                        w = {},
                        D = "undefined" != typeof Uint8Array && A ? A(Uint8Array) : r,
                        x = {
                            __proto__: null,
                            "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": T && A ? A([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": w,
                            "%AsyncGenerator%": w,
                            "%AsyncGeneratorFunction%": w,
                            "%AsyncIteratorPrototype%": w,
                            "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                            "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
                            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
                            "%Boolean%": Boolean,
                            "%DataView%": "undefined" == typeof DataView ? r : DataView,
                            "%Date%": Date,
                            "%decodeURI%": decodeURI,
                            "%decodeURIComponent%": decodeURIComponent,
                            "%encodeURI%": encodeURI,
                            "%encodeURIComponent%": encodeURIComponent,
                            "%Error%": a,
                            "%eval%": eval,
                            "%EvalError%": o,
                            "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%":
                                "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": b,
                            "%GeneratorFunction%": w,
                            "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": T && A ? A(A([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "undefined" == typeof Map ? r : Map,
                            "%MapIteratorPrototype%":
                                "undefined" != typeof Map && T && A ? A(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": O,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "undefined" == typeof Promise ? r : Promise,
                            "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                            "%RangeError%": s,
                            "%ReferenceError%": l,
                            "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "undefined" == typeof Set ? r : Set,
                            "%SetIteratorPrototype%":
                                "undefined" != typeof Set && T && A ? A(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": T && A ? A(""[Symbol.iterator]()) : r,
                            "%Symbol%": T ? Symbol : r,
                            "%SyntaxError%": c,
                            "%ThrowTypeError%": I,
                            "%TypedArray%": D,
                            "%TypeError%": u,
                            "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": R,
                            "%Function.prototype.apply%": P,
                            "%Object.defineProperty%": v,
                            "%Object.getPrototypeOf%": C,
                            "%Math.abs%": f,
                            "%Math.floor%": p,
                            "%Math.max%": _,
                            "%Math.min%": m,
                            "%Math.pow%": h,
                            "%Math.round%": g,
                            "%Math.sign%": E,
                            "%Reflect.getPrototypeOf%": N,
                        };
                    if (A)
                        try {
                            null.error;
                        } catch (e) {
                            var L = A(A(e));
                            x["%Error.prototype%"] = L;
                        }
                    var j = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = y("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = y("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = y("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && A && (n = A(i.prototype));
                            }
                            return (x[t] = n), n;
                        },
                        M = {
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
                        k = n(5049),
                        U = n(5215),
                        G = k.call(R, Array.prototype.concat),
                        Z = k.call(P, Array.prototype.splice),
                        B = k.call(R, String.prototype.replace),
                        F = k.call(R, String.prototype.slice),
                        V = k.call(R, RegExp.prototype.exec),
                        H =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        Y = /\\(\\)?/g,
                        W = function (e, t) {
                            var n,
                                r = e;
                            if ((U(M, r) && (r = "%" + (n = M[r])[0] + "%"), U(x, r))) {
                                var i = x[r];
                                if ((i === w && (i = j(r)), void 0 === i && !t))
                                    throw new u(
                                        "intrinsic " + e + " exists, but is not available. Please file an issue!",
                                    );
                                return {
                                    alias: n,
                                    name: r,
                                    value: i,
                                };
                            }
                            throw new c("intrinsic " + e + " does not exist!");
                        };
                    e.exports = function (e, t) {
                        if ("string" != typeof e || 0 === e.length)
                            throw new u("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof t)
                            throw new u('"allowMissing" argument must be a boolean');
                        if (null === V(/^%?[^%]*%?$/, e))
                            throw new c(
                                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
                            );
                        var n = (function (e) {
                                var t = F(e, 0, 1),
                                    n = F(e, -1);
                                if ("%" === t && "%" !== n)
                                    throw new c("invalid intrinsic syntax, expected closing `%`");
                                if ("%" === n && "%" !== t)
                                    throw new c("invalid intrinsic syntax, expected opening `%`");
                                var r = [];
                                return (
                                    B(e, H, function (e, t, n, i) {
                                        r[r.length] = n ? B(i, Y, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = W("%" + r + "%", t),
                            a = i.name,
                            o = i.value,
                            s = !1,
                            l = i.alias;
                        l && ((r = l[0]), Z(n, G([0, 1], l)));
                        for (var d = 1, f = !0; d < n.length; d += 1) {
                            var p = n[d],
                                _ = F(p, 0, 1),
                                m = F(p, -1);
                            if (('"' === _ || "'" === _ || "`" === _ || '"' === m || "'" === m || "`" === m) && _ !== m)
                                throw new c("property names with quotes must have matching quotes");
                            if ((("constructor" !== p && f) || (s = !0), U(x, (a = "%" + (r += "." + p) + "%"))))
                                o = x[a];
                            else if (null != o) {
                                if (!(p in o)) {
                                    if (!t)
                                        throw new u(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (O && d + 1 >= n.length) {
                                    var h = O(o, p);
                                    o = (f = !!h) && "get" in h && !("originalValue" in h.get) ? h.get : o[p];
                                } else (f = U(o, p)), (o = o[p]);
                                f && !s && (x[a] = o);
                            }
                        }
                        return o;
                    };
                },
                7189: (e) => {
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                5875: (e, t, n) => {
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
                    var r = "undefined" != typeof Symbol && Symbol,
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
                    var r = n(8297),
                        i = n(2774),
                        a = n(5937),
                        o = n(885),
                        s = n(6785),
                        l = r("%WeakMap%", !0),
                        c = i("WeakMap.prototype.get", !0),
                        u = i("WeakMap.prototype.set", !0),
                        d = i("WeakMap.prototype.has", !0),
                        f = i("WeakMap.prototype.delete", !0);
                    e.exports = l
                        ? function () {
                              var e,
                                  t,
                                  n = {
                                      assert: function (e) {
                                          if (!n.has(e)) throw new s("Side channel does not contain " + a(e));
                                      },
                                      delete: function (n) {
                                          if (l && n && ("object" == typeof n || "function" == typeof n)) {
                                              if (e) return f(e, n);
                                          } else if (o && t) return t.delete(n);
                                          return !1;
                                      },
                                      get: function (n) {
                                          return l && n && ("object" == typeof n || "function" == typeof n) && e
                                              ? c(e, n)
                                              : t && t.get(n);
                                      },
                                      has: function (n) {
                                          return l && n && ("object" == typeof n || "function" == typeof n) && e
                                              ? d(e, n)
                                              : !!t && t.has(n);
                                      },
                                      set: function (n, r) {
                                          l && n && ("object" == typeof n || "function" == typeof n)
                                              ? (e || (e = new l()), u(e, n, r))
                                              : o && (t || (t = o()), t.set(n, r));
                                      },
                                  };
                              return n;
                          }
                        : o;
                },
                315: (e) => {
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
                    var r,
                        i = n(5846),
                        a = n(5293),
                        o = n(9055),
                        s = n(8888),
                        l = n(7900),
                        c = n(5389),
                        u = n(6785),
                        d = n(4055),
                        f = n(716),
                        p = n(7450),
                        _ = n(3774),
                        m = n(7552),
                        h = n(5874),
                        g = n(9292),
                        E = n(6071),
                        b = Function,
                        y = function (e) {
                            try {
                            } catch (e) {}
                        },
                        O = n(4415),
                        v = n(315),
                        S = function () {
                            throw new u();
                        },
                        I = O
                            ? (function () {
                                  try {
                                      return S;
                                  } catch (e) {
                                      try {
                                          return O(arguments, "callee").get;
                                      } catch (e) {
                                          return S;
                                      }
                                  }
                              })()
                            : S,
                        T = n(9715)(),
                        A = n(7106),
                        C = n(3766),
                        N = n(6822),
                        P = n(3036),
                        R = n(78),
                        w = {},
                        D = "undefined" != typeof Uint8Array && A ? A(Uint8Array) : r,
                        x = {
                            __proto__: null,
                            "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": T && A ? A([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": w,
                            "%AsyncGenerator%": w,
                            "%AsyncGeneratorFunction%": w,
                            "%AsyncIteratorPrototype%": w,
                            "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                            "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
                            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
                            "%Boolean%": Boolean,
                            "%DataView%": "undefined" == typeof DataView ? r : DataView,
                            "%Date%": Date,
                            "%decodeURI%": decodeURI,
                            "%decodeURIComponent%": decodeURIComponent,
                            "%encodeURI%": encodeURI,
                            "%encodeURIComponent%": encodeURIComponent,
                            "%Error%": a,
                            "%eval%": eval,
                            "%EvalError%": o,
                            "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%":
                                "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": b,
                            "%GeneratorFunction%": w,
                            "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": T && A ? A(A([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "undefined" == typeof Map ? r : Map,
                            "%MapIteratorPrototype%":
                                "undefined" != typeof Map && T && A ? A(new Map()[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": i,
                            "%Object.getOwnPropertyDescriptor%": O,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "undefined" == typeof Promise ? r : Promise,
                            "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                            "%RangeError%": s,
                            "%ReferenceError%": l,
                            "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "undefined" == typeof Set ? r : Set,
                            "%SetIteratorPrototype%":
                                "undefined" != typeof Set && T && A ? A(new Set()[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": T && A ? A(""[Symbol.iterator]()) : r,
                            "%Symbol%": T ? Symbol : r,
                            "%SyntaxError%": c,
                            "%ThrowTypeError%": I,
                            "%TypedArray%": D,
                            "%TypeError%": u,
                            "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": d,
                            "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
                            "%Function.prototype.call%": R,
                            "%Function.prototype.apply%": P,
                            "%Object.defineProperty%": v,
                            "%Object.getPrototypeOf%": C,
                            "%Math.abs%": f,
                            "%Math.floor%": p,
                            "%Math.max%": _,
                            "%Math.min%": m,
                            "%Math.pow%": h,
                            "%Math.round%": g,
                            "%Math.sign%": E,
                            "%Reflect.getPrototypeOf%": N,
                        };
                    if (A)
                        try {
                            null.error;
                        } catch (e) {
                            var L = A(A(e));
                            x["%Error.prototype%"] = L;
                        }
                    var j = function e(t) {
                            var n;
                            if ("%AsyncFunction%" === t) n = y("async function () {}");
                            else if ("%GeneratorFunction%" === t) n = y("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === t) n = y("async function* () {}");
                            else if ("%AsyncGenerator%" === t) {
                                var r = e("%AsyncGeneratorFunction%");
                                r && (n = r.prototype);
                            } else if ("%AsyncIteratorPrototype%" === t) {
                                var i = e("%AsyncGenerator%");
                                i && A && (n = A(i.prototype));
                            }
                            return (x[t] = n), n;
                        },
                        M = {
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
                        k = n(5049),
                        U = n(5215),
                        G = k.call(R, Array.prototype.concat),
                        Z = k.call(P, Array.prototype.splice),
                        B = k.call(R, String.prototype.replace),
                        F = k.call(R, String.prototype.slice),
                        V = k.call(R, RegExp.prototype.exec),
                        H =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        Y = /\\(\\)?/g,
                        W = function (e, t) {
                            var n,
                                r = e;
                            if ((U(M, r) && (r = "%" + (n = M[r])[0] + "%"), U(x, r))) {
                                var i = x[r];
                                if ((i === w && (i = j(r)), void 0 === i && !t))
                                    throw new u(
                                        "intrinsic " + e + " exists, but is not available. Please file an issue!",
                                    );
                                return {
                                    alias: n,
                                    name: r,
                                    value: i,
                                };
                            }
                            throw new c("intrinsic " + e + " does not exist!");
                        };
                    e.exports = function (e, t) {
                        if ("string" != typeof e || 0 === e.length)
                            throw new u("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof t)
                            throw new u('"allowMissing" argument must be a boolean');
                        if (null === V(/^%?[^%]*%?$/, e))
                            throw new c(
                                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
                            );
                        var n = (function (e) {
                                var t = F(e, 0, 1),
                                    n = F(e, -1);
                                if ("%" === t && "%" !== n)
                                    throw new c("invalid intrinsic syntax, expected closing `%`");
                                if ("%" === n && "%" !== t)
                                    throw new c("invalid intrinsic syntax, expected opening `%`");
                                var r = [];
                                return (
                                    B(e, H, function (e, t, n, i) {
                                        r[r.length] = n ? B(i, Y, "$1") : t || e;
                                    }),
                                    r
                                );
                            })(e),
                            r = n.length > 0 ? n[0] : "",
                            i = W("%" + r + "%", t),
                            a = i.name,
                            o = i.value,
                            s = !1,
                            l = i.alias;
                        l && ((r = l[0]), Z(n, G([0, 1], l)));
                        for (var d = 1, f = !0; d < n.length; d += 1) {
                            var p = n[d],
                                _ = F(p, 0, 1),
                                m = F(p, -1);
                            if (('"' === _ || "'" === _ || "`" === _ || '"' === m || "'" === m || "`" === m) && _ !== m)
                                throw new c("property names with quotes must have matching quotes");
                            if ((("constructor" !== p && f) || (s = !0), U(x, (a = "%" + (r += "." + p) + "%"))))
                                o = x[a];
                            else if (null != o) {
                                if (!(p in o)) {
                                    if (!t)
                                        throw new u(
                                            "base intrinsic for " + e + " exists, but the property is not available.",
                                        );
                                    return;
                                }
                                if (O && d + 1 >= n.length) {
                                    var h = O(o, p);
                                    o = (f = !!h) && "get" in h && !("originalValue" in h.get) ? h.get : o[p];
                                } else (f = U(o, p)), (o = o[p]);
                                f && !s && (x[a] = o);
                            }
                        }
                        return o;
                    };
                },
                8153: (e) => {
                    e.exports = Object.getOwnPropertyDescriptor;
                },
                4415: (e, t, n) => {
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
                    var r = "undefined" != typeof Symbol && Symbol,
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
                for (var r in t)
                    n.o(t, r) &&
                        !n.o(e, r) &&
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
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
                n.d(r, { default: () => I });
                var e,
                    t,
                    i,
                    a = n(5882),
                    o = n.n(a);
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
                let s = (function () {
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
                                s.log(
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
                var c = n(2709),
                    u = n.n(c),
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
                function f(e) {
                    return Array.isArray(e)
                        ? e.map(f)
                        : !(function (e) {
                                return null != e && e.constructor === Object;
                            })(e)
                          ? e
                          : Object.keys(e).reduce(function (t, n) {
                                var r;
                                return d(d({}, t), (((r = {})[u()(n)] = f(e[n])), r));
                            }, {});
                }
                var p = function (e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length)
                            return {
                                next: function () {
                                    return (
                                        e && r >= e.length && (e = void 0),
                                        {
                                            value: e && e[r++],
                                            done: !e,
                                        }
                                    );
                                },
                            };
                        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                    },
                    _ = function (e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r,
                            i,
                            a = n.call(e),
                            o = [];
                        try {
                            for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
                        } catch (e) {
                            i = { error: e };
                        } finally {
                            try {
                                r && !r.done && (n = a.return) && n.call(a);
                            } finally {
                                if (i) throw i.error;
                            }
                        }
                        return o;
                    },
                    m = (function () {
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
                                    var t = g("style", { id: this.id }, [document.createTextNode(e)]);
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
                function h(e, t, n) {
                    void 0 === n && (n = []);
                    var r,
                        i,
                        a,
                        o,
                        s = document.createElementNS("http://www.w3.org/2000/svg", e);
                    try {
                        for (var l = p(Object.entries(t)), c = l.next(); !c.done; c = l.next()) {
                            var u = _(c.value, 2),
                                d = u[0],
                                f = u[1];
                            "className" === d && (d = "class"), s.setAttribute(d, f);
                        }
                    } catch (e) {
                        r = { error: e };
                    } finally {
                        try {
                            c && !c.done && (i = l.return) && i.call(l);
                        } finally {
                            if (r) throw r.error;
                        }
                    }
                    try {
                        for (var m = p(n), h = m.next(); !h.done; h = m.next()) {
                            var g = h.value;
                            !1 !== g && s.appendChild(g);
                        }
                    } catch (e) {
                        a = { error: e };
                    } finally {
                        try {
                            h && !h.done && (o = m.return) && o.call(m);
                        } finally {
                            if (a) throw a.error;
                        }
                    }
                    return s;
                }
                function g(e, t, n) {
                    void 0 === n && (n = []);
                    var r,
                        i,
                        a,
                        o,
                        s = document.createElement(e);
                    try {
                        for (var l = p(Object.entries(t)), c = l.next(); !c.done; c = l.next()) {
                            var u = _(c.value, 2),
                                d = u[0],
                                f = u[1];
                            "className" === d && (d = "class"), s.setAttribute(d, f);
                        }
                    } catch (e) {
                        r = { error: e };
                    } finally {
                        try {
                            c && !c.done && (i = l.return) && i.call(l);
                        } finally {
                            if (r) throw r.error;
                        }
                    }
                    try {
                        for (var m = p(n), h = m.next(); !h.done; h = m.next()) {
                            var g = h.value;
                            !1 !== g &&
                                ("string" == typeof g ? s.appendChild(document.createTextNode(g)) : s.appendChild(g));
                        }
                    } catch (e) {
                        a = { error: e };
                    } finally {
                        try {
                            h && !h.done && (o = m.return) && o.call(m);
                        } finally {
                            if (a) throw a.error;
                        }
                    }
                    return s;
                }
                function E(e) {
                    return "string" == typeof e ? e : "number" == typeof e ? "".concat(e, "px") : "";
                }
                var b = ["allow-scripts", "allow-same-origin", "allow-popups"],
                    y = ["allow-forms", "allow-modals", "allow-top-navigation-by-user-activation"];
                function O(e, t, n, r) {
                    var i = r.accountId,
                        a = r.accountTypeId,
                        s = r.environment,
                        c = r.environmentId,
                        u = r.fields,
                        d = r.frameAncestors,
                        p = r.frameHeight,
                        _ = r.frameWidth,
                        m = r.host,
                        h = r.iframeTitle,
                        g = r.inquiryId,
                        O = r.language,
                        v = r.messageTargetOrigin,
                        S = r.referenceId,
                        I = r.routingCountry,
                        T = r.sandboxAttributes,
                        A = void 0 === T ? y : T,
                        C = r.sessionToken,
                        N = r.styleVariant,
                        P = r.templateId,
                        R = r.templateVersionId,
                        w = r.themeSetId,
                        D = r.widgetPadding,
                        x = !(!P && !R),
                        L = null == P ? void 0 : P.startsWith("itmpl_");
                    if (!x && !g)
                        throw Error(
                            "Either templateId/templateVersionId or inquiryId must be specified to start a flow",
                        );
                    if (x && g)
                        throw Error(
                            "Only one of templateId/templateVersionId or inquiryId should be specified to start a flow",
                        );
                    if (i) {
                        if (S) throw Error("Cannot pass both accountId and referenceId");
                        if (a) throw Error("Cannot pass both accountId and accountTypeId");
                    }
                    var j = l(m),
                        M = o()(
                            {
                                "client-version": "5.3.1",
                                "container-id": t,
                                "flow-type": n,
                                "routing-country": I,
                                "template-id": (L ? null : P) || null,
                                "inquiry-template-id": (L ? P : null) || null,
                                "inquiry-template-version-id": R || null,
                                environment: s,
                                "environment-id": c,
                                "iframe-origin": window.location.origin,
                                "frame-ancestors": null != d ? d : null,
                                "message-target-origin": v || null,
                                "inquiry-id": g || null,
                                language: O,
                                "session-token": C,
                                "reference-id": S,
                                "account-id": i,
                                "account-type-id": a,
                                fields: f(null != u ? u : {}),
                                "style-variant": N || null,
                                "theme-set-id": w,
                                "widget-padding": D,
                            },
                            {
                                addQueryPrefix: !0,
                                skipNulls: !0,
                            },
                        );
                    return (
                        (e.style.maxHeight = E(p)),
                        (e.style.maxWidth = E(_)),
                        e.setAttribute("data-testid", "persona-widget__iframe"),
                        "embedded" === n && e.setAttribute("aria-modal", "true"),
                        (e.title = null != h ? h : "Verify your identity"),
                        (e.className = "persona-widget__iframe"),
                        (e.allow = "camera;microphone;clipboard-write"),
                        e.setAttribute("sandbox", b.concat(A).join(" ")),
                        (e.frameBorder = "0"),
                        (e.src = j + "/widget" + M),
                        (e.onload = function () {}),
                        e
                    );
                }
                var v = function (e) {
                    if ("localhost" === e || /^\d+\.\d+\.\d+\.\d+$/.test(e)) return e;
                    var t = e.split(".");
                    return t.length <= 1 ? e : t.slice(-2).join(".");
                };
                function S(t, n) {
                    var r = n.onLoad,
                        i = n.onReady,
                        a = n.onComplete,
                        o = n.onEvent,
                        s = n.onCancel,
                        c = n.onError,
                        u = n.templateId,
                        d = n.templateVersionId,
                        f = n.host,
                        p = function (n) {
                            var p,
                                _,
                                m = l(null != f ? f : "production");
                            if ("" !== n.origin)
                                try {
                                    if (v(new URL(n.origin).host) !== v(new URL(m).host)) return;
                                } catch (e) {
                                    return;
                                }
                            if (
                                !(
                                    (u && u !== n.data.templateId) ||
                                    (d && d !== n.data.templateVersionId) ||
                                    (n.data.containerId && t !== n.data.containerId)
                                )
                            )
                                switch ((null == o || o(n.data.name, n.data.metadata), n.data.name)) {
                                    case e.Load:
                                        null == r || r();
                                        break;
                                    case e.Ready:
                                        null == i ||
                                            i({
                                                preferredDimensions:
                                                    null == (p = n.data.metadata) ? void 0 : p.preferredDimensions,
                                            });
                                        break;
                                    case e.Complete:
                                    case e.Fail:
                                        null == a ||
                                            a({
                                                inquiryId: n.data.metadata.inquiryId,
                                                status: n.data.metadata.status,
                                                fields:
                                                    null != (_ = n.data.metadata.fields) ? _ : n.data.metadata.scopes,
                                            });
                                        break;
                                    case e.Cancel:
                                        null == s ||
                                            s({
                                                inquiryId: n.data.metadata.inquiryId,
                                                sessionToken: n.data.metadata.sessionToken,
                                            });
                                        break;
                                    case e.Error:
                                        null == c || c(n.data.error);
                                }
                        };
                    return (
                        window.addEventListener("message", p),
                        function () {
                            window.removeEventListener("message", p);
                        }
                    );
                }
                let I = {
                    Client: (function () {
                        function e(e) {
                            var t,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                c,
                                u,
                                d,
                                f = this;
                            (this._isLoading = !0),
                                (this._isOpen = !1),
                                (this.personaCSS = new m("persona-widget-styles")),
                                (this.globalCSS = new m("persona-global-styles")),
                                (this.preferredDimensions = null),
                                (this.onLoad = function () {
                                    var e, t;
                                    (f._isLoading = !1), f.render(), null == (t = (e = f.options).onLoad) || t.call(e);
                                }),
                                (this.onReady = function (e) {
                                    var t, n, r;
                                    (f.preferredDimensions =
                                        null != (t = null == e ? void 0 : e.preferredDimensions) ? t : null),
                                        f.handleResize(),
                                        null == (r = (n = f.options).onReady) || r.call(n);
                                }),
                                (this.onComplete = function (e) {
                                    var t,
                                        n,
                                        r = e.inquiryId,
                                        i = e.status,
                                        a = e.fields;
                                    (f._isOpen = !1),
                                        f.render(),
                                        null == (n = (t = f.options).onComplete) ||
                                            n.call(t, {
                                                inquiryId: r,
                                                status: i,
                                                fields: a,
                                            });
                                }),
                                (this.onCancel = function (e) {
                                    var t,
                                        n,
                                        r = e.inquiryId,
                                        i = e.sessionToken;
                                    (f._isOpen = !1),
                                        f.render(),
                                        null == (n = (t = f.options).onCancel) ||
                                            n.call(t, {
                                                inquiryId: r,
                                                sessionToken: i,
                                            });
                                }),
                                (this.handleResize = function () {
                                    var e,
                                        t = null != (e = f.preferredDimensions) ? e : {},
                                        n = t.minimumWidth,
                                        r = t.maximumWidth,
                                        i = t.minimumHeight,
                                        a = t.maximumHeight;
                                    window.matchMedia(
                                        "only screen and (min-width: 600.02px) and (min-height: 600.02px)",
                                    ).matches
                                        ? (n && (f.iframeElement.style.minWidth = n),
                                          r && (f.iframeElement.style.maxWidth = r),
                                          i && (f.iframeElement.style.minHeight = i),
                                          a && (f.iframeElement.style.maxHeight = a))
                                        : ((f.iframeElement.style.minWidth = ""),
                                          (f.iframeElement.style.maxWidth = ""),
                                          (f.iframeElement.style.minHeight = ""),
                                          (f.iframeElement.style.maxHeight = ""));
                                }),
                                (this.options = e),
                                (this.containerParent =
                                    null != (n = null != (t = e.parent) ? t : document.body)
                                        ? n
                                        : document.children[0]),
                                (this.containerElement = g("div", {
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
                                (this.loadingElement = g("div", { class: "persona-widget__centered-frame" }, [
                                    h(
                                        "svg",
                                        {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "114",
                                            height: "114",
                                            class: "persona-widget__loading-spinner",
                                        },
                                        [
                                            h("path", {
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
                                (this.unsubscribeFromEvents = S(this.containerId, {
                                    onLoad: null != (r = this.onLoad) ? r : null,
                                    onReady: null != (i = this.onReady) ? i : null,
                                    onComplete: null != (a = this.onComplete) ? a : null,
                                    onCancel: null != (o = this.onCancel) ? o : null,
                                    onEvent: null != (s = this.options.onEvent) ? s : null,
                                    onError: null != (l = this.options.onError) ? l : null,
                                    templateId: null != (c = this.options.templateId) ? c : null,
                                    templateVersionId: null != (u = this.options.templateVersionId) ? u : null,
                                    host: null != (d = this.options.host) ? d : null,
                                })),
                                window.addEventListener("resize", this.handleResize),
                                this.containerElement.appendChild(this.iframeElement),
                                this.containerParent.appendChild(this.containerElement),
                                this.personaCSS.mount(
                                    "@keyframes persona-widget__fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0;\n  }\n  to {\n    /* persona-widget__overlay opacity = 0.7 */\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n  }\n}\n\n@keyframes persona-widget__genieSlideIn {\n  from {\n    transform: translate(-50%, -40%) scale(0.8);\n  }\n  90% {\n    transform: translate(-50%, -51%) scale(1.01);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n@keyframes persona-widget__slideDown {\n  from {\n    transform: translate(-50%, -55%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n.persona-widget__overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  animation: persona-widget__fadeIn 0.3s;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.persona-widget__overlay .persona-widget__centered-frame {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  left: calc(50% - 60px);\n  top: calc(50% - 60px);\n  z-index: 9999;\n}\n\n.persona-widget__overlay .persona-widget__loading-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.persona-widget__overlay .persona-widget__iframe {\n  animation: persona-widget__genieSlideIn 0.3s, persona-widget__slideDown ease-out 0.3s;\n\n  width: 100%;\n  height: 100%;\n\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 12px 40px 2px rgba(0, 0, 0, 0.4);\n\n  @media only screen and (min-width: 600.02px) and (min-height: 600.02px) {\n    max-width: 400px;\n    max-height: 650px;\n  }\n}\n",
                                );
                            try {
                                this.iframeElement = O(this.iframeElement, this.containerId, "embedded", this.options);
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
                                    : s.log("Cannot render client that has been destroyed", "error");
                            }),
                            (e.prototype.open = function () {
                                var e;
                                null == (e = this.iframeElement.contentWindow) ||
                                    e.postMessage(
                                        {
                                            action: t.Open,
                                            metadata: {},
                                        },
                                        this.baseUrl,
                                    ),
                                    (this._isOpen = !0),
                                    this.render();
                            }),
                            (e.prototype.cancel = function (e) {
                                var n;
                                null == (n = this.iframeElement.contentWindow) ||
                                    n.postMessage(
                                        {
                                            action: t.Exit,
                                            metadata: { force: e },
                                        },
                                        this.baseUrl,
                                    ),
                                    this.render();
                            }),
                            (e.prototype.destroy = function () {
                                var e;
                                null == (e = this.iframeElement.contentWindow) ||
                                    e.postMessage(
                                        {
                                            action: t.Destroy,
                                            metadata: {},
                                        },
                                        this.baseUrl,
                                    ),
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
                    setupIframe: O,
                    setupEvents: S,
                };
            })(),
            r.default
        );
    })(),
);
