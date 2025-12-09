n.d(t, { e: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(159691),
    c = n(920155),
    u = n(966902),
    d = n(237872),
    f = n(562618),
    p = n(388032),
    _ = n(254477);
function m(e, t, n) {
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
                m(e, t, n[t]);
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    var t,
        n,
        a,
        m,
        g,
        {
            steps: y,
            caretConfig: O = { align: "center" },
            size: v = "md",
            onStepChange: S,
            onRequestClose: I,
            popoverRef: T,
            shouldShow: A,
            position: C,
        } = e,
        N = b(e, [
            "steps",
            "caretConfig",
            "size",
            "onStepChange",
            "onRequestClose",
            "popoverRef",
            "shouldShow",
            "position",
        ]);
    let [P, R] = i.useState(0);
    i.useEffect(() => {
        A && R(0);
    }, [A]),
        i.useEffect(() => {
            null == S || S(P);
        }, [P, S]);
    let D = y[P],
        w = P + 1 === y.length,
        x = i.useCallback(() => {
            var e;
            null == D || null == (e = D.onCta) || e.call(D), w ? null == I || I() : R((e) => e + 1);
        }, [D, w, I]),
        L = i.useCallback(() => {
            null == I || I();
        }, [I]),
        j = i.useCallback(() => {
            null == I || I();
        }, [I]);
    if (!A || null == D) return null;
    let M = h(
            {
                text:
                    null != (a = null == (t = D.action) ? void 0 : t.text)
                        ? a
                        : w
                          ? p.intl.string(p.t.i4jeWR)
                          : p.intl.string(p.t.PDTjLN),
                variant: null != (m = null == (n = D.action) ? void 0 : n.variant) ? m : "primary",
                onClick: x,
            },
            D.action,
        ),
        k = h(
            {
                targetElementRef: N.targetElementRef,
                hasVideo: N.hasVideo,
                scrollBehavior: N.scrollBehavior,
                position: C,
                shouldShow: A,
                onRequestClose: L,
                gradientColor: D.gradientColor,
                caretConfig: O,
            },
            "edge" === N.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: N.align,
                  }
                : { alignmentStrategy: "trigger-center" },
        );
    return (0, r.jsx)(
        c.m,
        E(h({}, k), {
            children: (0, r.jsxs)("div", {
                ref: T,
                children: [
                    (0, r.jsx)(d.u, {
                        onClick: j,
                        variant: null != D.gradientColor ? "color-mix" : void 0,
                    }),
                    null != D.graphic &&
                        (0, r.jsx)("div", {
                            className: o()(_.graphic, { [_["graphic--".concat(v)]]: null != v }),
                            children: (0, r.jsx)(
                                s.zsu,
                                E(h({}, D.graphic), {
                                    aspectRatio: null != (g = D.graphic.aspectRatio) ? g : "sm" === v ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(f.Y, {
                        title: D.title,
                        body: D.body,
                        badge: D.badge,
                        textLink: D.textLink,
                    }),
                    (0, r.jsx)("div", {
                        className: _.actionBar,
                        children: (0, r.jsxs)("div", {
                            className: _.multistepActionLayout,
                            children: [
                                (0, r.jsx)(s.xvT, {
                                    variant: "text-xs/normal",
                                    className: _.multistepIndicator,
                                    children: p.intl.formatToPlainString(p.t.rO31eY, {
                                        count: P + 1,
                                        totalSteps: y.length,
                                    }),
                                }),
                                (0, r.jsx)(l.zxk, h({ size: "sm" }, M)),
                            ],
                        }),
                    }),
                    (0, r.jsx)(u.$, {}),
                ],
            }),
        }),
    );
}
