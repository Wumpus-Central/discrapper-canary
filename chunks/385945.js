n.d(t, { A: () => c });
var i = n(627968),
    a = n(158954),
    l = n(612185),
    s = n(620632),
    r = n(552283),
    o = n(694199);
function c(e) {
    let {
            component: t,
            variant: n,
            color: c,
            required: d = !1,
            className: u,
            lineClamp: m,
            imagePosition: g = "right",
        } = e,
        { data: p } = (0, l.Q)();
    if (null == t) return d ? (0, i.jsx)(r.A, { variant: n, className: u }) : null;
    let x = (0, s.g)(t.fields.text, p, [s.o.STRING]),
        f = (0, s.g)(t.fields.label, p, [s.o.STRING]),
        _ = (0, s.g)(t.fields.icon, p, [s.o.UNFURLED_MEDIA]),
        h =
            null != _
                ? (0, i.jsx)("img", {
                      alt: "",
                      src: _.media.url,
                      width: _.media.width,
                      height: _.media.height,
                      className: o.K,
                  })
                : null;
    return (0, i.jsx)(a.BJc, {
        direction: "horizontal",
        gap: 0,
        className: u,
        children:
            null == x && null == f
                ? (0, i.jsx)(r.A, { variant: n })
                : (0, i.jsxs)(a.EYj, {
                      variant: n,
                      color: c,
                      lineClamp: m,
                      children: [
                          null != h && "left" === g ? (0, i.jsxs)(i.Fragment, { children: [h, " "] }) : null,
                          null != f && "" !== f.value && `${f.value}: `,
                          null != x && "" !== x.value ? x.value : "–",
                          null != h && "right" === g ? (0, i.jsxs)(i.Fragment, { children: [" ", h] }) : null,
                      ],
                  }),
    });
}
