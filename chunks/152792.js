var r,
    i = n(444675),
    a = n(397090),
    o = n(473749),
    s = n(24156);
function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
function c(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function u(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do 0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        while (e);
    }
    return 3 === t.tag ? n : null;
}
function d(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function f(e) {
    if (u(e) !== e) throw Error(l(188));
}
function p(e) {
    var t = e.alternate;
    if (!t) {
        if (null === (t = u(e))) throw Error(l(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (null === i) break;
        var a = i.alternate;
        if (null === a) {
            if (null !== (r = i.return)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === a.child) {
            for (a = i.child; a; ) {
                if (a === n) return f(i), e;
                if (a === r) return f(i), t;
                a = a.sibling;
            }
            throw Error(l(188));
        }
        if (n.return !== r.return) (n = i), (r = a);
        else {
            for (var o = !1, s = i.child; s; ) {
                if (s === n) {
                    (o = !0), (n = i), (r = a);
                    break;
                }
                if (s === r) {
                    (o = !0), (r = i), (n = a);
                    break;
                }
                s = s.sibling;
            }
            if (!o) {
                for (s = a.child; s; ) {
                    if (s === n) {
                        (o = !0), (n = a), (r = i);
                        break;
                    }
                    if (s === r) {
                        (o = !0), (r = a), (n = i);
                        break;
                    }
                    s = s.sibling;
                }
                if (!o) throw Error(l(189));
            }
        }
        if (n.alternate !== r) throw Error(l(190));
    }
    if (3 !== n.tag) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
}
function _(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
    for (e = e.child; null !== e; ) {
        if (null !== (t = _(e))) return t;
        e = e.sibling;
    }
    return null;
}
var m = Object.assign,
    h = Symbol.for("react.element"),
    g = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    v = Symbol.for("react.provider"),
    S = Symbol.for("react.consumer"),
    I = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    A = Symbol.for("react.suspense"),
    C = Symbol.for("react.suspense_list"),
    N = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy");
Symbol.for("react.scope");
var R = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
var w = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var D = Symbol.iterator;
function x(e) {
    return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (D && e[D]) || e["@@iterator"])
          ? e
          : null;
}
var L = Symbol.for("react.client.reference");
function j(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.$$typeof === L ? null : e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case b:
            return "Fragment";
        case O:
            return "Profiler";
        case y:
            return "StrictMode";
        case A:
            return "Suspense";
        case C:
            return "SuspenseList";
        case R:
            return "Activity";
    }
    if ("object" == typeof e)
        switch (e.$$typeof) {
            case E:
                return "Portal";
            case I:
                return (e.displayName || "Context") + ".Provider";
            case S:
                return (e._context.displayName || "Context") + ".Consumer";
            case T:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e
                );
            case N:
                return null !== (t = e.displayName || null) ? t : j(e.type) || "Memo";
            case P:
                (t = e._payload), (e = e._init);
                try {
                    return j(e(t));
                } catch (e) {}
        }
    return null;
}
var M = Array.isArray,
    k = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = {
        pending: !1,
        data: null,
        method: null,
        action: null,
    },
    Z = [],
    B = -1;
function F(e) {
    return { current: e };
}
function V(e) {
    0 > B || ((e.current = Z[B]), (Z[B] = null), B--);
}
function H(e, t) {
    (Z[++B] = e.current), (e.current = t);
}
var Y = F(null),
    W = F(null),
    K = F(null),
    z = F(null);
function q(e, t) {
    switch ((H(K, t), H(W, e), H(Y, null), t.nodeType)) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? cY(e) : 0;
            break;
        default:
            if (((e = t.tagName), (t = t.namespaceURI))) e = cW((t = cY(t)), e);
            else
                switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0;
                }
    }
    V(Y), H(Y, e);
}
function X() {
    V(Y), V(W), V(K);
}
function Q(e) {
    null !== e.memoizedState && H(z, e);
    var t = Y.current,
        n = cW(t, e.type);
    t !== n && (H(W, e), H(Y, n));
}
function J(e) {
    W.current === e && (V(Y), V(W)), z.current === e && (V(z), (uZ._currentValue = G));
}
var $ = Object.prototype.hasOwnProperty,
    ee = a.unstable_scheduleCallback,
    et = a.unstable_cancelCallback,
    en = a.unstable_shouldYield,
    er = a.unstable_requestPaint,
    ei = a.unstable_now,
    ea = a.unstable_getCurrentPriorityLevel,
    eo = a.unstable_ImmediatePriority,
    es = a.unstable_UserBlockingPriority,
    el = a.unstable_NormalPriority,
    ec = a.unstable_LowPriority,
    eu = a.unstable_IdlePriority,
    ed = a.log,
    ef = a.unstable_setDisableYieldValue,
    ep = null,
    e_ = null;
function em(e) {
    if (("function" == typeof ed && ef(e), e_ && "function" == typeof e_.setStrictMode))
        try {
            e_.setStrictMode(ep, e);
        } catch (e) {}
}
var eh = Math.clz32 ? Math.clz32 : eb,
    eg = Math.log,
    eE = Math.LN2;
function eb(e) {
    return 0 == (e >>>= 0) ? 32 : (31 - ((eg(e) / eE) | 0)) | 0;
}
var ey = 256,
    eO = 4194304;
function ev(e) {
    var t = 42 & e;
    if (0 !== t) return t;
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194048 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return 62914560 & e;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e;
    }
}
function eS(e, t, n) {
    var r = e.pendingLanes;
    if (0 === r) return 0;
    var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
    e = e.warmLanes;
    var s = 134217727 & r;
    return (
        0 !== s
            ? 0 != (r = s & ~a)
                ? (i = ev(r))
                : 0 != (o &= s)
                  ? (i = ev(o))
                  : n || (0 != (n = s & ~e) && (i = ev(n)))
            : 0 != (s = r & ~a)
              ? (i = ev(s))
              : 0 !== o
                ? (i = ev(o))
                : n || (0 != (n = r & ~e) && (i = ev(n))),
        0 === i
            ? 0
            : 0 !== t && t !== i && 0 == (t & a) && ((a = i & -i) >= (n = t & -t) || (32 === a && 0 != (4194048 & n)))
              ? t
              : i
    );
}
function eI(e, t) {
    return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
}
function eT(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5000;
        default:
            return -1;
    }
}
function eA() {
    var e = ey;
    return 0 == (4194048 & (ey <<= 1)) && (ey = 256), e;
}
function eC() {
    var e = eO;
    return 0 == (62914560 & (eO <<= 1)) && (eO = 4194304), e;
}
function eN(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function eP(e, t) {
    (e.pendingLanes |= t), 268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function eR(e, t, n, r, i, a) {
    var o = e.pendingLanes;
    (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0);
    var s = e.entanglements,
        l = e.expirationTimes,
        c = e.hiddenUpdates;
    for (n = o & ~n; 0 < n; ) {
        var u = 31 - eh(n),
            d = 1 << u;
        (s[u] = 0), (l[u] = -1);
        var f = c[u];
        if (null !== f)
            for (c[u] = null, u = 0; u < f.length; u++) {
                var p = f[u];
                null !== p && (p.lane &= -536870913);
            }
        n &= ~d;
    }
    0 !== r && ew(e, r, 0), 0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(o & ~t));
}
function ew(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - eh(t);
    (e.entangledLanes |= t), (e.entanglements[r] = 1073741824 | e.entanglements[r] | (4194090 & n));
}
function eD(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - eh(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
function ex(e) {
    switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0;
    }
    return e;
}
function eL(e) {
    return 2 < (e &= -e) ? (8 < e ? (0 != (134217727 & e) ? 32 : 268435456) : 8) : 2;
}
function ej() {
    var e = U.p;
    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : u1(e.type);
}
function eM(e, t) {
    var n = U.p;
    try {
        return (U.p = e), t();
    } finally {
        U.p = n;
    }
}
var ek = Math.random().toString(36).slice(2),
    eU = "__reactFiber$" + ek,
    eG = "__reactProps$" + ek,
    eZ = "__reactContainer$" + ek,
    eB = "__reactEvents$" + ek,
    eF = "__reactListeners$" + ek,
    eV = "__reactHandles$" + ek,
    eH = "__reactResources$" + ek,
    eY = "__reactMarker$" + ek;
function eW(e) {
    delete e[eU], delete e[eG], delete e[eB], delete e[eF], delete e[eV];
}
function eK(e) {
    var t = e[eU];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[eZ] || n[eU])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ue(e); null !== e; ) {
                    if ((n = e[eU])) return n;
                    e = ue(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ez(e) {
    if ((e = e[eU] || e[eZ])) {
        var t = e.tag;
        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
    }
    return null;
}
function eq(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
    throw Error(l(33));
}
function eX(e) {
    var t = e[eH];
    return (
        t ||
            (t = e[eH] =
                {
                    hoistableStyles: new Map(),
                    hoistableScripts: new Map(),
                }),
        t
    );
}
function eQ(e) {
    e[eY] = !0;
}
var eJ = new Set(),
    e$ = {};
function e0(e, t) {
    e1(e, t), e1(e + "Capture", t);
}
function e1(e, t) {
    for (e$[e] = t, e = 0; e < t.length; e++) eJ.add(t[e]);
}
var e3 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    e2 = {},
    e4 = {};
function e5(e) {
    return !!$.call(e4, e) || (!$.call(e2, e) && (e3.test(e) ? (e4[e] = !0) : ((e2[e] = !0), !1)));
}
function e8(e, t, n) {
    if (e5(t))
        if (null === n) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var r = t.toLowerCase().slice(0, 5);
                    if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
        }
}
function e6(e, t, n) {
    if (null === n) e.removeAttribute(t);
    else {
        switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return;
        }
        e.setAttribute(t, "" + n);
    }
}
function e7(e, t, n, r) {
    if (null === r) e.removeAttribute(n);
    else {
        switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return;
        }
        e.setAttributeNS(t, n, "" + r);
    }
}
function e9(e) {
    if (void 0 === tY)
        try {
            throw Error();
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            (tY = (t && t[1]) || ""),
                (tW =
                    -1 < e.stack.indexOf("\n    at")
                        ? " (<anonymous>)"
                        : -1 < e.stack.indexOf("@")
                          ? "@unknown:0:0"
                          : "");
        }
    return "\n" + tY + e + tW;
}
var te = !1;
function tt(e, t) {
    if (!e || te) return "";
    te = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        var r = {
            DetermineComponentFrameRoot: function () {
                try {
                    if (t) {
                        var n = function () {
                            throw Error();
                        };
                        if (
                            (Object.defineProperty(n.prototype, "props", {
                                set: function () {
                                    throw Error();
                                },
                            }),
                            "object" == typeof Reflect && Reflect.construct)
                        ) {
                            try {
                                Reflect.construct(n, []);
                            } catch (e) {
                                var r = e;
                            }
                            Reflect.construct(e, [], n);
                        } else {
                            try {
                                n.call();
                            } catch (e) {
                                r = e;
                            }
                            e.call(n.prototype);
                        }
                    } else {
                        try {
                            throw Error();
                        } catch (e) {
                            r = e;
                        }
                        (n = e()) && "function" == typeof n.catch && n.catch(function () {});
                    }
                } catch (e) {
                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack];
                }
                return [null, null];
            },
        };
        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
        i &&
            i.configurable &&
            Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var a = r.DetermineComponentFrameRoot(),
            o = a[0],
            s = a[1];
        if (o && s) {
            var l = o.split("\n"),
                c = s.split("\n");
            for (i = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot"); ) r++;
            for (; i < c.length && !c[i].includes("DetermineComponentFrameRoot"); ) i++;
            if (r === l.length || i === c.length)
                for (r = l.length - 1, i = c.length - 1; 1 <= r && 0 <= i && l[r] !== c[i]; ) i--;
            for (; 1 <= r && 0 <= i; r--, i--)
                if (l[r] !== c[i]) {
                    if (1 !== r || 1 !== i)
                        do
                            if ((r--, i--, 0 > i || l[r] !== c[i])) {
                                var u = "\n" + l[r].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace("<anonymous>", e.displayName)),
                                    u
                                );
                            }
                        while (1 <= r && 0 <= i);
                    break;
                }
        }
    } finally {
        (te = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? e9(n) : "";
}
function tn(e) {
    switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return e9(e.type);
        case 16:
            return e9("Lazy");
        case 13:
            return e9("Suspense");
        case 19:
            return e9("SuspenseList");
        case 0:
        case 15:
            return tt(e.type, !1);
        case 11:
            return tt(e.type.render, !1);
        case 1:
            return tt(e.type, !0);
        case 31:
            return e9("Activity");
        default:
            return "";
    }
}
function tr(e) {
    try {
        var t = "";
        do (t += tn(e)), (e = e.return);
        while (e);
        return t;
    } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack;
    }
}
function ti(e) {
    switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
            return e;
        default:
            return "";
    }
}
function ta(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
}
function to(e) {
    var t = ta(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
        var i = n.get,
            a = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (e) {
                    (r = "" + e), a.call(this, e);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (e) {
                    r = "" + e;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function ts(e) {
    e._valueTracker || (e._valueTracker = to(e));
}
function tl(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ta(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function tc(e) {
    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
var tu = /[\n"\\]/g;
function td(e) {
    return e.replace(tu, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
}
function tf(e, t, n, r, i, a, o, s) {
    (e.name = ""),
        null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o
            ? (e.type = o)
            : e.removeAttribute("type"),
        null != t
            ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + ti(t))
                : e.value !== "" + ti(t) && (e.value = "" + ti(t))
            : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
        null != t ? t_(e, o, ti(t)) : null != n ? t_(e, o, ti(n)) : null != r && e.removeAttribute("value"),
        null == i && null != a && (e.defaultChecked = !!a),
        null != i && (e.checked = i && "function" != typeof i && "symbol" != typeof i),
        null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s
            ? (e.name = "" + ti(s))
            : e.removeAttribute("name");
}
function tp(e, t, n, r, i, a, o, s) {
    if (
        (null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a && (e.type = a),
        null != t || null != n)
    ) {
        if (("submit" === a || "reset" === a) && null == t) return;
        (n = null != n ? "" + ti(n) : ""),
            (t = null != t ? "" + ti(t) : n),
            s || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (r = "function" != typeof (r = null != r ? r : i) && "symbol" != typeof r && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o);
}
function t_(e, t, n) {
    ("number" === t && tc(e.ownerDocument) === e) || e.defaultValue === "" + n || (e.defaultValue = "" + n);
}
function tm(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (i = 0, n = "" + ti(n), t = null; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
    }
}
function th(e, t, n) {
    if (null != t && ((t = "" + ti(t)) !== e.value && (e.value = t), null == n)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
    }
    e.defaultValue = null != n ? "" + ti(n) : "";
}
function tg(e, t, n, r) {
    if (null == t) {
        if (null != r) {
            if (null != n) throw Error(l(92));
            if (M(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
            }
            n = r;
        }
        null == n && (n = ""), (t = n);
    }
    (e.defaultValue = n = ti(t)), (r = e.textContent) === n && "" !== r && null !== r && (e.value = r);
}
function tE(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var tb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
    ),
);
function ty(e, t, n) {
    var r = 0 === t.indexOf("--");
    null == n || "boolean" == typeof n || "" === n
        ? r
            ? e.setProperty(t, "")
            : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
        : r
          ? e.setProperty(t, n)
          : "number" != typeof n || 0 === n || tb.has(t)
            ? "float" === t
                ? (e.cssFloat = n)
                : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
}
function tO(e, t, n) {
    if (null != t && "object" != typeof t) throw Error(l(62));
    if (((e = e.style), null != n)) {
        for (var r in n)
            !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? (e.cssFloat = "") : (e[r] = ""));
        for (var i in t) (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && ty(e, i, r);
    } else for (var a in t) t.hasOwnProperty(a) && ty(e, a, t[a]);
}
function tv(e) {
    if (-1 === e.indexOf("-")) return !1;
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var tS = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
    ]),
    tI =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function tT(e) {
    return tI.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
}
var tA = null;
function tC(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var tN = null,
    tP = null;
function tR(e) {
    var t = ez(e);
    if (t && (e = t.stateNode)) {
        var n = e[eG] || null;
        switch (((e = t.stateNode), t.type)) {
            case "input":
                if (
                    (tf(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                    (t = n.name),
                    "radio" === n.type && null != t)
                ) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name="' + td("" + t) + '"][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = r[eG] || null;
                            if (!i) throw Error(l(90));
                            tf(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                        }
                    }
                    for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && tl(r);
                }
                break;
            case "textarea":
                th(e, n.value, n.defaultValue);
                break;
            case "select":
                null != (t = n.value) && tm(e, !!n.multiple, t, !1);
        }
    }
}
var tw = !1;
function tD(e, t, n) {
    if (tw) return e(t, n);
    tw = !0;
    try {
        return e(t);
    } finally {
        if (((tw = !1), (null !== tN || null !== tP) && (lx(), tN && ((t = tN), (e = tP), (tP = tN = null), tR(t), e))))
            for (t = 0; t < e.length; t++) tR(e[t]);
    }
}
function tx(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = n[eG] || null;
    if (null === r) return null;
    switch (((n = r[t]), t)) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (r = "button" !== (e = e.type) && "input" !== e && "select" !== e && "textarea" !== e),
                (e = !r);
            break;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
    return n;
}
var tL = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    tj = !1;
if (tL)
    try {
        var tM = {};
        Object.defineProperty(tM, "passive", {
            get: function () {
                tj = !0;
            },
        }),
            window.addEventListener("test", tM, tM),
            window.removeEventListener("test", tM, tM);
    } catch (e) {
        tj = !1;
    }
var tk = null,
    tU = null,
    tG = null;
function tZ() {
    if (tG) return tG;
    var e,
        t,
        n = tU,
        r = n.length,
        i = "value" in tk ? tk.value : tk.textContent,
        a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
    return (tG = i.slice(e, 1 < t ? 1 - t : void 0));
}
function tB(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function tF() {
    return !0;
}
function tV() {
    return !1;
}
function tH(e) {
    function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
            (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue)
                ? tF
                : tV),
            (this.isPropagationStopped = tV),
            this
        );
    }
    return (
        m(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = tF));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = tF));
            },
            persist: function () {},
            isPersistent: tF,
        }),
        t
    );
}
var tY,
    tW,
    tK,
    tz,
    tq,
    tX = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    tQ = tH(tX),
    tJ = m({}, tX, {
        view: 0,
        detail: 0,
    }),
    t$ = tH(tJ),
    t0 = m({}, tJ, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: nt,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== tq &&
                      (tq && "mousemove" === e.type
                          ? ((tK = e.screenX - tq.screenX), (tz = e.screenY - tq.screenY))
                          : (tz = tK = 0),
                      (tq = e)),
                  tK);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : tz;
        },
    }),
    t1 = tH(t0),
    t3 = tH(m({}, t0, { dataTransfer: 0 })),
    t2 = tH(m({}, tJ, { relatedTarget: 0 })),
    t4 = tH(
        m({}, tX, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
        }),
    ),
    t5 = tH(
        m({}, tX, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
        }),
    ),
    t8 = tH(m({}, tX, { data: 0 })),
    t6 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    t7 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    t9 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function ne(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = t9[e]) && !!t[e];
}
function nt() {
    return ne;
}
var nn = tH(
        m({}, tJ, {
            key: function (e) {
                if (e.key) {
                    var t = t6[e.key] || e.key;
                    if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                    ? 13 === (e = tB(e))
                        ? "Enter"
                        : String.fromCharCode(e)
                    : "keydown" === e.type || "keyup" === e.type
                      ? t7[e.keyCode] || "Unidentified"
                      : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: nt,
            charCode: function (e) {
                return "keypress" === e.type ? tB(e) : 0;
            },
            keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
                return "keypress" === e.type ? tB(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
        }),
    ),
    nr = tH(
        m({}, t0, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
    ),
    ni = tH(
        m({}, tJ, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: nt,
        }),
    ),
    na = tH(
        m({}, tX, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
        }),
    ),
    no = tH(
        m({}, t0, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                      ? -e.wheelDeltaY
                      : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
    ),
    ns = tH(
        m({}, tX, {
            newState: 0,
            oldState: 0,
        }),
    ),
    nl = [9, 13, 27, 32],
    nc = tL && "CompositionEvent" in window,
    nu = null;
tL && "documentMode" in document && (nu = document.documentMode);
var nd = tL && "TextEvent" in window && !nu,
    nf = tL && (!nc || (nu && 8 < nu && 11 >= nu)),
    np = " ",
    n_ = !1;
function nm(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== nl.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function nh(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var ng = !1;
function nE(e, t) {
    switch (e) {
        case "compositionend":
            return nh(t);
        case "keypress":
            if (32 !== t.which) return null;
            return (n_ = !0), np;
        case "textInput":
            return (e = t.data) === np && n_ ? null : e;
        default:
            return null;
    }
}
function nb(e, t) {
    if (ng)
        return "compositionend" === e || (!nc && nm(e, t)) ? ((e = tZ()), (tG = tU = tk = null), (ng = !1), e) : null;
    switch (e) {
        case "paste":
        default:
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return nf && "ko" !== t.locale ? null : t.data;
    }
}
var ny = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function nO(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!ny[e.type] : "textarea" === t;
}
function nv(e, t, n, r) {
    tN ? (tP ? tP.push(r) : (tP = [r])) : (tN = r),
        0 < (t = cR(t, "onChange")).length &&
            ((n = new tQ("onChange", "change", null, n, r)),
            e.push({
                event: n,
                listeners: t,
            }));
}
var nS = null,
    nI = null;
function nT(e) {
    cv(e, 0);
}
function nA(e) {
    if (tl(eq(e))) return e;
}
function nC(e, t) {
    if ("change" === e) return t;
}
var nN = !1;
if (tL) {
    if (tL) {
        var nP = "oninput" in document;
        if (!nP) {
            var nR = document.createElement("div");
            nR.setAttribute("oninput", "return;"), (nP = "function" == typeof nR.oninput);
        }
        r = nP;
    } else r = !1;
    nN = r && (!document.documentMode || 9 < document.documentMode);
}
function nw() {
    nS && (nS.detachEvent("onpropertychange", nD), (nI = nS = null));
}
function nD(e) {
    if ("value" === e.propertyName && nA(nI)) {
        var t = [];
        nv(t, nI, e, tC(e)), tD(nT, t);
    }
}
function nx(e, t, n) {
    "focusin" === e ? (nw(), (nS = t), (nI = n), nS.attachEvent("onpropertychange", nD)) : "focusout" === e && nw();
}
function nL(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return nA(nI);
}
function nj(e, t) {
    if ("click" === e) return nA(t);
}
function nM(e, t) {
    if ("input" === e || "change" === e) return nA(t);
}
function nk(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var nU = "function" == typeof Object.is ? Object.is : nk;
function nG(e, t) {
    if (nU(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!$.call(t, i) || !nU(e[i], t[i])) return !1;
    }
    return !0;
}
function nZ(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function nB(e, t) {
    var n,
        r = nZ(e);
    for (e = 0; r; ) {
        if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
                return {
                    node: r,
                    offset: t - e,
                };
            e = n;
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e;
                }
                r = r.parentNode;
            }
            r = void 0;
        }
        r = nZ(r);
    }
}
function nF(e, t) {
    return (
        !!e &&
        !!t &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? nF(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function nV(e) {
    e =
        null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
            ? e.ownerDocument.defaultView
            : window;
    for (var t = tc(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = tc(e.document);
    }
    return t;
}
function nH(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        (("input" === t &&
            ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
    );
}
var nY = tL && "documentMode" in document && 11 >= document.documentMode,
    nW = null,
    nK = null,
    nz = null,
    nq = !1;
function nX(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    nq ||
        null == nW ||
        nW !== tc(r) ||
        ((r =
            "selectionStart" in (r = nW) && nH(r)
                ? {
                      start: r.selectionStart,
                      end: r.selectionEnd,
                  }
                : {
                      anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                          .anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  }),
        (nz && nG(nz, r)) ||
            ((nz = r),
            0 < (r = cR(nK, "onSelect")).length &&
                ((t = new tQ("onSelect", "select", null, t, n)),
                e.push({
                    event: t,
                    listeners: r,
                }),
                (t.target = nW))));
}
function nQ(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var nJ = {
        animationend: nQ("Animation", "AnimationEnd"),
        animationiteration: nQ("Animation", "AnimationIteration"),
        animationstart: nQ("Animation", "AnimationStart"),
        transitionrun: nQ("Transition", "TransitionRun"),
        transitionstart: nQ("Transition", "TransitionStart"),
        transitioncancel: nQ("Transition", "TransitionCancel"),
        transitionend: nQ("Transition", "TransitionEnd"),
    },
    n$ = {},
    n0 = {};
function n1(e) {
    if (n$[e]) return n$[e];
    if (!nJ[e]) return e;
    var t,
        n = nJ[e];
    for (t in n) if (n.hasOwnProperty(t) && t in n0) return (n$[e] = n[t]);
    return e;
}
tL &&
    ((n0 = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete nJ.animationend.animation, delete nJ.animationiteration.animation, delete nJ.animationstart.animation),
    "TransitionEvent" in window || delete nJ.transitionend.transition);
var n3 = n1("animationend"),
    n2 = n1("animationiteration"),
    n4 = n1("animationstart"),
    n5 = n1("transitionrun"),
    n8 = n1("transitionstart"),
    n6 = n1("transitioncancel"),
    n7 = n1("transitionend"),
    n9 = new Map(),
    re =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function rt(e, t) {
    n9.set(e, t), e0(t, [e]);
}
re.push("scrollEnd");
var rn = new WeakMap();
function rr(e, t) {
    if ("object" == typeof e && null !== e) {
        var n = rn.get(e);
        return void 0 !== n
            ? n
            : ((t = {
                  value: e,
                  source: t,
                  stack: tr(t),
              }),
              rn.set(e, t),
              t);
    }
    return {
        value: e,
        source: t,
        stack: tr(t),
    };
}
var ri = [],
    ra = 0,
    ro = 0;
function rs() {
    for (var e = ra, t = (ro = ra = 0); t < e; ) {
        var n = ri[t];
        ri[t++] = null;
        var r = ri[t];
        ri[t++] = null;
        var i = ri[t];
        ri[t++] = null;
        var a = ri[t];
        if (((ri[t++] = null), null !== r && null !== i)) {
            var o = r.pending;
            null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i);
        }
        0 !== a && rd(n, i, a);
    }
}
function rl(e, t, n, r) {
    (ri[ra++] = e),
        (ri[ra++] = t),
        (ri[ra++] = n),
        (ri[ra++] = r),
        (ro |= r),
        (e.lanes |= r),
        null !== (e = e.alternate) && (e.lanes |= r);
}
function rc(e, t, n, r) {
    return rl(e, t, n, r), rf(e);
}
function ru(e, t) {
    return rl(e, null, null, t), rf(e);
}
function rd(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    null !== r && (r.lanes |= n);
    for (var i = !1, a = e.return; null !== a; )
        (a.childLanes |= n),
            null !== (r = a.alternate) && (r.childLanes |= n),
            22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)),
            (e = a),
            (a = a.return);
    return 3 === e.tag
        ? ((a = e.stateNode),
          i &&
              null !== t &&
              ((i = 31 - eh(n)),
              null === (r = (e = a.hiddenUpdates)[i]) ? (e[i] = [t]) : r.push(t),
              (t.lane = 536870912 | n)),
          a)
        : null;
}
function rf(e) {
    if (50 < lI) throw ((lI = 0), (lT = null), Error(l(185)));
    for (var t = e.return; null !== t; ) t = (e = t).return;
    return 3 === e.tag ? e.stateNode : null;
}
var rp = {};
function r_(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function rm(e, t, n, r) {
    return new r_(e, t, n, r);
}
function rh(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function rg(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = rm(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = 65011712 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            null === t
                ? null
                : {
                      lanes: t.lanes,
                      firstContext: t.firstContext,
                  }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
    );
}
function rE(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
        null === n
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null))
            : ((e.childLanes = n.childLanes),
              (e.lanes = n.lanes),
              (e.child = n.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = n.memoizedProps),
              (e.memoizedState = n.memoizedState),
              (e.updateQueue = n.updateQueue),
              (e.type = n.type),
              (e.dependencies =
                  null === (t = n.dependencies)
                      ? null
                      : {
                            lanes: t.lanes,
                            firstContext: t.firstContext,
                        })),
        e
    );
}
function rb(e, t, n, r, i, a) {
    var o = 0;
    if (((r = e), "function" == typeof e)) rh(e) && (o = 1);
    else if ("string" == typeof e) o = uR(e, n, Y.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
    else
        e: switch (e) {
            case R:
                return ((e = rm(31, n, t, i)).elementType = R), (e.lanes = a), e;
            case b:
                return ry(n.children, i, a, t);
            case y:
                (o = 8), (i |= 24);
                break;
            case O:
                return ((e = rm(12, n, t, 2 | i)).elementType = O), (e.lanes = a), e;
            case A:
                return ((e = rm(13, n, t, i)).elementType = A), (e.lanes = a), e;
            case C:
                return ((e = rm(19, n, t, i)).elementType = C), (e.lanes = a), e;
            default:
                if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case v:
                        case I:
                            o = 10;
                            break e;
                        case S:
                            o = 9;
                            break e;
                        case T:
                            o = 11;
                            break e;
                        case N:
                            o = 14;
                            break e;
                        case P:
                            (o = 16), (r = null);
                            break e;
                    }
                (o = 29), (n = Error(l(130, null === e ? "null" : typeof e, ""))), (r = null);
        }
    return ((t = rm(o, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t;
}
function ry(e, t, n, r) {
    return ((e = rm(7, e, r, t)).lanes = n), e;
}
function rO(e, t, n) {
    return ((e = rm(6, e, null, t)).lanes = n), e;
}
function rv(e, t, n) {
    return (
        ((t = rm(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
var rS = [],
    rI = 0,
    rT = null,
    rA = 0,
    rC = [],
    rN = 0,
    rP = null,
    rR = 1,
    rw = "";
function rD(e, t) {
    (rS[rI++] = rA), (rS[rI++] = rT), (rT = e), (rA = t);
}
function rx(e, t, n) {
    (rC[rN++] = rR), (rC[rN++] = rw), (rC[rN++] = rP), (rP = e);
    var r = rR;
    e = rw;
    var i = 32 - eh(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var a = 32 - eh(t) + i;
    if (30 < a) {
        var o = i - (i % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (rR = (1 << (32 - eh(t) + i)) | (n << i) | r),
            (rw = a + e);
    } else (rR = (1 << a) | (n << i) | r), (rw = e);
}
function rL(e) {
    null !== e.return && (rD(e, 1), rx(e, 1, 0));
}
function rj(e) {
    for (; e === rT; ) (rT = rS[--rI]), (rS[rI] = null), (rA = rS[--rI]), (rS[rI] = null);
    for (; e === rP; )
        (rP = rC[--rN]), (rC[rN] = null), (rw = rC[--rN]), (rC[rN] = null), (rR = rC[--rN]), (rC[rN] = null);
}
var rM = null,
    rk = null,
    rU = !1,
    rG = null,
    rZ = !1,
    rB = Error(l(519));
function rF(e) {
    throw (rz(rr(Error(l(418, "")), e)), rB);
}
function rV(e) {
    var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
    switch (((t[eU] = e), (t[eG] = r), n)) {
        case "dialog":
            cS("cancel", t), cS("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            cS("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < cy.length; n++) cS(cy[n], t);
            break;
        case "source":
            cS("error", t);
            break;
        case "img":
        case "image":
        case "link":
            cS("error", t), cS("load", t);
            break;
        case "details":
            cS("toggle", t);
            break;
        case "input":
            cS("invalid", t), tp(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), ts(t);
            break;
        case "select":
            cS("invalid", t);
            break;
        case "textarea":
            cS("invalid", t), tg(t, r.value, r.defaultValue, r.children), ts(t);
    }
    ("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
    t.textContent === "" + n ||
    !0 === r.suppressHydrationWarning ||
    cM(t.textContent, n)
        ? (null != r.popover && (cS("beforetoggle", t), cS("toggle", t)),
          null != r.onScroll && cS("scroll", t),
          null != r.onScrollEnd && cS("scrollend", t),
          null != r.onClick && (t.onclick = ck),
          (t = !0))
        : (t = !1),
        t || rF(e);
}
function rH(e) {
    for (rM = e.return; rM; )
        switch (rM.tag) {
            case 5:
            case 13:
                rZ = !1;
                return;
            case 27:
            case 3:
                rZ = !0;
                return;
            default:
                rM = rM.return;
        }
}
function rY(e) {
    if (e !== rM) return !1;
    if (!rU) return rH(e), (rU = !0), !1;
    var t,
        n = e.tag;
    if (
        ((t = 3 !== n && 27 !== n) &&
            ((t = 5 === n) && (t = "form" === (t = e.type) || "button" === t || cK(e.type, e.memoizedProps)), (t = !t)),
        t && rk && rF(e),
        rH(e),
        13 === n)
    ) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
        e: {
            for (n = 0, e = e.nextSibling; e; ) {
                if (8 === e.nodeType)
                    if ("/$" === (t = e.data)) {
                        if (0 === n) {
                            rk = c7(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
            }
            rk = null;
        }
    } else
        27 === n
            ? ((n = rk), c1(e.type) ? ((e = c9), (c9 = null), (rk = e)) : (rk = n))
            : (rk = rM ? c7(e.stateNode.nextSibling) : null);
    return !0;
}
function rW() {
    (rk = rM = null), (rU = !1);
}
function rK() {
    var e = rG;
    return null !== e && (null === ld ? (ld = e) : ld.push.apply(ld, e), (rG = null)), e;
}
function rz(e) {
    null === rG ? (rG = [e]) : rG.push(e);
}
var rq = F(null),
    rX = null,
    rQ = null;
function rJ(e, t, n) {
    H(rq, t._currentValue), (t._currentValue = n);
}
function r$(e) {
    (e._currentValue = rq.current), V(rq);
}
function r0(e, t, n) {
    for (; null !== e; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function r1(e, t, n, r) {
    var i = e.child;
    for (null !== i && (i.return = e); null !== i; ) {
        var a = i.dependencies;
        if (null !== a) {
            var o = i.child;
            a = a.firstContext;
            e: for (; null !== a; ) {
                var s = a;
                a = i;
                for (var c = 0; c < t.length; c++)
                    if (s.context === t[c]) {
                        (a.lanes |= n),
                            null !== (s = a.alternate) && (s.lanes |= n),
                            r0(a.return, n, e),
                            r || (o = null);
                        break e;
                    }
                a = s.next;
            }
        } else if (18 === i.tag) {
            if (null === (o = i.return)) throw Error(l(341));
            (o.lanes |= n), null !== (a = o.alternate) && (a.lanes |= n), r0(o, n, e), (o = null);
        } else o = i.child;
        if (null !== o) o.return = i;
        else
            for (o = i; null !== o; ) {
                if (o === e) {
                    o = null;
                    break;
                }
                if (null !== (i = o.sibling)) {
                    (i.return = o.return), (o = i);
                    break;
                }
                o = o.return;
            }
        i = o;
    }
}
function r3(e, t, n, r) {
    e = null;
    for (var i = t, a = !1; null !== i; ) {
        if (!a) {
            if (0 != (524288 & i.flags)) a = !0;
            else if (0 != (262144 & i.flags)) break;
        }
        if (10 === i.tag) {
            var o = i.alternate;
            if (null === o) throw Error(l(387));
            if (null !== (o = o.memoizedProps)) {
                var s = i.type;
                nU(i.pendingProps.value, o.value) || (null !== e ? e.push(s) : (e = [s]));
            }
        } else if (i === z.current) {
            if (null === (o = i.alternate)) throw Error(l(387));
            o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(uZ) : (e = [uZ]));
        }
        i = i.return;
    }
    null !== e && r1(t, e, n, r), (t.flags |= 262144);
}
function r2(e) {
    for (e = e.firstContext; null !== e; ) {
        if (!nU(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
    }
    return !1;
}
function r4(e) {
    (rX = e), (rQ = null), null !== (e = e.dependencies) && (e.firstContext = null);
}
function r5(e) {
    return r6(rX, e);
}
function r8(e, t) {
    return null === rX && r4(e), r6(e, t);
}
function r6(e, t) {
    var n = t._currentValue;
    if (
        ((t = {
            context: t,
            memoizedValue: n,
            next: null,
        }),
        null === rQ)
    ) {
        if (null === e) throw Error(l(308));
        (rQ = t),
            (e.dependencies = {
                lanes: 0,
                firstContext: t,
            }),
            (e.flags |= 524288);
    } else rQ = rQ.next = t;
    return n;
}
var r7 =
        "undefined" != typeof AbortController
            ? AbortController
            : function () {
                  var e = [],
                      t = (this.signal = {
                          aborted: !1,
                          addEventListener: function (t, n) {
                              e.push(n);
                          },
                      });
                  this.abort = function () {
                      (t.aborted = !0),
                          e.forEach(function (e) {
                              return e();
                          });
                  };
              },
    r9 = a.unstable_scheduleCallback,
    ie = a.unstable_NormalPriority,
    it = {
        $$typeof: I,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
    };
function ir() {
    return {
        controller: new r7(),
        data: new Map(),
        refCount: 0,
    };
}
function ii(e) {
    e.refCount--,
        0 === e.refCount &&
            r9(ie, function () {
                e.controller.abort();
            });
}
var ia = null,
    io = 0,
    is = 0,
    il = null;
function ic(e, t) {
    if (null === ia) {
        var n = (ia = []);
        (io = 0),
            (is = c_()),
            (il = {
                status: "pending",
                value: void 0,
                then: function (e) {
                    n.push(e);
                },
            });
    }
    return io++, t.then(iu, iu), t;
}
function iu() {
    if (0 == --io && null !== ia) {
        null !== il && (il.status = "fulfilled");
        var e = ia;
        (ia = null), (is = 0), (il = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
}
function id(e, t) {
    var n = [],
        r = {
            status: "pending",
            value: null,
            reason: null,
            then: function (e) {
                n.push(e);
            },
        };
    return (
        e.then(
            function () {
                (r.status = "fulfilled"), (r.value = t);
                for (var e = 0; e < n.length; e++) (0, n[e])(t);
            },
            function (e) {
                for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
            },
        ),
        r
    );
}
var ip = k.S;
k.S = function (e, t) {
    "object" == typeof t && null !== t && "function" == typeof t.then && ic(e, t), null !== ip && ip(e, t);
};
var i_ = F(null);
function im() {
    var e = i_.current;
    return null !== e ? e : s5.pooledCache;
}
function ih(e, t) {
    null === t ? H(i_, i_.current) : H(i_, t.pool);
}
function ig() {
    var e = im();
    return null === e
        ? null
        : {
              parent: it._currentValue,
              pool: e,
          };
}
var iE = Error(l(460)),
    ib = Error(l(474)),
    iy = Error(l(542)),
    iO = {
        then: function () {},
    };
function iv(e) {
    return "fulfilled" === (e = e.status) || "rejected" === e;
}
function iS() {}
function iI(e, t, n) {
    switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(iS, iS), (t = n)), t.status)) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw (iC((e = t.reason)), e);
        default:
            if ("string" == typeof t.status) t.then(iS, iS);
            else {
                if (null !== (e = s5) && 100 < e.shellSuspendCounter) throw Error(l(482));
                ((e = t).status = "pending"),
                    e.then(
                        function (e) {
                            if ("pending" === t.status) {
                                var n = t;
                                (n.status = "fulfilled"), (n.value = e);
                            }
                        },
                        function (e) {
                            if ("pending" === t.status) {
                                var n = t;
                                (n.status = "rejected"), (n.reason = e);
                            }
                        },
                    );
            }
            switch (t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw (iC((e = t.reason)), e);
            }
            throw ((iT = t), iE);
    }
}
var iT = null;
function iA() {
    if (null === iT) throw Error(l(459));
    var e = iT;
    return (iT = null), e;
}
function iC(e) {
    if (e === iE || e === iy) throw Error(l(483));
}
var iN = !1;
function iP(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            lanes: 0,
            hiddenCallbacks: null,
        },
        callbacks: null,
    };
}
function iR(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
            });
}
function iw(e) {
    return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function iD(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & s4))) {
        var i = r.pending;
        return (
            null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            (t = rf(e)),
            rd(e, null, n),
            t
        );
    }
    return rl(e, r, t, n), rf(e);
}
function ix(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194048 & n))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), eD(e, n);
    }
}
function iL(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var i = null,
            a = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var o = {
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: null,
                    next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
            } while (null !== n);
            null === a ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            callbacks: r.callbacks,
        }),
            (e.updateQueue = n);
        return;
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
var ij = !1;
function iM() {
    if (ij) {
        var e = il;
        if (null !== e) throw e;
    }
}
function ik(e, t, n, r) {
    ij = !1;
    var i = e.updateQueue;
    iN = !1;
    var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
    if (null !== s) {
        i.shared.pending = null;
        var l = s,
            c = l.next;
        (l.next = null), null === o ? (a = c) : (o.next = c), (o = l);
        var u = e.alternate;
        null !== u &&
            (s = (u = u.updateQueue).lastBaseUpdate) !== o &&
            (null === s ? (u.firstBaseUpdate = c) : (s.next = c), (u.lastBaseUpdate = l));
    }
    if (null !== a) {
        var d = i.baseState;
        for (o = 0, u = c = l = null, s = a; ; ) {
            var f = -536870913 & s.lane,
                p = f !== s.lane;
            if (p ? (s6 & f) === f : (r & f) === f) {
                0 !== f && f === is && (ij = !0),
                    null !== u &&
                        (u = u.next =
                            {
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: null,
                                next: null,
                            });
                e: {
                    var _ = e,
                        h = s;
                    f = t;
                    var g = n;
                    switch (h.tag) {
                        case 1:
                            if ("function" == typeof (_ = h.payload)) {
                                d = _.call(g, d, f);
                                break e;
                            }
                            d = _;
                            break e;
                        case 3:
                            _.flags = (-65537 & _.flags) | 128;
                        case 0:
                            if (null == (f = "function" == typeof (_ = h.payload) ? _.call(g, d, f) : _)) break e;
                            d = m({}, d, f);
                            break e;
                        case 2:
                            iN = !0;
                    }
                }
                null !== (f = s.callback) &&
                    ((e.flags |= 64),
                    p && (e.flags |= 8192),
                    null === (p = i.callbacks) ? (i.callbacks = [f]) : p.push(f));
            } else
                (p = {
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                }),
                    null === u ? ((c = u = p), (l = d)) : (u = u.next = p),
                    (o |= f);
            if (null === (s = s.next))
                if (null === (s = i.shared.pending)) break;
                else (s = (p = s).next), (p.next = null), (i.lastBaseUpdate = p), (i.shared.pending = null);
        }
        null === u && (l = d),
            (i.baseState = l),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = u),
            null === a && (i.shared.lanes = 0),
            (la |= o),
            (e.lanes = o),
            (e.memoizedState = d);
    }
}
function iU(e, t) {
    if ("function" != typeof e) throw Error(l(191, e));
    e.call(t);
}
function iG(e, t) {
    var n = e.callbacks;
    if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) iU(n[e], t);
}
var iZ = F(null),
    iB = F(0);
function iF(e, t) {
    H(iB, (e = lr)), H(iZ, t), (lr = e | t.baseLanes);
}
function iV() {
    H(iB, lr), H(iZ, iZ.current);
}
function iH() {
    (lr = iB.current), V(iZ), V(iB);
}
var iY = 0,
    iW = null,
    iK = null,
    iz = null,
    iq = !1,
    iX = !1,
    iQ = !1,
    iJ = 0,
    i$ = 0,
    i0 = null,
    i1 = 0;
function i3() {
    throw Error(l(321));
}
function i2(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nU(e[n], t[n])) return !1;
    return !0;
}
function i4(e, t, n, r, i, a) {
    return (
        (iY = a),
        (iW = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (k.H = null === e || null === e.memoizedState ? oe : ot),
        (iQ = !1),
        (a = n(r, i)),
        (iQ = !1),
        iX && (a = i8(t, n, r, i)),
        i5(e),
        a
    );
}
function i5(e) {
    k.H = a9;
    var t = null !== iK && null !== iK.next;
    if (((iY = 0), (iz = iK = iW = null), (iq = !1), (i$ = 0), (i0 = null), t)) throw Error(l(300));
    null === e || oM || (null !== (e = e.dependencies) && r2(e) && (oM = !0));
}
function i8(e, t, n, r) {
    iW = e;
    var i = 0;
    do {
        if ((iX && (i0 = null), (i$ = 0), (iX = !1), 25 <= i)) throw Error(l(301));
        if (((i += 1), (iz = iK = null), null != e.updateQueue)) {
            var a = e.updateQueue;
            (a.lastEffect = null), (a.events = null), (a.stores = null), null != a.memoCache && (a.memoCache.index = 0);
        }
        (k.H = on), (a = t(n, r));
    } while (iX);
    return a;
}
function i6() {
    var e = k.H,
        t = e.useState()[0];
    return (
        (t = "function" == typeof t.then ? ai(t) : t),
        (e = e.useState()[0]),
        (null !== iK ? iK.memoizedState : null) !== e && (iW.flags |= 1024),
        t
    );
}
function i7() {
    var e = 0 !== iJ;
    return (iJ = 0), e;
}
function i9(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function ae(e) {
    if (iq) {
        for (e = e.memoizedState; null !== e; ) {
            var t = e.queue;
            null !== t && (t.pending = null), (e = e.next);
        }
        iq = !1;
    }
    (iY = 0), (iz = iK = iW = null), (iX = !1), (i$ = iJ = 0), (i0 = null);
}
function at() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return null === iz ? (iW.memoizedState = iz = e) : (iz = iz.next = e), iz;
}
function an() {
    if (null === iK) {
        var e = iW.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = iK.next;
    var t = null === iz ? iW.memoizedState : iz.next;
    if (null !== t) (iz = t), (iK = e);
    else {
        if (null === e) {
            if (null === iW.alternate) throw Error(l(467));
            throw Error(l(310));
        }
        (e = {
            memoizedState: (iK = e).memoizedState,
            baseState: iK.baseState,
            baseQueue: iK.baseQueue,
            queue: iK.queue,
            next: null,
        }),
            null === iz ? (iW.memoizedState = iz = e) : (iz = iz.next = e);
    }
    return iz;
}
function ar() {
    return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null,
    };
}
function ai(e) {
    var t = i$;
    return (
        (i$ += 1),
        null === i0 && (i0 = []),
        (e = iI(i0, e, t)),
        (t = iW),
        null === (null === iz ? t.memoizedState : iz.next) &&
            (k.H = null === (t = t.alternate) || null === t.memoizedState ? oe : ot),
        e
    );
}
function aa(e) {
    if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return ai(e);
        if (e.$$typeof === I) return r5(e);
    }
    throw Error(l(438, String(e)));
}
function ao(e) {
    var t = null,
        n = iW.updateQueue;
    if ((null !== n && (t = n.memoCache), null == t)) {
        var r = iW.alternate;
        null !== r &&
            null !== (r = r.updateQueue) &&
            null != (r = r.memoCache) &&
            (t = {
                data: r.data.map(function (e) {
                    return e.slice();
                }),
                index: 0,
            });
    }
    if (
        (null == t &&
            (t = {
                data: [],
                index: 0,
            }),
        null === n && ((n = ar()), (iW.updateQueue = n)),
        (n.memoCache = t),
        void 0 === (n = t.data[t.index]))
    )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = w;
    return t.index++, n;
}
function as(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function al(e) {
    return ac(an(), iK, e);
}
function ac(e, t, n) {
    var r = e.queue;
    if (null === r) throw Error(l(311));
    r.lastRenderedReducer = n;
    var i = e.baseQueue,
        a = r.pending;
    if (null !== a) {
        if (null !== i) {
            var o = i.next;
            (i.next = a.next), (a.next = o);
        }
        (t.baseQueue = i = a), (r.pending = null);
    }
    if (((a = e.baseState), null === i)) e.memoizedState = a;
    else {
        t = i.next;
        var s = (o = null),
            c = null,
            u = t,
            d = !1;
        do {
            var f = -536870913 & u.lane;
            if (f !== u.lane ? (s6 & f) === f : (iY & f) === f) {
                var p = u.revertLane;
                if (0 === p)
                    null !== c &&
                        (c = c.next =
                            {
                                lane: 0,
                                revertLane: 0,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null,
                            }),
                        f === is && (d = !0);
                else if ((iY & p) === p) {
                    (u = u.next), p === is && (d = !0);
                    continue;
                } else
                    (f = {
                        lane: 0,
                        revertLane: u.revertLane,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                    }),
                        null === c ? ((s = c = f), (o = a)) : (c = c.next = f),
                        (iW.lanes |= p),
                        (la |= p);
                (f = u.action), iQ && n(a, f), (a = u.hasEagerState ? u.eagerState : n(a, f));
            } else
                (p = {
                    lane: f,
                    revertLane: u.revertLane,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                }),
                    null === c ? ((s = c = p), (o = a)) : (c = c.next = p),
                    (iW.lanes |= f),
                    (la |= f);
            u = u.next;
        } while (null !== u && u !== t);
        if ((null === c ? (o = a) : (c.next = s), !nU(a, e.memoizedState) && ((oM = !0), d && null !== (n = il))))
            throw n;
        (e.memoizedState = a), (e.baseState = o), (e.baseQueue = c), (r.lastRenderedState = a);
    }
    return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
}
function au(e) {
    var t = an(),
        n = t.queue;
    if (null === n) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
    if (null !== i) {
        n.pending = null;
        var o = (i = i.next);
        do (a = e(a, o.action)), (o = o.next);
        while (o !== i);
        nU(a, t.memoizedState) || (oM = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
    }
    return [a, r];
}
function ad(e, t, n) {
    var r = iW,
        i = an(),
        a = rU;
    if (a) {
        if (void 0 === n) throw Error(l(407));
        n = n();
    } else n = t();
    var o = !nU((iK || i).memoizedState, n);
    if (
        (o && ((i.memoizedState = n), (oM = !0)),
        (i = i.queue),
        aj(2048, 8, a_.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || o || (null !== iz && 1 & iz.memoizedState.tag))
    ) {
        if (((r.flags |= 2048), aw(9, aD(), ap.bind(null, r, i, n, t), null), null === s5)) throw Error(l(349));
        a || 0 != (124 & iY) || af(r, t, n);
    }
    return n;
}
function af(e, t, n) {
    (e.flags |= 16384),
        (e = {
            getSnapshot: t,
            value: n,
        }),
        null === (t = iW.updateQueue)
            ? ((t = ar()), (iW.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
}
function ap(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), am(t) && ah(e);
}
function a_(e, t, n) {
    return n(function () {
        am(t) && ah(e);
    });
}
function am(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nU(e, n);
    } catch (e) {
        return !0;
    }
}
function ah(e) {
    var t = ru(e, 2);
    null !== t && lN(t, e, 2);
}
function ag(e) {
    var t = at();
    if ("function" == typeof e) {
        var n = e;
        if (((e = n()), iQ)) {
            em(!0);
            try {
                n();
            } finally {
                em(!1);
            }
        }
    }
    return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: as,
            lastRenderedState: e,
        }),
        t
    );
}
function aE(e, t, n, r) {
    return (e.baseState = n), ac(e, iK, "function" == typeof r ? r : as);
}
function ab(e, t, n, r, i) {
    if (a8(e)) throw Error(l(485));
    if (null !== (e = t.action)) {
        var a = {
            payload: i,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function (e) {
                a.listeners.push(e);
            },
        };
        null !== k.T ? n(!0) : (a.isTransition = !1),
            r(a),
            null === (n = t.pending)
                ? ((a.next = t.pending = a), ay(t, a))
                : ((a.next = n.next), (t.pending = n.next = a));
    }
}
function ay(e, t) {
    var n = t.action,
        r = t.payload,
        i = e.state;
    if (t.isTransition) {
        var a = k.T,
            o = {};
        k.T = o;
        try {
            var s = n(i, r),
                l = k.S;
            null !== l && l(o, s), aO(e, t, s);
        } catch (n) {
            aS(e, t, n);
        } finally {
            k.T = a;
        }
    } else
        try {
            (a = n(i, r)), aO(e, t, a);
        } catch (n) {
            aS(e, t, n);
        }
}
function aO(e, t, n) {
    null !== n && "object" == typeof n && "function" == typeof n.then
        ? n.then(
              function (n) {
                  av(e, t, n);
              },
              function (n) {
                  return aS(e, t, n);
              },
          )
        : av(e, t, n);
}
function av(e, t, n) {
    (t.status = "fulfilled"),
        (t.value = n),
        aI(t),
        (e.state = n),
        null !== (t = e.pending) && ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), ay(e, n)));
}
function aS(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), null !== r)) {
        r = r.next;
        do (t.status = "rejected"), (t.reason = n), aI(t), (t = t.next);
        while (t !== r);
    }
    e.action = null;
}
function aI(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
}
function aT(e, t) {
    return t;
}
function aA(e, t) {
    if (rU) {
        var n = s5.formState;
        if (null !== n) {
            e: {
                var r = iW;
                if (rU) {
                    if (rk) {
                        a: {
                            for (var i = rk, a = rZ; 8 !== i.nodeType; )
                                if (!a || null === (i = c7(i.nextSibling))) {
                                    i = null;
                                    break a;
                                }
                            i = "F!" === (a = i.data) || "F" === a ? i : null;
                        }
                        if (i) {
                            (rk = c7(i.nextSibling)), (r = "F!" === i.data);
                            break e;
                        }
                    }
                    rF(r);
                }
                r = !1;
            }
            r && (t = n[0]);
        }
    }
    return (
        ((n = at()).memoizedState = n.baseState = t),
        (r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: aT,
            lastRenderedState: t,
        }),
        (n.queue = r),
        (n = a2.bind(null, iW, r)),
        (r.dispatch = n),
        (r = ag(!1)),
        (a = a5.bind(null, iW, !1, r.queue)),
        (r = at()),
        (i = {
            state: t,
            dispatch: null,
            action: e,
            pending: null,
        }),
        (r.queue = i),
        (n = ab.bind(null, iW, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
    );
}
function aC(e) {
    return aN(an(), iK, e);
}
function aN(e, t, n) {
    if (((t = ac(e, t, aT)[0]), (e = al(as)[0]), "object" == typeof t && null !== t && "function" == typeof t.then))
        try {
            var r = ai(t);
        } catch (e) {
            if (e === iE) throw iy;
            throw e;
        }
    else r = t;
    var i = (t = an()).queue,
        a = i.dispatch;
    return n !== t.memoizedState && ((iW.flags |= 2048), aw(9, aD(), aP.bind(null, i, n), null)), [r, a, e];
}
function aP(e, t) {
    e.action = t;
}
function aR(e) {
    var t = an(),
        n = iK;
    if (null !== n) return aN(t, n, e);
    an(), (t = t.memoizedState);
    var r = (n = an()).queue.dispatch;
    return (n.memoizedState = e), [t, r, !1];
}
function aw(e, t, n, r) {
    return (
        (e = {
            tag: e,
            create: n,
            deps: r,
            inst: t,
            next: null,
        }),
        null === (t = iW.updateQueue) && ((t = ar()), (iW.updateQueue = t)),
        null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function aD() {
    return {
        destroy: void 0,
        resource: void 0,
    };
}
function ax() {
    return an().memoizedState;
}
function aL(e, t, n, r) {
    var i = at();
    (r = void 0 === r ? null : r), (iW.flags |= e), (i.memoizedState = aw(1 | t, aD(), n, r));
}
function aj(e, t, n, r) {
    var i = an();
    r = void 0 === r ? null : r;
    var a = i.memoizedState.inst;
    null !== iK && null !== r && i2(r, iK.memoizedState.deps)
        ? (i.memoizedState = aw(t, a, n, r))
        : ((iW.flags |= e), (i.memoizedState = aw(1 | t, a, n, r)));
}
function aM(e, t) {
    aL(8390656, 8, e, t);
}
function ak(e, t) {
    aj(2048, 8, e, t);
}
function aU(e, t) {
    return aj(4, 2, e, t);
}
function aG(e, t) {
    return aj(4, 4, e, t);
}
function aZ(e, t) {
    if ("function" == typeof t) {
        var n = t((e = e()));
        return function () {
            "function" == typeof n ? n() : t(null);
        };
    }
    if (null != t)
        return (
            (t.current = e = e()),
            function () {
                t.current = null;
            }
        );
}
function aB(e, t, n) {
    (n = null != n ? n.concat([e]) : null), aj(4, 4, aZ.bind(null, t, e), n);
}
function aF() {}
function aV(e, t) {
    var n = an();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== t && i2(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function aH(e, t) {
    var n = an();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    if (null !== t && i2(t, r[1])) return r[0];
    if (((r = e()), iQ)) {
        em(!0);
        try {
            e();
        } finally {
            em(!1);
        }
    }
    return (n.memoizedState = [r, t]), r;
}
function aY(e, t, n) {
    return void 0 === n || 0 != (1073741824 & iY)
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = lC()), (iW.lanes |= e), (la |= e), n);
}
function aW(e, t, n, r) {
    return nU(n, t)
        ? n
        : null !== iZ.current
          ? (nU((e = aY(e, n, r)), t) || (oM = !0), e)
          : 0 == (42 & iY)
            ? ((oM = !0), (e.memoizedState = n))
            : ((e = lC()), (iW.lanes |= e), (la |= e), t);
}
function aK(e, t, n, r, i) {
    var a = U.p;
    U.p = 0 !== a && 8 > a ? a : 8;
    var o = k.T,
        s = {};
    (k.T = s), a5(e, !1, t, n);
    try {
        var l = i(),
            c = k.S;
        if ((null !== c && c(s, l), null !== l && "object" == typeof l && "function" == typeof l.then)) {
            var u = id(l, r);
            a4(e, t, u, lA(e));
        } else a4(e, t, r, lA(e));
    } catch (n) {
        a4(
            e,
            t,
            {
                then: function () {},
                status: "rejected",
                reason: n,
            },
            lA(),
        );
    } finally {
        (U.p = a), (k.T = o);
    }
}
function az() {}
function aq(e, t, n, r) {
    if (5 !== e.tag) throw Error(l(476));
    var i = aX(e).queue;
    aK(
        e,
        i,
        t,
        G,
        null === n
            ? az
            : function () {
                  return aQ(e), n(r);
              },
    );
}
function aX(e) {
    var t = e.memoizedState;
    if (null !== t) return t;
    var n = {};
    return (
        ((t = {
            memoizedState: G,
            baseState: G,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: as,
                lastRenderedState: G,
            },
            next: null,
        }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: as,
                lastRenderedState: n,
            },
            next: null,
        }),
        (e.memoizedState = t),
        null !== (e = e.alternate) && (e.memoizedState = t),
        t
    );
}
function aQ(e) {
    var t = aX(e).next.queue;
    a4(e, t, {}, lA());
}
function aJ() {
    return r5(uZ);
}
function a$() {
    return an().memoizedState;
}
function a0() {
    return an().memoizedState;
}
function a1(e) {
    for (var t = e.return; null !== t; ) {
        switch (t.tag) {
            case 24:
            case 3:
                var n = lA(),
                    r = iD(t, (e = iw(n)), n);
                null !== r && (lN(r, t, n), ix(r, t, n)), (t = { cache: ir() }), (e.payload = t);
                return;
        }
        t = t.return;
    }
}
function a3(e, t, n) {
    var r = lA();
    (n = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
    }),
        a8(e) ? a6(t, n) : null !== (n = rc(e, t, n, r)) && (lN(n, e, r), a7(n, t, r));
}
function a2(e, t, n) {
    a4(e, t, n, lA());
}
function a4(e, t, n, r) {
    var i = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
    };
    if (a8(e)) a6(t, i);
    else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    s = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), nU(s, o)))
                    return rl(e, t, i, 0), null === s5 && rs(), !1;
            } catch (e) {
            } finally {
            }
        if (null !== (n = rc(e, t, i, r))) return lN(n, e, r), a7(n, t, r), !0;
    }
    return !1;
}
function a5(e, t, n, r) {
    if (
        ((r = {
            lane: 2,
            revertLane: c_(),
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        a8(e))
    ) {
        if (t) throw Error(l(479));
    } else null !== (t = rc(e, n, r, 2)) && lN(t, e, 2);
}
function a8(e) {
    var t = e.alternate;
    return e === iW || (null !== t && t === iW);
}
function a6(e, t) {
    iX = iq = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function a7(e, t, n) {
    if (0 != (4194048 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (t.lanes = n |= r), eD(e, n);
    }
}
var a9 = {
        readContext: r5,
        use: aa,
        useCallback: i3,
        useContext: i3,
        useEffect: i3,
        useImperativeHandle: i3,
        useLayoutEffect: i3,
        useInsertionEffect: i3,
        useMemo: i3,
        useReducer: i3,
        useRef: i3,
        useState: i3,
        useDebugValue: i3,
        useDeferredValue: i3,
        useTransition: i3,
        useSyncExternalStore: i3,
        useId: i3,
        useHostTransitionStatus: i3,
        useFormState: i3,
        useActionState: i3,
        useOptimistic: i3,
        useMemoCache: i3,
        useCacheRefresh: i3,
    },
    oe = {
        readContext: r5,
        use: aa,
        useCallback: function (e, t) {
            return (at().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: r5,
        useEffect: aM,
        useImperativeHandle: function (e, t, n) {
            (n = null != n ? n.concat([e]) : null), aL(4194308, 4, aZ.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return aL(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            aL(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = at();
            t = void 0 === t ? null : t;
            var r = e();
            if (iQ) {
                em(!0);
                try {
                    e();
                } finally {
                    em(!1);
                }
            }
            return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
            var r = at();
            if (void 0 !== n) {
                var i = n(t);
                if (iQ) {
                    em(!0);
                    try {
                        n(t);
                    } finally {
                        em(!1);
                    }
                }
            } else i = t;
            return (
                (r.memoizedState = r.baseState = i),
                (r.queue = e =
                    {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: i,
                    }),
                (e = e.dispatch = a3.bind(null, iW, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return (at().memoizedState = e = { current: e });
        },
        useState: function (e) {
            var t = (e = ag(e)).queue,
                n = a2.bind(null, iW, t);
            return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: aF,
        useDeferredValue: function (e, t) {
            return aY(at(), e, t);
        },
        useTransition: function () {
            var e = ag(!1);
            return (e = aK.bind(null, iW, e.queue, !0, !1)), (at().memoizedState = e), [!1, e];
        },
        useSyncExternalStore: function (e, t, n) {
            var r = iW,
                i = at();
            if (rU) {
                if (void 0 === n) throw Error(l(407));
                n = n();
            } else {
                if (((n = t()), null === s5)) throw Error(l(349));
                0 != (124 & s6) || af(r, t, n);
            }
            i.memoizedState = n;
            var a = {
                value: n,
                getSnapshot: t,
            };
            return (
                (i.queue = a),
                aM(a_.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                aw(9, aD(), ap.bind(null, r, a, n, t), null),
                n
            );
        },
        useId: function () {
            var e = at(),
                t = s5.identifierPrefix;
            if (rU) {
                var n = rw,
                    r = rR;
                (t = "\xAB" + t + "R" + (n = (r & ~(1 << (32 - eh(r) - 1))).toString(32) + n)),
                    0 < (n = iJ++) && (t += "H" + n.toString(32)),
                    (t += "\xBB");
            } else t = "\xAB" + t + "r" + (n = i1++).toString(32) + "\xBB";
            return (e.memoizedState = t);
        },
        useHostTransitionStatus: aJ,
        useFormState: aA,
        useActionState: aA,
        useOptimistic: function (e) {
            var t = at();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
            };
            return (t.queue = n), (t = a5.bind(null, iW, !0, n)), (n.dispatch = t), [e, t];
        },
        useMemoCache: ao,
        useCacheRefresh: function () {
            return (at().memoizedState = a1.bind(null, iW));
        },
    },
    ot = {
        readContext: r5,
        use: aa,
        useCallback: aV,
        useContext: r5,
        useEffect: ak,
        useImperativeHandle: aB,
        useInsertionEffect: aU,
        useLayoutEffect: aG,
        useMemo: aH,
        useReducer: al,
        useRef: ax,
        useState: function () {
            return al(as);
        },
        useDebugValue: aF,
        useDeferredValue: function (e, t) {
            return aW(an(), iK.memoizedState, e, t);
        },
        useTransition: function () {
            var e = al(as)[0],
                t = an().memoizedState;
            return ["boolean" == typeof e ? e : ai(e), t];
        },
        useSyncExternalStore: ad,
        useId: a$,
        useHostTransitionStatus: aJ,
        useFormState: aC,
        useActionState: aC,
        useOptimistic: function (e, t) {
            return aE(an(), iK, e, t);
        },
        useMemoCache: ao,
        useCacheRefresh: a0,
    },
    on = {
        readContext: r5,
        use: aa,
        useCallback: aV,
        useContext: r5,
        useEffect: ak,
        useImperativeHandle: aB,
        useInsertionEffect: aU,
        useLayoutEffect: aG,
        useMemo: aH,
        useReducer: au,
        useRef: ax,
        useState: function () {
            return au(as);
        },
        useDebugValue: aF,
        useDeferredValue: function (e, t) {
            var n = an();
            return null === iK ? aY(n, e, t) : aW(n, iK.memoizedState, e, t);
        },
        useTransition: function () {
            var e = au(as)[0],
                t = an().memoizedState;
            return ["boolean" == typeof e ? e : ai(e), t];
        },
        useSyncExternalStore: ad,
        useId: a$,
        useHostTransitionStatus: aJ,
        useFormState: aR,
        useActionState: aR,
        useOptimistic: function (e, t) {
            var n = an();
            return null !== iK ? aE(n, iK, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: ao,
        useCacheRefresh: a0,
    },
    or = null,
    oi = 0;
function oa(e) {
    var t = oi;
    return (oi += 1), null === or && (or = []), iI(or, e, t);
}
function oo(e, t) {
    e.ref = void 0 !== (t = t.props.ref) ? t : null;
}
function os(e, t) {
    if (t.$$typeof === h) throw Error(l(525));
    throw Error(
        l(
            31,
            "[object Object]" === (e = Object.prototype.toString.call(t))
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
        ),
    );
}
function ol(e) {
    return (0, e._init)(e._payload);
}
function oc(e) {
    function t(t, n) {
        if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
    }
    function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
    }
    function r(e) {
        for (var t = new Map(); null !== e; ) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
        return t;
    }
    function i(e, t) {
        return ((e = rg(e, t)).index = 0), (e.sibling = null), e;
    }
    function a(t, n, r) {
        return ((t.index = r), e)
            ? null !== (r = t.alternate)
                ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                : ((t.flags |= 67108866), n)
            : ((t.flags |= 1048576), n);
    }
    function o(t) {
        return e && null === t.alternate && (t.flags |= 67108866), t;
    }
    function s(e, t, n, r) {
        return null === t || 6 !== t.tag ? ((t = rO(n, e.mode, r)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function c(e, t, n, r) {
        var a = n.type;
        return a === b
            ? d(e, t, n.props.children, r, n.key)
            : (null !== t &&
              (t.elementType === a || ("object" == typeof a && null !== a && a.$$typeof === P && ol(a) === t.type))
                  ? oo((t = i(t, n.props)), n)
                  : oo((t = rb(n.type, n.key, n.props, null, e.mode, r)), n),
              (t.return = e),
              t);
    }
    function u(e, t, n, r) {
        return (
            null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
                ? ((t = rv(n, e.mode, r)).return = e)
                : ((t = i(t, n.children || [])).return = e),
            t
        );
    }
    function d(e, t, n, r, a) {
        return null === t || 7 !== t.tag ? ((t = ry(n, e.mode, r, a)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function f(e, t, n) {
        if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
            return ((t = rO("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case g:
                    return oo((n = rb(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n;
                case E:
                    return ((t = rv(t, e.mode, n)).return = e), t;
                case P:
                    return f(e, (t = (0, t._init)(t._payload)), n);
            }
            if (M(t) || x(t)) return ((t = ry(t, e.mode, n, null)).return = e), t;
            if ("function" == typeof t.then) return f(e, oa(t), n);
            if (t.$$typeof === I) return f(e, r8(e, t), n);
            os(e, t);
        }
        return null;
    }
    function p(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (("string" == typeof n && "" !== n) || "number" == typeof n || "bigint" == typeof n)
            return null !== i ? null : s(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case g:
                    return n.key === i ? c(e, t, n, r) : null;
                case E:
                    return n.key === i ? u(e, t, n, r) : null;
                case P:
                    return p(e, t, (n = (i = n._init)(n._payload)), r);
            }
            if (M(n) || x(n)) return null !== i ? null : d(e, t, n, r, null);
            if ("function" == typeof n.then) return p(e, t, oa(n), r);
            if (n.$$typeof === I) return p(e, t, r8(e, n), r);
            os(e, n);
        }
        return null;
    }
    function _(e, t, n, r, i) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r)
            return s(t, (e = e.get(n) || null), "" + r, i);
        if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case g:
                    return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case E:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case P:
                    return _(e, t, n, (r = (0, r._init)(r._payload)), i);
            }
            if (M(r) || x(r)) return d(t, (e = e.get(n) || null), r, i, null);
            if ("function" == typeof r.then) return _(e, t, n, oa(r), i);
            if (r.$$typeof === I) return _(e, t, n, r8(t, r), i);
            os(t, r);
        }
        return null;
    }
    function m(i, o, s, l) {
        for (var c = null, u = null, d = o, m = (o = 0), h = null; null !== d && m < s.length; m++) {
            d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
            var g = p(i, d, s[m], l);
            if (null === g) {
                null === d && (d = h);
                break;
            }
            e && d && null === g.alternate && t(i, d),
                (o = a(g, o, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g),
                (d = h);
        }
        if (m === s.length) return n(i, d), rU && rD(i, m), c;
        if (null === d) {
            for (; m < s.length; m++)
                null !== (d = f(i, s[m], l)) && ((o = a(d, o, m)), null === u ? (c = d) : (u.sibling = d), (u = d));
            return rU && rD(i, m), c;
        }
        for (d = r(d); m < s.length; m++)
            null !== (h = _(d, i, m, s[m], l)) &&
                (e && null !== h.alternate && d.delete(null === h.key ? m : h.key),
                (o = a(h, o, m)),
                null === u ? (c = h) : (u.sibling = h),
                (u = h));
        return (
            e &&
                d.forEach(function (e) {
                    return t(i, e);
                }),
            rU && rD(i, m),
            c
        );
    }
    function h(i, o, s, c) {
        if (null == s) throw Error(l(151));
        for (
            var u = null, d = null, m = o, h = (o = 0), g = null, E = s.next();
            null !== m && !E.done;
            h++, E = s.next()
        ) {
            m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
            var b = p(i, m, E.value, c);
            if (null === b) {
                null === m && (m = g);
                break;
            }
            e && m && null === b.alternate && t(i, m),
                (o = a(b, o, h)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b),
                (m = g);
        }
        if (E.done) return n(i, m), rU && rD(i, h), u;
        if (null === m) {
            for (; !E.done; h++, E = s.next())
                null !== (E = f(i, E.value, c)) && ((o = a(E, o, h)), null === d ? (u = E) : (d.sibling = E), (d = E));
            return rU && rD(i, h), u;
        }
        for (m = r(m); !E.done; h++, E = s.next())
            null !== (E = _(m, i, h, E.value, c)) &&
                (e && null !== E.alternate && m.delete(null === E.key ? h : E.key),
                (o = a(E, o, h)),
                null === d ? (u = E) : (d.sibling = E),
                (d = E));
        return (
            e &&
                m.forEach(function (e) {
                    return t(i, e);
                }),
            rU && rD(i, h),
            u
        );
    }
    function y(e, r, a, s) {
        if (
            ("object" == typeof a && null !== a && a.type === b && null === a.key && (a = a.props.children),
            "object" == typeof a && null !== a)
        ) {
            switch (a.$$typeof) {
                case g:
                    e: {
                        for (var c = a.key; null !== r; ) {
                            if (r.key === c) {
                                if ((c = a.type) === b) {
                                    if (7 === r.tag) {
                                        n(e, r.sibling), ((s = i(r, a.props.children)).return = e), (e = s);
                                        break e;
                                    }
                                } else if (
                                    r.elementType === c ||
                                    ("object" == typeof c && null !== c && c.$$typeof === P && ol(c) === r.type)
                                ) {
                                    n(e, r.sibling), oo((s = i(r, a.props)), a), (s.return = e), (e = s);
                                    break e;
                                }
                                n(e, r);
                                break;
                            }
                            t(e, r), (r = r.sibling);
                        }
                        a.type === b
                            ? ((s = ry(a.props.children, e.mode, s, a.key)).return = e)
                            : (oo((s = rb(a.type, a.key, a.props, null, e.mode, s)), a), (s.return = e)),
                            (e = s);
                    }
                    return o(e);
                case E:
                    e: {
                        for (c = a.key; null !== r; ) {
                            if (r.key === c)
                                if (
                                    4 === r.tag &&
                                    r.stateNode.containerInfo === a.containerInfo &&
                                    r.stateNode.implementation === a.implementation
                                ) {
                                    n(e, r.sibling), ((s = i(r, a.children || [])).return = e), (e = s);
                                    break e;
                                } else {
                                    n(e, r);
                                    break;
                                }
                            t(e, r), (r = r.sibling);
                        }
                        ((s = rv(a, e.mode, s)).return = e), (e = s);
                    }
                    return o(e);
                case P:
                    return y(e, r, (a = (c = a._init)(a._payload)), s);
            }
            if (M(a)) return m(e, r, a, s);
            if (x(a)) {
                if ("function" != typeof (c = x(a))) throw Error(l(150));
                return h(e, r, (a = c.call(a)), s);
            }
            if ("function" == typeof a.then) return y(e, r, oa(a), s);
            if (a.$$typeof === I) return y(e, r, r8(e, a), s);
            os(e, a);
        }
        return ("string" == typeof a && "" !== a) || "number" == typeof a || "bigint" == typeof a
            ? ((a = "" + a),
              null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((s = i(r, a)).return = e))
                  : (n(e, r), ((s = rO(a, e.mode, s)).return = e)),
              o((e = s)))
            : n(e, r);
    }
    return function (e, t, n, r) {
        try {
            oi = 0;
            var i = y(e, t, n, r);
            return (or = null), i;
        } catch (t) {
            if (t === iE || t === iy) throw t;
            var a = rm(29, t, null, e.mode);
            return (a.lanes = r), (a.return = e), a;
        } finally {
        }
    };
}
var ou = oc(!0),
    od = oc(!1),
    of = F(null),
    op = null;
function o_(e) {
    var t = e.alternate;
    H(oE, 1 & oE.current),
        H(of, e),
        null === op && (null === t || null !== iZ.current ? (op = e) : null !== t.memoizedState && (op = e));
}
function om(e) {
    if (22 === e.tag) {
        if ((H(oE, oE.current), H(of, e), null === op)) {
            var t = e.alternate;
            null !== t && null !== t.memoizedState && (op = e);
        }
    } else oh(e);
}
function oh() {
    H(oE, oE.current), H(of, of.current);
}
function og(e) {
    V(of), op === e && (op = null), V(oE);
}
var oE = F(0);
function ob(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || c8(n))) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
function oy(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : m({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var oO = {
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = lA(),
            i = iw(r);
        (i.payload = t), null != n && (i.callback = n), null !== (t = iD(e, i, r)) && (lN(t, e, r), ix(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = lA(),
            i = iw(r);
        (i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = iD(e, i, r)) && (lN(t, e, r), ix(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = lA(),
            r = iw(n);
        (r.tag = 2), null != t && (r.callback = t), null !== (t = iD(e, r, n)) && (lN(t, e, n), ix(t, e, n));
    },
};
function ov(e, t, n, r, i, a, o) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !nG(n, r) || !nG(i, a);
}
function oS(e, t, n, r) {
    (e = t.state),
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && oO.enqueueReplaceState(t, t.state, null);
}
function oI(e, t) {
    var n = t;
    if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
    if ((e = e.defaultProps)) for (var i in (n === t && (n = m({}, n)), e)) void 0 === n[i] && (n[i] = e[i]);
    return n;
}
var oT =
    "function" == typeof reportError
        ? reportError
        : function (e) {
              if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                  var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                          "object" == typeof e && null !== e && "string" == typeof e.message
                              ? String(e.message)
                              : String(e),
                      error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
              } else if ("object" == typeof i && "function" == typeof i.emit)
                  return void i.emit("uncaughtException", e);
              console.error(e);
          };
function oA(e) {
    oT(e);
}
function oC(e) {
    console.error(e);
}
function oN(e) {
    oT(e);
}
function oP(e, t) {
    try {
        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function oR(e, t, n) {
    try {
        (0, e.onCaughtError)(n.value, {
            componentStack: n.stack,
            errorBoundary: 1 === t.tag ? t.stateNode : null,
        });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function ow(e, t, n) {
    return (
        ((n = iw(n)).tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
            oP(e, t);
        }),
        n
    );
}
function oD(e) {
    return ((e = iw(e)).tag = 3), e;
}
function ox(e, t, n, r) {
    var i = n.type.getDerivedStateFromError;
    if ("function" == typeof i) {
        var a = r.value;
        (e.payload = function () {
            return i(a);
        }),
            (e.callback = function () {
                oR(t, n, r);
            });
    }
    var o = n.stateNode;
    null !== o &&
        "function" == typeof o.componentDidCatch &&
        (e.callback = function () {
            oR(t, n, r), "function" != typeof i && (null === lh ? (lh = new Set([this])) : lh.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
        });
}
function oL(e, t, n, r, i) {
    if (((n.flags |= 32768), null !== r && "object" == typeof r && "function" == typeof r.then)) {
        if ((null !== (t = n.alternate) && r3(t, n, i, !0), null !== (n = of.current))) {
            switch (n.tag) {
                case 13:
                    return (
                        null === op ? lG() : null === n.alternate && 0 === li && (li = 3),
                        (n.flags &= -257),
                        (n.flags |= 65536),
                        (n.lanes = i),
                        r === iO
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r), l4(e, r, i)),
                        !1
                    );
                case 22:
                    return (
                        (n.flags |= 65536),
                        r === iO
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                  ? ((t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([r]),
                                    }),
                                    (n.updateQueue = t))
                                  : null === (n = t.retryQueue)
                                    ? (t.retryQueue = new Set([r]))
                                    : n.add(r),
                              l4(e, r, i)),
                        !1
                    );
            }
            throw Error(l(435, n.tag));
        }
        return l4(e, r, i), lG(), !1;
    }
    if (rU)
        return (
            null !== (t = of.current)
                ? (0 == (65536 & t.flags) && (t.flags |= 256),
                  (t.flags |= 65536),
                  (t.lanes = i),
                  r !== rB && rz(rr((e = Error(l(422), { cause: r })), n)))
                : (r !== rB && rz(rr((t = Error(l(423), { cause: r })), n)),
                  (e = e.current.alternate),
                  (e.flags |= 65536),
                  (i &= -i),
                  (e.lanes |= i),
                  (r = rr(r, n)),
                  (i = ow(e.stateNode, r, i)),
                  iL(e, i),
                  4 !== li && (li = 2)),
            !1
        );
    var a = Error(l(520), { cause: r });
    if (((a = rr(a, n)), null === lu ? (lu = [a]) : lu.push(a), 4 !== li && (li = 2), null === t)) return !0;
    (r = rr(r, n)), (n = t);
    do {
        switch (n.tag) {
            case 3:
                return (n.flags |= 65536), (e = i & -i), (n.lanes |= e), (e = ow(n.stateNode, r, e)), iL(n, e), !1;
            case 1:
                if (
                    ((t = n.type),
                    (a = n.stateNode),
                    0 == (128 & n.flags) &&
                        ("function" == typeof t.getDerivedStateFromError ||
                            (null !== a && "function" == typeof a.componentDidCatch && (null === lh || !lh.has(a)))))
                )
                    return (n.flags |= 65536), (i &= -i), (n.lanes |= i), ox((i = oD(i)), e, n, r), iL(n, i), !1;
        }
        n = n.return;
    } while (null !== n);
    return !1;
}
var oj = Error(l(461)),
    oM = !1;
function ok(e, t, n, r) {
    t.child = null === e ? od(t, null, n, r) : ou(t, e.child, n, r);
}
function oU(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    if ("ref" in r) {
        var o = {};
        for (var s in r) "ref" !== s && (o[s] = r[s]);
    } else o = r;
    return (r4(t), (r = i4(e, t, n, o, a, i)), (s = i7()), null === e || oM)
        ? (rU && s && rL(t), (t.flags |= 1), ok(e, t, r, i), t.child)
        : (i9(e, t, i), o4(e, t, i));
}
function oG(e, t, n, r, i) {
    if (null === e) {
        var a = n.type;
        return "function" != typeof a || rh(a) || void 0 !== a.defaultProps || null !== n.compare
            ? (((e = rb(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = a), oZ(e, t, a, r, i));
    }
    if (((a = e.child), !o5(e, i))) {
        var o = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nG)(o, r) && e.ref === t.ref) return o4(e, t, i);
    }
    return (t.flags |= 1), ((e = rg(a, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function oZ(e, t, n, r, i) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (nG(a, r) && e.ref === t.ref)
            if (((oM = !1), (t.pendingProps = r = a), !o5(e, i))) return (t.lanes = e.lanes), o4(e, t, i);
            else 0 != (131072 & e.flags) && (oM = !0);
    }
    return oH(e, t, n, r, i);
}
function oB(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        a = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode) {
        if (0 != (128 & t.flags)) {
            if (((r = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (a = 0, i = t.child = e.child; null !== i; ) (a = a | i.lanes | i.childLanes), (i = i.sibling);
                t.childLanes = a & ~r;
            } else (t.childLanes = 0), (t.child = null);
            return oF(e, t, r, n);
        }
        if (0 == (536870912 & n))
            return (t.lanes = t.childLanes = 536870912), oF(e, t, null !== a ? a.baseLanes | n : n, n);
        (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
        }),
            null !== e && ih(t, null !== a ? a.cachePool : null),
            null !== a ? iF(t, a) : iV(),
            om(t);
    } else
        null !== a
            ? (ih(t, a.cachePool), iF(t, a), oh(t), (t.memoizedState = null))
            : (null !== e && ih(t, null), iV(), oh(t));
    return ok(e, t, i, n), t.child;
}
function oF(e, t, n, r) {
    var i = im();
    return (
        (t.memoizedState = {
            baseLanes: n,
            cachePool: (i =
                null === i
                    ? null
                    : {
                          parent: it._currentValue,
                          pool: i,
                      }),
        }),
        null !== e && ih(t, null),
        iV(),
        om(t),
        null !== e && r3(e, t, r, !0),
        null
    );
}
function oV(e, t) {
    var n = t.ref;
    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
    else {
        if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
        (null === e || e.ref !== n) && (t.flags |= 4194816);
    }
}
function oH(e, t, n, r, i) {
    return (r4(t), (n = i4(e, t, n, r, void 0, i)), (r = i7()), null === e || oM)
        ? (rU && r && rL(t), (t.flags |= 1), ok(e, t, n, i), t.child)
        : (i9(e, t, i), o4(e, t, i));
}
function oY(e, t, n, r, i, a) {
    return (r4(t), (t.updateQueue = null), (n = i8(t, r, n, i)), i5(e), (r = i7()), null === e || oM)
        ? (rU && r && rL(t), (t.flags |= 1), ok(e, t, n, a), t.child)
        : (i9(e, t, a), o4(e, t, a));
}
function oW(e, t, n, r, i) {
    if ((r4(t), null === t.stateNode)) {
        var a = rp,
            o = n.contextType;
        "object" == typeof o && null !== o && (a = r5(o)),
            (t.memoizedState = null !== (a = new n(r, a)).state && void 0 !== a.state ? a.state : null),
            (a.updater = oO),
            (t.stateNode = a),
            (a._reactInternals = t),
            ((a = t.stateNode).props = r),
            (a.state = t.memoizedState),
            (a.refs = {}),
            iP(t),
            (o = n.contextType),
            (a.context = "object" == typeof o && null !== o ? r5(o) : rp),
            (a.state = t.memoizedState),
            "function" == typeof (o = n.getDerivedStateFromProps) && (oy(t, n, o, r), (a.state = t.memoizedState)),
            "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount) ||
                ((o = a.state),
                "function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                o !== a.state && oO.enqueueReplaceState(a, a.state, null),
                ik(t, r, a, i),
                iM(),
                (a.state = t.memoizedState)),
            "function" == typeof a.componentDidMount && (t.flags |= 4194308),
            (r = !0);
    } else if (null === e) {
        a = t.stateNode;
        var s = t.memoizedProps,
            l = oI(n, s);
        a.props = l;
        var c = a.context,
            u = n.contextType;
        (o = rp), "object" == typeof u && null !== u && (o = r5(u));
        var d = n.getDerivedStateFromProps;
        (u = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate),
            (s = t.pendingProps !== s),
            u ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                ((s || c !== o) && oS(t, a, r, o)),
            (iN = !1);
        var f = t.memoizedState;
        (a.state = f),
            ik(t, r, a, i),
            iM(),
            (c = t.memoizedState),
            s || f !== c || iN
                ? ("function" == typeof d && (oy(t, n, d, r), (c = t.memoizedState)),
                  (l = iN || ov(t, n, l, r, f, c, o))
                      ? (u ||
                            ("function" != typeof a.UNSAFE_componentWillMount &&
                                "function" != typeof a.componentWillMount) ||
                            ("function" == typeof a.componentWillMount && a.componentWillMount(),
                            "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                        "function" == typeof a.componentDidMount && (t.flags |= 4194308))
                      : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = c)),
                  (a.props = r),
                  (a.state = c),
                  (a.context = o),
                  (r = l))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1));
    } else {
        (a = t.stateNode),
            iR(e, t),
            (u = oI(n, (o = t.memoizedProps))),
            (a.props = u),
            (d = t.pendingProps),
            (f = a.context),
            (c = n.contextType),
            (l = rp),
            "object" == typeof c && null !== c && (l = r5(c)),
            (c =
                "function" == typeof (s = n.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                ((o !== d || f !== l) && oS(t, a, r, l)),
            (iN = !1),
            (f = t.memoizedState),
            (a.state = f),
            ik(t, r, a, i),
            iM();
        var p = t.memoizedState;
        o !== d || f !== p || iN || (null !== e && null !== e.dependencies && r2(e.dependencies))
            ? ("function" == typeof s && (oy(t, n, s, r), (p = t.memoizedState)),
              (u = iN || ov(t, n, u, r, f, p, l) || (null !== e && null !== e.dependencies && r2(e.dependencies)))
                  ? (c ||
                        ("function" != typeof a.UNSAFE_componentWillUpdate &&
                            "function" != typeof a.componentWillUpdate) ||
                        ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, l),
                        "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ("function" != typeof a.componentDidUpdate ||
                        (o === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                        (o === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
              (a.props = r),
              (a.state = p),
              (a.context = l),
              (r = u))
            : ("function" != typeof a.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
              "function" != typeof a.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return (
        (a = r),
        oV(e, t),
        (r = 0 != (128 & t.flags)),
        a || r
            ? ((a = t.stateNode),
              (n = r && "function" != typeof n.getDerivedStateFromError ? null : a.render()),
              (t.flags |= 1),
              null !== e && r ? ((t.child = ou(t, e.child, null, i)), (t.child = ou(t, null, n, i))) : ok(e, t, n, i),
              (t.memoizedState = a.state),
              (e = t.child))
            : (e = o4(e, t, i)),
        e
    );
}
function oK(e, t, n, r) {
    return rW(), (t.flags |= 256), ok(e, t, n, r), t.child;
}
var oz = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
};
function oq(e) {
    return {
        baseLanes: e,
        cachePool: ig(),
    };
}
function oX(e, t, n) {
    return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= ll), e;
}
function oQ(e, t, n) {
    var r,
        i = t.pendingProps,
        a = !1,
        o = 0 != (128 & t.flags);
    if (
        ((r = o) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & oE.current)),
        r && ((a = !0), (t.flags &= -129)),
        (r = 0 != (32 & t.flags)),
        (t.flags &= -33),
        null === e)
    ) {
        if (rU) {
            if ((a ? o_(t) : oh(t), rU)) {
                var s,
                    c = rk;
                if ((s = c)) {
                    o: {
                        for (s = c, c = rZ; 8 !== s.nodeType; )
                            if (!c || null === (s = c7(s.nextSibling))) {
                                c = null;
                                break o;
                            }
                        c = s;
                    }
                    null !== c
                        ? ((t.memoizedState = {
                              dehydrated: c,
                              treeContext:
                                  null !== rP
                                      ? {
                                            id: rR,
                                            overflow: rw,
                                        }
                                      : null,
                              retryLane: 536870912,
                              hydrationErrors: null,
                          }),
                          ((s = rm(18, null, null, 0)).stateNode = c),
                          (s.return = t),
                          (t.child = s),
                          (rM = t),
                          (rk = null),
                          (s = !0))
                        : (s = !1);
                }
                s || rF(t);
            }
            if (null !== (c = t.memoizedState) && null !== (c = c.dehydrated))
                return c8(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
            og(t);
        }
        return ((c = i.children), (i = i.fallback), a)
            ? (oh(t),
              (c = o$(
                  {
                      mode: "hidden",
                      children: c,
                  },
                  (a = t.mode),
              )),
              (i = ry(i, a, n, null)),
              (c.return = t),
              (i.return = t),
              (c.sibling = i),
              (t.child = c),
              ((a = t.child).memoizedState = oq(n)),
              (a.childLanes = oX(e, r, n)),
              (t.memoizedState = oz),
              i)
            : (o_(t), oJ(t, c));
    }
    if (null !== (s = e.memoizedState) && null !== (c = s.dehydrated)) {
        if (o)
            256 & t.flags
                ? (o_(t), (t.flags &= -257), (t = o0(e, t, n)))
                : null !== t.memoizedState
                  ? (oh(t), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (oh(t),
                    (a = i.fallback),
                    (c = t.mode),
                    (i = o$(
                        {
                            mode: "visible",
                            children: i.children,
                        },
                        c,
                    )),
                    (a = ry(a, c, n, null)),
                    (a.flags |= 2),
                    (i.return = t),
                    (a.return = t),
                    (i.sibling = a),
                    (t.child = i),
                    ou(t, e.child, null, n),
                    ((i = t.child).memoizedState = oq(n)),
                    (i.childLanes = oX(e, r, n)),
                    (t.memoizedState = oz),
                    (t = a));
        else if ((o_(t), c8(c))) {
            if ((r = c.nextSibling && c.nextSibling.dataset)) var u = r.dgst;
            (r = u),
                ((i = Error(l(419))).stack = ""),
                (i.digest = r),
                rz({
                    value: i,
                    source: null,
                    stack: null,
                }),
                (t = o0(e, t, n));
        } else if ((oM || r3(e, t, n, !1), (r = 0 != (n & e.childLanes)), oM || r)) {
            if (
                null !== (r = s5) &&
                0 !== (i = 0 != ((i = 0 != (42 & (i = n & -n)) ? 1 : ex(i)) & (r.suspendedLanes | n)) ? 0 : i) &&
                i !== s.retryLane
            )
                throw ((s.retryLane = i), ru(e, i), lN(r, e, i), oj);
            "$?" === c.data || lG(), (t = o0(e, t, n));
        } else
            "$?" === c.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = s.treeContext),
                  (rk = c7(c.nextSibling)),
                  (rM = t),
                  (rU = !0),
                  (rG = null),
                  (rZ = !1),
                  null !== e &&
                      ((rC[rN++] = rR), (rC[rN++] = rw), (rC[rN++] = rP), (rR = e.id), (rw = e.overflow), (rP = t)),
                  (t = oJ(t, i.children)),
                  (t.flags |= 4096));
        return t;
    }
    return a
        ? (oh(t),
          (a = i.fallback),
          (c = t.mode),
          (u = (s = e.child).sibling),
          ((i = rg(s, {
              mode: "hidden",
              children: i.children,
          })).subtreeFlags = 65011712 & s.subtreeFlags),
          null !== u ? (a = rg(u, a)) : ((a = ry(a, c, n, null)), (a.flags |= 2)),
          (a.return = t),
          (i.return = t),
          (i.sibling = a),
          (t.child = i),
          (i = a),
          (a = t.child),
          null === (c = e.child.memoizedState)
              ? (c = oq(n))
              : (null !== (s = c.cachePool)
                    ? ((u = it._currentValue),
                      (s =
                          s.parent !== u
                              ? {
                                    parent: u,
                                    pool: u,
                                }
                              : s))
                    : (s = ig()),
                (c = {
                    baseLanes: c.baseLanes | n,
                    cachePool: s,
                })),
          (a.memoizedState = c),
          (a.childLanes = oX(e, r, n)),
          (t.memoizedState = oz),
          i)
        : (o_(t),
          (e = (n = e.child).sibling),
          ((n = rg(n, {
              mode: "visible",
              children: i.children,
          })).return = t),
          (n.sibling = null),
          null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
}
function oJ(e, t) {
    return (
        ((t = o$(
            {
                mode: "visible",
                children: t,
            },
            e.mode,
        )).return = e),
        (e.child = t)
    );
}
function o$(e, t) {
    return (
        ((e = rm(22, e, null, t)).lanes = 0),
        (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
        }),
        e
    );
}
function o0(e, t, n) {
    return ou(t, e.child, null, n), (e = oJ(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function o1(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), r0(e.return, t, n);
}
function o3(e, t, n, r, i) {
    var a = e.memoizedState;
    null === a
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
}
function o2(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
    if ((ok(e, t, r.children, n), 0 != (2 & (r = oE.current)))) (r = (1 & r) | 2), (t.flags |= 128);
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && o1(e, n, t);
                else if (19 === e.tag) o1(e, n, t);
                else if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break;
                for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    switch ((H(oE, r), i)) {
        case "forwards":
            for (i = null, n = t.child; null !== n; )
                null !== (e = n.alternate) && null === ob(e) && (i = n), (n = n.sibling);
            null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                o3(t, !1, i, n, a);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === ob(e)) {
                    t.child = i;
                    break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
            }
            o3(t, !0, n, null, a);
            break;
        case "together":
            o3(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null;
    }
    return t.child;
}
function o4(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (la |= t.lanes), 0 == (n & t.childLanes))) {
        if (null === e) return null;
        else if ((r3(e, t, n, !1), 0 == (n & t.childLanes))) return null;
    }
    if (null !== e && t.child !== e.child) throw Error(l(153));
    if (null !== t.child) {
        for (n = rg((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = rg(e, e.pendingProps)).return = t);
        n.sibling = null;
    }
    return t.child;
}
function o5(e, t) {
    return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && r2(e));
}
function o8(e, t, n) {
    switch (t.tag) {
        case 3:
            q(t, t.stateNode.containerInfo), rJ(t, it, e.memoizedState.cache), rW();
            break;
        case 27:
        case 5:
            Q(t);
            break;
        case 4:
            q(t, t.stateNode.containerInfo);
            break;
        case 10:
            rJ(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var r = t.memoizedState;
            if (null !== r) {
                if (null !== r.dehydrated) return o_(t), (t.flags |= 128), null;
                if (0 != (n & t.child.childLanes)) return oQ(e, t, n);
                return o_(t), null !== (e = o4(e, t, n)) ? e.sibling : null;
            }
            o_(t);
            break;
        case 19:
            var i = 0 != (128 & e.flags);
            if (((r = 0 != (n & t.childLanes)) || (r3(e, t, n, !1), (r = 0 != (n & t.childLanes))), i)) {
                if (r) return o2(e, t, n);
                t.flags |= 128;
            }
            if (
                (null !== (i = t.memoizedState) && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                H(oE, oE.current),
                !r)
            )
                return null;
            break;
        case 22:
        case 23:
            return (t.lanes = 0), oB(e, t, n);
        case 24:
            rJ(t, it, e.memoizedState.cache);
    }
    return o4(e, t, n);
}
function o6(e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps) oM = !0;
        else {
            if (!o5(e, n) && 0 == (128 & t.flags)) return (oM = !1), o8(e, t, n);
            oM = 0 != (131072 & e.flags);
        }
    else (oM = !1), rU && 0 != (1048576 & t.flags) && rx(t, rA, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 16:
            e: {
                e = t.pendingProps;
                var r = t.elementType,
                    i = r._init;
                if (((r = i(r._payload)), (t.type = r), "function" == typeof r))
                    rh(r)
                        ? ((e = oI(r, e)), (t.tag = 1), (t = oW(null, t, r, e, n)))
                        : ((t.tag = 0), (t = oH(null, t, r, e, n)));
                else {
                    if (null != r) {
                        if ((i = r.$$typeof) === T) {
                            (t.tag = 11), (t = oU(null, t, r, e, n));
                            break e;
                        } else if (i === N) {
                            (t.tag = 14), (t = oG(null, t, r, e, n));
                            break e;
                        }
                    }
                    throw Error(l(306, (t = j(r) || r), ""));
                }
            }
            return t;
        case 0:
            return oH(e, t, t.type, t.pendingProps, n);
        case 1:
            return (i = oI((r = t.type), t.pendingProps)), oW(e, t, r, i, n);
        case 3:
            e: {
                if ((q(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                (i = a.element), iR(e, t), ik(t, r, null, n);
                var o = t.memoizedState;
                if (
                    (rJ(t, it, (r = o.cache)),
                    r !== a.cache && r1(t, [it], n, !0),
                    iM(),
                    (r = o.element),
                    a.isDehydrated)
                )
                    if (
                        ((a = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                        }),
                        (t.updateQueue.baseState = a),
                        (t.memoizedState = a),
                        256 & t.flags)
                    ) {
                        t = oK(e, t, r, n);
                        break e;
                    } else if (r !== i) {
                        rz((i = rr(Error(l(424)), t))), (t = oK(e, t, r, n));
                        break e;
                    } else
                        for (
                            rk = c7(
                                (e =
                                    9 === (e = t.stateNode.containerInfo).nodeType
                                        ? e.body
                                        : "HTML" === e.nodeName
                                          ? e.ownerDocument.body
                                          : e).firstChild,
                            ),
                                rM = t,
                                rU = !0,
                                rG = null,
                                rZ = !0,
                                n = od(t, null, r, n),
                                t.child = n;
                            n;
                        )
                            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                else {
                    if ((rW(), r === i)) {
                        t = o4(e, t, n);
                        break e;
                    }
                    ok(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 26:
            return (
                oV(e, t),
                null === e
                    ? (n = uh(t.type, null, t.pendingProps, null))
                        ? (t.memoizedState = n)
                        : rU ||
                          ((n = t.type),
                          (e = t.pendingProps),
                          ((r = cH(K.current).createElement(n))[eU] = t),
                          (r[eG] = e),
                          cZ(r, n, e),
                          eQ(r),
                          (t.stateNode = r))
                    : (t.memoizedState = uh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                null
            );
        case 27:
            return (
                Q(t),
                null === e &&
                    rU &&
                    ((r = t.stateNode = ut(t.type, t.pendingProps, K.current)),
                    (rM = t),
                    (rZ = !0),
                    (i = rk),
                    c1(t.type) ? ((c9 = i), (rk = c7(r.firstChild))) : (rk = i)),
                ok(e, t, t.pendingProps.children, n),
                oV(e, t),
                null === e && (t.flags |= 4194304),
                t.child
            );
        case 5:
            return (
                null === e &&
                    rU &&
                    ((i = r = rk) &&
                        (null !== (r = c4(r, t.type, t.pendingProps, rZ))
                            ? ((t.stateNode = r), (rM = t), (rk = c7(r.firstChild)), (rZ = !1), (i = !0))
                            : (i = !1)),
                    i || rF(t)),
                Q(t),
                (i = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (r = a.children),
                cK(i, a) ? (r = null) : null !== o && cK(i, o) && (t.flags |= 32),
                null !== t.memoizedState && (uZ._currentValue = i = i4(e, t, i6, null, null, n)),
                oV(e, t),
                ok(e, t, r, n),
                t.child
            );
        case 6:
            return (
                null === e &&
                    rU &&
                    ((e = n = rk) &&
                        (null !== (n = c5(n, t.pendingProps, rZ))
                            ? ((t.stateNode = n), (rM = t), (rk = null), (e = !0))
                            : (e = !1)),
                    e || rF(t)),
                null
            );
        case 13:
            return oQ(e, t, n);
        case 4:
            return (
                q(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ou(t, null, r, n)) : ok(e, t, r, n),
                t.child
            );
        case 11:
            return oU(e, t, t.type, t.pendingProps, n);
        case 7:
            return ok(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return ok(e, t, t.pendingProps.children, n), t.child;
        case 10:
            return (r = t.pendingProps), rJ(t, t.type, r.value), ok(e, t, r.children, n), t.child;
        case 9:
            return (
                (i = t.type._context),
                (r = t.pendingProps.children),
                r4(t),
                (r = r((i = r5(i)))),
                (t.flags |= 1),
                ok(e, t, r, n),
                t.child
            );
        case 14:
            return oG(e, t, t.type, t.pendingProps, n);
        case 15:
            return oZ(e, t, t.type, t.pendingProps, n);
        case 19:
            return o2(e, t, n);
        case 31:
            return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = {
                    mode: r.mode,
                    children: r.children,
                }),
                null === e ? ((n = o$(r, n)).ref = t.ref) : ((n = rg(e.child, r)).ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n)
            );
        case 22:
            return oB(e, t, n);
        case 24:
            return (
                r4(t),
                (r = r5(it)),
                null === e
                    ? (null === (i = im()) &&
                          ((i = s5),
                          (a = ir()),
                          (i.pooledCache = a),
                          a.refCount++,
                          null !== a && (i.pooledCacheLanes |= n),
                          (i = a)),
                      (t.memoizedState = {
                          parent: r,
                          cache: i,
                      }),
                      iP(t),
                      rJ(t, it, i))
                    : (0 != (e.lanes & n) && (iR(e, t), ik(t, null, null, n), iM()),
                      (i = e.memoizedState),
                      (a = t.memoizedState),
                      i.parent !== r
                          ? ((i = {
                                parent: r,
                                cache: r,
                            }),
                            (t.memoizedState = i),
                            0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i),
                            rJ(t, it, r))
                          : (rJ(t, it, (r = a.cache)), r !== i.cache && r1(t, [it], n, !0))),
                ok(e, t, t.pendingProps.children, n),
                t.child
            );
        case 29:
            throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
}
function o7(e) {
    e.flags |= 4;
}
function o9(e, t) {
    if ("stylesheet" !== t.type || 0 != (4 & t.state.loading)) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !uw(t))) {
        if (
            null !== (t = of.current) &&
            ((4194048 & s6) === s6 ? null !== op : ((62914560 & s6) !== s6 && 0 == (536870912 & s6)) || t !== op)
        )
            throw ((iT = iO), ib);
        e.flags |= 8192;
    }
}
function se(e, t) {
    null !== t && (e.flags |= 4), 16384 & e.flags && ((t = 22 !== e.tag ? eC() : 536870912), (e.lanes |= t), (lc |= t));
}
function st(e, t) {
    if (!rU)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function sn(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; null !== i; )
            (n |= i.lanes | i.childLanes),
                (r |= 65011712 & i.subtreeFlags),
                (r |= 65011712 & i.flags),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; null !== i; )
            (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sr(e, t, n) {
    var r = t.pendingProps;
    switch ((rj(t), t.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
        case 1:
            return sn(t), null;
        case 3:
            return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                r$(it),
                X(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null === e || null === e.child) &&
                    (rY(t)
                        ? o7(t)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), rK())),
                sn(t),
                null
            );
        case 26:
            return (
                (n = t.memoizedState),
                null === e
                    ? (o7(t), null !== n ? (sn(t), o9(t, n)) : (sn(t), (t.flags &= -16777217)))
                    : n
                      ? n !== e.memoizedState
                          ? (o7(t), sn(t), o9(t, n))
                          : (sn(t), (t.flags &= -16777217))
                      : (e.memoizedProps !== r && o7(t), sn(t), (t.flags &= -16777217)),
                null
            );
        case 27:
            J(t), (n = K.current);
            var i = t.type;
            if (null !== e && null != t.stateNode) e.memoizedProps !== r && o7(t);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(l(166));
                    return sn(t), null;
                }
                (e = Y.current), rY(t) ? rV(t, e) : ((e = ut(i, r, n)), (t.stateNode = e), o7(t));
            }
            return sn(t), null;
        case 5:
            if ((J(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && o7(t);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(l(166));
                    return sn(t), null;
                }
                if (((e = Y.current), rY(t))) rV(t, e);
                else {
                    switch (((i = cH(K.current)), e)) {
                        case 1:
                            e = i.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case 2:
                            e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        default:
                            switch (n) {
                                case "svg":
                                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case "math":
                                    e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                case "script":
                                    ((e = i.createElement("div")).innerHTML = "<script></script>"),
                                        (e = e.removeChild(e.firstChild));
                                    break;
                                case "select":
                                    (e =
                                        "string" == typeof r.is
                                            ? i.createElement("select", { is: r.is })
                                            : i.createElement("select")),
                                        r.multiple ? (e.multiple = !0) : r.size && (e.size = r.size);
                                    break;
                                default:
                                    e = "string" == typeof r.is ? i.createElement(n, { is: r.is }) : i.createElement(n);
                            }
                    }
                    (e[eU] = t), (e[eG] = r);
                    e: for (i = t.child; null !== i; ) {
                        if (5 === i.tag || 6 === i.tag) e.appendChild(i.stateNode);
                        else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                            (i.child.return = i), (i = i.child);
                            continue;
                        }
                        if (i === t) break;
                        for (; null === i.sibling; ) {
                            if (null === i.return || i.return === t) break e;
                            i = i.return;
                        }
                        (i.sibling.return = i.return), (i = i.sibling);
                    }
                    switch (((t.stateNode = e), cZ(e, n, r), n)) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            e = !!r.autoFocus;
                            break;
                        case "img":
                            e = !0;
                            break;
                        default:
                            e = !1;
                    }
                    e && o7(t);
                }
            }
            return sn(t), (t.flags &= -16777217), null;
        case 6:
            if (e && null != t.stateNode) e.memoizedProps !== r && o7(t);
            else {
                if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                if (((e = K.current), rY(t))) {
                    if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (i = rM)))
                        switch (i.tag) {
                            case 27:
                            case 5:
                                r = i.memoizedProps;
                        }
                    (e[eU] = t),
                        (e = !!(
                            e.nodeValue === n ||
                            (null !== r && !0 === r.suppressHydrationWarning) ||
                            cM(e.nodeValue, n)
                        )) || rF(t);
                } else ((e = cH(e).createTextNode(r))[eU] = t), (t.stateNode = e);
            }
            return sn(t), null;
        case 13:
            if (
                ((r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (((i = rY(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(l(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                        i[eU] = t;
                    } else rW(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                    sn(t), (i = !1);
                } else
                    (i = rK()),
                        null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = i),
                        (i = !0);
                if (!i) {
                    if (256 & t.flags) return og(t), t;
                    return og(t), null;
                }
            }
            if ((og(t), 0 != (128 & t.flags))) return (t.lanes = n), t;
            if (((n = null !== r), (e = null !== e && null !== e.memoizedState), n)) {
                (r = t.child),
                    (i = null),
                    null !== r.alternate &&
                        null !== r.alternate.memoizedState &&
                        null !== r.alternate.memoizedState.cachePool &&
                        (i = r.alternate.memoizedState.cachePool.pool);
                var a = null;
                null !== r.memoizedState && null !== r.memoizedState.cachePool && (a = r.memoizedState.cachePool.pool),
                    a !== i && (r.flags |= 2048);
            }
            return n !== e && n && (t.child.flags |= 8192), se(t, t.updateQueue), sn(t), null;
        case 4:
            return X(), null === e && cA(t.stateNode.containerInfo), sn(t), null;
        case 10:
            return r$(t.type), sn(t), null;
        case 19:
            if ((V(oE), null === (i = t.memoizedState))) return sn(t), null;
            if (((r = 0 != (128 & t.flags)), null === (a = i.rendering)))
                if (r) st(i, !1);
                else {
                    if (0 !== li || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = ob(e))) {
                                for (
                                    t.flags |= 128,
                                        st(i, !1),
                                        e = a.updateQueue,
                                        t.updateQueue = e,
                                        se(t, e),
                                        t.subtreeFlags = 0,
                                        e = n,
                                        n = t.child;
                                    null !== n;
                                )
                                    rE(n, e), (n = n.sibling);
                                return H(oE, (1 & oE.current) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && ei() > l_ && ((t.flags |= 128), (r = !0), st(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = ob(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (e = e.updateQueue),
                            (t.updateQueue = e),
                            se(t, e),
                            st(i, !0),
                            null === i.tail && "hidden" === i.tailMode && !a.alternate && !rU)
                        )
                            return sn(t), null;
                    } else
                        2 * ei() - i.renderingStartTime > l_ &&
                            536870912 !== n &&
                            ((t.flags |= 128), (r = !0), st(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (e = i.last) ? (e.sibling = a) : (t.child = a), (i.last = a));
            }
            if (null !== i.tail)
                return (
                    (t = i.tail),
                    (i.rendering = t),
                    (i.tail = t.sibling),
                    (i.renderingStartTime = ei()),
                    (t.sibling = null),
                    (e = oE.current),
                    H(oE, r ? (1 & e) | 2 : 1 & e),
                    t
                );
            return sn(t), null;
        case 22:
        case 23:
            return (
                og(t),
                iH(),
                (r = null !== t.memoizedState),
                null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                r
                    ? 0 != (536870912 & n) && 0 == (128 & t.flags) && (sn(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : sn(t),
                null !== (n = t.updateQueue) && se(t, n.retryQueue),
                (n = null),
                null !== e &&
                    null !== e.memoizedState &&
                    null !== e.memoizedState.cachePool &&
                    (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && V(i_),
                null
            );
        case 24:
            return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                r$(it),
                sn(t),
                null
            );
        case 25:
        case 30:
            return null;
    }
    throw Error(l(156, t.tag));
}
function si(e, t) {
    switch ((rj(t), t.tag)) {
        case 1:
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 3:
            return (
                r$(it), X(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 26:
        case 27:
        case 5:
            return J(t), null;
        case 13:
            if ((og(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(l(340));
                rW();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return V(oE), null;
        case 4:
            return X(), null;
        case 10:
            return r$(t.type), null;
        case 22:
        case 23:
            return og(t), iH(), null !== e && V(i_), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 24:
            return r$(it), null;
        default:
            return null;
    }
}
function sa(e, t) {
    switch ((rj(t), t.tag)) {
        case 3:
            r$(it), X();
            break;
        case 26:
        case 27:
        case 5:
            J(t);
            break;
        case 4:
            X();
            break;
        case 13:
            og(t);
            break;
        case 19:
            V(oE);
            break;
        case 10:
            r$(t.type);
            break;
        case 22:
        case 23:
            og(t), iH(), null !== e && V(i_);
            break;
        case 24:
            r$(it);
    }
}
function so(e, t) {
    try {
        var n = t.updateQueue,
            r = null !== n ? n.lastEffect : null;
        if (null !== r) {
            var i = r.next;
            n = i;
            do {
                if ((n.tag & e) === e) {
                    r = void 0;
                    var a = n.create;
                    n.inst.destroy = r = a();
                }
                n = n.next;
            } while (n !== i);
        }
    } catch (e) {
        l2(t, t.return, e);
    }
}
function ss(e, t, n) {
    try {
        var r = t.updateQueue,
            i = null !== r ? r.lastEffect : null;
        if (null !== i) {
            var a = i.next;
            r = a;
            do {
                if ((r.tag & e) === e) {
                    var o = r.inst,
                        s = o.destroy;
                    if (void 0 !== s) {
                        (o.destroy = void 0), (i = t);
                        var l = n,
                            c = s;
                        try {
                            c();
                        } catch (e) {
                            l2(i, l, e);
                        }
                    }
                }
                r = r.next;
            } while (r !== a);
        }
    } catch (e) {
        l2(t, t.return, e);
    }
}
function sl(e) {
    var t = e.updateQueue;
    if (null !== t) {
        var n = e.stateNode;
        try {
            iG(t, n);
        } catch (t) {
            l2(e, e.return, t);
        }
    }
}
function sc(e, t, n) {
    (n.props = oI(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
        n.componentWillUnmount();
    } catch (n) {
        l2(e, t, n);
    }
}
function su(e, t) {
    try {
        var n = e.ref;
        if (null !== n) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                default:
                    r = e.stateNode;
            }
            "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
        }
    } catch (n) {
        l2(e, t, n);
    }
}
function sd(e, t) {
    var n = e.ref,
        r = e.refCleanup;
    if (null !== n)
        if ("function" == typeof r)
            try {
                r();
            } catch (n) {
                l2(e, t, n);
            } finally {
                (e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null);
            }
        else if ("function" == typeof n)
            try {
                n(null);
            } catch (n) {
                l2(e, t, n);
            }
        else n.current = null;
}
function sf(e) {
    var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
    try {
        switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && r.focus();
                break;
            case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
    } catch (t) {
        l2(e, e.return, t);
    }
}
function sp(e, t, n) {
    try {
        var r = e.stateNode;
        cB(r, e.type, n, t), (r[eG] = t);
    } catch (t) {
        l2(e, e.return, t);
    }
}
function s_(e) {
    return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && c1(e.type)) || 4 === e.tag;
}
function sm(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || s_(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if ((27 === e.tag && c1(e.type)) || 2 & e.flags || null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function sh(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        (e = e.stateNode),
            t
                ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t)
                : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = ck));
    else if (4 !== r && (27 === r && c1(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child)))
        for (sh(e, t, n), e = e.sibling; null !== e; ) sh(e, t, n), (e = e.sibling);
}
function sg(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && (27 === r && c1(e.type) && (n = e.stateNode), null !== (e = e.child)))
        for (sg(e, t, n), e = e.sibling; null !== e; ) sg(e, t, n), (e = e.sibling);
}
function sE(e) {
    var t = e.stateNode,
        n = e.memoizedProps;
    try {
        for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
        cZ(t, r, n), (t[eU] = e), (t[eG] = n);
    } catch (t) {
        l2(e, e.return, t);
    }
}
var sb = !1,
    sy = !1,
    sO = !1,
    sv = "function" == typeof WeakSet ? WeakSet : Set,
    sS = null;
function sI(e, t) {
    if (((e = e.containerInfo), (cF = uz), nH((e = nV(e))))) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd,
            };
        else
            e: {
                var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                if (r && 0 !== r.rangeCount) {
                    n = r.anchorNode;
                    var i,
                        a = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch (e) {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        c = -1,
                        u = -1,
                        d = 0,
                        f = 0,
                        p = e,
                        _ = null;
                    a: for (;;) {
                        for (
                            ;
                            p !== n || (0 !== a && 3 !== p.nodeType) || (c = s + a),
                                p !== o || (0 !== r && 3 !== p.nodeType) || (u = s + r),
                                3 === p.nodeType && (s += p.nodeValue.length),
                                null !== (i = p.firstChild);
                        )
                            (_ = p), (p = i);
                        for (;;) {
                            if (p === e) break a;
                            if (
                                (_ === n && ++d === a && (c = s),
                                _ === o && ++f === r && (u = s),
                                null !== (i = p.nextSibling))
                            )
                                break;
                            _ = (p = _).parentNode;
                        }
                        p = i;
                    }
                    n =
                        -1 === c || -1 === u
                            ? null
                            : {
                                  start: c,
                                  end: u,
                              };
                } else n = null;
            }
        n = n || {
            start: 0,
            end: 0,
        };
    } else n = null;
    for (
        cV = {
            focusedElem: e,
            selectionRange: n,
        },
            uz = !1,
            sS = t;
        null !== sS;
    )
        if (((e = (t = sS).child), 0 != (1024 & t.subtreeFlags) && null !== e)) (e.return = t), (sS = e);
        else
            for (; null !== sS; ) {
                switch (((o = (t = sS).alternate), (e = t.flags), t.tag)) {
                    case 0:
                    case 11:
                    case 15:
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    case 1:
                        if (0 != (1024 & e) && null !== o) {
                            (e = void 0), (n = t), (a = o.memoizedProps), (o = o.memoizedState), (r = n.stateNode);
                            try {
                                var m = oI(n.type, a, n.elementType === n.type);
                                (e = r.getSnapshotBeforeUpdate(m, o)), (r.__reactInternalSnapshotBeforeUpdate = e);
                            } catch (e) {
                                l2(n, n.return, e);
                            }
                        }
                        break;
                    case 3:
                        if (0 != (1024 & e)) {
                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) c2(e);
                            else if (1 === n)
                                switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        c2(e);
                                        break;
                                    default:
                                        e.textContent = "";
                                }
                        }
                        break;
                    default:
                        if (0 != (1024 & e)) throw Error(l(163));
                }
                if (null !== (e = t.sibling)) {
                    (e.return = t.return), (sS = e);
                    break;
                }
                sS = t.return;
            }
}
function sT(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
        case 0:
        case 11:
        case 15:
            sG(e, n), 4 & r && so(5, n);
            break;
        case 1:
            if ((sG(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                    try {
                        e.componentDidMount();
                    } catch (e) {
                        l2(n, n.return, e);
                    }
                else {
                    var i = oI(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                    } catch (e) {
                        l2(n, n.return, e);
                    }
                }
            64 & r && sl(n), 512 & r && su(n, n.return);
            break;
        case 3:
            if ((sG(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                    switch (n.child.tag) {
                        case 27:
                        case 5:
                        case 1:
                            t = n.child.stateNode;
                    }
                try {
                    iG(e, t);
                } catch (e) {
                    l2(n, n.return, e);
                }
            }
            break;
        case 27:
            null === t && 4 & r && sE(n);
        case 26:
        case 5:
            sG(e, n), null === t && 4 & r && sf(n), 512 & r && su(n, n.return);
            break;
        case 12:
        default:
            sG(e, n);
            break;
        case 13:
            sG(e, n),
                4 & r && sw(e, n),
                64 & r &&
                    null !== (e = n.memoizedState) &&
                    null !== (e = e.dehydrated) &&
                    c6(e, (n = l6.bind(null, n)));
            break;
        case 22:
            if (!(r = null !== n.memoizedState || sb)) {
                (t = (null !== t && null !== t.memoizedState) || sy), (i = sb);
                var a = sy;
                (sb = r), (sy = t) && !a ? sB(e, n, 0 != (8772 & n.subtreeFlags)) : sG(e, n), (sb = i), (sy = a);
            }
        case 30:
    }
}
function sA(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), sA(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag && null !== (t = e.stateNode) && eW(t),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
var sC = null,
    sN = !1;
function sP(e, t, n) {
    for (n = n.child; null !== n; ) sR(e, t, n), (n = n.sibling);
}
function sR(e, t, n) {
    if (e_ && "function" == typeof e_.onCommitFiberUnmount)
        try {
            e_.onCommitFiberUnmount(ep, n);
        } catch (e) {}
    switch (n.tag) {
        case 26:
            sy || sd(n, t),
                sP(e, t, n),
                n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
            break;
        case 27:
            sy || sd(n, t);
            var r = sC,
                i = sN;
            c1(n.type) && ((sC = n.stateNode), (sN = !1)), sP(e, t, n), un(n.stateNode), (sC = r), (sN = i);
            break;
        case 5:
            sy || sd(n, t);
        case 6:
            if (((r = sC), (i = sN), (sC = null), sP(e, t, n), (sC = r), (sN = i), null !== sC))
                if (sN)
                    try {
                        (9 === sC.nodeType ? sC.body : "HTML" === sC.nodeName ? sC.ownerDocument.body : sC).removeChild(
                            n.stateNode,
                        );
                    } catch (e) {
                        l2(n, t, e);
                    }
                else
                    try {
                        sC.removeChild(n.stateNode);
                    } catch (e) {
                        l2(n, t, e);
                    }
            break;
        case 18:
            null !== sC &&
                (sN
                    ? (c3(
                          9 === (e = sC).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e,
                          n.stateNode,
                      ),
                      dd(e))
                    : c3(sC, n.stateNode));
            break;
        case 4:
            (r = sC), (i = sN), (sC = n.stateNode.containerInfo), (sN = !0), sP(e, t, n), (sC = r), (sN = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            sy || ss(2, n, t), sy || ss(4, n, t), sP(e, t, n);
            break;
        case 1:
            sy || (sd(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount && sc(n, t, r)), sP(e, t, n);
            break;
        case 21:
        default:
            sP(e, t, n);
            break;
        case 22:
            (sy = (r = sy) || null !== n.memoizedState), sP(e, t, n), (sy = r);
    }
}
function sw(e, t) {
    if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState) &&
        null !== (e = e.dehydrated)
    )
        try {
            dd(e);
        } catch (e) {
            l2(t, t.return, e);
        }
}
function sD(e) {
    switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return null === t && (t = e.stateNode = new sv()), t;
        case 22:
            return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new sv()), t;
        default:
            throw Error(l(435, e.tag));
    }
}
function sx(e, t) {
    var n = sD(e);
    t.forEach(function (t) {
        var r = l7.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
    });
}
function sL(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = n[r],
                a = e,
                o = t,
                s = o;
            e: for (; null !== s; ) {
                switch (s.tag) {
                    case 27:
                        if (c1(s.type)) {
                            (sC = s.stateNode), (sN = !1);
                            break e;
                        }
                        break;
                    case 5:
                        (sC = s.stateNode), (sN = !1);
                        break e;
                    case 3:
                    case 4:
                        (sC = s.stateNode.containerInfo), (sN = !0);
                        break e;
                }
                s = s.return;
            }
            if (null === sC) throw Error(l(160));
            sR(a, o, i), (sC = null), (sN = !1), null !== (a = i.alternate) && (a.return = null), (i.return = null);
        }
    if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) sM(t, e), (t = t.sibling);
}
var sj = null;
function sM(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            sL(t, e), sk(e), 4 & r && (ss(3, e, e.return), so(3, e), ss(5, e, e.return));
            break;
        case 1:
            sL(t, e),
                sk(e),
                512 & r && (sy || null === n || sd(n, n.return)),
                64 & r &&
                    sb &&
                    null !== (e = e.updateQueue) &&
                    null !== (r = e.callbacks) &&
                    ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
            break;
        case 26:
            var i = sj;
            if ((sL(t, e), sk(e), 512 & r && (sy || null === n || sd(n, n.return)), 4 & r)) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                    if (null === r)
                        if (null === e.stateNode) {
                            e: {
                                (r = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i);
                                a: switch (r) {
                                    case "title":
                                        (!(a = i.getElementsByTagName("title")[0]) ||
                                            a[eY] ||
                                            a[eU] ||
                                            "http://www.w3.org/2000/svg" === a.namespaceURI ||
                                            a.hasAttribute("itemprop")) &&
                                            ((a = i.createElement(r)),
                                            i.head.insertBefore(a, i.querySelector("head > title"))),
                                            cZ(a, r, n),
                                            (a[eU] = e),
                                            eQ(a),
                                            (r = a);
                                        break e;
                                    case "link":
                                        var o = uN("link", "href", i).get(r + (n.href || ""));
                                        if (o) {
                                            for (var s = 0; s < o.length; s++)
                                                if (
                                                    (a = o[s]).getAttribute("href") ===
                                                        (null == n.href || "" === n.href ? null : n.href) &&
                                                    a.getAttribute("rel") === (null == n.rel ? null : n.rel) &&
                                                    a.getAttribute("title") === (null == n.title ? null : n.title) &&
                                                    a.getAttribute("crossorigin") ===
                                                        (null == n.crossOrigin ? null : n.crossOrigin)
                                                ) {
                                                    o.splice(s, 1);
                                                    break a;
                                                }
                                        }
                                        cZ((a = i.createElement(r)), r, n), i.head.appendChild(a);
                                        break;
                                    case "meta":
                                        if ((o = uN("meta", "content", i).get(r + (n.content || "")))) {
                                            for (s = 0; s < o.length; s++)
                                                if (
                                                    (a = o[s]).getAttribute("content") ===
                                                        (null == n.content ? null : "" + n.content) &&
                                                    a.getAttribute("name") === (null == n.name ? null : n.name) &&
                                                    a.getAttribute("property") ===
                                                        (null == n.property ? null : n.property) &&
                                                    a.getAttribute("http-equiv") ===
                                                        (null == n.httpEquiv ? null : n.httpEquiv) &&
                                                    a.getAttribute("charset") === (null == n.charSet ? null : n.charSet)
                                                ) {
                                                    o.splice(s, 1);
                                                    break a;
                                                }
                                        }
                                        cZ((a = i.createElement(r)), r, n), i.head.appendChild(a);
                                        break;
                                    default:
                                        throw Error(l(468, r));
                                }
                                (a[eU] = e), eQ(a), (r = a);
                            }
                            e.stateNode = r;
                        } else uP(i, e.type, e.stateNode);
                    else e.stateNode = uS(i, r, e.memoizedProps);
                else
                    a !== r
                        ? (null === a ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : a.count--,
                          null === r ? uP(i, e.type, e.stateNode) : uS(i, r, e.memoizedProps))
                        : null === r && null !== e.stateNode && sp(e, e.memoizedProps, n.memoizedProps);
            }
            break;
        case 27:
            sL(t, e),
                sk(e),
                512 & r && (sy || null === n || sd(n, n.return)),
                null !== n && 4 & r && sp(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if ((sL(t, e), sk(e), 512 & r && (sy || null === n || sd(n, n.return)), 32 & e.flags)) {
                i = e.stateNode;
                try {
                    tE(i, "");
                } catch (t) {
                    l2(e, e.return, t);
                }
            }
            4 & r && null != e.stateNode && ((i = e.memoizedProps), sp(e, i, null !== n ? n.memoizedProps : i)),
                1024 & r && (sO = !0);
            break;
        case 6:
            if ((sL(t, e), sk(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                    n.nodeValue = r;
                } catch (t) {
                    l2(e, e.return, t);
                }
            }
            break;
        case 3:
            if (
                ((uC = null),
                (i = sj),
                (sj = ua(t.containerInfo)),
                sL(t, e),
                (sj = i),
                sk(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
            )
                try {
                    dd(t.containerInfo);
                } catch (t) {
                    l2(e, e.return, t);
                }
            sO && ((sO = !1), sU(e));
            break;
        case 4:
            (r = sj), (sj = ua(e.stateNode.containerInfo)), sL(t, e), sk(e), (sj = r);
            break;
        case 12:
        default:
            sL(t, e), sk(e);
            break;
        case 13:
            sL(t, e),
                sk(e),
                8192 & e.child.flags &&
                    (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                    (lp = ei()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), sx(e, r));
            break;
        case 22:
            i = null !== e.memoizedState;
            var c = null !== n && null !== n.memoizedState,
                u = sb,
                d = sy;
            if (((sb = u || i), (sy = d || c), sL(t, e), (sy = d), (sb = u), sk(e), 8192 & r))
                e: for (
                    (t = e.stateNode)._visibility = i ? -2 & t._visibility : 1 | t._visibility,
                        i && (null === n || c || sb || sy || sZ(e)),
                        n = null,
                        t = e;
                    ;
                ) {
                    if (5 === t.tag || 26 === t.tag) {
                        if (null === n) {
                            c = n = t;
                            try {
                                if (((a = c.stateNode), i))
                                    (o = a.style),
                                        "function" == typeof o.setProperty
                                            ? o.setProperty("display", "none", "important")
                                            : (o.display = "none");
                                else {
                                    s = c.stateNode;
                                    var f = c.memoizedProps.style,
                                        p = null != f && f.hasOwnProperty("display") ? f.display : null;
                                    s.style.display = null == p || "boolean" == typeof p ? "" : ("" + p).trim();
                                }
                            } catch (e) {
                                l2(c, c.return, e);
                            }
                        }
                    } else if (6 === t.tag) {
                        if (null === n) {
                            c = t;
                            try {
                                c.stateNode.nodeValue = i ? "" : c.memoizedProps;
                            } catch (e) {
                                l2(c, c.return, e);
                            }
                        }
                    } else if (
                        ((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) &&
                        null !== t.child
                    ) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) break e;
                        n === t && (n = null), (t = t.return);
                    }
                    n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
                }
            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), sx(e, n));
            break;
        case 19:
            sL(t, e), sk(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), sx(e, r));
        case 30:
        case 21:
    }
}
function sk(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            for (var n, r = e.return; null !== r; ) {
                if (s_(r)) {
                    n = r;
                    break;
                }
                r = r.return;
            }
            if (null == n) throw Error(l(160));
            switch (n.tag) {
                case 27:
                    var i = n.stateNode,
                        a = sm(e);
                    sg(e, a, i);
                    break;
                case 5:
                    var o = n.stateNode;
                    32 & n.flags && (tE(o, ""), (n.flags &= -33));
                    var s = sm(e);
                    sg(e, s, o);
                    break;
                case 3:
                case 4:
                    var c = n.stateNode.containerInfo,
                        u = sm(e);
                    sh(e, u, c);
                    break;
                default:
                    throw Error(l(161));
            }
        } catch (t) {
            l2(e, e.return, t);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function sU(e) {
    if (1024 & e.subtreeFlags)
        for (e = e.child; null !== e; ) {
            var t = e;
            sU(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling);
        }
}
function sG(e, t) {
    if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) sT(e, t.alternate, t), (t = t.sibling);
}
function sZ(e) {
    for (e = e.child; null !== e; ) {
        var t = e;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ss(4, t, t.return), sZ(t);
                break;
            case 1:
                sd(t, t.return);
                var n = t.stateNode;
                "function" == typeof n.componentWillUnmount && sc(t, t.return, n), sZ(t);
                break;
            case 27:
                un(t.stateNode);
            case 26:
            case 5:
                sd(t, t.return), sZ(t);
                break;
            case 22:
                null === t.memoizedState && sZ(t);
                break;
            default:
                sZ(t);
        }
        e = e.sibling;
    }
}
function sB(e, t, n) {
    for (n = n && 0 != (8772 & t.subtreeFlags), t = t.child; null !== t; ) {
        var r = t.alternate,
            i = e,
            a = t,
            o = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                sB(i, a, n), so(4, a);
                break;
            case 1:
                if ((sB(i, a, n), "function" == typeof (i = (r = a).stateNode).componentDidMount))
                    try {
                        i.componentDidMount();
                    } catch (e) {
                        l2(r, r.return, e);
                    }
                if (null !== (i = (r = a).updateQueue)) {
                    var s = r.stateNode;
                    try {
                        var l = i.shared.hiddenCallbacks;
                        if (null !== l) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) iU(l[i], s);
                    } catch (e) {
                        l2(r, r.return, e);
                    }
                }
                n && 64 & o && sl(a), su(a, a.return);
                break;
            case 27:
                sE(a);
            case 26:
            case 5:
                sB(i, a, n), n && null === r && 4 & o && sf(a), su(a, a.return);
                break;
            case 12:
            default:
                sB(i, a, n);
                break;
            case 13:
                sB(i, a, n), n && 4 & o && sw(i, a);
                break;
            case 22:
                null === a.memoizedState && sB(i, a, n), su(a, a.return);
            case 30:
        }
        t = t.sibling;
    }
}
function sF(e, t) {
    var n = null;
    null !== e &&
        null !== e.memoizedState &&
        null !== e.memoizedState.cachePool &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
        e !== n && (null != e && e.refCount++, null != n && ii(n));
}
function sV(e, t) {
    (e = null),
        null !== t.alternate && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ii(e));
}
function sH(e, t, n, r) {
    if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) sY(e, t, n, r), (t = t.sibling);
}
function sY(e, t, n, r) {
    var i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
            sH(e, t, n, r), 2048 & i && so(9, t);
            break;
        case 1:
        case 13:
        default:
            sH(e, t, n, r);
            break;
        case 3:
            sH(e, t, n, r),
                2048 & i &&
                    ((e = null),
                    null !== t.alternate && (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ii(e)));
            break;
        case 12:
            if (2048 & i) {
                sH(e, t, n, r), (e = t.stateNode);
                try {
                    var a = t.memoizedProps,
                        o = a.id,
                        s = a.onPostCommit;
                    "function" == typeof s &&
                        s(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (e) {
                    l2(t, t.return, e);
                }
            } else sH(e, t, n, r);
            break;
        case 23:
            break;
        case 22:
            (a = t.stateNode),
                (o = t.alternate),
                null !== t.memoizedState
                    ? 2 & a._visibility
                        ? sH(e, t, n, r)
                        : sK(e, t)
                    : 2 & a._visibility
                      ? sH(e, t, n, r)
                      : ((a._visibility |= 2), sW(e, t, n, r, 0 != (10256 & t.subtreeFlags))),
                2048 & i && sF(o, t);
            break;
        case 24:
            sH(e, t, n, r), 2048 & i && sV(t.alternate, t);
    }
}
function sW(e, t, n, r, i) {
    for (i = i && 0 != (10256 & t.subtreeFlags), t = t.child; null !== t; ) {
        var a = e,
            o = t,
            s = n,
            l = r,
            c = o.flags;
        switch (o.tag) {
            case 0:
            case 11:
            case 15:
                sW(a, o, s, l, i), so(8, o);
                break;
            case 23:
                break;
            case 22:
                var u = o.stateNode;
                null !== o.memoizedState
                    ? 2 & u._visibility
                        ? sW(a, o, s, l, i)
                        : sK(a, o)
                    : ((u._visibility |= 2), sW(a, o, s, l, i)),
                    i && 2048 & c && sF(o.alternate, o);
                break;
            case 24:
                sW(a, o, s, l, i), i && 2048 & c && sV(o.alternate, o);
                break;
            default:
                sW(a, o, s, l, i);
        }
        t = t.sibling;
    }
}
function sK(e, t) {
    if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t; ) {
            var n = e,
                r = t,
                i = r.flags;
            switch (r.tag) {
                case 22:
                    sK(n, r), 2048 & i && sF(r.alternate, r);
                    break;
                case 24:
                    sK(n, r), 2048 & i && sV(r.alternate, r);
                    break;
                default:
                    sK(n, r);
            }
            t = t.sibling;
        }
}
var sz = 8192;
function sq(e) {
    if (e.subtreeFlags & sz) for (e = e.child; null !== e; ) sX(e), (e = e.sibling);
}
function sX(e) {
    switch (e.tag) {
        case 26:
            sq(e), e.flags & sz && null !== e.memoizedState && uL(sj, e.memoizedState, e.memoizedProps);
            break;
        case 5:
        default:
            sq(e);
            break;
        case 3:
        case 4:
            var t = sj;
            (sj = ua(e.stateNode.containerInfo)), sq(e), (sj = t);
            break;
        case 22:
            null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                    ? ((t = sz), (sz = 16777216), sq(e), (sz = t))
                    : sq(e));
    }
}
function sQ(e) {
    var t = e.alternate;
    if (null !== t && null !== (e = t.child)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (null !== e);
    }
}
function sJ(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (sS = r), s1(r, e);
            }
        sQ(e);
    }
    if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) s$(e), (e = e.sibling);
}
function s$(e) {
    switch (e.tag) {
        case 0:
        case 11:
        case 15:
            sJ(e), 2048 & e.flags && ss(9, e, e.return);
            break;
        case 3:
        case 12:
        default:
            sJ(e);
            break;
        case 22:
            var t = e.stateNode;
            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), s0(e))
                : sJ(e);
    }
}
function s0(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (sS = r), s1(r, e);
            }
        sQ(e);
    }
    for (e = e.child; null !== e; ) {
        switch ((t = e).tag) {
            case 0:
            case 11:
            case 15:
                ss(8, t, t.return), s0(t);
                break;
            case 22:
                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), s0(t));
                break;
            default:
                s0(t);
        }
        e = e.sibling;
    }
}
function s1(e, t) {
    for (; null !== sS; ) {
        var n = sS;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                ss(8, n, t);
                break;
            case 23:
            case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                    var r = n.memoizedState.cachePool.pool;
                    null != r && r.refCount++;
                }
                break;
            case 24:
                ii(n.memoizedState.cache);
        }
        if (null !== (r = n.child)) (r.return = n), (sS = r);
        else
            for (n = e; null !== sS; ) {
                var i = (r = sS).sibling,
                    a = r.return;
                if ((sA(r), r === n)) {
                    sS = null;
                    break;
                }
                if (null !== i) {
                    (i.return = a), (sS = i);
                    break;
                }
                sS = a;
            }
    }
}
var s3 = {
        getCacheForType: function (e) {
            var t = r5(it),
                n = t.data.get(e);
            return void 0 === n && ((n = e()), t.data.set(e, n)), n;
        },
    },
    s2 = "function" == typeof WeakMap ? WeakMap : Map,
    s4 = 0,
    s5 = null,
    s8 = null,
    s6 = 0,
    s7 = 0,
    s9 = null,
    le = !1,
    lt = !1,
    ln = !1,
    lr = 0,
    li = 0,
    la = 0,
    lo = 0,
    ls = 0,
    ll = 0,
    lc = 0,
    lu = null,
    ld = null,
    lf = !1,
    lp = 0,
    l_ = 1 / 0,
    lm = null,
    lh = null,
    lg = 0,
    lE = null,
    lb = null,
    ly = 0,
    lO = 0,
    lv = null,
    lS = null,
    lI = 0,
    lT = null;
function lA() {
    if (0 != (2 & s4) && 0 !== s6) return s6 & -s6;
    if (null !== k.T) {
        var e = is;
        return 0 !== e ? e : c_();
    }
    return ej();
}
function lC() {
    0 === ll && (ll = 0 == (536870912 & s6) || rU ? eA() : 536870912);
    var e = of.current;
    return null !== e && (e.flags |= 32), ll;
}
function lN(e, t, n) {
    ((e === s5 && (2 === s7 || 9 === s7)) || null !== e.cancelPendingCommit) && (lj(e, 0), lD(e, s6, ll, !1)),
        eP(e, n),
        (0 == (2 & s4) || e !== s5) && (e === s5 && (0 == (2 & s4) && (lo |= n), 4 === li && lD(e, s6, ll, !1)), co(e));
}
function lP(e, t, n) {
    if (0 != (6 & s4)) throw Error(l(327));
    for (
        var r = (!n && 0 == (124 & t) && 0 == (t & e.expiredLanes)) || eI(e, t), i = r ? lF(e, t) : lZ(e, t, !0), a = r;
        ;
    ) {
        if (0 === i) lt && !r && lD(e, t, 0, !1);
        else {
            if (((n = e.current.alternate), a && !lw(n))) {
                (i = lZ(e, t, !1)), (a = !1);
                continue;
            }
            if (2 === i) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var o = 0;
                else o = 0 != (o = -536870913 & e.pendingLanes) ? o : 536870912 & o ? 536870912 : 0;
                if (0 !== o) {
                    t = o;
                    e: {
                        var s = e;
                        i = lu;
                        var c = s.current.memoizedState.isDehydrated;
                        if ((c && (lj(s, o).flags |= 256), 2 !== (o = lZ(s, o, !1)))) {
                            if (ln && !c) {
                                (s.errorRecoveryDisabledLanes |= a), (lo |= a), (i = 4);
                                break e;
                            }
                            (a = ld), (ld = i), null !== a && (null === ld ? (ld = a) : ld.push.apply(ld, a));
                        }
                        i = o;
                    }
                    if (((a = !1), 2 !== i)) continue;
                }
            }
            if (1 === i) {
                lj(e, 0), lD(e, t, 0, !0);
                break;
            }
            e: {
                switch (((r = e), (a = i))) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((4194048 & t) !== t) break;
                    case 6:
                        lD(r, t, ll, !le);
                        break e;
                    case 2:
                        ld = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329));
                }
                if ((62914560 & t) === t && 10 < (i = lp + 300 - ei())) {
                    if ((lD(r, t, ll, !le), 0 !== eS(r, 0, !0))) break e;
                    r.timeoutHandle = cX(lR.bind(null, r, n, ld, lm, lf, t, ll, lo, lc, le, a, 2, -0, 0), i);
                    break e;
                }
                lR(r, n, ld, lm, lf, t, ll, lo, lc, le, a, 0, -0, 0);
            }
        }
        break;
    }
    co(e);
}
function lR(e, t, n, r, i, a, o, s, l, c, u, d, f, p) {
    if (
        ((e.timeoutHandle = -1),
        (8192 & (d = t.subtreeFlags) || 16785408 == (16785408 & d)) &&
            ((uD = {
                stylesheets: null,
                count: 0,
                unsuspend: ux,
            }),
            sX(t),
            null !== (d = uj())))
    ) {
        (e.cancelPendingCommit = d(lq.bind(null, e, t, a, n, r, i, o, s, l, u, 1, f, p))), lD(e, a, o, !c);
        return;
    }
    lq(e, t, a, n, r, i, o, s, l);
}
function lw(e) {
    for (var t = e; ; ) {
        var n = t.tag;
        if (
            (0 === n || 11 === n || 15 === n) &&
            16384 & t.flags &&
            null !== (n = t.updateQueue) &&
            null !== (n = n.stores)
        )
            for (var r = 0; r < n.length; r++) {
                var i = n[r],
                    a = i.getSnapshot;
                i = i.value;
                try {
                    if (!nU(a(), i)) return !1;
                } catch (e) {
                    return !1;
                }
            }
        if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function lD(e, t, n, r) {
    (t &= ~ls),
        (t &= ~lo),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
    for (var i = t; 0 < i; ) {
        var a = 31 - eh(i),
            o = 1 << a;
        (r[a] = -1), (i &= ~o);
    }
    0 !== n && ew(e, n, t);
}
function lx() {
    return 0 != (6 & s4) || (cs(0, !1), !1);
}
function lL() {
    if (null !== s8) {
        if (0 === s7) var e = s8.return;
        else (e = s8), (rQ = rX = null), ae(e), (or = null), (oi = 0), (e = s8);
        for (; null !== e; ) sa(e.alternate, e), (e = e.return);
        s8 = null;
    }
}
function lj(e, t) {
    var n = e.timeoutHandle;
    -1 !== n && ((e.timeoutHandle = -1), cQ(n)),
        null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
        lL(),
        (s5 = e),
        (s8 = n = rg(e.current, null)),
        (s6 = t),
        (s7 = 0),
        (s9 = null),
        (le = !1),
        (lt = eI(e, t)),
        (ln = !1),
        (lc = ll = ls = lo = la = li = 0),
        (ld = lu = null),
        (lf = !1),
        0 != (8 & t) && (t |= 32 & t);
    var r = e.entangledLanes;
    if (0 !== r)
        for (e = e.entanglements, r &= t; 0 < r; ) {
            var i = 31 - eh(r),
                a = 1 << i;
            (t |= e[i]), (r &= ~a);
        }
    return (lr = t), rs(), n;
}
function lM(e, t) {
    (iW = null),
        (k.H = a9),
        t === iE || t === iy
            ? ((t = iA()), (s7 = 3))
            : t === ib
              ? ((t = iA()), (s7 = 4))
              : (s7 = t === oj ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1),
        (s9 = t),
        null === s8 && ((li = 1), oP(e, rr(t, e.current)));
}
function lk() {
    var e = k.H;
    return (k.H = a9), null === e ? a9 : e;
}
function lU() {
    var e = k.A;
    return (k.A = s3), e;
}
function lG() {
    (li = 4),
        le || ((4194048 & s6) !== s6 && null !== of.current) || (lt = !0),
        (0 == (134217727 & la) && 0 == (134217727 & lo)) || null === s5 || lD(s5, s6, ll, !1);
}
function lZ(e, t, n) {
    var r = s4;
    s4 |= 2;
    var i = lk(),
        a = lU();
    (s5 !== e || s6 !== t) && ((lm = null), lj(e, t)), (t = !1);
    var o = li;
    e: for (;;)
        try {
            if (0 !== s7 && null !== s8) {
                var s = s8,
                    l = s9;
                switch (s7) {
                    case 8:
                        lL(), (o = 6);
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        null === of.current && (t = !0);
                        var c = s7;
                        if (((s7 = 0), (s9 = null), lW(e, s, l, c), n && lt)) {
                            o = 0;
                            break e;
                        }
                        break;
                    default:
                        (c = s7), (s7 = 0), (s9 = null), lW(e, s, l, c);
                }
            }
            lB(), (o = li);
            break;
        } catch (t) {
            lM(e, t);
        }
    return (
        t && e.shellSuspendCounter++,
        (rQ = rX = null),
        (s4 = r),
        (k.H = i),
        (k.A = a),
        null === s8 && ((s5 = null), (s6 = 0), rs()),
        o
    );
}
function lB() {
    for (; null !== s8; ) lH(s8);
}
function lF(e, t) {
    var n = s4;
    s4 |= 2;
    var r = lk(),
        i = lU();
    s5 !== e || s6 !== t ? ((lm = null), (l_ = ei() + 500), lj(e, t)) : (lt = eI(e, t));
    e: for (;;)
        try {
            if (0 !== s7 && null !== s8) {
                t = s8;
                var a = s9;
                a: switch (s7) {
                    case 1:
                        (s7 = 0), (s9 = null), lW(e, t, a, 1);
                        break;
                    case 2:
                    case 9:
                        if (iv(a)) {
                            (s7 = 0), (s9 = null), lY(t);
                            break;
                        }
                        (t = function () {
                            (2 !== s7 && 9 !== s7) || s5 !== e || (s7 = 7), co(e);
                        }),
                            a.then(t, t);
                        break e;
                    case 3:
                        s7 = 7;
                        break e;
                    case 4:
                        s7 = 5;
                        break e;
                    case 7:
                        iv(a) ? ((s7 = 0), (s9 = null), lY(t)) : ((s7 = 0), (s9 = null), lW(e, t, a, 7));
                        break;
                    case 5:
                        var o = null;
                        switch (s8.tag) {
                            case 26:
                                o = s8.memoizedState;
                            case 5:
                            case 27:
                                var s = s8;
                                if (o ? uw(o) : 1) {
                                    (s7 = 0), (s9 = null);
                                    var c = s.sibling;
                                    if (null !== c) s8 = c;
                                    else {
                                        var u = s.return;
                                        null !== u ? ((s8 = u), lK(u)) : (s8 = null);
                                    }
                                    break a;
                                }
                        }
                        (s7 = 0), (s9 = null), lW(e, t, a, 5);
                        break;
                    case 6:
                        (s7 = 0), (s9 = null), lW(e, t, a, 6);
                        break;
                    case 8:
                        lL(), (li = 6);
                        break e;
                    default:
                        throw Error(l(462));
                }
            }
            lV();
            break;
        } catch (t) {
            lM(e, t);
        }
    return ((rQ = rX = null), (k.H = r), (k.A = i), (s4 = n), null !== s8) ? 0 : ((s5 = null), (s6 = 0), rs(), li);
}
function lV() {
    for (; null !== s8 && !en(); ) lH(s8);
}
function lH(e) {
    var t = o6(e.alternate, e, lr);
    (e.memoizedProps = e.pendingProps), null === t ? lK(e) : (s8 = t);
}
function lY(e) {
    var t = e,
        n = t.alternate;
    switch (t.tag) {
        case 15:
        case 0:
            t = oY(n, t, t.pendingProps, t.type, void 0, s6);
            break;
        case 11:
            t = oY(n, t, t.pendingProps, t.type.render, t.ref, s6);
            break;
        case 5:
            ae(t);
        default:
            sa(n, t), (t = o6(n, (t = s8 = rE(t, lr)), lr));
    }
    (e.memoizedProps = e.pendingProps), null === t ? lK(e) : (s8 = t);
}
function lW(e, t, n, r) {
    (rQ = rX = null), ae(t), (or = null), (oi = 0);
    var i = t.return;
    try {
        if (oL(e, i, t, n, s6)) {
            (li = 1), oP(e, rr(n, e.current)), (s8 = null);
            return;
        }
    } catch (t) {
        if (null !== i) throw ((s8 = i), t);
        (li = 1), oP(e, rr(n, e.current)), (s8 = null);
        return;
    }
    32768 & t.flags
        ? (rU || 1 === r
              ? (e = !0)
              : lt || 0 != (536870912 & s6)
                ? (e = !1)
                : ((le = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = of.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
          lz(t, e))
        : lK(t);
}
function lK(e) {
    var t = e;
    do {
        if (0 != (32768 & t.flags)) return void lz(t, le);
        e = t.return;
        var n = sr(t.alternate, t, lr);
        if (null !== n) {
            s8 = n;
            return;
        }
        if (null !== (t = t.sibling)) {
            s8 = t;
            return;
        }
        s8 = t = e;
    } while (null !== t);
    0 === li && (li = 5);
}
function lz(e, t) {
    do {
        var n = si(e.alternate, e);
        if (null !== n) {
            (n.flags &= 32767), (s8 = n);
            return;
        }
        if (
            (null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && null !== (e = e.sibling))
        ) {
            s8 = e;
            return;
        }
        s8 = e = n;
    } while (null !== e);
    (li = 6), (s8 = null);
}
function lq(e, t, n, r, i, a, o, s, c) {
    e.cancelPendingCommit = null;
    do l0();
    while (0 !== lg);
    if (0 != (6 & s4)) throw Error(l(327));
    if (null !== t) {
        if (t === e.current) throw Error(l(177));
        if (
            (eR(e, n, (a = t.lanes | t.childLanes | ro), o, s, c),
            e === s5 && ((s8 = s5 = null), (s6 = 0)),
            (lb = t),
            (lE = e),
            (ly = n),
            (lO = a),
            (lv = i),
            (lS = r),
            0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  l9(el, function () {
                      return l1(!0), null;
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
            (r = 0 != (13878 & t.flags)),
            0 != (13878 & t.subtreeFlags) || r)
        ) {
            (r = k.T), (k.T = null), (i = U.p), (U.p = 2), (o = s4), (s4 |= 4);
            try {
                sI(e, t, n);
            } finally {
                (s4 = o), (U.p = i), (k.T = r);
            }
        }
        (lg = 1), lX(), lQ(), lJ();
    }
}
function lX() {
    if (1 === lg) {
        lg = 0;
        var e = lE,
            t = lb,
            n = 0 != (13878 & t.flags);
        if (0 != (13878 & t.subtreeFlags) || n) {
            (n = k.T), (k.T = null);
            var r = U.p;
            U.p = 2;
            var i = s4;
            s4 |= 4;
            try {
                sM(t, e);
                var a = cV,
                    o = nV(e.containerInfo),
                    s = a.focusedElem,
                    l = a.selectionRange;
                if (o !== s && s && s.ownerDocument && nF(s.ownerDocument.documentElement, s)) {
                    if (null !== l && nH(s)) {
                        var c = l.start,
                            u = l.end;
                        if ((void 0 === u && (u = c), "selectionStart" in s))
                            (s.selectionStart = c), (s.selectionEnd = Math.min(u, s.value.length));
                        else {
                            var d = s.ownerDocument || document,
                                f = (d && d.defaultView) || window;
                            if (f.getSelection) {
                                var p = f.getSelection(),
                                    _ = s.textContent.length,
                                    m = Math.min(l.start, _),
                                    h = void 0 === l.end ? m : Math.min(l.end, _);
                                !p.extend && m > h && ((o = h), (h = m), (m = o));
                                var g = nB(s, m),
                                    E = nB(s, h);
                                if (
                                    g &&
                                    E &&
                                    (1 !== p.rangeCount ||
                                        p.anchorNode !== g.node ||
                                        p.anchorOffset !== g.offset ||
                                        p.focusNode !== E.node ||
                                        p.focusOffset !== E.offset)
                                ) {
                                    var b = d.createRange();
                                    b.setStart(g.node, g.offset),
                                        p.removeAllRanges(),
                                        m > h
                                            ? (p.addRange(b), p.extend(E.node, E.offset))
                                            : (b.setEnd(E.node, E.offset), p.addRange(b));
                                }
                            }
                        }
                    }
                    for (d = [], p = s; (p = p.parentNode); )
                        1 === p.nodeType &&
                            d.push({
                                element: p,
                                left: p.scrollLeft,
                                top: p.scrollTop,
                            });
                    for ("function" == typeof s.focus && s.focus(), s = 0; s < d.length; s++) {
                        var y = d[s];
                        (y.element.scrollLeft = y.left), (y.element.scrollTop = y.top);
                    }
                }
                (uz = !!cF), (cV = cF = null);
            } finally {
                (s4 = i), (U.p = r), (k.T = n);
            }
        }
        (e.current = t), (lg = 2);
    }
}
function lQ() {
    if (2 === lg) {
        lg = 0;
        var e = lE,
            t = lb,
            n = 0 != (8772 & t.flags);
        if (0 != (8772 & t.subtreeFlags) || n) {
            (n = k.T), (k.T = null);
            var r = U.p;
            U.p = 2;
            var i = s4;
            s4 |= 4;
            try {
                sT(e, t.alternate, t);
            } finally {
                (s4 = i), (U.p = r), (k.T = n);
            }
        }
        lg = 3;
    }
}
function lJ() {
    if (4 === lg || 3 === lg) {
        (lg = 0), er();
        var e = lE,
            t = lb,
            n = ly,
            r = lS;
        0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
            ? (lg = 5)
            : ((lg = 0), (lb = lE = null), l$(e, e.pendingLanes));
        var i = e.pendingLanes;
        if ((0 === i && (lh = null), eL(n), (t = t.stateNode), e_ && "function" == typeof e_.onCommitFiberRoot))
            try {
                e_.onCommitFiberRoot(ep, t, void 0, 128 == (128 & t.current.flags));
            } catch (e) {}
        if (null !== r) {
            (t = k.T), (i = U.p), (U.p = 2), (k.T = null);
            try {
                for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                    var s = r[o];
                    a(s.value, { componentStack: s.stack });
                }
            } finally {
                (k.T = t), (U.p = i);
            }
        }
        0 != (3 & ly) && l0(),
            co(e),
            (i = e.pendingLanes),
            0 != (4194090 & n) && 0 != (42 & i) ? (e === lT ? lI++ : ((lI = 0), (lT = e))) : (lI = 0),
            cs(0, !1);
    }
}
function l$(e, t) {
    0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), ii(t));
}
function l0(e) {
    return lX(), lQ(), lJ(), l1(e);
}
function l1() {
    if (5 !== lg) return !1;
    var e = lE,
        t = lO;
    lO = 0;
    var n = eL(ly),
        r = k.T,
        i = U.p;
    try {
        (U.p = 32 > n ? 32 : n), (k.T = null), (n = lv), (lv = null);
        var a = lE,
            o = ly;
        if (((lg = 0), (lb = lE = null), (ly = 0), 0 != (6 & s4))) throw Error(l(331));
        var s = s4;
        if (
            ((s4 |= 4),
            s$(a.current),
            sY(a, a.current, o, n),
            (s4 = s),
            cs(0, !1),
            e_ && "function" == typeof e_.onPostCommitFiberRoot)
        )
            try {
                e_.onPostCommitFiberRoot(ep, a);
            } catch (e) {}
        return !0;
    } finally {
        (U.p = i), (k.T = r), l$(e, t);
    }
}
function l3(e, t, n) {
    (t = rr(n, t)), (t = ow(e.stateNode, t, 2)), null !== (e = iD(e, t, 2)) && (eP(e, 2), co(e));
}
function l2(e, t, n) {
    if (3 === e.tag) l3(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                l3(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    "function" == typeof t.type.getDerivedStateFromError ||
                    ("function" == typeof r.componentDidCatch && (null === lh || !lh.has(r)))
                ) {
                    (e = rr(n, e)), null !== (r = iD(t, (n = oD(2)), 2)) && (ox(n, r, t, e), eP(r, 2), co(r));
                    break;
                }
            }
            t = t.return;
        }
}
function l4(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new s2();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || ((ln = !0), i.add(n), (e = l5.bind(null, e, t, n)), t.then(e, e));
}
function l5(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        s5 === e &&
            (s6 & n) === n &&
            (4 === li || (3 === li && (62914560 & s6) === s6 && 300 > ei() - lp)
                ? 0 == (2 & s4) && lj(e, 0)
                : (ls |= n),
            lc === s6 && (lc = 0)),
        co(e);
}
function l8(e, t) {
    0 === t && (t = eC()), null !== (e = ru(e, t)) && (eP(e, t), co(e));
}
function l6(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), l8(e, n);
}
function l7(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            null !== i && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(l(314));
    }
    null !== r && r.delete(t), l8(e, n);
}
function l9(e, t) {
    return ee(e, t);
}
var ce = null,
    ct = null,
    cn = !1,
    cr = !1,
    ci = !1,
    ca = 0;
function co(e) {
    e !== ct && null === e.next && (null === ct ? (ce = ct = e) : (ct = ct.next = e)),
        (cr = !0),
        cn || ((cn = !0), cp());
}
function cs(e, t) {
    if (!ci && cr) {
        ci = !0;
        do
            for (var n = !1, r = ce; null !== r; ) {
                if (!t)
                    if (0 !== e) {
                        var i = r.pendingLanes;
                        if (0 === i) var a = 0;
                        else {
                            var o = r.suspendedLanes,
                                s = r.pingedLanes;
                            a =
                                201326741 & (a = ((1 << (31 - eh(42 | e) + 1)) - 1) & (i & ~(o & ~s)))
                                    ? (201326741 & a) | 1
                                    : a
                                      ? 2 | a
                                      : 0;
                        }
                        0 !== a && ((n = !0), cf(r, a));
                    } else
                        (a = s6),
                            0 ==
                                (3 &
                                    (a = eS(
                                        r,
                                        r === s5 ? a : 0,
                                        null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                                    ))) ||
                                eI(r, a) ||
                                ((n = !0), cf(r, a));
                r = r.next;
            }
        while (n);
        ci = !1;
    }
}
function cl() {
    cc();
}
function cc() {
    cr = cn = !1;
    var e = 0;
    0 !== ca && (cq() && (e = ca), (ca = 0));
    for (var t = ei(), n = null, r = ce; null !== r; ) {
        var i = r.next,
            a = cu(r, t);
        0 === a
            ? ((r.next = null), null === n ? (ce = i) : (n.next = i), null === i && (ct = n))
            : ((n = r), (0 !== e || 0 != (3 & a)) && (cr = !0)),
            (r = i);
    }
    cs(e, !1);
}
function cu(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = -62914561 & e.pendingLanes; 0 < a; ) {
        var o = 31 - eh(a),
            s = 1 << o,
            l = i[o];
        -1 === l ? (0 == (s & n) || 0 != (s & r)) && (i[o] = eT(s, t)) : l <= t && (e.expiredLanes |= s), (a &= ~s);
    }
    if (
        ((t = s5),
        (n = s6),
        (n = eS(e, e === t ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
        (r = e.callbackNode),
        0 === n || (e === t && (2 === s7 || 9 === s7)) || null !== e.cancelPendingCommit)
    )
        return null !== r && null !== r && et(r), (e.callbackNode = null), (e.callbackPriority = 0);
    if (0 == (3 & n) || eI(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch ((null !== r && et(r), eL(n))) {
            case 2:
            case 8:
                n = es;
                break;
            case 32:
            default:
                n = el;
                break;
            case 268435456:
                n = eu;
        }
        return (n = ee(n, (r = cd.bind(null, e)))), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return null !== r && null !== r && et(r), (e.callbackPriority = 2), (e.callbackNode = null), 2;
}
function cd(e, t) {
    if (0 !== lg && 5 !== lg) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (l0(!0) && e.callbackNode !== n) return null;
    var r = s6;
    return 0 === (r = eS(e, e === s5 ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
        ? null
        : (lP(e, r, t), cu(e, ei()), null != e.callbackNode && e.callbackNode === n ? cd.bind(null, e) : null);
}
function cf(e, t) {
    if (l0()) return null;
    lP(e, t, !0);
}
function cp() {
    c$(function () {
        0 != (6 & s4) ? ee(eo, cl) : cc();
    });
}
function c_() {
    return 0 === ca && (ca = eA()), ca;
}
function cm(e) {
    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : tT("" + e);
}
function ch(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
    );
}
function cg(e, t, n, r, i) {
    if ("submit" === t && n && n.stateNode === i) {
        var a = cm((i[eG] || null).action),
            o = r.submitter;
        o &&
            null !== (t = (t = o[eG] || null) ? cm(t.formAction) : o.getAttribute("formAction")) &&
            ((a = t), (o = null));
        var s = new tQ("action", "action", null, r, i);
        e.push({
            event: s,
            listeners: [
                {
                    instance: null,
                    listener: function () {
                        if (r.defaultPrevented) {
                            if (0 !== ca) {
                                var e = o ? ch(i, o) : new FormData(i);
                                aq(
                                    n,
                                    {
                                        pending: !0,
                                        data: e,
                                        method: i.method,
                                        action: a,
                                    },
                                    null,
                                    e,
                                );
                            }
                        } else
                            "function" == typeof a &&
                                (s.preventDefault(),
                                aq(
                                    n,
                                    {
                                        pending: !0,
                                        data: (e = o ? ch(i, o) : new FormData(i)),
                                        method: i.method,
                                        action: a,
                                    },
                                    a,
                                    e,
                                ));
                    },
                    currentTarget: i,
                },
            ],
        });
    }
}
for (var cE = 0; cE < re.length; cE++) {
    var cb = re[cE];
    rt(cb.toLowerCase(), "on" + (cb[0].toUpperCase() + cb.slice(1)));
}
rt(n3, "onAnimationEnd"),
    rt(n2, "onAnimationIteration"),
    rt(n4, "onAnimationStart"),
    rt("dblclick", "onDoubleClick"),
    rt("focusin", "onFocus"),
    rt("focusout", "onBlur"),
    rt(n5, "onTransitionRun"),
    rt(n8, "onTransitionStart"),
    rt(n6, "onTransitionCancel"),
    rt(n7, "onTransitionEnd"),
    e1("onMouseEnter", ["mouseout", "mouseover"]),
    e1("onMouseLeave", ["mouseout", "mouseover"]),
    e1("onPointerEnter", ["pointerout", "pointerover"]),
    e1("onPointerLeave", ["pointerout", "pointerover"]),
    e0("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    e0("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    e0("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    e0("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    e0("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    e0("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cy =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    cO = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cy));
function cv(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o],
                        l = s.instance,
                        c = s.currentTarget;
                    if (((s = s.listener), l !== a && i.isPropagationStopped())) break e;
                    (a = s), (i.currentTarget = c);
                    try {
                        a(i);
                    } catch (e) {
                        oT(e);
                    }
                    (i.currentTarget = null), (a = l);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((l = (s = r[o]).instance),
                        (c = s.currentTarget),
                        (s = s.listener),
                        l !== a && i.isPropagationStopped())
                    )
                        break e;
                    (a = s), (i.currentTarget = c);
                    try {
                        a(i);
                    } catch (e) {
                        oT(e);
                    }
                    (i.currentTarget = null), (a = l);
                }
        }
    }
}
function cS(e, t) {
    var n = t[eB];
    void 0 === n && (n = t[eB] = new Set());
    var r = e + "__bubble";
    n.has(r) || (cC(t, e, 2, !1), n.add(r));
}
function cI(e, t, n) {
    var r = 0;
    t && (r |= 4), cC(n, e, r, t);
}
var cT = "_reactListening" + Math.random().toString(36).slice(2);
function cA(e) {
    if (!e[cT]) {
        (e[cT] = !0),
            eJ.forEach(function (t) {
                "selectionchange" !== t && (cO.has(t) || cI(t, !1, e), cI(t, !0, e));
            });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[cT] || ((t[cT] = !0), cI("selectionchange", !1, t));
    }
}
function cC(e, t, n, r) {
    switch (u1(t)) {
        case 2:
            var i = uq;
            break;
        case 8:
            i = uX;
            break;
        default:
            i = uQ;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        tj && ("touchstart" === t || "touchmove" === t || "wheel" === t) && (i = !0),
        r
            ? void 0 !== i
                ? e.addEventListener(t, n, {
                      capture: !0,
                      passive: i,
                  })
                : e.addEventListener(t, n, !0)
            : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
}
function cN(e, t, n, r, i) {
    var a = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i) break;
                if (4 === o)
                    for (o = r.return; null !== o; ) {
                        var l = o.tag;
                        if ((3 === l || 4 === l) && o.stateNode.containerInfo === i) return;
                        o = o.return;
                    }
                for (; null !== s; ) {
                    if (null === (o = eK(s))) return;
                    if (5 === (l = o.tag) || 6 === l || 26 === l || 27 === l) {
                        r = a = o;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    tD(function () {
        var r = a,
            i = tC(n),
            o = [];
        e: {
            var s = n9.get(e);
            if (void 0 !== s) {
                var l = tQ,
                    c = e;
                switch (e) {
                    case "keypress":
                        if (0 === tB(n)) break e;
                    case "keydown":
                    case "keyup":
                        l = nn;
                        break;
                    case "focusin":
                        (c = "focus"), (l = t2);
                        break;
                    case "focusout":
                        (c = "blur"), (l = t2);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        l = t2;
                        break;
                    case "click":
                        if (2 === n.button) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        l = t1;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        l = t3;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        l = ni;
                        break;
                    case n3:
                    case n2:
                    case n4:
                        l = t4;
                        break;
                    case n7:
                        l = na;
                        break;
                    case "scroll":
                    case "scrollend":
                        l = t$;
                        break;
                    case "wheel":
                        l = no;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        l = t5;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        l = nr;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        l = ns;
                }
                var d = 0 != (4 & t),
                    f = !d && ("scroll" === e || "scrollend" === e),
                    p = d ? (null !== s ? s + "Capture" : null) : s;
                d = [];
                for (var _, m = r; null !== m; ) {
                    var h = m;
                    if (
                        ((_ = h.stateNode),
                        (5 !== (h = h.tag) && 26 !== h && 27 !== h) ||
                            null === _ ||
                            null === p ||
                            (null != (h = tx(m, p)) && d.push(cP(m, h, _))),
                        f)
                    )
                        break;
                    m = m.return;
                }
                0 < d.length &&
                    ((s = new l(s, c, null, n, i)),
                    o.push({
                        event: s,
                        listeners: d,
                    }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((s = "mouseover" === e || "pointerover" === e),
                (l = "mouseout" === e || "pointerout" === e),
                !(s && n !== tA && (c = n.relatedTarget || n.fromElement) && (eK(c) || c[eZ]))) &&
                (l || s) &&
                ((s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window),
                l
                    ? ((c = n.relatedTarget || n.toElement),
                      (l = r),
                      null !== (c = c ? eK(c) : null) &&
                          ((f = u(c)), (d = c.tag), c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                          (c = null))
                    : ((l = null), (c = r)),
                l !== c)
            ) {
                if (
                    ((d = t1),
                    (h = "onMouseLeave"),
                    (p = "onMouseEnter"),
                    (m = "mouse"),
                    ("pointerout" === e || "pointerover" === e) &&
                        ((d = nr), (h = "onPointerLeave"), (p = "onPointerEnter"), (m = "pointer")),
                    (f = null == l ? s : eq(l)),
                    (_ = null == c ? s : eq(c)),
                    ((s = new d(h, m + "leave", l, n, i)).target = f),
                    (s.relatedTarget = _),
                    (h = null),
                    eK(i) === r && (((d = new d(p, m + "enter", c, n, i)).target = _), (d.relatedTarget = f), (h = d)),
                    (f = h),
                    l && c)
                )
                    a: {
                        for (d = l, p = c, m = 0, _ = d; _; _ = cw(_)) m++;
                        for (_ = 0, h = p; h; h = cw(h)) _++;
                        for (; 0 < m - _; ) (d = cw(d)), m--;
                        for (; 0 < _ - m; ) (p = cw(p)), _--;
                        for (; m--; ) {
                            if (d === p || (null !== p && d === p.alternate)) break a;
                            (d = cw(d)), (p = cw(p));
                        }
                        d = null;
                    }
                else d = null;
                null !== l && cD(o, s, l, d, !1), null !== c && null !== f && cD(o, f, c, d, !0);
            }
            e: {
                if (
                    "select" === (l = (s = r ? eq(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                    ("input" === l && "file" === s.type)
                )
                    var g,
                        E = nC;
                else if (nO(s))
                    if (nN) E = nM;
                    else {
                        E = nL;
                        var b = nx;
                    }
                else
                    (l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type)
                        ? (E = nj)
                        : r && tv(r.elementType) && (E = nC);
                if (E && (E = E(e, r))) {
                    nv(o, E, n, i);
                    break e;
                }
                b && b(e, s, r),
                    "focusout" === e &&
                        r &&
                        "number" === s.type &&
                        null != r.memoizedProps.value &&
                        t_(s, "number", s.value);
            }
            switch (((b = r ? eq(r) : window), e)) {
                case "focusin":
                    (nO(b) || "true" === b.contentEditable) && ((nW = b), (nK = r), (nz = null));
                    break;
                case "focusout":
                    nz = nK = nW = null;
                    break;
                case "mousedown":
                    nq = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (nq = !1), nX(o, n, i);
                    break;
                case "selectionchange":
                    if (nY) break;
                case "keydown":
                case "keyup":
                    nX(o, n, i);
            }
            if (nc)
                a: {
                    switch (e) {
                        case "compositionstart":
                            var y = "onCompositionStart";
                            break a;
                        case "compositionend":
                            y = "onCompositionEnd";
                            break a;
                        case "compositionupdate":
                            y = "onCompositionUpdate";
                            break a;
                    }
                    y = void 0;
                }
            else
                ng
                    ? nm(e, n) && (y = "onCompositionEnd")
                    : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
            y &&
                (nf &&
                    "ko" !== n.locale &&
                    (ng || "onCompositionStart" !== y
                        ? "onCompositionEnd" === y && ng && (g = tZ())
                        : ((tU = "value" in (tk = i) ? tk.value : tk.textContent), (ng = !0))),
                0 < (b = cR(r, y)).length &&
                    ((y = new t8(y, e, null, n, i)),
                    o.push({
                        event: y,
                        listeners: b,
                    }),
                    g ? (y.data = g) : null !== (g = nh(n)) && (y.data = g))),
                (g = nd ? nE(e, n) : nb(e, n)) &&
                    0 < (y = cR(r, "onBeforeInput")).length &&
                    ((b = new t8("onBeforeInput", "beforeinput", null, n, i)),
                    o.push({
                        event: b,
                        listeners: y,
                    }),
                    (b.data = g)),
                cg(o, e, r, n, i);
        }
        cv(o, t);
    });
}
function cP(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n,
    };
}
function cR(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
        var i = e,
            a = i.stateNode;
        if (
            ((5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
                null === a ||
                (null != (i = tx(e, n)) && r.unshift(cP(e, i, a)), null != (i = tx(e, t)) && r.push(cP(e, i, a))),
            3 === e.tag)
        )
            return r;
        e = e.return;
    }
    return [];
}
function cw(e) {
    if (null === e) return null;
    do e = e.return;
    while (e && 5 !== e.tag && 27 !== e.tag);
    return e || null;
}
function cD(e, t, n, r, i) {
    for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var s = n,
            l = s.alternate,
            c = s.stateNode;
        if (((s = s.tag), null !== l && l === r)) break;
        (5 !== s && 26 !== s && 27 !== s) ||
            null === c ||
            ((l = c),
            i
                ? null != (c = tx(n, a)) && o.unshift(cP(n, c, l))
                : i || (null != (c = tx(n, a)) && o.push(cP(n, c, l)))),
            (n = n.return);
    }
    0 !== o.length &&
        e.push({
            event: t,
            listeners: o,
        });
}
var cx = /\r\n?/g,
    cL = /\u0000|\uFFFD/g;
function cj(e) {
    return ("string" == typeof e ? e : "" + e).replace(cx, "\n").replace(cL, "");
}
function cM(e, t) {
    return (t = cj(t)), cj(e) === t;
}
function ck() {}
function cU(e, t, n, r, i, a) {
    switch (n) {
        case "children":
            "string" == typeof r
                ? "body" === t || ("textarea" === t && "" === r) || tE(e, r)
                : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && tE(e, "" + r);
            break;
        case "className":
            e6(e, "class", r);
            break;
        case "tabIndex":
            e6(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            e6(e, n, r);
            break;
        case "style":
            tO(e, r, a);
            break;
        case "data":
            if ("object" !== t) {
                e6(e, "data", r);
                break;
            }
        case "src":
        case "href":
            if (
                ("" === r && ("a" !== t || "href" !== n)) ||
                null == r ||
                "function" == typeof r ||
                "symbol" == typeof r ||
                "boolean" == typeof r
            ) {
                e.removeAttribute(n);
                break;
            }
            (r = tT("" + r)), e.setAttribute(n, r);
            break;
        case "action":
        case "formAction":
            if ("function" == typeof r) {
                e.setAttribute(
                    n,
                    "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
            }
            if (
                ("function" == typeof a &&
                    ("formAction" === n
                        ? ("input" !== t && cU(e, t, "name", i.name, i, null),
                          cU(e, t, "formEncType", i.formEncType, i, null),
                          cU(e, t, "formMethod", i.formMethod, i, null),
                          cU(e, t, "formTarget", i.formTarget, i, null))
                        : (cU(e, t, "encType", i.encType, i, null),
                          cU(e, t, "method", i.method, i, null),
                          cU(e, t, "target", i.target, i, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
            ) {
                e.removeAttribute(n);
                break;
            }
            (r = tT("" + r)), e.setAttribute(n, r);
            break;
        case "onClick":
            null != r && (e.onclick = ck);
            break;
        case "onScroll":
            null != r && cS("scroll", e);
            break;
        case "onScrollEnd":
            null != r && cS("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                    if (null != i.children) throw Error(l(60));
                    e.innerHTML = n;
                }
            }
            break;
        case "multiple":
            e.multiple = r && "function" != typeof r && "symbol" != typeof r;
            break;
        case "muted":
            e.muted = r && "function" != typeof r && "symbol" != typeof r;
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
        case "autoFocus":
        case "innerText":
        case "textContent":
            break;
        case "xlinkHref":
            if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                e.removeAttribute("xlink:href");
                break;
            }
            (n = tT("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            null != r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
            break;
        case "capture":
        case "download":
            !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r
                  ? e.setAttribute(n, r)
                  : e.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
            break;
        case "popover":
            cS("beforetoggle", e), cS("toggle", e), e8(e, "popover", r);
            break;
        case "xlinkActuate":
            e7(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            e7(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            e7(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            e7(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            e7(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            e7(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            e7(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            e7(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            e7(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            e8(e, "is", r);
            break;
        default:
            (2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) ||
                e8(e, (n = tS.get(n) || n), r);
    }
}
function cG(e, t, n, r, i, a) {
    switch (n) {
        case "style":
            tO(e, r, a);
            break;
        case "dangerouslySetInnerHTML":
            if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                    if (null != i.children) throw Error(l(60));
                    e.innerHTML = n;
                }
            }
            break;
        case "children":
            "string" == typeof r ? tE(e, r) : ("number" == typeof r || "bigint" == typeof r) && tE(e, "" + r);
            break;
        case "onScroll":
            null != r && cS("scroll", e);
            break;
        case "onScrollEnd":
            null != r && cS("scrollend", e);
            break;
        case "onClick":
            null != r && (e.onclick = ck);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
            break;
        default:
            if (!e$.hasOwnProperty(n))
                e: {
                    if (
                        "o" === n[0] &&
                        "n" === n[1] &&
                        ((i = n.endsWith("Capture")),
                        (t = n.slice(2, i ? n.length - 7 : void 0)),
                        "function" == typeof (a = null != (a = e[eG] || null) ? a[n] : null) &&
                            e.removeEventListener(t, a, i),
                        "function" == typeof r)
                    ) {
                        "function" != typeof a &&
                            null !== a &&
                            (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                            e.addEventListener(t, r, i);
                        break e;
                    }
                    n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, "") : e8(e, n, r);
                }
    }
}
function cZ(e, t, n) {
    switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            cS("error", e), cS("load", e);
            var r,
                i = !1,
                a = !1;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var o = n[r];
                    if (null != o)
                        switch (r) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(l(137, t));
                            default:
                                cU(e, t, r, o, n, null);
                        }
                }
            a && cU(e, t, "srcSet", n.srcSet, n, null), i && cU(e, t, "src", n.src, n, null);
            return;
        case "input":
            cS("invalid", e);
            var s = (r = o = a = null),
                c = null,
                u = null;
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    var d = n[i];
                    if (null != d)
                        switch (i) {
                            case "name":
                                a = d;
                                break;
                            case "type":
                                o = d;
                                break;
                            case "checked":
                                c = d;
                                break;
                            case "defaultChecked":
                                u = d;
                                break;
                            case "value":
                                r = d;
                                break;
                            case "defaultValue":
                                s = d;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != d) throw Error(l(137, t));
                                break;
                            default:
                                cU(e, t, i, d, n, null);
                        }
                }
            tp(e, r, s, c, u, o, a, !1), ts(e);
            return;
        case "select":
            for (a in (cS("invalid", e), (i = o = r = null), n))
                if (n.hasOwnProperty(a) && null != (s = n[a]))
                    switch (a) {
                        case "value":
                            r = s;
                            break;
                        case "defaultValue":
                            o = s;
                            break;
                        case "multiple":
                            i = s;
                        default:
                            cU(e, t, a, s, n, null);
                    }
            (t = r), (n = o), (e.multiple = !!i), null != t ? tm(e, !!i, t, !1) : null != n && tm(e, !!i, n, !0);
            return;
        case "textarea":
            for (o in (cS("invalid", e), (r = a = i = null), n))
                if (n.hasOwnProperty(o) && null != (s = n[o]))
                    switch (o) {
                        case "value":
                            i = s;
                            break;
                        case "defaultValue":
                            a = s;
                            break;
                        case "children":
                            r = s;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != s) throw Error(l(91));
                            break;
                        default:
                            cU(e, t, o, s, n, null);
                    }
            tg(e, i, a, r), ts(e);
            return;
        case "option":
            for (c in n)
                n.hasOwnProperty(c) &&
                    null != (i = n[c]) &&
                    ("selected" === c
                        ? (e.selected = i && "function" != typeof i && "symbol" != typeof i)
                        : cU(e, t, c, i, n, null));
            return;
        case "dialog":
            cS("beforetoggle", e), cS("toggle", e), cS("cancel", e), cS("close", e);
            break;
        case "iframe":
        case "object":
            cS("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < cy.length; i++) cS(cy[i], e);
            break;
        case "image":
            cS("error", e), cS("load", e);
            break;
        case "details":
            cS("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            cS("error", e), cS("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (u in n)
                if (n.hasOwnProperty(u) && null != (i = n[u]))
                    switch (u) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            cU(e, t, u, i, n, null);
                    }
            return;
        default:
            if (tv(t)) {
                for (d in n) n.hasOwnProperty(d) && void 0 !== (i = n[d]) && cG(e, t, d, i, n, void 0);
                return;
            }
    }
    for (s in n) n.hasOwnProperty(s) && null != (i = n[s]) && cU(e, t, s, i, n, null);
}
function cB(e, t, n, r) {
    switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var i = null,
                a = null,
                o = null,
                s = null,
                c = null,
                u = null,
                d = null;
            for (_ in n) {
                var f = n[_];
                if (n.hasOwnProperty(_) && null != f)
                    switch (_) {
                        case "checked":
                        case "value":
                            break;
                        case "defaultValue":
                            c = f;
                        default:
                            r.hasOwnProperty(_) || cU(e, t, _, null, r, f);
                    }
            }
            for (var p in r) {
                var _ = r[p];
                if (((f = n[p]), r.hasOwnProperty(p) && (null != _ || null != f)))
                    switch (p) {
                        case "type":
                            a = _;
                            break;
                        case "name":
                            i = _;
                            break;
                        case "checked":
                            u = _;
                            break;
                        case "defaultChecked":
                            d = _;
                            break;
                        case "value":
                            o = _;
                            break;
                        case "defaultValue":
                            s = _;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (null != _) throw Error(l(137, t));
                            break;
                        default:
                            _ !== f && cU(e, t, p, _, r, f);
                    }
            }
            tf(e, o, s, c, u, d, a, i);
            return;
        case "select":
            for (a in ((_ = o = s = p = null), n))
                if (((c = n[a]), n.hasOwnProperty(a) && null != c))
                    switch (a) {
                        case "value":
                            break;
                        case "multiple":
                            _ = c;
                        default:
                            r.hasOwnProperty(a) || cU(e, t, a, null, r, c);
                    }
            for (i in r)
                if (((a = r[i]), (c = n[i]), r.hasOwnProperty(i) && (null != a || null != c)))
                    switch (i) {
                        case "value":
                            p = a;
                            break;
                        case "defaultValue":
                            s = a;
                            break;
                        case "multiple":
                            o = a;
                        default:
                            a !== c && cU(e, t, i, a, r, c);
                    }
            (t = s),
                (n = o),
                (r = _),
                null != p
                    ? tm(e, !!n, p, !1)
                    : !!r != !!n && (null != t ? tm(e, !!n, t, !0) : tm(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            for (s in ((_ = p = null), n))
                if (((i = n[s]), n.hasOwnProperty(s) && null != i && !r.hasOwnProperty(s)))
                    switch (s) {
                        case "value":
                        case "children":
                            break;
                        default:
                            cU(e, t, s, null, r, i);
                    }
            for (o in r)
                if (((i = r[o]), (a = n[o]), r.hasOwnProperty(o) && (null != i || null != a)))
                    switch (o) {
                        case "value":
                            p = i;
                            break;
                        case "defaultValue":
                            _ = i;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != i) throw Error(l(91));
                            break;
                        default:
                            i !== a && cU(e, t, o, i, r, a);
                    }
            th(e, p, _);
            return;
        case "option":
            for (var m in n)
                (p = n[m]),
                    n.hasOwnProperty(m) &&
                        null != p &&
                        !r.hasOwnProperty(m) &&
                        ("selected" === m ? (e.selected = !1) : cU(e, t, m, null, r, p));
            for (c in r)
                (p = r[c]),
                    (_ = n[c]),
                    r.hasOwnProperty(c) &&
                        p !== _ &&
                        (null != p || null != _) &&
                        ("selected" === c
                            ? (e.selected = p && "function" != typeof p && "symbol" != typeof p)
                            : cU(e, t, c, p, r, _));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var h in n)
                (p = n[h]), n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h) && cU(e, t, h, null, r, p);
            for (u in r)
                if (((p = r[u]), (_ = n[u]), r.hasOwnProperty(u) && p !== _ && (null != p || null != _)))
                    switch (u) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (null != p) throw Error(l(137, t));
                            break;
                        default:
                            cU(e, t, u, p, r, _);
                    }
            return;
        default:
            if (tv(t)) {
                for (var g in n)
                    (p = n[g]),
                        n.hasOwnProperty(g) && void 0 !== p && !r.hasOwnProperty(g) && cG(e, t, g, void 0, r, p);
                for (d in r)
                    (p = r[d]),
                        (_ = n[d]),
                        r.hasOwnProperty(d) && p !== _ && (void 0 !== p || void 0 !== _) && cG(e, t, d, p, r, _);
                return;
            }
    }
    for (var E in n) (p = n[E]), n.hasOwnProperty(E) && null != p && !r.hasOwnProperty(E) && cU(e, t, E, null, r, p);
    for (f in r)
        (p = r[f]), (_ = n[f]), r.hasOwnProperty(f) && p !== _ && (null != p || null != _) && cU(e, t, f, p, r, _);
}
var cF = null,
    cV = null;
function cH(e) {
    return 9 === e.nodeType ? e : e.ownerDocument;
}
function cY(e) {
    switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0;
    }
}
function cW(e, t) {
    if (0 === e)
        switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0;
        }
    return 1 === e && "foreignObject" === t ? 0 : e;
}
function cK(e, t) {
    return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        "bigint" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
    );
}
var cz = null;
function cq() {
    var e = window.event;
    return e && "popstate" === e.type ? e !== cz && ((cz = e), !0) : ((cz = null), !1);
}
var cX = "function" == typeof setTimeout ? setTimeout : void 0,
    cQ = "function" == typeof clearTimeout ? clearTimeout : void 0,
    cJ = "function" == typeof Promise ? Promise : void 0,
    c$ =
        "function" == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== cJ
              ? function (e) {
                    return cJ.resolve(null).then(e).catch(c0);
                }
              : cX;
function c0(e) {
    setTimeout(function () {
        throw e;
    });
}
function c1(e) {
    return "head" === e;
}
function c3(e, t) {
    var n = t,
        r = 0,
        i = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ("/$" === (n = a.data)) {
                if (0 < r && 8 > r) {
                    n = r;
                    var o = e.ownerDocument;
                    if ((1 & n && un(o.documentElement), 2 & n && un(o.body), 4 & n))
                        for (un((n = o.head)), o = n.firstChild; o; ) {
                            var s = o.nextSibling,
                                l = o.nodeName;
                            o[eY] ||
                                "SCRIPT" === l ||
                                "STYLE" === l ||
                                ("LINK" === l && "stylesheet" === o.rel.toLowerCase()) ||
                                n.removeChild(o),
                                (o = s);
                        }
                }
                if (0 === i) {
                    e.removeChild(a), dd(t);
                    return;
                }
                i--;
            } else "$" === n || "$?" === n || "$!" === n ? i++ : (r = n.charCodeAt(0) - 48);
        else r = 0;
        n = a;
    } while (n);
    dd(t);
}
function c2(e) {
    var t = e.firstChild;
    for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
            case "HTML":
            case "HEAD":
            case "BODY":
                c2(n), eW(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
        }
        e.removeChild(n);
    }
}
function c4(e, t, n, r) {
    for (; 1 === e.nodeType; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
        } else if (r) {
            if (!e[eY])
                switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (
                            ("stylesheet" === (a = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) ||
                            a !== i.rel ||
                            e.getAttribute("href") !== (null == i.href || "" === i.href ? null : i.href) ||
                            e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin) ||
                            e.getAttribute("title") !== (null == i.title ? null : i.title)
                        )
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (
                            ((a = e.getAttribute("src")) !== (null == i.src ? null : i.src) ||
                                e.getAttribute("type") !== (null == i.type ? null : i.type) ||
                                e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin)) &&
                            a &&
                            e.hasAttribute("async") &&
                            !e.hasAttribute("itemprop")
                        )
                            break;
                        return e;
                    default:
                        return e;
                }
        } else {
            if ("input" !== t || "hidden" !== e.type) return e;
            var a = null == i.name ? null : "" + i.name;
            if ("hidden" === i.type && e.getAttribute("name") === a) return e;
        }
        if (null === (e = c7(e.nextSibling))) break;
    }
    return null;
}
function c5(e, t, n) {
    if ("" === t) return null;
    for (; 3 !== e.nodeType; )
        if (
            ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) ||
            null === (e = c7(e.nextSibling))
        )
            return null;
    return e;
}
function c8(e) {
    return "$!" === e.data || ("$?" === e.data && "complete" === e.ownerDocument.readyState);
}
function c6(e, t) {
    var n = e.ownerDocument;
    if ("$?" !== e.data || "complete" === n.readyState) t();
    else {
        var r = function () {
            t(), n.removeEventListener("DOMContentLoaded", r);
        };
        n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
    }
}
function c7(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t) break;
            if ("/$" === t) return null;
        }
    }
    return e;
}
var c9 = null;
function ue(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
            } else "/$" === n && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
function ut(e, t, n) {
    switch (((t = cH(n)), e)) {
        case "html":
            if (!(e = t.documentElement)) throw Error(l(452));
            return e;
        case "head":
            if (!(e = t.head)) throw Error(l(453));
            return e;
        case "body":
            if (!(e = t.body)) throw Error(l(454));
            return e;
        default:
            throw Error(l(451));
    }
}
function un(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    eW(e);
}
var ur = new Map(),
    ui = new Set();
function ua(e) {
    return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
}
var uo = U.d;
U.d = {
    f: function e() {
        var e = uo.f(),
            t = lx();
        return e || t;
    },
    r: function e(e) {
        var t = ez(e);
        null !== t && 5 === t.tag && "form" === t.type ? aQ(t) : uo.r(e);
    },
    D: uc,
    C: uu,
    L: ud,
    m: uf,
    X: u_,
    S: up,
    M: um,
};
var us = "undefined" == typeof document ? null : document;
function ul(e, t, n) {
    var r = us;
    if (r && "string" == typeof t && t) {
        var i = td(t);
        (i = 'link[rel="' + e + '"][href="' + i + '"]'),
            "string" == typeof n && (i += '[crossorigin="' + n + '"]'),
            ui.has(i) ||
                (ui.add(i),
                (e = {
                    rel: e,
                    crossOrigin: n,
                    href: t,
                }),
                null === r.querySelector(i) &&
                    (cZ((t = r.createElement("link")), "link", e), eQ(t), r.head.appendChild(t)));
    }
}
function uc(e) {
    uo.D(e), ul("dns-prefetch", e, null);
}
function uu(e, t) {
    uo.C(e, t), ul("preconnect", e, t);
}
function ud(e, t, n) {
    uo.L(e, t, n);
    var r = us;
    if (r && e && t) {
        var i = 'link[rel="preload"][as="' + td(t) + '"]';
        "image" === t && n && n.imageSrcSet
            ? ((i += '[imagesrcset="' + td(n.imageSrcSet) + '"]'),
              "string" == typeof n.imageSizes && (i += '[imagesizes="' + td(n.imageSizes) + '"]'))
            : (i += '[href="' + td(e) + '"]');
        var a = i;
        switch (t) {
            case "style":
                a = ug(e);
                break;
            case "script":
                a = uO(e);
        }
        ur.has(a) ||
            ((e = m(
                {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                },
                n,
            )),
            ur.set(a, e),
            null !== r.querySelector(i) ||
                ("style" === t && r.querySelector(uE(a))) ||
                ("script" === t && r.querySelector(uv(a))) ||
                (cZ((t = r.createElement("link")), "link", e), eQ(t), r.head.appendChild(t)));
    }
}
function uf(e, t) {
    uo.m(e, t);
    var n = us;
    if (n && e) {
        var r = t && "string" == typeof t.as ? t.as : "script",
            i = 'link[rel="modulepreload"][as="' + td(r) + '"][href="' + td(e) + '"]',
            a = i;
        switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                a = uO(e);
        }
        if (
            !ur.has(a) &&
            ((e = m(
                {
                    rel: "modulepreload",
                    href: e,
                },
                t,
            )),
            ur.set(a, e),
            null === n.querySelector(i))
        ) {
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(uv(a))) return;
            }
            cZ((r = n.createElement("link")), "link", e), eQ(r), n.head.appendChild(r);
        }
    }
}
function up(e, t, n) {
    uo.S(e, t, n);
    var r = us;
    if (r && e) {
        var i = eX(r).hoistableStyles,
            a = ug(e);
        t = t || "default";
        var o = i.get(a);
        if (!o) {
            var s = {
                loading: 0,
                preload: null,
            };
            if ((o = r.querySelector(uE(a)))) s.loading = 5;
            else {
                (e = m(
                    {
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t,
                    },
                    n,
                )),
                    (n = ur.get(a)) && uT(e, n);
                var l = (o = r.createElement("link"));
                eQ(l),
                    cZ(l, "link", e),
                    (l._p = new Promise(function (e, t) {
                        (l.onload = e), (l.onerror = t);
                    })),
                    l.addEventListener("load", function () {
                        s.loading |= 1;
                    }),
                    l.addEventListener("error", function () {
                        s.loading |= 2;
                    }),
                    (s.loading |= 4),
                    uI(o, t, r);
            }
            (o = {
                type: "stylesheet",
                instance: o,
                count: 1,
                state: s,
            }),
                i.set(a, o);
        }
    }
}
function u_(e, t) {
    uo.X(e, t);
    var n = us;
    if (n && e) {
        var r = eX(n).hoistableScripts,
            i = uO(e),
            a = r.get(i);
        a ||
            ((a = n.querySelector(uv(i))) ||
                ((e = m(
                    {
                        src: e,
                        async: !0,
                    },
                    t,
                )),
                (t = ur.get(i)) && uA(e, t),
                eQ((a = n.createElement("script"))),
                cZ(a, "link", e),
                n.head.appendChild(a)),
            (a = {
                type: "script",
                instance: a,
                count: 1,
                state: null,
            }),
            r.set(i, a));
    }
}
function um(e, t) {
    uo.M(e, t);
    var n = us;
    if (n && e) {
        var r = eX(n).hoistableScripts,
            i = uO(e),
            a = r.get(i);
        a ||
            ((a = n.querySelector(uv(i))) ||
                ((e = m(
                    {
                        src: e,
                        async: !0,
                        type: "module",
                    },
                    t,
                )),
                (t = ur.get(i)) && uA(e, t),
                eQ((a = n.createElement("script"))),
                cZ(a, "link", e),
                n.head.appendChild(a)),
            (a = {
                type: "script",
                instance: a,
                count: 1,
                state: null,
            }),
            r.set(i, a));
    }
}
function uh(e, t, n, r) {
    var i = (i = K.current) ? ua(i) : null;
    if (!i) throw Error(l(446));
    switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return "string" == typeof n.precedence && "string" == typeof n.href
                ? ((t = ug(n.href)),
                  (r = (n = eX(i).hoistableStyles).get(t)) ||
                      ((r = {
                          type: "style",
                          instance: null,
                          count: 0,
                          state: null,
                      }),
                      n.set(t, r)),
                  r)
                : {
                      type: "void",
                      instance: null,
                      count: 0,
                      state: null,
                  };
        case "link":
            if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                e = ug(n.href);
                var a = eX(i).hoistableStyles,
                    o = a.get(e);
                if (
                    (o ||
                        ((i = i.ownerDocument || i),
                        (o = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null,
                            },
                        }),
                        a.set(e, o),
                        (a = i.querySelector(uE(e))) && !a._p && ((o.instance = a), (o.state.loading = 5)),
                        ur.has(e) ||
                            ((n = {
                                rel: "preload",
                                as: "style",
                                href: n.href,
                                crossOrigin: n.crossOrigin,
                                integrity: n.integrity,
                                media: n.media,
                                hrefLang: n.hrefLang,
                                referrerPolicy: n.referrerPolicy,
                            }),
                            ur.set(e, n),
                            a || uy(i, e, n, o.state))),
                    t && null === r)
                )
                    throw Error(l(528, ""));
                return o;
            }
            if (t && null !== r) throw Error(l(529, ""));
            return null;
        case "script":
            return (
                (t = n.async),
                "string" == typeof (n = n.src) && t && "function" != typeof t && "symbol" != typeof t
                    ? ((t = uO(n)),
                      (r = (n = eX(i).hoistableScripts).get(t)) ||
                          ((r = {
                              type: "script",
                              instance: null,
                              count: 0,
                              state: null,
                          }),
                          n.set(t, r)),
                      r)
                    : {
                          type: "void",
                          instance: null,
                          count: 0,
                          state: null,
                      }
            );
        default:
            throw Error(l(444, e));
    }
}
function ug(e) {
    return 'href="' + td(e) + '"';
}
function uE(e) {
    return 'link[rel="stylesheet"][' + e + "]";
}
function ub(e) {
    return m({}, e, {
        "data-precedence": e.precedence,
        precedence: null,
    });
}
function uy(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
        ? (r.loading = 1)
        : ((r.preload = t = e.createElement("link")),
          t.addEventListener("load", function () {
              return (r.loading |= 1);
          }),
          t.addEventListener("error", function () {
              return (r.loading |= 2);
          }),
          cZ(t, "link", n),
          eQ(t),
          e.head.appendChild(t));
}
function uO(e) {
    return '[src="' + td(e) + '"]';
}
function uv(e) {
    return "script[async]" + e;
}
function uS(e, t, n) {
    if ((t.count++, null === t.instance))
        switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + td(n.href) + '"]');
                if (r) return (t.instance = r), eQ(r), r;
                var i = m({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null,
                });
                return (
                    eQ((r = (e.ownerDocument || e).createElement("style"))),
                    cZ(r, "style", i),
                    uI(r, n.precedence, e),
                    (t.instance = r)
                );
            case "stylesheet":
                i = ug(n.href);
                var a = e.querySelector(uE(i));
                if (a) return (t.state.loading |= 4), (t.instance = a), eQ(a), a;
                (r = ub(n)), (i = ur.get(i)) && uT(r, i), eQ((a = (e.ownerDocument || e).createElement("link")));
                var o = a;
                return (
                    (o._p = new Promise(function (e, t) {
                        (o.onload = e), (o.onerror = t);
                    })),
                    cZ(a, "link", r),
                    (t.state.loading |= 4),
                    uI(a, n.precedence, e),
                    (t.instance = a)
                );
            case "script":
                if (((a = uO(n.src)), (i = e.querySelector(uv(a))))) return (t.instance = i), eQ(i), i;
                return (
                    (r = n),
                    (i = ur.get(a)) && uA((r = m({}, n)), i),
                    eQ((i = (e = e.ownerDocument || e).createElement("script"))),
                    cZ(i, "link", r),
                    e.head.appendChild(i),
                    (t.instance = i)
                );
            case "void":
                return null;
            default:
                throw Error(l(443, t.type));
        }
    return (
        "stylesheet" === t.type &&
            0 == (4 & t.state.loading) &&
            ((r = t.instance), (t.state.loading |= 4), uI(r, n.precedence, e)),
        t.instance
    );
}
function uI(e, t, n) {
    for (
        var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
            i = r.length ? r[r.length - 1] : null,
            a = i,
            o = 0;
        o < r.length;
        o++
    ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
    }
    a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
}
function uT(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.title && (e.title = t.title);
}
function uA(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.integrity && (e.integrity = t.integrity);
}
var uC = null;
function uN(e, t, n) {
    if (null === uC) {
        var r = new Map(),
            i = (uC = new Map());
        i.set(n, r);
    } else (r = (i = uC).get(n)) || ((r = new Map()), i.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
            !(a[eY] || a[eU] || ("link" === e && "stylesheet" === a.getAttribute("rel"))) &&
            "http://www.w3.org/2000/svg" !== a.namespaceURI
        ) {
            var o = a.getAttribute(t) || "";
            o = e + o;
            var s = r.get(o);
            s ? s.push(a) : r.set(o, [a]);
        }
    }
    return r;
}
function uP(e, t, n) {
    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null);
}
function uR(e, t, n) {
    if (1 === n || null != t.itemProp) return !1;
    switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
            return !0;
        case "link":
            if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
            if ("stylesheet" === t.rel) return (e = t.disabled), "string" == typeof t.precedence && null == e;
            return !0;
        case "script":
            if (
                t.async &&
                "function" != typeof t.async &&
                "symbol" != typeof t.async &&
                !t.onLoad &&
                !t.onError &&
                t.src &&
                "string" == typeof t.src
            )
                return !0;
    }
    return !1;
}
function uw(e) {
    return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
}
var uD = null;
function ux() {}
function uL(e, t, n) {
    if (null === uD) throw Error(l(475));
    var r = uD;
    if (
        "stylesheet" === t.type &&
        ("string" != typeof n.media || !1 !== matchMedia(n.media).matches) &&
        0 == (4 & t.state.loading)
    ) {
        if (null === t.instance) {
            var i = ug(n.href),
                a = e.querySelector(uE(i));
            if (a) {
                null !== (e = a._p) &&
                    "object" == typeof e &&
                    "function" == typeof e.then &&
                    (r.count++, (r = uM.bind(r)), e.then(r, r)),
                    (t.state.loading |= 4),
                    (t.instance = a),
                    eQ(a);
                return;
            }
            (a = e.ownerDocument || e), (n = ub(n)), (i = ur.get(i)) && uT(n, i), eQ((a = a.createElement("link")));
            var o = a;
            (o._p = new Promise(function (e, t) {
                (o.onload = e), (o.onerror = t);
            })),
                cZ(a, "link", n),
                (t.instance = a);
        }
        null === r.stylesheets && (r.stylesheets = new Map()),
            r.stylesheets.set(t, e),
            (e = t.state.preload) &&
                0 == (3 & t.state.loading) &&
                (r.count++, (t = uM.bind(r)), e.addEventListener("load", t), e.addEventListener("error", t));
    }
}
function uj() {
    if (null === uD) throw Error(l(475));
    var e = uD;
    return (
        e.stylesheets && 0 === e.count && uU(e, e.stylesheets),
        0 < e.count
            ? function (t) {
                  var n = setTimeout(function () {
                      if ((e.stylesheets && uU(e, e.stylesheets), e.unsuspend)) {
                          var t = e.unsuspend;
                          (e.unsuspend = null), t();
                      }
                  }, 60000);
                  return (
                      (e.unsuspend = t),
                      function () {
                          (e.unsuspend = null), clearTimeout(n);
                      }
                  );
              }
            : null
    );
}
function uM() {
    if ((this.count--, 0 === this.count)) {
        if (this.stylesheets) uU(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            (this.unsuspend = null), e();
        }
    }
}
var uk = null;
function uU(e, t) {
    (e.stylesheets = null),
        null !== e.unsuspend && (e.count++, (uk = new Map()), t.forEach(uG, e), (uk = null), uM.call(e));
}
function uG(e, t) {
    if (!(4 & t.state.loading)) {
        var n = uk.get(e);
        if (n) var r = n.get(null);
        else {
            (n = new Map()), uk.set(e, n);
            for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
                var o = i[a];
                ("LINK" === o.nodeName || "not all" !== o.getAttribute("media")) &&
                    (n.set(o.dataset.precedence, o), (r = o));
            }
            r && n.set(null, r);
        }
        (o = (i = t.instance).getAttribute("data-precedence")),
            (a = n.get(o) || r) === r && n.set(null, i),
            n.set(o, i),
            this.count++,
            (r = uM.bind(this)),
            i.addEventListener("load", r),
            i.addEventListener("error", r),
            a
                ? a.parentNode.insertBefore(i, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild),
            (t.state.loading |= 4);
    }
}
var uZ = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
};
function uB(e, t, n, r, i, a, o, s) {
    (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
        (this.callbackPriority = 0),
        (this.expirationTimes = eN(-1)),
        (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = eN(0)),
        (this.hiddenUpdates = eN(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = s),
        (this.incompleteTransitions = new Map());
}
function uF(e, t, n, r, i, a, o, s, l, c, u, d) {
    return (
        (e = new uB(e, t, n, o, s, l, c, d)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = rm(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ir()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: t,
        }),
        iP(a),
        e
    );
}
function uV(e) {
    return e ? (e = rp) : rp;
}
function uH(e, t, n, r, i, a) {
    (i = uV(i)),
        null === r.context ? (r.context = i) : (r.pendingContext = i),
        ((r = iw(t)).payload = { element: n }),
        null !== (a = void 0 === a ? null : a) && (r.callback = a),
        null !== (n = iD(e, r, t)) && (lN(n, e, t), ix(n, e, t));
}
function uY(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function uW(e, t) {
    uY(e, t), (e = e.alternate) && uY(e, t);
}
function uK(e) {
    if (13 === e.tag) {
        var t = ru(e, 67108864);
        null !== t && lN(t, e, 67108864), uW(e, 67108864);
    }
}
var uz = !0;
function uq(e, t, n, r) {
    var i = k.T;
    k.T = null;
    var a = U.p;
    try {
        (U.p = 2), uQ(e, t, n, r);
    } finally {
        (U.p = a), (k.T = i);
    }
}
function uX(e, t, n, r) {
    var i = k.T;
    k.T = null;
    var a = U.p;
    try {
        (U.p = 8), uQ(e, t, n, r);
    } finally {
        (U.p = a), (k.T = i);
    }
}
function uQ(e, t, n, r) {
    if (uz) {
        var i = uJ(r);
        if (null === i) cN(e, t, r, u$, n), de(e, r);
        else if (dn(i, e, t, n, r)) r.stopPropagation();
        else if ((de(e, r), 4 & t && -1 < u9.indexOf(e))) {
            for (; null !== i; ) {
                var a = ez(i);
                if (null !== a)
                    switch (a.tag) {
                        case 3:
                            if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                var o = ev(a.pendingLanes);
                                if (0 !== o) {
                                    var s = a;
                                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                                        var l = 1 << (31 - eh(o));
                                        (s.entanglements[1] |= l), (o &= ~l);
                                    }
                                    co(a), 0 == (6 & s4) && ((l_ = ei() + 500), cs(0, !1));
                                }
                            }
                            break;
                        case 13:
                            null !== (s = ru(a, 2)) && lN(s, a, 2), lx(), uW(a, 2);
                    }
                if ((null === (a = uJ(r)) && cN(e, t, r, u$, n), a === i)) break;
                i = a;
            }
            null !== i && r.stopPropagation();
        } else cN(e, t, r, null, n);
    }
}
function uJ(e) {
    return u0((e = tC(e)));
}
var u$ = null;
function u0(e) {
    if (((u$ = null), null !== (e = eK(e)))) {
        var t = u(e);
        if (null === t) e = null;
        else {
            var n = t.tag;
            if (13 === n) {
                if (null !== (e = d(t))) return e;
                e = null;
            } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        }
    }
    return (u$ = e), null;
}
function u1(e) {
    switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (ea()) {
                case eo:
                    return 2;
                case es:
                    return 8;
                case el:
                case ec:
                    return 32;
                case eu:
                    return 268435456;
                default:
                    return 32;
            }
        default:
            return 32;
    }
}
var u3 = !1,
    u2 = null,
    u4 = null,
    u5 = null,
    u8 = new Map(),
    u6 = new Map(),
    u7 = [],
    u9 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
            " ",
        );
function de(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            u2 = null;
            break;
        case "dragenter":
        case "dragleave":
            u4 = null;
            break;
        case "mouseover":
        case "mouseout":
            u5 = null;
            break;
        case "pointerover":
        case "pointerout":
            u8.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            u6.delete(t.pointerId);
    }
}
function dt(e, t, n, r, i, a) {
    return (
        null === e || e.nativeEvent !== a
            ? ((e = {
                  blockedOn: t,
                  domEventName: n,
                  eventSystemFlags: r,
                  nativeEvent: a,
                  targetContainers: [i],
              }),
              null !== t && null !== (t = ez(t)) && uK(t))
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i)),
        e
    );
}
function dn(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (u2 = dt(u2, e, t, n, r, i)), !0;
        case "dragenter":
            return (u4 = dt(u4, e, t, n, r, i)), !0;
        case "mouseover":
            return (u5 = dt(u5, e, t, n, r, i)), !0;
        case "pointerover":
            var a = i.pointerId;
            return u8.set(a, dt(u8.get(a) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (a = i.pointerId), u6.set(a, dt(u6.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function dr(e) {
    var t = eK(e.target);
    if (null !== t) {
        var n = u(t);
        if (null !== n) {
            if (13 === (t = n.tag)) {
                if (null !== (t = d(n))) {
                    (e.blockedOn = t),
                        eM(e.priority, function () {
                            if (13 === n.tag) {
                                var e = lA(),
                                    t = ru(n, (e = ex(e)));
                                null !== t && lN(t, n, e), uW(n, e);
                            }
                        });
                    return;
                }
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function di(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = uJ(e.nativeEvent);
        if (null !== n) return null !== (t = ez(n)) && uK(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (tA = r), n.target.dispatchEvent(r), (tA = null), t.shift();
    }
    return !0;
}
function da(e, t, n) {
    di(e) && n.delete(t);
}
function ds() {
    (u3 = !1),
        null !== u2 && di(u2) && (u2 = null),
        null !== u4 && di(u4) && (u4 = null),
        null !== u5 && di(u5) && (u5 = null),
        u8.forEach(da),
        u6.forEach(da);
}
function dl(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), u3 || ((u3 = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, ds)));
}
var dc = null;
function du(e) {
    dc !== e &&
        ((dc = e),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
            dc === e && (dc = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    r = e[t + 1],
                    i = e[t + 2];
                if ("function" != typeof r)
                    if (null === u0(r || n)) continue;
                    else break;
                var a = ez(n);
                null !== a &&
                    (e.splice(t, 3),
                    (t -= 3),
                    aq(
                        a,
                        {
                            pending: !0,
                            data: i,
                            method: n.method,
                            action: r,
                        },
                        r,
                        i,
                    ));
            }
        }));
}
function dd(e) {
    function t(t) {
        return dl(t, e);
    }
    null !== u2 && dl(u2, e), null !== u4 && dl(u4, e), null !== u5 && dl(u5, e), u8.forEach(t), u6.forEach(t);
    for (var n = 0; n < u7.length; n++) {
        var r = u7[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < u7.length && null === (n = u7[0]).blockedOn; ) dr(n), null === n.blockedOn && u7.shift();
    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (r = 0; r < n.length; r += 3) {
            var i = n[r],
                a = n[r + 1],
                o = i[eG] || null;
            if ("function" == typeof a) o || du(n);
            else if (o) {
                var s = null;
                if (a && a.hasAttribute("formAction")) {
                    if (((i = a), (o = a[eG] || null))) s = o.formAction;
                    else if (null !== u0(i)) continue;
                } else s = o.action;
                "function" == typeof s ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), du(n);
            }
        }
}
function df(e) {
    this._internalRoot = e;
}
function dp(e) {
    this._internalRoot = e;
}
(dp.prototype.render = df.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(l(409));
        uH(t.current, lA(), e, t, null, null);
    }),
    (dp.prototype.unmount = df.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uH(e.current, 2, null, e, null, null), lx(), (t[eZ] = null);
            }
        }),
    (dp.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ej();
            e = {
                blockedOn: null,
                target: e,
                priority: t,
            };
            for (var n = 0; n < u7.length && 0 !== t && t < u7[n].priority; n++);
            u7.splice(n, 0, e), 0 === n && dr(e);
        }
    });
var d_ = o.version;
if ("19.1.0" !== d_) throw Error(l(527, d_, "19.1.0"));
U.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(l(188));
        throw Error(l(268, (e = Object.keys(e).join(","))));
    }
    return (e = null === (e = null !== (e = p(t)) ? _(e) : null) ? null : e.stateNode);
};
var dm = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.1.0",
};
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var dh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dh.isDisabled && dh.supportsFiber)
        try {
            (ep = dh.inject(dm)), (e_ = dh);
        } catch (e) {}
}
t.createRoot = function (e, t) {
    if (!c(e)) throw Error(l(299));
    var n = !1,
        r = "",
        i = oA,
        a = oC,
        o = oN,
        s = null;
    return (
        null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
            void 0 !== t.onCaughtError && (a = t.onCaughtError),
            void 0 !== t.onRecoverableError && (o = t.onRecoverableError),
            void 0 !== t.unstable_transitionCallbacks && (s = t.unstable_transitionCallbacks)),
        (t = uF(e, 1, !1, null, null, n, r, i, a, o, s, null)),
        (e[eZ] = t.current),
        cA(e),
        new df(t)
    );
};
