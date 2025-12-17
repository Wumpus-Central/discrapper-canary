n.d(t, { o: () => m });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(743236),
    c = n(939350),
    u = n(564546);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: a = !1,
            disabled: d = !1,
            keepItemStyles: p = !1,
            menuItemProps: m,
            action: h,
            dontCloseOnActionIfHoldingShiftKey: g,
            dontCloseOnAction: E,
            onClose: b,
        } = e,
        y = i.useRef(null);
    i.useEffect(() => {
        a && (0, l.F)(y);
    }, [a]);
    let O = i.useCallback(
            (e) => {
                if (null == h) return !1;
                (e.shiftKey && g) || E || b(), e.persist(), requestAnimationFrame(() => h(e));
            },
            [h, b, g, E],
        ),
        v = p ? o()(u.item, c._e[n], { [u.focused]: a }) : u.customItem;
    return (0, r.jsx)(
        s.P3F,
        _(
            f(
                {
                    innerRef: y,
                    className: v,
                    onClick: d ? void 0 : O,
                    "aria-disabled": d,
                },
                m,
            ),
            {
                children: t({
                    color: n,
                    disabled: d,
                    isFocused: a,
                }),
            },
        ),
    );
}
