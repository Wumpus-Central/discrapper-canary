n.d(t, {
    d: () => y,
    i: () => _.i,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
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

function y(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            size: _ = "md",
            paddingSize: m = "sm",
            fullScreenOnMobile: E = !0,
            returnRef: y,
            role: O = "dialog",
            "aria-label": A,
            dismissable: v = !0,
            onClose: S,
            contentOutsideContainer: I,
            trackingProps: T,
            children: C,
        } = e,
        N = i.useId(),
        R = i.useMemo(
            () => ({
                id: N,
                headingId: "heading-".concat(N),
                onClose: S,
                dismissable: v,
            }),
            [v, N, S],
        ),
        w = (0, p.kS)(n, a),
        P = i.useRef(null);
    return (0, r.jsx)(f.V.Provider, {
        value: R,
        children: (0, r.jsx)(c.l, {
            id: N,
            role: O,
            "aria-label": A,
            "aria-labelledby": null != A ? void 0 : R.headingId,
            returnRef: y,
            trackingProps: b(g({}, T), {
                impressionType: null != (t = null == T ? void 0 : T.impressionType) ? t : l.ImpressionTypes.MODAL,
            }),
            children: (0, r.jsx)(u.xp, {
                containerRef: P,
                children: (0, r.jsx)(d.F, {
                    forceLevel: 1,
                    children: (0, r.jsxs)("div", {
                        ref: P,
                        className: s()(h.outerContainer, {
                            [h.fullScreenOnMobile]: E,
                        }),
                        children: [
                            I,
                            (0, r.jsx)(o.animated.div, {
                                "data-mana-component": "modal",
                                className: s()(h.container, h["size-".concat(_)], h["padding-size-".concat(m)]),
                                style: w,
                                children: C,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
