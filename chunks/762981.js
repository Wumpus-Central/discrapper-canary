n.d(t, {
    O: () => h,
    Z: () => g
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(695469),
    l = n(558452),
    c = n(770278),
    u = n(724723),
    d = n(257465),
    f = n(574697);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e) {
    return e !== c.f.TOP_RADIAL && e !== c.f.SUBTLE && e !== c.f.BLUR;
}
function m(e) {
    let { variant: t = 'default', animationVariant: n = 'default', onClick: i, isVisible: a, disabled: c = !1, disablePointerEvents: u = !1 } = e;
    return (0, l.Y)(
        a,
        {
            keys: (e) => (e ? 'scrim' : 'empty'),
            config: { duration: d.aU },
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 }
        },
        'instant' === n ? 'animate-never' : 'animate-always'
    )((e, n) =>
        n
            ? (0, r.jsx)(s.animated.div, {
                  role: 'none',
                  className: o()(f.scrim, {
                      [f.lightbox]: 'lightbox' === t,
                      [f.pointerEventsNone]: u
                  }),
                  style: e,
                  onClick: c ? void 0 : i
              })
            : null
    );
}
let g = i.forwardRef(function (e) {
    return (0, u.q)('Scrim')
        ? (0, r.jsx)(m, p({}, e))
        : (0, r.jsx)(c.Z, {
              backdropStyle: 'lightbox' === e.variant ? c.f.LIGHTBOX : c.f.DARK,
              onClose: e.onClick,
              isVisible: e.isVisible,
              backdropInstant: 'instant' === e.animationVariant
          });
});
