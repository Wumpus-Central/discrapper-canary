n.d(t, {
    D: () => b,
    I: () => y,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(938288),
    l = n(990547),
    c = n(793030),
    u = n(143450),
    d = n(507274),
    f = n(667137),
    _ = n(985316),
    p = n(525751);
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
var b = (function (e) {
    return (
        (e[(e.ENTERING = 0)] = "ENTERING"),
        (e[(e.ENTERED = 1)] = "ENTERED"),
        (e[(e.EXITING = 2)] = "EXITING"),
        (e[(e.EXITED = 3)] = "EXITED"),
        (e[(e.HIDDEN = 4)] = "HIDDEN"),
        e
    );
})({});
function y(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            size: h = "md",
            paddingSize: g = "sm",
            fullScreenOnMobile: b = !0,
            returnRef: y,
            role: O = "dialog",
            "aria-label": v,
            dismissable: I = !0,
            onClose: T,
            contentOutsideContainer: S,
            trackingProps: A,
            children: C,
        } = e,
        N = i.useId(),
        R = i.useMemo(
            () => ({
                id: N,
                headingId: "heading-".concat(N),
                onClose: T,
                dismissable: I,
            }),
            [I, N, T],
        ),
        P = 0 === n || 1 === n,
        { reducedMotion: w } = i.useContext(c.Sfi),
        D = P || w.enabled || "subtle" === a ? "scale(1)" : "scale(0.9)",
        x = (0, u.q)(
            {
                opacity: +!!P,
                transform: D,
                config: P ? _.jF : _.W$,
                delay: 64 * !!P,
            },
            "animate-always",
        );
    return (0, r.jsx)(f.t.Provider, {
        value: R,
        children: (0, r.jsx)(
            d.V,
            E(
                m(
                    {
                        id: N,
                        role: O,
                        "aria-label": v,
                        "aria-labelledby": null != v ? void 0 : R.headingId,
                        returnRef: y,
                    },
                    A,
                ),
                {
                    impressionType: null != (t = null == A ? void 0 : A.impressionType) ? t : l.ImpressionTypes.MODAL,
                    children: (0, r.jsx)(c.y5t, {
                        forceLevel: 1,
                        children: (0, r.jsxs)("div", {
                            className: o()(p.outerContainer, { [p.fullScreenOnMobile]: b }),
                            children: [
                                S,
                                (0, r.jsx)(s.animated.div, {
                                    "data-mana-component": "modal",
                                    className: o()(p.container, p["size-".concat(h)], p["padding-size-".concat(g)]),
                                    style: x,
                                    children: C,
                                }),
                            ],
                        }),
                    }),
                },
            ),
        ),
    });
}
