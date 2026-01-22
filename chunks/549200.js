n.d(t, { A: () => f });
var r = n(627968),
    i = n(311907),
    a = n(936388),
    s = n(714763),
    o = n(814278),
    l = n(871930),
    c = n(578746),
    u = n(531525),
    d = n(985018);
function f() {
    let e = (0, i.bG)([s.A], () => s.A.getPersistentCodesEnabled());
    return (0, r.jsx)(l.h, {
        setting: u.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, r.jsx)(c.Ay, {
            value: e,
            onChange: a.A.updatePersistentCodesEnabled,
            title: d.intl.string(d.t["opi/XK"]),
            note: d.intl.format(d.t["/T+ZlP"], { helpArticle: (0, o.Lu)() }),
        }),
    });
}
