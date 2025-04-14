var r,
    i = n(533937),
    o = n(401801),
    a = n(104509),
    s = n(333567),
    l = n(284456),
    c = n(429675),
    u = n(815329),
    d = n(102099),
    f = n(469855),
    _ = n(143500),
    p = n(950464),
    h = n(376447),
    m = n(802471),
    g = n(253482),
    E = n(982802),
    b = Function,
    y = function (e) {
        try {
        } catch (e) {}
    },
    v = n(566817),
    O = n(461648),
    I = function () {
        throw new u();
    },
    S = v
        ? (function () {
              try {
                  return arguments.callee, I;
              } catch (e) {
                  try {
                      return v(arguments, 'callee').get;
                  } catch (e) {
                      return I;
                  }
              }
          })()
        : I,
    T = n(738146)(),
    N = n(143988),
    A = n(764459),
    C = n(138676),
    R = n(365088),
    P = n(947599),
    w = {},
    D = 'undefined' != typeof Uint8Array && N ? N(Uint8Array) : r,
    L = {
        __proto__: null,
        '%AggregateError%': 'undefined' == typeof AggregateError ? r : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? r : ArrayBuffer,
        '%ArrayIteratorPrototype%': T && N ? N([][Symbol.iterator]()) : r,
        '%AsyncFromSyncIteratorPrototype%': r,
        '%AsyncFunction%': w,
        '%AsyncGenerator%': w,
        '%AsyncGeneratorFunction%': w,
        '%AsyncIteratorPrototype%': w,
        '%Atomics%': 'undefined' == typeof Atomics ? r : Atomics,
        '%BigInt%': 'undefined' == typeof BigInt ? r : BigInt,
        '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? r : BigInt64Array,
        '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? r : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': 'undefined' == typeof DataView ? r : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': o,
        '%eval%': eval,
        '%EvalError%': a,
        '%Float16Array%': 'undefined' == typeof Float16Array ? r : Float16Array,
        '%Float32Array%': 'undefined' == typeof Float32Array ? r : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? r : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? r : FinalizationRegistry,
        '%Function%': b,
        '%GeneratorFunction%': w,
        '%Int8Array%': 'undefined' == typeof Int8Array ? r : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? r : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? r : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': T && N ? N(N([][Symbol.iterator]())) : r,
        '%JSON%': 'object' == typeof JSON ? JSON : r,
        '%Map%': 'undefined' == typeof Map ? r : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && T && N ? N(new Map()[Symbol.iterator]()) : r,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': i,
        '%Object.getOwnPropertyDescriptor%': v,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? r : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? r : Proxy,
        '%RangeError%': s,
        '%ReferenceError%': l,
        '%Reflect%': 'undefined' == typeof Reflect ? r : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? r : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && T && N ? N(new Set()[Symbol.iterator]()) : r,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': T && N ? N(''[Symbol.iterator]()) : r,
        '%Symbol%': T ? Symbol : r,
        '%SyntaxError%': c,
        '%ThrowTypeError%': S,
        '%TypedArray%': D,
        '%TypeError%': u,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? r : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? r : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? r : Uint32Array,
        '%URIError%': d,
        '%WeakMap%': 'undefined' == typeof WeakMap ? r : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? r : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? r : WeakSet,
        '%Function.prototype.call%': P,
        '%Function.prototype.apply%': R,
        '%Object.defineProperty%': O,
        '%Object.getPrototypeOf%': A,
        '%Math.abs%': f,
        '%Math.floor%': _,
        '%Math.max%': p,
        '%Math.min%': h,
        '%Math.pow%': m,
        '%Math.round%': g,
        '%Math.sign%': E,
        '%Reflect.getPrototypeOf%': C
    };
if (N)
    try {
        null.error;
    } catch (e) {
        var x = N(N(e));
        L['%Error.prototype%'] = x;
    }
var M = function e(t) {
        var n;
        if ('%AsyncFunction%' === t) n = y('async function () {}');
        else if ('%GeneratorFunction%' === t) n = y('function* () {}');
        else if ('%AsyncGeneratorFunction%' === t) n = y('async function* () {}');
        else if ('%AsyncGenerator%' === t) {
            var r = e('%AsyncGeneratorFunction%');
            r && (n = r.prototype);
        } else if ('%AsyncIteratorPrototype%' === t) {
            var i = e('%AsyncGenerator%');
            i && N && (n = N(i.prototype));
        }
        return (L[t] = n), n;
    },
    k = {
        __proto__: null,
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype']
    },
    j = n(390976),
    U = n(706165),
    G = j.call(P, Array.prototype.concat),
    B = j.call(R, Array.prototype.splice),
    V = j.call(P, String.prototype.replace),
    F = j.call(P, String.prototype.slice),
    Z = j.call(P, RegExp.prototype.exec),
    H = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    W = /\\(\\)?/g,
    Y = function (e) {
        var t = F(e, 0, 1),
            n = F(e, -1);
        if ('%' === t && '%' !== n) throw new c('invalid intrinsic syntax, expected closing `%`');
        if ('%' === n && '%' !== t) throw new c('invalid intrinsic syntax, expected opening `%`');
        var r = [];
        return (
            V(e, H, function (e, t, n, i) {
                r[r.length] = n ? V(i, W, '$1') : t || e;
            }),
            r
        );
    },
    K = function (e, t) {
        var n,
            r = e;
        if ((U(k, r) && (r = '%' + (n = k[r])[0] + '%'), U(L, r))) {
            var i = L[r];
            if ((i === w && (i = M(r)), void 0 === i && !t)) throw new u('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: n,
                name: r,
                value: i
            };
        }
        throw new c('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, t) {
    if ('string' != typeof e || 0 === e.length) throw new u('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof t) throw new u('"allowMissing" argument must be a boolean');
    if (null === Z(/^%?[^%]*%?$/, e)) throw new c('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var n = Y(e),
        r = n.length > 0 ? n[0] : '',
        i = K('%' + r + '%', t),
        o = i.name,
        a = i.value,
        s = !1,
        l = i.alias;
    l && ((r = l[0]), B(n, G([0, 1], l)));
    for (var d = 1, f = !0; d < n.length; d += 1) {
        var _ = n[d],
            p = F(_, 0, 1),
            h = F(_, -1);
        if (('"' === p || "'" === p || '`' === p || '"' === h || "'" === h || '`' === h) && p !== h) throw new c('property names with quotes must have matching quotes');
        if ((('constructor' !== _ && f) || (s = !0), (r += '.' + _), U(L, (o = '%' + r + '%')))) a = L[o];
        else if (null != a) {
            if (!(_ in a)) {
                if (!t) throw new u('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (v && d + 1 >= n.length) {
                var m = v(a, _);
                a = (f = !!m) && 'get' in m && !('originalValue' in m.get) ? m.get : a[_];
            } else (f = U(a, _)), (a = a[_]);
            f && !s && (L[o] = a);
        }
    }
    return a;
};
