n.d(t, {
    Z: () => p,
    f: () => f
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(481060),
    u = n(110924),
    c = n(57239);
let d = 8;
var f = (function (e) {
    return (e.SUBTLE = 'SUBTLE'), (e.DARK = 'DARK'), (e.BLUR = 'BLUR'), (e.IMMERSIVE = 'IMMERSIVE'), e;
})({});
function _() {
    let e = (0, l.dQu)(l.TVs.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0.25 }),
        t = (0, l.dQu)(l.TVs.colors.BG_BACKDROP).spring();
    return {
        SUBTLE: e,
        DARK: t,
        BLUR: t,
        IMMERSIVE: (0, l.dQu)(l.TVs.colors.BG_BACKDROP_IMMERSIVE).spring()
    };
}
let p = r.forwardRef(function (e, t) {
    let { backdropStyle: n = 'SUBTLE', backdropInstant: r = !1, zIndexBoost: a = 0, LayerComponent: f, isVisible: p, onClose: h } = e,
        m = _()[n],
        g = (0, l.dQu)(l.TVs.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0 }),
        E = 'BLUR' === n ? d : 0,
        v = {
            background: g,
            backdropFilter: 'blur(0px)'
        },
        y = {
            background: m,
            backdropFilter: 'blur('.concat(E, 'px)')
        },
        I = (0, u.Z)(r),
        b = (0, l.Yzy)(
            p,
            {
                keys: (e) => (e ? 'backdrop' : 'empty'),
                config: { duration: r || I ? 0 : 300 },
                from: v,
                enter: y,
                leave: v
            },
            'animate-always'
        );
    if (null == f) {
        let e = { zIndex: 1000 + a };
        return b((t, n) =>
            n
                ? (0, i.jsx)(o.animated.div, {
                      className: c.backdrop,
                      style: {
                          ...t,
                          ...e
                      },
                      onClick: h
                  })
                : null
        );
    }
    return (0, i.jsx)(f, {
        children: b((e, t) =>
            t
                ? (0, i.jsx)(o.animated.div, {
                      className: s()(c.backdrop, c.withLayer),
                      style: e,
                      onClick: h
                  })
                : null
        )
    });
});
