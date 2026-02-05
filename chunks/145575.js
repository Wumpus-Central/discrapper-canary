"use strict";
var n = "function" == typeof Symbol && Symbol.for,
    r = n ? Symbol.for("react.element") : 60103,
    i = n ? Symbol.for("react.portal") : 60106,
    a = n ? Symbol.for("react.fragment") : 60107,
    s = n ? Symbol.for("react.strict_mode") : 60108,
    o = n ? Symbol.for("react.profiler") : 60114,
    l = n ? Symbol.for("react.provider") : 60109,
    u = n ? Symbol.for("react.context") : 60110,
    c = n ? Symbol.for("react.async_mode") : 60111,
    d = n ? Symbol.for("react.concurrent_mode") : 60111,
    _ = n ? Symbol.for("react.forward_ref") : 60112,
    f = n ? Symbol.for("react.suspense") : 60113,
    p = n ? Symbol.for("react.suspense_list") : 60120,
    h = n ? Symbol.for("react.memo") : 60115,
    m = n ? Symbol.for("react.lazy") : 60116,
    g = n ? Symbol.for("react.block") : 60121,
    E = n ? Symbol.for("react.fundamental") : 60117,
    A = n ? Symbol.for("react.responder") : 60118,
    I = n ? Symbol.for("react.scope") : 60119;
function T(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case r:
                switch ((e = e.type)) {
                    case c:
                    case d:
                    case a:
                    case o:
                    case s:
                    case f:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case u:
                            case _:
                            case m:
                            case h:
                            case l:
                                return e;
                            default:
                                return t;
                        }
                }
            case i:
                return t;
        }
    }
}
function y(e) {
    return T(e) === d;
}
(t.AsyncMode = c),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = u),
    (t.ContextProvider = l),
    (t.Element = r),
    (t.ForwardRef = _),
    (t.Fragment = a),
    (t.Lazy = m),
    (t.Memo = h),
    (t.Portal = i),
    (t.Profiler = o),
    (t.StrictMode = s),
    (t.Suspense = f),
    (t.isAsyncMode = function (e) {
        return y(e) || T(e) === c;
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function (e) {
        return T(e) === u;
    }),
    (t.isContextProvider = function (e) {
        return T(e) === l;
    }),
    (t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
    }),
    (t.isForwardRef = function (e) {
        return T(e) === _;
    }),
    (t.isFragment = function (e) {
        return T(e) === a;
    }),
    (t.isLazy = function (e) {
        return T(e) === m;
    }),
    (t.isMemo = function (e) {
        return T(e) === h;
    }),
    (t.isPortal = function (e) {
        return T(e) === i;
    }),
    (t.isProfiler = function (e) {
        return T(e) === o;
    }),
    (t.isStrictMode = function (e) {
        return T(e) === s;
    }),
    (t.isSuspense = function (e) {
        return T(e) === f;
    }),
    (t.isValidElementType = function (e) {
        return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === a ||
            e === d ||
            e === o ||
            e === s ||
            e === f ||
            e === p ||
            ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                    e.$$typeof === h ||
                    e.$$typeof === l ||
                    e.$$typeof === u ||
                    e.$$typeof === _ ||
                    e.$$typeof === E ||
                    e.$$typeof === A ||
                    e.$$typeof === I ||
                    e.$$typeof === g))
        );
    }),
    (t.typeOf = T);
