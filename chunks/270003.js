"use strict";
r.d(t, { n: () => u });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(331322),
    o = r(834730),
    c = r(64584),
    d = r(498990);
function u(e) {
    let { children: t, label: r, description: a, ...u } = e,
        { spacing: _ } = i.useContext(c.c),
        p = i.useId(),
        f = null != a && "" !== a;
    return (0, n.jsxs)("fieldset", {
        ...u,
        className: s()(d.lI, u.className),
        "aria-describedby": f ? p : void 0,
        children: [
            null != r
                ? (0, n.jsx)(o.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: d.o1,
                      children: r,
                  })
                : null,
            f
                ? (0, n.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: d.h_,
                      id: p,
                      children: a,
                  })
                : null,
            (0, n.jsx)(l.B, { direction: "vertical", gap: _, children: t }),
        ],
    });
}
