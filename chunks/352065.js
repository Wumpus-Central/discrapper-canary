n.d(t, { A: () => b });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
    l = n(990547),
    c = n(793030),
    u = n(507274),
    d = n(667137),
    f = n(985316),
    _ = n(823531),
    p = n(456208);
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
function b(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            returnRef: h,
            "aria-label": g,
            onClose: b,
            trackingProps: y,
            children: O,
        } = e,
        v = i.useId(),
        I = i.useMemo(
            () => ({
                id: v,
                headingId: "heading-".concat(v),
                onClose: b,
                dismissable: !0,
            }),
            [v, b],
        ),
        T = (0, f.hv)(n, a);
    return (0, r.jsx)(d.t.Provider, {
        value: I,
        children: (0, r.jsx)(
            u.V,
            E(
                m(
                    {
                        id: v,
                        role: "dialog",
                        "aria-label": g,
                        "aria-labelledby": null != g ? void 0 : I.headingId,
                        returnRef: h,
                    },
                    y,
                ),
                {
                    impressionType: null != (t = null == y ? void 0 : y.impressionType) ? t : l.ImpressionTypes.MODAL,
                    children: (0, r.jsx)(c.y5t, {
                        forceLevel: 1,
                        children: (0, r.jsx)("div", {
                            className: _.outerContainer,
                            children: (0, r.jsx)(s.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: o()(p.container, _.modal),
                                style: T,
                                children: (0, r.jsx)("div", {
                                    className: _.modalContent,
                                    children: O,
                                }),
                            }),
                        }),
                    }),
                },
            ),
        ),
    });
}
