n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(346479),
    r = n(665906),
    s = n(981631),
    o = n(388032);
function c(e) {
    var t, n;
    if (!(0, r.Xb)(e) || e.type !== s.d4z.PRIVATE_THREAD) return null;
    let c = null === (n = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === n || n;
    return (0, i.jsx)(l.S89, {
        id: 'toggle-thread-invitable',
        label: o.intl.string(o.t.s2rpNT),
        checked: c,
        action: () => a.Z.setInvitable(e, !c)
    });
}
