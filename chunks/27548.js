n.d(t, { qA: () => s }), n(734057);
var r = n(498642),
    i = n(652215);
let a = 10000;
function s(e) {
    var t;
    let n = null != (t = r.A.getMemberCount(null == e ? void 0 : e.guild_id)) ? t : 0;
    return null != e && e.type !== i.rbe.DM && e.type !== i.rbe.GROUP_DM && n >= a;
}
