n.d(t, { $: () => o });
var i = n(627968),
    r = n(397927),
    a = n(573435),
    s = n(260509),
    l = n(369752);
function o(e) {
    let { guild: t, size: n } = e,
        o = (0, s.Iv)(t, n, !1, !0),
        d = (0, s.Rb)(t);
    return (0, i.jsx)(a.Ay, {
        className: l.z,
        mask: a.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children:
            null != o
                ? (0, i.jsx)("img", { src: o, alt: t.name, height: n, width: n })
                : (0, i.jsx)("div", {
                      className: l.F,
                      children: (0, i.jsx)(r.Text, {
                          color: "text-subtle",
                          variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                          children: d,
                      }),
                  }),
    });
}
