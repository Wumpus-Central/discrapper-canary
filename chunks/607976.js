n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(886217),
    s = n(985018),
    o = n(104574);
function d(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: d, controls: c } = e,
        u = (0, l._B)(),
        A = 0 === n.length || n.length === u.length,
        h = r.useMemo(() => (A ? "all" : 1 === n.length ? n[0] : "all"), [n, A]);
    return (0, i.jsxs)("div", {
        className: o.kL,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: s.intl.string(s.t.BDUDau),
            }),
            (0, i.jsx)("div", { className: o.pf, children: c }),
            (0, i.jsxs)(a.VQ0, {
                type: "top",
                look: "brand",
                selectedItem: h,
                onItemSelect: (e) => {
                    d?.(e);
                },
                children: [
                    (0, i.jsx)(a.VQ0.Item, { id: "all", children: s.intl.string(s.t.Y9DnPa) }),
                    u.map((e) => (0, i.jsx)(a.VQ0.Item, { id: e.value, children: e.label }, e.value)),
                ],
            }),
            (0, i.jsx)("div", { className: o.tZ, children: (0, i.jsx)("div", { className: o.Qs, children: t }) }),
        ],
    });
}
