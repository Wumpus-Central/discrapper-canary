n.d(t, {
    A: () => c,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(886217),
    s = n(985018),
    o = n(104574);

function c(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: c, controls: u } = e,
        d = (0, a._B)(),
        p = 0 === n.length || n.length === d.length,
        f = i.useMemo(() => (p ? "all" : 1 === n.length ? n[0] : "all"), [n, p]);
    return (0, r.jsxs)("div", {
        className: o.kL,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: s.intl.string(s.t.BDUDau),
            }),
            (0, r.jsx)("div", {
                className: o.pf,
                children: u,
            }),
            (0, r.jsxs)(l.VQ0, {
                type: "top",
                look: "brand",
                selectedItem: f,
                onItemSelect: (e) => {
                    null == c || c(e);
                },
                children: [
                    (0, r.jsx)(l.VQ0.Item, {
                        id: "all",
                        children: s.intl.string(s.t.Y9DnPa),
                    }),
                    d.map((e) =>
                        (0, r.jsx)(
                            l.VQ0.Item,
                            {
                                id: e.value,
                                children: e.label,
                            },
                            e.value,
                        ),
                    ),
                ],
            }),
            (0, r.jsx)("div", {
                className: o.tZ,
                children: (0, r.jsx)("div", {
                    className: o.Qs,
                    children: t,
                }),
            }),
        ],
    });
}
