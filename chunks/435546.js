n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(397927),
    r = n(735321),
    o = n(34442),
    d = n(985018),
    c = n(61752);
function u(e) {
    let { widget: t } = e,
        n = (0, r.cv)(t.type),
        l = 1 === n,
        u = l ? d.intl.string(d.t["3FdPBT"]) : d.intl.format(d.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: a()(c.k, l && c.X),
        children: [
            l && (0, i.jsx)(o.dE, { widget: t, widgetType: t.type }),
            (0, i.jsx)(s.Text, { variant: "text-xs/normal", color: "text-subtle", children: u }),
        ],
    });
}
