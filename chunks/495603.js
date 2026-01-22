i.d(l, {
    default: () => o,
});
var t = i(627968),
    s = i(64700),
    e = i(397927),
    r = i(442433),
    u = i(50268),
    d = i(985018);

function o(n) {
    let { id: l, role: i, handleDeletePermission: o } = n,
        a = (0, u.A)({
            id: l,
            label: null == i ? d.intl.string(d.t["/AXYnE"]) : d.intl.string(d.t.sMsaLg),
        });
    return (
        s.useEffect(() => {
            null == o && null == a && (0, r.Z_)();
        }, [a, o]),
        (0, t.jsxs)(e.W1t, {
            navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
            "aria-label": null == i ? d.intl.string(d.t.pJMipx) : d.intl.string(d.t.ltedOh),
            onClose: r.Z_,
            onSelect: void 0,
            children: [
                null != o &&
                    (0, t.jsx)(e.rXV, {
                        children: (0, t.jsx)(e.Drp, {
                            id: "remove-permission",
                            color: "danger",
                            label: null == i ? d.intl.string(d.t.hXfRwD) : d.intl.string(d.t["T+3Adg"]),
                            icon: e.ucK,
                            action: o,
                        }),
                    }),
                null != a &&
                    (0, t.jsx)(e.rXV, {
                        children: a,
                    }),
            ],
        })
    );
}
