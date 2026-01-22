n.d(t, {
    A: () => O,
    j: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(964892),
    l = n(208756),
    c = n(135564),
    u = n(916845),
    d = n(397927),
    f = n(714657);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    var t;
    let {
            title: n,
            body: a,
            graphic: p,
            size: h = "md",
            actions: E,
            gradientColor: y,
            onRequestClose: O,
            position: A,
            caretConfig: v,
            scrollBehavior: S,
            showCloseButton: I = !0,
            isCaretHoverable: T = !1,
            shouldTrapFocus: C = !1,
            returnRef: N,
            onNudgeChange: R,
        } = e,
        w = g(e, [
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
        ]),
        [P, D] = i.useState(null != A ? A : "top");
    i.useEffect(() => {
        null != A && D(A);
    }, [A]);
    let x = i.useMemo(() => {
            var e;
            return {
                align: null != (e = null == v ? void 0 : v.align) ? e : "center",
                customOffset: null == v ? void 0 : v.customOffset,
            };
        }, [v]),
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
            D(e);
        }, []),
        k = T ? f.caretHoverable : void 0,
        U = _(
            {
                targetElementRef: w.targetElementRef,
                shouldShow: w.shouldShow,
                hasVideo: w.hasVideo,
                position: P,
                caretConfig: x,
                onRequestClose: L,
                gradientColor: y,
                onPositionChange: M,
                onNudgeChange: R,
                scrollBehavior: S,
                modal: C,
                returnRef: N,
                gradientOffsetBottom: 0,
                experimental_ignoreModalClicks: !1,
            },
            "edge" === w.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: w.align,
                  }
                : {
                      alignmentStrategy: "trigger-center",
                  },
        );
    return (0, r.jsx)(
        o.x,
        m(_({}, U), {
            children: (0, r.jsxs)("div", {
                "data-mana-component": "popover",
                children: [
                    I &&
                        (0, r.jsx)(u.q, {
                            onClick: j,
                            variant: null != y ? "color-mix" : void 0,
                        }),
                    null != p &&
                        (0, r.jsx)("div", {
                            className: s()(f.graphic, {
                                [f["graphic--".concat(h)]]: null != h,
                            }),
                            children: (0, r.jsx)(
                                d.vYh,
                                m(_({}, p), {
                                    aspectRatio: null != (t = p.aspectRatio) ? t : "sm" === h ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(b, {
                        title: n,
                        body: a,
                    }),
                    null != E && E.length > 0
                        ? (0, r.jsx)(l.Z, {
                              actions: E,
                              className: f.actionBar,
                          })
                        : null,
                    null != x &&
                        (0, r.jsx)(c.F, {
                            className: k,
                        }),
                ],
            }),
        }),
    );
}
let O = y;
