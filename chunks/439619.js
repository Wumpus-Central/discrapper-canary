"use strict";
var r,
    i = n(624462),
    a = n(866307),
    s = n(216233),
    o = n(333654),
    l = n(896758),
    u = n(870064),
    c = n(741623),
    d = n(913789),
    _ = n(603763),
    f = n(949893),
    p = n(783277),
    h = n(658471),
    m = n(327709),
    g = n(682587),
    E = n(138478),
    A = Function,
    I = function (e) {
        try {
            return A('"use strict"; return (' + e + ").constructor;")();
        } catch (e) {}
    },
    T = n(267768),
    y = n(969001),
    S = function () {
        throw new c();
    },
    v = T
        ? (function () {
              try {
                  return arguments.callee, S;
              } catch (e) {
                  try {
                      return T(arguments, "callee").get;
                  } catch (e) {
                      return S;
                  }
              }
          })()
        : S,
    C = n(912877)(),
    b = n(428495),
    N = n(755311),
    R = n(521033),
    O = n(343920),
    D = n(357522),
    L = {},
    w = "u" > typeof Uint8Array && b ? b(Uint8Array) : r,
    x = {
        __proto__: null,
        "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
        "%ArrayIteratorPrototype%": C && b ? b([][Symbol.iterator]()) : r,
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
        "%Error%": a,
        "%eval%": eval,
        "%EvalError%": s,
        "%Float16Array%": "u" < typeof Float16Array ? r : Float16Array,
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
        "%IteratorPrototype%": C && b ? b(b([][Symbol.iterator]())) : r,
        "%JSON%": "object" == typeof JSON ? JSON : r,
        "%Map%": "u" < typeof Map ? r : Map,
        "%MapIteratorPrototype%": "u" > typeof Map && C && b ? b(new Map()[Symbol.iterator]()) : r,
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
        "%SetIteratorPrototype%": "u" > typeof Set && C && b ? b(new Set()[Symbol.iterator]()) : r,
        "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": C && b ? b(""[Symbol.iterator]()) : r,
        "%Symbol%": C ? Symbol : r,
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
        "%Object.defineProperty%": y,
        "%Object.getPrototypeOf%": N,
        "%Math.abs%": _,
        "%Math.floor%": f,
        "%Math.max%": p,
        "%Math.min%": h,
        "%Math.pow%": m,
        "%Math.round%": g,
        "%Math.sign%": E,
        "%Reflect.getPrototypeOf%": R,
    };
if (b)
    try {
        null.error;
    } catch (e) {
        var P = b(b(e));
        x["%Error.prototype%"] = P;
    }
var M = function e(t) {
        var n;
        if ("%AsyncFunction%" === t) n = I("async function () {}");
        else if ("%GeneratorFunction%" === t) n = I("function* () {}");
        else if ("%AsyncGeneratorFunction%" === t) n = I("async function* () {}");
        else if ("%AsyncGenerator%" === t) {
            var r = e("%AsyncGeneratorFunction%");
            r && (n = r.prototype);
        } else if ("%AsyncIteratorPrototype%" === t) {
            var i = e("%AsyncGenerator%");
            i && b && (n = b(i.prototype));
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
    U = n(94867),
    G = n(353841),
    V = U.call(D, Array.prototype.concat),
    F = U.call(O, Array.prototype.splice),
    B = U.call(D, String.prototype.replace),
    j = U.call(D, String.prototype.slice),
    H = U.call(D, RegExp.prototype.exec),
    Y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    W = /\\(\\)?/g,
    K = function (e) {
        var t = j(e, 0, 1),
            n = j(e, -1);
        if ("%" === t && "%" !== n) throw new u("invalid intrinsic syntax, expected closing `%`");
        if ("%" === n && "%" !== t) throw new u("invalid intrinsic syntax, expected opening `%`");
        var r = [];
        return (
            B(e, Y, function (e, t, n, i) {
                r[r.length] = n ? B(i, W, "$1") : t || e;
            }),
            r
        );
    },
    z = function (e, t) {
        var n,
            r = e;
        if ((G(k, r) && (r = "%" + (n = k[r])[0] + "%"), G(x, r))) {
            var i = x[r];
            if ((i === L && (i = M(r)), void 0 === i && !t))
                throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return { alias: n, name: r, value: i };
        }
        throw new u("intrinsic " + e + " does not exist!");
    };
e.exports = function (e, t) {
    if ("string" != typeof e || 0 === e.length) throw new c("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof t) throw new c('"allowMissing" argument must be a boolean');
    if (null === H(/^%?[^%]*%?$/, e))
        throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = K(e),
        r = n.length > 0 ? n[0] : "",
        i = z("%" + r + "%", t),
        a = i.name,
        s = i.value,
        o = !1,
        l = i.alias;
    l && ((r = l[0]), F(n, V([0, 1], l)));
    for (var d = 1, _ = !0; d < n.length; d += 1) {
        var f = n[d],
            p = j(f, 0, 1),
            h = j(f, -1);
        if (('"' === p || "'" === p || "`" === p || '"' === h || "'" === h || "`" === h) && p !== h)
            throw new u("property names with quotes must have matching quotes");
        if ((("constructor" !== f && _) || (o = !0), (r += "." + f), G(x, (a = "%" + r + "%")))) s = x[a];
        else if (null != s) {
            if (!(f in s)) {
                if (!t) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
                return;
            }
            if (T && d + 1 >= n.length) {
                var m = T(s, f);
                s = (_ = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : s[f];
            } else (_ = G(s, f)), (s = s[f]);
            _ && !o && (x[a] = s);
        }
    }
    return s;
};
