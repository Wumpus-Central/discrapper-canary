a.d(t, { n: () => p });
var l = a(477900),
    s = a(582128),
    n = a(503698),
    i = a.n(n),
    r = a(62010),
    c = a(331322),
    d = a(834730),
    u = a(64584),
    o = a(735693);
function p(e) {
    let { children: t, label: a, description: n, badge: p, ...x } = e,
        { spacing: h } = s.useContext(u.c),
        m = s.useId(),
        g = null != n && "" !== n;
    return (0, l.jsxs)("fieldset", {
        ...x,
        className: i()(o.lI, x.className),
        "aria-describedby": g ? m : void 0,
        children: [
            null != a
                ? (0, l.jsxs)(d.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: o.o1,
                      children: [a, null != p && (0, l.jsx)(r.E, { type: p, variant: "primary" })],
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
            (0, l.jsx)(c.B, { direction: "vertical", gap: h, children: t }),
        ],
    });
}
