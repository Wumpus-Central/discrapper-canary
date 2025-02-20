n.d(t, { Z: () => m });
var r = n(200651),
    i = n(442837),
    s = n(90641),
    a = n(615830),
    l = n(630759),
    o = n(838436),
    c = n(51331),
    d = n(726985),
    u = n(388032);
function m() {
    let e = (0, i.e7)([a.Z], () => a.Z.getPersistentCodesEnabled());
    return (0, r.jsx)(o.U, {
        setting: d.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, r.jsx)(c.Z, {
            value: e,
            onChange: s.Z.updatePersistentCodesEnabled,
            title: u.NW.string(u.t['opi/XF']),
            note: u.NW.format(u.t['/T+ZlJ'], { helpArticle: (0, l.aZ)() })
        })
    });
}
