n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(769015),
    o = n(129353);
function c(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: i()(o.kL, t, l && o.F4),
                children: (0, r.jsx)(s.A, {
                    game: n[0].application,
                    className: o.wK,
                }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: i()(o.kL, t, l && o.F4),
            children: [
                (0, r.jsx)(s.A, {
                    game: n[0].application,
                    className: o.wK,
                }),
                2 === n.length
                    ? (0, r.jsx)(s.A, {
                          game: n[1].application,
                          className: o.wK,
                      })
                    : (0, r.jsx)(a.Text, {
                          className: o.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: "+".concat(e),
                      }),
            ],
        });
    }
}
