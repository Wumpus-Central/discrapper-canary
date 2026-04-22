e.d(a, { default: () => d });
var r = e(627968);
e(64700);
var i = e(861672),
    n = e(477782),
    s = e(442433),
    l = e(684013),
    o = e(9302);
e(644434);
var u = e(985018);
function d(t) {
    let { onSelect: a, layoutId: e = o.OVERLAY_LAYOUT_ID, version: d } = t;
    return (0, r.jsx)(i.W, {
        "data-menu-migrated-auto": !0,
        navId: "overlay",
        onClose: s.Z_,
        "aria-label": u.intl.string(u.t.tPfVWi),
        onSelect: a,
        children: (0, r.jsx)(n.Dr, {
            id: "reset",
            label: u.intl.string(u.t["hW+EMu"]),
            action: (t) => {
                t.stopPropagation(), l.A.resetDefaultLayout(e, d ?? 0);
            },
        }),
    });
}
