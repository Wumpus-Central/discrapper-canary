n.d(t, {
    D: () => E,
    I: () => b,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(938288),
    l = n(990547),
    c = n(793030),
    u = n(507274),
    d = n(667137),
    f = n(985316),
    _ = n(525751);
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
var E = (function (e) {
    return (
        (e[(e.ENTERING = 0)] = "ENTERING"),
        (e[(e.ENTERED = 1)] = "ENTERED"),
        (e[(e.EXITING = 2)] = "EXITING"),
        (e[(e.EXITED = 3)] = "EXITED"),
        (e[(e.HIDDEN = 4)] = "HIDDEN"),
        e
    );
})({});
function b(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            size: p = "md",
            paddingSize: m = "sm",
            fullScreenOnMobile: E = !0,
            returnRef: b,
            role: y = "dialog",
            "aria-label": O,
            dismissable: v = !0,
            onClose: I,
            contentOutsideContainer: T,
            trackingProps: S,
            children: A,
        } = e,
        C = i.useId(),
        N = i.useMemo(
            () => ({
                id: C,
                headingId: "heading-".concat(C),
                onClose: I,
                dismissable: v,
            }),
            [v, C, I],
        ),
        R = 0 === n || 1 === n,
        { reducedMotion: P } = i.useContext(c.Sfi),
        w = R || P.enabled || "subtle" === a ? "scale(1)" : "scale(0.9)",
        D = (0, c.q_F)(
            {
                opacity: +!!R,
                transform: w,
                config: R ? f.jF : f.W$,
                delay: 64 * !!R,
            },
            "animate-always",
        );
    return (0, r.jsx)(d.t.Provider, {
        value: N,
        children: (0, r.jsx)(
            u.V,
            g(
                h(
                    {
                        id: C,
                        role: y,
                        "aria-label": O,
                        "aria-labelledby": null != O ? void 0 : N.headingId,
                        returnRef: b,
                    },
                    S,
                ),
                {
                    impressionType: null != (t = null == S ? void 0 : S.impressionType) ? t : l.ImpressionTypes.MODAL,
                    children: (0, r.jsx)(c.y5t, {
                        forceLevel: 1,
                        children: (0, r.jsxs)("div", {
                            className: o()(_.outerContainer, { [_.fullScreenOnMobile]: E }),
                            children: [
                                T,
                                (0, r.jsx)(s.animated.div, {
                                    "data-mana-component": "modal",
                                    className: o()(_.container, _["size-".concat(p)], _["padding-size-".concat(m)]),
                                    style: D,
                                    children: A,
                                }),
                            ],
                        }),
                    }),
                },
            ),
        ),
    });
}
