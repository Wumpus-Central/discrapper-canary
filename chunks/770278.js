n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    l = n(481060),
    c = n(110924),
    u = n(98127);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = 8;
function _() {
    let e = (0, l.dQu)(l.TVs.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0.25 }),
        t = (0, l.dQu)(l.TVs.colors.BACKGROUND_SCRIM).spring(),
        n = (0, l.dQu)(l.TVs.colors.BACKGROUND_SCRIM_LIGHTBOX).spring(),
        r = (0, l.dQu)(l.TVs.colors.OVERLAY_BACKDROP_LIGHTBOX).spring();
    return {
        [l.fCB.SUBTLE]: e,
        [l.fCB.DARK]: t,
        [l.fCB.BLUR]: t,
        [l.fCB.IMMERSIVE]: n,
        [l.fCB.LIGHTBOX]: r,
        [l.fCB.TOP_RADIAL]: t,
    };
}
let m = i.forwardRef(function (e, t) {
    let {
            backdropStyle: n = l.fCB.SUBTLE,
            backdropInstant: i = !1,
            zIndexBoost: a = 0,
            LayerComponent: d,
            isVisible: m,
            onClose: h,
        } = e,
        g = _()[n],
        E = (0, l.dQu)(l.TVs.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0 }),
        b = n === l.fCB.BLUR ? p : 0,
        y = {
            background: E,
            backdropFilter: "blur(0px)",
        },
        O = {
            background: g,
            backdropFilter: "blur(".concat(b, "px)"),
        },
        v = (0, c.Z)(i),
        S = (0, l.Yzy)(
            m,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: { duration: i || v ? 0 : 200 },
                from: y,
                enter: O,
                leave: y,
            },
            "animate-always",
        );
    if (null == d) {
        let e = { zIndex: 1000 + a };
        return S((t, n) =>
            n
                ? (0, r.jsx)(s.animated.div, {
                      className: u.backdrop,
                      style: f({}, t, e),
                      onClick: h,
                  })
                : null,
        );
    }
    return (0, r.jsx)(d, {
        children: S((e, t) =>
            t
                ? (0, r.jsx)(s.animated.div, {
                      className: o()(u.backdrop, u.withLayer),
                      style:
                          n === l.fCB.TOP_RADIAL
                              ? {
                                    background:
                                        "radial-gradient(96.68% 96.68% at 50.04% 3.32%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.00) 100%)",
                                }
                              : e,
                      onClick: h,
                  })
                : null,
        ),
    });
});
