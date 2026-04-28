n.d(t, { n: () => u });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(331322),
    o = n(834730),
    d = n(64584),
    c = n(498990);
function u(e) {
    let { children: t, label: n, description: a, ...u } = e,
        { spacing: h } = l.useContext(d.c),
        _ = l.useId(),
        m = null != a && "" !== a;
    return (0, i.jsxs)("fieldset", {
        ...u,
        className: s()(c.lI, u.className),
        "aria-describedby": m ? _ : void 0,
        children: [
            null != n
                ? (0, i.jsx)(o.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: c.o1,
                      children: n,
                  })
                : null,
            m
                ? (0, i.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: c.h_,
                      id: _,
                      children: a,
                  })
                : null,
            (0, i.jsx)(r.B, { direction: "vertical", gap: h, children: t }),
        ],
    });
}
