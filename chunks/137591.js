n.d(e, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(346479),
    l = n(665906),
    s = n(981631),
    o = n(388032);
function d(t) {
    var e, n;
    if (!(0, l.Xb)(t) || t.type !== s.d4z.PRIVATE_THREAD) return null;
    let d = null == (n = null == (e = t.threadMetadata) ? void 0 : e.invitable) || n;
    return (0, i.jsx)(r.S89, {
        id: 'toggle-thread-invitable',
        label: o.NW.string(o.t.s2rpNT),
        checked: d,
        action: () => a.Z.setInvitable(t, !d)
    });
}
