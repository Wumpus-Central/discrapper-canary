n.d(t, { $: () => o });
var r = n(70956),
    i = n(51144),
    l = n(388032);
let a = +r.Z.Millis.DAY;
function o(e) {
    var t, n, r;
    if ((0, i.EO)(e.user)) return l.intl.string(l.t.VaCdhY);
    let o = null == (t = e.member) ? void 0 : t.joinedAt;
    return null == o ? l.intl.string(l.t.CQmziY) : null != e.member && e.member.roles.length > 0 ? (null != (r = null == (n = e.role) ? void 0 : n.name) ? r : l.intl.string(l.t['97/NdH'])) : new Date().getTime() - Date.parse(o) < a ? l.intl.string(l.t.IKE48v) : l.intl.string(l.t.u0gUWl);
}
