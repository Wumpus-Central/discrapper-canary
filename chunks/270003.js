l.d(t, { n: () => u });
var s = l(627968),
    a = l(64700),
    n = l(503698),
    c = l.n(n),
    i = l(331322),
    r = l(834730),
    d = l(64584),
    o = l(498990);
function u(e) {
    let { children: t, label: l, description: n, ...u } = e,
        { spacing: h } = a.useContext(d.c),
        x = a.useId(),
        p = null != n && "" !== n;
    return (0, s.jsxs)("fieldset", {
        ...u,
        className: c()(o.lI, u.className),
        "aria-describedby": p ? x : void 0,
        children: [
            null != l
                ? (0, s.jsx)(r.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: o.o1,
                      children: l,
                  })
                : null,
            p
                ? (0, s.jsx)(r.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: o.h_,
                      id: x,
                      children: n,
                  })
                : null,
            (0, s.jsx)(i.B, { direction: "vertical", gap: h, children: t }),
        ],
    });
}
