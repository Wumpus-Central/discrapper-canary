n.d(t, { a: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(900283),
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
            color: t = "default",
            label: n,
            control: a,
            disabled: d,
            isFocused: p,
            showDefaultFocus: h = !1,
            menuItemProps: m,
            onClose: g,
        } = e,
        { onInteraction: E } = i.useContext(o.x),
        b = i.useRef(null),
        y = i.useRef(null);
    i.useLayoutEffect(() => {
        var e, t, n;
        p
            ? ((0, l.Y)(b), null == (e = y.current) || e.focus())
            : null == (n = y.current) || null == (t = n.blur) || t.call(n);
    }, [p]);
    let O = i.useCallback(() => {
            var e, t;
            (null == (t = y.current) || null == (e = t.activate) ? void 0 : e.call(t)) && g();
        }, [g]),
        A = a(
            {
                onClose: g,
                disabled: d,
                isFocused: p,
                onInteraction: i.useCallback(
                    (e) => {
                        null == E || E({ type: null != e ? e : o.Q.DEFAULT });
                    },
                    [E],
                ),
            },
            y,
        );
    return (0, r.jsxs)(
        "div",
        _(
            f(
                {
                    onClick: O,
                    className: s()(u.item, c.jV[t], {
                        [u.disabled]: d,
                        [u.focused]: h && p,
                        [u.hideInteraction]: !h,
                    }),
                    "aria-disabled": d,
                },
                m,
            ),
            {
                children: [
                    null != n
                        ? (0, r.jsx)("div", {
                              className: u.labelContainer,
                              children: (0, r.jsx)("div", {
                                  className: u.label,
                                  children: n,
                              }),
                          })
                        : null,
                    A,
                ],
            },
        ),
    );
}
