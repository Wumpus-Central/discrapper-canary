a.d(t, { default: () => o });
var l = a(627968),
    n = a(64700),
    r = a(397927),
    d = a(442433),
    u = a(545059);
function o(e) {
    let { groupId: t, onSelect: o } = e,
        i = n.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: e } = await a.e("51080").then(a.bind(a, 519528));
                return (a) => (0, l.jsx)(e, { ...a, groupId: t });
            }),
                (0, d.Z_)();
        }, [t]),
        s = n.useCallback(() => {
            u.A.deleteGroup(t), (0, d.Z_)();
        }, [t]);
    return (0, l.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        "aria-label": "Group Context Menu",
        navId: "group-context-menu",
        onClose: d.Z_,
        onSelect: o,
        children: [
            (0, l.jsx)(r.Drp, { id: "edit", label: "Edit Group", action: i }),
            (0, l.jsx)(r.Drp, { id: "delete", label: "Delete Group", action: s, color: "danger" }),
        ],
    });
}
