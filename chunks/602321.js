l.d(a, { default: () => p });
var t = l(627968),
    o = l(64700),
    r = l(980707),
    u = l(477782),
    n = l(442433),
    s = l(545059),
    d = l(810412),
    c = l(521398),
    i = l(652215);
function p(e) {
    let { groupId: a, onSelect: l } = e,
        p = o.useCallback(() => {
            (0, c.R)({ groupId: a }), (0, n.Z_)();
        }, [a]),
        _ = o.useCallback(() => {
            s.A.deleteGroup(a),
                (0, n.Z_)(),
                (0, d.YX)(i.uss.FRIENDS, { type: d.Z5.GROUP_MANAGED, value: d.IP.REMOVED_FROM_FAVORITES });
        }, [a]);
    return (0, t.jsxs)(r.W, {
        "aria-label": "Group Context Menu",
        navId: "overlay-group-context-menu",
        onClose: n.Z_,
        onSelect: l,
        children: [
            (0, t.jsx)(u.Dr, { id: "edit", label: "Edit Group", action: p }),
            (0, t.jsx)(u.Dr, { id: "delete", label: "Delete Group", action: _, color: "danger" }),
        ],
    });
}
