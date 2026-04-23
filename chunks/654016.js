"use strict";
n.d(t, { k: () => d });
var r = n(627968),
    i = n(894279),
    s = n(834730),
    a = n(612185),
    o = n(177754),
    l = n(620632),
    u = n(552283),
    c = n(702769);
function d(e) {
    let t,
        { component: n, required: d = !1 } = e,
        { resolveFieldValue: _, numberFormat: f, durationFormat: p } = (0, a.Q)();
    if (null == n)
        return d
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(u.A, { variant: "text-sm/medium", width: "8ch" }),
                      (0, r.jsx)(u.A, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let h = _(n.fields.value, [l.o.STRING, l.o.NUMBER]),
        E = _(n.fields.label, [l.o.STRING]),
        m = _(n.fields.icon, [l.o.MEDIA]);
    return (0, r.jsxs)("div", {
        children: [
            null ==
            (t = (() => {
                if (null == h) return null;
                if (h.type === l.o.STRING) return h.value;
                if (h.type === l.o.NUMBER) {
                    if (h.presentationType === i.P.NUMBER) return f.format(h.value);
                    if (h.presentationType === i.P.DURATION) return p.format((0, o.p)(h.value));
                }
                return null;
            })())
                ? (0, r.jsx)(u.A, { variant: "text-sm/medium", width: "8ch" })
                : (0, r.jsxs)(s.E, {
                      variant: "text-sm/medium",
                      className: c.U,
                      children: [
                          t,
                          null != m &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      " ",
                                      (0, r.jsx)("img", {
                                          alt: "",
                                          src: m.media.url,
                                          width: 18,
                                          height: 18,
                                          className: c.K,
                                      }),
                                  ],
                              }),
                      ],
                  }),
            null != E
                ? (0, r.jsx)(s.E, { variant: "text-xs/normal", color: "text-subtle", children: E.value })
                : (0, r.jsx)(u.A, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
