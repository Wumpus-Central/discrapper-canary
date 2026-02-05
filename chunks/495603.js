i.d(l, { default: () => a });
var e = i(627968),
    t = i(64700),
    s = i(397927),
    r = i(442433),
    u = i(50268),
    c = i(985018);
function a(n) {
    let { id: l, role: i, handleDeletePermission: a } = n,
        d = (0, u.A)({ id: l, label: null == i ? c.intl.string(c.t["/AXYnE"]) : c.intl.string(c.t.sMsaLg) });
    return (
        t.useEffect(() => {
            null == a && null == d && (0, r.Z_)();
        }, [d, a]),
        (0, e.jsxs)(s.W1t, {
            "data-menu-migrated": !0,
            navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
            "aria-label": null == i ? c.intl.string(c.t.pJMipx) : c.intl.string(c.t.ltedOh),
            onClose: r.Z_,
            onSelect: void 0,
            children: [
                null != a &&
                    (0, e.jsx)(s.rXV, {
                        children: (0, e.jsx)(s.Drp, {
                            id: "remove-permission",
                            color: "danger",
                            label: null == i ? c.intl.string(c.t.hXfRwD) : c.intl.string(c.t["T+3Adg"]),
                            icon: s.ucK,
                            leadingAccessory: { type: "icon", icon: s.ucK },
                            action: a,
                        }),
                    }),
                null != d && (0, e.jsx)(s.rXV, { children: d }),
            ],
        })
    );
}
