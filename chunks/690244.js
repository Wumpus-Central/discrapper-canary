var i,
    r = n(401801),
    a = n(104509),
    s = n(333567),
    o = n(284456),
    l = n(429675),
    u = n(815329),
    c = n(102099),
    d = Function,
    f = function (e) {
        try {
        } catch (e) {}
    },
    _ = Object.getOwnPropertyDescriptor;
if (_)
    try {
        _({}, '');
    } catch (e) {
        _ = null;
    }
var p = function () {
        throw new u();
    },
    h = _
        ? (function () {
              try {
                  return arguments.callee, p;
              } catch (e) {
                  try {
                      return _(arguments, 'callee').get;
                  } catch (e) {
                      return p;
                  }
              }
          })()
        : p,
    m = n(322499)(),
    g = n(79536)(),
    E =
        Object.getPrototypeOf ||
        (g
            ? function (e) {
                  return e.__proto__;
              }
            : null),
    v = {},
    y = 'undefined' != typeof Uint8Array && E ? E(Uint8Array) : i,
    I = {
        __proto__: null,
        '%AggregateError%': 'undefined' == typeof AggregateError ? i : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? i : ArrayBuffer,
        '%ArrayIteratorPrototype%': m && E ? E([][Symbol.iterator]()) : i,
        '%AsyncFromSyncIteratorPrototype%': i,
        '%AsyncFunction%': v,
        '%AsyncGenerator%': v,
        '%AsyncGeneratorFunction%': v,
        '%AsyncIteratorPrototype%': v,
        '%Atomics%': 'undefined' == typeof Atomics ? i : Atomics,
        '%BigInt%': 'undefined' == typeof BigInt ? i : BigInt,
        '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? i : BigInt64Array,
        '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? i : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': 'undefined' == typeof DataView ? i : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': r,
        '%eval%': eval,
        '%EvalError%': a,
        '%Float32Array%': 'undefined' == typeof Float32Array ? i : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? i : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? i : FinalizationRegistry,
        '%Function%': d,
        '%GeneratorFunction%': v,
        '%Int8Array%': 'undefined' == typeof Int8Array ? i : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? i : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? i : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': m && E ? E(E([][Symbol.iterator]())) : i,
        '%JSON%': 'object' == typeof JSON ? JSON : i,
        '%Map%': 'undefined' == typeof Map ? i : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && m && E ? E(new Map()[Symbol.iterator]()) : i,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? i : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? i : Proxy,
        '%RangeError%': s,
        '%ReferenceError%': o,
        '%Reflect%': 'undefined' == typeof Reflect ? i : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? i : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && m && E ? E(new Set()[Symbol.iterator]()) : i,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': m && E ? E(''[Symbol.iterator]()) : i,
        '%Symbol%': m ? Symbol : i,
        '%SyntaxError%': l,
        '%ThrowTypeError%': h,
        '%TypedArray%': y,
        '%TypeError%': u,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? i : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? i : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? i : Uint32Array,
        '%URIError%': c,
        '%WeakMap%': 'undefined' == typeof WeakMap ? i : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? i : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? i : WeakSet
    };
if (E)
    try {
        null.error;
    } catch (e) {
        var T = E(E(e));
        I['%Error.prototype%'] = T;
    }
var b = function e(t) {
        var n;
        if ('%AsyncFunction%' === t) n = f('async function () {}');
        else if ('%GeneratorFunction%' === t) n = f('function* () {}');
        else if ('%AsyncGeneratorFunction%' === t) n = f('async function* () {}');
        else if ('%AsyncGenerator%' === t) {
            var i = e('%AsyncGeneratorFunction%');
            i && (n = i.prototype);
        } else if ('%AsyncIteratorPrototype%' === t) {
            var r = e('%AsyncGenerator%');
            r && E && (n = E(r.prototype));
        }
        return (I[t] = n), n;
    },
    S = {
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
    A = n(390976),
    N = n(706165),
    C = A.call(Function.call, Array.prototype.concat),
    R = A.call(Function.apply, Array.prototype.splice),
    O = A.call(Function.call, String.prototype.replace),
    D = A.call(Function.call, String.prototype.slice),
    L = A.call(Function.call, RegExp.prototype.exec),
    x = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    w = /\\(\\)?/g,
    P = function (e) {
        var t = D(e, 0, 1),
            n = D(e, -1);
        if ('%' === t && '%' !== n) throw new l('invalid intrinsic syntax, expected closing `%`');
        if ('%' === n && '%' !== t) throw new l('invalid intrinsic syntax, expected opening `%`');
        var i = [];
        return (
            O(e, x, function (e, t, n, r) {
                i[i.length] = n ? O(r, w, '$1') : t || e;
            }),
            i
        );
    },
    M = function (e, t) {
        var n,
            i = e;
        if ((N(S, i) && (i = '%' + (n = S[i])[0] + '%'), N(I, i))) {
            var r = I[i];
            if ((r === v && (r = b(i)), void 0 === r && !t)) throw new u('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: n,
                name: i,
                value: r
            };
        }
        throw new l('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, t) {
    if ('string' != typeof e || 0 === e.length) throw new u('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof t) throw new u('"allowMissing" argument must be a boolean');
    if (null === L(/^%?[^%]*%?$/, e)) throw new l('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var n = P(e),
        i = n.length > 0 ? n[0] : '',
        r = M('%' + i + '%', t),
        a = r.name,
        s = r.value,
        o = !1,
        c = r.alias;
    c && ((i = c[0]), R(n, C([0, 1], c)));
    for (var d = 1, f = !0; d < n.length; d += 1) {
        var p = n[d],
            h = D(p, 0, 1),
            m = D(p, -1);
        if (('"' === h || "'" === h || '`' === h || '"' === m || "'" === m || '`' === m) && h !== m) throw new l('property names with quotes must have matching quotes');
        if ((('constructor' !== p && f) || (o = !0), (i += '.' + p), N(I, (a = '%' + i + '%')))) s = I[a];
        else if (null != s) {
            if (!(p in s)) {
                if (!t) throw new u('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (_ && d + 1 >= n.length) {
                var g = _(s, p);
                s = (f = !!g) && 'get' in g && !('originalValue' in g.get) ? g.get : s[p];
            } else (f = N(s, p)), (s = s[p]);
            f && !o && (I[a] = s);
        }
    }
    return s;
};
