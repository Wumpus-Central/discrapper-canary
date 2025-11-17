n.d(t, { Z: () => u });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(579806),
    s = n(435064),
    l = n(39604),
    c = n(388032);
function u() {
    let e = (0, i.e7)([s.Z], () => s.Z.getSettings().storageLocation),
        t = async () => {
            let e = await o.Z.fileManager.showOpenDialog({
                properties: ["openDirectory", "createDirectory"],
            });
            e.length > 0 && l.T1(e[0]);
        };
    return (0, r.jsx)(a.gNt, {
        label: c.intl.string(c.t.s4773E),
        description: c.intl.string(c.t.svjwGh),
        layout: "horizontal",
        children: (0, r.jsx)(a.P3F, {
            "aria-label": c.intl.formatToPlainString(c.t.iMONTj, { storageLocation: e }),
            onClick: t,
            children: (0, r.jsx)(a.oil, {
                tabIndex: -1,
                value: e,
                editable: !1,
                "aria-hidden": !0,
            }),
        }),
    });
}
