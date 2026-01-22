n.d(t, {
    p: () => f,
    s: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(866323),
    l = n(892491),
    c = n(150591),
    u = n(894198);
function d(e) {
    return e !== l.F.TOP_RADIAL && e !== l.F.SUBTLE && e !== l.F.BLUR;
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
    return (0, o.p)(
        l,
        {
            keys: (e) => (e ? "scrim" : "empty"),
            config: c.hP,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        },
        "instant" === n ? "animate-never" : "animate-always",
    )((e, n) =>
        n
            ? (0, r.jsx)(s.animated.div, {
                  role: "none",
                  className: a()(u.f5, {
                      [u.Et]: "lightbox" === t,
                      [u.RS]: f,
                  }),
                  style: e,
                  onClick: d ? void 0 : i,
              })
            : null,
    );
}
