"use strict";
n.d(t, { p: () => _, s: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(356197),
    o = n(866323),
    l = n(892491),
    u = n(150591),
    d = n(75967);
function c(e) {
    return e !== l.F.TOP_RADIAL && e !== l.F.SUBTLE && e !== l.F.BLUR;
}
function _(e) {
    let {
        variant: t = "default",
        animationVariant: n = "default",
        onClick: i,
        isVisible: l,
        disabled: c = !1,
        disablePointerEvents: _ = !1,
    } = e;
    return (0, o.p)(
        l,
        {
            keys: (e) => (e ? "scrim" : "empty"),
            config: u.hP,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        },
        "instant" === n ? "animate-never" : "animate-always",
    )((e, n) =>
        n
            ? (0, r.jsx)(a.animated.div, {
                  role: "none",
                  className: s()(d.f5, { [d.Et]: "lightbox" === t, [d.RS]: _ }),
                  style: e,
                  onClick: c ? void 0 : i,
              })
            : null,
    );
}
