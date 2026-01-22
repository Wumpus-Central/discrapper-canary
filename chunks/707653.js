i.d(n, { A: () => o });
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(867455),
    a = i(406704),
    d = i(652215),
    s = i(985018);
function o(t) {
    var n, i;
    if (!(0, a.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
    let o = null == (n = null == (i = t.threadMetadata) ? void 0 : i.invitable) || n;
    return (0, e.jsx)(r.sLh, {
        id: "toggle-thread-invitable",
        label: s.intl.string(s.t.s2rpNf),
        checked: o,
        action: () => l.A.setInvitable(t, !o),
    });
}
