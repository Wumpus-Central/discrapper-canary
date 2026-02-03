n.d(t, {
    N: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(110259),
    c = n(158954),
    u = n(397927),
    d = n(97469),
    f = n(538029),
    p = n(22789);

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
                _(e, t, n[t]);
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

function E(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            returnRef: _,
            "aria-label": m,
            onClose: E,
            trackingProps: y,
            children: b,
        } = e,
        O = i.useId(),
        v = i.useMemo(
            () => ({
                id: O,
                headingId: "heading-".concat(O),
                onClose: E,
                dismissable: !0,
            }),
            [O, E],
        ),
        A = (0, d.NC)(),
        { theme: I } = (0, u.wRf)(),
        S = (0, c.kSI)(n, a);
    return (0, r.jsx)(c.Vs9.Provider, {
        value: v,
        children: (0, r.jsx)(
            u.lGe,
            g(
                h(
                    {
                        id: O,
                        role: "dialog",
                        "aria-label": m,
                        "aria-labelledby": null != m ? void 0 : v.headingId,
                        returnRef: _,
                    },
                    y,
                ),
                {
                    impressionType: null != (t = null == y ? void 0 : y.impressionType) ? t : l.ImpressionTypes.MODAL,
                    children: (0, r.jsx)(c.Fmo, {
                        forceLevel: 1,
                        children: (0, r.jsx)("div", {
                            className: f.nw,
                            children: (0, r.jsx)(u.NPJ, {
                                theme: A,
                                children: (e) =>
                                    (0, r.jsx)(s.animated.div, {
                                        "data-mana-component": "layer-modal",
                                        className: o()(p.container, f.yl, e),
                                        style: S,
                                        children: (0, r.jsx)("div", {
                                            className: f.jE,
                                            children: (0, r.jsx)(u.NPJ, {
                                                theme: I,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: o()(e, f.h_),
                                                        children: b,
                                                    }),
                                            }),
                                        }),
                                    }),
                            }),
                        }),
                    }),
                },
            ),
        ),
    });
}
