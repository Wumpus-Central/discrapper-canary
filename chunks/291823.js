"use strict";
n.d(t, { J: () => o });
var r = n(686956),
    i = n(71393),
    a = n(287809),
    s = n(248194);
function o() {
    let e = a.default.getCurrentUser();
    e?.isStaff() && null != i.A.getGuild(s.U) && r.A.requestMembers(s.U, "", 0, !1);
}
