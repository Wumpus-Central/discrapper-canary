n.d(t, {
    R: () => O,
    Z: () => v,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(920155),
    l = n(744399),
    c = n(966902),
    u = n(237872),
    d = n(945909),
    f = n(481060),
    _ = n(420153);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    let { title: t, body: n } = e;
    return (0, r.jsxs)("div", {
        className: _.header,
        children: [
            (0, r.jsx)(f.Heading, {
                variant: "heading-md/semibold",
                className: _.title,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: _.headerBody,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: n,
                }),
            }),
        ],
    });
}
function O(e) {
    var t,
        {
            title: n,
            body: a,
            graphic: p,
            size: m = "md",
            actions: b,
            gradientColor: O,
            onRequestClose: v,
            position: I,
            caretConfig: T,
            scrollBehavior: S,
            showCloseButton: A = !0,
            isCaretHoverable: C = !1,
            shouldTrapFocus: N = !1,
            returnRef: R,
            onNudgeChange: P,
        } = e,
        D = E(e, [
            "title",
            "body",
            "graphic",
            "size",
            "actions",
            "gradientColor",
            "onRequestClose",
            "position",
            "caretConfig",
            "scrollBehavior",
            "showCloseButton",
            "isCaretHoverable",
            "shouldTrapFocus",
            "returnRef",
            "onNudgeChange",
        ]);
    let [w, L] = i.useState(null != I ? I : "top");
    i.useEffect(() => {
        null != I && L(I);
    }, [I]);
    let x = i.useMemo(() => {
            var e;
            return {
                position: (0, d.z)(w),
                align: null != (e = null == T ? void 0 : T.align) ? e : "center",
                customOffset: null == T ? void 0 : T.customOffset,
            };
        }, [w, T]),
        M = i.useCallback(() => {
            null == v || v();
        }, [v]),
        k = i.useCallback(
            (e) => {
                null == v || v(e);
            },
            [v],
        ),
        j = i.useCallback((e) => {
            L(e);
        }, []),
        U = C ? _.caretHoverable : void 0;
    return (0, r.jsx)(
        s.m,
        g(h({}, D), {
            position: w,
            onRequestClose: M,
            gradientColor: O,
            onPositionChange: j,
            onNudgeChange: P,
            scrollBehavior: S,
            modal: N,
            returnRef: R,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            children: (0, r.jsxs)("div", {
                "data-mana-component": "popover",
                children: [
                    A &&
                        (0, r.jsx)(u.u, {
                            onClick: k,
                            variant: null != O ? "color-mix" : void 0,
                        }),
                    null != p &&
                        (0, r.jsx)("div", {
                            className: o()(_.graphic, { [_["graphic--".concat(m)]]: null != m }),
                            children: (0, r.jsx)(
                                f.zsu,
                                g(h({}, p), {
                                    aspectRatio: null != (t = p.aspectRatio) ? t : "sm" === m ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(y, {
                        title: n,
                        body: a,
                    }),
                    null != b && b.length > 0
                        ? (0, r.jsx)(l.k, {
                              actions: b,
                              className: _.actionBar,
                          })
                        : null,
                    null != x &&
                        (0, r.jsx)(c.$, {
                            caretConfig: x,
                            className: U,
                        }),
                ],
            }),
        }),
    );
}
let v = O;
