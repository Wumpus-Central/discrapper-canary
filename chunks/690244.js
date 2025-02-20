var r,
    i = n(401801),
    o = n(104509),
    a = n(333567),
    s = n(284456),
    l = n(429675),
    c = n(815329),
    u = n(102099),
    d = Function,
    f = function (e) {
        try {
        } catch (e) {}
    },
    p = Object.getOwnPropertyDescriptor;
if (p)
    try {
        p({}, '');
    } catch (e) {
        p = null;
    }
var _ = function () {
        throw new c();
    },
    h = p
        ? (function () {
              try {
                  return arguments.callee, _;
              } catch (e) {
                  try {
                      return p(arguments, 'callee').get;
                  } catch (e) {
                      return _;
                  }
              }
          })()
        : _,
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
    b = 'undefined' != typeof Uint8Array && E ? E(Uint8Array) : r,
    y = {
        __proto__: null,
        '%AggregateError%': 'undefined' == typeof AggregateError ? r : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? r : ArrayBuffer,
        '%ArrayIteratorPrototype%': m && E ? E([][Symbol.iterator]()) : r,
        '%AsyncFromSyncIteratorPrototype%': r,
        '%AsyncFunction%': v,
        '%AsyncGenerator%': v,
        '%AsyncGeneratorFunction%': v,
        '%AsyncIteratorPrototype%': v,
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
        '%Error%': i,
        '%eval%': eval,
        '%EvalError%': o,
        '%Float32Array%': 'undefined' == typeof Float32Array ? r : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? r : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? r : FinalizationRegistry,
        '%Function%': d,
        '%GeneratorFunction%': v,
        '%Int8Array%': 'undefined' == typeof Int8Array ? r : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? r : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? r : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': m && E ? E(E([][Symbol.iterator]())) : r,
        '%JSON%': 'object' == typeof JSON ? JSON : r,
        '%Map%': 'undefined' == typeof Map ? r : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && m && E ? E(new Map()[Symbol.iterator]()) : r,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? r : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? r : Proxy,
        '%RangeError%': a,
        '%ReferenceError%': s,
        '%Reflect%': 'undefined' == typeof Reflect ? r : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? r : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && m && E ? E(new Set()[Symbol.iterator]()) : r,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': m && E ? E(''[Symbol.iterator]()) : r,
        '%Symbol%': m ? Symbol : r,
        '%SyntaxError%': l,
        '%ThrowTypeError%': h,
        '%TypedArray%': b,
        '%TypeError%': c,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? r : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? r : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? r : Uint32Array,
        '%URIError%': u,
        '%WeakMap%': 'undefined' == typeof WeakMap ? r : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? r : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? r : WeakSet
    };
if (E)
    try {
        null.error;
    } catch (e) {
        var O = E(E(e));
        y['%Error.prototype%'] = O;
    }
var S = function e(t) {
        var n;
        if ('%AsyncFunction%' === t) n = f('async function () {}');
        else if ('%GeneratorFunction%' === t) n = f('function* () {}');
        else if ('%AsyncGeneratorFunction%' === t) n = f('async function* () {}');
        else if ('%AsyncGenerator%' === t) {
            var r = e('%AsyncGeneratorFunction%');
            r && (n = r.prototype);
        } else if ('%AsyncIteratorPrototype%' === t) {
            var i = e('%AsyncGenerator%');
            i && E && (n = E(i.prototype));
        }
        return (y[t] = n), n;
    },
    I = {
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
    T = n(390976),
    N = n(706165),
    A = T.call(Function.call, Array.prototype.concat),
    C = T.call(Function.apply, Array.prototype.splice),
    R = T.call(Function.call, String.prototype.replace),
    P = T.call(Function.call, String.prototype.slice),
    w = T.call(Function.call, RegExp.prototype.exec),
    D = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    x = /\\(\\)?/g,
    L = function (e) {
        var t = P(e, 0, 1),
            n = P(e, -1);
        if ('%' === t && '%' !== n) throw new l('invalid intrinsic syntax, expected closing `%`');
        if ('%' === n && '%' !== t) throw new l('invalid intrinsic syntax, expected opening `%`');
        var r = [];
        return (
            R(e, D, function (e, t, n, i) {
                r[r.length] = n ? R(i, x, '$1') : t || e;
            }),
            r
        );
    },
    M = function (e, t) {
        var n,
            r = e;
        if ((N(I, r) && (r = '%' + (n = I[r])[0] + '%'), N(y, r))) {
            var i = y[r];
            if ((i === v && (i = S(r)), void 0 === i && !t)) throw new c('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: n,
                name: r,
                value: i
            };
        }
        throw new l('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, t) {
    if ('string' != typeof e || 0 === e.length) throw new c('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof t) throw new c('"allowMissing" argument must be a boolean');
    if (null === w(/^%?[^%]*%?$/, e)) throw new l('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var n = L(e),
        r = n.length > 0 ? n[0] : '',
        i = M('%' + r + '%', t),
        o = i.name,
        a = i.value,
        s = !1,
        u = i.alias;
    u && ((r = u[0]), C(n, A([0, 1], u)));
    for (var d = 1, f = !0; d < n.length; d += 1) {
        var _ = n[d],
            h = P(_, 0, 1),
            m = P(_, -1);
        if (('"' === h || "'" === h || '`' === h || '"' === m || "'" === m || '`' === m) && h !== m) throw new l('property names with quotes must have matching quotes');
        if ((('constructor' !== _ && f) || (s = !0), (r += '.' + _), N(y, (o = '%' + r + '%')))) a = y[o];
        else if (null != a) {
            if (!(_ in a)) {
                if (!t) throw new c('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (p && d + 1 >= n.length) {
                var g = p(a, _);
                a = (f = !!g) && 'get' in g && !('originalValue' in g.get) ? g.get : a[_];
            } else (f = N(a, _)), (a = a[_]);
            f && !s && (y[o] = a);
        }
    }
    return a;
};
