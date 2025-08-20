n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(579806),
    s = n(435064),
    l = n(39604),
    c = n(442334),
    u = n(388032),
    d = n(749799),
    f = n(441849);
function _() {
    let e = (0, i.e7)([s.Z], () => s.Z.getSettings().storageLocation),
        t = async () => {
            let e = await o.Z.fileManager.showOpenDialog({
                properties: ["openDirectory", "createDirectory"],
            });
            e.length > 0 && l.T1(e[0]);
        };
    return (0, r.jsx)(a.hjN, {
        children: (0, r.jsx)(c.O, {
            title: u.intl.string(u.t.s4773N),
            note: u.intl.string(u.t.svjwGh),
            className: d.formItem,
            children: (0, r.jsx)(a.P3F, {
                className: f.selectControl,
                "aria-label": u.intl.formatToPlainString(u.t.iMONTk, { storageLocation: e }),
                onClick: t,
                children: (0, r.jsx)(a.oil, {
                    tabIndex: -1,
                    value: e,
                    editable: !1,
                    "aria-hidden": !0,
                }),
            }),
        }),
    });
}
