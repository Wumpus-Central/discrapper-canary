n.d(t, { A: () => g });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(137317),
    l = n(990547),
    c = n(793030),
    u = n(507274),
    d = n(163838),
    f = n(325380);
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
function p(e) {
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            returnRef: _,
            "aria-label": h,
            onClose: g,
            trackingProps: E,
            children: b,
        } = e,
        y = i.useId(),
        O = i.useMemo(
            () => ({
                id: y,
                headingId: "heading-".concat(y),
                onClose: g,
                dismissable: !0,
            }),
            [y, g],
        ),
        v = (0, c.hvB)(n, a);
    return (0, r.jsx)(c.tCf.Provider, {
        value: O,
        children: (0, r.jsx)(
            u.V,
            m(
                p(
                    {
                        id: y,
                        role: "dialog",
                        "aria-label": h,
                        "aria-labelledby": null != h ? void 0 : O.headingId,
                        returnRef: _,
                    },
                    E,
                ),
                {
                    impressionType: null != (t = null == E ? void 0 : E.impressionType) ? t : l.ImpressionTypes.MODAL,
                    children: (0, r.jsx)(c.y5t, {
                        forceLevel: 1,
                        children: (0, r.jsx)("div", {
                            className: d.outerContainer,
                            children: (0, r.jsx)(s.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: o()(f.container, d.modal),
                                style: v,
                                children: (0, r.jsx)("div", {
                                    className: d.modalContent,
                                    children: b,
                                }),
                            }),
                        }),
                    }),
                },
            ),
        ),
    });
}
