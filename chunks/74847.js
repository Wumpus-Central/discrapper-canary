"use strict";
r.d(t, { t: () => s });
var n = r(734057),
    i = r(576705),
    a = r(652215);
function s(e) {
    let t = n.A.getChannel(e),
        r = t?.isPrivate(),
        s = t?.isForumChannel();
    return r || (i.A.can(a.xBc.ATTACH_FILES, t) && i.A.can(a.xBc.SEND_MESSAGES, t) && !s);
}
