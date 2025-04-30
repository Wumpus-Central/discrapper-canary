e.d(t, { Z: () => d });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(346479),
    a = e(665906),
    o = e(981631),
    s = e(388032);
function d(n) {
    var t, e;
    if (!(0, a.Xb)(n) || n.type !== o.d4z.PRIVATE_THREAD) return null;
    let d = null == (e = null == (t = n.threadMetadata) ? void 0 : t.invitable) || e;
    return (0, i.jsx)(l.S89, {
        id: 'toggle-thread-invitable',
        label: s.intl.string(s.t.s2rpNT),
        checked: d,
        action: () => r.Z.setInvitable(n, !d)
    });
}
