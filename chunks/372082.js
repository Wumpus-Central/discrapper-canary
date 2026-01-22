n.d(t, { A: () => u });
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(77729),
    o = n(274372),
    l = n(399925),
    c = n(985018);
function u() {
    let e = (0, i.bG)([o.A], () => o.A.getSettings().storageLocation),
        t = async () => {
            let e = await s.A.fileManager.showOpenDialog({
                properties: ["openDirectory", "createDirectory"],
            });
            e.length > 0 && l.HU(e[0]);
        };
    return (0, r.jsx)(a.D0$, {
        label: c.intl.string(c.t.s4773E),
        description: c.intl.string(c.t.svjwGh),
        layout: "horizontal",
        children: (0, r.jsx)(a.DUT, {
            "aria-label": c.intl.formatToPlainString(c.t.iMONTj, { storageLocation: e }),
            onClick: t,
            children: (0, r.jsx)(a.ksK, {
                tabIndex: -1,
                value: e,
                editable: !1,
                "aria-hidden": !0,
            }),
        }),
    });
}
