"use strict";
n.d(t, { c: () => r });
var i = n(734057);
function r(e, t) {
    let n = i.A.getChannel(t);
    return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find((t) => t.id === e.id);
}
