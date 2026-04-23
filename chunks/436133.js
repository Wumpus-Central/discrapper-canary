n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(834730),
    r = n(769015),
    o = n(999436);
function d(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, i.jsx)("div", {
                className: s()(o.kL, t, l && o.F4),
                children: (0, i.jsx)(r.A, { game: n[0].application, className: o.wK }),
            });
        let e = n.length - 1;
        return (0, i.jsxs)("div", {
            className: s()(o.kL, t, l && o.F4),
            children: [
                (0, i.jsx)(r.A, { game: n[0].application, className: o.wK }),
                2 === n.length
                    ? (0, i.jsx)(r.A, { game: n[1].application, className: o.wK })
                    : (0, i.jsx)(a.E, {
                          className: o.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
