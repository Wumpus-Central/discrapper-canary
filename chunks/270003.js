a.d(t, { n: () => x });
var l = a(627968),
    s = a(64700),
    n = a(503698),
    c = a.n(n),
    i = a(508770),
    r = a(331322),
    d = a(834730),
    u = a(64584),
    o = a(498990);
function x(e) {
    let { children: t, label: a, description: n, badge: x, ...h } = e,
        { spacing: p } = s.useContext(u.c),
        m = s.useId(),
        g = null != n && "" !== n;
    return (0, l.jsxs)("fieldset", {
        ...h,
        className: c()(o.lI, h.className),
        "aria-describedby": g ? m : void 0,
        children: [
            null != a
                ? (0, l.jsxs)(d.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: o.o1,
                      children: [a, null != x && (0, l.jsx)(i.E, { type: x, variant: "brand" })],
                  })
                : null,
            g
                ? (0, l.jsx)(d.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: o.h_,
                      id: m,
                      children: n,
                  })
                : null,
            (0, l.jsx)(r.B, { direction: "vertical", gap: p, children: t }),
        ],
    });
}
