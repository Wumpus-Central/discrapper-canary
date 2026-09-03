var n = r(626800),
    i = r(133491),
    o = r(356681),
    a = r(634587);
function s(e) {
    return e.call.bind(e);
}
var l = "u" > typeof BigInt,
    u = "u" > typeof Symbol,
    c = s(Object.prototype.toString),
    f = s(Number.prototype.valueOf),
    d = s(String.prototype.valueOf),
    p = s(Boolean.prototype.valueOf);
if (l) var h = s(BigInt.prototype.valueOf);
if (u) var m = s(Symbol.prototype.valueOf);
function v(e, t) {
    if ("object" != typeof e) return !1;
    try {
        return t(e), !0;
    } catch (e) {
        return !1;
    }
}
function y(e) {
    return "[object Map]" === c(e);
}
function g(e) {
    return "[object Set]" === c(e);
}
function b(e) {
    return "[object WeakMap]" === c(e);
}
function w(e) {
    return "[object WeakSet]" === c(e);
}
function _(e) {
    return "[object ArrayBuffer]" === c(e);
}
function S(e) {
    return !("u" < typeof ArrayBuffer) && (_.working ? _(e) : e instanceof ArrayBuffer);
}
function x(e) {
    return "[object DataView]" === c(e);
}
function E(e) {
    return !("u" < typeof DataView) && (x.working ? x(e) : e instanceof DataView);
}
(t.isArgumentsObject = n),
    (t.isGeneratorFunction = i),
    (t.isTypedArray = a),
    (t.isPromise = function (e) {
        return (
            ("u" > typeof Promise && e instanceof Promise) ||
            (null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch)
        );
    }),
    (t.isArrayBufferView = function (e) {
        return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || E(e);
    }),
    (t.isUint8Array = function (e) {
        return "Uint8Array" === o(e);
    }),
    (t.isUint8ClampedArray = function (e) {
        return "Uint8ClampedArray" === o(e);
    }),
    (t.isUint16Array = function (e) {
        return "Uint16Array" === o(e);
    }),
    (t.isUint32Array = function (e) {
        return "Uint32Array" === o(e);
    }),
    (t.isInt8Array = function (e) {
        return "Int8Array" === o(e);
    }),
    (t.isInt16Array = function (e) {
        return "Int16Array" === o(e);
    }),
    (t.isInt32Array = function (e) {
        return "Int32Array" === o(e);
    }),
    (t.isFloat32Array = function (e) {
        return "Float32Array" === o(e);
    }),
    (t.isFloat64Array = function (e) {
        return "Float64Array" === o(e);
    }),
    (t.isBigInt64Array = function (e) {
        return "BigInt64Array" === o(e);
    }),
    (t.isBigUint64Array = function (e) {
        return "BigUint64Array" === o(e);
    }),
    (y.working = "u" > typeof Map && y(new Map())),
    (t.isMap = function (e) {
        return !("u" < typeof Map) && (y.working ? y(e) : e instanceof Map);
    }),
    (g.working = "u" > typeof Set && g(new Set())),
    (t.isSet = function (e) {
        return !("u" < typeof Set) && (g.working ? g(e) : e instanceof Set);
    }),
    (b.working = "u" > typeof WeakMap && b(new WeakMap())),
    (t.isWeakMap = function (e) {
        return !("u" < typeof WeakMap) && (b.working ? b(e) : e instanceof WeakMap);
    }),
    (w.working = "u" > typeof WeakSet && w(new WeakSet())),
    (t.isWeakSet = function (e) {
        return w(e);
    }),
    (_.working = "u" > typeof ArrayBuffer && _(new ArrayBuffer())),
    (t.isArrayBuffer = S),
    (x.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && x(new DataView(new ArrayBuffer(1), 0, 1))),
    (t.isDataView = E);
var k = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function C(e) {
    return "[object SharedArrayBuffer]" === c(e);
}
function T(e) {
    return void 0 !== k && (void 0 === C.working && (C.working = C(new k())), C.working ? C(e) : e instanceof k);
}
function M(e) {
    return v(e, f);
}
function P(e) {
    return v(e, d);
}
function A(e) {
    return v(e, p);
}
function I(e) {
    return l && v(e, h);
}
function O(e) {
    return u && v(e, m);
}
(t.isSharedArrayBuffer = T),
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
    (t.isNumberObject = M),
    (t.isStringObject = P),
    (t.isBooleanObject = A),
    (t.isBigIntObject = I),
    (t.isSymbolObject = O),
    (t.isBoxedPrimitive = function (e) {
        return M(e) || P(e) || A(e) || I(e) || O(e);
    }),
    (t.isAnyArrayBuffer = function (e) {
        return "u" > typeof Uint8Array && (S(e) || T(e));
    }),
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + " is not supported in userland");
            },
        });
    });
