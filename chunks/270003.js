s.d(l, { n: () => h });
var a = s(477900),
    t = s(582128),
    n = s(503698),
    i = s.n(n),
    r = s(62010),
    c = s(331322),
    d = s(834730),
    u = s(64584),
    o = s(735693);
function h(e) {
    let { children: l, label: s, description: n, badge: h, ...p } = e,
        { spacing: x } = t.useContext(u.c),
        m = t.useId(),
        v = null != n && "" !== n;
    return (0, a.jsxs)("fieldset", {
        ...p,
        className: i()(o.lI, p.className),
        "aria-describedby": v ? m : void 0,
        children: [
            null != s
                ? (0, a.jsxs)(d.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: o.o1,
                      children: [s, null != h && (0, a.jsx)(r.E, { type: h, variant: "primary" })],
                  })
                : null,
            v
                ? (0, a.jsx)(d.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: o.h_,
                      id: m,
                      children: n,
                  })
                : null,
            (0, a.jsx)(c.B, { direction: "vertical", gap: x, children: l }),
        ],
    });
}
