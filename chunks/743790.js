n.d(t, { $: () => a, K: () => d });
var i = n(627968),
    l = n(834730),
    s = n(573435),
    r = n(260509),
    o = n(601527);
function a(e) {
    let { guild: t, size: n } = e,
        s = (0, r.Iv)(t, n, !1, !0),
        a = (0, r.Rb)(t);
    return null != s
        ? (0, i.jsx)("img", { src: s, alt: t.name, height: n, width: n })
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
    return (0, i.jsx)(s.Ay, {
        className: o.z,
        mask: s.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, i.jsx)(a, { guild: t, size: n }),
    });
}
