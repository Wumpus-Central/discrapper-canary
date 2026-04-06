"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(158954),
    s = n(612185),
    a = n(620632),
    o = n(552283),
    l = n(126606);
function u(e) {
    let {
            component: t,
            variant: n,
            color: u,
            required: c = !1,
            className: d,
            lineClamp: _,
            imagePosition: f = "right",
        } = e,
        { resolveFieldValue: p } = (0, s.Q)();
    if (null == t) return c ? (0, r.jsx)(o.A, { variant: n, className: d }) : null;
    let h = p(t.fields.text, [a.o.STRING]),
        m = p(t.fields.label, [a.o.STRING]),
        E = p(t.fields.icon, [a.o.MEDIA]),
        g =
            null != E
                ? (0, r.jsx)("img", {
                      alt: "",
                      src: E.media.url,
                      width: E.media.width,
                      height: E.media.height,
                      className: l.K,
                  })
                : null;
    return (0, r.jsx)(i.BJc, {
        direction: "horizontal",
        gap: 0,
        className: d,
        children:
            null == h && null == m
                ? (0, r.jsx)(o.A, { variant: n })
                : (0, r.jsxs)(i.EYj, {
                      variant: n,
                      color: u,
                      lineClamp: _,
                      children: [
                          null != g && "left" === f ? (0, r.jsxs)(r.Fragment, { children: [g, " "] }) : null,
                          null != m && "" !== m.value && `${m.value}: `,
                          null != h && "" !== h.value ? h.value : "–",
                          null != g && "right" === f ? (0, r.jsxs)(r.Fragment, { children: [" ", g] }) : null,
                      ],
                  }),
    });
}
