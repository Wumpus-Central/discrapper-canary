n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(735321),
    o = n(34442),
    c = n(985018),
    u = n(61752);
function d(e) {
    let { widget: t } = e,
        n = (0, s.cv)(t.type),
        l = 1 === n,
        d = l ? c.intl.string(c.t["3FdPBT"]) : c.intl.format(c.t.W8K2GH, { maxGames: n });
    return (0, r.jsxs)("div", {
        className: i()(u.k, l && u.X),
        children: [
            l &&
                (0, r.jsx)(o.dE, {
                    widget: t,
                    widgetType: t.type,
                }),
            (0, r.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: d,
            }),
        ],
    });
}
