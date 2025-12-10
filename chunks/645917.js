n.d(t, {
    R: () => y,
    Z: () => O,
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
    d = n(481060),
    f = n(420153);
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
function _(e) {
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
function h(e, t) {
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
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    let { title: t, body: n } = e;
    return (0, r.jsxs)("div", {
        className: f.header,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                className: f.title,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: f.headerBody,
                children: (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: n,
                }),
            }),
        ],
    });
}
function y(e) {
    var t,
        {
            title: n,
            body: a,
            graphic: p,
            size: m = "md",
            actions: E,
            gradientColor: y,
            onRequestClose: O,
            position: v,
            caretConfig: S,
            scrollBehavior: I,
            showCloseButton: T = !0,
            isCaretHoverable: C = !1,
            shouldTrapFocus: A = !1,
            returnRef: N,
            onNudgeChange: P,
        } = e,
        R = g(e, [
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
    let [D, w] = i.useState(null != v ? v : "top");
    i.useEffect(() => {
        null != v && w(v);
    }, [v]);
    let x = i.useMemo(() => {
            var e;
            return {
                align: null != (e = null == S ? void 0 : S.align) ? e : "center",
                customOffset: null == S ? void 0 : S.customOffset,
            };
        }, [S]),
        L = i.useCallback(() => {
            null == O || O();
        }, [O]),
        j = i.useCallback(
            (e) => {
                null == O || O(e);
            },
            [O],
        ),
        M = i.useCallback((e) => {
            w(e);
        }, []),
        k = C ? f.caretHoverable : void 0,
        U = _(
            {
                targetElementRef: R.targetElementRef,
                shouldShow: R.shouldShow,
                hasVideo: R.hasVideo,
                position: D,
                caretConfig: x,
                onRequestClose: L,
                gradientColor: y,
                onPositionChange: M,
                onNudgeChange: P,
                scrollBehavior: I,
                modal: A,
                returnRef: N,
                gradientOffsetBottom: 0,
                experimental_ignoreModalClicks: !1,
            },
            "edge" === R.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: R.align,
                  }
                : { alignmentStrategy: "trigger-center" },
        );
    return (0, r.jsx)(
        s.m,
        h(_({}, U), {
            children: (0, r.jsxs)("div", {
                "data-mana-component": "popover",
                children: [
                    T &&
                        (0, r.jsx)(u.u, {
                            onClick: j,
                            variant: null != y ? "color-mix" : void 0,
                        }),
                    null != p &&
                        (0, r.jsx)("div", {
                            className: o()(f.graphic, { [f["graphic--".concat(m)]]: null != m }),
                            children: (0, r.jsx)(
                                d.zsu,
                                h(_({}, p), {
                                    aspectRatio: null != (t = p.aspectRatio) ? t : "sm" === m ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(b, {
                        title: n,
                        body: a,
                    }),
                    null != E && E.length > 0
                        ? (0, r.jsx)(l.k, {
                              actions: E,
                              className: f.actionBar,
                          })
                        : null,
                    null != x && (0, r.jsx)(c.$, { className: k }),
                ],
            }),
        }),
    );
}
let O = y;
