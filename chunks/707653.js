n.d(e, { A: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(867455),
    a = n(406704),
    s = n(652215),
    d = n(985018);
function o(t) {
    if (!(0, a.H_)(t) || t.type !== s.rbe.PRIVATE_THREAD) return null;
    let e = t.threadMetadata?.invitable ?? !0;
    return (0, i.jsx)(r.sLh, {
        id: "toggle-thread-invitable",
        label: d.intl.string(d.t.s2rpNf),
        checked: e,
        action: () => l.A.setInvitable(t, !e),
    });
}
