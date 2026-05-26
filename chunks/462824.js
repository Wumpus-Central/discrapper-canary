"use strict";
n.d(t, { p: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(873174),
    o = n(866323),
    l = n(150591),
    u = n(377023);
function c(e) {
    let {
        variant: t = "default",
        animationVariant: n = "default",
        onClick: r,
        isVisible: c,
        disabled: d = !1,
        disablePointerEvents: _ = !1,
    } = e;
    return (0, o.p)(
        c,
        {
            keys: (e) => (e ? "scrim" : "empty"),
            config: l.hP,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        },
        "instant" === n ? "animate-never" : "animate-always",
    )((e, n) =>
        n
            ? (0, i.jsx)(a.animated.div, {
                  role: "none",
                  className: s()(u.f5, { [u.Et]: "lightbox" === t, [u.Ge]: "experimental_blur" === t, [u.RS]: _ }),
                  style: e,
                  onClick: d ? void 0 : r,
              })
            : null,
    );
}
