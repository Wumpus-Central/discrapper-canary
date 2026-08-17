i.d(l, { default: () => u });
var e = i(477900),
    s = i(582128),
    t = i(980707),
    r = i(477782),
    a = i(241326),
    o = i(442433),
    c = i(50268),
    d = i(375708);
function u(n) {
    let { id: l, role: i, handleDeletePermission: u } = n,
        p = (0, c.A)({ id: l, label: null == i ? d.intl.string(d.t["/AXYnE"]) : d.intl.string(d.t.sMsaLg) });
    return (
        s.useEffect(() => {
            null == u && null == p && (0, o.Z_)();
        }, [p, u]),
        (0, e.jsxs)(t.W, {
            "data-menu-migrated": !0,
            navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
            "aria-label": null == i ? d.intl.string(d.t.pJMipx) : d.intl.string(d.t.ltedOh),
            onClose: o.Z_,
            onSelect: void 0,
            children: [
                null != u &&
                    (0, e.jsx)(r.rX, {
                        children: (0, e.jsx)(r.Dr, {
                            id: "remove-permission",
                            color: "danger",
                            label: null == i ? d.intl.string(d.t.hXfRwD) : d.intl.string(d.t["T+3Adg"]),
                            icon: a.TrashIcon,
                            leadingAccessory: { type: "icon", icon: a.TrashIcon },
                            action: u,
                        }),
                    }),
                null != p && (0, e.jsx)(r.rX, { children: p }),
            ],
        })
    );
}
