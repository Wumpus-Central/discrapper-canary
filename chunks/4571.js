e.d(i, {
    default: () => s,
});
var n = e(627968);
e(64700);
var a = e(397927),
    l = e(442433),
    o = e(272613),
    d = e(819638),
    r = e(985018);

function s(t) {
    let { onSelect: i } = t;
    return (0, n.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": r.intl.string(r.t.HpQykc),
        onClose: l.Z_,
        onSelect: i,
        children: [
            (0, n.jsx)(a.Drp, {
                id: "join",
                label: r.intl.string(r.t.yRjK4p),
                action: () =>
                    o.A.openCreateGuildModal({
                        initialSlide: d.oS.JOIN_GUILD,
                        location: "Guild List - ContextMenu",
                    }),
            }),
            (0, n.jsx)(a.Drp, {
                id: "create",
                label: r.intl.string(r.t.B44MTm),
                action: () =>
                    o.A.openCreateGuildModal({
                        location: "Guild List - ContextMenu",
                    }),
            }),
        ],
    });
}
