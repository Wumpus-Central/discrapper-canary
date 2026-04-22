t.d(a, { default: () => p });
var l = t(627968),
    n = t(64700),
    o = t(192308),
    r = t(861672),
    u = t(477782),
    d = t(442433),
    s = t(545059),
    i = t(810412),
    c = t(652215);
function p(e) {
    let { groupId: a, onSelect: p } = e,
        b = n.useCallback(() => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await t.e("51080").then(t.bind(t, 297147));
                return (t) => (0, l.jsx)(e, { ...t, groupId: a });
            }),
                (0, d.Z_)();
        }, [a]),
        _ = n.useCallback(() => {
            s.A.deleteGroup(a),
                (0, d.Z_)(),
                (0, i.YX)(c.uss.FRIENDS, { type: i.Z5.GROUP_MANAGED, value: i.IP.REMOVED_FROM_FAVORITES });
        }, [a]);
    return (0, l.jsxs)(r.W, {
        "aria-label": "Group Context Menu",
        navId: "overlay-group-context-menu",
        onClose: d.Z_,
        onSelect: p,
        children: [
            (0, l.jsx)(u.Dr, { id: "edit", label: "Edit Group", action: b }),
            (0, l.jsx)(u.Dr, { id: "delete", label: "Delete Group", action: _, color: "danger" }),
        ],
    });
}
