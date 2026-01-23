n.d(i, {
    default: () => s,
});
var e = n(627968);
n(64700);
var a = n(397927),
    l = n(442433),
    o = n(272613),
    d = n(819638),
    r = n(985018);

function s(t) {
    let { onSelect: i } = t;
    return (0, e.jsxs)(a.W1t, {
        "data-menu-migration-ready": !0,
        navId: "guild-context",
        "aria-label": r.intl.string(r.t.HpQykc),
        onClose: l.Z_,
        onSelect: i,
        children: [
            (0, e.jsx)(a.Drp, {
                id: "join",
                label: r.intl.string(r.t.yRjK4p),
                action: () =>
                    o.A.openCreateGuildModal({
                        initialSlide: d.oS.JOIN_GUILD,
                        location: "Guild List - ContextMenu",
                    }),
            }),
            (0, e.jsx)(a.Drp, {
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
