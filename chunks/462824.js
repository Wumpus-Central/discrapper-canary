"use strict";
n.d(t, { p: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(580929),
    l = n(866323),
    o = n(150591),
    d = n(377023);
function c(e) {
    let {
        variant: t = "default",
        animationVariant: n = "default",
        onClick: r,
        isVisible: c,
        disabled: u = !1,
        disablePointerEvents: _ = !1,
    } = e;
    return (0, l.p)(
        c,
        {
            keys: (e) => (e ? "scrim" : "empty"),
            config: o.hP,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        },
        "instant" === n ? "animate-never" : "animate-always",
    )((e, n) =>
        n
            ? (0, i.jsx)(s.animated.div, {
                  role: "none",
                  className: a()(d.f5, { [d.Et]: "lightbox" === t, [d.Ge]: "experimental_blur" === t, [d.RS]: _ }),
                  style: e,
                  onClick: u ? void 0 : r,
              })
            : null,
    );
}
