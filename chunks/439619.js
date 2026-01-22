var r,
    i = n(624462),
    a = n(866307),
    s = n(216233),
    o = n(333654),
    l = n(896758),
    c = n(870064),
    u = n(741623),
    d = n(913789),
    f = n(603763),
    p = n(949893),
    _ = n(783277),
    h = n(658471),
    m = n(327709),
    g = n(682587),
    E = n(138478),
    b = Function,
    y = function (e) {
        try {
        } catch (e) {}
    },
    O = n(267768),
    A = n(969001),
    v = function () {
        throw new u();
    },
    S = O
        ? (function () {
              try {
                  return arguments.callee, v;
              } catch (e) {
                  try {
                      return O(arguments, "callee").get;
                  } catch (e) {
                      return v;
                  }
              }
          })()
        : v,
    I = n(912877)(),
    T = n(428495),
    C = n(755311),
    N = n(521033),
    R = n(343920),
    w = n(357522),
    P = {},
    D = "u" > typeof Uint8Array && T ? T(Uint8Array) : r,
    x = {
        __proto__: null,
        "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
        "%ArrayIteratorPrototype%": I && T ? T([][Symbol.iterator]()) : r,
        "%AsyncFromSyncIteratorPrototype%": r,
        "%AsyncFunction%": P,
        "%AsyncGenerator%": P,
        "%AsyncGeneratorFunction%": P,
        "%AsyncIteratorPrototype%": P,
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
        "%Function%": b,
        "%GeneratorFunction%": P,
        "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
        "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
        "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": I && T ? T(T([][Symbol.iterator]())) : r,
        "%JSON%": "object" == typeof JSON ? JSON : r,
        "%Map%": "u" < typeof Map ? r : Map,
        "%MapIteratorPrototype%": "u" > typeof Map && I && T ? T(new Map()[Symbol.iterator]()) : r,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": i,
        "%Object.getOwnPropertyDescriptor%": O,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "u" < typeof Promise ? r : Promise,
        "%Proxy%": "u" < typeof Proxy ? r : Proxy,
        "%RangeError%": o,
        "%ReferenceError%": l,
        "%Reflect%": "u" < typeof Reflect ? r : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "u" < typeof Set ? r : Set,
        "%SetIteratorPrototype%": "u" > typeof Set && I && T ? T(new Set()[Symbol.iterator]()) : r,
        "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": I && T ? T(""[Symbol.iterator]()) : r,
        "%Symbol%": I ? Symbol : r,
        "%SyntaxError%": c,
        "%ThrowTypeError%": S,
        "%TypedArray%": D,
        "%TypeError%": u,
        "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
        "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
        "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
        "%URIError%": d,
        "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
        "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
        "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
        "%Function.prototype.call%": w,
        "%Function.prototype.apply%": R,
        "%Object.defineProperty%": A,
        "%Object.getPrototypeOf%": C,
        "%Math.abs%": f,
        "%Math.floor%": p,
        "%Math.max%": _,
        "%Math.min%": h,
        "%Math.pow%": m,
        "%Math.round%": g,
        "%Math.sign%": E,
        "%Reflect.getPrototypeOf%": N,
    };
if (T)
    try {
        null.error;
    } catch (e) {
        var L = T(T(e));
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
            i && T && (n = T(i.prototype));
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
    k = n(94867),
    U = n(353841),
    G = k.call(w, Array.prototype.concat),
    V = k.call(R, Array.prototype.splice),
    F = k.call(w, String.prototype.replace),
    B = k.call(w, String.prototype.slice),
    H = k.call(w, RegExp.prototype.exec),
    Y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    W = /\\(\\)?/g,
    K = function (e) {
        var t = B(e, 0, 1),
            n = B(e, -1);
        if ("%" === t && "%" !== n) throw new c("invalid intrinsic syntax, expected closing `%`");
        if ("%" === n && "%" !== t) throw new c("invalid intrinsic syntax, expected opening `%`");
        var r = [];
        return (
            F(e, Y, function (e, t, n, i) {
                r[r.length] = n ? F(i, W, "$1") : t || e;
            }),
            r
        );
    },
    z = function (e, t) {
        var n,
            r = e;
        if ((U(M, r) && (r = "%" + (n = M[r])[0] + "%"), U(x, r))) {
            var i = x[r];
            if ((i === P && (i = j(r)), void 0 === i && !t))
                throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: n,
                name: r,
                value: i,
            };
        }
        throw new c("intrinsic " + e + " does not exist!");
    };
e.exports = function (e, t) {
    if ("string" != typeof e || 0 === e.length) throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof t) throw new u('"allowMissing" argument must be a boolean');
    if (null === H(/^%?[^%]*%?$/, e))
        throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = K(e),
        r = n.length > 0 ? n[0] : "",
        i = z("%" + r + "%", t),
        a = i.name,
        s = i.value,
        o = !1,
        l = i.alias;
    l && ((r = l[0]), V(n, G([0, 1], l)));
    for (var d = 1, f = !0; d < n.length; d += 1) {
        var p = n[d],
            _ = B(p, 0, 1),
            h = B(p, -1);
        if (('"' === _ || "'" === _ || "`" === _ || '"' === h || "'" === h || "`" === h) && _ !== h)
            throw new c("property names with quotes must have matching quotes");
        if ((("constructor" !== p && f) || (o = !0), (r += "." + p), U(x, (a = "%" + r + "%")))) s = x[a];
        else if (null != s) {
            if (!(p in s)) {
                if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
                return;
            }
            if (O && d + 1 >= n.length) {
                var m = O(s, p);
                s = (f = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : s[p];
            } else (f = U(s, p)), (s = s[p]);
            f && !o && (x[a] = s);
        }
    }
    return s;
};
