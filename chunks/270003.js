"use strict";
n.d(t, { n: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(331322),
    l = n(834730),
    u = n(64584),
    c = n(182903);
function d(e) {
    let { children: t, label: n, description: a, ...d } = e,
        { spacing: _ } = i.useContext(u.c),
        f = i.useId(),
        p = null != a && "" !== a;
    return (0, r.jsxs)("fieldset", {
        ...d,
        className: s()(c.lI, d.className),
        "aria-describedby": p ? f : void 0,
        children: [
            null != n
                ? (0, r.jsx)(l.E, {
                      tag: "legend",
                      variant: "text-lg/medium",
                      color: "text-strong",
                      className: c.o1,
                      children: n,
                  })
                : null,
            p
                ? (0, r.jsx)(l.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: c.h_,
                      id: f,
                      children: a,
                  })
                : null,
            (0, r.jsx)(o.B, { direction: "vertical", gap: _, children: t }),
        ],
    });
}
