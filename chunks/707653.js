e.d(n, { A: () => o });
var i = e(477900);
e(582128);
var r = e(477782),
    l = e(867455),
    a = e(406704),
    d = e(652215),
    s = e(375708);
function o(t) {
    if (!(0, a.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
    let n = t.threadMetadata?.invitable ?? !0;
    return (0, i.jsx)(r.sL, {
        id: "toggle-thread-invitable",
        label: s.intl.string(s.t.s2rpNf),
        checked: n,
        action: () => l.A.setInvitable(t, !n),
    });
}
