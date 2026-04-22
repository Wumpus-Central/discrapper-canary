n.d(t, { $: () => a, K: () => d });
var i = n(627968),
    l = n(834730),
    r = n(573435),
    s = n(260509),
    o = n(601527);
function a(e) {
    let { guild: t, size: n } = e,
        r = (0, s.Iv)(t, n, !1, !0),
        a = (0, s.Rb)(t);
    return null != r
        ? (0, i.jsx)("img", { src: r, alt: t.name, height: n, width: n })
        : (0, i.jsx)("div", {
              className: o.F,
              children: (0, i.jsx)(l.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: a,
              }),
          });
}
function d(e) {
    let { guild: t, size: n } = e;
    return (0, i.jsx)(r.Ay, {
        className: o.z,
        mask: r.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, i.jsx)(a, { guild: t, size: n }),
    });
}
