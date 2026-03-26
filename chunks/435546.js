n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(735321),
    s = n(34442),
    r = n(985018),
    o = n(313813);
function d(e) {
    let { widget: t } = e,
        n = (0, a.cv)(t.type),
        d = 1 === n,
        c = d ? r.intl.string(r.t["3FdPBT"]) : r.intl.format(r.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: d ? o.O : o.k,
        children: [
            d && (0, i.jsx)(s.dE, { widget: t, widgetType: t.type }),
            (0, i.jsx)(l.Text, { variant: "text-xs/normal", color: "text-subtle", children: c }),
        ],
    });
}
