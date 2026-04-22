r.d(t, { A: () => _, d: () => u });
var n = r(627968);
r(64700);
var s = r(503698),
    l = r.n(s),
    a = r(477782),
    o = r(509434),
    i = r(861672),
    c = r(938191),
    d = r(985018);
function u(e) {
    let { shops: t, onClose: r } = e;
    return t.map((e) =>
        (0, n.jsx)(
            a.Dr,
            {
                id: e.id,
                label: e.label,
                trailingIndicator: { type: "icon", icon: o.I },
                action: () => {
                    e.onSelect(), r();
                },
            },
            e.id,
        ),
    );
}
function _(e) {
    let { shops: t, onClose: r } = e,
        s = (0, c.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: l()({ [c.jP]: s }),
        children: (0, n.jsx)(i.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: l()({ [c.jP]: s }),
            onClose: r,
            "aria-label": d.intl.string(d.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    a.Dr,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: o.I }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
