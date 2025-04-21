n.d(t, { Z: () => m });
var i = n(200651),
    r = n(442837),
    s = n(90641),
    l = n(615830),
    a = n(630759),
    o = n(838436),
    c = n(51331),
    d = n(726985),
    u = n(388032);
function m() {
    let e = (0, r.e7)([l.Z], () => l.Z.getPersistentCodesEnabled());
    return (0, i.jsx)(o.U, {
        setting: d.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, i.jsx)(c.Z, {
            value: e,
            onChange: s.Z.updatePersistentCodesEnabled,
            title: u.intl.string(u.t['opi/XF']),
            note: u.intl.format(u.t['/T+ZlJ'], { helpArticle: (0, a.aZ)() })
        })
    });
}
