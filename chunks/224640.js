n.d(t, {
    d: () => b,
    i: () => _.i,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(110259),
    c = n(113325),
    u = n(426333),
    d = n(707554),
    f = n(22856),
    p = n(150591),
    _ = n(815390),
    h = n(22789);

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

function y(e, t) {
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

function b(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            size: _ = "md",
            paddingSize: m = "sm",
            fullScreenOnMobile: E = !0,
            returnRef: b,
            role: O = "dialog",
            "aria-label": v,
            dismissable: A = !0,
            onClose: I,
            contentOutsideContainer: S,
            trackingProps: T,
            children: C,
        } = e,
        N = i.useId(),
        w = i.useMemo(
            () => ({
                id: N,
                headingId: "heading-".concat(N),
                onClose: I,
                dismissable: A,
            }),
            [A, N, I],
        ),
        R = (0, p.kS)(n, a),
        P = i.useRef(null);
    return (0, r.jsx)(f.V.Provider, {
        value: w,
        children: (0, r.jsx)(c.l, {
            id: N,
            role: O,
            "aria-label": v,
            "aria-labelledby": null != v ? void 0 : w.headingId,
            returnRef: b,
            trackingProps: y(g({}, T), {
                impressionType: null != (t = null == T ? void 0 : T.impressionType) ? t : l.ImpressionTypes.MODAL,
            }),
            children: (0, r.jsx)(u.xp, {
                containerRef: P,
                children: (0, r.jsx)(d.F, {
                    forceLevel: 1,
                    children: (0, r.jsxs)("div", {
                        ref: P,
                        className: o()(h.outerContainer, {
                            [h.fullScreenOnMobile]: E,
                        }),
                        children: [
                            S,
                            (0, r.jsx)(s.animated.div, {
                                "data-mana-component": "modal",
                                className: o()(h.container, h["size-".concat(_)], h["padding-size-".concat(m)]),
                                style: R,
                                children: C,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
