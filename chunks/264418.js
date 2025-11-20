n.d(t, {
    J: () => y,
    Z: () => O,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(920155),
    c = n(744399),
    u = n(966902),
    d = n(237872),
    f = n(562618),
    _ = n(254477);
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
    var t,
        {
            title: n,
            body: a,
            badge: p,
            graphic: m,
            size: b = "md",
            actions: y,
            textLink: O,
            gradientColor: v,
            onRequestClose: I,
            popoverRef: T,
            position: S,
            caretConfig: A,
            scrollBehavior: C,
        } = e,
        N = E(e, [
            "title",
            "body",
            "badge",
            "graphic",
            "size",
            "actions",
            "textLink",
            "gradientColor",
            "onRequestClose",
            "popoverRef",
            "position",
            "caretConfig",
            "scrollBehavior",
        ]);
    let R = i.useCallback(
            (e, t) => {
                null == I || I(t);
            },
            [I],
        ),
        P = i.useCallback(() => {
            null == I || I("user:explicit");
        }, [I]),
        D = h(
            {
                targetElementRef: N.targetElementRef,
                shouldShow: N.shouldShow,
                hasVideo: N.hasVideo,
                position: S,
                caretConfig: A,
                onRequestClose: R,
                gradientColor: v,
                scrollBehavior: C,
            },
            "edge" === N.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: N.align,
                  }
                : { alignmentStrategy: "trigger-center" },
        );
    return (0, r.jsx)(
        l.m,
        g(h({}, D), {
            children: (0, r.jsxs)("div", {
                ref: T,
                "data-mana-component": "popover",
                children: [
                    (0, r.jsx)(d.u, {
                        onClick: P,
                        variant: null != v ? "color-mix" : void 0,
                    }),
                    null != m &&
                        (0, r.jsx)("div", {
                            className: o()(_.graphic, { [_["graphic--".concat(b)]]: null != b }),
                            children: (0, r.jsx)(
                                s.zsu,
                                g(h({}, m), {
                                    aspectRatio: null != (t = m.aspectRatio) ? t : "sm" === b ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(f.Y, {
                        title: n,
                        body: a,
                        badge: p,
                        textLink: O,
                    }),
                    null != y && y.length > 0 ? (0, r.jsx)(c.k, { actions: y }) : null,
                    (0, r.jsx)(u.$, {}),
                ],
            }),
        }),
    );
}
let O = y;
