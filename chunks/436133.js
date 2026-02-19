"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(769015),
    o = n(129353);
function c(e) {
    let { className: t, embeddedApps: n, muted: s } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, i.jsx)("div", {
                className: l()(o.kL, t, s && o.F4),
                children: (0, i.jsx)(a.A, { game: n[0].application, className: o.wK }),
            });
        let e = n.length - 1;
        return (0, i.jsxs)("div", {
            className: l()(o.kL, t, s && o.F4),
            children: [
                (0, i.jsx)(a.A, { game: n[0].application, className: o.wK }),
                2 === n.length
                    ? (0, i.jsx)(a.A, { game: n[1].application, className: o.wK })
                    : (0, i.jsx)(r.Text, {
                          className: o.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
