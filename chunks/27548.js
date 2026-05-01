"use strict";
n.d(t, { qA: () => s }), n(734057);
var i = n(498642),
    r = n(652215);
function s(e) {
    let t = i.A.getMemberCount(e?.guild_id) ?? 0;
    return null != e && e.type !== r.rbe.DM && e.type !== r.rbe.GROUP_DM && t >= 1e4;
}
