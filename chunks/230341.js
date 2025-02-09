n.d(t, { Z: () => h });
var i = n(200651),
    s = n(442837),
    l = n(90641),
    r = n(615830),
    a = n(630759),
    o = n(838436),
    c = n(51331),
    d = n(726985),
    u = n(388032);
function h() {
    let e = (0, s.e7)([r.Z], () => r.Z.getPersistentCodesEnabled());
    return (0, i.jsx)(o.U, {
        setting: d.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, i.jsx)(c.Z, {
            value: e,
            onChange: l.Z.updatePersistentCodesEnabled,
            title: u.intl.string(u.t['opi/XF']),
            note: u.intl.format(u.t['/T+ZlJ'], { helpArticle: (0, a.aZ)() })
        })
    });
}
