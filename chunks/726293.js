"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(60809),
    l = n(985018),
    u = n(502573);
function c(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: i } = e,
        c = (e) => {
            n(e), i();
        };
    return (0, r.jsx)("div", {
        className: a()(o.Wx, u.k),
        children: (0, r.jsx)(s.W1t, {
            "data-menu-migrated": !0,
            navId: "command-list-sort",
            "aria-label": l.intl.string(l.t.Ugo9ud),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, r.jsxs)(s.rXV, {
                label: l.intl.string(l.t.yeYaHf),
                children: [
                    (0, r.jsx)(s.iDA, {
                        id: "sort-by-popular",
                        group: "sort-by",
                        label: l.intl.string(l.t.SzxiqK),
                        action: () => c(o.Ug.POPULAR),
                        checked: t === o.Ug.POPULAR,
                    }),
                    (0, r.jsx)(s.iDA, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: l.intl.string(l.t.m8xsti),
                        action: () => c(o.Ug.ALPHABETICAL),
                        checked: t === o.Ug.ALPHABETICAL,
                    }),
                ],
            }),
        }),
    });
}
