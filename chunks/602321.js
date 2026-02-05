a.d(t, { default: () => i });
var l = a(627968),
    r = a(64700),
    u = a(397927),
    n = a(442433),
    o = a(545059),
    d = a(810412),
    s = a(652215);
function i(e) {
    let { groupId: t, onSelect: i } = e,
        p = r.useCallback(() => {
            (0, u.mMO)(async () => {
                let { default: e } = await a.e("51080").then(a.bind(a, 519528));
                return (a) => (0, l.jsx)(e, { ...a, groupId: t });
            }),
                (0, n.Z_)();
        }, [t]),
        c = r.useCallback(() => {
            o.A.deleteGroup(t),
                (0, n.Z_)(),
                (0, d.YX)(s.uss.FRIENDS, { type: d.Z5.GROUP_MANAGED, value: d.IP.REMOVED_FROM_FAVORITES });
        }, [t]);
    return (0, l.jsxs)(u.W1t, {
        "aria-label": "Group Context Menu",
        navId: "overlay-group-context-menu",
        onClose: n.Z_,
        onSelect: i,
        children: [
            (0, l.jsx)(u.Drp, { id: "edit", label: "Edit Group", action: p }),
            (0, l.jsx)(u.Drp, { id: "delete", label: "Delete Group", action: c, color: "danger" }),
        ],
    });
}
