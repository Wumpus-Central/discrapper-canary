n.d(t, {
    p: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(732955),
    c = n(964892),
    u = n(135564),
    d = n(916845),
    f = n(627330),
    p = n(985018),
    _ = n(248789);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function O(e) {
    var t, n, a, h, g;
    let {
            steps: y,
            caretConfig: O = {
                align: "center",
            },
            size: A = "md",
            onStepChange: v,
            onRequestClose: S,
            popoverRef: I,
            shouldShow: T,
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
        ]),
        [R, w] = i.useState(0);
    i.useEffect(() => {
        T && w(0);
    }, [T]),
        i.useEffect(() => {
            null == v || v(R);
        }, [R, v]);
    let P = y[R],
        D = R + 1 === y.length,
        x = i.useCallback(() => {
            var e;
            null == P || null == (e = P.onCta) || e.call(P), D ? null == S || S() : w((e) => e + 1);
        }, [P, D, S]),
        L = i.useCallback(() => {
            null == S || S();
        }, [S]),
        j = i.useCallback(() => {
            null == S || S();
        }, [S]);
    if (!T || null == P) return null;
    let M = m(
            {
                text:
                    null != (t = null == (h = P.action) ? void 0 : h.text)
                        ? t
                        : D
                          ? p.intl.string(p.t.i4jeWR)
                          : p.intl.string(p.t.PDTjLN),
                variant: null != (n = null == (g = P.action) ? void 0 : g.variant) ? n : "primary",
                onClick: x,
            },
            P.action,
        ),
        k = m(
            {
                targetElementRef: N.targetElementRef,
                hasVideo: N.hasVideo,
                scrollBehavior: N.scrollBehavior,
                position: C,
                shouldShow: T,
                onRequestClose: L,
                gradientColor: P.gradientColor,
                caretConfig: O,
            },
            "edge" === N.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: N.align,
                  }
                : {
                      alignmentStrategy: "trigger-center",
                  },
        );
    return (0, r.jsx)(
        c.x,
        E(m({}, k), {
            children: (0, r.jsxs)("div", {
                ref: I,
                children: [
                    (0, r.jsx)(d.q, {
                        onClick: j,
                        variant: null != P.gradientColor ? "color-mix" : void 0,
                    }),
                    null != P.graphic &&
                        (0, r.jsx)("div", {
                            className: s()(_.graphic, {
                                [_["graphic--".concat(A)]]: null != A,
                            }),
                            children: (0, r.jsx)(
                                o.vYh,
                                E(m({}, P.graphic), {
                                    aspectRatio: null != (a = P.graphic.aspectRatio) ? a : "sm" === A ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(f.D, {
                        title: P.title,
                        body: P.body,
                        badge: P.badge,
                        textLink: P.textLink,
                    }),
                    (0, r.jsx)("div", {
                        className: _.actionBar,
                        children: (0, r.jsxs)("div", {
                            className: _.multistepActionLayout,
                            children: [
                                (0, r.jsx)(o.EYj, {
                                    variant: "text-xs/normal",
                                    className: _.multistepIndicator,
                                    children: p.intl.formatToPlainString(p.t.rO31eY, {
                                        count: R + 1,
                                        totalSteps: y.length,
                                    }),
                                }),
                                (0, r.jsx)(
                                    l.$nd,
                                    m(
                                        {
                                            size: "sm",
                                        },
                                        M,
                                    ),
                                ),
                            ],
                        }),
                    }),
                    (0, r.jsx)(u.F, {}),
                ],
            }),
        }),
    );
}
