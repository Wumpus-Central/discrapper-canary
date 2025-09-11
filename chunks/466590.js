n.d(t, { e: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(751334),
    c = n(159691),
    u = n(920155),
    d = n(966902),
    f = n(237872),
    _ = n(562618),
    p = n(388032),
    h = n(254477);
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
function g(e) {
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
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    var t,
        n,
        a,
        m,
        E,
        {
            steps: O,
            caretConfig: v = {
                position: "bottom",
                align: "center",
            },
            size: I = "md",
            onStepChange: T,
            onRequestClose: S,
            popoverRef: A,
            shouldShow: C,
        } = e,
        N = y(e, ["steps", "caretConfig", "size", "onStepChange", "onRequestClose", "popoverRef", "shouldShow"]);
    let [R, P] = i.useState(0);
    i.useEffect(() => {
        C && P(0);
    }, [C]),
        i.useEffect(() => {
            null == T || T(R);
        }, [R, T]);
    let w = O[R],
        D = R + 1 === O.length,
        x = i.useCallback(() => {
            var e;
            null == w || null == (e = w.onCta) || e.call(w), D ? null == S || S() : P((e) => e + 1);
        }, [w, D, S]),
        L = i.useCallback(() => {
            null == S || S();
        }, [S]),
        j = i.useCallback(() => {
            null == S || S();
        }, [S]);
    if (!C || null == w) return null;
    let k = g(
        {
            text:
                null != (a = null == (t = w.action) ? void 0 : t.text)
                    ? a
                    : D
                      ? p.intl.string(p.t.i4jeWV)
                      : p.intl.string(p.t.PDTjLC),
            variant: null != (m = null == (n = w.action) ? void 0 : n.variant) ? m : "primary",
            onClick: x,
        },
        w.action,
    );
    return (0, r.jsx)(
        u.m,
        b(g({}, N), {
            shouldShow: C,
            onRequestClose: L,
            gradientColor: w.gradientColor,
            children: (0, r.jsxs)("div", {
                ref: A,
                children: [
                    (0, r.jsx)(f.u, {
                        onClick: j,
                        variant: null != w.gradientColor ? "color-mix" : void 0,
                    }),
                    null != w.graphic &&
                        (0, r.jsx)("div", {
                            className: o()(h.graphic, { [h["graphic--".concat(I)]]: null != I }),
                            children: (0, r.jsx)(
                                l.z,
                                b(g({}, w.graphic), {
                                    aspectRatio: null != (E = w.graphic.aspectRatio) ? E : "sm" === I ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(_.Y, {
                        title: w.title,
                        body: w.body,
                        badge: w.badge,
                        textLink: w.textLink,
                        hasBottomMargin: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: h.actionBar,
                        children: (0, r.jsxs)("div", {
                            className: h.multistepActionLayout,
                            children: [
                                (0, r.jsx)(s.xvT, {
                                    variant: "text-xs/normal",
                                    className: h.multistepIndicator,
                                    children: p.intl.formatToPlainString(p.t.rO31eX, {
                                        count: R + 1,
                                        totalSteps: O.length,
                                    }),
                                }),
                                (0, r.jsx)(c.zxk, g({ size: "sm" }, k)),
                            ],
                        }),
                    }),
                    (0, r.jsx)(d.$, { caretConfig: v }),
                ],
            }),
        }),
    );
}
