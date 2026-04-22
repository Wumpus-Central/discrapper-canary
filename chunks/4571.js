e.d(i, { default: () => c });
var n = e(627968);
e(64700);
var a = e(861672),
    l = e(477782),
    o = e(442433),
    d = e(272613),
    r = e(819638),
    s = e(985018);
function c(t) {
    let { onSelect: i } = t;
    return (0, n.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": s.intl.string(s.t.HpQykc),
        onClose: o.Z_,
        onSelect: i,
        children: [
            (0, n.jsx)(l.Dr, {
                id: "join",
                label: s.intl.string(s.t.yRjK4p),
                action: () =>
                    d.A.openCreateGuildModal({ initialSlide: r.oS.JOIN_GUILD, location: "Guild List - ContextMenu" }),
            }),
            (0, n.jsx)(l.Dr, {
                id: "create",
                label: s.intl.string(s.t.B44MTm),
                action: () => d.A.openCreateGuildModal({ location: "Guild List - ContextMenu" }),
            }),
        ],
    });
}
