n.d(t, {
    Av: () => l,
    C9: () => c,
    FX: () => u,
    QV: () => o,
    Sw: () => d,
    tS: () => s,
}),
    n(781311),
    n(35282),
    n(539854),
    n(388685),
    n(49124);
var r = n(647438);
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
function s(e, t) {
    if (null != e || null != t)
        return function () {
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            "function" == typeof e && e(...r), "function" == typeof t && t(...r);
        };
}
function l(e) {
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
function c(e, t, n, i) {
    let a = e.props,
        l = (e, t) => {
            null != e && ("function" == typeof e ? e(t) : "object" == typeof e && "current" in e && (e.current = t));
        },
        c = e.ref,
        u = (e) => {
            l(c, e), null != e && "function" == typeof e.getBoundingClientRect && i(e);
        },
        d = {
            onMouseEnter: s(a.onMouseEnter, t.onMouseEnter),
            onMouseLeave: s(a.onMouseLeave, t.onMouseLeave),
            onFocus: s(a.onFocus, t.onFocus),
            onBlur: s(a.onBlur, t.onBlur),
            onContextMenu: s(a.onContextMenu, t.onContextMenu),
            onClick: s(a.onClick, t.onClick),
        };
    if ((null != n && "" !== n && (d["aria-describedby"] = o(a["aria-describedby"], n)), "string" == typeof e.type))
        d.ref = u;
    else if ("buttonRef" in e.props) {
        let t = e.props.buttonRef;
        (d.buttonRef = (e) => {
            l(t, e), u(e);
        }),
            (d.ref = u);
    } else if ("innerRef" in e.props) {
        let t = e.props.innerRef;
        (d.innerRef = (e) => {
            l(t, e), u(e);
        }),
            (d.ref = u);
    } else (d.ref = u), (d.innerRef = u);
    return r.cloneElement(e, d);
}
function u(e) {
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
function d(e) {
    if (null == e) return "";
    if ("string" == typeof e) return e;
    try {
        return JSON.stringify(e);
    } catch (t) {
        return String(e);
    }
}
