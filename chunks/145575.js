"use strict";
var n = "function" == typeof Symbol && Symbol.for,
    i = n ? Symbol.for("react.element") : 60103,
    r = n ? Symbol.for("react.portal") : 60106,
    s = n ? Symbol.for("react.fragment") : 60107,
    a = n ? Symbol.for("react.strict_mode") : 60108,
    o = n ? Symbol.for("react.profiler") : 60114,
    l = n ? Symbol.for("react.provider") : 60109,
    u = n ? Symbol.for("react.context") : 60110,
    c = n ? Symbol.for("react.async_mode") : 60111,
    d = n ? Symbol.for("react.concurrent_mode") : 60111,
    _ = n ? Symbol.for("react.forward_ref") : 60112,
    f = n ? Symbol.for("react.suspense") : 60113,
    h = n ? Symbol.for("react.suspense_list") : 60120,
    p = n ? Symbol.for("react.memo") : 60115,
    E = n ? Symbol.for("react.lazy") : 60116,
    m = n ? Symbol.for("react.block") : 60121,
    g = n ? Symbol.for("react.fundamental") : 60117,
    A = n ? Symbol.for("react.responder") : 60118,
    I = n ? Symbol.for("react.scope") : 60119;
function T(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case i:
                switch ((e = e.type)) {
                    case c:
                    case d:
                    case s:
                    case o:
                    case a:
                    case f:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case u:
                            case _:
                            case E:
                            case p:
                            case l:
                                return e;
                            default:
                                return t;
                        }
                }
            case r:
                return t;
        }
    }
}
function S(e) {
    return T(e) === d;
}
(t.AsyncMode = c),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = u),
    (t.ContextProvider = l),
    (t.Element = i),
    (t.ForwardRef = _),
    (t.Fragment = s),
    (t.Lazy = E),
    (t.Memo = p),
    (t.Portal = r),
    (t.Profiler = o),
    (t.StrictMode = a),
    (t.Suspense = f),
    (t.isAsyncMode = function (e) {
        return S(e) || T(e) === c;
    }),
    (t.isConcurrentMode = S),
    (t.isContextConsumer = function (e) {
        return T(e) === u;
    }),
    (t.isContextProvider = function (e) {
        return T(e) === l;
    }),
    (t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === i;
    }),
    (t.isForwardRef = function (e) {
        return T(e) === _;
    }),
    (t.isFragment = function (e) {
        return T(e) === s;
    }),
    (t.isLazy = function (e) {
        return T(e) === E;
    }),
    (t.isMemo = function (e) {
        return T(e) === p;
    }),
    (t.isPortal = function (e) {
        return T(e) === r;
    }),
    (t.isProfiler = function (e) {
        return T(e) === o;
    }),
    (t.isStrictMode = function (e) {
        return T(e) === a;
    }),
    (t.isSuspense = function (e) {
        return T(e) === f;
    }),
    (t.isValidElementType = function (e) {
        return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === s ||
            e === d ||
            e === o ||
            e === a ||
            e === f ||
            e === h ||
            ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === E ||
                    e.$$typeof === p ||
                    e.$$typeof === l ||
                    e.$$typeof === u ||
                    e.$$typeof === _ ||
                    e.$$typeof === g ||
                    e.$$typeof === A ||
                    e.$$typeof === I ||
                    e.$$typeof === m))
        );
    }),
    (t.typeOf = T);
