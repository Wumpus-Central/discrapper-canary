var i,
    a = SyntaxError,
    o = Function,
    s = TypeError,
    l = function (e) {
        try {
        } catch (e) {}
    },
    u = Object.getOwnPropertyDescriptor;
if (u)
    try {
        u({}, '');
    } catch (e) {
        u = null;
    }
var c = function () {
        throw new s();
    },
    d = u
        ? (function () {
              try {
                  return arguments.callee, c;
              } catch (e) {
                  try {
                      return u(arguments, 'callee').get;
                  } catch (e) {
                      return c;
                  }
              }
          })()
        : c,
    f = r(322499)(),
    p = r(429804)(),
    h =
        Object.getPrototypeOf ||
        (p
            ? function (e) {
                  return e.__proto__;
              }
            : null),
    _ = {},
    m = 'undefined' != typeof Uint8Array && h ? h(Uint8Array) : i,
    g = {
        '%AggregateError%': 'undefined' == typeof AggregateError ? i : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? i : ArrayBuffer,
        '%ArrayIteratorPrototype%': f && h ? h([][Symbol.iterator]()) : i,
        '%AsyncFromSyncIteratorPrototype%': i,
        '%AsyncFunction%': _,
        '%AsyncGenerator%': _,
        '%AsyncGeneratorFunction%': _,
        '%AsyncIteratorPrototype%': _,
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
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': 'undefined' == typeof Float32Array ? i : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? i : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? i : FinalizationRegistry,
        '%Function%': o,
        '%GeneratorFunction%': _,
        '%Int8Array%': 'undefined' == typeof Int8Array ? i : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? i : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? i : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': f && h ? h(h([][Symbol.iterator]())) : i,
        '%JSON%': 'object' == typeof JSON ? JSON : i,
        '%Map%': 'undefined' == typeof Map ? i : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && f && h ? h(new Map()[Symbol.iterator]()) : i,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? i : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? i : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': 'undefined' == typeof Reflect ? i : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? i : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && f && h ? h(new Set()[Symbol.iterator]()) : i,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': f && h ? h(''[Symbol.iterator]()) : i,
        '%Symbol%': f ? Symbol : i,
        '%SyntaxError%': a,
        '%ThrowTypeError%': d,
        '%TypedArray%': m,
        '%TypeError%': s,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? i : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? i : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? i : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': 'undefined' == typeof WeakMap ? i : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? i : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? i : WeakSet
    };
if (h)
    try {
        null.error;
    } catch (e) {
        var E = h(h(e));
        g['%Error.prototype%'] = E;
    }
var v = function e(n) {
        var r;
        if ('%AsyncFunction%' === n) r = l('async function () {}');
        else if ('%GeneratorFunction%' === n) r = l('function* () {}');
        else if ('%AsyncGeneratorFunction%' === n) r = l('async function* () {}');
        else if ('%AsyncGenerator%' === n) {
            var i = e('%AsyncGeneratorFunction%');
            i && (r = i.prototype);
        } else if ('%AsyncIteratorPrototype%' === n) {
            var a = e('%AsyncGenerator%');
            a && h && (r = h(a.prototype));
        }
        return (g[n] = r), r;
    },
    y = {
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
    b = r(390976),
    I = r(643494),
    T = b.call(Function.call, Array.prototype.concat),
    S = b.call(Function.apply, Array.prototype.splice),
    A = b.call(Function.call, String.prototype.replace),
    C = b.call(Function.call, String.prototype.slice),
    N = b.call(Function.call, RegExp.prototype.exec),
    R = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    O = /\\(\\)?/g,
    D = function (e) {
        var n = C(e, 0, 1),
            r = C(e, -1);
        if ('%' === n && '%' !== r) throw new a('invalid intrinsic syntax, expected closing `%`');
        if ('%' === r && '%' !== n) throw new a('invalid intrinsic syntax, expected opening `%`');
        var i = [];
        return (
            A(e, R, function (e, n, r, a) {
                i[i.length] = r ? A(a, O, '$1') : n || e;
            }),
            i
        );
    },
    x = function (e, n) {
        var r,
            i = e;
        if ((I(y, i) && (i = '%' + (r = y[i])[0] + '%'), I(g, i))) {
            var o = g[i];
            if ((o === _ && (o = v(i)), void 0 === o && !n)) throw new s('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: r,
                name: i,
                value: o
            };
        }
        throw new a('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, n) {
    if ('string' != typeof e || 0 === e.length) throw new s('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof n) throw new s('"allowMissing" argument must be a boolean');
    if (null === N(/^%?[^%]*%?$/, e)) throw new a('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var r = D(e),
        i = r.length > 0 ? r[0] : '',
        o = x('%' + i + '%', n),
        l = o.name,
        c = o.value,
        d = !1,
        f = o.alias;
    f && ((i = f[0]), S(r, T([0, 1], f)));
    for (var p = 1, h = !0; p < r.length; p += 1) {
        var _ = r[p],
            m = C(_, 0, 1),
            E = C(_, -1);
        if (('"' === m || "'" === m || '`' === m || '"' === E || "'" === E || '`' === E) && m !== E) throw new a('property names with quotes must have matching quotes');
        if ((('constructor' === _ || !h) && (d = !0), (i += '.' + _), I(g, (l = '%' + i + '%')))) c = g[l];
        else if (null != c) {
            if (!(_ in c)) {
                if (!n) throw new s('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (u && p + 1 >= r.length) {
                var v = u(c, _);
                c = (h = !!v) && 'get' in v && !('originalValue' in v.get) ? v.get : c[_];
            } else (h = I(c, _)), (c = c[_]);
            h && !d && (g[l] = c);
        }
    }
    return c;
};
