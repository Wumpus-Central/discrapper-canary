n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    s = n(442837),
    r = n(90641),
    a = n(615830),
    l = n(630759),
    o = n(838436),
    c = n(51331),
    d = n(726985),
    u = n(388032);
function m() {
    let e = (0, s.e7)([a.Z], () => a.Z.getPersistentCodesEnabled());
    return (0, i.jsx)(o.U, {
        setting: d.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, i.jsx)(c.Z, {
            value: e,
            onChange: r.Z.updatePersistentCodesEnabled,
            title: u.intl.string(u.t['opi/XF']),
            note: u.intl.format(u.t['/T+ZlJ'], { helpArticle: (0, l.aZ)() })
        })
    });
}
