n.d(t, {
    O: () => p,
    Z: () => m,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(558452),
    c = n(481060),
    u = n(985316),
    d = n(336088);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    return e !== c.fCB.TOP_RADIAL && e !== c.fCB.SUBTLE && e !== c.fCB.BLUR;
}
function h(e) {
    let {
        variant: t = "default",
        animationVariant: n = "default",
        onClick: i,
        isVisible: a,
        disabled: c = !1,
        disablePointerEvents: f = !1,
    } = e;
    return (0, l.Y)(
        a,
        {
            keys: (e) => (e ? "scrim" : "empty"),
            config: u.Px,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        },
        "instant" === n ? "animate-never" : "animate-always",
    )((e, n) =>
        n
            ? (0, r.jsx)(s.animated.div, {
                  role: "none",
                  className: o()(d.scrim, {
                      [d.lightbox]: "lightbox" === t,
                      [d.pointerEventsNone]: f,
                  }),
                  style: e,
                  onClick: c ? void 0 : i,
              })
            : null,
    );
}
let m = i.forwardRef(function (e) {
    return (0, r.jsx)(h, _({}, e));
});
