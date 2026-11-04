var l = a(477900),
    n = a(582128),
    r = a(192308),
    d = a(165862),
    u = a(477782),
    o = a(442433),
    i = a(545059);
a.d(
    t,
    {},
    {
        default: function (e) {
            let { groupId: t, onSelect: s } = e,
                c = n.useCallback(() => {
                    ((0, r.mM)(async () => {
                        let { default: e } = await a.e(51080).then(a.bind(a, 297147));
                        return (a) => (0, l.jsx)(e, { ...a, groupId: t });
                    }),
                        (0, o.Z_)());
                }, [t]),
                p = n.useCallback(() => {
                    (i.A.deleteGroup(t), (0, o.Z_)());
                }, [t]);
            return (0, l.jsxs)(d.W, {
                "data-menu-migrated": !0,
                "aria-label": "Group Context Menu",
                navId: "group-context-menu",
                onClose: o.Z_,
                onSelect: s,
                children: [
                    (0, l.jsx)(u.Dr, { id: "edit", label: "Edit Group", action: c }),
                    (0, l.jsx)(u.Dr, { id: "delete", label: "Delete Group", action: p, color: "danger" }),
                ],
            });
        },
    },
);
