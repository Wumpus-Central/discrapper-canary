"use strict";
n.d(t, { k: () => d });
var r = n(627968),
    i = n(894279),
    s = n(158954),
    a = n(612185),
    o = n(177754),
    l = n(620632),
    u = n(552283),
    c = n(759169);
function d(e) {
    let { component: t, required: n = !1 } = e,
        { resolveFieldValue: d, numberFormat: _, durationFormat: f } = (0, a.Q)();
    if (null == t)
        return n
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(u.A, { variant: "text-sm/medium", width: "8ch" }),
                      (0, r.jsx)(u.A, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let p = d(t.fields.value, [l.o.STRING, l.o.NUMBER]),
        h = d(t.fields.label, [l.o.STRING]),
        m = d(t.fields.icon, [l.o.MEDIA]),
        E = () => {
            if (null == p) return null;
            if (p.type === l.o.STRING) return p.value;
            if (p.type === l.o.NUMBER) {
                if (p.presentationType === i.P.NUMBER) return _.format(p.value);
                if (p.presentationType === i.P.DURATION) return f.format((0, o.p)(p.value));
            }
            return null;
        },
        g = () => {
            let e = E();
            return null == e
                ? (0, r.jsx)(u.A, { variant: "text-sm/medium", width: "8ch" })
                : (0, r.jsxs)(s.EYj, {
                      variant: "text-sm/medium",
                      className: c.U,
                      children: [
                          e,
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
                  });
        };
    return (0, r.jsxs)("div", {
        children: [
            g(),
            null != h
                ? (0, r.jsx)(s.EYj, { variant: "text-xs/normal", color: "text-subtle", children: h.value })
                : (0, r.jsx)(u.A, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
