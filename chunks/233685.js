n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(579806),
    a = n(435064),
    o = n(39604),
    c = n(442334),
    d = n(388032),
    u = n(301899),
    m = n(86656);
function h() {
    let e = (0, s.e7)([a.Z], () => a.Z.getSettings().storageLocation),
        t = async () => {
            let e = await l.Z.fileManager.showOpenDialog({
                properties: ['openDirectory', 'createDirectory']
            });
            e.length > 0 && o.T1(e[0]);
        };
    return (0, i.jsx)(r.hjN, {
        children: (0, i.jsx)(c.O, {
            title: d.intl.string(d.t.s4773N),
            note: d.intl.string(d.t.svjwGh),
            className: u.formItem,
            children: (0, i.jsx)(r.P3F, {
                className: m.selectControl,
                'aria-label': d.intl.formatToPlainString(d.t.iMONTk, { storageLocation: e }),
                onClick: t,
                children: (0, i.jsx)(r.oil, {
                    tabIndex: -1,
                    value: e,
                    editable: !1,
                    'aria-hidden': !0
                })
            })
        })
    });
}
