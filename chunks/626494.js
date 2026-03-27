"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(4208),
    l = n(397927),
    u = n(475743),
    c = n(866517);
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
            zIndexBoost: s = 0,
            LayerComponent: f,
            isVisible: p,
            onClose: h,
        } = e,
        m = _()[n],
        E = (0, l.rdh)(l.LU0.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0 }),
        g = n === l.F2Z.BLUR ? d : 0,
        A = { background: E, backdropFilter: "blur(0px)" },
        I = { background: m, backdropFilter: `blur(${g}px)` },
        T = (0, u.A)(i),
        S = (0, l.pnh)(
            p,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: { duration: i || T ? 0 : 200 },
                from: A,
                enter: I,
                leave: A,
            },
            "animate-always",
        );
    if (null == f) {
        let e = { zIndex: 1e3 + s };
        return S((t, n) =>
            n ? (0, r.jsx)(o.animated.div, { className: c.t, style: { ...t, ...e }, onClick: h }) : null,
        );
    }
    return (0, r.jsx)(f, {
        children: S((e, t) =>
            t
                ? (0, r.jsx)(o.animated.div, {
                      className: a()(c.t, c.o),
                      style:
                          n === l.F2Z.TOP_RADIAL
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
