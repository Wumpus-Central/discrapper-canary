i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var l = i(834730),
    s = i(735321),
    a = i(34442),
    r = i(985018),
    d = i(300517);
function o(e) {
    let { widget: t } = e,
        i = (0, s.cv)(t.type),
        o = 1 === i,
        c = o ? r.intl.string(r.t["3FdPBT"]) : r.intl.format(r.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: o ? d.O : d.k,
        children: [
            o && (0, n.jsx)(a.dE, { widget: t, widgetType: t.type }),
            (0, n.jsx)(l.E, { variant: "text-xs/normal", color: "text-subtle", children: c }),
        ],
    });
}
