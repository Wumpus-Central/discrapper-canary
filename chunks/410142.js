n.d(t, {
    f: () => m,
});
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
            subtext: a,
            subtextLineClamp: f,
            checked: _,
            disabled: m = !1,
            isFocused: g,
            menuItemProps: E,
            action: y,
            className: b,
        } = e,
        { onInteraction: O } = i.useContext(o.x),
        v = i.useRef(null),
        A = i.useId();
    i.useEffect(() => {
        g && (0, l.Y)(v);
    }, [g]);
    let I = i.useCallback(
        (e) => {
            y(e),
                null == O ||
                    O({
                        type: o.Q.SWITCH,
                    });
        },
        [y, O],
    );
    return (0, r.jsxs)(
        "div",
        h(
            p(
                {
                    ref: v,
                    className: s()(d.item, d.switchItem, d.hideInteraction, u.jV[t], b, {
                        [d.disabled]: m,
                    }),
                    "aria-checked": _,
                    "aria-disabled": m,
                },
                E,
            ),
            {
                children: [
                    null != n
                        ? (0, r.jsx)("div", {
                              className: d.labelContainer,
                              children: (0, r.jsxs)("div", {
                                  className: d.label,
                                  children: [
                                      (0, r.jsx)("label", {
                                          htmlFor: A,
                                          children: n,
                                      }),
                                      null != a &&
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-xs/normal",
                                              className: s()(d.subtext, {
                                                  [d.subtextLineClamp]: null != f,
                                              }),
                                              lineClamp: f,
                                              children: a,
                                          }),
                                  ],
                              }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: d.switchContainer,
                        children: (0, r.jsx)(c.dOG, {
                            id: A,
                            checked: _,
                            onChange: I,
                            disabled: m,
                        }),
                    }),
                ],
            },
        ),
    );
}
