n.d(t, { k: () => d });
var r = n(951288),
    i = n(647438),
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
let d = i.forwardRef(function (e, t) {
    let {
            tag: n = "div",
            children: s,
            className: c,
            style: d,
            focusProps: f,
            onClick: _,
            onMouseEnter: p,
            onDoubleClick: h,
            onContextMenu: m,
            onKeyDown: g,
            onFocus: E,
            onBlur: b,
            onMouseOver: y,
            onMouseDown: O,
            onMouseLeave: v,
            buttonProps: I,
            "aria-label": T,
            "aria-describedby": S,
        } = e,
        A = i.useRef(null);
    return (
        i.useImperativeHandle(t, () => A.current),
        (0, r.jsxs)(n, {
            ref: A,
            className: c,
            style: d,
            onClick: _,
            onMouseEnter: p,
            onMouseOver: y,
            onMouseLeave: v,
            onDoubleClick: h,
            onMouseDown: O,
            onContextMenu: m,
            children: [
                (0, r.jsx)(
                    a.P,
                    u(l({}, I), {
                        focusProps: l({ ringTarget: A }, f),
                        className: o.focusTarget,
                        "aria-label": T,
                        "aria-describedby": S,
                        onClick: (e) => {
                            e.stopPropagation(), null == _ || _(e);
                        },
                        onKeyDown: g,
                        onFocus: E,
                        onBlur: b,
                        onMouseDown: O,
                    }),
                ),
                s,
            ],
        })
    );
});
