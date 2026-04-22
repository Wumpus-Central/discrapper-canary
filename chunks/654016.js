"use strict";
n.d(t, { k: () => d });
var i = n(627968),
    l = n(894279),
    s = n(834730),
    r = n(612185),
    a = n(177754),
    o = n(620632),
    c = n(552283),
    u = n(702769);
function d(e) {
    let t,
        { component: n, required: d = !1 } = e,
        { resolveFieldValue: h, numberFormat: m, durationFormat: p } = (0, r.Q)();
    if (null == n)
        return d
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(c.A, { variant: "text-sm/medium", width: "8ch" }),
                      (0, i.jsx)(c.A, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let f = h(n.fields.value, [o.o.STRING, o.o.NUMBER]),
        g = h(n.fields.label, [o.o.STRING]),
        _ = h(n.fields.icon, [o.o.MEDIA]);
    return (0, i.jsxs)("div", {
        children: [
            null ==
            (t = (() => {
                if (null == f) return null;
                if (f.type === o.o.STRING) return f.value;
                if (f.type === o.o.NUMBER) {
                    if (f.presentationType === l.P.NUMBER) return m.format(f.value);
                    if (f.presentationType === l.P.DURATION) return p.format((0, a.p)(f.value));
                }
                return null;
            })())
                ? (0, i.jsx)(c.A, { variant: "text-sm/medium", width: "8ch" })
                : (0, i.jsxs)(s.E, {
                      variant: "text-sm/medium",
                      className: u.U,
                      children: [
                          t,
                          null != _ &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      " ",
                                      (0, i.jsx)("img", {
                                          alt: "",
                                          src: _.media.url,
                                          width: 18,
                                          height: 18,
                                          className: u.K,
                                      }),
                                  ],
                              }),
                      ],
                  }),
            null != g
                ? (0, i.jsx)(s.E, { variant: "text-xs/normal", color: "text-subtle", children: g.value })
                : (0, i.jsx)(c.A, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
