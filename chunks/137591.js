t.d(e, { Z: () => d });
var i = t(255367);
t(73800);
var r = t(481060),
    a = t(346479),
    l = t(665906),
    o = t(981631),
    s = t(388032);
function d(n) {
    var e, t;
    if (!(0, l.Xb)(n) || n.type !== o.d4z.PRIVATE_THREAD) return null;
    let d = null == (t = null == (e = n.threadMetadata) ? void 0 : e.invitable) || t;
    return (0, i.jsx)(r.S89, {
        id: 'toggle-thread-invitable',
        label: s.intl.string(s.t.s2rpNT),
        checked: d,
        action: () => a.Z.setInvitable(n, !d)
    });
}
