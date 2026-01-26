e.d(a, {
    default: () => u,
});
var r = e(627968);
e(64700);
var i = e(397927),
    n = e(442433),
    l = e(684013),
    s = e(9302);
e(644434);
var o = e(985018);

function u(t) {
    let { onSelect: a, layoutId: e = s.OVERLAY_LAYOUT_ID, version: u } = t;
    return (0, r.jsx)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "overlay",
        onClose: n.Z_,
        "aria-label": o.intl.string(o.t.tPfVWi),
        onSelect: a,
        children: (0, r.jsx)(i.Drp, {
            id: "reset",
            label: o.intl.string(o.t["hW+EMu"]),
            action: (t) => {
                t.stopPropagation(), l.A.resetDefaultLayout(e, null != u ? u : 3);
            },
        }),
    });
}
