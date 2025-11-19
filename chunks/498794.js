n.d(t, { k: () => d });
var r = n(54381),
    i = n(473749),
    a = n(360920),
    o = n(301106);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = (e) => {
    let {
            tag: t = "div",
            children: n,
            className: s,
            style: c,
            focusProps: d,
            onClick: f,
            onMouseEnter: _,
            onDoubleClick: p,
            onContextMenu: h,
            onKeyDown: m,
            onFocus: g,
            onBlur: E,
            onMouseOver: b,
            onMouseDown: y,
            onMouseLeave: O,
            buttonProps: v,
            "aria-label": I,
            "aria-describedby": T,
            ref: S,
            buttonRef: A,
        } = e,
        C = i.useRef(null),
        N = null != S ? S : C;
    return (0, r.jsxs)(t, {
        ref: N,
        className: s,
        style: c,
        onClick: f,
        onMouseEnter: _,
        onMouseOver: b,
        onMouseLeave: O,
        onDoubleClick: p,
        onMouseDown: y,
        onContextMenu: h,
        children: [
            (0, r.jsx)(
                a.P,
                u(l({}, v), {
                    innerRef: A,
                    focusProps: l({ ringTarget: N }, d),
                    className: o.focusTarget,
                    "aria-label": I,
                    "aria-describedby": T,
                    onClick: (e) => {
                        e.stopPropagation(), null == f || f(e);
                    },
                    onKeyDown: m,
                    onFocus: g,
                    onBlur: E,
                    onMouseDown: y,
                }),
            ),
            n,
        ],
    });
};
