n.d(t, { $: () => d });
var i = n(627968),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(573435),
    o = n(260509),
    c = n(369752);
function d(e) {
    let { guild: t, size: n } = e,
        s = (0, o.Iv)(t, n, !1, !0),
        d = (0, o.Rb)(t);
    return (0, i.jsx)(l.Ay, {
        className: c.zc,
        mask: l.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children:
            null != s
                ? (0, i.jsx)("img", { src: s, alt: t.name, height: n, width: n })
                : (0, i.jsx)("div", {
                      className: c.FS,
                      children: (0, i.jsx)(a.Text, {
                          className: r()({ [c.ri]: 20 === n }),
                          color: "text-subtle",
                          variant: "text-md/semibold",
                          children: d,
                      }),
                  }),
    });
}
