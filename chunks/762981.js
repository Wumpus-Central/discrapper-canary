n.d(t, {
    O: () => d,
    Z: () => f,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(137317),
    s = n(793030),
    l = n(558452),
    c = n(481060),
    u = n(336088);
function d(e) {
    return e !== c.fCB.TOP_RADIAL && e !== c.fCB.SUBTLE && e !== c.fCB.BLUR;
}
function f(e) {
    let {
        variant: t = "default",
        animationVariant: n = "default",
        onClick: i,
        isVisible: c,
        disabled: d = !1,
        disablePointerEvents: f = !1,
    } = e;
    return (0, l.Y)(
        c,
        {
            keys: (e) => (e ? "scrim" : "empty"),
            config: s.Pxu,
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
