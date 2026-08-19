"use strict";
var n,
    o = r(624462),
    i = r(866307),
    a = r(216233),
    s = r(333654),
    l = r(896758),
    u = r(870064),
    c = r(741623),
    f = r(913789),
    p = r(603763),
    d = r(949893),
    h = r(783277),
    m = r(658471),
    v = r(327709),
    y = r(682587),
    g = r(138478),
    b = Function,
    w = function (e) {
        try {
            return b('"use strict"; return (' + e + ").constructor;")();
        } catch (e) {}
    },
    _ = r(267768),
    S = r(969001),
    E = function () {
        throw new c();
    },
    x = _
        ? (function () {
              try {
                  return arguments.callee, E;
              } catch (e) {
                  try {
                      return _(arguments, "callee").get;
                  } catch (e) {
                      return E;
                  }
              }
          })()
        : E,
    k = r(912877)(),
    C = r(428495),
    T = r(755311),
    M = r(521033),
    P = r(343920),
    A = r(357522),
    O = {},
    I = "u" > typeof Uint8Array && C ? C(Uint8Array) : n,
    D = {
        __proto__: null,
        "%AggregateError%": "u" < typeof AggregateError ? n : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "u" < typeof ArrayBuffer ? n : ArrayBuffer,
        "%ArrayIteratorPrototype%": k && C ? C([][Symbol.iterator]()) : n,
        "%AsyncFromSyncIteratorPrototype%": n,
        "%AsyncFunction%": O,
        "%AsyncGenerator%": O,
        "%AsyncGeneratorFunction%": O,
        "%AsyncIteratorPrototype%": O,
        "%Atomics%": "u" < typeof Atomics ? n : Atomics,
        "%BigInt%": "u" < typeof BigInt ? n : BigInt,
        "%BigInt64Array%": "u" < typeof BigInt64Array ? n : BigInt64Array,
        "%BigUint64Array%": "u" < typeof BigUint64Array ? n : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": "u" < typeof DataView ? n : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": i,
        "%eval%": eval,
        "%EvalError%": a,
        "%Float16Array%": "u" < typeof Float16Array ? n : Float16Array,
        "%Float32Array%": "u" < typeof Float32Array ? n : Float32Array,
        "%Float64Array%": "u" < typeof Float64Array ? n : Float64Array,
        "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? n : FinalizationRegistry,
        "%Function%": b,
        "%GeneratorFunction%": O,
        "%Int8Array%": "u" < typeof Int8Array ? n : Int8Array,
        "%Int16Array%": "u" < typeof Int16Array ? n : Int16Array,
        "%Int32Array%": "u" < typeof Int32Array ? n : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": k && C ? C(C([][Symbol.iterator]())) : n,
        "%JSON%": "object" == typeof JSON ? JSON : n,
        "%Map%": "u" < typeof Map ? n : Map,
        "%MapIteratorPrototype%": "u" > typeof Map && k && C ? C(new Map()[Symbol.iterator]()) : n,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": o,
        "%Object.getOwnPropertyDescriptor%": _,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "u" < typeof Promise ? n : Promise,
        "%Proxy%": "u" < typeof Proxy ? n : Proxy,
        "%RangeError%": s,
        "%ReferenceError%": l,
        "%Reflect%": "u" < typeof Reflect ? n : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "u" < typeof Set ? n : Set,
        "%SetIteratorPrototype%": "u" > typeof Set && k && C ? C(new Set()[Symbol.iterator]()) : n,
        "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? n : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": k && C ? C(""[Symbol.iterator]()) : n,
        "%Symbol%": k ? Symbol : n,
        "%SyntaxError%": u,
        "%ThrowTypeError%": x,
        "%TypedArray%": I,
        "%TypeError%": c,
        "%Uint8Array%": "u" < typeof Uint8Array ? n : Uint8Array,
        "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? n : Uint8ClampedArray,
        "%Uint16Array%": "u" < typeof Uint16Array ? n : Uint16Array,
        "%Uint32Array%": "u" < typeof Uint32Array ? n : Uint32Array,
        "%URIError%": f,
        "%WeakMap%": "u" < typeof WeakMap ? n : WeakMap,
        "%WeakRef%": "u" < typeof WeakRef ? n : WeakRef,
        "%WeakSet%": "u" < typeof WeakSet ? n : WeakSet,
        "%Function.prototype.call%": A,
        "%Function.prototype.apply%": P,
        "%Object.defineProperty%": S,
        "%Object.getPrototypeOf%": T,
        "%Math.abs%": p,
        "%Math.floor%": d,
        "%Math.max%": h,
        "%Math.min%": m,
        "%Math.pow%": v,
        "%Math.round%": y,
        "%Math.sign%": g,
        "%Reflect.getPrototypeOf%": M,
    };
if (C)
    try {
        null.error;
    } catch (e) {
        var L = C(C(e));
        D["%Error.prototype%"] = L;
    }
var R = function e(t) {
        var r;
        if ("%AsyncFunction%" === t) r = w("async function () {}");
        else if ("%GeneratorFunction%" === t) r = w("function* () {}");
        else if ("%AsyncGeneratorFunction%" === t) r = w("async function* () {}");
        else if ("%AsyncGenerator%" === t) {
            var n = e("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
        } else if ("%AsyncIteratorPrototype%" === t) {
            var o = e("%AsyncGenerator%");
            o && C && (r = C(o.prototype));
        }
        return (D[t] = r), r;
    },
    F = {
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
    N = r(94867),
    j = r(353841),
    B = N.call(A, Array.prototype.concat),
    $ = N.call(P, Array.prototype.splice),
    K = N.call(A, String.prototype.replace),
    V = N.call(A, String.prototype.slice),
    U = N.call(A, RegExp.prototype.exec),
    z = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    W = /\\(\\)?/g,
    H = function (e) {
        var t = V(e, 0, 1),
            r = V(e, -1);
        if ("%" === t && "%" !== r) throw new u("invalid intrinsic syntax, expected closing `%`");
        if ("%" === r && "%" !== t) throw new u("invalid intrinsic syntax, expected opening `%`");
        var n = [];
        return (
            K(e, z, function (e, t, r, o) {
                n[n.length] = r ? K(o, W, "$1") : t || e;
            }),
            n
        );
    },
    G = function (e, t) {
        var r,
            n = e;
        if ((j(F, n) && (n = "%" + (r = F[n])[0] + "%"), j(D, n))) {
            var o = D[n];
            if ((o === O && (o = R(n)), void 0 === o && !t))
                throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return { alias: r, name: n, value: o };
        }
        throw new u("intrinsic " + e + " does not exist!");
    };
e.exports = function (e, t) {
    if ("string" != typeof e || 0 === e.length) throw new c("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof t) throw new c('"allowMissing" argument must be a boolean');
    if (null === U(/^%?[^%]*%?$/, e))
        throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var r = H(e),
        n = r.length > 0 ? r[0] : "",
        o = G("%" + n + "%", t),
        i = o.name,
        a = o.value,
        s = !1,
        l = o.alias;
    l && ((n = l[0]), $(r, B([0, 1], l)));
    for (var f = 1, p = !0; f < r.length; f += 1) {
        var d = r[f],
            h = V(d, 0, 1),
            m = V(d, -1);
        if (('"' === h || "'" === h || "`" === h || '"' === m || "'" === m || "`" === m) && h !== m)
            throw new u("property names with quotes must have matching quotes");
        if ((("constructor" !== d && p) || (s = !0), (n += "." + d), j(D, (i = "%" + n + "%")))) a = D[i];
        else if (null != a) {
            if (!(d in a)) {
                if (!t) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
                return;
            }
            if (_ && f + 1 >= r.length) {
                var v = _(a, d);
                a = (p = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : a[d];
            } else (p = j(a, d)), (a = a[d]);
            p && !s && (D[i] = a);
        }
    }
    return a;
};
