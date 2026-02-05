"use strict";
var r = n(626800),
    i = n(133491),
    a = n(356681),
    s = n(634587);
function o(e) {
    return e.call.bind(e);
}
var l = "u" > typeof BigInt,
    u = "u" > typeof Symbol,
    c = o(Object.prototype.toString),
    d = o(Number.prototype.valueOf),
    _ = o(String.prototype.valueOf),
    f = o(Boolean.prototype.valueOf);
if (l) var p = o(BigInt.prototype.valueOf);
if (u) var h = o(Symbol.prototype.valueOf);
function m(e, t) {
    if ("object" != typeof e) return !1;
    try {
        return t(e), !0;
    } catch (e) {
        return !1;
    }
}
function g(e) {
    return "[object Map]" === c(e);
}
function E(e) {
    return "[object Set]" === c(e);
}
function A(e) {
    return "[object WeakMap]" === c(e);
}
function I(e) {
    return "[object WeakSet]" === c(e);
}
function T(e) {
    return "[object ArrayBuffer]" === c(e);
}
function y(e) {
    return !("u" < typeof ArrayBuffer) && (T.working ? T(e) : e instanceof ArrayBuffer);
}
function S(e) {
    return "[object DataView]" === c(e);
}
function v(e) {
    return !("u" < typeof DataView) && (S.working ? S(e) : e instanceof DataView);
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
        return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || v(e);
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
    (A.working = "u" > typeof WeakMap && A(new WeakMap())),
    (t.isWeakMap = function (e) {
        return !("u" < typeof WeakMap) && (A.working ? A(e) : e instanceof WeakMap);
    }),
    (I.working = "u" > typeof WeakSet && I(new WeakSet())),
    (t.isWeakSet = function (e) {
        return I(e);
    }),
    (T.working = "u" > typeof ArrayBuffer && T(new ArrayBuffer())),
    (t.isArrayBuffer = y),
    (S.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && S(new DataView(new ArrayBuffer(1), 0, 1))),
    (t.isDataView = v);
var C = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function b(e) {
    return "[object SharedArrayBuffer]" === c(e);
}
function N(e) {
    return void 0 !== C && (void 0 === b.working && (b.working = b(new C())), b.working ? b(e) : e instanceof C);
}
function R(e) {
    return m(e, d);
}
function O(e) {
    return m(e, _);
}
function D(e) {
    return m(e, f);
}
function L(e) {
    return l && m(e, p);
}
function w(e) {
    return u && m(e, h);
}
(t.isSharedArrayBuffer = N),
    (t.isAsyncFunction = function (e) {
        return "[object AsyncFunction]" === c(e);
    }),
    (t.isMapIterator = function (e) {
        return "[object Map Iterator]" === c(e);
    }),
    (t.isSetIterator = function (e) {
        return "[object Set Iterator]" === c(e);
    }),
    (t.isGeneratorObject = function (e) {
        return "[object Generator]" === c(e);
    }),
    (t.isWebAssemblyCompiledModule = function (e) {
        return "[object WebAssembly.Module]" === c(e);
    }),
    (t.isNumberObject = R),
    (t.isStringObject = O),
    (t.isBooleanObject = D),
    (t.isBigIntObject = L),
    (t.isSymbolObject = w),
    (t.isBoxedPrimitive = function (e) {
        return R(e) || O(e) || D(e) || L(e) || w(e);
    }),
    (t.isAnyArrayBuffer = function (e) {
        return "u" > typeof Uint8Array && (y(e) || N(e));
    }),
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + " is not supported in userland");
            },
        });
    });
