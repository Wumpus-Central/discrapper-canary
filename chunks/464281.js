n.d(t, {
    Av: () => l,
    C9: () => c,
    FX: () => u,
    QV: () => a,
    tS: () => s,
}),
    n(388685);
var r = n(73800);
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
function o(e) {
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
function a(e, t) {
    return [e, t].filter((e) => null != e && "" !== e).join(" ");
}
function s(e, t) {
    if (null != e || null != t)
        return function () {
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            null == e || e(...r), null == t || t(...r);
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
    let o = e.props,
        l = (e, t) => {
            null != e && ("function" == typeof e ? e(t) : "object" == typeof e && "current" in e && (e.current = t));
        },
        c = e.ref,
        u = (e) => {
            l(c, e), i(e);
        },
        d = {
            onMouseEnter: s(o.onMouseEnter, t.onMouseEnter),
            onMouseLeave: s(o.onMouseLeave, t.onMouseLeave),
            onFocus: s(o.onFocus, t.onFocus),
            onBlur: s(o.onBlur, t.onBlur),
            onContextMenu: s(o.onContextMenu, t.onContextMenu),
            "aria-describedby": a(o["aria-describedby"], n),
        };
    if ("innerRef" in e.props) {
        let t = e.props.innerRef;
        d.innerRef = (e) => {
            l(t, e), i(e);
        };
    } else d.ref = u;
    return r.cloneElement(e, d);
}
function u(e) {
    let { element: t, className: n, tabIndex: i, children: a, triggerHandlers: s, describedById: l, triggerRef: c } = e;
    return r.createElement(
        t,
        o(
            {
                ref: c,
                className: n,
                tabIndex: i,
                onMouseEnter: s.onMouseEnter,
                onMouseLeave: s.onMouseLeave,
                onFocus: s.onFocus,
                onBlur: s.onBlur,
                onContextMenu: s.onContextMenu,
            },
            null != l && "" !== l ? { "aria-describedby": l } : {},
        ),
        a,
    );
}
