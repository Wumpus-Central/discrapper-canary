n.d(t, {
    O: () => d,
    Z: () => f,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(488290),
    s = n(558452),
    l = n(481060),
    c = n(985316),
    u = n(721457);
function d(e) {
    return e !== l.fCB.TOP_RADIAL && e !== l.fCB.SUBTLE && e !== l.fCB.BLUR;
}
function f(e) {
    let {
        variant: t = "default",
        animationVariant: n = "default",
        onClick: i,
        isVisible: l,
        disabled: d = !1,
        disablePointerEvents: f = !1,
    } = e;
    return (0, s.Y)(
        l,
        {
            keys: (e) => (e ? "scrim" : "empty"),
            config: c.Px,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        },
        "instant" === n ? "animate-never" : "animate-always",
    )((e, n) =>
        n
            ? (0, r.jsx)(o.animated.div, {
                  role: "none",
                  className: a()(u.scrim, {
                      [u.lightbox]: "lightbox" === t,
                      [u.pointerEventsNone]: f,
                  }),
                  style: e,
                  onClick: d ? void 0 : i,
              })
            : null,
    );
}
