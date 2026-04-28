"use strict";
n.d(t, { A: () => u });
var l = n(627968),
    i = n(331322),
    s = n(834730),
    a = n(612185),
    r = n(272852),
    o = n(552283),
    c = n(701054);
function u(e) {
    let {
            component: t,
            variant: n,
            color: u,
            required: d = !1,
            className: h,
            lineClamp: m,
            imagePosition: p = "right",
        } = e,
        { resolveFieldValue: f } = (0, a.Q)();
    if (null == t) return d ? (0, l.jsx)(o.A, { variant: n, className: h }) : null;
    let g = f(t.fields.text, [r.o.STRING]),
        _ = f(t.fields.label, [r.o.STRING]),
        x = f(t.fields.icon, [r.o.MEDIA]),
        C =
            null != x
                ? (0, l.jsx)("img", {
                      alt: "",
                      src: x.media.url,
                      width: x.media.width,
                      height: x.media.height,
                      className: c.K,
                  })
                : null;
    return (0, l.jsx)(i.B, {
        direction: "horizontal",
        gap: 0,
        className: h,
        children:
            null == g && null == _
                ? (0, l.jsx)(o.A, { variant: n })
                : (0, l.jsxs)(s.E, {
                      variant: n,
                      color: u,
                      lineClamp: m,
                      children: [
                          null != C && "left" === p ? (0, l.jsxs)(l.Fragment, { children: [C, " "] }) : null,
                          null != _ && "" !== _.value && `${_.value}: `,
                          null != g && "" !== g.value ? g.value : "–",
                          null != C && "right" === p ? (0, l.jsxs)(l.Fragment, { children: [" ", C] }) : null,
                      ],
                  }),
    });
}
