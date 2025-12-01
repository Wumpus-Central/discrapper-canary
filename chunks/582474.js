n.d(t, { m: () => h });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(670596),
    l = n(743236),
    c = n(481060),
    u = n(939350),
    d = n(334405);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let {
            color: t = "default",
            label: n,
            checked: a,
            disabled: f = !1,
            isFocused: _,
            menuItemProps: h,
            action: g,
            className: E,
        } = e,
        { onInteraction: b } = i.useContext(s.p),
        y = i.useRef(null),
        O = i.useId();
    i.useEffect(() => {
        _ && (0, l.F)(y);
    }, [_]);
    let v = i.useCallback(
        (e) => {
            g(e), null == b || b({ type: s.U.SWITCH });
        },
        [g, b],
    );
    return (0, r.jsxs)(
        "div",
        m(
            p(
                {
                    ref: y,
                    className: o()(d.item, d.switchItem, d.hideInteraction, u._e[t], E, { [d.disabled]: f }),
                    "aria-checked": a,
                    "aria-disabled": f,
                },
                h,
            ),
            {
                children: [
                    null != n
                        ? (0, r.jsx)("div", {
                              className: d.labelContainer,
                              children: (0, r.jsx)("label", {
                                  htmlFor: O,
                                  className: d.label,
                                  children: n,
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: d.switchContainer,
                        children: (0, r.jsx)(c.rsf, {
                            id: O,
                            checked: a,
                            onChange: v,
                            disabled: f,
                        }),
                    }),
                ],
            },
        ),
    );
}
