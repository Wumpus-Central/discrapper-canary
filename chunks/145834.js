n.d(t, { $: () => s });
var r = n(70956),
    i = n(51144),
    l = n(388032);
let a = +r.Z.Millis.DAY;
function s(e) {
    var t, n, r;
    if ((0, i.EO)(e.user)) return l.intl.string(l.t.VaCdhQ);
    let s = null == (t = e.member) ? void 0 : t.joinedAt;
    return null == s
        ? l.intl.string(l.t.CQmzib)
        : null != e.member && e.member.roles.length > 0
          ? null != (r = null == (n = e.role) ? void 0 : n.name)
              ? r
              : l.intl.string(l.t["97/NdO"])
          : new Date().getTime() - Date.parse(s) < a
            ? l.intl.string(l.t.IKE48n)
            : l.intl.string(l.t.u0gUWt);
}
