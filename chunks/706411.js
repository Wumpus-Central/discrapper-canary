"use strict";
n.d(t, { Dg: () => a, YG: () => o, n5: () => l });
var i = n(17928),
    r = n(734057),
    s = n(473503);
let a = "No Mic";
function o(e) {
    return (0, i.bG)(
        [r.A],
        () => !!e.isForumPost() && null != e.parent_id && (r.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function l(e, t) {
    return (0, s.OA)(e, { enabled: t, allowArchived: !0 });
}
