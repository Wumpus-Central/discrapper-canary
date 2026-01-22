n.d(t, { $: () => u });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(573435),
    l = n(260509),
    c = n(369752);
function u(e) {
    let { guild: t, size: n } = e,
        i = (0, l.Iv)(t, n, !1, !0),
        u = (0, l.Rb)(t);
    return (0, r.jsx)(o.Ay, {
        className: c.zc,
        mask: o.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children:
            null != i
                ? (0, r.jsx)("img", {
                      src: i,
                      alt: t.name,
                      height: n,
                      width: n,
                  })
                : (0, r.jsx)("div", {
                      className: c.FS,
                      children: (0, r.jsx)(s.Text, {
                          className: a()({ [c.ri]: 20 === n }),
                          color: "text-subtle",
                          variant: "text-md/semibold",
                          children: u,
                      }),
                  }),
    });
}
