n.d(t, { $: () => s });
var i = n(70956),
    l = n(51144),
    a = n(388032);
let r = 1 * i.Z.Millis.DAY;
function s(e) {
    var t, n, i;
    if ((0, l.EO)(e.user)) return a.intl.string(a.t.VaCdhY);
    let s = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
    return null == s ? a.intl.string(a.t.CQmziY) : null != e.member && e.member.roles.length > 0 ? (null !== (i = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : a.intl.string(a.t['97/NdH'])) : new Date().getTime() - Date.parse(s) < r ? a.intl.string(a.t.IKE48v) : a.intl.string(a.t.u0gUWl);
}
