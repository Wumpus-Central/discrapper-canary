"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(602853),
    u = n(827734),
    c = n(892491),
    d = n(866323),
    _ = n(475743),
    f = n(316933);
let p = i.forwardRef(function (e, t) {
    let n,
        i,
        s,
        p,
        {
            backdropStyle: h = c.F.SUBTLE,
            backdropInstant: E = !1,
            zIndexBoost: m = 0,
            LayerComponent: g,
            isVisible: A,
            onClose: I,
        } = e,
        T = ((n = (0, l.r)(u.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0.25 })),
        (i = (0, l.r)(u.A.colors.BACKGROUND_SCRIM).spring()),
        (s = (0, l.r)(u.A.colors.BACKGROUND_SCRIM_LIGHTBOX).spring()),
        (p = (0, l.r)(u.A.colors.OVERLAY_BACKDROP_LIGHTBOX).spring()),
        { [c.F.SUBTLE]: n, [c.F.DARK]: i, [c.F.BLUR]: i, [c.F.IMMERSIVE]: s, [c.F.LIGHTBOX]: p, [c.F.TOP_RADIAL]: i })[
            h
        ],
        S = (0, l.r)(u.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0 }),
        y = 8 * (h === c.F.BLUR),
        N = { background: S, backdropFilter: "blur(0px)" },
        v = { background: T, backdropFilter: `blur(${y}px)` },
        C = (0, _.A)(E),
        O = (0, d.p)(
            A,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: { duration: E || C ? 0 : 200 },
                from: N,
                enter: v,
                leave: N,
            },
            "animate-always",
        );
    if (null == g) {
        let e = { zIndex: 1e3 + m };
        return O((t, n) =>
            n ? (0, r.jsx)(o.animated.div, { className: f.t, style: { ...t, ...e }, onClick: I }) : null,
        );
    }
    return (0, r.jsx)(g, {
        children: O((e, t) =>
            t
                ? (0, r.jsx)(o.animated.div, {
                      className: a()(f.t, f.o),
                      style:
                          h === c.F.TOP_RADIAL
                              ? {
                                    background:
                                        "radial-gradient(96.68% 96.68% at 50.04% 3.32%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.00) 100%)",
                                }
                              : e,
                      onClick: I,
                  })
                : null,
        ),
    });
});
