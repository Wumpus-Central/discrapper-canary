var r,
    i = n(533937),
    a = n(401801),
    o = n(104509),
    s = n(333567),
    l = n(284456),
    c = n(429675),
    u = n(815329),
    d = n(102099),
    f = n(469855),
    p = n(143500),
    _ = n(950464),
    m = n(376447),
    h = n(802471),
    g = n(253482),
    E = n(982802),
    b = Function,
    y = function (e) {
        try {
        } catch (e) {}
    },
    O = n(566817),
    v = n(461648),
    S = function () {
        throw new u();
    },
    I = O
        ? (function () {
              try {
                  return arguments.callee, S;
              } catch (e) {
                  try {
                      return O(arguments, "callee").get;
                  } catch (e) {
                      return S;
                  }
              }
          })()
        : S,
    T = n(738146)(),
    C = n(143988),
    A = n(764459),
    N = n(138676),
    P = n(365088),
    R = n(947599),
    D = {},
    w = "undefined" != typeof Uint8Array && C ? C(Uint8Array) : r,
    x = {
        __proto__: null,
        "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
        "%ArrayIteratorPrototype%": T && C ? C([][Symbol.iterator]()) : r,
        "%AsyncFromSyncIteratorPrototype%": r,
        "%AsyncFunction%": D,
        "%AsyncGenerator%": D,
        "%AsyncGeneratorFunction%": D,
        "%AsyncIteratorPrototype%": D,
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
        "%Float16Array%": "undefined" == typeof Float16Array ? r : Float16Array,
        "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
        "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
        "%Function%": b,
        "%GeneratorFunction%": D,
        "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
        "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
        "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": T && C ? C(C([][Symbol.iterator]())) : r,
        "%JSON%": "object" == typeof JSON ? JSON : r,
        "%Map%": "undefined" == typeof Map ? r : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && T && C ? C(new Map()[Symbol.iterator]()) : r,
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
        "%SetIteratorPrototype%": "undefined" != typeof Set && T && C ? C(new Set()[Symbol.iterator]()) : r,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": T && C ? C(""[Symbol.iterator]()) : r,
        "%Symbol%": T ? Symbol : r,
        "%SyntaxError%": c,
        "%ThrowTypeError%": I,
        "%TypedArray%": w,
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
        "%Object.getPrototypeOf%": A,
        "%Math.abs%": f,
        "%Math.floor%": p,
        "%Math.max%": _,
        "%Math.min%": m,
        "%Math.pow%": h,
        "%Math.round%": g,
        "%Math.sign%": E,
        "%Reflect.getPrototypeOf%": N,
    };
if (C)
    try {
        null.error;
    } catch (e) {
        var L = C(C(e));
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
            i && C && (n = C(i.prototype));
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
    k = n(390976),
    U = n(706165),
    G = k.call(R, Array.prototype.concat),
    Z = k.call(P, Array.prototype.splice),
    B = k.call(R, String.prototype.replace),
    F = k.call(R, String.prototype.slice),
    V = k.call(R, RegExp.prototype.exec),
    H = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Y = /\\(\\)?/g,
    W = function (e) {
        var t = F(e, 0, 1),
            n = F(e, -1);
        if ("%" === t && "%" !== n) throw new c("invalid intrinsic syntax, expected closing `%`");
        if ("%" === n && "%" !== t) throw new c("invalid intrinsic syntax, expected opening `%`");
        var r = [];
        return (
            B(e, H, function (e, t, n, i) {
                r[r.length] = n ? B(i, Y, "$1") : t || e;
            }),
            r
        );
    },
    K = function (e, t) {
        var n,
            r = e;
        if ((U(M, r) && (r = "%" + (n = M[r])[0] + "%"), U(x, r))) {
            var i = x[r];
            if ((i === D && (i = j(r)), void 0 === i && !t))
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
    if (null === V(/^%?[^%]*%?$/, e))
        throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = W(e),
        r = n.length > 0 ? n[0] : "",
        i = K("%" + r + "%", t),
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
        if ((("constructor" !== p && f) || (s = !0), (r += "." + p), U(x, (a = "%" + r + "%")))) o = x[a];
        else if (null != o) {
            if (!(p in o)) {
                if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
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
