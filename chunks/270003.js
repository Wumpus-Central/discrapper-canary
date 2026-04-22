a.d(l, { n: () => c });
var t = a(627968),
    n = a(64700),
    o = a(503698),
    i = a.n(o),
    r = a(331322),
    s = a(834730),
    d = a(64584),
    u = a(498990);
function c(e) {
    let { children: l, label: a, description: o, ...c } = e,
        { spacing: b } = n.useContext(d.c),
        p = n.useId(),
        m = null != o && "" !== o;
    return (0, t.jsxs)("fieldset", {
        ...c,
        className: i()(u.lI, c.className),
        "aria-describedby": m ? p : void 0,
        children: [
            null != a
                ? (0, t.jsx)(s.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: u.o1,
                      children: a,
                  })
                : null,
            m
                ? (0, t.jsx)(s.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: u.h_,
                      id: p,
                      children: o,
                  })
                : null,
            (0, t.jsx)(r.B, { direction: "vertical", gap: b, children: l }),
        ],
    });
}
