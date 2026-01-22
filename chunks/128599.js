n.d(t, { a: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(563014),
    c = n(885621),
    u = n(658122);
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
function h(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: a = !1,
            disabled: d = !1,
            keepItemStyles: p = !1,
            menuItemProps: h,
            action: m,
            dontCloseOnActionIfHoldingShiftKey: g,
            dontCloseOnAction: E,
            onClose: b,
        } = e,
        y = i.useRef(null);
    i.useEffect(() => {
        a && (0, l.Y)(y);
    }, [a]);
    let O = i.useCallback(
            (e) => {
                if (null == m) return !1;
                (e.shiftKey && g) || E || b(), e.persist(), requestAnimationFrame(() => m(e));
            },
            [m, b, g, E],
        ),
        A = p ? s()(u.item, c.jV[n], { [u.focused]: a }) : u.customItem;
    return (0, r.jsx)(
        o.DUT,
        _(
            f(
                {
                    innerRef: y,
                    className: A,
                    onClick: d ? void 0 : O,
                    "aria-disabled": d,
                },
                h,
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
