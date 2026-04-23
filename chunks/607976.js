s.d(t, { A: () => u });
var n = s(627968),
    l = s(64700),
    a = s(534514),
    r = s(761508),
    i = s(886217),
    o = s(985018),
    c = s(497275);
function u(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: u, controls: d } = e,
        _ = (0, i._B)(),
        m = 0 === s.length || s.length === _.length,
        h = l.useMemo(() => (m ? "all" : 1 === s.length ? s[0] : "all"), [s, m]);
    return (0, n.jsxs)("div", {
        className: c.kL,
        children: [
            (0, n.jsx)(a.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: o.intl.string(o.t.BDUDau),
            }),
            (0, n.jsx)("div", { className: c.pf, children: d }),
            (0, n.jsxs)(r.V, {
                type: "top",
                look: "brand",
                selectedItem: h,
                onItemSelect: (e) => {
                    u?.(e);
                },
                children: [
                    (0, n.jsx)(r.V.Item, { id: "all", children: o.intl.string(o.t.Y9DnPa) }),
                    _.map((e) => (0, n.jsx)(r.V.Item, { id: e.value, children: e.label }, e.value)),
                ],
            }),
            (0, n.jsx)("div", { className: c.tZ, children: (0, n.jsx)("div", { className: c.Qs, children: t }) }),
        ],
    });
}
