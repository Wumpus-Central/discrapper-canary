"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    l = n(331322),
    s = n(834730),
    r = n(612185),
    a = n(620632),
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
        { resolveFieldValue: f } = (0, r.Q)();
    if (null == t) return d ? (0, i.jsx)(o.A, { variant: n, className: h }) : null;
    let g = f(t.fields.text, [a.o.STRING]),
        _ = f(t.fields.label, [a.o.STRING]),
        x = f(t.fields.icon, [a.o.MEDIA]),
        A =
            null != x
                ? (0, i.jsx)("img", {
                      alt: "",
                      src: x.media.url,
                      width: x.media.width,
                      height: x.media.height,
                      className: c.K,
                  })
                : null;
    return (0, i.jsx)(l.B, {
        direction: "horizontal",
        gap: 0,
        className: h,
        children:
            null == g && null == _
                ? (0, i.jsx)(o.A, { variant: n })
                : (0, i.jsxs)(s.E, {
                      variant: n,
                      color: u,
                      lineClamp: m,
                      children: [
                          null != A && "left" === p ? (0, i.jsxs)(i.Fragment, { children: [A, " "] }) : null,
                          null != _ && "" !== _.value && `${_.value}: `,
                          null != g && "" !== g.value ? g.value : "–",
                          null != A && "right" === p ? (0, i.jsxs)(i.Fragment, { children: [" ", A] }) : null,
                      ],
                  }),
    });
}
