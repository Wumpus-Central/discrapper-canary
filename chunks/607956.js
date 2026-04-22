t.d(a, { default: () => s });
var l = t(627968),
    n = t(64700),
    d = t(192308),
    r = t(861672),
    o = t(477782),
    u = t(442433),
    i = t(545059);
function s(e) {
    let { groupId: a, onSelect: s } = e,
        c = n.useCallback(() => {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await t.e("51080").then(t.bind(t, 297147));
                return (t) => (0, l.jsx)(e, { ...t, groupId: a });
            }),
                (0, u.Z_)();
        }, [a]),
        p = n.useCallback(() => {
            i.A.deleteGroup(a), (0, u.Z_)();
        }, [a]);
    return (0, l.jsxs)(r.W, {
        "data-menu-migrated": !0,
        "aria-label": "Group Context Menu",
        navId: "group-context-menu",
        onClose: u.Z_,
        onSelect: s,
        children: [
            (0, l.jsx)(o.Dr, { id: "edit", label: "Edit Group", action: c }),
            (0, l.jsx)(o.Dr, { id: "delete", label: "Delete Group", action: p, color: "danger" }),
        ],
    });
}
