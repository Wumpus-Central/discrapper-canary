n.d(t, { A: () => E });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(358458),
    l = n(990547),
    c = n(793030),
    u = n(481060),
    d = n(984802),
    f = n(163838),
    _ = n(325380);
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
function E(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            returnRef: p,
            "aria-label": m,
            onClose: E,
            trackingProps: b,
            children: y,
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
        I = (0, d.Ll)(),
        { theme: T } = (0, u.TCT)(),
        S = (0, c.hvB)(n, a);
    return (0, r.jsx)(c.tCf.Provider, {
        value: v,
        children: (0, r.jsx)(
            u.VqE,
            g(
                h(
                    {
                        id: O,
                        role: "dialog",
                        "aria-label": m,
                        "aria-labelledby": null != m ? void 0 : v.headingId,
                        returnRef: p,
                    },
                    b,
                ),
                {
                    impressionType: null != (t = null == b ? void 0 : b.impressionType) ? t : l.ImpressionTypes.MODAL,
                    children: (0, r.jsx)(c.y5t, {
                        forceLevel: 1,
                        children: (0, r.jsx)("div", {
                            className: f.outerContainer,
                            children: (0, r.jsx)(u.f6W, {
                                theme: I,
                                children: (e) =>
                                    (0, r.jsx)(s.animated.div, {
                                        "data-mana-component": "layer-modal",
                                        className: o()(_.container, f.modal, e),
                                        style: S,
                                        children: (0, r.jsx)("div", {
                                            className: f.modalContent,
                                            children: (0, r.jsx)(u.f6W, {
                                                theme: T,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: o()(e, f.modalContentInner),
                                                        children: y,
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
