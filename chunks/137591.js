e.d(n, { Z: () => d });
var i = e(54381);
e(473749);
var a = e(481060),
    l = e(346479),
    r = e(665906),
    s = e(981631),
    o = e(388032);
function d(t) {
    var n, e;
    if (!(0, r.Xb)(t) || t.type !== s.d4z.PRIVATE_THREAD) return null;
    let d = null == (e = null == (n = t.threadMetadata) ? void 0 : n.invitable) || e;
    return (0, i.jsx)(a.S89, {
        id: "toggle-thread-invitable",
        label: o.intl.string(o.t.s2rpNf),
        checked: d,
        action: () => l.Z.setInvitable(t, !d),
    });
}
