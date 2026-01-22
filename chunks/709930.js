var r = n(626800),
    i = n(133491),
    a = n(356681),
    s = n(634587);

function o(e) {
    return e.call.bind(e);
}
var l = "u" > typeof BigInt,
    c = "u" > typeof Symbol,
    u = o(Object.prototype.toString),
    d = o(Number.prototype.valueOf),
    f = o(String.prototype.valueOf),
    p = o(Boolean.prototype.valueOf);
if (l) var _ = o(BigInt.prototype.valueOf);
if (c) var h = o(Symbol.prototype.valueOf);

function m(e, t) {
    if ("object" != typeof e) return !1;
    try {
        return t(e), !0;
    } catch (e) {
        return !1;
    }
}

function g(e) {
    return "[object Map]" === u(e);
}

function E(e) {
    return "[object Set]" === u(e);
}

function b(e) {
    return "[object WeakMap]" === u(e);
}

function y(e) {
    return "[object WeakSet]" === u(e);
}

function O(e) {
    return "[object ArrayBuffer]" === u(e);
}

function A(e) {
    return !("u" < typeof ArrayBuffer) && (O.working ? O(e) : e instanceof ArrayBuffer);
}

function v(e) {
    return "[object DataView]" === u(e);
}

function S(e) {
    return !("u" < typeof DataView) && (v.working ? v(e) : e instanceof DataView);
}
(t.isArgumentsObject = r),
    (t.isGeneratorFunction = i),
    (t.isTypedArray = s),
    (t.isPromise = function (e) {
        return (
            ("u" > typeof Promise && e instanceof Promise) ||
            (null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch)
        );
    }),
    (t.isArrayBufferView = function (e) {
        return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || S(e);
    }),
    (t.isUint8Array = function (e) {
        return "Uint8Array" === a(e);
    }),
    (t.isUint8ClampedArray = function (e) {
        return "Uint8ClampedArray" === a(e);
    }),
    (t.isUint16Array = function (e) {
        return "Uint16Array" === a(e);
    }),
    (t.isUint32Array = function (e) {
        return "Uint32Array" === a(e);
    }),
    (t.isInt8Array = function (e) {
        return "Int8Array" === a(e);
    }),
    (t.isInt16Array = function (e) {
        return "Int16Array" === a(e);
    }),
    (t.isInt32Array = function (e) {
        return "Int32Array" === a(e);
    }),
    (t.isFloat32Array = function (e) {
        return "Float32Array" === a(e);
    }),
    (t.isFloat64Array = function (e) {
        return "Float64Array" === a(e);
    }),
    (t.isBigInt64Array = function (e) {
        return "BigInt64Array" === a(e);
    }),
    (t.isBigUint64Array = function (e) {
        return "BigUint64Array" === a(e);
    }),
    (g.working = "u" > typeof Map && g(new Map())),
    (t.isMap = function (e) {
        return !("u" < typeof Map) && (g.working ? g(e) : e instanceof Map);
    }),
    (E.working = "u" > typeof Set && E(new Set())),
    (t.isSet = function (e) {
        return !("u" < typeof Set) && (E.working ? E(e) : e instanceof Set);
    }),
    (b.working = "u" > typeof WeakMap && b(new WeakMap())),
    (t.isWeakMap = function (e) {
        return !("u" < typeof WeakMap) && (b.working ? b(e) : e instanceof WeakMap);
    }),
    (y.working = "u" > typeof WeakSet && y(new WeakSet())),
    (t.isWeakSet = function (e) {
        return y(e);
    }),
    (O.working = "u" > typeof ArrayBuffer && O(new ArrayBuffer())),
    (t.isArrayBuffer = A),
    (v.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && v(new DataView(new ArrayBuffer(1), 0, 1))),
    (t.isDataView = S);
var I = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

function T(e) {
    return "[object SharedArrayBuffer]" === u(e);
}

function C(e) {
    return void 0 !== I && (void 0 === T.working && (T.working = T(new I())), T.working ? T(e) : e instanceof I);
}

function N(e) {
    return m(e, d);
}

function R(e) {
    return m(e, f);
}

function w(e) {
    return m(e, p);
}

function P(e) {
    return l && m(e, _);
}

function D(e) {
    return c && m(e, h);
}
(t.isSharedArrayBuffer = C),
    (t.isAsyncFunction = function (e) {
        return "[object AsyncFunction]" === u(e);
    }),
    (t.isMapIterator = function (e) {
        return "[object Map Iterator]" === u(e);
    }),
    (t.isSetIterator = function (e) {
        return "[object Set Iterator]" === u(e);
    }),
    (t.isGeneratorObject = function (e) {
        return "[object Generator]" === u(e);
    }),
    (t.isWebAssemblyCompiledModule = function (e) {
        return "[object WebAssembly.Module]" === u(e);
    }),
    (t.isNumberObject = N),
    (t.isStringObject = R),
    (t.isBooleanObject = w),
    (t.isBigIntObject = P),
    (t.isSymbolObject = D),
    (t.isBoxedPrimitive = function (e) {
        return N(e) || R(e) || w(e) || P(e) || D(e);
    }),
    (t.isAnyArrayBuffer = function (e) {
        return "u" > typeof Uint8Array && (A(e) || C(e));
    }),
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + " is not supported in userland");
            },
        });
    });
