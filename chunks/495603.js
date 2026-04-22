i.d(l, { default: () => c });
var e = i(627968),
    t = i(64700),
    s = i(861672),
    r = i(477782),
    u = i(241326),
    a = i(442433),
    d = i(50268),
    o = i(985018);
function c(n) {
    let { id: l, role: i, handleDeletePermission: c } = n,
        p = (0, d.A)({ id: l, label: null == i ? o.intl.string(o.t["/AXYnE"]) : o.intl.string(o.t.sMsaLg) });
    return (
        t.useEffect(() => {
            null == c && null == p && (0, a.Z_)();
        }, [p, c]),
        (0, e.jsxs)(s.W, {
            "data-menu-migrated": !0,
            navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
            "aria-label": null == i ? o.intl.string(o.t.pJMipx) : o.intl.string(o.t.ltedOh),
            onClose: a.Z_,
            onSelect: void 0,
            children: [
                null != c &&
                    (0, e.jsx)(r.rX, {
                        children: (0, e.jsx)(r.Dr, {
                            id: "remove-permission",
                            color: "danger",
                            label: null == i ? o.intl.string(o.t.hXfRwD) : o.intl.string(o.t["T+3Adg"]),
                            icon: u.u,
                            leadingAccessory: { type: "icon", icon: u.u },
                            action: c,
                        }),
                    }),
                null != p && (0, e.jsx)(r.rX, { children: p }),
            ],
        })
    );
}
