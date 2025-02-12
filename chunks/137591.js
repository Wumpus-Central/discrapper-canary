e.d(t, { Z: () => s });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(346479),
    r = e(665906),
    d = e(981631),
    o = e(388032);
function s(n) {
    var t, e;
    if (!(0, r.Xb)(n) || n.type !== d.d4z.PRIVATE_THREAD) return null;
    let s = null === (e = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === e || e;
    return (0, i.jsx)(a.S89, {
        id: 'toggle-thread-invitable',
        label: o.intl.string(o.t.s2rpNT),
        checked: s,
        action: () => l.Z.setInvitable(n, !s)
    });
}
