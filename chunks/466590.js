n.d(t, { e: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(159691),
    c = n(920155),
    u = n(966902),
    d = n(237872),
    f = n(562618),
    _ = n(388032),
    p = n(254477);
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
        h,
        g,
        {
            steps: y,
            caretConfig: O = {
                position: "bottom",
                align: "center",
            },
            size: v = "md",
            onStepChange: I,
            onRequestClose: T,
            popoverRef: S,
            shouldShow: A,
        } = e,
        C = b(e, ["steps", "caretConfig", "size", "onStepChange", "onRequestClose", "popoverRef", "shouldShow"]);
    let [N, R] = i.useState(0);
    i.useEffect(() => {
        A && R(0);
    }, [A]),
        i.useEffect(() => {
            null == I || I(N);
        }, [N, I]);
    let P = y[N],
        D = N + 1 === y.length,
        w = i.useCallback(() => {
            var e;
            null == P || null == (e = P.onCta) || e.call(P), D ? null == T || T() : R((e) => e + 1);
        }, [P, D, T]),
        x = i.useCallback(() => {
            null == T || T();
        }, [T]),
        L = i.useCallback(() => {
            null == T || T();
        }, [T]);
    if (!A || null == P) return null;
    let M = m(
        {
            text:
                null != (a = null == (t = P.action) ? void 0 : t.text)
                    ? a
                    : D
                      ? _.intl.string(_.t.i4jeWR)
                      : _.intl.string(_.t.PDTjLN),
            variant: null != (h = null == (n = P.action) ? void 0 : n.variant) ? h : "primary",
            onClick: w,
        },
        P.action,
    );
    return (0, r.jsx)(
        c.m,
        E(m({}, C), {
            shouldShow: A,
            onRequestClose: x,
            gradientColor: P.gradientColor,
            children: (0, r.jsxs)("div", {
                ref: S,
                children: [
                    (0, r.jsx)(d.u, {
                        onClick: L,
                        variant: null != P.gradientColor ? "color-mix" : void 0,
                    }),
                    null != P.graphic &&
                        (0, r.jsx)("div", {
                            className: o()(p.graphic, { [p["graphic--".concat(v)]]: null != v }),
                            children: (0, r.jsx)(
                                s.zsu,
                                E(m({}, P.graphic), {
                                    aspectRatio: null != (g = P.graphic.aspectRatio) ? g : "sm" === v ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(f.Y, {
                        title: P.title,
                        body: P.body,
                        badge: P.badge,
                        textLink: P.textLink,
                    }),
                    (0, r.jsx)("div", {
                        className: p.actionBar,
                        children: (0, r.jsxs)("div", {
                            className: p.multistepActionLayout,
                            children: [
                                (0, r.jsx)(s.xvT, {
                                    variant: "text-xs/normal",
                                    className: p.multistepIndicator,
                                    children: _.intl.formatToPlainString(_.t.rO31eY, {
                                        count: N + 1,
                                        totalSteps: y.length,
                                    }),
                                }),
                                (0, r.jsx)(l.zxk, m({ size: "sm" }, M)),
                            ],
                        }),
                    }),
                    (0, r.jsx)(u.$, { caretConfig: O }),
                ],
            }),
        }),
    );
}
