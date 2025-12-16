n.d(t, {
    Av: () => m,
    C9: () => h,
    FX: () => g,
    QV: () => p,
    Sw: () => E,
    tS: () => _,
}),
    n(388685),
    n(781311),
    n(35282),
    n(539854),
    n(49124);
var r = n(473749);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    if (null != e) {
        if ("function" == typeof e) return void e(t);
        "object" == typeof e && "current" in e && (e.current = t);
    }
}
let s = {};
function l(e) {
    return null == e ? s : "function" == typeof e || "object" == typeof e ? e : s;
}
let c = new WeakMap();
function u(e) {
    let t = l(e),
        n = c.get(t);
    if (null != n) return n;
    let r = (t) => {
        if (null == t) return void e(null);
        null != t && "function" == typeof t.getBoundingClientRect && e(t);
    };
    return c.set(t, r), r;
}
let d = new WeakMap();
function f(e, t) {
    let n = l(e),
        r = l(t),
        i = d.get(n);
    null == i && ((i = new WeakMap()), d.set(n, i));
    let a = i.get(r);
    if (null != a) return a;
    let s = (n) => {
        o(e, n), t(n);
    };
    return i.set(r, s), s;
}
function p(e, t) {
    let n = (null != e ? e : "").trim(),
        r = (null != t ? t : "").trim();
    if ("" === n) return r;
    if ("" === r) return n;
    let i = " ".concat(n, " "),
        a = r.split(/\s+/).filter(Boolean),
        o = [];
    for (let e of a) {
        let t = " ".concat(e, " ");
        i.includes(t) || o.push(e);
    }
    return 0 === o.length ? n : "".concat(n, " ").concat(o.join(" ")).trim();
}
function _(e, t) {
    if (null != e || null != t)
        return function () {
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            "function" == typeof e && e(...r), "function" == typeof t && t(...r);
        };
}
function m(e) {
    switch (e) {
        case "top":
        default:
            return "bottom";
        case "bottom":
            return "top";
        case "left":
            return "right";
        case "right":
            return "left";
    }
}
function h(e, t, n, i) {
    let a = e.props,
        o = f(e.props.ref, u(i)),
        s = {
            onMouseEnter: _(a.onMouseEnter, t.onMouseEnter),
            onMouseLeave: _(a.onMouseLeave, t.onMouseLeave),
            onFocus: _(a.onFocus, t.onFocus),
            onBlur: _(a.onBlur, t.onBlur),
            onContextMenu: _(a.onContextMenu, t.onContextMenu),
            onClick: _(a.onClick, t.onClick),
        };
    return (
        null != n && "" !== n && (s["aria-describedby"] = p(a["aria-describedby"], n)),
        "string" == typeof e.type
            ? (s.ref = o)
            : "buttonRef" in e.props
              ? ((s.buttonRef = f(e.props.buttonRef, o)), (s.ref = o))
              : "innerRef" in e.props
                ? ((s.innerRef = f(e.props.innerRef, o)), (s.ref = o))
                : ((s.ref = o), (s.innerRef = o)),
        r.cloneElement(e, s)
    );
}
function g(e) {
    let { tag: t, className: n, tabIndex: i, children: o, triggerHandlers: s, describedById: l, triggerRef: c } = e;
    return r.createElement(
        t,
        a(
            {
                ref: c,
                className: n,
                tabIndex: i,
                onMouseEnter: s.onMouseEnter,
                onMouseLeave: s.onMouseLeave,
                onFocus: s.onFocus,
                onBlur: s.onBlur,
                onContextMenu: s.onContextMenu,
                onClick: s.onClick,
            },
            null != l && "" !== l ? { "aria-describedby": l } : {},
        ),
        o,
    );
}
function E(e) {
    if (null == e) return "";
    if ("string" == typeof e) return e;
    try {
        return JSON.stringify(e);
    } catch (t) {
        return String(e);
    }
}
