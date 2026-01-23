i.d(l, {
    default: () => d,
});
var t = i(627968),
    s = i(64700),
    e = i(397927),
    r = i(442433),
    u = i(50268),
    a = i(985018);

function d(n) {
    let { id: l, role: i, handleDeletePermission: d } = n,
        o = (0, u.A)({
            id: l,
            label: null == i ? a.intl.string(a.t["/AXYnE"]) : a.intl.string(a.t.sMsaLg),
        });
    return (
        s.useEffect(() => {
            null == d && null == o && (0, r.Z_)();
        }, [o, d]),
        (0, t.jsxs)(e.W1t, {
            "data-menu-all-icons": !0,
            navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
            "aria-label": null == i ? a.intl.string(a.t.pJMipx) : a.intl.string(a.t.ltedOh),
            onClose: r.Z_,
            onSelect: void 0,
            children: [
                null != d &&
                    (0, t.jsx)(e.rXV, {
                        children: (0, t.jsx)(e.Drp, {
                            id: "remove-permission",
                            color: "danger",
                            label: null == i ? a.intl.string(a.t.hXfRwD) : a.intl.string(a.t["T+3Adg"]),
                            icon: e.ucK,
                            action: d,
                        }),
                    }),
                null != o &&
                    (0, t.jsx)(e.rXV, {
                        children: o,
                    }),
            ],
        })
    );
}
