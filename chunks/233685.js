n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(579806),
    a = n(435064),
    o = n(39604),
    c = n(442334),
    d = n(388032),
    u = n(301899),
    h = n(86656);
function m() {
    let e = (0, s.e7)([a.Z], () => a.Z.getSettings().storageLocation),
        t = async () => {
            let e = await r.Z.fileManager.showOpenDialog({
                properties: ['openDirectory', 'createDirectory']
            });
            e.length > 0 && o.T1(e[0]);
        };
    return (0, i.jsx)(l.hjN, {
        children: (0, i.jsx)(c.O, {
            title: d.intl.string(d.t.s4773N),
            note: d.intl.string(d.t.svjwGh),
            className: u.formItem,
            children: (0, i.jsx)(l.P3F, {
                className: h.selectControl,
                'aria-label': d.intl.formatToPlainString(d.t.iMONTk, { storageLocation: e }),
                onClick: t,
                children: (0, i.jsx)(l.oil, {
                    tabIndex: -1,
                    value: e,
                    editable: !1,
                    'aria-hidden': !0
                })
            })
        })
    });
}
