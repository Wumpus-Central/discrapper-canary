n.d(t, {
    i: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(86968),
    c = n(900283),
    u = n(563014),
    d = n(397927),
    f = n(112378),
    p = n(885621),
    _ = n(658122);

function h(e, t, n) {
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

function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
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

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e) {
    let {
            color: t = "default",
            label: n,
            void_label: a,
            checked: h,
            subtext: g,
            subtextLineClamp: y,
            disabled: b,
            isFocused: O,
            menuItemProps: v,
            action: A,
        } = e,
        { onInteraction: I } = i.useContext(c.x),
        S = i.useRef(null);
    i.useEffect(() => {
        O && (0, u.Y)(S);
    }, [O]);
    let T = i.useCallback(
        (e) => {
            A(e),
                null == I ||
                    I({
                        type: c.Q.RADIO,
                    });
        },
        [A, I],
    );
    return (0, r.jsxs)(
        o.DUT,
        E(
            m(
                {
                    innerRef: S,
                    className: s()(_.item, _.labelContainer, p.jV[t], {
                        [_.disabled]: b,
                        [_.focused]: O,
                    }),
                    onClick: b ? void 0 : T,
                },
                v,
            ),
            {
                "aria-checked": h,
                "aria-disabled": b,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.label,
                        children: [
                            (0, r.jsx)(f.V, {
                                children: (0, l.J)(null != a ? a : n, {
                                    isFocused: O,
                                    disabled: b,
                                }),
                            }),
                            null != g &&
                                (0, r.jsx)(o.EYj, {
                                    variant: "text-xs/normal",
                                    className: s()(_.subtext, {
                                        [_.subtextLineClamp]: null != y,
                                    }),
                                    lineClamp: y,
                                    children: g,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _.iconContainer,
                        children: (0, r.jsx)(d.TN6, {
                            checked: h,
                            disabled: b,
                            radioItemIconClassName: _.radioIcon,
                        }),
                    }),
                ],
            },
        ),
    );
}
