e.d(n, { Z: () => d });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(346479),
    a = e(665906),
    s = e(981631),
    o = e(388032);
function d(t) {
    var n, e;
    if (!(0, a.Xb)(t) || t.type !== s.d4z.PRIVATE_THREAD) return null;
    let d = null == (e = null == (n = t.threadMetadata) ? void 0 : n.invitable) || e;
    return (0, i.jsx)(r.S89, {
        id: 'toggle-thread-invitable',
        label: o.intl.string(o.t.s2rpNT),
        checked: d,
        action: () => l.Z.setInvitable(t, !d)
    });
}
