"use strict";
n.d(t, { t: () => l });
var r = n(734057),
    i = n(576705),
    a = n(652215);
function l(e) {
    let t = r.A.getChannel(e),
        n = t?.isPrivate(),
        l = t?.isForumChannel();
    return n || (i.A.can(a.xBc.ATTACH_FILES, t) && i.A.can(a.xBc.SEND_MESSAGES, t) && !l);
}
