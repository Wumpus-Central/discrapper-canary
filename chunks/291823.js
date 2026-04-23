"use strict";
n.d(t, { J: () => o });
var r = n(686956),
    i = n(71393),
    s = n(287809),
    a = n(248194);
function o() {
    let e = s.default.getCurrentUser();
    e?.isStaff() && null != i.A.getGuild(a.U) && r.A.requestMembers(a.U, "", 0, !1);
}
