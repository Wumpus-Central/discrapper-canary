n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(579806),
    l = n(435064),
    o = n(39604),
    c = n(442334),
    d = n(388032),
    u = n(802454),
    m = n(948865);
function g() {
    let e = (0, i.e7)([l.Z], () => l.Z.getSettings().storageLocation),
        t = async () => {
            let e = await a.Z.fileManager.showOpenDialog({
                properties: ['openDirectory', 'createDirectory']
            });
            e.length > 0 && o.T1(e[0]);
        };
    return (0, r.jsx)(s.hjN, {
        children: (0, r.jsx)(c.O, {
            title: d.NW.string(d.t.s4773N),
            note: d.NW.string(d.t.svjwGh),
            className: u.formItem,
            children: (0, r.jsx)(s.P3F, {
                className: m.selectControl,
                'aria-label': d.NW.formatToPlainString(d.t.iMONTk, { storageLocation: e }),
                onClick: t,
                children: (0, r.jsx)(s.oil, {
                    tabIndex: -1,
                    value: e,
                    editable: !1,
                    'aria-hidden': !0
                })
            })
        })
    });
}
