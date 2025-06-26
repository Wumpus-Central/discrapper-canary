n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(346479),
    o = n(665906),
    a = n(981631),
    s = n(388032);
function c(e) {
    var t, n;
    if (!(0, o.Xb)(e) || e.type !== a.d4z.PRIVATE_THREAD) return null;
    let c = null == (n = null == (t = e.threadMetadata) ? void 0 : t.invitable) || n;
    return (0, r.jsx)(i.S89, {
        id: 'toggle-thread-invitable',
        label: s.intl.string(s.t.s2rpNT),
        checked: c,
        action: () => l.Z.setInvitable(e, !c)
    });
}
