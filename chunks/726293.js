n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(861672),
    r = n(477782),
    o = n(60809),
    c = n(985018),
    d = n(436806);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: i } = e,
        u = (e) => {
            n(e), i();
        };
    return (0, l.jsx)("div", {
        className: a()(o.Wx, d.k),
        children: (0, l.jsx)(s.W, {
            "data-menu-migrated": !0,
            navId: "command-list-sort",
            "aria-label": c.intl.string(c.t.Ugo9ud),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, l.jsxs)(r.rX, {
                label: c.intl.string(c.t.yeYaHf),
                children: [
                    (0, l.jsx)(r.iD, {
                        id: "sort-by-popular",
                        group: "sort-by",
                        label: c.intl.string(c.t.SzxiqK),
                        action: () => u(o.Ug.POPULAR),
                        checked: t === o.Ug.POPULAR,
                    }),
                    (0, l.jsx)(r.iD, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: c.intl.string(c.t.m8xsti),
                        action: () => u(o.Ug.ALPHABETICAL),
                        checked: t === o.Ug.ALPHABETICAL,
                    }),
                ],
            }),
        }),
    });
}
