"use strict";
var i = n(626800),
    r = n(133491),
    s = n(356681),
    a = n(634587);
function o(e) {
    return e.call.bind(e);
}
var l = "u" > typeof BigInt,
    u = "u" > typeof Symbol,
    c = o(Object.prototype.toString),
    d = o(Number.prototype.valueOf),
    _ = o(String.prototype.valueOf),
    h = o(Boolean.prototype.valueOf);
if (l) var f = o(BigInt.prototype.valueOf);
if (u) var p = o(Symbol.prototype.valueOf);
function E(e, t) {
    if ("object" != typeof e) return !1;
    try {
        return t(e), !0;
    } catch (e) {
        return !1;
    }
}
function m(e) {
    return "[object Map]" === c(e);
}
function g(e) {
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
function S(e) {
    return !("u" < typeof ArrayBuffer) && (T.working ? T(e) : e instanceof ArrayBuffer);
}
function y(e) {
    return "[object DataView]" === c(e);
}
function C(e) {
    return !("u" < typeof DataView) && (y.working ? y(e) : e instanceof DataView);
}
(t.isArgumentsObject = i),
    (t.isGeneratorFunction = r),
    (t.isTypedArray = a),
    (t.isPromise = function (e) {
        return (
            ("u" > typeof Promise && e instanceof Promise) ||
            (null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch)
        );
    }),
    (t.isArrayBufferView = function (e) {
        return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || C(e);
    }),
    (t.isUint8Array = function (e) {
        return "Uint8Array" === s(e);
    }),
    (t.isUint8ClampedArray = function (e) {
        return "Uint8ClampedArray" === s(e);
    }),
    (t.isUint16Array = function (e) {
        return "Uint16Array" === s(e);
    }),
    (t.isUint32Array = function (e) {
        return "Uint32Array" === s(e);
    }),
    (t.isInt8Array = function (e) {
        return "Int8Array" === s(e);
    }),
    (t.isInt16Array = function (e) {
        return "Int16Array" === s(e);
    }),
    (t.isInt32Array = function (e) {
        return "Int32Array" === s(e);
    }),
    (t.isFloat32Array = function (e) {
        return "Float32Array" === s(e);
    }),
    (t.isFloat64Array = function (e) {
        return "Float64Array" === s(e);
    }),
    (t.isBigInt64Array = function (e) {
        return "BigInt64Array" === s(e);
    }),
    (t.isBigUint64Array = function (e) {
        return "BigUint64Array" === s(e);
    }),
    (m.working = "u" > typeof Map && m(new Map())),
    (t.isMap = function (e) {
        return !("u" < typeof Map) && (m.working ? m(e) : e instanceof Map);
    }),
    (g.working = "u" > typeof Set && g(new Set())),
    (t.isSet = function (e) {
        return !("u" < typeof Set) && (g.working ? g(e) : e instanceof Set);
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
    (t.isArrayBuffer = S),
    (y.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && y(new DataView(new ArrayBuffer(1), 0, 1))),
    (t.isDataView = C);
var N = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function v(e) {
    return "[object SharedArrayBuffer]" === c(e);
}
function R(e) {
    return void 0 !== N && (void 0 === v.working && (v.working = v(new N())), v.working ? v(e) : e instanceof N);
}
function O(e) {
    return E(e, d);
}
function b(e) {
    return E(e, _);
}
function D(e) {
    return E(e, h);
}
function L(e) {
    return l && E(e, f);
}
function w(e) {
    return u && E(e, p);
}
(t.isSharedArrayBuffer = R),
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
    (t.isNumberObject = O),
    (t.isStringObject = b),
    (t.isBooleanObject = D),
    (t.isBigIntObject = L),
    (t.isSymbolObject = w),
    (t.isBoxedPrimitive = function (e) {
        return O(e) || b(e) || D(e) || L(e) || w(e);
    }),
    (t.isAnyArrayBuffer = function (e) {
        return "u" > typeof Uint8Array && (S(e) || R(e));
    }),
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + " is not supported in userland");
            },
        });
    });
