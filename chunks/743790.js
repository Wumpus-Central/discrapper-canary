n.d(t, { $: () => _ });
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    l = n(397927),
    s = n(573435),
    o = n(260509),
    d = n(76014);
function _(e) {
    let { guild: t, size: n } = e,
        r = (0, o.Iv)(t, n, !1, !0),
        _ = (0, o.Rb)(t);
    return (0, i.jsx)(s.Ay, {
        className: d.zc,
        mask: s.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children:
            null != r
                ? (0, i.jsx)("img", { src: r, alt: t.name, height: n, width: n })
                : (0, i.jsx)("div", {
                      className: d.FS,
                      children: (0, i.jsx)(l.Text, {
                          className: a()({ [d.ri]: 20 === n }),
                          color: "text-subtle",
                          variant: "text-md/semibold",
                          children: _,
                      }),
                  }),
    });
}
