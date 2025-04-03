n.d(t, { $: () => a });
var r = n(70956),
    i = n(51144),
    l = n(388032);
let o = +r.Z.Millis.DAY;
function a(e) {
    var t, n, r;
    if ((0, i.EO)(e.user)) return l.NW.string(l.t.VaCdhY);
    let a = null == (t = e.member) ? void 0 : t.joinedAt;
    return null == a ? l.NW.string(l.t.CQmziY) : null != e.member && e.member.roles.length > 0 ? (null != (r = null == (n = e.role) ? void 0 : n.name) ? r : l.NW.string(l.t['97/NdH'])) : new Date().getTime() - Date.parse(a) < o ? l.NW.string(l.t.IKE48v) : l.NW.string(l.t.u0gUWl);
}
