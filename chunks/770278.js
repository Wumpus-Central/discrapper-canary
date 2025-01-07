r.d(n, {
    f: function () {
        return i;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(481060),
    d = r(110924),
    f = r(57239);
let _ = 8;
function h() {
    let e = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0.25 }),
        n = (0, c.useToken)(c.tokens.colors.BG_BACKDROP).spring();
    return {
        SUBTLE: e,
        DARK: n,
        BLUR: n,
        IMMERSIVE: (0, c.useToken)(c.tokens.colors.BG_BACKDROP_IMMERSIVE).spring()
    };
}
!(function (e) {
    (e.SUBTLE = 'SUBTLE'), (e.DARK = 'DARK'), (e.BLUR = 'BLUR'), (e.IMMERSIVE = 'IMMERSIVE');
})(i || (i = {}));
let p = s.forwardRef(function (e, n) {
    let { backdropStyle: r = 'SUBTLE', backdropInstant: i = !1, zIndexBoost: s = 0, LayerComponent: o, isVisible: p, onClose: m } = e,
        g = h()[r],
        E = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0 }),
        v = 'BLUR' === r ? _ : 0,
        I = {
            background: E,
            backdropFilter: 'blur(0px)'
        },
        T = {
            background: g,
            backdropFilter: 'blur('.concat(v, 'px)')
        },
        b = (0, d.Z)(i),
        y = (0, c.useTransition)(
            p,
            {
                keys: (e) => (e ? 'backdrop' : 'empty'),
                config: { duration: i || b ? 0 : 300 },
                from: I,
                enter: T,
                leave: I
            },
            'animate-always'
        );
    if (null == o) {
        let e = { zIndex: 1000 + s };
        return y((n, r) =>
            r
                ? (0, a.jsx)(u.animated.div, {
                      className: f.backdrop,
                      style: {
                          ...n,
                          ...e
                      },
                      onClick: m
                  })
                : null
        );
    }
    return (0, a.jsx)(o, {
        children: y((e, n) =>
            n
                ? (0, a.jsx)(u.animated.div, {
                      className: l()(f.backdrop, f.withLayer),
                      style: e,
                      onClick: m
                  })
                : null
        )
    });
});
n.Z = p;
