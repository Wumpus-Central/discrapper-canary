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
function _(e, t, n) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
            : h(Object(t)).forEach(function (n) {
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
            graphic: _,
            size: h = "md",
            actions: E,
            gradientColor: y,
            onRequestClose: O,
            position: v,
            caretConfig: I,
            scrollBehavior: T,
            showCloseButton: S = !0,
            isCaretHoverable: A = !1,
            shouldTrapFocus: C = !1,
            returnRef: N,
            onNudgeChange: R,
        } = e,
        P = g(e, [
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
    let L = i.useMemo(() => {
            var e;
            return {
                align: null != (e = null == I ? void 0 : I.align) ? e : "center",
                customOffset: null == I ? void 0 : I.customOffset,
            };
        }, [I]),
        x = i.useCallback(() => {
            null == O || O();
        }, [O]),
        M = i.useCallback(
            (e) => {
                null == O || O(e);
            },
            [O],
        ),
        k = i.useCallback((e) => {
            w(e);
        }, []),
        j = A ? f.caretHoverable : void 0,
        U = p(
            {
                targetElementRef: P.targetElementRef,
                shouldShow: P.shouldShow,
                hasVideo: P.hasVideo,
                position: D,
                caretConfig: L,
                onRequestClose: x,
                gradientColor: y,
                onPositionChange: k,
                onNudgeChange: R,
                scrollBehavior: T,
                modal: C,
                returnRef: N,
                gradientOffsetBottom: 0,
                experimental_ignoreModalClicks: !1,
            },
            "edge" === P.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: P.align,
                  }
                : { alignmentStrategy: "trigger-center" },
        );
    return (0, r.jsx)(
        s.m,
        m(p({}, U), {
            children: (0, r.jsxs)("div", {
                "data-mana-component": "popover",
                children: [
                    S &&
                        (0, r.jsx)(u.u, {
                            onClick: M,
                            variant: null != y ? "color-mix" : void 0,
                        }),
                    null != _ &&
                        (0, r.jsx)("div", {
                            className: o()(f.graphic, { [f["graphic--".concat(h)]]: null != h }),
                            children: (0, r.jsx)(
                                d.zsu,
                                m(p({}, _), {
                                    aspectRatio: null != (t = _.aspectRatio) ? t : "sm" === h ? "2/1" : "16/9",
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
                    null != L && (0, r.jsx)(c.$, { className: j }),
                ],
            }),
        }),
    );
}
let O = y;
