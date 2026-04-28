"use strict";
n.d(t, { n: () => u });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(331322),
    o = n(834730),
    c = n(64584),
    d = n(498990);
function u(e) {
    let { children: t, label: n, description: i, ...u } = e,
        { spacing: _ } = a.useContext(c.c),
        p = a.useId(),
        f = null != i && "" !== i;
    return (0, r.jsxs)("fieldset", {
        ...u,
        className: l()(d.lI, u.className),
        "aria-describedby": f ? p : void 0,
        children: [
            null != n
                ? (0, r.jsx)(o.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: d.o1,
                      children: n,
                  })
                : null,
            f
                ? (0, r.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: d.h_,
                      id: p,
                      children: i,
                  })
                : null,
            (0, r.jsx)(s.B, { direction: "vertical", gap: _, children: t }),
        ],
    });
}
