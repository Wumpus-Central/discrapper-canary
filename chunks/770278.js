n.d(t, {
    Z: () => m,
    f: () => _
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(110924),
    u = n(565725);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = 8;
var _ = (function (e) {
    return (e.SUBTLE = 'SUBTLE'), (e.DARK = 'DARK'), (e.BLUR = 'BLUR'), (e.IMMERSIVE = 'IMMERSIVE'), e;
})({});
function h() {
    let e = (0, l.dQu)(l.TVs.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0.25 }),
        t = (0, l.dQu)(l.TVs.colors.BG_BACKDROP).spring();
    return {
        SUBTLE: e,
        DARK: t,
        BLUR: t,
        IMMERSIVE: (0, l.dQu)(l.TVs.colors.BG_BACKDROP_IMMERSIVE).spring()
    };
}
let m = i.forwardRef(function (e, t) {
    let { backdropStyle: n = 'SUBTLE', backdropInstant: i = !1, zIndexBoost: o = 0, LayerComponent: d, isVisible: _, onClose: m } = e,
        g = h()[n],
        E = (0, l.dQu)(l.TVs.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0 }),
        v = 'BLUR' === n ? p : 0,
        b = {
            background: E,
            backdropFilter: 'blur(0px)'
        },
        y = {
            background: g,
            backdropFilter: 'blur('.concat(v, 'px)')
        },
        O = (0, c.Z)(i),
        S = (0, l.Yzy)(
            _,
            {
                keys: (e) => (e ? 'backdrop' : 'empty'),
                config: { duration: i || O ? 0 : 200 },
                from: b,
                enter: y,
                leave: b
            },
            'animate-always'
        );
    if (null == d) {
        let e = { zIndex: 1000 + o };
        return S((t, n) =>
            n
                ? (0, r.jsx)(s.animated.div, {
                      className: u.backdrop,
                      style: f({}, t, e),
                      onClick: m
                  })
                : null
        );
    }
    return (0, r.jsx)(d, {
        children: S((e, t) =>
            t
                ? (0, r.jsx)(s.animated.div, {
                      className: a()(u.backdrop, u.withLayer),
                      style: e,
                      onClick: m
                  })
                : null
        )
    });
});
