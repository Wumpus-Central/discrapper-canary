i.d(n, { Z: () => s });
var e = i(951288);
i(647438);
var l = i(481060),
    r = i(346479),
    a = i(665906),
    d = i(981631),
    o = i(388032);
function s(t) {
    var n, i;
    if (!(0, a.Xb)(t) || t.type !== d.d4z.PRIVATE_THREAD) return null;
    let s = null == (i = null == (n = t.threadMetadata) ? void 0 : n.invitable) || i;
    return (0, e.jsx)(l.S89, {
        id: "toggle-thread-invitable",
        label: o.intl.string(o.t.s2rpNT),
        checked: s,
        action: () => r.Z.setInvitable(t, !s),
    });
}
