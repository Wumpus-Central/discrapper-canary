n.d(t, { Z: () => f });
var r = n(951288),
    i = n(442837),
    a = n(90641),
    o = n(615830),
    s = n(630759),
    l = n(838436),
    c = n(51331),
    u = n(726985),
    d = n(388032);
function f() {
    let e = (0, i.e7)([o.Z], () => o.Z.getPersistentCodesEnabled());
    return (0, r.jsx)(l.U, {
        setting: u.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, r.jsx)(c.Z, {
            value: e,
            onChange: a.Z.updatePersistentCodesEnabled,
            title: d.intl.string(d.t["opi/XF"]),
            note: d.intl.format(d.t["/T+ZlJ"], { helpArticle: (0, s.aZ)() }),
        }),
    });
}
