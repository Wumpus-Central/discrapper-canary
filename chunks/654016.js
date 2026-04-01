n.d(t, { k: () => u });
var i = n(627968),
    a = n(894279),
    l = n(158954),
    s = n(612185),
    r = n(177754),
    o = n(620632),
    c = n(552283),
    d = n(674916);
function u(e) {
    let t,
        { component: n, required: u = !1 } = e,
        { data: m, numberFormat: g, durationFormat: p } = (0, s.Q)();
    if (null == n)
        return u
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(c.A, { variant: "text-sm/medium", width: "8ch" }),
                      (0, i.jsx)(c.A, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let x = (0, o.g)(n.fields.value, m, [o.o.STRING, o.o.NUMBER]),
        f = (0, o.g)(n.fields.label, m, [o.o.STRING]),
        _ = (0, o.g)(n.fields.icon, m, [o.o.UNFURLED_MEDIA]);
    return (0, i.jsxs)("div", {
        children: [
            null ==
            (t = (() => {
                if (null == x) return null;
                if (x.type === o.o.STRING) return x.value;
                if (x.type === o.o.NUMBER) {
                    if (x.presentationType === a.P.NUMBER) return g.format(x.value);
                    if (x.presentationType === a.P.DURATION) return p.format((0, r.p)(x.value));
                }
                return null;
            })())
                ? (0, i.jsx)(c.A, { variant: "text-sm/medium", width: "8ch" })
                : (0, i.jsxs)(l.EYj, {
                      variant: "text-sm/medium",
                      className: d.U,
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
                                          className: d.K,
                                      }),
                                  ],
                              }),
                      ],
                  }),
            null != f
                ? (0, i.jsx)(l.EYj, { variant: "text-xs/normal", color: "text-subtle", children: f.value })
                : (0, i.jsx)(c.A, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
