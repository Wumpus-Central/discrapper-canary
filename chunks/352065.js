t.d(l, { A: () => y });
var a = t(951288),
    n = t(647438),
    o = t(120356),
    i = t.n(o),
    r = t(13941),
    s = t(990547),
    u = t(793030),
    d = t(481060),
    c = t(984802),
    b = t(163838),
    p = t(325380);
function y(e) {
    var l, t, o;
    let {
            transitionState: y,
            animationVariant: m = "default",
            returnRef: f,
            "aria-label": v,
            onClose: h,
            trackingProps: x,
            children: g,
        } = e,
        O = n.useId(),
        j = n.useMemo(
            () => ({
                id: O,
                headingId: "heading-".concat(O),
                onClose: h,
                dismissable: !0,
            }),
            [O, h],
        ),
        V = (0, c.Ll)(),
        { theme: w } = (0, d.TCT)(),
        S = (0, u.hvB)(y, m);
    return (0, a.jsx)(u.tCf.Provider, {
        value: j,
        children: (0, a.jsx)(
            d.VqE,
            ((t = (function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var t = null != arguments[l] ? arguments[l] : {},
                        a = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        a.forEach(function (l) {
                            var a;
                            (a = t[l]),
                                l in e
                                    ? Object.defineProperty(e, l, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[l] = a);
                        });
                }
                return e;
            })(
                {
                    id: O,
                    role: "dialog",
                    "aria-label": v,
                    "aria-labelledby": null != v ? void 0 : j.headingId,
                    returnRef: f,
                },
                x,
            )),
            (o = o =
                {
                    impressionType: null != (l = null == x ? void 0 : x.impressionType) ? l : s.ImpressionTypes.MODAL,
                    children: (0, a.jsx)(u.y5t, {
                        forceLevel: 1,
                        children: (0, a.jsx)("div", {
                            className: b.outerContainer,
                            children: (0, a.jsx)(d.f6W, {
                                theme: V,
                                children: (e) =>
                                    (0, a.jsx)(r.animated.div, {
                                        "data-mana-component": "layer-modal",
                                        className: i()(p.container, b.modal, e),
                                        style: S,
                                        children: (0, a.jsx)("div", {
                                            className: b.modalContent,
                                            children: (0, a.jsx)(d.f6W, {
                                                theme: w,
                                                children: (e) =>
                                                    (0, a.jsx)("div", {
                                                        className: i()(e, b.modalContentInner),
                                                        children: g,
                                                    }),
                                            }),
                                        }),
                                    }),
                            }),
                        }),
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                : (function (e, l) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, a);
                      }
                      return t;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            t),
        ),
    });
}
