e.d(t, { Z: () => d });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(346479),
    a = e(665906),
    o = e(981631),
    u = e(388032);
function d(n) {
    var t, e;
    if (!(0, a.Xb)(n) || n.type !== o.d4z.PRIVATE_THREAD) return null;
    let d = null == (e = null == (t = n.threadMetadata) ? void 0 : t.invitable) || e;
    return (0, i.jsx)(r.S89, {
        id: 'toggle-thread-invitable',
        label: u.intl.string(u.t.s2rpNT),
        checked: d,
        action: () => l.Z.setInvitable(n, !d)
    });
}
