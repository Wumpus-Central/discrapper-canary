n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(397927),
    c = n(475743),
    u = n(971020);

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
    let e = (0, l.rdh)(l.LU0.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({
            opacity: 0.25,
        }),
        t = (0, l.rdh)(l.LU0.colors.BACKGROUND_SCRIM).spring(),
        n = (0, l.rdh)(l.LU0.colors.BACKGROUND_SCRIM_LIGHTBOX).spring(),
        r = (0, l.rdh)(l.LU0.colors.OVERLAY_BACKDROP_LIGHTBOX).spring();
    return {
        [l.F2Z.SUBTLE]: e,
        [l.F2Z.DARK]: t,
        [l.F2Z.BLUR]: t,
        [l.F2Z.IMMERSIVE]: n,
        [l.F2Z.LIGHTBOX]: r,
        [l.F2Z.TOP_RADIAL]: t,
    };
}
let h = i.forwardRef(function (e, t) {
    let {
            backdropStyle: n = l.F2Z.SUBTLE,
            backdropInstant: i = !1,
            zIndexBoost: a = 0,
            LayerComponent: d,
            isVisible: h,
            onClose: m,
        } = e,
        g = _()[n],
        E = (0, l.rdh)(l.LU0.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({
            opacity: 0,
        }),
        y = n === l.F2Z.BLUR ? p : 0,
        b = {
            background: E,
            backdropFilter: "blur(0px)",
        },
        O = {
            background: g,
            backdropFilter: "blur(".concat(y, "px)"),
        },
        v = (0, c.A)(i),
        A = (0, l.pnh)(
            h,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: {
                    duration: i || v ? 0 : 200,
                },
                from: b,
                enter: O,
                leave: b,
            },
            "animate-always",
        );
    if (null == d) {
        let e = {
            zIndex: 1e3 + a,
        };
        return A((t, n) =>
            n
                ? (0, r.jsx)(s.animated.div, {
                      className: u.t,
                      style: f({}, t, e),
                      onClick: m,
                  })
                : null,
        );
    }
    return (0, r.jsx)(d, {
        children: A((e, t) =>
            t
                ? (0, r.jsx)(s.animated.div, {
                      className: o()(u.t, u.o),
                      style:
                          n === l.F2Z.TOP_RADIAL
                              ? {
                                    background:
                                        "radial-gradient(96.68% 96.68% at 50.04% 3.32%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.00) 100%)",
                                }
                              : e,
                      onClick: m,
                  })
                : null,
        ),
    });
});
