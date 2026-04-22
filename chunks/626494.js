"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(602853),
    u = n(827734),
    d = n(892491),
    c = n(866323),
    _ = n(475743),
    f = n(316933);
let E = i.forwardRef(function (e, t) {
    let n,
        i,
        s,
        E,
        {
            backdropStyle: h = d.F.SUBTLE,
            backdropInstant: p = !1,
            zIndexBoost: m = 0,
            LayerComponent: g,
            isVisible: A,
            onClose: I,
        } = e,
        T = ((n = (0, l.r)(u.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0.25 })),
        (i = (0, l.r)(u.A.colors.BACKGROUND_SCRIM).spring()),
        (s = (0, l.r)(u.A.colors.BACKGROUND_SCRIM_LIGHTBOX).spring()),
        (E = (0, l.r)(u.A.colors.OVERLAY_BACKDROP_LIGHTBOX).spring()),
        { [d.F.SUBTLE]: n, [d.F.DARK]: i, [d.F.BLUR]: i, [d.F.IMMERSIVE]: s, [d.F.LIGHTBOX]: E, [d.F.TOP_RADIAL]: i })[
            h
        ],
        S = (0, l.r)(u.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0 }),
        y = 8 * (h === d.F.BLUR),
        N = { background: S, backdropFilter: "blur(0px)" },
        O = { background: T, backdropFilter: `blur(${y}px)` },
        R = (0, _.A)(p),
        v = (0, c.p)(
            A,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: { duration: p || R ? 0 : 200 },
                from: N,
                enter: O,
                leave: N,
            },
            "animate-always",
        );
    if (null == g) {
        let e = { zIndex: 1e3 + m };
        return v((t, n) =>
            n ? (0, r.jsx)(o.animated.div, { className: f.t, style: { ...t, ...e }, onClick: I }) : null,
        );
    }
    return (0, r.jsx)(g, {
        children: v((e, t) =>
            t
                ? (0, r.jsx)(o.animated.div, {
                      className: a()(f.t, f.o),
                      style:
                          h === d.F.TOP_RADIAL
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
