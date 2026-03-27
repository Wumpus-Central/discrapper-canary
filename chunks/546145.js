"use strict";
n.d(t, { A: () => a });
var r = n(287809),
    i = n(622543);
function a(e) {
    let t = r.default.getCurrentUser();
    return null == t ? null : null != e ? i.A.getGuildMemberProfile(t.id, e) : i.A.getUserProfile(t.id);
}
