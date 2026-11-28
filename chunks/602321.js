var a = l(477900),
    n = l(582128),
    r = l(165862),
    u = l(477782),
    o = l(442433),
    s = l(545059),
    c = l(810412),
    d = l(521398),
    i = l(652215),
    p = l(313855),
    _ = l(792996);
l.d(
    t,
    {},
    {
        default: function (e) {
            let { groupId: t, onSelect: l } = e,
                b = n.useCallback(() => {
                    ((0, d.R)({ groupId: t }), (0, o.Z_)());
                }, [t]),
                h = n.useCallback(() => {
                    (s.A.deleteGroup(t),
                        (0, o.Z_)(),
                        (0, c.YX)(i.uss.FRIENDS, { type: c.Z5.GROUP_MANAGED, value: c.IP.REMOVED_FROM_FAVORITES }));
                }, [t]);
            return (0, a.jsxs)(r.W, {
                "aria-label": "Group Context Menu",
                navId: "overlay-group-context-menu",
                onClose: o.Z_,
                onSelect: l,
                children: [
                    (0, a.jsx)(u.Dr, { id: "edit", label: _.intl.string(p.default.ncTtw1), action: b }),
                    (0, a.jsx)(u.Dr, { id: "delete", label: "Delete Group", action: h, color: "danger" }),
                ],
            });
        },
    },
);
