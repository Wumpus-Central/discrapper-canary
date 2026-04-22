"use strict";
n.d(t, { A: () => r });
var a = n(287809),
    i = n(622543);
function r(e) {
    let t = a.default.getCurrentUser();
    return null == t ? null : null != e ? i.A.getGuildMemberProfile(t.id, e) : i.A.getUserProfile(t.id);
}
