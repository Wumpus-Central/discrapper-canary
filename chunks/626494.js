"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(397927),
    u = n(475743),
    c = n(701486);
let d = 8;
function _() {
    let e = (0, l.rdh)(l.LU0.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0.25 }),
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
let f = i.forwardRef(function (e, t) {
    let {
            backdropStyle: n = l.F2Z.SUBTLE,
            backdropInstant: i = !1,
            zIndexBoost: a = 0,
            LayerComponent: f,
            isVisible: h,
            onClose: p,
        } = e,
        g = _()[n],
        E = (0, l.rdh)(l.LU0.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0 }),
        A = n === l.F2Z.BLUR ? d : 0,
        I = { background: E, backdropFilter: "blur(0px)" },
        T = { background: g, backdropFilter: `blur(${A}px)` },
        y = (0, u.A)(i),
        S = (0, l.pnh)(
            h,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: { duration: i || y ? 0 : 200 },
                from: I,
                enter: T,
                leave: I,
            },
            "animate-always",
        );
    if (null == f) {
        let e = { zIndex: 1e3 + a };
        return S((t, n) =>
            n ? (0, r.jsx)(o.animated.div, { className: c.t, style: { ...t, ...e }, onClick: p }) : null,
        );
    }
    return (0, r.jsx)(f, {
        children: S((e, t) =>
            t
                ? (0, r.jsx)(o.animated.div, {
                      className: s()(c.t, c.o),
                      style:
                          n === l.F2Z.TOP_RADIAL
                              ? {
                                    background:
                                        "radial-gradient(96.68% 96.68% at 50.04% 3.32%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.00) 100%)",
                                }
                              : e,
                      onClick: p,
                  })
                : null,
        ),
    });
});
