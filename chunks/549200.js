n.d(t, { A: () => _ });
var i = n(627968),
    s = n(311907),
    r = n(936388),
    a = n(714763),
    l = n(814278),
    o = n(871930),
    c = n(578746),
    d = n(531525),
    u = n(985018);
function _() {
    let e = (0, s.bG)([a.A], () => a.A.getPersistentCodesEnabled());
    return (0, i.jsx)(o.h, {
        setting: d.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, i.jsx)(c.Ay, {
            value: e,
            onChange: r.A.updatePersistentCodesEnabled,
            title: u.intl.string(u.t["opi/XK"]),
            note: u.intl.format(u.t["/T+ZlP"], { helpArticle: (0, l.Lu)() }),
        }),
    });
}
