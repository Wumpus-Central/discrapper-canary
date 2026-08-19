n.d(e, { A: () => o });
var i = n(477900);
n(582128);
var r = n(477782),
    l = n(867455),
    a = n(406704),
    d = n(652215),
    s = n(375708);
function o(t) {
    if (!(0, a.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
    let e = t.threadMetadata?.invitable ?? !0;
    return (0, i.jsx)(r.sL, {
        id: "toggle-thread-invitable",
        label: s.intl.string(s.t.s2rpNf),
        checked: e,
        action: () => l.A.setInvitable(t, !e),
    });
}
