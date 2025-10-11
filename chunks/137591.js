e.d(n, { Z: () => d });
var i = e(951288);
e(647438);
var l = e(481060),
    a = e(346479),
    r = e(665906),
    o = e(981631),
    s = e(388032);
function d(t) {
    var n, e;
    if (!(0, r.Xb)(t) || t.type !== o.d4z.PRIVATE_THREAD) return null;
    let d = null == (e = null == (n = t.threadMetadata) ? void 0 : n.invitable) || e;
    return (0, i.jsx)(l.S89, {
        id: "toggle-thread-invitable",
        label: s.intl.string(s.t.s2rpNT),
        checked: d,
        action: () => a.Z.setInvitable(t, !d),
    });
}
