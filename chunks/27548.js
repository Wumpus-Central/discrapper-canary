"use strict";
n.d(t, { qA: () => s }), n(734057);
var r = n(498642),
    i = n(652215);
function s(e) {
    let t = r.A.getMemberCount(e?.guild_id) ?? 0;
    return null != e && e.type !== i.rbe.DM && e.type !== i.rbe.GROUP_DM && t >= 1e4;
}
