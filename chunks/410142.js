n.d(t, { f: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(900283),
    l = n(563014),
    c = n(397927),
    u = n(885621),
    d = n(658122);
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
function h(e, t) {
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
function m(e) {
    let {
            color: t = "default",
            label: n,
            checked: a,
            disabled: f = !1,
            isFocused: _,
            menuItemProps: m,
            action: g,
            className: E,
        } = e,
        { onInteraction: b } = i.useContext(o.x),
        y = i.useRef(null),
        O = i.useId();
    i.useEffect(() => {
        _ && (0, l.Y)(y);
    }, [_]);
    let A = i.useCallback(
        (e) => {
            g(e), null == b || b({ type: o.Q.SWITCH });
        },
        [g, b],
    );
    return (0, r.jsxs)(
        "div",
        h(
            p(
                {
                    ref: y,
                    className: s()(d.item, d.switchItem, d.hideInteraction, u.jV[t], E, { [d.disabled]: f }),
                    "aria-checked": a,
                    "aria-disabled": f,
                },
                m,
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
                        children: (0, r.jsx)(c.dOG, {
                            id: O,
                            checked: a,
                            onChange: A,
                            disabled: f,
                        }),
                    }),
                ],
            },
        ),
    );
}
