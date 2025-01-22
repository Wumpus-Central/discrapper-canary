r.d(n, {
    f: function () {
        return i;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(481060),
    d = r(110924),
    f = r(57239);
let p = 8;
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
let _ = o.forwardRef(function (e, n) {
    let { backdropStyle: r = 'SUBTLE', backdropInstant: i = !1, zIndexBoost: o = 0, LayerComponent: s, isVisible: _, onClose: m } = e,
        g = h()[r],
        E = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0 }),
        v = 'BLUR' === r ? p : 0,
        y = {
            background: E,
            backdropFilter: 'blur(0px)'
        },
        b = {
            background: g,
            backdropFilter: 'blur('.concat(v, 'px)')
        },
        I = (0, d.Z)(i),
        T = (0, c.useTransition)(
            _,
            {
                keys: (e) => (e ? 'backdrop' : 'empty'),
                config: { duration: i || I ? 0 : 300 },
                from: y,
                enter: b,
                leave: y
            },
            'animate-always'
        );
    if (null == s) {
        let e = { zIndex: 1000 + o };
        return T((n, r) =>
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
    return (0, a.jsx)(s, {
        children: T((e, n) =>
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
n.Z = _;
